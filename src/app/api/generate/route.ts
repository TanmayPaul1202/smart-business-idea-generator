import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/server-auth";
import { DEMO_RESULT } from "@/lib/demo-data";

/**
 * POST /api/generate
 *
 * Body: { prompt, industry?, budget?, audience?, market? }
 *
 * If IBM_API_KEY and IBM_PROJECT_ID are set in env, this calls the real
 * IBM watsonx.ai Granite endpoint. Otherwise it returns enriched demo data
 * so the UI always works without credentials during development.
 */
export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser();
    if (!auth) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

    const { prompt, industry, budget, audience, market } = await req.json();
    if (!prompt || String(prompt).trim().length < 10) {
      return NextResponse.json({ error: "Prompt must be at least 10 characters." }, { status: 400 });
    }

    const ibmApiKey = process.env.IBM_API_KEY;
    const ibmProjectId = process.env.IBM_PROJECT_ID;

    let result;

    if (ibmApiKey && ibmProjectId) {
      result = await callIBMGranite({ prompt, industry, budget, audience, market, ibmApiKey, ibmProjectId });
    } else {
      // Demo mode — return DEMO_RESULT enriched with the user's prompt
      result = {
        ...DEMO_RESULT,
        _source: "demo",
        _prompt: prompt,
        _industry: industry ?? DEMO_RESULT.businessCanvas.customerSegments[0],
      };
    }

    return NextResponse.json({ result });
  } catch (err) {
    console.error("[generate]", err);
    return NextResponse.json({ error: "Generation failed. Please try again." }, { status: 500 });
  }
}

// ── IBM watsonx.ai integration ────────────────────────────────────────────

async function callIBMGranite(params: {
  prompt: string;
  industry?: string;
  budget?: string;
  audience?: string;
  market?: string;
  ibmApiKey: string;
  ibmProjectId: string;
}) {
  const { prompt, industry, budget, audience, market, ibmApiKey, ibmProjectId } = params;

  // 1. Exchange API key for IAM access token
  const iamRes = await fetch("https://iam.cloud.ibm.com/identity/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ibm:params:oauth:grant-type:apikey",
      apikey: ibmApiKey,
    }),
  });
  if (!iamRes.ok) throw new Error(`IBM IAM error: ${iamRes.status}`);
  const { access_token } = await iamRes.json();

  // 2. Build structured prompt for granite-13b-chat-v2
  const systemPrompt = `You are an expert business analyst and startup advisor powered by IBM Granite AI. 
Analyze the business idea and return a detailed JSON object with the following structure exactly:
{
  "name": "Product name",
  "tagline": "One-line value proposition",
  "description": "2-3 sentence description",
  "problem": "The core problem being solved",
  "solution": "How this solution addresses the problem",
  "usp": "Unique selling proposition",
  "marketSize": 1000000000,
  "cagr": 15.5,
  "targetMarket": "Primary target market description",
  "innovationScore": 85,
  "feasibilityScore": 80,
  "marketReadinessScore": 75,
  "industry": "${industry ?? "Technology"}",
  "investmentEstimate": { "min": 500000, "max": 2000000, "round": "Seed" },
  "revenueModel": [{ "type": "SaaS", "description": "...", "revenue": "..." }],
  "swot": {
    "strengths": ["..."],
    "weaknesses": ["..."],
    "opportunities": ["..."],
    "threats": ["..."]
  },
  "insights": ["key insight 1", "key insight 2"],
  "trends": [{ "name": "Trend Name", "growth": 75, "direction": "up" }]
}
Return only valid JSON, no markdown, no explanation.`;

  const userMessage = `Analyze this business idea:
"${prompt}"
Context: Industry: ${industry ?? "Any"} | Budget: ${budget ?? "Flexible"} | Audience: ${audience ?? "General"} | Market: ${market ?? "Global"}`;

  const watsonxRes = await fetch(
    `https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        model_id: "ibm/granite-13b-chat-v2",
        project_id: ibmProjectId,
        input: `<|system|>\n${systemPrompt}\n<|user|>\n${userMessage}\n<|assistant|>`,
        parameters: {
          decoding_method: "greedy",
          max_new_tokens: 2000,
          min_new_tokens: 200,
          stop_sequences: [],
          repetition_penalty: 1.05,
        },
      }),
    }
  );

  if (!watsonxRes.ok) {
    const errText = await watsonxRes.text();
    throw new Error(`IBM watsonx error ${watsonxRes.status}: ${errText}`);
  }

  const watsonxData = await watsonxRes.json();
  const rawText: string = watsonxData?.results?.[0]?.generated_text ?? "{}";

  // Extract JSON from the response (model may wrap in markdown)
  const jsonMatch = rawText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in IBM Granite response");

  const parsed = JSON.parse(jsonMatch[0]);
  return { ...DEMO_RESULT, ...parsed, _source: "ibm-granite" };
}
