"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_RESULT } from "@/lib/demo-data";
import { motion } from "framer-motion";
import { CheckCircle, ExternalLink, Target, TrendingUp, XCircle, Zap } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MARKET_SHARE = [
  { name: "Salesforce", value: 18, color: "#4f46e5" },
  { name: "Microsoft", value: 15, color: "#7c3aed" },
  { name: "SAP", value: 12, color: "#a855f7" },
  { name: "Watershed", value: 8, color: "#c084fc" },
  { name: "Others", value: 47, color: "#e2e8f0" },
];

export default function CompetitorPage() {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Target className="h-5 w-5 text-indigo-600" />
          <Badge>Competitor Intelligence</Badge>
        </div>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">Competitor Analysis</h1>
        <p className="text-slate-500 text-sm mt-0.5">IBM Competitor Agent — Real-time competitive landscape mapping</p>
      </motion.div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Competitors Found", value: "12", icon: Target, color: "text-indigo-600" },
          { label: "Market Gap", value: "72%", icon: Zap, color: "text-emerald-600" },
          { label: "Our Advantage", value: "High", icon: TrendingUp, color: "text-violet-600" },
          { label: "Threat Level", value: "Medium", icon: CheckCircle, color: "text-amber-500" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
            <Icon className={`h-5 w-5 ${color} mb-2`} />
            <div className={`text-2xl font-black ${color}`}>{value}</div>
            <div className="text-xs text-slate-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Market Share */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-5">Market Share Distribution</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={MARKET_SHARE} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} unit="%" />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} width={80} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                {MARKET_SHARE.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Capability Radar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-5">Capability Comparison</h3>
          <ResponsiveContainer width="100%" height={240}>
            <RadarChart data={DEMO_RESULT.chartData.competitorRadar}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: "#94a3b8" }} />
              <Radar name="EcoTrack AI" dataKey="ours" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.25} strokeWidth={2} />
              <Radar name="Salesforce" dataKey="salesforce" stroke="#ec4899" fill="#ec4899" fillOpacity={0.1} strokeWidth={1.5} />
              <Legend />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Competitor Details */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <h3 className="font-bold text-slate-900 dark:text-white mb-5">Detailed Competitor Profiles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {DEMO_RESULT.competitors.map((comp) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-5 rounded-2xl border ${comp.name.includes("Ours") ? "border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl ${comp.name.includes("Ours") ? "bg-gradient-to-br from-indigo-600 to-violet-600" : "bg-slate-300 dark:bg-slate-600"} flex items-center justify-center text-white text-sm font-bold`}>
                    {comp.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{comp.name}</div>
                    <div className="text-xs text-slate-400">{comp.pricing}</div>
                  </div>
                </div>
                {comp.name.includes("Ours") && <Badge className="text-xs">Our Position</Badge>}
              </div>

              <div className="flex gap-2 mb-3">
                <Badge variant="success" className="text-xs">{comp.marketShare}% market share</Badge>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase mb-2">Strengths</p>
                  {comp.strengths.map((s) => (
                    <div key={s} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <CheckCircle className="h-3 w-3 text-emerald-500 shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-rose-600 uppercase mb-2">Weaknesses</p>
                  {comp.weaknesses.map((w) => (
                    <div key={w} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 mb-1">
                      <XCircle className="h-3 w-3 text-rose-500 shrink-0" />
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
