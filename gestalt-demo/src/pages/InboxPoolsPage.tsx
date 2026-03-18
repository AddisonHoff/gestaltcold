import { AlertTriangle, CheckCircle2, Flame } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import type { AppShellOutletContext } from "@/app/AppShell";
import { inboxPools, routeThreads } from "@/data/mockData";
import { cn } from "@/lib/utils";

const healthIcon = {
  Healthy: CheckCircle2,
  Warming: Flame,
  Watch: AlertTriangle,
};

export default function InboxPoolsPage() {
  const { openPanelThread } = useOutletContext<AppShellOutletContext>();

  return (
    <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-7">
        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Launch Plan</div>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.06em] text-foreground">Inbox coverage and launch readiness</h1>
        <p className="mt-2 max-w-[760px] text-[15px] text-muted-foreground">
          Monitor inbox health, deliverability, and send capacity across your active pools.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {inboxPools.map((pool) => {
          const Icon = healthIcon[pool.health];
          const usage = Math.min(100, Math.round((pool.sent / pool.dailyCap) * 100));

          return (
            <button
              key={pool.id}
              className="surface-card p-5 text-left transition-all hover:border-primary/20"
              onClick={() => openPanelThread(routeThreads.inboxPools)}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">{pool.name}</div>
                  <div className="mt-2 text-[13px] text-muted-foreground">{pool.inboxes} inboxes configured</div>
                </div>
                <div
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-2xl",
                    pool.health === "Healthy"
                      ? "bg-[#e5f8ee] text-[#2f8a5f]"
                      : pool.health === "Warming"
                        ? "bg-[#fff3da] text-[#b17b07]"
                        : "bg-[#ffede2] text-[#d56b2f]",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-[28px] font-semibold tracking-[-0.05em] text-foreground">{pool.deliverability}%</div>
                  <div className="text-[12px] text-muted-foreground">deliverability</div>
                </div>
                <div className="text-right">
                  <div className="text-[15px] font-semibold text-foreground">
                    {pool.sent} / {pool.dailyCap}
                  </div>
                  <div className="text-[12px] text-muted-foreground">daily sends</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-[12px] text-muted-foreground">
                  <span>Capacity usage</span>
                  <span>{usage}%</span>
                </div>
                <div className="h-2 rounded-full bg-card-strong">
                  <div className="h-2 rounded-full bg-primary" style={{ width: `${usage}%` }} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
