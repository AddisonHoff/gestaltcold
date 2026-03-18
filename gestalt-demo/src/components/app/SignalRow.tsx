import { Activity, Building2, Coins, SearchCode } from "lucide-react";
import type { Signal } from "@/data/mockData";
import { cn, formatNumber } from "@/lib/utils";
import { TagPill } from "@/components/ui/TagPill";

const iconMap = {
  hiring: Building2,
  funding: Coins,
  stack: Activity,
  research: SearchCode,
};

const motifMap = {
  violet: "bg-primary/[0.08] text-primary",
  orange: "bg-[#ffede2] text-[#d56b2f]",
  amber: "bg-[#fff3da] text-[#b17b07]",
  teal: "bg-[#ddfbf6] text-[#0b8d84]",
};

interface SignalRowProps {
  signal: Signal;
  active?: boolean;
  onSelect?: () => void;
}

export function SignalRow({ signal, active = false, onSelect }: SignalRowProps) {
  const Icon = iconMap[signal.id as keyof typeof iconMap] ?? Activity;
  const tone =
    signal.intent === "High Intent"
      ? signal.id === "funding"
        ? "orange"
        : "violet"
      : signal.id === "research"
        ? "amber"
        : "amber";

  return (
    <button
      className={cn(
        "group flex w-full items-start gap-4 rounded-[18px] border px-4 py-4 text-left transition-all",
        active
          ? "border-primary/30 bg-primary/[0.05] shadow-[0_18px_35px_rgba(142,81,255,0.08)]"
          : "border-border bg-white hover:border-primary/20 hover:bg-card-strong/70",
      )}
      onClick={onSelect}
    >
      <div
        className={cn(
          "mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl",
          motifMap[signal.motif],
        )}
      >
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{signal.name}</h3>
          <TagPill label={signal.intent} tone={tone} />
        </div>
        <p className="mt-1 text-[13px] leading-5 text-muted-foreground">{signal.description}</p>
      </div>
      <div className="shrink-0 text-right">
        <div className="text-[14px] font-semibold text-foreground">{formatNumber(signal.matches)}</div>
        <div className="text-[12px] text-muted-foreground">matches</div>
      </div>
    </button>
  );
}
