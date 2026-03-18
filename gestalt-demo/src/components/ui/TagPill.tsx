import { cn } from "@/lib/utils";

export interface TagPillProps {
  label: string;
  tone?: "neutral" | "violet" | "teal" | "orange" | "amber" | "success";
  className?: string;
}

const toneClasses: Record<NonNullable<TagPillProps["tone"]>, string> = {
  neutral: "bg-card-strong text-muted-foreground",
  violet: "bg-primary/[0.08] text-primary",
  teal: "bg-[#ddfbf6] text-[#0b8d84]",
  orange: "bg-[#ffede2] text-[#d56b2f]",
  amber: "bg-[#fff6dd] text-[#bc8408]",
  success: "bg-[#e5f8ee] text-[#2f8a5f]",
};

export function TagPill({ label, tone = "neutral", className }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[-0.01em]",
        toneClasses[tone],
        className,
      )}
    >
      {label}
    </span>
  );
}
