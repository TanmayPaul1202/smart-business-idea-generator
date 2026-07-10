"use client";
import { cn } from "@/lib/utils";

interface ScoreCircleProps {
  score: number;
  label: string;
  size?: "sm" | "md" | "lg";
  color?: "indigo" | "purple" | "emerald" | "amber";
}

export function ScoreCircle({ score, label, size = "md", color = "indigo" }: ScoreCircleProps) {
  const sizes = {
    sm: { r: 30, cx: 36, cy: 36, strokeWidth: 4, viewBox: "0 0 72 72", textSize: "text-lg", labelSize: "text-xs" },
    md: { r: 40, cx: 50, cy: 50, strokeWidth: 5, viewBox: "0 0 100 100", textSize: "text-2xl", labelSize: "text-xs" },
    lg: { r: 55, cx: 65, cy: 65, strokeWidth: 6, viewBox: "0 0 130 130", textSize: "text-4xl", labelSize: "text-sm" },
  };
  const colors = {
    indigo: { stroke: "#4f46e5", bg: "#e0e7ff" },
    purple: { stroke: "#7c3aed", bg: "#ede9fe" },
    emerald: { stroke: "#059669", bg: "#d1fae5" },
    amber: { stroke: "#d97706", bg: "#fef3c7" },
  };
  const { r, cx, cy, strokeWidth, viewBox, textSize, labelSize } = sizes[size];
  const { stroke, bg } = colors[color];
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative">
        <svg
          viewBox={viewBox}
          className={cn(
            size === "sm" && "w-[72px] h-[72px]",
            size === "md" && "w-[100px] h-[100px]",
            size === "lg" && "w-[130px] h-[130px]"
          )}
        >
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={bg} strokeWidth={strokeWidth} />
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${cx} ${cy})`}
            style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
          />
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fill={stroke}
            className={cn("font-bold", textSize)}
            style={{ fontSize: size === "sm" ? 18 : size === "md" ? 22 : 30, fontWeight: 700 }}
          >
            {score}
          </text>
        </svg>
      </div>
      <span className={cn("font-medium text-slate-600 dark:text-slate-400", labelSize)}>{label}</span>
    </div>
  );
}
