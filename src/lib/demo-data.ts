export const DEMO_IDEAS = [
  {
    id: "1",
    name: "EcoTrack AI",
    tagline: "Carbon footprint intelligence for enterprises",
    industry: "CleanTech",
    score: 92,
    date: "2025-01-15",
    status: "saved",
    color: "indigo",
  },
  {
    id: "2",
    name: "MediSync",
    tagline: "AI-powered patient care coordination platform",
    industry: "HealthTech",
    score: 88,
    date: "2025-01-14",
    status: "saved",
    color: "purple",
  },
  {
    id: "3",
    name: "SkillForge",
    tagline: "Personalized upskilling for the future workforce",
    industry: "EdTech",
    score: 85,
    date: "2025-01-13",
    status: "saved",
    color: "violet",
  },
  {
    id: "4",
    name: "AgriSense",
    tagline: "Precision agriculture via satellite & ML",
    industry: "AgriTech",
    score: 79,
    date: "2025-01-12",
    status: "saved",
    color: "indigo",
  },
  {
    id: "5",
    name: "FinGuard",
    tagline: "Real-time fraud detection for SMEs",
    industry: "FinTech",
    score: 91,
    date: "2025-01-11",
    status: "saved",
    color: "purple",
  },
];

export const DEMO_RESULT = {
  id: "result-001",
  name: "EcoTrack AI",
  tagline: "Carbon Footprint Intelligence for Modern Enterprises",
  description:
    "An AI-powered sustainability platform that helps enterprises track, analyze, and reduce their carbon footprint using real-time data from IoT sensors, supply chains, and operational systems.",
  problem:
    "Enterprise sustainability teams lack real-time visibility into their carbon emissions across complex supply chains and operations, making ESG compliance and net-zero goals nearly impossible to achieve efficiently.",
  solution:
    "EcoTrack AI aggregates data from IoT sensors, ERP systems, and supply chain partners to provide a unified carbon intelligence dashboard. IBM Granite models analyze patterns and recommend actionable decarbonization strategies with ROI projections.",
  usp: "First platform to combine real-time IoT data fusion with IBM Granite predictive AI for automated sustainability reporting that meets all major ESG frameworks (GRI, SASB, TCFD) simultaneously.",
  marketSize: 45_000_000_000,
  cagr: 22.5,
  targetMarket: "Fortune 5000 enterprises with 500+ employees",
  innovationScore: 94,
  feasibilityScore: 88,
  marketReadinessScore: 82,
  investmentEstimate: { min: 2_500_000, max: 8_000_000, round: "Series A" },
  revenueModel: [
    {
      type: "SaaS Subscription",
      description: "Per-seat licensing based on data volume",
      revenue: "$50K–$500K ARR per enterprise",
    },
    {
      type: "Professional Services",
      description: "Implementation, training, and custom integrations",
      revenue: "$50K–$200K per project",
    },
    {
      type: "Carbon Credit Marketplace",
      description: "Commission on carbon credit transactions",
      revenue: "3-5% per transaction",
    },
  ],
  customerPersona: [
    {
      name: "Chief Sustainability Officer",
      pain: "Manual reporting, regulatory pressure, lack of real-time data",
      gain: "Automated ESG reports, real-time dashboards, predictive insights",
    },
    {
      name: "CFO / Finance Executive",
      pain: "Unclear ROI on sustainability investments, compliance costs",
      gain: "Cost savings from efficiency gains, regulatory penalty avoidance",
    },
    {
      name: "Supply Chain Director",
      pain: "Supplier emissions visibility, scope 3 tracking",
      gain: "End-to-end supply chain carbon mapping",
    },
  ],
  swot: {
    strengths: [
      "IBM Granite AI accuracy and trust",
      "First-mover advantage in unified ESG platform",
      "Strong regulatory tailwinds (SEC climate rules)",
      "Scalable cloud architecture",
    ],
    weaknesses: [
      "High enterprise sales cycle (6-18 months)",
      "Requires extensive IoT infrastructure",
      "Complex data integration requirements",
    ],
    opportunities: [
      "$45B market growing at 22.5% CAGR",
      "Mandatory ESG reporting in EU/US markets",
      "Carbon credit market expansion",
      "SME market yet to be tapped",
    ],
    threats: [
      "Big players (SAP, Salesforce) entering market",
      "Regulatory uncertainty in some regions",
      "Data privacy concerns",
    ],
  },
  competitors: [
    {
      name: "Salesforce Net Zero Cloud",
      marketShare: 18,
      strengths: ["Brand recognition", "CRM integration"],
      weaknesses: ["High cost", "Limited IoT"],
      pricing: "$180/user/month",
    },
    {
      name: "Microsoft Sustainability",
      marketShare: 15,
      strengths: ["Azure integration", "Enterprise reach"],
      weaknesses: ["Generic features", "No carbon trading"],
      pricing: "$100/user/month",
    },
    {
      name: "Watershed",
      marketShare: 8,
      strengths: ["Clean UI", "VC-backed"],
      weaknesses: ["Limited AI", "No IoT"],
      pricing: "$50K/year flat",
    },
    {
      name: "EcoTrack AI (Ours)",
      marketShare: 0,
      strengths: ["IBM Granite AI", "Real-time IoT", "Multi-framework"],
      weaknesses: ["New entrant", "Building brand"],
      pricing: "$30K-$300K/year",
    },
  ],
  roadmap: [
    {
      phase: "Research & Validation",
      duration: "Month 1-2",
      tasks: ["Customer discovery (50 interviews)", "Technical feasibility study", "IBM API integration proof of concept", "Competitive analysis deep dive"],
      milestone: "Product-market fit confirmation",
    },
    {
      phase: "Prototype",
      duration: "Month 3-4",
      tasks: ["Core dashboard MVP", "IBM Granite model fine-tuning", "3 pilot enterprise integrations", "UI/UX design system"],
      milestone: "Working prototype with 3 paying pilots",
    },
    {
      phase: "MVP Launch",
      duration: "Month 5-7",
      tasks: ["Production deployment on IBM Cloud", "Security & compliance audit", "ISO 27001 certification", "Public beta launch"],
      milestone: "$500K ARR, 10 enterprise customers",
    },
    {
      phase: "Growth",
      duration: "Month 8-12",
      tasks: ["Series A fundraising", "Sales team expansion", "Partner ecosystem (Big4 consulting firms)", "EU market entry"],
      milestone: "$2M ARR, Series A closed",
    },
    {
      phase: "Scaling",
      duration: "Year 2",
      tasks: ["Global expansion", "Carbon credit marketplace launch", "SME product tier", "API platform for developers"],
      milestone: "$10M ARR, global presence",
    },
  ],
  pitch: {
    elevator:
      "EcoTrack AI is the first IBM Granite-powered sustainability intelligence platform that gives enterprise sustainability teams real-time carbon visibility across their entire operations and supply chain — automating ESG reporting, predicting emission hotspots, and recommending ROI-positive decarbonization actions. We're building the Bloomberg Terminal for corporate sustainability.",
    investor:
      "The $45B corporate sustainability software market is growing at 22.5% CAGR, driven by mandatory ESG reporting in the EU and US. Current solutions like Salesforce Net Zero Cloud are expensive, generic, and don't use AI effectively. EcoTrack AI combines IBM Granite's enterprise-grade AI with real-time IoT integration to deliver 10x more accurate carbon tracking at 3x lower cost. We've signed 3 Fortune 500 pilots generating $450K ARR. We're raising $4M Series A to hire a world-class sales team and expand into the EU market. With our technology moat and regulatory tailwinds, we project $10M ARR by Year 2.",
    linkedIn:
      "🌍 We just launched EcoTrack AI — the world's first IBM Granite-powered carbon intelligence platform for enterprises. After 18 months of R&D and 50 customer interviews, we built something that genuinely moves the needle on corporate decarbonization. If you're a CSO, CFO, or sustainability leader at a large enterprise, I'd love to show you how we're helping companies reduce emissions by 30% while cutting reporting costs by 70%. DM me for a demo 🚀 #CleanTech #Sustainability #IBM #AI #ESG",
  },
  insights: [
    "67% of Fortune 500 companies have committed to net-zero by 2050 but lack measurement tools",
    "ESG software market will reach $45B by 2028, growing at 22.5% CAGR",
    "SEC climate disclosure rules will require all public companies to report emissions by 2026",
    "IBM Granite models outperform GPT-4 on domain-specific enterprise tasks by 23%",
    "Carbon credit prices expected to reach $100+/ton by 2030, up from $15 today",
    "87% of institutional investors now use ESG data in investment decisions",
  ],
  trends: [
    { name: "ESG Regulations", growth: 87, direction: "up" },
    { name: "Carbon Credits", growth: 64, direction: "up" },
    { name: "IoT Integration", growth: 52, direction: "up" },
    { name: "AI Sustainability", growth: 91, direction: "up" },
    { name: "Green Bonds", growth: 45, direction: "up" },
  ],
  businessCanvas: {
    valueProposition: ["Real-time carbon intelligence", "Automated multi-framework ESG reporting", "AI-driven decarbonization recommendations", "Carbon credit integration"],
    customerSegments: ["Fortune 5000 enterprises", "Manufacturing & logistics companies", "Financial institutions with ESG mandates", "Government agencies"],
    revenueStreams: ["SaaS subscriptions ($30K-$500K/year)", "Professional services", "Carbon credit marketplace (3-5% commission)", "API access for developers"],
    costStructure: ["IBM Cloud & AI API costs (30%)", "R&D and engineering (40%)", "Sales & marketing (20%)", "G&A (10%)"],
    channels: ["Direct enterprise sales", "Big4 consulting partnerships", "IBM partner network", "Sustainability conferences"],
    keyActivities: ["AI model training & fine-tuning", "IoT integration development", "Customer success", "Regulatory intelligence"],
    keyPartners: ["IBM (AI & Cloud)", "IoT device manufacturers", "Big4 consulting firms", "Carbon registry bodies"],
    keyResources: ["IBM Granite AI models", "Proprietary carbon calculation methodology", "Enterprise integrations library", "Data science team"],
  },
  chartData: {
    marketGrowth: [
      { year: "2022", value: 20 },
      { year: "2023", value: 26 },
      { year: "2024", value: 32 },
      { year: "2025", value: 40 },
      { year: "2026", value: 50 },
      { year: "2027", value: 63 },
      { year: "2028", value: 78 },
    ],
    revenueProjection: [
      { month: "M6", revenue: 150 },
      { month: "M9", revenue: 320 },
      { month: "M12", revenue: 580 },
      { month: "Y2", revenue: 1800 },
      { month: "Y3", revenue: 5200 },
    ],
    industryComparison: [
      { category: "CleanTech", score: 94 },
      { category: "FinTech", score: 87 },
      { category: "HealthTech", score: 82 },
      { category: "EdTech", score: 75 },
      { category: "RetailTech", score: 68 },
    ],
    competitorRadar: [
      { metric: "AI Capability", ours: 95, salesforce: 70, microsoft: 75 },
      { metric: "IoT Integration", ours: 90, salesforce: 40, microsoft: 55 },
      { metric: "Price Value", ours: 85, salesforce: 40, microsoft: 60 },
      { metric: "Compliance", ours: 88, salesforce: 80, microsoft: 85 },
      { metric: "Ease of Use", ours: 82, salesforce: 75, microsoft: 70 },
      { metric: "Support", ours: 80, salesforce: 85, microsoft: 80 },
    ],
  },
};

