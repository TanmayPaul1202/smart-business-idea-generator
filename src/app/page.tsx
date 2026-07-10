"use client";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  ChevronDown,
  Database,
  GitBranch,
  Layers,
  Lightbulb,
  Mic,
  Play,
  Search,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Upload,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { FAQ_ITEMS, PRICING_PLANS, TESTIMONIALS } from "@/lib/demo-data";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stagger: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function LandingPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-bg-soft" />
        <div className="absolute inset-0 grid-pattern opacity-60" />

        {/* Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-200/40 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />

        {/* ── Floating decorative elements ── */}

        {/* Icon bubbles — pure icon, no text */}
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-[8%] hidden lg:flex w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/50 shadow-lg shadow-indigo-100/40 items-center justify-center"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-28 right-[6%] hidden lg:flex w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-violet-100 dark:border-violet-900/50 shadow-lg shadow-violet-100/40 items-center justify-center"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
            <TrendingUp className="h-3.5 w-3.5 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-28 left-[5%] hidden lg:flex w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-emerald-100 dark:border-emerald-900/50 shadow-lg shadow-emerald-100/40 items-center justify-center"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Zap className="h-3.5 w-3.5 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-24 right-[7%] hidden lg:flex w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-amber-100 dark:border-amber-900/50 shadow-lg shadow-amber-100/40 items-center justify-center"
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
            <Target className="h-3.5 w-3.5 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          className="absolute top-1/2 left-[2%] hidden xl:flex w-11 h-11 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-rose-100 dark:border-rose-900/50 shadow-lg items-center justify-center"
        >
          <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
            <Brain className="h-3 w-3 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 11, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[55%] right-[3%] hidden xl:flex w-11 h-11 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-cyan-100 dark:border-cyan-900/50 shadow-lg items-center justify-center"
        >
          <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Layers className="h-3 w-3 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute top-[20%] left-[2%] hidden xl:flex w-10 h-10 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-purple-100 dark:border-purple-900/50 shadow-lg items-center justify-center"
        >
          <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
            <Database className="h-3 w-3 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 13, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[2%] hidden xl:flex w-10 h-10 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900/50 shadow-lg items-center justify-center"
        >
          <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
            <Shield className="h-3 w-3 text-white" />
          </div>
        </motion.div>

        {/* Spinning outline squares */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[18%] left-[20%] hidden xl:block w-9 h-9 rounded-xl border-2 border-indigo-300/50 dark:border-indigo-700/40"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[28%] right-[20%] hidden xl:block w-7 h-7 rounded-lg border-2 border-violet-300/50 dark:border-violet-700/40"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-[60%] left-[14%] hidden xl:block w-6 h-6 rounded-lg border-2 border-purple-300/40 dark:border-purple-700/40"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-[35%] right-[14%] hidden xl:block w-10 h-10 rounded-2xl border-2 border-rose-300/40 dark:border-rose-700/30"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[15%] left-[22%] hidden xl:block w-5 h-5 rounded-md border-2 border-cyan-300/50 dark:border-cyan-700/40"
        />

        {/* Spinning filled diamonds (rotated squares) */}
        <motion.div
          animate={{ rotate: [45, 405], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[22%] hidden xl:block w-4 h-4 bg-indigo-400/30 dark:bg-indigo-500/20 rounded-sm"
        />
        <motion.div
          animate={{ rotate: [45, 405], y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[18%] left-[28%] hidden xl:block w-3.5 h-3.5 bg-violet-400/30 dark:bg-violet-500/20 rounded-sm"
        />
        <motion.div
          animate={{ rotate: [45, 405], x: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[45%] right-[22%] hidden xl:block w-3 h-3 bg-purple-400/35 dark:bg-purple-500/20 rounded-sm"
        />

        {/* Pulsing rings */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          className="absolute top-[30%] left-[10%] hidden xl:block w-8 h-8 rounded-full border border-indigo-400/50 dark:border-indigo-500/30"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1.5 }}
          className="absolute bottom-[35%] right-[10%] hidden xl:block w-10 h-10 rounded-full border border-violet-400/40 dark:border-violet-500/30"
        />
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
          className="absolute top-[70%] left-[30%] hidden xl:block w-6 h-6 rounded-full border border-purple-400/50 dark:border-purple-500/30"
        />

        {/* Floating dots — more, spread wider */}
        {[
          { top: "12%", left: "12%",  delay: 0,   size: "w-2 h-2",     color: "bg-indigo-400/50" },
          { top: "72%", left: "16%",  delay: 1.2, size: "w-1.5 h-1.5", color: "bg-violet-400/50" },
          { top: "22%", right: "13%", delay: 0.6, size: "w-2.5 h-2.5", color: "bg-purple-400/40" },
          { top: "67%", right: "16%", delay: 1.8, size: "w-1.5 h-1.5", color: "bg-indigo-300/60" },
          { top: "47%", left: "7%",   delay: 0.9, size: "w-2 h-2",     color: "bg-violet-300/50" },
          { top: "38%", right: "7%",  delay: 1.4, size: "w-2 h-2",     color: "bg-rose-400/40" },
          { top: "85%", left: "35%",  delay: 0.3, size: "w-3 h-3",     color: "bg-cyan-400/40" },
          { top: "8%",  right: "35%", delay: 1.1, size: "w-1.5 h-1.5", color: "bg-amber-400/50" },
          { top: "55%", left: "25%",  delay: 2,   size: "w-2 h-2",     color: "bg-emerald-400/40" },
          { top: "18%", left: "38%",  delay: 0.7, size: "w-1.5 h-1.5", color: "bg-indigo-500/40" },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.8 + i * 0.35, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
            className={`absolute hidden lg:block rounded-full ${dot.size} ${dot.color}`}
            style={{ top: dot.top, left: (dot as any).left, right: (dot as any).right }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white">
                  Generate{" "}
                  <span className="gradient-text">Context-Aware</span>{" "}
                  Business Ideas
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                  Transform text, images, voice notes, or sketches into validated business
                  opportunities using <strong className="text-indigo-600 dark:text-indigo-400">IBM Agentic AI</strong>.
                  Powered by IBM Granite, Langflow & Orchestrate.
                </p>
              </div>

              {/* Input preview */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xl shadow-indigo-100/50 dark:shadow-none">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shrink-0">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      <span className="text-slate-400">AI:</span> "Describe your idea, upload a sketch, or record a voice note and I'll generate a complete business plan with market analysis..."
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      {[
                        { icon: Upload, label: "Upload" },
                        { icon: Mic, label: "Voice" },
                        { icon: Lightbulb, label: "Text" },
                      ].map(({ icon: Icon, label }) => (
                        <span
                          key={label}
                          className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md"
                        >
                          <Icon className="h-3 w-3" /> {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/generate">
                  <Button size="xl" className="group">
                    <Sparkles className="h-5 w-5" />
                    Generate Ideas
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="xl" variant="outline">
                    <Play className="h-4 w-4 fill-current" />
                    View Dashboard
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-2">
                {[
                  { value: "50K+", label: "Ideas Generated" },
                  { value: "92%", label: "Accuracy Score" },
                  { value: "9 AI Agents", label: "Working Together" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-black text-2xl text-slate-900 dark:text-white leading-none">{value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main card */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-indigo-200/30 dark:shadow-indigo-900/20 overflow-hidden">
                  {/* Header */}
                  <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">EcoTrack AI</div>
                        <div className="text-xs text-slate-400">CleanTech · Generated now</div>
                      </div>
                    </div>
                    <Badge variant="success">Score: 94</Badge>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    {/* Scores */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Innovation", value: 94, color: "text-indigo-600" },
                        { label: "Feasibility", value: 88, color: "text-emerald-600" },
                        { label: "Market", value: 82, color: "text-violet-600" },
                      ].map(({ label, value, color }) => (
                        <div key={label} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
                          <div className={`text-2xl font-black ${color}`}>{value}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Progress bars */}
                    {[
                      { label: "Market Size", value: 87, color: "bg-indigo-500" },
                      { label: "Trend Match", value: 94, color: "bg-violet-500" },
                      { label: "Competition", value: 62, color: "bg-emerald-500" },
                    ].map(({ label, value, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600 dark:text-slate-400">{label}</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{value}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className={`h-full rounded-full ${color}`}
                          />
                        </div>
                      </div>
                    ))}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["CleanTech", "IBM Granite", "IoT", "ESG", "$45B Market"].map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs rounded-full border border-indigo-100 dark:border-indigo-900/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">9 AI Agents</div>
                    <div className="text-[10px] text-emerald-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                      All Active
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -right-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-4"
                >
                  <div className="text-[10px] text-slate-500 mb-1">IBM Granite Model</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">granite-13b-chat-v2</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOGOS STRIP ── */}
      <section className="border-y border-slate-200 dark:border-slate-800 py-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Powered by IBM AI Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              "IBM Granite",
              "IBM Langflow",
              "IBM Orchestrate",
              "IBM watsonx.ai",
              "IBM Cloud",
            ].map((tech) => (
              <div key={tech} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-[8px] font-black">IBM</span>
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{tech.replace("IBM ", "")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <Section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <Badge className="mb-4">Core Features</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Innovate</span>
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Four IBM Hackathon objectives, delivered in one unified AI-powered platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Database,
              gradient: "from-indigo-600 to-blue-600",
              tag: "Objective 1",
              title: "Knowledge Fusion",
              desc: "IBM Research Agent aggregates insights from 50+ sources — research papers, market reports, startup databases, and social trends — delivering a comprehensive knowledge landscape in seconds.",
              points: ["Research papers & arXiv", "CB Insights & Gartner data", "Social media signals", "Industry news feeds"],
            },
            {
              icon: Layers,
              gradient: "from-violet-600 to-purple-600",
              tag: "Objective 2",
              title: "Multimodal Brainstorming",
              desc: "Generate ideas from any input type. Upload product sketches, record voice notes, paste PDFs, or type a prompt. IBM Granite understands every modality.",
              points: ["Text prompts", "Image & sketch upload", "Voice recording", "PDF documents"],
            },
            {
              icon: Brain,
              gradient: "from-purple-600 to-pink-600",
              tag: "Objective 3",
              title: "Agentic Predictive Intelligence",
              desc: "9 specialized IBM AI agents work in parallel — from Idea Agent to Pitch Generator — creating a comprehensive business analysis with predictive market modeling.",
              points: ["9 specialized AI agents", "IBM Langflow orchestration", "Predictive market scoring", "Real-time competitor mapping"],
            },
            {
              icon: GitBranch,
              gradient: "from-pink-600 to-rose-600",
              tag: "Objective 4",
              title: "Interactive Idea Visualization",
              desc: "Explore your business idea as an interactive React Flow mind map. Drag nodes, expand connections, and discover relationships between concepts visually.",
              points: ["Draggable node graph", "Full business model canvas", "Startup roadmap timeline", "Export as PDF/PNG"],
            },
          ].map(({ icon: Icon, gradient, tag, title, desc, points }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/50 dark:hover:shadow-indigo-900/20"
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${gradient} mb-5 shadow-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <Badge variant="outline" className="mb-3 text-xs">{tag}</Badge>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-indigo-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── AGENTIC WORKFLOW ── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <Badge className="mb-4">Agentic AI</Badge>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
                9 AI Agents,{" "}
                <span className="gradient-text">One Unified Result</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                IBM Orchestrate coordinates specialized agents that each handle a critical piece of your business analysis
              </p>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
              {[
                { name: "Idea\nAgent", color: "from-indigo-500 to-indigo-600", icon: Lightbulb },
                { name: "Research\nAgent", color: "from-blue-500 to-blue-600", icon: Search },
                { name: "Trend\nAgent", color: "from-violet-500 to-violet-600", icon: TrendingUp },
                { name: "Competitor\nAgent", color: "from-purple-500 to-purple-600", icon: Target },
                { name: "Innovation\nAgent", color: "from-pink-500 to-pink-600", icon: Zap },
                { name: "Feasibility\nAgent", color: "from-rose-500 to-rose-600", icon: Shield },
                { name: "BizModel\nAgent", color: "from-orange-500 to-orange-600", icon: Layers },
                { name: "Roadmap\nAgent", color: "from-amber-500 to-amber-600", icon: GitBranch },
                { name: "Pitch\nAgent", color: "from-emerald-500 to-emerald-600", icon: Mic },
              ].map(({ name, color, icon: Icon }, i) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  custom={i}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    {i < 8 && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600 font-bold text-lg hidden lg:block">›</div>
                    )}
                  </div>
                  <span className="text-[10px] text-center text-slate-500 dark:text-slate-400 whitespace-pre-line leading-tight font-medium">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── IBM INTEGRATION ── */}
      <Section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">IBM Technology</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Built on{" "}
            <span className="gradient-text">IBM's AI Stack</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Enterprise-grade AI infrastructure delivering accuracy, trust, and scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              logo: "G",
              name: "IBM Granite Models",
              subtitle: "granite-13b-chat-v2",
              desc: "Foundation language model for business idea generation, market analysis, and report writing. Optimized for enterprise domain tasks.",
              color: "indigo",
            },
            {
              logo: "L",
              name: "IBM Langflow",
              subtitle: "Visual Agent Orchestration",
              desc: "Low-code visual workflow builder that chains our 9 AI agents. Each agent is a Langflow node with specialized prompts and tools.",
              color: "violet",
            },
            {
              logo: "O",
              name: "IBM Orchestrate",
              subtitle: "Workflow Automation",
              desc: "Automates multi-step AI workflows, handles agent handoffs, retries, and result aggregation for reliable enterprise-grade processing.",
              color: "purple",
            },
            {
              logo: "W",
              name: "IBM watsonx.ai",
              subtitle: "AI Studio Platform",
              desc: "Hosts fine-tuned Granite models, provides prompt engineering environment, and delivers responsible AI governance with bias detection.",
              color: "blue",
            },
            {
              logo: "K",
              name: "Knowledge Fusion",
              subtitle: "Multi-source Intelligence",
              desc: "IBM's data integration layer aggregates structured and unstructured data from research databases, news feeds, and market reports.",
              color: "indigo",
            },
            {
              logo: "P",
              name: "Predictive Analytics",
              subtitle: "Market Intelligence",
              desc: "Time-series models trained on startup success data predict market demand, growth curves, and investment potential with 92% accuracy.",
              color: "violet",
            },
          ].map(({ logo, name, subtitle, desc, color }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${color}-600 flex items-center justify-center text-white font-black text-xl shrink-0`} style={{background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`}}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white font-black text-lg">
                    {logo}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{name}</h3>
                  <p className="text-xs text-indigo-500">{subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Trusted by <span className="gradient-text">Innovators</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 card-hover"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── PRICING ── */}
      <Section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <Badge className="mb-4">Pricing</Badge>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto">Start free, scale as you grow</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative rounded-3xl border p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-indigo-600 to-violet-600 border-transparent text-white shadow-2xl shadow-indigo-200 dark:shadow-indigo-900/30 scale-105"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-white text-indigo-700 shadow-sm">Most Popular</Badge>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-indigo-200" : "text-slate-500"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black ${plan.highlighted ? "text-white" : "text-slate-900 dark:text-white"}`}>
                    ${plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-indigo-200" : "text-slate-400"}>/mo</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-white" : "text-indigo-500"}`} />
                    <span className={plan.highlighted ? "text-indigo-100" : "text-slate-600 dark:text-slate-400"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/generate">
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "secondary" : "default"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── CTA ── */}
      <Section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden gradient-bg p-16"
        >
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Ready to Generate Your<br />
              Next Big Idea?
            </h2>
            <p className="text-xl text-indigo-200 max-w-xl mx-auto">
              Join thousands of entrepreneurs using IBM AI to validate and launch successful businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/generate">
                <Button size="xl" variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50">
                  <Sparkles className="h-5 w-5" />
                  Generate Ideas Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="xl" variant="glass" className="text-white border-white/30 hover:bg-white/10">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-indigo-700/30 py-12 bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-white">IdeaForge AI</span>
              </div>
              <p className="text-sm text-indigo-200">IBM-powered business idea generator for the next generation of entrepreneurs.</p>
            </div>
            {[
              {
                title: "Product",
                links: [
                  { label: "Generate", href: "/generate" },
                  { label: "Dashboard", href: "/dashboard" },
                  { label: "Trends", href: "/trends" },
                  { label: "Pricing", href: "/#pricing" },
                ],
              },
              {
                title: "IBM AI",
                links: [
                  { label: "Granite Models", href: "https://www.ibm.com/products/watsonx-ai" },
                  { label: "Langflow", href: "https://www.langflow.org" },
                  { label: "Orchestrate", href: "https://www.ibm.com/products/ibm-orchestrate" },
                  { label: "watsonx", href: "https://www.ibm.com/watsonx" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "Careers", href: "/careers" },
                  { label: "Contact", href: "/contact" },
                ],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="font-semibold text-white mb-3 text-sm">{title}</h4>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm text-indigo-200 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-indigo-600/40 gap-4">
            <p className="text-sm text-indigo-200">© 2025 IdeaForge AI. Built for IBM Hackathon.</p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs border-indigo-400/50 text-indigo-100">IBM Powered</Badge>
              <Badge variant="outline" className="text-xs border-indigo-400/50 text-indigo-100">SOC 2 Type II</Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
