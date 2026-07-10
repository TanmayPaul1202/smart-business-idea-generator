"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Bell,
  Globe,
  Moon,
  Palette,
  Save,
  Settings,
  Shield,
  Sparkles,
  Sun,
  User,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [model, setModel] = useState("granite-13b-chat-v2");

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Settings className="h-5 w-5 text-indigo-600" />
          <Badge>Configuration</Badge>
        </div>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500 text-sm mt-0.5">Customize your IdeaForge AI experience</p>
      </motion.div>

      <div className="max-w-3xl space-y-6">
        {/* Profile */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <User className="h-4 w-4 text-indigo-500" />
            <h2 className="font-bold text-slate-900 dark:text-white">Profile</h2>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl font-black">
              JD
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white">John Doe</div>
              <div className="text-sm text-slate-500">john@example.com</div>
              <Badge className="mt-1 text-xs">Pro Plan</Badge>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name", value: "John Doe" },
              { label: "Email", value: "john@example.com" },
              { label: "Organization", value: "TechVentures Inc." },
              { label: "Role", value: "Founder & CEO" },
            ].map(({ label, value }) => (
              <div key={label}>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-1">{label}</label>
                <input
                  defaultValue={value}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Palette className="h-4 w-4 text-violet-500" />
            <h2 className="font-bold text-slate-900 dark:text-white">Appearance</h2>
          </div>
          <div className="flex gap-3">
            {[
              { value: "light", icon: Sun, label: "Light" },
              { value: "dark", icon: Moon, label: "Dark" },
              { value: "system", icon: Globe, label: "System" },
            ].map(({ value, icon: Icon, label }) => (
              <button
                key={value}
                onClick={() => {
                  setTheme(value);
                  if (value !== "system") {
                    document.documentElement.classList.toggle("dark", value === "dark");
                  }
                }}
                className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${theme === value ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-950/30" : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
              >
                <Icon className={`h-5 w-5 ${theme === value ? "text-indigo-600" : "text-slate-500"}`} />
                <span className={`text-xs font-semibold ${theme === value ? "text-indigo-700 dark:text-indigo-300" : "text-slate-600 dark:text-slate-400"}`}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Model */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <h2 className="font-bold text-slate-900 dark:text-white">IBM AI Model</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { id: "granite-13b-chat-v2", label: "Granite 13B", desc: "Balanced performance", badge: "Recommended" },
              { id: "granite-34b-code-instruct", label: "Granite 34B", desc: "Maximum quality", badge: "Powerful" },
              { id: "granite-7b-lab", label: "Granite 7B", desc: "Fast responses", badge: "Fast" },
            ].map(({ id, label, desc, badge }) => (
              <button
                key={id}
                onClick={() => setModel(id)}
                className={`p-4 rounded-2xl border text-left transition-all ${model === id ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-950/30" : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
              >
                <Badge className="mb-2 text-[10px]">{badge}</Badge>
                <div className="font-semibold text-sm text-slate-900 dark:text-white">{label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Bell className="h-4 w-4 text-amber-500" />
            <h2 className="font-bold text-slate-900 dark:text-white">Notifications</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "Email notifications", desc: "Receive idea generation summaries", checked: true },
              { label: "Push notifications", desc: "Real-time agent status updates", checked: notifications },
              { label: "Weekly digest", desc: "Trending ideas and market insights", checked: true },
              { label: "Product updates", desc: "New features and improvements", checked: false },
            ].map(({ label, desc, checked }) => (
              <div key={label} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">{label}</div>
                  <div className="text-xs text-slate-500">{desc}</div>
                </div>
                <div
                  className={`w-10 h-5 rounded-full transition-colors cursor-pointer relative ${checked ? "bg-indigo-600" : "bg-slate-200 dark:bg-slate-700"}`}
                  onClick={() => setNotifications(!notifications)}
                >
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : "translate-x-0.5"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Shield className="h-4 w-4 text-emerald-500" />
            <h2 className="font-bold text-slate-900 dark:text-white">Security</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <Button variant="outline">Change Password</Button>
            <Button variant="outline">Enable 2FA</Button>
            <Button variant="outline">API Keys</Button>
            <Button variant="outline" className="text-rose-500 border-rose-200 hover:bg-rose-50">Delete Account</Button>
          </div>
        </div>

        <Button size="lg" className="w-full">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </DashboardLayout>
  );
}