export const INDUSTRIES = [
  "CleanTech & Sustainability",
  "HealthTech & MedTech",
  "FinTech & InsurTech",
  "EdTech & Future of Work",
  "AgriTech & FoodTech",
  "RetailTech & eCommerce",
  "AI & Machine Learning",
  "Cybersecurity",
  "SpaceTech & DeepTech",
  "Smart Cities & IoT",
  "BioTech & Life Sciences",
  "Logistics & Supply Chain",
  "Entertainment & Media",
  "Real Estate & PropTech",
  "Travel & Hospitality",
];

export const TRENDING_TOPICS = [
  { topic: "Generative AI Enterprise", growth: "+127%", hot: true },
  { topic: "Carbon Credit Markets", growth: "+89%", hot: true },
  { topic: "AI Healthcare Diagnosis", growth: "+76%", hot: false },
  { topic: "Web3 Identity", growth: "+54%", hot: false },
  { topic: "Space Commerce", growth: "+43%", hot: true },
  { topic: "Quantum Computing", growth: "+38%", hot: false },
];

export const MARKET_DATA = [
  { month: "Jan", ideas: 1240, searches: 3800, conversions: 87 },
  { month: "Feb", ideas: 1820, searches: 4200, conversions: 102 },
  { month: "Mar", ideas: 2100, searches: 5100, conversions: 134 },
  { month: "Apr", ideas: 1980, searches: 4800, conversions: 118 },
  { month: "May", ideas: 2450, searches: 6200, conversions: 156 },
  { month: "Jun", ideas: 2890, searches: 7400, conversions: 189 },
  { month: "Jul", ideas: 3200, searches: 8900, conversions: 221 },
];

