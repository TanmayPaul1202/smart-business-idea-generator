"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  CheckCircle,
  FileText,
  Globe,
  Link2,
  Loader2,
  MapPin,
  Send,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const JOBS: Record<
  string,
  {
    title: string;
    dept: string;
    location: string;
    type: string;
    level: string;
    color: string;
    about: string;
    responsibilities: string[];
    requirements: string[];
  }
> = {
  "1": {
    title: "Senior AI/ML Engineer",
    dept: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    level: "Senior",
    color: "from-indigo-500 to-violet-500",
    about:
      "Join our core engineering team to design, train, and deploy next-generation AI models that power IdeaForge's business idea generation engine.",
    responsibilities: [
      "Design and implement scalable ML pipelines on IBM watsonx.ai",
      "Fine-tune and evaluate large language models for business ideation",
      "Collaborate with product and research teams on feature delivery",
      "Maintain high code quality through reviews and automated testing",
    ],
    requirements: [
      "5+ years of experience in ML / AI engineering",
      "Proficiency in Python, PyTorch or TensorFlow",
      "Experience with LLM fine-tuning and prompt engineering",
      "Strong software engineering fundamentals",
    ],
  },
  "2": {
    title: "LLM Fine-tuning Specialist",
    dept: "AI Research",
    location: "Remote / London",
    type: "Full-time",
    level: "Senior",
    color: "from-violet-500 to-purple-500",
    about:
      "Lead cutting-edge research into fine-tuning strategies for IBM Granite and open-source LLMs to produce more accurate, grounded business intelligence.",
    responsibilities: [
      "Design and run LLM fine-tuning experiments",
      "Evaluate model quality with custom business-domain benchmarks",
      "Publish findings as internal research reports",
      "Partner with engineering to ship improvements to production",
    ],
    requirements: [
      "PhD or MS in ML, NLP, or related field",
      "Deep expertise in transformer architectures and RLHF",
      "Experience with IBM watsonx or similar enterprise AI platforms",
      "Strong written and verbal communication skills",
    ],
  },
  "3": {
    title: "Full-Stack Engineer (Next.js)",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    color: "from-blue-500 to-cyan-500",
    about:
      "Build beautiful, performant product features end-to-end using Next.js 15, TypeScript, and Tailwind CSS — and help shape the user experience of IdeaForge.",
    responsibilities: [
      "Build and maintain Next.js pages, API routes, and components",
      "Integrate AI APIs and real-time data into the frontend",
      "Write clean, well-tested TypeScript code",
      "Contribute to design system and shared component library",
    ],
    requirements: [
      "3+ years with React / Next.js",
      "Strong TypeScript skills",
      "Familiarity with REST APIs and server-side rendering",
      "Eye for UI/UX detail",
    ],
  },
  "4": {
    title: "Product Manager – AI Workflows",
    dept: "Product & Design",
    location: "Remote / New York",
    type: "Full-time",
    level: "Senior",
    color: "from-purple-500 to-pink-500",
    about:
      "Own the end-to-end product vision for IdeaForge's AI workflow features — from idea generation to pitch deck creation — and drive roadmap execution.",
    responsibilities: [
      "Define product strategy and prioritisation for AI features",
      "Work closely with engineers, designers, and customers",
      "Write detailed PRDs and acceptance criteria",
      "Measure success through data and user feedback",
    ],
    requirements: [
      "4+ years of product management experience",
      "Experience shipping AI or data-driven products",
      "Strong analytical and communication skills",
      "Comfortable in early-stage, fast-moving environments",
    ],
  },
  "5": {
    title: "Senior Product Designer",
    dept: "Product & Design",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    color: "from-rose-500 to-orange-500",
    about:
      "Shape the visual language and interaction design of IdeaForge, creating intuitive, beautiful experiences for aspiring entrepreneurs worldwide.",
    responsibilities: [
      "Own end-to-end design from concept to production",
      "Build and maintain the design system in Figma",
      "Collaborate with engineers for pixel-perfect implementation",
      "Conduct user research and usability testing",
    ],
    requirements: [
      "5+ years of product design experience",
      "Strong Figma skills and design systems experience",
      "Portfolio demonstrating complex SaaS or AI product work",
      "Ability to work autonomously in a remote team",
    ],
  },
  "6": {
    title: "Enterprise Sales Executive",
    dept: "Sales & Growth",
    location: "USA (East Coast)",
    type: "Full-time",
    level: "Senior",
    color: "from-emerald-500 to-teal-500",
    about:
      "Drive enterprise revenue growth by winning and expanding strategic accounts across Fortune 500 companies who want AI-powered business intelligence.",
    responsibilities: [
      "Own full sales cycle from prospecting to close",
      "Build relationships with C-suite and VP-level buyers",
      "Collaborate with product on enterprise feature requirements",
      "Hit and exceed quarterly ARR targets",
    ],
    requirements: [
      "5+ years of B2B SaaS enterprise sales experience",
      "Proven track record closing $100K+ deals",
      "Excellent presentation and negotiation skills",
      "Experience selling AI or data products is a plus",
    ],
  },
  "7": {
    title: "Developer Advocate – IBM AI",
    dept: "Sales & Growth",
    location: "Remote / Global",
    type: "Full-time",
    level: "Mid",
    color: "from-amber-500 to-orange-500",
    about:
      "Evangelise IdeaForge and IBM watsonx.ai to the global developer community through content, talks, open-source contributions, and community building.",
    responsibilities: [
      "Create technical content — blogs, videos, tutorials, demos",
      "Speak at conferences and developer meetups",
      "Build and nurture developer community on Discord and GitHub",
      "Provide product feedback from developers to engineering",
    ],
    requirements: [
      "2+ years of developer advocacy or developer relations",
      "Hands-on coding experience in Python or JavaScript",
      "Confident public speaker and content creator",
      "Passion for AI and developer tooling",
    ],
  },
  "8": {
    title: "AI Research Intern",
    dept: "AI Research",
    location: "Remote",
    type: "Internship",
    level: "Intern",
    color: "from-cyan-500 to-blue-500",
    about:
      "A 3-month paid remote internship working directly with our AI Research team on real-world LLM experiments and business intelligence problems.",
    responsibilities: [
      "Assist in running LLM experiments and ablation studies",
      "Write and present research summaries",
      "Contribute to internal tooling and evaluation harnesses",
      "Collaborate in weekly research syncs",
    ],
    requirements: [
      "Currently enrolled in MS or PhD in ML / NLP / AI",
      "Proficiency in Python and at least one deep learning framework",
      "Strong fundamentals in probability and statistics",
      "Available for 3 months full-time",
    ],
  },
  "9": {
    title: "Data Engineer",
    dept: "Engineering",
    location: "Remote / Bangalore",
    type: "Full-time",
    level: "Mid",
    color: "from-indigo-400 to-blue-500",
    about:
      "Build and maintain the data infrastructure that powers IdeaForge's market intelligence, trend analysis, and model training pipelines.",
    responsibilities: [
      "Design and maintain ETL pipelines for market data",
      "Build scalable data warehousing on IBM Cloud",
      "Ensure data quality, governance, and observability",
      "Partner with ML engineers on training data pipelines",
    ],
    requirements: [
      "3+ years of data engineering experience",
      "Strong SQL and Python skills",
      "Experience with Apache Spark, Airflow, or dbt",
      "Familiarity with cloud data platforms (IBM Cloud, AWS, or GCP)",
    ],
  },
  "10": {
    title: "Head of Customer Success",
    dept: "Operations",
    location: "Remote",
    type: "Full-time",
    level: "Lead",
    color: "from-teal-500 to-emerald-500",
    about:
      "Lead and scale our Customer Success function, ensuring our users get maximum value from IdeaForge and driving retention, expansion, and advocacy.",
    responsibilities: [
      "Build and manage the CS team from the ground up",
      "Own NPS, churn, and expansion revenue metrics",
      "Create onboarding, training, and support playbooks",
      "Act as the voice of the customer internally",
    ],
    requirements: [
      "5+ years in Customer Success, with 2+ in a leadership role",
      "Experience at a high-growth SaaS company",
      "Data-driven mindset with strong communication skills",
      "Passion for helping customers succeed",
    ],
  },
};

