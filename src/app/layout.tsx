import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IdeaForge AI – Smart Business Idea Generator | IBM Powered",
  description:
    "Generate context-aware, validated business ideas using IBM Granite AI, Langflow, and Orchestrate. Multimodal input, agentic workflow, predictive intelligence.",
  keywords: "AI business ideas, IBM Granite, startup generator, business innovation, IBM hackathon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
