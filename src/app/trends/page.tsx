"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DEMO_RESULT, MARKET_DATA, TRENDING_TOPICS } from "@/lib/demo-data";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Globe, TrendingDown, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HEATMAP_DATA = [
  { industry: "AI & ML", score: 98, trend: "up", growth: "+89%" },
  { industry: "CleanTech", score: 94, trend: "up", growth: "+67%" },
  { industry: "HealthTech", score: 91, trend: "up", growth: "+54%" },
  { industry: "FinTech", score: 88, trend: "up", growth: "+43%" },
  { industry: "EdTech", score: 82, trend: "up", growth: "+38%" },
  { industry: "AgriTech", score: 77, trend: "up", growth: "+31%" },
  { industry: "SpaceTech", score: 73, trend: "up", growth: "+45%" },
  { industry: "RetailTech", score: 69, trend: "down", growth: "+12%" },
  { industry: "PropTech", score: 65, trend: "down", growth: "+8%" },
  { industry: "LogisticsTech", score: 71, trend: "up", growth: "+24%" },
  { industry: "Cybersecurity", score: 86, trend: "up", growth: "+61%" },
  { industry: "BioTech", score: 79, trend: "up", growth: "+37%" },
];

const FORECAST_DATA = [
  { year: "2025", ai: 420, cleantech: 180, healthtech: 290 },
  { year: "2026", ai: 580, cleantech: 240, healthtech: 340 },
  { year: "2027", ai: 780, cleantech: 320, healthtech: 410 },
  { year: "2028", ai: 1050, cleantech: 440, healthtech: 500 },
  { year: "2029", ai: 1400, cleantech: 600, healthtech: 610 },
  { year: "2030", ai: 1850, cleantech: 820, healthtech: 750 },
];

export default function TrendsPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="h-5 w-5 text-indigo-600" />
            <Badge>Live Trend Intelligence</Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Trend Dashboard</h1>
          <p className="text-slate-500 text-sm mt-0.5">Real-time market intelligence powered by IBM Research Agent</p>
        </div>
        <Button variant="outline" size="sm">
          <Globe className="h-4 w-4" />
          Global View
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Markets Tracked", value: "47", color: "text-indigo-600", icon: Globe },
          { label: "Trending Up", value: "34", color: "text-emerald-600", icon: TrendingUp },
          { label: "Hot Sectors", value: "8", color: "text-orange-500", icon: Flame },
          { label: "Opportunity Score", value: "91", color: "text-violet-600", icon: ArrowUpRight },
        ].map(({ label, value, color, icon: Icon }) => (
          <div key={label} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex items-center gap-4">
            <Icon className={`h-8 w-8 ${color} opacity-80`} />
            <div>
              <div className={`text-3xl font-black ${color}`}>{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Popularity Graph */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-5">Idea Generation Activity</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={MARKET_DATA}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Area type="monotone" dataKey="ideas" stroke="#4f46e5" strokeWidth={2.5} fill="url(#g1)" name="Ideas" />
              <Area type="monotone" dataKey="searches" stroke="#7c3aed" strokeWidth={2.5} fill="url(#g2)" name="Searches" />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Future Forecast */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-slate-900 dark:text-white">Future Market Forecast</h3>
            <Badge variant="purple">IBM Predictive AI</Badge>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={FORECAST_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} unit="B" />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Legend />
              <Line type="monotone" dataKey="ai" stroke="#4f46e5" strokeWidth={2.5} name="AI/ML" dot={false} />
              <Line type="monotone" dataKey="cleantech" stroke="#059669" strokeWidth={2.5} name="CleanTech" dot={false} />
              <Line type="monotone" dataKey="healthtech" stroke="#7c3aed" strokeWidth={2.5} name="HealthTech" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Industry Heatmap */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-slate-900 dark:text-white">Industry Heatmap</h3>
          <p className="text-xs text-slate-400">Opportunity score (0–100) · Updated live</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {HEATMAP_DATA.map((item) => {
            const hue = item.score > 90 ? "from-indigo-500 to-indigo-600" : item.score > 80 ? "from-violet-500 to-violet-600" : item.score > 70 ? "from-purple-400 to-purple-500" : "from-slate-300 to-slate-400";
            return (
              <div
                key={item.industry}
                className={`relative rounded-xl p-4 bg-gradient-to-br ${hue} text-white overflow-hidden cursor-pointer hover:scale-105 transition-transform`}
              >
                <div className="font-bold text-xs leading-tight mb-2">{item.industry}</div>
                <div className="text-3xl font-black">{item.score}</div>
                <div className="flex items-center gap-1 mt-1">
                  {item.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-white/80" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-white/80" />
                  )}
                  <span className="text-[10px] text-white/80">{item.growth}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center gap-2 mb-5">
          <Flame className="h-4 w-4 text-orange-500" />
          <h3 className="font-bold text-slate-900 dark:text-white">Trending Topics</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TRENDING_TOPICS.map((t) => (
            <div key={t.topic} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2">
                {t.hot && <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />}
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.topic}</span>
              </div>
              <Badge variant="success">{t.growth}</Badge>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
