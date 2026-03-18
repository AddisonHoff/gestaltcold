import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delta: string;
  tone?: "violet" | "teal" | "amber";
  className?: string;
}

const toneMap = {
  violet: "bg-primary/[0.08] text-primary",
  teal: "bg-[#ddfbf6] text-[#0b8d84]",
  amber: "bg-[#fff3da] text-[#b17b07]",
};

export function MetricCard({
  icon: Icon,
  label,
  value,
  delta,
  tone = "violet",
  className,
}: MetricCardProps) {
  return (
    <div className={cn("surface-card p-5", className)}>
      <div className="mb-4 flex items-center justify-between">
        <div className={cn("inline-flex h-10 w-10 items-center justify-center rounded-2xl", toneMap[tone])}>
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-[12px] font-medium text-muted-foreground">{label}</span>
      </div>
      <div className="text-[31px] font-semibold tracking-[-0.04em] text-foreground">{value}</div>
      <div className="mt-2 text-[12px] font-medium text-muted-foreground">{delta}</div>
    </div>
  );
}
