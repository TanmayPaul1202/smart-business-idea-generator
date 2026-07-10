"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getUser } from "@/lib/auth";
import { DEMO_IDEAS, MARKET_DATA, TRENDING_TOPICS } from "@/lib/demo-data";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Clock,
  Flame,
  Heart,
  Lightbulb,
  Plus,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

export default function DashboardPage() {
  const user = typeof window !== "undefined" ? getUser() : null;
  const firstName = user?.name?.split(" ")[0] ?? "there";

  return (
    <DashboardLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Your AI workspace is ready. 3 new ideas are waiting for review.
          </p>
        </div>
        <Link href="/generate">
          <Button size="lg">
            <Plus className="h-4 w-4" />
            New Idea
          </Button>
        </Link>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Ideas Generated",
            value: "24",
            delta: "+3 this week",
            icon: Lightbulb,
            color: "text-indigo-600",
            bg: "bg-indigo-50 dark:bg-indigo-950/50",
            i: 0,
          },
          {
            label: "Avg Score",
            value: "87.4",
            delta: "+2.1 pts",
            icon: Sparkles,
            color: "text-violet-600",
            bg: "bg-violet-50 dark:bg-violet-950/50",
            i: 1,
          },
          {
            label: "Agents Used",
            value: "9",
            delta: "All active",
            icon: Brain,
            color: "text-purple-600",
            bg: "bg-purple-50 dark:bg-purple-950/50",
            i: 2,
          },
          {
            label: "Saved Ideas",
            value: "12",
            delta: "+1 today",
            icon: Heart,
            color: "text-rose-500",
            bg: "bg-rose-50 dark:bg-rose-950/50",
            i: 3,
          },
        ].map(({ label, value, delta, icon: Icon, color, bg, i }) => (
          <motion.div
            key={label}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
              <div className={`p-2 rounded-xl ${bg}`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{value}</div>
            <div className="text-xs text-emerald-500 font-medium">{delta}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Chart */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white">Activity Overview</h2>
              <p className="text-sm text-slate-500">Ideas generated per month</p>
            </div>
            <Badge variant="success">+23% vs last month</Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={MARKET_DATA}>
              <defs>
                <linearGradient id="colorIdeas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="ideas"
                stroke="#4f46e5"
                strokeWidth={2.5}
                fill="url(#colorIdeas)"
                dot={{ fill: "#4f46e5", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Trending */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900 dark:text-white">Trending Topics</h2>
            <Flame className="h-4 w-4 text-orange-500" />
          </div>
          <div className="space-y-3">
            {TRENDING_TOPICS.map((t) => (
              <div key={t.topic} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  {t.hot && <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0 animate-pulse" />}
                  <span className="text-sm text-slate-700 dark:text-slate-300 truncate">{t.topic}</span>
                </div>
                <Badge variant="success" className="text-[10px] shrink-0">{t.growth}</Badge>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link href="/trends">
              <Button variant="ghost" size="sm" className="w-full text-indigo-600">
                View Trend Dashboard <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Recent Ideas */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900 dark:text-white">Recent Ideas</h2>
            <Link href="/saved">
              <Button variant="ghost" size="sm">View all</Button>
            </Link>
          </div>
          <div className="space-y-3">
            {DEMO_IDEAS.map((idea) => (
              <Link key={idea.id} href="/results">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {idea.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 dark:text-white text-sm truncate">{idea.name}</span>
                      <Badge variant="outline" className="text-[10px] shrink-0">{idea.industry}</Badge>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{idea.tagline}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-lg font-black text-indigo-600">{idea.score}</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions + AI Agents */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
          >
            <h2 className="font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {[
                { label: "Generate from Text", icon: Sparkles, href: "/generate", color: "text-indigo-600" },
                { label: "Explore Trends", icon: TrendingUp, href: "/trends", color: "text-violet-600" },
                { label: "View Competitors", icon: Target, href: "/competitor", color: "text-purple-600" },
                { label: "Build Roadmap", icon: Zap, href: "/roadmap", color: "text-emerald-600" },
              ].map(({ label, icon: Icon, href, color }) => (
                <Link key={label} href={href}>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                    <Icon className={`h-4 w-4 ${color}`} />
                    <span className="text-sm text-slate-700 dark:text-slate-300 font-medium flex-1">{label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-slate-900 dark:text-white">AI Agents Status</h2>
              <span className="flex items-center gap-1 text-xs text-emerald-500">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                All Online
              </span>
            </div>
            <div className="space-y-2.5">
              {[
                { name: "Idea Agent", usage: 94, color: "indigo" as const },
                { name: "Research Agent", usage: 87, color: "purple" as const },
                { name: "Trend Agent", usage: 79, color: "purple" as const },
                { name: "Pitch Agent", usage: 91, color: "emerald" as const },
              ].map(({ name, usage, color }) => (
                <div key={name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 dark:text-slate-400">{name}</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{usage}%</span>
                  </div>
                  <Progress value={usage} color={color} className="h-1.5" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Activity Timeline */}
      <motion.div
        custom={9}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
      >
        <h2 className="font-bold text-slate-900 dark:text-white mb-5">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { time: "2 min ago", action: "Generated idea: EcoTrack AI", type: "generate", icon: Sparkles },
            { time: "1 hour ago", action: "Saved idea: SkillForge to favorites", type: "save", icon: Heart },
            { time: "3 hours ago", action: "Exported pitch deck for MediSync", type: "export", icon: ArrowUpRight },
            { time: "Yesterday", action: "Completed competitor analysis for FinGuard", type: "analyze", icon: Target },
            { time: "2 days ago", action: "Generated roadmap for AgriSense", type: "roadmap", icon: Clock },
          ].map(({ time, action, icon: Icon }, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="h-3.5 w-3.5 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 dark:text-slate-300">{action}</p>
                <p className="text-xs text-slate-400 mt-0.5">{time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