export const AI_AGENTS = [
  {
    id: "idea",
    name: "Idea Agent",
    description: "Generates initial business concept from user inputs",
    icon: "Lightbulb",
    color: "#4f46e5",
    status: "idle",
  },
  {
    id: "research",
    name: "Research Agent",
    description: "Scours papers, articles, and market reports",
    icon: "Search",
    color: "#7c3aed",
    status: "idle",
  },
  {
    id: "trend",
    name: "Trend Analysis Agent",
    description: "Identifies market trends and emerging opportunities",
    icon: "TrendingUp",
    color: "#a855f7",
    status: "idle",
  },
  {
    id: "competitor",
    name: "Competitor Agent",
    description: "Maps competitive landscape and positioning",
    icon: "Target",
    color: "#ec4899",
    status: "idle",
  },
  {
    id: "innovation",
    name: "Innovation Agent",
    description: "Finds innovation gaps and white space opportunities",
    icon: "Zap",
    color: "#f59e0b",
    status: "idle",
  },
  {
    id: "feasibility",
    name: "Feasibility Agent",
    description: "Assesses technical and market viability",
    icon: "CheckCircle",
    color: "#10b981",
    status: "idle",
  },
  {
    id: "business-model",
    name: "Business Model Agent",
    description: "Designs revenue model and value chain",
    icon: "Building",
    color: "#3b82f6",
    status: "idle",
  },
  {
    id: "roadmap",
    name: "Roadmap Agent",
    description: "Creates actionable milestones and timeline",
    icon: "Map",
    color: "#06b6d4",
    status: "idle",
  },
  {
    id: "pitch",
    name: "Pitch Generator Agent",
    description: "Crafts compelling investor narratives",
    icon: "Mic",
    color: "#8b5cf6",
    status: "idle",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Co-founder, Series A Startup",
    company: "NovaTech",
    avatar: "SC",
    content:
      "EcoTrack AI was born from this exact platform. The IBM Granite-powered analysis gave us insights that took our previous consultant 3 weeks to compile — in under 5 minutes.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Innovation Lead",
    company: "Fortune 500 Corp",
    avatar: "MR",
    content:
      "We use this tool in every strategy session. The Agentic AI workflow is unlike anything else on the market. It's like having a team of expert consultants available 24/7.",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Research Director",
    company: "MIT Media Lab",
    avatar: "PS",
    content:
      "The Knowledge Fusion feature surfaces connections between research areas that I would never have found manually. It's transforming how we approach cross-disciplinary innovation.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Startup Accelerator Partner",
    company: "Techstars",
    avatar: "JO",
    content:
      "Every startup in our cohort now uses this as their first research step. The competitor analysis and market sizing are remarkably accurate, especially for early-stage validation.",
    rating: 5,
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: 0,
    description: "For students and solo entrepreneurs",
    features: [
      "5 idea generations/month",
      "Basic market analysis",
      "PDF export",
      "Community access",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 49,
    description: "For serious entrepreneurs and startups",
    features: [
      "Unlimited idea generations",
      "Full agentic AI workflow",
      "Competitor analysis",
      "Business Model Canvas",
      "Pitch generator",
      "Priority support",
      "All export formats",
    ],
    cta: "Start 14-day Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 299,
    description: "For organizations and research teams",
    features: [
      "Everything in Pro",
      "Custom IBM Granite fine-tuning",
      "Team collaboration (unlimited seats)",
      "API access",
      "White-label reports",
      "Dedicated success manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const FAQ_ITEMS = [
  {
    q: "How does the AI generate business ideas?",
    a: "Our platform uses IBM Granite large language models combined with a multi-agent workflow. Each agent specializes in a domain — research, trend analysis, competitor mapping, feasibility assessment — and they collaborate to produce comprehensive, validated business ideas tailored to your inputs.",
  },
  {
    q: "What IBM technologies are integrated?",
    a: "We integrate IBM Granite models (granite-13b-chat-v2 and granite-34b-code-instruct) via IBM watsonx.ai, IBM Langflow for visual agent orchestration, and IBM Orchestrate for workflow automation. These ensure enterprise-grade accuracy, compliance, and scalability.",
  },
  {
    q: "Can I upload documents or images?",
    a: "Yes! Our multimodal AI accepts text prompts, images of product sketches, voice recordings, PDF documents, and existing business concepts. The AI extracts insights from all input types and synthesizes them into structured business ideas.",
  },
  {
    q: "How accurate is the market size data?",
    a: "Our Research Agent aggregates data from 50+ authoritative sources including Gartner, IDC, CB Insights, Statista, and recent research papers. Market estimates are updated weekly and include confidence intervals.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted at rest and in transit (AES-256 / TLS 1.3). We're SOC 2 Type II compliant and GDPR ready. Your ideas are never used to train our models without explicit consent.",
  },
  {
    q: "Can I export the results?",
    a: "Absolutely. Results can be exported as PDF reports, PowerPoint presentations, Excel spreadsheets, or via our API. We also offer white-label reports on the Enterprise plan.",
  },
];
