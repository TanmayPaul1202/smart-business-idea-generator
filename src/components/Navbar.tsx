"use client";
import { getInitials, getUser } from "@/lib/auth";
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
import { useEffect, useState } from "react";
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
  const [userName, setUserName] = useState("User");
  const [userInitials, setUserInitials] = useState("U");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (user) {
      setUserName(user.name);
      setUserInitials(getInitials(user.name));
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/generate", label: "Generate" },
    { href: "/trends", label: "Trends" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={cn(
      "sticky top-0 z-50 border-b border-indigo-700/30 bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 backdrop-blur-xl transition-shadow duration-300",
      scrolled && "shadow-lg shadow-indigo-900/40"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {isDashboard && (
              <button
                onClick={onMenuClick}
                className="p-2 rounded-lg text-indigo-200 hover:bg-white/15 transition-colors lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-white text-sm leading-tight block">
                  AI Smart Business Generator
                </span>
                <span className="text-[10px] text-indigo-200 leading-tight block">
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
                      ? "text-white bg-white/20"
                      : "text-indigo-100 hover:text-white hover:bg-white/15"
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
              className="p-2 rounded-lg text-indigo-200 hover:bg-white/15 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            {isDashboard ? (
              <>
                <button className="relative p-2 rounded-lg text-indigo-200 hover:bg-white/15 transition-colors">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-2 ml-1 pl-3 border-l border-indigo-400/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
                    {userInitials}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-white">
                    {userName}
                  </span>
                  <ChevronDown className="h-3 w-3 text-indigo-200" />
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-white hover:bg-white/15 hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-white text-indigo-700 hover:bg-white/90 shadow-none">
                    <Sparkles className="h-3.5 w-3.5" />
                    Sign Up
                  </Button>
                </Link>
              </>
            )}

            {/* Mobile menu toggle */}
            {!isDashboard && (
              <button
                className="md:hidden p-2 rounded-lg text-indigo-200 hover:bg-white/15 transition-colors"
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
          className="md:hidden border-t border-indigo-600/40 bg-indigo-800 px-4 py-3 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-white bg-white/20"
                  : "text-indigo-200 hover:text-white hover:bg-white/15"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-indigo-600/40 flex gap-2">
            <Link href="/login" className="flex-1">
              <Button variant="ghost" size="sm" className="w-full text-white hover:bg-white/15 hover:text-white border border-white/30">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" className="flex-1">
              <Button size="sm" className="w-full bg-white text-indigo-700 hover:bg-white/90 shadow-none">
                <Sparkles className="h-3.5 w-3.5" />
                Sign Up
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
