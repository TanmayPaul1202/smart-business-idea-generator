"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_RESULT } from "@/lib/demo-data";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building,
  CheckCircle,
  Download,
  Layers,
  Sparkles,
  Target,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

const canvasSections = [
  {
    title: "Key Partners",
    icon: Users,
    items: DEMO_RESULT.businessCanvas.keyPartners,
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900",
  },
  {
    title: "Key Activities",
    icon: Zap,
    items: DEMO_RESULT.businessCanvas.keyActivities,
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900",
  },
  {
    title: "Value Proposition",
    icon: Sparkles,
    items: DEMO_RESULT.businessCanvas.valueProposition,
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-900",
    wide: true,
  },
  {
    title: "Customer Relationships",
    icon: Target,
    items: ["Dedicated CSM team", "24/7 support portal", "Monthly business reviews", "User community"],
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900",
  },
  {
    title: "Customer Segments",
    icon: Users,
    items: DEMO_RESULT.businessCanvas.customerSegments,
    color: "from-pink-500 to-pink-600",
    bg: "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-900",
  },
  {
    title: "Key Resources",
    icon: Building,
    items: DEMO_RESULT.businessCanvas.keyResources,
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-900",
  },
  {
    title: "Channels",
    icon: ArrowUpRight,
    items: DEMO_RESULT.businessCanvas.channels,
    color: "from-teal-500 to-teal-600",
    bg: "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900",
  },
  {
    title: "Cost Structure",
    icon: Wallet,
    items: DEMO_RESULT.businessCanvas.costStructure,
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900",
    wide: true,
  },
  {
    title: "Revenue Streams",
    icon: ArrowUpRight,
    items: DEMO_RESULT.businessCanvas.revenueStreams,
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900",
    wide: true,
  },
];

export default function CanvasPage() {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="h-5 w-5 text-indigo-600" />
            <Badge>Business Model Canvas</Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Business Model Canvas</h1>
          <p className="text-slate-500 text-sm mt-0.5">Auto-generated for {DEMO_RESULT.name} · IBM Business Model Agent</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4" />
          Export Canvas
        </Button>
      </motion.div>

      {/* Canvas Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
        {canvasSections.slice(0, 5).map(({ title, icon: Icon, items, color, bg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-2xl border p-5 ${bg} ${title === "Value Proposition" ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon className="h-3.5 w-3.5 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs">{title}</h3>
            </div>
            <ul className="space-y-1.5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="h-3 w-3 text-slate-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {canvasSections.slice(5, 7).map(({ title, icon: Icon, items, color, bg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.08 }}
            className={`rounded-2xl border p-5 ${bg}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon className="h-3.5 w-3.5 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs">{title}</h3>
            </div>
            <ul className="space-y-1.5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="h-3 w-3 text-slate-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {canvasSections.slice(7).map(({ title, icon: Icon, items, color, bg }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.56 + i * 0.08 }}
            className={`rounded-2xl border p-5 ${bg}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                <Icon className="h-3.5 w-3.5 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs">{title}</h3>
            </div>
            <ul className="space-y-1.5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle className="h-3 w-3 text-slate-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </DashboardLayout>
  );
}
