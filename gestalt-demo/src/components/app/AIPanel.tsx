import { Bot, History, RotateCcw, Sparkles, X } from "lucide-react";
import type { AIThreadState } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AIPanelProps {
  thread: AIThreadState;
  className?: string;
  onClose?: () => void;
}

export function AIPanel({ thread, className, onClose }: AIPanelProps) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col border-l border-border bg-white",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">AI Assistant</div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="rounded-full bg-card-strong px-2 py-1 font-semibold">{thread.modeLabel}</span>
              <span>{thread.modelLabel}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <History className="h-4 w-4" />
          </Button>
          {onClose ? (
            <Button variant="ghost" size="icon" className="h-9 w-9 xl:hidden" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
      </div>

      <div className="border-b border-border bg-card-strong/50 px-4 py-4">
        <p className="text-[13px] leading-5 text-foreground">{thread.summary}</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {thread.blocks.map((block) => (
          <div
            key={block.id}
            className={cn(
              "rounded-[20px] border px-4 py-4",
              block.type === "user" ? "ml-8 bg-primary text-primary-foreground border-primary/20" : "bg-white border-border",
            )}
          >
            <div className="mb-2 flex items-center gap-2">
              {block.type === "user" ? (
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
                  <Bot className="h-3.5 w-3.5" />
                </div>
              ) : (
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/[0.08] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
              )}
              {block.title ? <div className="text-[13px] font-semibold tracking-[-0.01em]">{block.title}</div> : null}
            </div>
            <div className={cn("text-[13px] leading-5 whitespace-pre-line", block.type === "user" ? "text-white/95" : "text-muted-foreground")}>
              {block.body}
            </div>
            {block.actions?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {block.actions.map((action) => (
                  <Button key={action} variant="outline" size="sm" className="rounded-full px-3">
                    {action}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="border-t border-border px-4 py-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {thread.quickPrompts.map((prompt) => (
            <button
              key={prompt}
              className="rounded-full border border-border bg-card-strong px-3 py-2 text-[12px] font-medium text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground"
            >
              {prompt}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-[18px] border border-border bg-card-strong px-4 py-3">
          <input
            className="flex-1 bg-transparent text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
            placeholder={thread.composerPlaceholder}
            readOnly
          />
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>
      </div>
    </aside>
  );
}
