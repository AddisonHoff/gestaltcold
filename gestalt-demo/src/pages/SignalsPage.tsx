import { useOutletContext } from "react-router-dom";
import type { AppShellOutletContext } from "@/app/AppShell";
import { SignalRow } from "@/components/app/SignalRow";
import { primaryCampaign } from "@/data/mockData";

export default function SignalsPage() {
  const { openPanelThread } = useOutletContext<AppShellOutletContext>();

  return (
    <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-7">
        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Signals</div>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.06em] text-foreground">Buying moments in the wild</h1>
        <p className="mt-2 max-w-[760px] text-[15px] text-muted-foreground">
          These are the real-world events the demo uses to create urgency, shape copy, and justify outreach timing.
        </p>
      </div>

      <div className="space-y-3">
        {primaryCampaign.signals.map((signal) => (
          <SignalRow key={signal.id} onSelect={() => openPanelThread(signal.aiThread)} signal={signal} />
        ))}
      </div>
    </div>
  );
}
