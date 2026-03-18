import { Pencil, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import type { AppShellOutletContext } from "@/app/AppShell";
import { SequenceCard } from "@/components/app/SequenceCard";
import { SignalRow } from "@/components/app/SignalRow";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";
import { campaigns, primaryCampaign } from "@/data/mockData";

export default function CampaignDetailPage() {
  const params = useParams();
  const { activeCampaignSection, openPanelThread, setActiveCampaignSection } =
    useOutletContext<AppShellOutletContext>();
  const campaign = useMemo(
    () => campaigns.find((item) => item.id === params.campaignId) ?? primaryCampaign,
    [params.campaignId],
  );
  const [activeSignalId, setActiveSignalId] = useState(campaign.signals[0]?.id ?? "");
  const [activeStepId, setActiveStepId] = useState(campaign.sequence[0]?.id ?? "");

  return (
    <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div id="overview" className="mb-8 scroll-mt-28">
        <div className="flex flex-wrap items-center gap-2">
          <TagPill label={campaign.status} tone={campaign.status === "Draft" ? "amber" : "success"} />
          <span className="text-[12px] text-muted-foreground">
            {campaign.updatedAgo} by {campaign.updatedBy}
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-[880px]">
            <h1 className="text-[34px] font-semibold tracking-[-0.06em] text-foreground lg:text-[48px]">
              {campaign.name}
            </h1>
            <p className="mt-3 text-[17px] text-muted-foreground">{campaign.subtitle}</p>
          </div>
          <Button variant="ghost" size="sm" className="self-start rounded-full px-4 text-foreground">
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>

      <section className="mb-6 grid gap-4 lg:grid-cols-4">
        {campaign.launchPlan.map((item) => (
          <button
            key={item.id}
            className="surface-card p-4 text-left transition-all hover:border-primary/20 hover:bg-card-strong/40"
            onClick={() => openPanelThread(campaign.aiThread)}
          >
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
            <div className="mt-3 text-[18px] font-semibold tracking-[-0.03em] text-foreground">{item.value}</div>
          </button>
        ))}
      </section>

      <section
        id="audience"
        className="surface-card mb-6 scroll-mt-28 p-5"
        onMouseEnter={() => setActiveCampaignSection("audience")}
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
              <TrendingUp className="h-4 w-4" />
            </div>
            <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-foreground">Audience Definition</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={() => openPanelThread(campaign.aiThread)}>
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <button
            className="rounded-[24px] border border-border bg-card-strong p-5 text-left transition-all hover:border-primary/20"
            onClick={() => openPanelThread(campaign.aiThread)}
          >
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Target Persona</div>
            <p className="mt-4 text-[15px] leading-7 text-foreground">{campaign.audience.targetPersona}</p>
          </button>

          <div className="rounded-[24px] border border-border bg-primary/[0.04] p-5">
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Estimated Reach</div>
            <div className="mt-4 text-[46px] font-semibold tracking-[-0.07em] text-primary">
              {campaign.audience.estimatedReach.toLocaleString()}
            </div>
            <div className="mt-2 text-[13px] font-medium text-[#0b8d84]">{campaign.audience.reachDelta}</div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[24px] border border-border bg-white p-5">
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">ICP Criteria</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {campaign.audience.icpCriteria.map((criterion) => (
                <TagPill key={criterion} label={criterion} />
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-border bg-white p-5">
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Exclusions</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {campaign.audience.exclusions.map((exclusion) => (
                <TagPill key={exclusion} label={exclusion} tone="neutral" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="signals"
        className="surface-card mb-6 scroll-mt-28 p-5"
        onMouseEnter={() => setActiveCampaignSection("signals")}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-foreground">Intent Signals</h2>
          <Button variant="ghost" size="sm" onClick={() => openPanelThread(campaign.aiThread)}>
            Add signal
          </Button>
        </div>
        <div className="space-y-3">
          {campaign.signals.map((signal) => (
            <SignalRow
              key={signal.id}
              active={signal.id === activeSignalId || activeCampaignSection === signal.id}
              onSelect={() => {
                setActiveSignalId(signal.id);
                setActiveCampaignSection("signals");
                openPanelThread(signal.aiThread);
              }}
              signal={signal}
            />
          ))}
        </div>
      </section>

      <section
        id="messaging"
        className="surface-card mb-6 scroll-mt-28 p-5"
        onMouseEnter={() => setActiveCampaignSection("messaging")}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-foreground">Messaging Sequence</h2>
          <Button variant="ghost" size="sm" onClick={() => openPanelThread(campaign.aiThread)}>
            Add step
          </Button>
        </div>
        <div className="space-y-3">
          {campaign.sequence.map((step, index) => (
            <SequenceCard
              key={step.id}
              active={step.id === activeStepId}
              index={index}
              onSelect={() => {
                setActiveStepId(step.id);
                setActiveCampaignSection("messaging");
                openPanelThread(step.aiThread);
              }}
              step={step}
            />
          ))}
        </div>
      </section>

      <section
        id="launch-plan"
        className="surface-card mb-6 scroll-mt-28 p-5"
        onMouseEnter={() => setActiveCampaignSection("launch-plan")}
      >
        <div className="mb-5">
          <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-foreground">Launch Plan</h2>
          <p className="mt-2 text-[14px] text-muted-foreground">
            Mock operational readiness across inbox pools, send pacing, and channel mix.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {campaign.launchPlan.map((item) => (
            <button
              key={item.id}
              className="rounded-[22px] border border-border bg-card-strong px-4 py-4 text-left transition-all hover:border-primary/20"
              onClick={() => openPanelThread(campaign.aiThread)}
            >
              <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
              <div className="mt-3 text-[18px] font-semibold tracking-[-0.03em] text-foreground">{item.value}</div>
            </button>
          ))}
        </div>
      </section>

      <section
        id="analytics"
        className="surface-card mb-6 scroll-mt-28 p-5"
        onMouseEnter={() => setActiveCampaignSection("analytics")}
      >
        <div className="mb-5">
          <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-foreground">Analytics Snapshot</h2>
          <p className="mt-2 text-[14px] text-muted-foreground">
            Strong reply-rate momentum and above-average signal quality make this the best flagship motion.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Reply rate", value: "4.8%" },
            { label: "Positive replies", value: "31" },
            { label: "Send confidence", value: "Low risk" },
          ].map((item) => (
            <button
              key={item.label}
              className="rounded-[22px] border border-border bg-card-strong px-4 py-4 text-left transition-all hover:border-primary/20"
              onClick={() => openPanelThread(campaign.aiThread)}
            >
              <div className="text-[12px] text-muted-foreground">{item.label}</div>
              <div className="mt-2 text-[28px] font-semibold tracking-[-0.05em] text-foreground">{item.value}</div>
            </button>
          ))}
        </div>
      </section>

      <section
        id="assets"
        className="surface-card scroll-mt-28 p-5"
        onMouseEnter={() => setActiveCampaignSection(activeCampaignSection === "call-scripts" ? "call-scripts" : "email-templates")}
      >
        <div className="mb-5">
          <h2 className="text-[24px] font-semibold tracking-[-0.04em] text-foreground">Assets</h2>
          <p className="mt-2 text-[14px] text-muted-foreground">The demo includes enough collateral to make the launch feel credible.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {campaign.assets.map((asset) => (
            <button
              key={asset.id}
              className="rounded-[22px] border border-border bg-card-strong px-4 py-4 text-left transition-all hover:border-primary/20"
              onClick={() => {
                setActiveCampaignSection(asset.id);
                openPanelThread(campaign.aiThread);
              }}
            >
              <div className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">{asset.label}</div>
              <div className="mt-2 text-[13px] text-muted-foreground">{asset.count} ready-made assets</div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
