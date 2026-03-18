import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import type { SequenceStep } from "@/data/mockData";
import { cn } from "@/lib/utils";

const channelIcon = {
  Email: Mail,
  LinkedIn: Linkedin,
  Call: Phone,
};

interface SequenceCardProps {
  step: SequenceStep;
  index: number;
  active?: boolean;
  onSelect?: () => void;
}

export function SequenceCard({ step, index, active = false, onSelect }: SequenceCardProps) {
  const Icon = channelIcon[step.channel];

  return (
    <button
      className={cn(
        "group flex w-full gap-4 rounded-[20px] border px-4 py-4 text-left transition-all",
        active
          ? "border-primary/30 bg-primary/[0.05] shadow-[0_18px_35px_rgba(142,81,255,0.08)]"
          : "border-border bg-white hover:border-primary/20 hover:bg-card-strong/60",
      )}
      onClick={onSelect}
    >
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[14px] font-semibold text-white">
          {index + 1}
        </div>
        {index < 2 ? <div className="mt-2 h-12 w-px bg-border" /> : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-card-strong text-primary">
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
              {step.channel} - {step.title}
            </div>
            <div className="text-[12px] text-muted-foreground">{step.dayLabel}</div>
          </div>
          <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="mt-3 text-[13px] leading-5 text-muted-foreground">{step.description}</p>
        <div className="mt-3 rounded-2xl bg-card-strong px-4 py-3 text-[13px] leading-5 text-foreground">
          {step.bodyPreview}
        </div>
      </div>
    </button>
  );
}
