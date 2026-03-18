import { ArrowRight, BarChart3, Building2, MessageCircleReply } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import type { AppShellOutletContext } from "@/app/AppShell";
import { Button } from "@/components/ui/Button";
import { MetricCard } from "@/components/ui/MetricCard";
import { campaigns, dashboardMetrics, dashboardSuggestions, routeThreads } from "@/data/mockData";

export default function DashboardPage() {
  const { openPanelThread } = useOutletContext<AppShellOutletContext>();

  return (
    <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Overview</div>
          <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.06em] text-foreground">Outbound operating system</h1>
          <p className="mt-2 max-w-[720px] text-[15px] text-muted-foreground">
            A convincing demo surface for signal-led targeting, messaging, launch readiness, and AI-assisted optimization.
          </p>
        </div>
        <Link to={`/app/campaigns/${campaigns[0].id}`}>
          <Button className="rounded-full px-5">
            Open flagship campaign
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <MetricCard icon={BarChart3} label={dashboardMetrics[0].label} value={dashboardMetrics[0].value} delta={dashboardMetrics[0].delta} tone="violet" />
        <MetricCard icon={Building2} label={dashboardMetrics[1].label} value={dashboardMetrics[1].value} delta={dashboardMetrics[1].delta} tone="teal" />
        <MetricCard icon={MessageCircleReply} label={dashboardMetrics[2].label} value={dashboardMetrics[2].value} delta={dashboardMetrics[2].delta} tone="amber" />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="surface-card p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">AI Suggestions</div>
              <div className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-foreground">Fastest improvements</div>
            </div>
          </div>
          <div className="space-y-3">
            {dashboardSuggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                className="w-full rounded-[22px] border border-border bg-card-strong px-4 py-4 text-left transition-all hover:border-primary/20 hover:bg-primary/[0.05]"
                onClick={() => openPanelThread(routeThreads.dashboard)}
              >
                <div className="text-[14px] font-semibold tracking-[-0.02em] text-foreground">{suggestion.title}</div>
                <div className="mt-2 text-[13px] leading-6 text-muted-foreground">{suggestion.description}</div>
              </button>
            ))}
          </div>
        </section>

        <section className="surface-card p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Recent campaigns</div>
              <div className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-foreground">Launch-ready motions</div>
            </div>
            <Link className="text-[13px] font-semibold text-primary" to="/app/campaigns">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <Link
                key={campaign.id}
                className="block rounded-[22px] border border-border bg-white px-4 py-4 transition-all hover:border-primary/20 hover:bg-card-strong"
                to={`/app/campaigns/${campaign.id}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{campaign.name}</div>
                    <div className="mt-2 text-[13px] text-muted-foreground">{campaign.subtitle}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[16px] font-semibold text-foreground">{campaign.matchCount.toLocaleString()}</div>
                    <div className="text-[12px] text-muted-foreground">matches</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
