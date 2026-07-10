import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { getAuthUser } from "@/lib/server-auth";
import { ideas } from "@/lib/db";

// GET /api/ideas — list all ideas for the authenticated user
export async function GET() {
  try {
    const auth = await getAuthUser();
    if (!auth) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

    const userIdeas = ideas.byUser(auth.userId);
    return NextResponse.json({ ideas: userIdeas });
  } catch (err) {
    console.error("[ideas GET]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

// POST /api/ideas — save a new idea
export async function POST(req: NextRequest) {
  try {
    const auth = await getAuthUser();
    if (!auth) return NextResponse.json({ error: "Unauthenticated." }, { status: 401 });

    const body = await req.json();
    const { name, tagline, industry, score, prompt, result } = body;

    if (!name || !tagline) {
      return NextResponse.json({ error: "name and tagline are required." }, { status: 400 });
    }

    const idea = {
      id: uuid(),
      userId: auth.userId,
      name: String(name),
      tagline: String(tagline),
      industry: String(industry ?? ""),
      score: Number(score ?? 0),
      prompt: String(prompt ?? ""),
      status: "saved" as const,
      result: result ?? {},
      createdAt: new Date().toISOString(),
    };

    ideas.create(idea);
    return NextResponse.json({ idea }, { status: 201 });
  } catch (err) {
    console.error("[ideas POST]", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
