"use client";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Globe,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TEAM = [
  { name: "Aryan Sharma", role: "Founder & CEO", initials: "AS", color: "from-indigo-500 to-violet-500", bio: "Former IBM Research engineer with 8 years in AI/ML. Passionate about democratising entrepreneurship.", linkedin: "#", twitter: "#" },
  { name: "Priya Nair", role: "CTO", initials: "PN", color: "from-violet-500 to-purple-500", bio: "PhD in NLP from IIT Bombay. Led the IBM Granite integration and agentic workflow architecture.", linkedin: "#", twitter: "#" },
  { name: "Marcus Lee", role: "Head of Product", initials: "ML", color: "from-purple-500 to-pink-500", bio: "Ex-Google PM with a track record of shipping AI products used by millions.", linkedin: "#", twitter: "#" },
  { name: "Fatima Al-Rashid", role: "Lead AI Engineer", initials: "FA", color: "from-rose-500 to-orange-500", bio: "Specialist in large language model fine-tuning and multi-agent orchestration.", linkedin: "#", twitter: "#" },
  { name: "James Obi", role: "Head of Design", initials: "JO", color: "from-emerald-500 to-teal-500", bio: "Award-winning product designer focused on making complex AI workflows feel effortless.", linkedin: "#", twitter: "#" },
  { name: "Soo-Jin Park", role: "Head of Growth", initials: "SP", color: "from-cyan-500 to-blue-500", bio: "Growth hacker who scaled three startups from 0 to 100K users. Startup ecosystem connector.", linkedin: "#", twitter: "#" },
  { name: "Diego Reyes", role: "AI Research Scientist", initials: "DR", color: "from-amber-500 to-orange-500", bio: "Former MIT CSAIL researcher specialising in reasoning models and structured output generation.", linkedin: "#", twitter: "#" },
  { name: "Aisha Mensah", role: "Head of Partnerships", initials: "AM", color: "from-teal-500 to-emerald-500", bio: "Built enterprise partnerships at Salesforce and HubSpot. Connects startups to Fortune 500 buyers.", linkedin: "#", twitter: "#" },
  { name: "Liam Whitfield", role: "Senior Full-Stack Engineer", initials: "LW", color: "from-blue-500 to-indigo-500", bio: "Next.js & TypeScript lead who obsesses over performance, DX, and pixel-perfect interfaces.", linkedin: "#", twitter: "#" },
];

