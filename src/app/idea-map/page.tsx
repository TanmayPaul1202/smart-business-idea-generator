"use client";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEMO_RESULT } from "@/lib/demo-data";
import { motion } from "framer-motion";
import { Download, GitBranch, Maximize2, RefreshCw } from "lucide-react";
import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

const NODE_COLORS = [
  { bg: "#4f46e5", text: "#ffffff" }, // indigo - center
  { bg: "#7c3aed", text: "#ffffff" }, // violet
  { bg: "#a855f7", text: "#ffffff" }, // purple
  { bg: "#ec4899", text: "#ffffff" }, // pink
  { bg: "#059669", text: "#ffffff" }, // emerald
  { bg: "#2563eb", text: "#ffffff" }, // blue
  { bg: "#d97706", text: "#ffffff" }, // amber
  { bg: "#dc2626", text: "#ffffff" }, // red
  { bg: "#0891b2", text: "#ffffff" }, // cyan
];

const initialNodes: Node[] = [
  {
    id: "1",
    type: "default",
    data: { label: `💡 ${DEMO_RESULT.name}` },
    position: { x: 350, y: 250 },
    style: { background: NODE_COLORS[0].bg, color: NODE_COLORS[0].text, border: "none", borderRadius: 16, fontWeight: 700, fontSize: 14, padding: "12px 20px", boxShadow: "0 8px 24px rgba(79,70,229,0.4)" },
  },
  {
    id: "2",
    data: { label: "🔴 Problem\nEnterprise ESG complexity" },
    position: { x: 50, y: 60 },
    style: { background: NODE_COLORS[1].bg, color: NODE_COLORS[1].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
  {
    id: "3",
    data: { label: "✅ Solution\nReal-time carbon AI platform" },
    position: { x: 650, y: 60 },
    style: { background: NODE_COLORS[2].bg, color: NODE_COLORS[2].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
  {
    id: "4",
    data: { label: "🛠 Technology\nIBM Granite + IoT + Cloud" },
    position: { x: 50, y: 440 },
    style: { background: NODE_COLORS[3].bg, color: NODE_COLORS[3].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
  {
    id: "5",
    data: { label: "👥 Target Audience\nFortune 5000 CSOs" },
    position: { x: 650, y: 440 },
    style: { background: NODE_COLORS[4].bg, color: NODE_COLORS[4].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
  {
    id: "6",
    data: { label: "💰 Revenue Model\nSaaS $30K-$500K/yr" },
    position: { x: 50, y: 250 },
    style: { background: NODE_COLORS[5].bg, color: NODE_COLORS[5].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
  {
    id: "7",
    data: { label: "⚔️ Competition\nSalesforce, Microsoft, Watershed" },
    position: { x: 650, y: 250 },
    style: { background: NODE_COLORS[6].bg, color: NODE_COLORS[6].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
  {
    id: "8",
    data: { label: "📈 Market Size\n$45B · 22.5% CAGR" },
    position: { x: 350, y: 60 },
    style: { background: NODE_COLORS[7].bg, color: NODE_COLORS[7].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
  {
    id: "9",
    data: { label: "🚀 Future Expansion\nCarbon credits + SME tier" },
    position: { x: 350, y: 440 },
    style: { background: NODE_COLORS[8].bg, color: NODE_COLORS[8].text, border: "none", borderRadius: 14, fontWeight: 600, fontSize: 12, padding: "10px 16px", whiteSpace: "pre-line" },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e1-3", source: "1", target: "3", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e1-4", source: "1", target: "4", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e1-5", source: "1", target: "5", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e1-6", source: "1", target: "6", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e1-7", source: "1", target: "7", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e1-8", source: "1", target: "8", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e1-9", source: "1", target: "9", animated: true, style: { stroke: "#818cf8", strokeWidth: 2 } },
  { id: "e2-8", source: "2", target: "8", style: { stroke: "#c7d2fe", strokeWidth: 1.5, strokeDasharray: "4" } },
  { id: "e3-5", source: "3", target: "5", style: { stroke: "#c7d2fe", strokeWidth: 1.5, strokeDasharray: "4" } },
  { id: "e4-9", source: "4", target: "9", style: { stroke: "#c7d2fe", strokeWidth: 1.5, strokeDasharray: "4" } },
];

export default function IdeaMapPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GitBranch className="h-5 w-5 text-indigo-600" />
            <Badge>Interactive Visualization</Badge>
          </div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white">Idea Mind Map</h1>
          <p className="text-slate-500 text-sm mt-0.5">Drag nodes to explore · Pinch to zoom · Click to expand</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4" />
            Reset
          </Button>
          <Button variant="outline" size="sm">
            <Maximize2 className="h-4 w-4" />
            Fullscreen
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4" />
            Export PNG
          </Button>
        </div>
      </motion.div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden" style={{ height: 540 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background color="#818cf8" gap={24} size={1} style={{ opacity: 0.08 }} />
          <Controls />
          <MiniMap
            nodeStrokeColor="#4f46e5"
            nodeColor={(node) => (node.style?.background as string) || "#4f46e5"}
            style={{ background: "#f8fafc", borderRadius: 12 }}
          />
        </ReactFlow>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {[
          { color: "#4f46e5", label: "Core Idea" },
          { color: "#7c3aed", label: "Problem" },
          { color: "#a855f7", label: "Solution" },
          { color: "#059669", label: "Audience" },
          { color: "#2563eb", label: "Revenue" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
            <div className="w-3 h-3 rounded-full" style={{ background: color }} />
            {label}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
