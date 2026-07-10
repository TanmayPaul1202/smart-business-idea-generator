"use client";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  CheckCircle,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

const TOPICS = ["General Inquiry", "Enterprise Sales", "Technical Support", "Partnership", "Press & Media", "Careers"];

const OFFICES = [
  { city: "San Francisco", country: "USA", address: "548 Market St, PMB 12345", email: "sf@ideaforge.ai" },
  { city: "London", country: "UK", address: "1 Canada Square, Canary Wharf", email: "uk@ideaforge.ai" },
  { city: "Bangalore", country: "India", address: "Koramangala, 5th Block", email: "india@ideaforge.ai" },
];

const FAQS = [
  { q: "How quickly can I get a demo?", a: "We typically schedule demos within 24 hours for enterprise enquiries. Use the form above and select 'Enterprise Sales'." },
  { q: "Do you offer a free trial?", a: "Yes — our Starter plan is free forever with 5 ideas/month. No credit card required. Sign up at /signup." },
  { q: "Can I integrate IdeaForge AI into my own platform?", a: "Yes, via our REST API available on the Enterprise plan. Contact us for API documentation and pricing." },
  { q: "Where is my data stored?", a: "All data is stored on IBM Cloud (US-South region by default). EU data residency is available on Enterprise plans." },
];

export default function ContactPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [topic, setTopic] = useState("General Inquiry");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((p) => { const n = p === "light" ? "dark" : "light"; document.documentElement.classList.toggle("dark", n === "dark"); return n; });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);
    // Simulate async submission
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-soft" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Badge className="mb-6 px-3 py-1.5 text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <MessageSquare className="h-3 w-3" /> Get in Touch
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-5">
              We&apos;d Love to <span className="gradient-text">Hear from You</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Whether you have a question, a feature request, or want to discuss an enterprise partnership — our team is here.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left — contact form */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl shadow-indigo-100/20 dark:shadow-none">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Message Sent!</h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">Thanks, <strong>{name}</strong>! We&apos;ll get back to you at <strong>{email}</strong> within 24 hours.</p>
                  <Button onClick={() => { setSubmitted(false); setName(""); setEmail(""); setCompany(""); setMessage(""); }}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2">Send us a Message</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">We reply within 24 hours on business days.</p>

                  {/* Topic selector */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {TOPICS.map((t) => (
                      <button key={t} onClick={() => setTopic(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${topic === t ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-indigo-50 hover:text-indigo-700"}`}>
                        {t}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name *</label>
                        <Input placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email *</label>
                        <Input type="email" placeholder="jane@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company <span className="text-slate-400 font-normal">(optional)</span></label>
                      <Input placeholder="Acme Corp" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message *</label>
                      <Textarea
                        placeholder={`Tell us about your ${topic.toLowerCase()}...`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full min-h-[140px] resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" loading={loading}
                      disabled={!name || !email || !message}>
                      <Sparkles className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Right — info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick links */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { icon: Zap, label: "Start for Free", href: "/signup", color: "text-indigo-600" },
                  { icon: Building, label: "Enterprise Enquiry", href: "/contact", color: "text-violet-600" },
                  { icon: Users, label: "View Open Roles", href: "/careers", color: "text-emerald-600" },
                  { icon: Mail, label: "Press & Media Kit", href: "/contact", color: "text-rose-600" },
                ].map(({ icon: Icon, label, href, color }) => (
                  <Link key={label} href={href}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                    <Icon className={`h-4 w-4 ${color}`} />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex-1">{label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Offices */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Offices</h3>
              <div className="space-y-4">
                {OFFICES.map(({ city, country, address, email: officeEmail }) => (
                  <div key={city} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{city}, {country}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{address}</div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">{officeEmail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 border border-indigo-100 dark:border-indigo-900/50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Typical Response Time</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">General: &lt; 24 hours · Enterprise: &lt; 4 hours · Support: &lt; 2 hours</p>
            </motion.div>
          </div>
        </div>

        {/* FAQ */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-20">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQS.map(({ q, a }, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">{q}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">© 2025 IdeaForge AI · <Link href="/about" className="hover:text-indigo-600">About</Link> · <Link href="/blog" className="hover:text-indigo-600">Blog</Link> · <Link href="/careers" className="hover:text-indigo-600">Careers</Link> · <Link href="/contact" className="hover:text-indigo-600">Contact</Link></p>
      </footer>
    </div>
  );
}
