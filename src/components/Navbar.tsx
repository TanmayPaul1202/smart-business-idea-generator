"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Bell,
  ChevronDown,
  Menu,
  Moon,
  Search,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface NavbarProps {
  onMenuClick?: () => void;
  showSearch?: boolean;
  isDashboard?: boolean;
  theme?: "light" | "dark";
  toggleTheme?: () => void;
}

export function Navbar({
  onMenuClick,
  showSearch = false,
  isDashboard = false,
  theme = "light",
  toggleTheme,
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/generate", label: "Generate" },
    { href: "/trends", label: "Trends" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {isDashboard && (
              <button
                onClick={onMenuClick}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-slate-900 dark:text-white text-sm leading-tight block">
                  IdeaForge AI
                </span>
                <span className="text-[10px] text-slate-400 leading-tight block">
                  IBM Powered
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Search (dashboard) */}
          {showSearch && (
            <div className="hidden md:block w-72">
              <Input
                placeholder="Search ideas..."
                icon={<Search className="h-4 w-4" />}
              />
            </div>
          )}

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            {isDashboard ? (
              <>
                <button className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2 ml-1 pl-3 border-l border-slate-200 dark:border-slate-700">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                    JD
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-slate-700 dark:text-slate-200">
                    John D.
                  </span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </div>
              </>
            ) : (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                    Sign In
                  </Button>
                </Link>
                <Link href="/generate">
                  <Button size="sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    Generate
                  </Button>
                </Link>
              </>
            )}

            {/* Mobile menu toggle */}
            {!isDashboard && (
              <button
                className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && !isDashboard && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-indigo-600 bg-indigo-50 dark:text-indigo-400"
                  : "text-slate-600 dark:text-slate-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
            <Link href="/generate">
              <Button size="sm" className="w-full">
                <Sparkles className="h-3.5 w-3.5" />
                Generate Ideas
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
