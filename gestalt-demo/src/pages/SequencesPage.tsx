import { useOutletContext } from "react-router-dom";
import type { AppShellOutletContext } from "@/app/AppShell";
import { SequenceCard } from "@/components/app/SequenceCard";
import { campaigns } from "@/data/mockData";

export default function SequencesPage() {
  const { openPanelThread } = useOutletContext<AppShellOutletContext>();

  return (
    <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-7">
        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Messaging</div>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.06em] text-foreground">Sequence library</h1>
        <p className="mt-2 max-w-[760px] text-[15px] text-muted-foreground">
          Route-aware message steps that make the fake demo feel interactive, coachable, and operationally grounded.
        </p>
      </div>

      <div className="space-y-8">
        {campaigns.map((campaign) => (
          <section key={campaign.id} className="surface-card p-5">
            <div className="mb-5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Campaign</div>
              <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.04em] text-foreground">{campaign.name}</h2>
            </div>
            <div className="space-y-3">
              {campaign.sequence.map((step, index) => (
                <SequenceCard key={step.id} index={index} onSelect={() => openPanelThread(step.aiThread)} step={step} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