const VALUES = [
  { icon: Brain, title: "AI-First", desc: "Every feature is designed around intelligent automation. We don't bolt AI on — we design with it from day one.", color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-950/40", border: "border-indigo-100 dark:border-indigo-900" },
  { icon: Shield, title: "Trust & Safety", desc: "SOC 2 Type II compliant. Full data sovereignty, end-to-end encryption, and zero-retention AI calls.", color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-100 dark:border-emerald-900" },
  { icon: Globe, title: "Global Reach", desc: "Localised market intelligence across 120+ countries. Built for founders in every time zone.", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/40", border: "border-blue-100 dark:border-blue-900" },
  { icon: Heart, title: "Founder-Centric", desc: "We obsess over the founder's journey — from a napkin sketch to a funded company.", color: "text-rose-600", bg: "bg-rose-50 dark:bg-rose-950/40", border: "border-rose-100 dark:border-rose-900" },
  { icon: Zap, title: "Speed", desc: "Business idea validated in under 30 seconds. 9 AI agents running in parallel. Because opportunity doesn't wait.", color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/40", border: "border-amber-100 dark:border-amber-900" },
  { icon: Users, title: "Community", desc: "50,000+ entrepreneurs sharing ideas, feedback, and co-founder leads on our platform every month.", color: "text-violet-600", bg: "bg-violet-50 dark:bg-violet-950/40", border: "border-violet-100 dark:border-violet-900" },
  { icon: Award, title: "Excellence", desc: "92% accuracy on market sizing vs. traditional consulting benchmarks. We hold ourselves to the highest standards.", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-950/40", border: "border-purple-100 dark:border-purple-900" },
  { icon: TrendingUp, title: "Continuous Growth", desc: "Our models retrain weekly on fresh market data. Your idea analysis is always current, never stale.", color: "text-cyan-600", bg: "bg-cyan-50 dark:bg-cyan-950/40", border: "border-cyan-100 dark:border-cyan-900" },
  { icon: Star, title: "Transparency", desc: "Every insight is sourced and explained. No black-box outputs — you see exactly why the AI thinks what it thinks.", color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-950/40", border: "border-orange-100 dark:border-orange-900" },
];

const MILESTONES = [
  { year: "2023 Q2", title: "Idea Born", desc: "Founded during IBM's internal hackathon. First prototype generates 5 business ideas in 2 minutes.", icon: Lightbulb, color: "from-indigo-500 to-violet-500" },
  { year: "2024 Q1", title: "IBM Integration", desc: "Deep integration with IBM Granite 13B & 34B and watsonx.ai. Agentic multi-step workflow with 9 specialised AI agents launched.", icon: Brain, color: "from-violet-500 to-purple-500" },
  { year: "2024 Q3", title: "Public Beta", desc: "10,000 users onboarded in the first week. Featured in TechCrunch and Forbes as a top AI startup tool of 2024.", icon: Rocket, color: "from-purple-500 to-pink-500" },
  { year: "2024 Q4", title: "$2.5M Seed Round", desc: "Seed funding raised from top-tier VCs including Sequoia Scout and IBM Ventures. Team grows to 15 across 4 countries.", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
  { year: "2025 Q1", title: "IBM Hackathon Winner", desc: "Selected for IBM SkillsBuild AI Agent Challenge. Ranked #1 in AI innovation track across 200+ global teams.", icon: Award, color: "from-amber-500 to-orange-500" },
  { year: "2025 Q2", title: "Enterprise Launch", desc: "IdeaForge Enterprise launches for Fortune 500 innovation labs. First $1M ARR milestone hit within 60 days.", icon: Star, color: "from-cyan-500 to-blue-500" },
];

const TECH_STACK = [
  { name: "IBM Granite 13B", category: "LLM", desc: "Core reasoning and analysis model", color: "bg-blue-600" },
  { name: "IBM Granite 34B", category: "LLM", desc: "Complex ideation and deep insights", color: "bg-indigo-600" },
  { name: "IBM watsonx.ai", category: "Platform", desc: "Model hosting and inference layer", color: "bg-violet-600" },
  { name: "IBM Langflow", category: "Orchestration", desc: "Visual multi-agent workflow builder", color: "bg-purple-600" },
  { name: "IBM Orchestrate", category: "Automation", desc: "Task automation and scheduling", color: "bg-pink-600" },
  { name: "Next.js 15", category: "Frontend", desc: "React framework with App Router", color: "bg-slate-700" },
  { name: "TypeScript", category: "Language", desc: "Type-safe full-stack development", color: "bg-blue-500" },
  { name: "Tailwind CSS", category: "Styling", desc: "Utility-first CSS framework", color: "bg-teal-600" },
];

const STATS = [
  { value: "50K+", label: "Ideas Generated", sub: "and growing daily" },
  { value: "9", label: "AI Agents", sub: "running in parallel" },
  { value: "92%", label: "Accuracy Score", sub: "vs. consulting benchmarks" },
  { value: "120+", label: "Countries", sub: "with localised insights" },
  { value: "30s", label: "Average Time", sub: "for full idea analysis" },
  { value: "$2.5M", label: "Seed Raised", sub: "from top-tier VCs" },
];

// ─── 3D Floating Cube (CSS-only) ────────────────────────────────────────────
function Cube3D() {
  return (
    <div className="relative w-32 h-32" style={{ perspective: "600px" }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-xl border-2 border-indigo-400/60 bg-indigo-500/20 backdrop-blur-sm flex items-center justify-center"
          style={{ transform: "translateZ(64px)" }}>
          <Brain className="h-8 w-8 text-indigo-300" />
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-xl border-2 border-violet-400/60 bg-violet-500/20 backdrop-blur-sm flex items-center justify-center"
          style={{ transform: "rotateY(180deg) translateZ(64px)" }}>
          <Sparkles className="h-8 w-8 text-violet-300" />
        </div>
        {/* Right */}
        <div className="absolute inset-0 rounded-xl border-2 border-purple-400/60 bg-purple-500/20 backdrop-blur-sm flex items-center justify-center"
          style={{ transform: "rotateY(90deg) translateZ(64px)" }}>
          <Zap className="h-8 w-8 text-purple-300" />
        </div>
        {/* Left */}
        <div className="absolute inset-0 rounded-xl border-2 border-blue-400/60 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center"
          style={{ transform: "rotateY(-90deg) translateZ(64px)" }}>
          <Globe className="h-8 w-8 text-blue-300" />
        </div>
        {/* Top */}
        <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/60 bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center"
          style={{ transform: "rotateX(90deg) translateZ(64px)" }}>
          <Rocket className="h-8 w-8 text-cyan-300" />
        </div>
        {/* Bottom */}
        <div className="absolute inset-0 rounded-xl border-2 border-pink-400/60 bg-pink-500/20 backdrop-blur-sm flex items-center justify-center"
          style={{ transform: "rotateX(-90deg) translateZ(64px)" }}>
          <Target className="h-8 w-8 text-pink-300" />
        </div>
      </motion.div>
    </div>
  );
}

// ─── 3D Orbit Ring ───────────────────────────────────────────────────────────
function OrbitRing({ radius, duration, color, size }: { radius: number; duration: number; color: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full border border-dashed"
      style={{
        width: radius * 2, height: radius * 2,
        left: "50%", top: "50%",
        marginLeft: -radius, marginTop: -radius,
        borderColor: color,
        transformStyle: "preserve-3d",
        transform: `rotateX(75deg)`,
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute rounded-full"
        style={{ width: size, height: size, background: color, top: -size / 2, left: "50%", marginLeft: -size / 2 }}
      />
    </motion.div>
  );
}

// ─── 3D Hero scene ───────────────────────────────────────────────────────────
function HeroScene3D() {
  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden" style={{ perspective: "800px" }}>
      {/* Orbit rings */}
      <div className="relative w-full h-full flex items-center justify-center">
        <OrbitRing radius={80} duration={6} color="rgba(99,102,241,0.6)" size={10} />
        <OrbitRing radius={120} duration={9} color="rgba(139,92,246,0.5)" size={8} />
        <OrbitRing radius={160} duration={13} color="rgba(59,130,246,0.4)" size={6} />
        <OrbitRing radius={200} duration={17} color="rgba(236,72,153,0.3)" size={5} />
        {/* Center cube */}
        <div className="absolute z-10">
          <Cube3D />
        </div>
        {/* Floating data cards */}
        <motion.div
          className="absolute left-4 top-8 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-indigo-300 text-[10px] mb-0.5">Market Size</div>
          <div className="text-white font-black">$1.2T</div>
        </motion.div>
        <motion.div
          className="absolute right-4 top-12 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="text-violet-300 text-[10px] mb-0.5">Innovation Score</div>
          <div className="text-white font-black">92/100</div>
        </motion.div>
        <motion.div
          className="absolute left-8 bottom-10 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="text-emerald-300 text-[10px] mb-0.5">CAGR</div>
          <div className="text-white font-black">22.5%</div>
        </motion.div>
        <motion.div
          className="absolute right-8 bottom-8 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 text-white text-xs font-semibold"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <div className="text-pink-300 text-[10px] mb-0.5">AI Agents</div>
          <div className="text-white font-black">9 Active</div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Parallax stat counter ───────────────────────────────────────────────────
function StatCard({ value, label, sub, i }: { value: string; label: string; sub: string; i: number }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
      whileHover={{ scale: 1.04, rotateY: 5 }}
      style={{ transformStyle: "preserve-3d", perspective: 600 }}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-center cursor-default"
    >
      <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{value}</div>
      <div className="font-bold text-slate-900 dark:text-white text-sm">{label}</div>
      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{sub}</div>
    </motion.div>
  );
}

// ─── 3D flip team card ───────────────────────────────────────────────────────
function TeamCard({ name, role, initials, color, bio, i }: { name: string; role: string; initials: string; color: string; bio: string; i: number }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
      className="relative h-52 cursor-pointer"
      style={{ perspective: 800 }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden" }}>
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl font-black mb-3 shadow-lg`}>
            {initials}
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white">{name}</h3>
          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-1">{role}</p>
          <p className="text-[10px] text-slate-400 mt-2">Click to flip</p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-90`} />
          <div className="relative z-10">
            <p className="text-sm text-white leading-relaxed">{bio}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Floating orb background ─────────────────────────────────────────────────
function FloatingOrbs() {
  const orbs = [
    { size: 320, x: "10%", y: "20%", color: "bg-indigo-200/25 dark:bg-indigo-800/15", duration: 8 },
    { size: 240, x: "70%", y: "10%", color: "bg-violet-200/20 dark:bg-violet-800/10", duration: 11 },
    { size: 200, x: "55%", y: "60%", color: "bg-purple-200/20 dark:bg-purple-800/10", duration: 9 },
    { size: 160, x: "20%", y: "70%", color: "bg-blue-200/20 dark:bg-blue-800/10", duration: 13 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.color}`}
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
        />
      ))}
    </div>
  );
}

export default function AboutPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const toggleTheme = () => {
    setTheme((p) => {
      const n = p === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", n === "dark");
      return n;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950">
        <FloatingOrbs />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <Badge className="mb-6 px-3 py-1.5 text-xs bg-indigo-900/60 text-indigo-300 border border-indigo-700">
                <Sparkles className="h-3 w-3" /> Our Story
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
                We Believe Every
                <br />
                Great Business
                <br />
                <span className="gradient-text">Starts with an Idea</span>
              </h1>
              <p className="text-lg text-indigo-200 leading-relaxed mb-8 max-w-lg">
                IdeaForge AI levels the playing field — giving every entrepreneur access to the same business intelligence Fortune 500 companies spend millions on, in 30 seconds, powered by IBM Granite AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/generate">
                  <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90 shadow-none">
                    <Sparkles className="h-4 w-4" /> Try It Free
                  </Button>
                </Link>
                <Link href="/careers">
                  <Button size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 shadow-none">
                    <Users className="h-4 w-4" /> Join the Team
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — 3D scene */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <HeroScene3D />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 rounded-full bg-white/60" />
          </div>
          <span className="text-white/40 text-xs">Scroll</span>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <Badge className="mb-4">By the Numbers</Badge>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">IdeaForge at a Glance</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {STATS.map(({ value, label, sub }, i) => (
              <StatCard key={label} value={value} label={label} sub={sub} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-indigo-600" />
              <Badge>Our Mission</Badge>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
              Democratise Access to <span className="gradient-text">AI-Powered Innovation</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              The best business ideas don&apos;t come from the most experienced people — they come from people who deeply understand a problem. Our mission is to give those people the tools to validate, refine, and launch their ideas with confidence.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Powered by IBM Granite AI, Langflow, and IBM Orchestrate, IdeaForge runs a multi-agent workflow that does in 30 seconds what used to take a consulting firm 3 weeks — and makes that intelligence available to anyone with an internet connection.
            </p>
            <div className="space-y-3">
              {[
                "Founded on IBM SkillsBuild AI Agent Challenge",
                "9 specialised AI agents running in parallel",
                "Market insights across 120+ countries",
                "Used by founders in 50,000+ idea sessions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D Tech Stack Card */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <div className="bg-gradient-to-br from-indigo-950 to-violet-950 rounded-3xl p-8 border border-indigo-800/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Rocket className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-white">IBM-Powered Tech Stack</div>
                    <div className="text-xs text-indigo-300">Enterprise-grade AI for everyone</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {TECH_STACK.map(({ name, category, desc, color }) => (
                    <motion.div key={name} whileHover={{ scale: 1.03, z: 10 }} style={{ transformStyle: "preserve-3d" }}
                      className="bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/10 transition-colors cursor-default">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${color}`} />
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">{category}</span>
                      </div>
                      <div className="text-sm font-bold text-white">{name}</div>
                      <div className="text-[10px] text-white/40 mt-0.5">{desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <Badge className="mb-4">What We Stand For</Badge>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Our Core Values</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">Nine principles that guide every line of code, every design decision, and every hire we make.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -4, rotateX: 3 }}
                style={{ transformStyle: "preserve-3d", perspective: 600 }}
                className={`bg-white dark:bg-slate-900 rounded-2xl border ${border} p-6 cursor-default`}>
                <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <Badge className="mb-4">The People Behind It</Badge>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">Meet the Team</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            A diverse team of AI engineers, designers, and entrepreneurs united by one mission.
            <span className="block mt-1 text-xs text-indigo-500">Click any card to flip and read the bio</span>
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map(({ name, role, initials, color, bio }, i) => (
            <TeamCard key={name} name={name} role={role} initials={initials} color={color} bio={bio} i={i} />
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 relative overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <Badge className="mb-4 bg-indigo-900/60 text-indigo-300 border-indigo-700">Our Journey</Badge>
            <h2 className="text-4xl font-black text-white">Milestones</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 via-violet-400 to-purple-400 opacity-60" />
            <div className="space-y-8 pl-20">
              {MILESTONES.map(({ year, title, desc, icon: Icon, color }, i) => (
                <motion.div key={year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  whileHover={{ x: 4 }} className="relative">
                  <div className={`absolute -left-14 w-9 h-9 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shadow-indigo-900/50`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/10 p-5">
                    <div className="text-xs font-bold text-indigo-400 mb-1">{year}</div>
                    <h3 className="font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-indigo-200/70">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Backed by / Press ── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <Badge className="mb-4">Recognition</Badge>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Backed & Featured By</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {["IBM Ventures", "Sequoia Scout", "TechCrunch", "Forbes", "Product Hunt", "Y Combinator"].map((org, i) => (
              <motion.div key={org} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ scale: 1.07, y: -3 }}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-center text-center cursor-default">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{org}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-14 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-20" />
          {/* 3D spinning rings decoration */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
            <motion.div style={{ perspective: 400 }}>
              <motion.div
                className="w-32 h-32 rounded-full border-4 border-white"
                animate={{ rotateY: [0, 360], rotateX: [20, 20] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              />
            </motion.div>
          </div>
          <div className="relative z-10">
            <Sparkles className="h-10 w-10 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl font-black text-white mb-4">Ready to Forge Your Idea?</h2>
            <p className="text-indigo-200 mb-8 max-w-md mx-auto leading-relaxed">
              Join 50,000+ entrepreneurs already using IBM AI to validate, refine, and launch the next generation of businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/generate">
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90 shadow-none">
                  <Sparkles className="h-4 w-4" /> Get Started Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-white/15 text-white border border-white/30 hover:bg-white/25 shadow-none">
                  <ArrowRight className="h-4 w-4" /> Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">
          © 2025 IdeaForge AI ·{" "}
          <Link href="/about" className="hover:text-indigo-600">About</Link> ·{" "}
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link> ·{" "}
          <Link href="/careers" className="hover:text-indigo-600">Careers</Link> ·{" "}
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </p>
      </footer>
    </div>
  );
}
