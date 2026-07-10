import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
