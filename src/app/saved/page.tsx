"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEMO_IDEAS } from "@/lib/demo-data";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Filter,
  Heart,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SavedPage() {
  const [search, setSearch] = useState("");

  const filtered = DEMO_IDEAS.filter(
    (idea) =>
      idea.name.toLowerCase().includes(search.toLowerCase()) ||
      idea.tagline.toLowerCase().includes(search.toLowerCase()) ||
      idea.industry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Heart className="h-5 w-5 text-rose-500" />
            <Badge>My Collection</Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Saved Ideas</h1>
          <p className="text-slate-500 text-sm mt-0.5">{DEMO_IDEAS.length} ideas in your library</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Link href="/generate">
            <Button size="sm">
              <Sparkles className="h-4 w-4" />
              Generate New
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <Input
          className="flex-1"
          placeholder="Search ideas..."
          icon={<Search className="h-4 w-4" />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </motion.div>

      {/* Ideas Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((idea, i) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg hover:shadow-indigo-100/50 dark:hover:shadow-none transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xl font-black shadow-md">
                {idea.name.charAt(0)}
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {/* Info */}
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">{idea.name}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">{idea.tagline}</p>

            {/* Tags */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge variant="outline" className="text-xs">{idea.industry}</Badge>
              <span className="text-xs text-slate-400">{idea.date}</span>
            </div>

            {/* Score & CTA */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="text-2xl font-black text-indigo-600">{idea.score}</div>
                <div className="text-xs text-slate-400">/ 100</div>
              </div>
              <Link href="/results">
                <Button variant="ghost" size="sm" className="text-indigo-600 gap-1">
                  View <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}

        {/* Add New */}
        <Link href="/generate">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: filtered.length * 0.06 }}
            className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-indigo-600" />
            </div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Generate New Idea</span>
          </motion.div>
        </Link>
      </div>
    </DashboardLayout>
  );
}
