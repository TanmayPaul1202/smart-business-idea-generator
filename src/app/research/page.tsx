"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_RESULT } from "@/lib/demo-data";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Database, ExternalLink, RefreshCw, Search, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const SOURCES = [
  { title: "IBM Granite Enterprise AI Performance Study 2024", source: "IBM Research", type: "Paper", relevance: 98 },
  { title: "Global Carbon Management Software Market Report", source: "Gartner", type: "Report", relevance: 95 },
  { title: "SEC Climate Disclosure Rules — Final Ruling", source: "SEC.gov", type: "Regulatory", relevance: 92 },
  { title: "Corporate ESG Data Management: A Framework", source: "Harvard Business Review", type: "Article", relevance: 89 },
  { title: "IoT-Enabled Carbon Monitoring: State of the Art", source: "arXiv", type: "Paper", relevance: 87 },
  { title: "Voluntary Carbon Market Outlook 2025–2030", source: "BloombergNEF", type: "Report", relevance: 84 },
  { title: "AI in Sustainability: Enterprise Adoption Trends", source: "McKinsey", type: "Report", relevance: 91 },
  { title: "Carbon Accounting Standards Comparison Guide", source: "TCFD", type: "Standard", relevance: 86 },
];

export default function ResearchPage() {
  const [isSearching, setIsSearching] = useState(false);
  const [searched, setSearched] = useState(true);

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            <Badge>Knowledge Fusion</Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Research Agent</h1>
          <p className="text-slate-500 text-sm mt-0.5">IBM Research Agent — Aggregating insights from 50+ sources</p>
        </div>
        <Button
          size="sm"
          onClick={() => {
            setIsSearching(true);
            setTimeout(() => { setIsSearching(false); setSearched(true); }, 2000);
          }}
          loading={isSearching}
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Sources Scanned", value: "2,847", icon: Database, color: "text-indigo-600" },
          { label: "Papers Found", value: "184", icon: BookOpen, color: "text-violet-600" },
          { label: "Insights Extracted", value: "63", icon: Sparkles, color: "text-purple-600" },
          { label: "Confidence Score", value: "94%", icon: CheckCircle, color: "text-emerald-600" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
            <Icon className={`h-5 w-5 ${color} mb-2`} />
            <div className={`text-2xl font-black ${color}`}>{value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Key Insights */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <Zap className="h-4 w-4 text-indigo-500" />
          <h3 className="font-bold text-slate-900 dark:text-white">Key Insights</h3>
          <Badge className="ml-auto text-xs">IBM Granite Analysis</Badge>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {DEMO_RESULT.insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-indigo-950/20 dark:to-slate-900 rounded-xl border border-indigo-100 dark:border-indigo-900/50"
            >
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{insight}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Search className="h-4 w-4 text-slate-500" />
          <h3 className="font-bold text-slate-900 dark:text-white">Research Sources</h3>
          <span className="text-xs text-slate-400 ml-1">({SOURCES.length} of 2,847)</span>
        </div>
        <div className="space-y-3">
          {SOURCES.map((source, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {source.type[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 dark:text-white text-sm truncate">{source.title}</span>
                  <ExternalLink className="h-3 w-3 text-slate-300 group-hover:text-indigo-500 shrink-0 transition-colors" />
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-slate-400">{source.source}</span>
                  <Badge variant="outline" className="text-[10px]">{source.type}</Badge>
                </div>
              </div>
              <div className="shrink-0">
                <div className="text-right mb-0.5">
                  <span className="font-black text-indigo-600 text-lg">{source.relevance}%</span>
                </div>
                <div className="text-[10px] text-slate-400 text-right">relevance</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
