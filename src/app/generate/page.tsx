"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { INDUSTRIES } from "@/lib/demo-data";
import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  Globe,
  Image as ImageIcon,
  Lightbulb,
  Mic,
  MicOff,
  Sparkles,
  Target,
  Upload,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BUDGET_OPTIONS = [
  "< $10K (Bootstrap)",
  "$10K – $100K (Seed)",
  "$100K – $1M (Pre-seed)",
  "$1M – $10M (Series A)",
  "$10M+ (Growth)",
];

const AUDIENCE_OPTIONS = [
  "B2B Enterprise",
  "B2B SME",
  "B2C Consumers",
  "Developers",
  "Students & Educators",
  "Healthcare Professionals",
  "Government & Public Sector",
  "Non-profits",
];

const EXAMPLE_PROMPTS = [
  "An AI platform that helps farmers predict crop diseases using satellite imagery and ML",
  "A blockchain-based supply chain tracker for pharmaceutical companies",
  "A mental health app using AI to provide personalized therapy at scale",
  "A carbon credit marketplace powered by real-time IoT emission sensors",
  "An AI tutor that adapts to each student's learning style using IBM Granite",
];

export default function GeneratePage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Global");
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [inputMode, setInputMode] = useState<"text" | "image" | "voice" | "pdf">("text");

  const handleGenerate = () => {
    if (!prompt.trim() && uploadedFiles.length === 0) return;
    router.push("/processing");
  };

  const addExamplePrompt = (ex: string) => {
    setPrompt(ex);
    setInputMode("text");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <Badge>AI Idea Generator</Badge>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">
            Generate Your Business Idea
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Describe your concept using text, image, voice, or PDF — IBM Granite will do the rest
          </p>
        </motion.div>

        {/* Input Mode Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 mb-6 overflow-hidden"
        >
          {/* Mode selector */}
          <div className="flex items-center border-b border-slate-200 dark:border-slate-800">
            {[
              { mode: "text", icon: Lightbulb, label: "Text Prompt" },
              { mode: "image", icon: ImageIcon, label: "Image/Sketch" },
              { mode: "voice", icon: Mic, label: "Voice Note" },
              { mode: "pdf", icon: FileText, label: "PDF Document" },
            ].map(({ mode, icon: Icon, label }) => (
              <button
                key={mode}
                onClick={() => setInputMode(mode as typeof inputMode)}
                className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium border-b-2 transition-all ${
                  inputMode === mode
                    ? "border-indigo-600 text-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:block">{label}</span>
              </button>
            ))}
          </div>

          {/* Input area */}
          <div className="p-6">
            {inputMode === "text" && (
              <div>
                <Textarea
                  placeholder="Describe your business idea in detail... e.g., 'An AI platform that helps hospitals reduce readmission rates by predicting patient risk using EHR data and IBM Granite models...'"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[140px] text-base resize-none"
                />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-slate-400">{prompt.length} characters</span>
                  <span className="text-xs text-slate-400">Min 20 characters for best results</span>
                </div>

                {/* Example prompts */}
                <div className="mt-4">
                  <p className="text-xs font-medium text-slate-500 mb-2">Try an example:</p>
                  <div className="space-y-2">
                    {EXAMPLE_PROMPTS.map((ex, i) => (
                      <button
                        key={i}
                        onClick={() => addExamplePrompt(ex)}
                        className="w-full text-left text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-700 dark:hover:text-indigo-300 rounded-lg px-3 py-2 transition-colors border border-slate-200 dark:border-slate-700"
                      >
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {inputMode === "image" && (
              <div>
                <div
                  className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-12 text-center hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-pointer group"
                  onClick={() => {
                    setUploadedFiles(["product-sketch.png"]);
                    setPrompt("AI-powered sustainable packaging optimizer for e-commerce businesses");
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-100 transition-colors">
                    <Upload className="h-8 w-8 text-indigo-500" />
                  </div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Upload Image or Sketch</h3>
                  <p className="text-sm text-slate-400">
                    Drag & drop or click to upload JPG, PNG, WebP, or PDF
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Max 10MB per file</p>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl px-3 py-2">
                      <ImageIcon className="h-4 w-4 text-indigo-500" />
                      <span className="text-sm text-indigo-700 dark:text-indigo-300">{uploadedFiles[0]}</span>
                    </div>
                    <button onClick={() => setUploadedFiles([])}>
                      <X className="h-4 w-4 text-slate-400 hover:text-red-500" />
                    </button>
                  </div>
                )}
              </div>
            )}

            {inputMode === "voice" && (
              <div className="text-center py-8">
                <div className={`relative w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center transition-all ${isRecording ? "bg-red-50 dark:bg-red-950/30" : "bg-indigo-50 dark:bg-indigo-950/30"}`}>
                  {isRecording && (
                    <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping" />
                  )}
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`relative z-10 p-6 rounded-full transition-all ${isRecording ? "bg-red-500 text-white shadow-lg shadow-red-200" : "bg-indigo-600 text-white shadow-lg shadow-indigo-200"}`}
                  >
                    {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                  </button>
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {isRecording ? "Recording... Click to stop" : "Click to start recording"}
                </h3>
                <p className="text-sm text-slate-400">Describe your business idea in your own words</p>
                {!isRecording && prompt && (
                  <div className="mt-4 bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-sm text-slate-700 dark:text-slate-300 text-left">
                    <p className="text-xs text-slate-400 mb-1">Transcription:</p>
                    {prompt}
                  </div>
                )}
              </div>
            )}

            {inputMode === "pdf" && (
              <div>
                <div
                  className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-12 text-center hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-pointer group"
                  onClick={() => {
                    setUploadedFiles(["market-research.pdf"]);
                    setPrompt("AI-powered market research analysis and opportunity identification from PDF");
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-violet-50 dark:bg-violet-950/50 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-violet-500" />
                  </div>
                  <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Upload PDF Document</h3>
                  <p className="text-sm text-slate-400">Upload research papers, market reports, or business plans</p>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-violet-50 dark:bg-violet-950/30 rounded-xl px-3 py-2">
                      <FileText className="h-4 w-4 text-violet-500" />
                      <span className="text-sm text-violet-700 dark:text-violet-300">{uploadedFiles[0]}</span>
                    </div>
                    <button onClick={() => setUploadedFiles([])}>
                      <X className="h-4 w-4 text-slate-400 hover:text-red-500" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 mb-6"
        >
          {/* Industry */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-4 w-4 text-indigo-500" />
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Industry Focus</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.slice(0, 10).map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedIndustry === ind
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:text-indigo-700"
                  }`}
                >
                  {ind.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Budget & Audience */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Wallet className="h-4 w-4 text-emerald-500" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Budget Range</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {BUDGET_OPTIONS.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedBudget === b
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {b.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-violet-500" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Target Audience</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {AUDIENCE_OPTIONS.slice(0, 6).map((a) => (
                  <button
                    key={a}
                    onClick={() => setSelectedAudience(a)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedAudience === a
                        ? "bg-violet-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-violet-50 hover:text-violet-700"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Country & IBM Model */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-4 w-4 text-blue-500" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Target Market</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Global", "USA", "Europe", "Asia", "India", "LATAM", "Africa"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedCountry === c
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Brain className="h-4 w-4 text-indigo-500" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">IBM AI Model</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "granite-13b", desc: "Balanced" },
                  { label: "granite-34b", desc: "Powerful" },
                  { label: "granite-code", desc: "Technical" },
                ].map(({ label, desc }) => (
                  <div key={label} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {label} <span className="text-indigo-400">· {desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Generate Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="xl"
            onClick={handleGenerate}
            className="w-full sm:w-auto min-w-[200px] group"
            disabled={!prompt.trim() && uploadedFiles.length === 0}
          >
            <Sparkles className="h-5 w-5" />
            Generate with IBM AI
          </Button>
          <div className="text-xs text-slate-400 text-center">
            Powered by IBM Granite · 9 AI Agents · ~30 seconds
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
