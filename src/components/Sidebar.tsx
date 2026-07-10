"use client";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Building2,
  ChevronLeft,
  ChevronRight,
  Compass,
  GitBranch,
  Heart,
  Home,
  Lightbulb,
  Map,
  Mic,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Badge } from "./ui/badge";

const navItems = [
  {
    section: "Main",
    items: [
      { href: "/dashboard", icon: Home, label: "Dashboard" },
      { href: "/generate", icon: Sparkles, label: "Generate Idea", badge: "AI" },
      { href: "/saved", icon: Heart, label: "Saved Ideas" },
    ],
  },
  {
    section: "AI Workspace",
    items: [
      { href: "/results", icon: Lightbulb, label: "Latest Result" },
      { href: "/trends", icon: TrendingUp, label: "Trend Dashboard" },
      { href: "/competitor", icon: Target, label: "Competitor Analysis" },
      { href: "/canvas", icon: Building2, label: "Business Canvas" },
    ],
  },
  {
    section: "Tools",
    items: [
      { href: "/roadmap", icon: Map, label: "Startup Roadmap" },
      { href: "/pitch", icon: Mic, label: "Pitch Generator" },
      { href: "/idea-map", icon: GitBranch, label: "Idea Map" },
      { href: "/research", icon: BookOpen, label: "Research Agent" },
    ],
  },
  {
    section: "Account",
    items: [
      { href: "/settings", icon: Settings, label: "Settings" },
    ],
  },
];

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = true, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] z-40 transition-all duration-300 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col",
          collapsed ? "w-[72px]" : "w-64",
          "hidden lg:flex",
          open && "!flex"
        )}
      >
        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors shadow-sm z-10"
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </button>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navItems.map((section) => (
            <div key={section.section} className="mb-5">
              {!collapsed && (
                <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600">
                  {section.section}
                </p>
              )}
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                        isActive
                          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-400"
                          : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
                        collapsed && "justify-center px-2"
                      )}
                      title={collapsed ? item.label : undefined}
                    >
                      <item.icon
                        className={cn(
                          "shrink-0 transition-colors",
                          collapsed ? "h-5 w-5" : "h-4 w-4",
                          isActive
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                        )}
                      />
                      {!collapsed && (
                        <>
                          <span className="flex-1 truncate">{item.label}</span>
                          {item.badge && (
                            <Badge className="text-[10px] py-0 px-1.5">{item.badge}</Badge>
                          )}
                        </>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom CTA */}
        {!collapsed && (
          <div className="p-3 border-t border-slate-200 dark:border-slate-800">
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/50 dark:to-violet-950/50 rounded-xl p-4 border border-indigo-100 dark:border-indigo-900/50">
              <div className="flex items-center gap-2 mb-2">
                <Compass className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Pro Plan</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Unlock unlimited generations
              </p>
              <Link href="/settings">
                <button className="w-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg py-1.5 hover:opacity-90 transition-opacity">
                  Upgrade Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
