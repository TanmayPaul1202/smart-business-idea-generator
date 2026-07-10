import { cn } from "@/lib/utils";
import * as React from "react";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  color?: "indigo" | "purple" | "emerald" | "amber" | "rose";
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, color = "indigo", ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    const colors = {
      indigo: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      purple: "bg-gradient-to-r from-purple-500 to-purple-600",
      emerald: "bg-gradient-to-r from-emerald-500 to-emerald-600",
      amber: "bg-gradient-to-r from-amber-500 to-amber-600",
      rose: "bg-gradient-to-r from-rose-500 to-rose-600",
    };
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800",
          className
        )}
        {...props}
      >
        <div
          className={cn("h-full rounded-full transition-all duration-700", colors[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };
