import { History, Menu, Search, Share2, Sparkles, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { RouteKey } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";

interface AppHeaderProps {
  routeKey: RouteKey;
  currentCampaignName?: string;
  onOpenNav: () => void;
  onOpenAI: () => void;
}

function getBreadcrumbs(routeKey: RouteKey, currentCampaignName?: string) {
  if (routeKey === "campaignDetail") {
    return [
      { label: "Campaigns", href: "/app/campaigns" },
      { label: currentCampaignName ?? "Campaign Detail" },
    ];
  }

  if (routeKey === "dashboard") {
    return [{ label: "Overview" }];
  }

  const labels: Record<Exclude<RouteKey, "landing" | "dashboard" | "campaignDetail">, string> = {
    campaigns: "Campaigns",
    signals: "Signals",
    sequences: "Messaging",
    inboxPools: "Launch Plan",
    analytics: "Analytics",
  };

  return [{ label: labels[routeKey as keyof typeof labels] ?? "Workspace" }];
}

export function AppHeader({ routeKey, currentCampaignName, onOpenNav, onOpenAI }: AppHeaderProps) {
  const breadcrumbs = getBreadcrumbs(routeKey, currentCampaignName);

  return (
    <header className="sticky top-0 z-30 border-b border-border/90 bg-white/85 backdrop-blur-xl">
      <div className="flex h-18 items-center gap-3 px-3 sm:px-5">
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={onOpenNav}>
          <Menu className="h-4 w-4" />
        </Button>

        <div className="flex min-w-0 items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/[0.10] text-primary">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">Gestalt</span>
          </Link>
          <div className="hidden items-center gap-2 text-[14px] xl:flex">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.label} className="flex items-center gap-2">
                {breadcrumb.href ? (
                  <Link className="text-muted-foreground transition-colors hover:text-foreground" to={breadcrumb.href}>
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-foreground">{breadcrumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 ? <span className="text-muted-foreground">/</span> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="ml-auto hidden flex-1 justify-center px-6 lg:flex">
          <div className="flex w-full max-w-[420px] items-center gap-3 rounded-[18px] border border-border bg-card-strong px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-[13px] text-muted-foreground">Search campaign elements...</span>
            <TagPill className="ml-auto rounded-md px-1.5 py-0.5" label="⌘K" />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="hidden lg:inline-flex">
            <History className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden lg:inline-flex">
            <Share2 className="h-4 w-4" />
          </Button>
          <div className="hidden items-center -space-x-2 pr-1 sm:flex">
            {[
              { label: "JD", color: "bg-primary" },
              { label: "MK", color: "bg-[#0ea5a4]" },
              { label: "AL", color: "bg-[#f97316]" },
            ].map((avatar) => (
              <div
                key={avatar.label}
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-semibold text-white ${avatar.color}`}
              >
                {avatar.label}
              </div>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="xl:hidden" onClick={onOpenAI}>
            <Wand2 className="h-4 w-4" />
          </Button>
          <Button size="sm" className="rounded-full px-4">
            Launch
          </Button>
        </div>
      </div>
    </header>
  );
}
