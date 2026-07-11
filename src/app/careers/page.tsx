"use client";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Globe,
  Heart,
  MapPin,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

const DEPARTMENTS = ["All", "Engineering", "Product & Design", "AI Research", "Sales & Growth", "Operations"];

const JOBS = [
  { id: 1, title: "Senior AI/ML Engineer", dept: "Engineering", location: "Remote / San Francisco", type: "Full-time", level: "Senior", color: "from-indigo-500 to-violet-500" },
  { id: 2, title: "LLM Fine-tuning Specialist", dept: "AI Research", location: "Remote / London", type: "Full-time", level: "Senior", color: "from-violet-500 to-purple-500" },
  { id: 3, title: "Full-Stack Engineer (Next.js)", dept: "Engineering", location: "Remote", type: "Full-time", level: "Mid", color: "from-blue-500 to-cyan-500" },
  { id: 4, title: "Product Manager – AI Workflows", dept: "Product & Design", location: "Remote / New York", type: "Full-time", level: "Senior", color: "from-purple-500 to-pink-500" },
  { id: 5, title: "Senior Product Designer", dept: "Product & Design", location: "Remote", type: "Full-time", level: "Senior", color: "from-rose-500 to-orange-500" },
  { id: 6, title: "Enterprise Sales Executive", dept: "Sales & Growth", location: "USA (East Coast)", type: "Full-time", level: "Senior", color: "from-emerald-500 to-teal-500" },
  { id: 7, title: "Developer Advocate – IBM AI", dept: "Sales & Growth", location: "Remote / Global", type: "Full-time", level: "Mid", color: "from-amber-500 to-orange-500" },
  { id: 8, title: "AI Research Intern", dept: "AI Research", location: "Remote", type: "Internship", level: "Intern", color: "from-cyan-500 to-blue-500" },
  { id: 9, title: "Data Engineer", dept: "Engineering", location: "Remote / Bangalore", type: "Full-time", level: "Mid", color: "from-indigo-400 to-blue-500" },
  { id: 10, title: "Head of Customer Success", dept: "Operations", location: "Remote", type: "Full-time", level: "Lead", color: "from-teal-500 to-emerald-500" },
];

const PERKS = [
  { icon: Globe, title: "100% Remote First", desc: "Work from anywhere in the world. We have teammates in 12 countries." },
  { icon: Brain, title: "IBM AI Access", desc: "Full access to IBM watsonx.ai, Granite models, and IBM Research resources." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision. Plus a $500/year wellness stipend." },
  { icon: Zap, title: "Fast Growth", desc: "Early-stage equity, rapid career progression, and direct impact on the product." },
  { icon: Users, title: "Dream Team", desc: "Work alongside ex-IBM, Google, and MIT engineers who love what they build." },
  { icon: CheckCircle, title: "Learning Budget", desc: "$2,000/year for courses, conferences, books, and certifications." },
];

const LEVEL_COLORS: Record<string, string> = {
  Intern: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  Mid: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800",
  Senior: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
  Lead: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
};

export default function CareersPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeDept, setActiveDept] = useState("All");
  const toggleTheme = () => {
    setTheme((p) => { const n = p === "light" ? "dark" : "light"; document.documentElement.classList.toggle("dark", n === "dark"); return n; });
  };

  const filtered = activeDept === "All" ? JOBS : JOBS.filter((j) => j.dept === activeDept);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-soft" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-16 right-1/4 w-80 h-80 bg-violet-200/30 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge className="mb-6 px-3 py-1.5 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <Sparkles className="h-3 w-3" /> We&apos;re Hiring
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              Help Us Build the Future of<br /><span className="gradient-text">AI-Powered Entrepreneurship</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We&apos;re a small, high-impact team on a mission to democratise business intelligence. If you love AI, startups, and building things that matter — we want to hear from you.
            </p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="flex justify-center gap-8 mt-10 text-center">
            {[{ v: `${JOBS.length}`, l: "Open Roles" }, { v: "12", l: "Countries" }, { v: "100%", l: "Remote" }].map(({ v, l }) => (
              <div key={l}>
                <div className="text-3xl font-black text-indigo-600">{v}</div>
                <div className="text-sm text-slate-500 mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <Badge className="mb-4">Why IdeaForge AI</Badge>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Life at IdeaForge</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
          <Badge className="mb-4">Open Positions</Badge>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Find Your Role</h2>
          {/* Dept filter */}
          <div className="flex flex-wrap gap-2">
            {DEPARTMENTS.map((d) => (
              <button key={d} onClick={() => setActiveDept(d)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeDept === d ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                {d}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {filtered.map(({ id, title, dept, location, type, level, color }, i) => (
            <motion.div key={id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-black text-sm shrink-0`}>
                {title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                  <span className="text-sm text-slate-500 flex items-center gap-1"><MapPin className="h-3 w-3" />{location}</span>
                  <span className="text-sm text-slate-500">{dept}</span>
                  <span className="text-sm text-slate-500">{type}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${LEVEL_COLORS[level]}`}>{level}</span>
                <Link href={`/careers/apply/${id}`}>
                  <Button size="sm" variant="outline" className="group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">
                    Apply <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400">No open roles in this department right now. Check back soon!</div>
        )}
      </section>

      {/* CTA */}
      <section className="pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-12">
          <Sparkles className="h-8 w-8 text-white/80 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-white mb-3">Don&apos;t See Your Perfect Role?</h2>
          <p className="text-indigo-200 mb-6 text-sm max-w-sm mx-auto">We love meeting talented people. Send us your CV and tell us how you&apos;d contribute.</p>
          <Link href="/contact">
            <Button className="bg-white text-indigo-700 hover:bg-white/90 shadow-none">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">© 2025 IdeaForge AI · <Link href="/about" className="hover:text-indigo-600">About</Link> · <Link href="/blog" className="hover:text-indigo-600">Blog</Link> · <Link href="/careers" className="hover:text-indigo-600">Careers</Link> · <Link href="/contact" className="hover:text-indigo-600">Contact</Link></p>
      </footer>
    </div>
  );
}
