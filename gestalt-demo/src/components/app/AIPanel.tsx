import { ArrowUp, Bot, History, RotateCcw, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { AIBlock, AIThreadState } from "@/data/mockData";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface AIPanelProps {
  thread: AIThreadState;
  className?: string;
  onClose?: () => void;
}

const agentResponses = [
  "Based on current signal density, your highest-leverage move is narrowing to companies showing both hiring and stack-change signals simultaneously — that combination has a 2.3× reply rate lift in your cohort.",
  "Looking at your sequence timing, the Day 4 LinkedIn touchpoint is landing too close to the Day 1 email. Pushing it to Day 6 reduces the 'spray and pray' signal and gives inboxes more breathing room.",
  "The audience criteria are solid, but you're capturing too many 200-employee companies. The sweet spot based on close patterns is 400–1,800 employees with at least Series B funding.",
  "I'd reframe the opening line. Instead of signaling the hiring move directly, open with the operational outcome: teams that add sales leadership without updating their pipeline tools usually feel the strain within 90 days.",
  "Signal overlap analysis: 23% of your hiring accounts also appear in the G2 research cohort. That intersection is your highest-intent cluster — worth a dedicated sequence variant.",
];

let responseIdx = 0;
function nextResponse() {
  const r = agentResponses[responseIdx % agentResponses.length];
  responseIdx++;
  return r;
}

export function AIPanel({ thread, className, onClose }: AIPanelProps) {
  const [input, setInput] = useState("");
  const [extraBlocks, setExtraBlocks] = useState<AIBlock[]>([]);
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset conversation when thread changes (page navigation)
  useEffect(() => {
    setExtraBlocks([]);
    setInput("");
    setThinking(false);
  }, [thread]);

  // Auto-scroll to bottom when new blocks arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [extraBlocks, thinking]);

  function handleSubmit() {
    const text = input.trim();
    if (!text || thinking) return;

    setInput("");
    const userBlock: AIBlock = {
      id: `user-${Date.now()}`,
      type: "user",
      body: text,
    };
    setExtraBlocks((prev) => [...prev, userBlock]);
    setThinking(true);

    setTimeout(() => {
      const agentBlock: AIBlock = {
        id: `agent-${Date.now()}`,
        type: "insight",
        title: "Agent response",
        body: nextResponse(),
      };
      setExtraBlocks((prev) => [...prev, agentBlock]);
      setThinking(false);
    }, 1100 + Math.random() * 400);
  }

  function handlePromptClick(prompt: string) {
    setInput(prompt);
    inputRef.current?.focus();
  }

  const allBlocks = [...thread.blocks, ...extraBlocks];
  const baseCount = thread.blocks.length;

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-l-2 border-primary/20 bg-gradient-to-b from-primary/[0.02] to-white",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-foreground">
              Gestalt Agent
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="rounded-full bg-card-strong px-2 py-1 font-semibold">{thread.modelLabel}</span>
              <span className="text-emerald-600 font-medium">Active</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => { setExtraBlocks([]); setInput(""); }}>
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

      {/* Summary */}
      <div className="animate-fade-up border-b border-border bg-card-strong/50 px-4 py-4" style={{ animationDelay: "40ms" }}>
        <p className="text-[13px] leading-5 text-foreground">{thread.summary}</p>
      </div>

      {/* Message blocks */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        {allBlocks.map((block, index) => {
          const isNew = index >= baseCount;
          return (
            <div
              key={block.id}
              className={cn(
                "rounded-[20px] border px-4 py-4 animate-fade-up",
                block.type === "user"
                  ? "ml-8 bg-primary text-primary-foreground border-primary/20"
                  : "bg-white border-border",
              )}
              style={{
                animationDelay: isNew ? "0ms" : `${80 + index * 100}ms`,
              }}
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
                {block.title ? (
                  <div className="text-[13px] font-semibold tracking-[-0.01em]">{block.title}</div>
                ) : null}
              </div>
              <div
                className={cn(
                  "text-[13px] leading-5 whitespace-pre-line",
                  block.type === "user" ? "text-white/95" : "text-muted-foreground",
                )}
              >
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
          );
        })}

        {/* Thinking indicator */}
        {thinking ? (
          <div className="animate-fade-up rounded-[20px] border border-border bg-white px-4 py-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/[0.08] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <div className="text-[13px] font-semibold text-muted-foreground">Thinking…</div>
            </div>
            <div className="flex items-center gap-1.5 py-1">
              <span className="thinking-dot h-2 w-2 rounded-full bg-primary/40" />
              <span className="thinking-dot h-2 w-2 rounded-full bg-primary/40" />
              <span className="thinking-dot h-2 w-2 rounded-full bg-primary/40" />
            </div>
          </div>
        ) : null}
      </div>

      {/* Composer */}
      <div className="border-t border-border px-4 py-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {thread.quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handlePromptClick(prompt)}
              className="rounded-full border border-border bg-card-strong px-3 py-2 text-[12px] font-medium text-muted-foreground transition-all hover:border-primary/20 hover:bg-primary/[0.04] hover:text-foreground"
            >
              {prompt} ↵
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-[18px] border border-border bg-white px-4 py-3 shadow-sm transition-all focus-within:border-primary/30 focus-within:ring-2 focus-within:ring-primary/10">
          <input
            ref={inputRef}
            className="flex-1 bg-transparent text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
            placeholder={thread.composerPlaceholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim() || thinking}
            className={cn(
              "inline-flex h-8 w-8 items-center justify-center rounded-full transition-all",
              input.trim() && !thinking
                ? "bg-primary text-white hover:bg-primary/90 scale-100"
                : "bg-primary/20 text-primary/40 cursor-not-allowed scale-90",
            )}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
