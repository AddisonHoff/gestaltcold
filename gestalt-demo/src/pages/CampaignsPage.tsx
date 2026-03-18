import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";
import { campaigns } from "@/data/mockData";

export default function CampaignsPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Campaigns</div>
          <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.06em] text-foreground">Signal-led motions</h1>
          <p className="mt-2 text-[15px] text-muted-foreground">
            Each campaign is a polished mock: tight ICP definition, intent signals, message sequencing, and launch context.
          </p>
        </div>
        <Button className="rounded-full px-5">
          <Plus className="h-4 w-4" />
          New campaign
        </Button>
      </div>

      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Link
            key={campaign.id}
            className="surface-card block p-5 transition-all hover:border-primary/20 hover:bg-card-strong/40"
            to={`/app/campaigns/${campaign.id}`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-[20px] font-semibold tracking-[-0.04em] text-foreground">{campaign.name}</h2>
                  <TagPill
                    label={campaign.status}
                    tone={campaign.status === "Active" ? "success" : campaign.status === "Paused" ? "amber" : "neutral"}
                  />
                </div>
                <p className="mt-3 max-w-[760px] text-[14px] leading-6 text-muted-foreground">{campaign.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {campaign.audience.icpCriteria.slice(0, 4).map((criterion) => (
                    <TagPill key={criterion} label={criterion} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-[14px] font-semibold text-foreground">{campaign.matchCount.toLocaleString()}</div>
                  <div className="text-[12px] text-muted-foreground">matched accounts</div>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-foreground">{campaign.sequence.length}</div>
                  <div className="text-[12px] text-muted-foreground">touchpoints</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
