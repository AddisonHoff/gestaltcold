import { useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AIPanel } from "@/components/app/AIPanel";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppRail } from "@/components/layout/AppRail";
import { campaigns, primaryCampaign, type AIThreadState } from "@/data/mockData";
import { resolveRouteKey, routeMeta, type CampaignRailItem } from "@/data/navigation";

export interface AppShellOutletContext {
  activeCampaignSection: string;
  setActiveCampaignSection: (section: string) => void;
  openPanelThread: (thread: AIThreadState) => void;
  currentCampaignId: string;
}

export default function AppShell() {
  const location = useLocation();
  const routeKey = resolveRouteKey(location.pathname);
  const currentCampaign =
    campaigns.find((campaign) => location.pathname.endsWith(campaign.id)) ?? primaryCampaign;

  return <RouteScopedShell key={location.pathname} currentCampaign={currentCampaign} routeKey={routeKey} />;
}

function RouteScopedShell({
  currentCampaign,
  routeKey,
}: {
  currentCampaign: (typeof campaigns)[number];
  routeKey: ReturnType<typeof resolveRouteKey>;
}) {

  const [mobileRailOpen, setMobileRailOpen] = useState(false);
  const [mobileAIOpen, setMobileAIOpen] = useState(false);
  const [activeCampaignSection, setActiveCampaignSection] = useState("overview");
  const [overrideThread, setOverrideThread] = useState<AIThreadState | null>(null);

  const thread = useMemo(() => overrideThread ?? routeMeta[routeKey].defaultThread, [overrideThread, routeKey]);

  function openPanelThread(nextThread: AIThreadState) {
    setOverrideThread(nextThread);
    setMobileAIOpen(true);
  }

  function onSelectCampaignSection(item: CampaignRailItem) {
    setActiveCampaignSection(item.key);
    const target = document.querySelector(item.anchor);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        currentCampaignName={currentCampaign.name}
        onOpenAI={() => setMobileAIOpen(true)}
        onOpenNav={() => setMobileRailOpen(true)}
        routeKey={routeKey}
      />

      <div className="flex min-h-[calc(100vh-72px)]">
        <div className="hidden w-[230px] shrink-0 border-r border-border xl:block">
          <AppRail
            activeCampaignSection={activeCampaignSection}
            onSelectCampaignSection={onSelectCampaignSection}
            routeKey={routeKey}
          />
        </div>

        <main className="min-w-0 flex-1 bg-white">
          <Outlet
            context={{
              activeCampaignSection,
              currentCampaignId: currentCampaign.id,
              openPanelThread,
              setActiveCampaignSection,
            } satisfies AppShellOutletContext}
          />
        </main>

        <div className="hidden w-[360px] shrink-0 xl:block 2xl:w-[388px]">
          <AIPanel thread={thread} />
        </div>
      </div>

      {mobileRailOpen ? (
        <div className="fixed inset-0 z-40 xl:hidden">
          <button
            className="absolute inset-0 bg-[#0f172a]/25 backdrop-blur-[2px]"
            onClick={() => setMobileRailOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[88vw] max-w-[320px] shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <AppRail
              activeCampaignSection={activeCampaignSection}
              className="h-full"
              onClose={() => setMobileRailOpen(false)}
              onSelectCampaignSection={onSelectCampaignSection}
              routeKey={routeKey}
            />
          </div>
        </div>
      ) : null}

      {mobileAIOpen ? (
        <div className="fixed inset-0 z-40 xl:hidden">
          <button
            className="absolute inset-0 bg-[#0f172a]/25 backdrop-blur-[2px]"
            onClick={() => setMobileAIOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-[92vw] max-w-[380px] shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <AIPanel className="h-full" onClose={() => setMobileAIOpen(false)} thread={thread} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