const LEVEL_COLORS: Record<string, string> = {
  Intern: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  Mid: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800",
  Senior: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800",
  Lead: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
  coverLetter: string;
  resume: File | null;
  heardFrom: string;
};

export default function ApplyPage() {
  const params = useParams();
  const id = String(params.id);
  const job = JOBS[id];

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setTheme((p) => {
      const n = p === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", n === "dark");
      return n;
    });
  };

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
    heardFrom: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState, value: string | File | null) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required.";
    if (!form.coverLetter.trim() || form.coverLetter.trim().length < 50)
      e.coverLetter = "Please write at least 50 characters.";
    if (!form.resume) e.resume = "Please attach your résumé.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-slate-950">
        <p className="text-slate-500 text-lg">Job not found.</p>
        <Link href="/careers">
          <Button variant="outline"><ArrowLeft className="h-4 w-4" /> Back to Careers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Header */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 gradient-bg-soft" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-6">
              <ArrowLeft className="h-4 w-4" /> Back to all roles
            </Link>
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white font-black text-lg shrink-0 shadow-lg`}>
                {job.title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <span className="flex items-center gap-1.5 text-sm text-slate-500"><MapPin className="h-4 w-4" />{job.location}</span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-500"><Briefcase className="h-4 w-4" />{job.dept}</span>
                  <span className="flex items-center gap-1.5 text-sm text-slate-500"><Globe className="h-4 w-4" />{job.type}</span>
                  <span className={`text-xs px-3 py-1 rounded-full border font-medium ${LEVEL_COLORS[job.level]}`}>{job.level}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left — job details */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
              <h2 className="font-bold text-slate-900 dark:text-white mb-2">About the role</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{job.about}</p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
              <h2 className="font-bold text-slate-900 dark:text-white mb-3">Responsibilities</h2>
              <ul className="space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-indigo-500 mt-0.5 shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
              <h2 className="font-bold text-slate-900 dark:text-white mb-3">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right — application form */}
          <div className="lg:col-span-2">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
              {submitted ? (
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Application Submitted!</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-xs mx-auto">
                    Thanks for applying for <strong>{job.title}</strong>. Our team will review your application and get back to you within 5–7 business days.
                  </p>
                  <Link href="/careers">
                    <Button variant="outline"><ArrowLeft className="h-4 w-4" /> View all roles</Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Send className="h-4 w-4 text-indigo-600" />
                    <h2 className="font-bold text-slate-900 dark:text-white">Your Application</h2>
                  </div>

                  {/* Name row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        icon={<User className="h-4 w-4" />}
                        placeholder="Jane"
                        value={form.firstName}
                        onChange={(e) => set("firstName", e.target.value)}
                      />
                      {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={(e) => set("lastName", e.target.value)}
                      />
                      {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone</label>
                      <Input
                        type="tel"
                        placeholder="+1 555 000 0000"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* LinkedIn + Portfolio */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">LinkedIn URL</label>
                      <Input
                        icon={<Link2 className="h-4 w-4" />}
                        placeholder="linkedin.com/in/jane"
                        value={form.linkedin}
                        onChange={(e) => set("linkedin", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Portfolio / GitHub</label>
                      <Input
                        icon={<Globe className="h-4 w-4" />}
                        placeholder="github.com/jane"
                        value={form.portfolio}
                        onChange={(e) => set("portfolio", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Resume upload */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Résumé / CV <span className="text-red-500">*</span>
                    </label>
                    <label className={`flex items-center gap-3 w-full cursor-pointer rounded-xl border-2 border-dashed px-4 py-3 transition-colors
                      ${form.resume
                        ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-950/20"
                        : "border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700"}`}>
                      <FileText className={`h-5 w-5 shrink-0 ${form.resume ? "text-indigo-600" : "text-slate-400"}`} />
                      <span className={`text-sm truncate ${form.resume ? "text-indigo-700 dark:text-indigo-300 font-medium" : "text-slate-400"}`}>
                        {form.resume ? form.resume.name : "Upload PDF, DOC, or DOCX (max 5 MB)"}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => set("resume", e.target.files?.[0] ?? null)}
                      />
                    </label>
                    {errors.resume && <p className="text-xs text-red-500 mt-1">{errors.resume}</p>}
                  </div>

                  {/* Cover letter */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Cover Letter <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      placeholder={`Tell us why you're excited about the ${job.title} role and what you'd bring to the team...`}
                      className="min-h-[130px]"
                      value={form.coverLetter}
                      onChange={(e) => set("coverLetter", e.target.value)}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.coverLetter
                        ? <p className="text-xs text-red-500">{errors.coverLetter}</p>
                        : <span />}
                      <span className="text-xs text-slate-400">{form.coverLetter.length} chars</span>
                    </div>
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">How did you hear about us?</label>
                    <select
                      value={form.heardFrom}
                      onChange={(e) => set("heardFrom", e.target.value)}
                      className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:border-slate-700 dark:bg-slate-800 dark:text-white transition-all"
                    >
                      <option value="">Select an option</option>
                      <option>LinkedIn</option>
                      <option>Twitter / X</option>
                      <option>Referral from a friend</option>
                      <option>Company website</option>
                      <option>Job board (Indeed, Glassdoor, etc.)</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                      {submitting ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
                      ) : (
                        <><Send className="h-4 w-4" /> Submit Application</>
                      )}
                    </Button>
                    <p className="text-xs text-slate-400 text-center mt-3">
                      By submitting, you agree to our{" "}
                      <Link href="/about" className="underline hover:text-indigo-600">Privacy Policy</Link>.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Tips */}
            {!submitted && (
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}
                className="mt-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl border border-indigo-100 dark:border-indigo-900 p-4">
                <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-2">💡 Application tips</p>
                <ul className="space-y-1 text-xs text-indigo-600 dark:text-indigo-400">
                  <li>• Tailor your cover letter to this specific role.</li>
                  <li>• Include measurable impact in your résumé (e.g. "reduced latency by 40%").</li>
                  <li>• Link to relevant projects on GitHub or your portfolio.</li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center">
        <p className="text-sm text-slate-500">
          © 2025 IdeaForge AI ·{" "}
          <Link href="/about" className="hover:text-indigo-600">About</Link> ·{" "}
          <Link href="/careers" className="hover:text-indigo-600">Careers</Link> ·{" "}
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </p>
      </footer>
    </div>
  );
}
