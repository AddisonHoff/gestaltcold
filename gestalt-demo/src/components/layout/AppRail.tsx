import {
  BarChart3,
  CalendarDays,
  LayoutGrid,
  Mail,
  MessageSquare,
  Phone,
  Radio,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  appNavItems,
  campaignRailItems,
  type CampaignRailItem,
  type IconKey,
  type RouteKey,
} from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const iconMap: Record<IconKey, typeof LayoutGrid> = {
  sparkles: LayoutGrid,
  layout: LayoutGrid,
  users: Users,
  radio: Radio,
  message: MessageSquare,
  calendar: CalendarDays,
  chart: BarChart3,
  mail: Mail,
  phone: Phone,
};

interface AppRailProps {
  routeKey: RouteKey;
  activeCampaignSection: string;
  onSelectCampaignSection: (item: CampaignRailItem) => void;
  className?: string;
  onClose?: () => void;
}

function RailLink({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: IconKey;
  label: string;
  onClick: () => void;
}) {
  const Icon = iconMap[icon];

  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-[14px] font-medium transition-all",
        active
          ? "bg-primary/[0.08] text-primary shadow-[inset_0_0_0_1px_rgba(142,81,255,0.10)]"
          : "text-muted-foreground hover:bg-card-strong hover:text-foreground",
      )}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}

export function AppRail({
  routeKey,
  activeCampaignSection,
  onSelectCampaignSection,
  className,
  onClose,
}: AppRailProps) {
  const campaignElements = campaignRailItems.slice(0, 6);
  const campaignAssets = campaignRailItems.slice(6);

  return (
    <aside className={cn("flex h-full w-full flex-col bg-[#fbfbfe]", className)}>
      <div className="flex items-center justify-between border-b border-border px-4 py-4 xl:hidden">
        <div className="text-[15px] font-semibold text-foreground">Navigation</div>
        {onClose ? (
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        ) : null}
      </div>

      {routeKey === "campaignDetail" ? (
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Campaign Elements
          </div>
          <div className="space-y-1">
            {campaignElements.map((item) => (
              <RailLink
                key={item.key}
                active={activeCampaignSection === item.key}
                icon={item.icon}
                label={item.label}
                onClick={() => {
                  onSelectCampaignSection(item);
                  onClose?.();
                }}
              />
            ))}
          </div>
          <div className="mt-8 mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Assets
          </div>
          <div className="space-y-1">
            {campaignAssets.map((item) => (
              <RailLink
                key={item.key}
                active={activeCampaignSection === item.key}
                icon={item.icon}
                label={item.label}
                onClick={() => {
                  onSelectCampaignSection(item);
                  onClose?.();
                }}
              />
            ))}
          </div>
          <div className="mt-auto pt-10">
            <div className="rounded-[22px] border border-border bg-white p-4 shadow-[0_18px_35px_rgba(15,23,42,0.04)]">
              <div className="text-[13px] font-semibold text-foreground">Campaign Settings</div>
              <p className="mt-2 text-[12px] leading-5 text-muted-foreground">
                Manage launch readiness, send caps, and asset completeness before going live.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Workspace
          </div>
          <nav className="space-y-1">
            {appNavItems.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <NavLink
                  key={item.path}
                  end={item.path === "/app"}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[14px] font-medium transition-all",
                      isActive
                        ? "bg-primary/[0.08] text-primary shadow-[inset_0_0_0_1px_rgba(142,81,255,0.10)]"
                        : "text-muted-foreground hover:bg-white hover:text-foreground",
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
          <div className="mt-8 rounded-[22px] border border-primary/10 bg-primary/[0.03] p-4 shadow-[0_18px_35px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Gestalt Agent
            </div>
            <p className="mt-2 text-[12px] leading-5 text-muted-foreground">
              Your AI agent is monitoring signals, sequencing health, and audience fit in real time.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
