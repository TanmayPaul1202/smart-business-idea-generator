"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_RESULT } from "@/lib/demo-data";
import { motion } from "framer-motion";
import { Copy, Download, Mic, Share2, Sparkles } from "lucide-react";
import { useState } from "react";

const PITCH_TYPES = [
  {
    id: "elevator",
    label: "Elevator Pitch",
    duration: "30 seconds",
    icon: "⚡",
    content: DEMO_RESULT.pitch.elevator,
    desc: "A crisp, compelling pitch for casual encounters",
  },
  {
    id: "investor",
    label: "Investor Pitch",
    duration: "2 minutes",
    icon: "💼",
    content: DEMO_RESULT.pitch.investor,
    desc: "Detailed pitch for VCs and angel investors",
  },
  {
    id: "linkedin",
    label: "LinkedIn Post",
    duration: "1 min read",
    icon: "💡",
    content: DEMO_RESULT.pitch.linkedIn,
    desc: "Professional network announcement",
  },
  {
    id: "executive",
    label: "Executive Summary",
    duration: "1 page",
    icon: "📋",
    content: `EXECUTIVE SUMMARY — ${DEMO_RESULT.name}\n\n${DEMO_RESULT.description}\n\nPROBLEM: ${DEMO_RESULT.problem}\n\nSOLUTION: ${DEMO_RESULT.solution}\n\nMARKET SIZE: $${(DEMO_RESULT.marketSize / 1e9).toFixed(0)}B growing at ${DEMO_RESULT.cagr}% CAGR\n\nUSP: ${DEMO_RESULT.usp}\n\nINVESTMENT NEEDED: $${(DEMO_RESULT.investmentEstimate.min / 1e6).toFixed(1)}M–$${(DEMO_RESULT.investmentEstimate.max / 1e6).toFixed(0)}M (${DEMO_RESULT.investmentEstimate.round})`,
    desc: "One-page business overview",
  },
];

export default function PitchPage() {
  const [active, setActive] = useState("elevator");
  const [copied, setCopied] = useState(false);

  const activePitch = PITCH_TYPES.find((p) => p.id === active)!;

  const copy = () => {
    navigator.clipboard.writeText(activePitch.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Mic className="h-5 w-5 text-indigo-600" />
            <Badge>Pitch Generator</Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Pitch Generator</h1>
          <p className="text-slate-500 text-sm mt-0.5">IBM Pitch Agent — Crafted for {DEMO_RESULT.name}</p>
        </div>
        <Button size="sm">
          <Download className="h-4 w-4" />
          Download All
        </Button>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar: Pitch type selector */}
        <div className="lg:col-span-1 space-y-2">
          {PITCH_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setActive(type.id)}
              className={`w-full text-left rounded-2xl border p-4 transition-all ${
                active === type.id
                  ? "border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/30"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              <div className="text-2xl mb-2">{type.icon}</div>
              <div className="font-semibold text-slate-900 dark:text-white text-sm">{type.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{type.duration}</div>
            </button>
          ))}
        </div>

        {/* Main pitch area */}
        <div className="lg:col-span-3">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activePitch.icon}</span>
                  <h2 className="font-bold text-lg text-slate-900 dark:text-white">{activePitch.label}</h2>
                </div>
                <p className="text-sm text-slate-500 mt-0.5">{activePitch.desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={copy}>
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-3.5 w-3.5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base whitespace-pre-line">
                  {activePitch.content}
                </p>
              </div>

              {/* AI Scores */}
              <div className="grid grid-cols-3 gap-4 mt-5">
                {[
                  { label: "Clarity Score", value: 94 },
                  { label: "Persuasion Score", value: 88 },
                  { label: "Brevity Score", value: 91 },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-black text-indigo-600">{value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Regenerate */}
              <div className="flex gap-3 mt-5">
                <Button className="flex-1">
                  <Sparkles className="h-4 w-4" />
                  Regenerate with IBM AI
                </Button>
                <Button variant="outline" className="flex-1">
                  <Mic className="h-4 w-4" />
                  Practice with AI Coach
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
