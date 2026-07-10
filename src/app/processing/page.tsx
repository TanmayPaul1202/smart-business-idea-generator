"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Brain,
  Building,
  CheckCircle,
  GitBranch,
  Lightbulb,
  Map,
  Mic,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const PROCESSING_STEPS = [
  { id: 1, icon: Lightbulb, label: "Initializing Idea Agent", sub: "Analyzing your concept with IBM Granite...", color: "indigo", duration: 1800 },
  { id: 2, icon: Search, label: "Research Agent Active", sub: "Scanning 50+ research databases and papers...", color: "blue", duration: 2200 },
  { id: 3, icon: TrendingUp, label: "Trend Analysis Running", sub: "Identifying market trends and growth signals...", color: "violet", duration: 1900 },
  { id: 4, icon: Target, label: "Competitor Mapping", sub: "Analyzing competitor landscape and positioning...", color: "purple", duration: 2000 },
  { id: 5, icon: Zap, label: "Innovation Gap Analysis", sub: "Finding white-space opportunities...", color: "pink", duration: 1600 },
  { id: 6, icon: Shield, label: "Feasibility Assessment", sub: "Evaluating technical and market viability...", color: "rose", duration: 1800 },
  { id: 7, icon: Building, label: "Business Model Design", sub: "Structuring revenue streams and value chain...", color: "orange", duration: 2100 },
  { id: 8, icon: Map, label: "Roadmap Generation", sub: "Creating actionable milestones and timeline...", color: "amber", duration: 1700 },
  { id: 9, icon: Mic, label: "Pitch Generation", sub: "Crafting compelling investor narratives...", color: "emerald", duration: 1500 },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  indigo: { bg: "bg-indigo-600", text: "text-indigo-600", ring: "ring-indigo-200" },
  blue: { bg: "bg-blue-600", text: "text-blue-600", ring: "ring-blue-200" },
  violet: { bg: "bg-violet-600", text: "text-violet-600", ring: "ring-violet-200" },
  purple: { bg: "bg-purple-600", text: "text-purple-600", ring: "ring-purple-200" },
  pink: { bg: "bg-pink-500", text: "text-pink-500", ring: "ring-pink-200" },
  rose: { bg: "bg-rose-500", text: "text-rose-500", ring: "ring-rose-200" },
  orange: { bg: "bg-orange-500", text: "text-orange-500", ring: "ring-orange-200" },
  amber: { bg: "bg-amber-500", text: "text-amber-500", ring: "ring-amber-200" },
  emerald: { bg: "bg-emerald-600", text: "text-emerald-600", ring: "ring-emerald-200" },
};

export default function ProcessingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 400);
    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    let stepIndex = 0;
    let total = 0;

    const advance = () => {
      if (stepIndex >= PROCESSING_STEPS.length) {
        setDone(true);
        setTimeout(() => router.push("/results"), 1500);
        return;
      }
      setCurrentStep(stepIndex);
      const duration = PROCESSING_STEPS[stepIndex].duration;
      total += duration;
      const capturedIndex = stepIndex;
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, capturedIndex]);
        stepIndex++;
        advance();
      }, duration);
    };

    advance();
  }, [router]);

  const progress = Math.round(((completedSteps.length) / PROCESSING_STEPS.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />

      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            x: Math.random() * 800 - 400,
            y: Math.random() * 600 - 300,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            repeat: Infinity,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Spinning rings */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-spin" style={{ animationDuration: "3s" }} />
            <div className="absolute inset-2 rounded-full border-2 border-violet-500/30 animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg">
              {done ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <CheckCircle className="h-8 w-8 text-white" />
                </motion.div>
              ) : (
                <Brain className="h-8 w-8 text-white" />
              )}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-3xl font-black text-white mb-2">Analysis Complete!</h1>
                <p className="text-indigo-300">Redirecting to your results{dots}</p>
              </motion.div>
            ) : (
              <motion.div
                key="processing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-3xl font-black text-white mb-2">
                  IBM AI Agents Working{dots}
                </h1>
                <p className="text-indigo-300">
                  {PROCESSING_STEPS[currentStep]?.sub}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-indigo-300 font-medium">Progress</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>
          <div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Agent steps */}
        <div className="space-y-3">
          {PROCESSING_STEPS.map((step, i) => {
            const isCompleted = completedSteps.includes(i);
            const isActive = currentStep === i && !isCompleted;
            const colors = colorMap[step.color];

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isCompleted || isActive ? 1 : 0.3, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-4 rounded-2xl p-4 transition-all ${
                  isActive
                    ? "bg-white/10 border border-white/20 backdrop-blur-sm"
                    : isCompleted
                    ? "bg-white/5"
                    : "bg-transparent"
                }`}
              >
                <div className={`relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isCompleted ? colors.bg : isActive ? `${colors.bg} ring-2 ${colors.ring}` : "bg-slate-800"
                }`}>
                  {isActive && (
                    <div className={`absolute inset-0 rounded-xl ${colors.bg} opacity-30 animate-ping`} />
                  )}
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5 text-white relative z-10" />
                  ) : (
                    <step.icon className={`h-5 w-5 relative z-10 ${isActive ? "text-white" : "text-slate-500"}`} />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-semibold ${isActive ? "text-white" : isCompleted ? "text-slate-300" : "text-slate-600"}`}>
                    {step.label}
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-indigo-300 mt-0.5"
                    >
                      {step.sub}
                    </motion.div>
                  )}
                </div>

                {isCompleted && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xs text-emerald-400 font-semibold shrink-0"
                  >
                    ✓ Done
                  </motion.div>
                )}
                {isActive && (
                  <div className="flex gap-1 shrink-0">
                    {[0, 1, 2].map((d) => (
                      <motion.div
                        key={d}
                        className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.8, delay: d * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* IBM Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-indigo-400 text-xs flex items-center justify-center gap-2"
        >
          <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-[7px] font-black">IBM</span>
          </div>
          Powered by IBM Granite · Langflow · Orchestrate
        </motion.div>
      </div>
    </div>
  );
}
