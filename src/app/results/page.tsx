"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScoreCircle } from "@/components/ui/score-circle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DEMO_RESULT } from "@/lib/demo-data";
import { formatNumber } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Building,
  CheckCircle,
  Copy,
  Download,
  FileText,
  Heart,
  Lightbulb,
  Map,
  Mic,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ResultsPage() {
  const [r, setR] = useState(DEMO_RESULT);

  useEffect(() => {
    const stored = sessionStorage.getItem("ideaforge_result");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Deep-merge with DEMO_RESULT so charts/arrays always have fallbacks
        setR({ ...DEMO_RESULT, ...parsed });
      } catch {
        // malformed — keep DEMO_RESULT
      }
    }
  }, []);

  return (
    <DashboardLayout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="success">
              <CheckCircle className="h-3 w-3" />
              Analysis Complete
            </Badge>
            <Badge variant="outline" className="text-xs">IBM Granite · 9 Agents</Badge>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">{r.name}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">{r.tagline}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm">
            <Heart className="h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </motion.div>

      {/* Score Cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col items-center gap-3">
          <ScoreCircle score={r.innovationScore} label="Innovation" color="indigo" />
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col items-center gap-3">
          <ScoreCircle score={r.feasibilityScore} label="Feasibility" color="emerald" />
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex flex-col items-center gap-3">
          <ScoreCircle score={r.marketReadinessScore} label="Market Fit" color="purple" />
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 flex items-center justify-center gap-4 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-black text-emerald-600">{r.cagr}%</div>
            <div className="text-xs text-slate-500 mt-0.5">CAGR</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-indigo-600">{formatNumber(r.marketSize)}</div>
            <div className="text-xs text-slate-500 mt-0.5">Market Size</div>
          </div>
        </div>
      </motion.div>

      {/* Main Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs defaultValue="overview">
          <TabsList className="flex-wrap gap-1 h-auto mb-6">
            <TabsTrigger value="overview"><Lightbulb className="h-3.5 w-3.5" />Overview</TabsTrigger>
            <TabsTrigger value="market"><TrendingUp className="h-3.5 w-3.5" />Market</TabsTrigger>
            <TabsTrigger value="competitors"><Target className="h-3.5 w-3.5" />Competitors</TabsTrigger>
            <TabsTrigger value="business"><Building className="h-3.5 w-3.5" />Business Model</TabsTrigger>
            <TabsTrigger value="pitch"><Mic className="h-3.5 w-3.5" />Pitch</TabsTrigger>
            <TabsTrigger value="roadmap"><Map className="h-3.5 w-3.5" />Roadmap</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Problem/Solution */}
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="h-4 w-4 text-rose-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Problem</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{r.problem}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Solution</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{r.solution}</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-indigo-600" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Unique Value Proposition</h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{r.usp}</p>
                </div>
              </div>

              {/* SWOT */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5">SWOT Analysis</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Strengths", items: r.swot.strengths, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950/20", border: "border-emerald-200 dark:border-emerald-900" },
                    { label: "Weaknesses", items: r.swot.weaknesses, color: "text-rose-600", bg: "bg-rose-50 dark:bg-rose-950/20", border: "border-rose-200 dark:border-rose-900" },
                    { label: "Opportunities", items: r.swot.opportunities, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/20", border: "border-blue-200 dark:border-blue-900" },
                    { label: "Threats", items: r.swot.threats, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/20", border: "border-amber-200 dark:border-amber-900" },
                  ].map(({ label, items, color, bg, border }) => (
                    <div key={label} className={`${bg} ${border} border rounded-xl p-4`}>
                      <h4 className={`font-bold text-sm ${color} mb-3`}>{label}</h4>
                      <ul className="space-y-1.5">
                        {items.map((item) => (
                          <li key={item} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                            <span className="mt-1 shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Personas */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Users className="h-4 w-4 text-violet-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">Customer Personas</h3>
                </div>
                <div className="space-y-4">
                  {r.customerPersona.map((p) => (
                    <div key={p.name} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                        {p.name.split(" ")[0][0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{p.name}</h4>
                        <p className="text-xs text-rose-500 mt-0.5">😤 {p.pain}</p>
                        <p className="text-xs text-emerald-500 mt-0.5">✅ {p.gain}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Model */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">Revenue Model</h3>
                </div>
                <div className="space-y-4">
                  {r.revenueModel.map((rm, i) => (
                    <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{rm.type}</h4>
                        <Badge variant="success" className="text-[10px] shrink-0">{rm.revenue}</Badge>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{rm.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Investment Estimate</span>
                    <div className="text-right">
                      <div className="font-black text-lg text-indigo-600">
                        {formatNumber(r.investmentEstimate.min)} – {formatNumber(r.investmentEstimate.max)}
                      </div>
                      <div className="text-xs text-slate-500">{r.investmentEstimate.round}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Market Tab */}
          <TabsContent value="market">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5">Market Size Growth</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={r.chartData.marketGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} unit="B" />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
                    <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} dot={{ fill: "#4f46e5", r: 5 }} activeDot={{ r: 7 }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-xs text-slate-400 text-center mt-2">Market size in $B — 22.5% CAGR</p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5">Industry Innovation Score</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={r.chartData.industryComparison} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <YAxis dataKey="category" type="category" tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} width={80} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
                    <Bar dataKey="score" radius={[0, 6, 6, 0]}>
                      {r.chartData.industryComparison.map((_, i) => (
                        <Cell key={i} fill={i === 0 ? "#4f46e5" : "#c7d2fe"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Key Insights */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen className="h-4 w-4 text-indigo-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">AI Research Insights</h3>
                  <Badge className="ml-auto">IBM Research Agent</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {r.insights.map((insight, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trends */}
              <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5">Trend Alignment Score</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {r.trends.map((trend) => (
                    <div key={trend.name} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">
                      <div className="font-black text-2xl text-indigo-600">{trend.growth}%</div>
                      <div className="text-xs text-slate-500 mt-1">{trend.name}</div>
                      <div className="mt-2">
                        <Progress value={trend.growth} className="h-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Competitors Tab */}
          <TabsContent value="competitors">
            <div className="grid gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5">Competitive Landscape</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {r.competitors.map((comp) => (
                    <div
                      key={comp.name}
                      className={`p-5 rounded-2xl border ${comp.name.includes("Ours") ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/30" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg ${comp.name.includes("Ours") ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-600"} flex items-center justify-center text-white text-xs font-bold`}>
                            {comp.name[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white text-sm">{comp.name}</div>
                            <div className="text-xs text-slate-400">{comp.pricing}</div>
                          </div>
                        </div>
                        <Badge variant={comp.name.includes("Ours") ? "default" : "outline"} className="text-xs">
                          {comp.marketShare}% share
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-[10px] font-semibold text-emerald-600 mb-1">STRENGTHS</p>
                          {comp.strengths.map((s) => (
                            <div key={s} className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mb-0.5">
                              <CheckCircle className="h-3 w-3 text-emerald-500 shrink-0" /> {s}
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-rose-600 mb-1">WEAKNESSES</p>
                          {comp.weaknesses.map((w) => (
                            <div key={w} className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400 mb-0.5">
                              <XCircle className="h-3 w-3 text-rose-500 shrink-0" /> {w}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Radar chart */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-5">Capability Comparison Radar</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={r.chartData.competitorRadar}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                    <Radar name="EcoTrack AI" dataKey="ours" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.2} strokeWidth={2} />
                    <Radar name="Salesforce" dataKey="salesforce" stroke="#ec4899" fill="#ec4899" fillOpacity={0.1} strokeWidth={2} />
                    <Radar name="Microsoft" dataKey="microsoft" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
                    <Legend />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          {/* Business Model Tab */}
          <TabsContent value="business">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Value Proposition", icon: Sparkles, items: r.businessCanvas.valueProposition, color: "from-indigo-500 to-indigo-600" },
                { title: "Customer Segments", icon: Users, items: r.businessCanvas.customerSegments, color: "from-violet-500 to-violet-600" },
                { title: "Revenue Streams", icon: ArrowUpRight, items: r.businessCanvas.revenueStreams, color: "from-emerald-500 to-emerald-600" },
                { title: "Cost Structure", icon: FileText, items: r.businessCanvas.costStructure, color: "from-rose-500 to-rose-600" },
                { title: "Channels", icon: Target, items: r.businessCanvas.channels, color: "from-blue-500 to-blue-600" },
                { title: "Key Activities", icon: Zap, items: r.businessCanvas.keyActivities, color: "from-purple-500 to-purple-600" },
                { title: "Key Partners", icon: Users, items: r.businessCanvas.keyPartners, color: "from-amber-500 to-amber-600" },
                { title: "Key Resources", icon: Building, items: r.businessCanvas.keyResources, color: "from-cyan-500 to-cyan-600" },
              ].map(({ title, icon: Icon, items, color }) => (
                <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Pitch Tab */}
          <TabsContent value="pitch">
            <div className="space-y-6">
              {[
                { title: "Elevator Pitch", subtitle: "30-second pitch for anyone", icon: Mic, content: r.pitch.elevator, color: "indigo" },
                { title: "Investor Pitch", subtitle: "2-minute pitch for VCs and angels", icon: ArrowUpRight, content: r.pitch.investor, color: "violet" },
                { title: "LinkedIn Post", subtitle: "Professional network announcement", icon: Share2, content: r.pitch.linkedIn, color: "purple" },
              ].map(({ title, subtitle, icon: Icon, content, color }) => (
                <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
                        <p className="text-xs text-slate-500">{subtitle}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 to-violet-300 dark:from-indigo-800 dark:to-violet-800" />
              <div className="space-y-6 pl-16">
                {r.roadmap.map((phase, i) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-12 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      {i + 1}
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">{phase.phase}</h3>
                          <Badge variant="outline" className="text-xs mt-1">{phase.duration}</Badge>
                        </div>
                        <Badge variant="success" className="text-xs">{phase.milestone}</Badge>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {phase.tasks.map((task) => (
                          <div key={task} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        <Link href="/idea-map">
          <Button variant="outline">
            <Sparkles className="h-4 w-4" />
            View Idea Map
          </Button>
        </Link>
        <Link href="/generate">
          <Button>
            <Zap className="h-4 w-4" />
            Generate New Idea
          </Button>
        </Link>
      </div>
    </DashboardLayout>
  );
}
