"use client";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Globe,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const TEAM = [
  { name: "Aryan Sharma", role: "Founder & CEO", initials: "AS", color: "from-indigo-500 to-violet-500", bio: "Former IBM Research engineer with 8 years in AI/ML. Passionate about democratising entrepreneurship." },
  { name: "Priya Nair", role: "CTO", initials: "PN", color: "from-violet-500 to-purple-500", bio: "PhD in NLP from IIT Bombay. Led the IBM Granite integration and agentic workflow architecture." },
  { name: "Marcus Lee", role: "Head of Product", initials: "ML", color: "from-purple-500 to-pink-500", bio: "Ex-Google PM with a track record of shipping AI products used by millions." },
  { name: "Fatima Al-Rashid", role: "Lead AI Engineer", initials: "FA", color: "from-rose-500 to-orange-500", bio: "Specialist in large language model fine-tuning and multi-agent orchestration." },
  { name: "James Obi", role: "Head of Design", initials: "JO", color: "from-emerald-500 to-teal-500", bio: "Award-winning product designer focused on making complex AI workflows feel effortless." },
  { name: "Soo-Jin Park", role: "Head of Growth", initials: "SP", color: "from-cyan-500 to-blue-500", bio: "Growth hacker who scaled three startups from 0 to 100K users. Startup ecosystem connector." },
];

const VALUES = [
  { icon: Brain, title: "AI-First", desc: "Every feature is built around intelligent automation — we don't bolt AI on, we design with it.", color: "text-indigo-600", bg: "bg-indigo-50 dark:bg-indigo-950/40" },
  { icon: Shield, title: "Trust & Safety", desc: "Enterprise-grade security, SOC 2 Type II compliance, and full data sovereignty for every user.", color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/40" },
  { icon: Globe, title: "Global Reach", desc: "Built for entrepreneurs in every market — localised insights across 50+ countries and regions.", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/40" },
  { icon: Heart, title: "Founder-Centric", desc: "We obsess over the founder's journey — from a napkin sketch to a funded company.", color: "text-rose-600", bg: "bg-rose-50 dark:bg-rose-950/40" },
  { icon: Zap, title: "Speed", desc: "Ideas validated in under 30 seconds. Because opportunity doesn't wait.", color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/40" },
  { icon: Users, title: "Community", desc: "A growing network of 50,000+ entrepreneurs sharing ideas, feedback, and co-founder leads.", color: "text-violet-600", bg: "bg-violet-50 dark:bg-violet-950/40" },
];

const MILESTONES = [
  { year: "2023", title: "Idea Born", desc: "Founded during IBM's internal hackathon. First prototype generates 5 business ideas in 2 minutes." },
  { year: "2024 Q1", title: "IBM Integration", desc: "Deep integration with IBM Granite models and watsonx.ai. Agentic workflow with 9 specialised AI agents launched." },
  { year: "2024 Q3", title: "Public Beta", desc: "10,000 users onboarded in the first week. Featured in TechCrunch and Forbes as a top AI startup tool." },
  { year: "2024 Q4", title: "Seed Round", desc: "$2.5M seed funding raised from top-tier VCs. Team grows to 15 people across 4 countries." },
  { year: "2025", title: "IBM Hackathon", desc: "Selected for IBM SkillsBuild AI Agent Challenge. Expanding to enterprise customers globally." },
];

export default function AboutPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((p) => { const n = p === "light" ? "dark" : "light"; document.documentElement.classList.toggle("dark", n === "dark"); return n; });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-soft" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge className="mb-6 px-3 py-1.5 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <Sparkles className="h-3 w-3" /> Our Story
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              We Believe Every Great<br />
              <span className="gradient-text">Business Starts with an Idea</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              IdeaForge AI was built to level the playing field — giving every entrepreneur access to the same quality of business intelligence that Fortune 500 companies spend millions to acquire, in seconds, powered by IBM Granite AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Ideas Generated" },
              { value: "9", label: "AI Agents" },
              { value: "92%", label: "Accuracy Score" },
              { value: "120+", label: "Countries" },
            ].map(({ value, label }, i) => (
              <motion.div key={label} initial="hidden" animate="visible" variants={fadeUp} custom={i}>
                <div className="text-4xl font-black text-white mb-1">{value}</div>
                <div className="text-sm text-indigo-200">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
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
              The best business ideas don't come from the most experienced people — they come from people who deeply understand a problem. Our mission is to give those people the tools to validate, refine, and launch those ideas with confidence.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Powered by IBM Granite AI, Langflow, and IBM Orchestrate, IdeaForge AI runs a multi-agent workflow that does in 30 seconds what used to take a consulting firm 3 weeks.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-900/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">IBM-Powered Stack</div>
                <div className="text-xs text-slate-500">Enterprise-grade AI for everyone</div>
              </div>
            </div>
            <div className="space-y-3">
              {["IBM Granite 13B & 34B Models", "IBM watsonx.ai Platform", "IBM Langflow Orchestration", "IBM Orchestrate Automation", "9 Specialised AI Agents"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <Badge className="mb-4">What We Stand For</Badge>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Our Core Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <Badge className="mb-4">The People Behind It</Badge>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">Meet the Team</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">A diverse team of AI engineers, designers, and entrepreneurs united by one mission.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map(({ name, role, initials, color, bio }, i) => (
            <motion.div key={name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-xl font-black mx-auto mb-4`}>
                {initials}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{name}</h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-3">{role}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Milestones</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 to-violet-400" />
            <div className="space-y-8 pl-20">
              {MILESTONES.map(({ year, title, desc }, i) => (
                <motion.div key={year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="relative">
                  <div className="absolute -left-14 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">{year}</div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-14">
          <div className="absolute inset-0 dot-pattern opacity-20 rounded-3xl" />
          <Sparkles className="h-10 w-10 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-white mb-4">Ready to Forge Your Idea?</h2>
          <p className="text-indigo-200 mb-8 max-w-md mx-auto">Join 50,000+ entrepreneurs already using IBM AI to build the next generation of businesses.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/generate"><Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90 shadow-none"><Sparkles className="h-4 w-4" /> Get Started Free</Button></Link>
            <Link href="/contact"><Button size="lg" className="bg-white/15 text-white border border-white/30 hover:bg-white/25 shadow-none"><ArrowRight className="h-4 w-4" /> Contact Us</Button></Link>
          </div>
        </motion.div>
      </section>

      {/* Footer note */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">© 2025 IdeaForge AI · <Link href="/about" className="hover:text-indigo-600">About</Link> · <Link href="/blog" className="hover:text-indigo-600">Blog</Link> · <Link href="/careers" className="hover:text-indigo-600">Careers</Link> · <Link href="/contact" className="hover:text-indigo-600">Contact</Link></p>
      </footer>
    </div>
  );
}
