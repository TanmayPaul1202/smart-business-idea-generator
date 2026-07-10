"use client";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  Tag,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

const CATEGORIES = ["All", "AI & Technology", "Entrepreneurship", "IBM Granite", "Market Trends", "Case Studies"];

const POSTS = [
  {
    id: 1,
    title: "How IBM Granite Models Are Reshaping Business Idea Validation",
    excerpt: "A deep dive into how granite-13b-chat-v2 and granite-34b enable more accurate, context-aware business analysis than general-purpose LLMs.",
    category: "IBM Granite",
    date: "Jan 20, 2025",
    readTime: "8 min read",
    featured: true,
    color: "from-indigo-500 to-violet-600",
    initials: "IG",
  },
  {
    id: 2,
    title: "The Rise of Agentic AI: What 9 Specialised Agents Can Do That 1 Cannot",
    excerpt: "Why multi-agent orchestration outperforms single-model approaches for complex business tasks — and how Langflow makes it accessible.",
    category: "AI & Technology",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    featured: true,
    color: "from-violet-500 to-purple-600",
    initials: "AI",
  },
  {
    id: 3,
    title: "From Napkin Sketch to $2M Seed Round: The EcoTrack AI Story",
    excerpt: "How a weekend hackathon project became a funded CleanTech startup using AI-powered validation and IBM-backed infrastructure.",
    category: "Case Studies",
    date: "Jan 10, 2025",
    readTime: "10 min read",
    featured: false,
    color: "from-emerald-500 to-teal-600",
    initials: "CS",
  },
  {
    id: 4,
    title: "5 Market Trends Every Entrepreneur Should Watch in 2025",
    excerpt: "From generative AI enterprise adoption to carbon credit markets — our Research Agent analysed 10,000 data points so you don't have to.",
    category: "Market Trends",
    date: "Jan 8, 2025",
    readTime: "5 min read",
    featured: false,
    color: "from-amber-500 to-orange-600",
    initials: "MT",
  },
  {
    id: 5,
    title: "Validating a Business Idea in Under 30 Seconds: A Step-by-Step Guide",
    excerpt: "A practical walkthrough of the IdeaForge AI workflow — from prompt to full business plan, competitor map, and investor pitch.",
    category: "Entrepreneurship",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    featured: false,
    color: "from-blue-500 to-cyan-600",
    initials: "GD",
  },
  {
    id: 6,
    title: "Why SOC 2 Type II Compliance Matters for AI-Powered Business Tools",
    excerpt: "A plain-English explainer of enterprise security standards and what IdeaForge AI does to protect your proprietary business ideas.",
    category: "AI & Technology",
    date: "Dec 28, 2024",
    readTime: "4 min read",
    featured: false,
    color: "from-rose-500 to-pink-600",
    initials: "SC",
  },
  {
    id: 7,
    title: "Multimodal AI Inputs: Why Sketches and Voice Notes Unlock Better Ideas",
    excerpt: "Research shows that entrepreneurs who describe ideas visually generate 40% more novel concepts. Here's how multimodal AI captures that.",
    category: "AI & Technology",
    date: "Dec 20, 2024",
    readTime: "6 min read",
    featured: false,
    color: "from-purple-500 to-violet-600",
    initials: "MM",
  },
  {
    id: 8,
    title: "The Business Model Canvas, Reimagined for the Age of Generative AI",
    excerpt: "How AI agents can automatically fill every cell of the BMC with data-backed content — and what founders should still do manually.",
    category: "Entrepreneurship",
    date: "Dec 15, 2024",
    readTime: "9 min read",
    featured: false,
    color: "from-indigo-500 to-blue-600",
    initials: "BM",
  },
];

export default function BlogPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeCategory, setActiveCategory] = useState("All");
  const toggleTheme = () => {
    setTheme((p) => { const n = p === "light" ? "dark" : "light"; document.documentElement.classList.toggle("dark", n === "dark"); return n; });
  };

  const filtered = activeCategory === "All" ? POSTS : POSTS.filter((p) => p.category === activeCategory);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-soft" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge className="mb-6 px-3 py-1.5 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <BookOpen className="h-3 w-3" /> IdeaForge Blog
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-5">
              Insights on <span className="gradient-text">AI, Startups</span><br />& the Future of Business
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Deep dives, tutorials, and market intelligence from the IdeaForge AI team and the IBM Granite ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-16 z-30 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Featured posts */}
        {featured.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-4 w-4 text-indigo-600" />
              <h2 className="font-bold text-slate-900 dark:text-white">Featured</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {featured.map(({ id, title, excerpt, category, date, readTime, color, initials }, i) => (
                <motion.div key={id} initial="hidden" animate="visible" variants={fadeUp} custom={i}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-indigo-100/40 dark:hover:shadow-none transition-all cursor-pointer">
                  <div className={`h-40 bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white text-2xl font-black">{initials}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800"><Tag className="h-2.5 w-2.5" />{category}</Badge>
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="h-3 w-3" />{readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{date}</span>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">Read more <ArrowRight className="h-3 w-3" /></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All posts */}
        {rest.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-4 w-4 text-indigo-600" />
              <h2 className="font-bold text-slate-900 dark:text-white">Latest Articles</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map(({ id, title, excerpt, category, date, readTime, color, initials }, i) => (
                <motion.div key={id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg hover:shadow-indigo-100/30 transition-all cursor-pointer">
                  <div className={`h-28 bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white font-black">{initials}</div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{category}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="h-2.5 w-2.5" />{readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{date}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-20 rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 p-10 text-center">
          <Sparkles className="h-8 w-8 text-white/80 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-white mb-3">Stay Ahead of the Curve</h2>
          <p className="text-indigo-200 mb-6 max-w-md mx-auto text-sm">Weekly insights on AI, startup strategy, and IBM innovation — straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input placeholder="you@example.com" className="flex-1 px-4 py-2.5 rounded-xl text-sm bg-white/10 text-white placeholder-indigo-300 border border-white/20 focus:outline-none focus:border-white/50" />
            <Button className="bg-white text-indigo-700 hover:bg-white/90 shadow-none shrink-0">Subscribe</Button>
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">© 2025 IdeaForge AI · <Link href="/about" className="hover:text-indigo-600">About</Link> · <Link href="/blog" className="hover:text-indigo-600">Blog</Link> · <Link href="/careers" className="hover:text-indigo-600">Careers</Link> · <Link href="/contact" className="hover:text-indigo-600">Contact</Link></p>
      </footer>
    </div>
  );
}
