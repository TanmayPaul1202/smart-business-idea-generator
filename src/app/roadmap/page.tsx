"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_RESULT } from "@/lib/demo-data";
import { motion } from "framer-motion";
import { CheckCircle, Download, Map, Sparkles } from "lucide-react";

export default function RoadmapPage() {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Map className="h-5 w-5 text-indigo-600" />
            <Badge>Startup Roadmap</Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Startup Roadmap</h1>
          <p className="text-slate-500 text-sm mt-0.5">AI-generated milestone plan for {DEMO_RESULT.name}</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-10 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-400 via-violet-400 to-emerald-400" />

        <div className="space-y-8">
          {DEMO_RESULT.roadmap.map((phase, i) => {
            const colors = [
              { bg: "from-indigo-500 to-indigo-600", light: "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800" },
              { bg: "from-violet-500 to-violet-600", light: "bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800" },
              { bg: "from-purple-500 to-purple-600", light: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800" },
              { bg: "from-blue-500 to-blue-600", light: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800" },
              { bg: "from-emerald-500 to-emerald-600", light: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800" },
            ];
            const { bg, light } = colors[i % colors.length];

            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-24"
              >
                {/* Circle */}
                <div className={`absolute left-5 w-10 h-10 rounded-full bg-gradient-to-br ${bg} flex items-center justify-center text-white text-sm font-black shadow-lg`}>
                  {i + 1}
                </div>

                {/* Card */}
                <div className={`rounded-2xl border p-6 ${light}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-black text-lg text-slate-900 dark:text-white">{phase.phase}</h3>
                      <Badge variant="outline" className="mt-1 text-xs">{phase.duration}</Badge>
                    </div>
                    <div className="shrink-0">
                      <div className="text-xs text-slate-500 mb-1">Milestone</div>
                      <Badge variant="success" className="text-xs whitespace-normal text-right">{phase.milestone}</Badge>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {phase.tasks.map((task) => (
                      <div key={task} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-indigo-400 shrink-0" />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final celebration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 pl-24"
        >
          <div className="relative bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-white text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-black mb-2">🎯 Goal: Unicorn Status</h3>
            <p className="text-indigo-200 text-sm">Year 3 target: $10M ARR · 500+ enterprise customers · Global expansion</p>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
