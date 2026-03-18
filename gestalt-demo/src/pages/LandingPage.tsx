import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  MessageSquareMore,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { TagPill } from "@/components/ui/TagPill";
import { dashboardMetrics, landingFeatures, primaryCampaign } from "@/data/mockData";

const featureIcons = [Radio, MessageSquareMore, ShieldCheck, Sparkles];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-[28px] border border-border bg-white/80 px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/[0.10] text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[18px] font-semibold tracking-[-0.03em]">Gestalt</div>
              <div className="text-[12px] text-muted-foreground">Operate outbound, not campaigns</div>
            </div>
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <Link to="/app">
              <Button variant="secondary" size="sm" className="rounded-full px-4">
                Open workspace
              </Button>
            </Link>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <TagPill label="Signal-first outbound platform" tone="violet" />
            <h1 className="mt-5 max-w-[720px] text-[44px] font-semibold leading-[0.95] tracking-[-0.07em] text-foreground sm:text-[56px] lg:text-[72px]">
              Make outbound feel like a sharp operating system, not a spreadsheet ritual.
            </h1>
            <p className="mt-6 max-w-[660px] text-[17px] leading-8 text-muted-foreground">
              Gestalt turns expansion signals, inbox infrastructure, sequencing, and AI guidance into one unified command
              surface — so your team can operate outbound, not manage it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={`/app/campaigns/${primaryCampaign.id}`}>
                <Button className="w-full rounded-full px-6 sm:w-auto">
                  Open campaign workspace
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/app">
                <Button variant="outline" className="w-full rounded-full px-6 sm:w-auto">
                  Explore the full workspace
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="surface-soft p-4">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  Qualified accounts
                </div>
                <div className="mt-3 text-[28px] font-semibold tracking-[-0.05em] text-foreground">2,847</div>
                <div className="mt-1 text-[12px] text-muted-foreground">Enterprise motion in view</div>
              </div>
              <div className="surface-soft p-4">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
                  <CalendarRange className="h-4 w-4 text-primary" />
                  Launch cadence
                </div>
                <div className="mt-3 text-[28px] font-semibold tracking-[-0.05em] text-foreground">3 touches</div>
                <div className="mt-1 text-[12px] text-muted-foreground">Email, LinkedIn, call</div>
              </div>
              <div className="surface-soft p-4">
                <div className="flex items-center gap-2 text-[13px] font-semibold text-foreground">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  Time to value
                </div>
                <div className="mt-3 text-[28px] font-semibold tracking-[-0.05em] text-foreground">Instant</div>
                <div className="mt-1 text-[12px] text-muted-foreground">AI-guided from first session</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-primary/[0.16] blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-border bg-white p-4 shadow-[0_32px_100px_rgba(15,23,42,0.10)]">
              <div className="mb-4 flex items-center justify-between rounded-[24px] border border-border bg-card-strong px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary/[0.10] text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold">Gestalt</div>
                    <div className="text-[12px] text-muted-foreground">Q1 Enterprise workspace</div>
                  </div>
                </div>
                <TagPill label="Active workspace" tone="teal" />
              </div>

              <div className="grid gap-4 xl:grid-cols-[220px_1fr_300px]">
                <div className="rounded-[26px] bg-[#faf9fe] p-4">
                  <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Campaign Elements
                  </div>
                  <div className="space-y-1.5">
                    {["Overview", "Audience", "Signals", "Messaging", "Launch Plan", "Analytics"].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-2xl px-3 py-2.5 text-[14px] font-medium ${
                          index === 0 ? "bg-primary/[0.08] text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 rounded-[30px] border border-border bg-white p-5">
                  <div className="flex items-center gap-2">
                    <TagPill label="Draft" tone="amber" />
                    <span className="text-[12px] text-muted-foreground">Last edited 2 min ago by Jordan</span>
                  </div>
                  <div>
                    <h2 className="text-[34px] font-semibold tracking-[-0.06em] text-foreground">{primaryCampaign.name}</h2>
                    <p className="mt-2 text-[15px] text-muted-foreground">{primaryCampaign.subtitle}</p>
                  </div>
                  <div className="surface-soft grid gap-4 p-4 md:grid-cols-2">
                    <div>
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Audience definition
                      </div>
                      <p className="mt-3 line-clamp-3 text-[13px] leading-5 text-foreground">{primaryCampaign.audience.targetPersona}</p>
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Estimated reach
                      </div>
                      <div className="mt-3 text-[32px] font-semibold tracking-[-0.06em] text-primary">
                        {primaryCampaign.matchCount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {dashboardMetrics.map((metric) => (
                      <div key={metric.id} className="rounded-[22px] border border-border bg-card-strong p-4">
                        <div className="text-[12px] text-muted-foreground">{metric.label}</div>
                        <div className="mt-2 text-[24px] font-semibold tracking-[-0.04em]">{metric.value}</div>
                        <div className="mt-1 text-[12px] text-muted-foreground">{metric.delta}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[26px] border border-border bg-white">
                  <div className="border-b border-border px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/[0.10] text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold">Gestalt Agent</div>
                        <div className="text-[12px] text-muted-foreground">Campaign intelligence</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="rounded-[20px] border border-border bg-card-strong p-4">
                      <div className="text-[13px] font-semibold">Audience refinement</div>
                      <div className="mt-2 text-[13px] leading-6 text-muted-foreground">
                        Narrow to 500-2000 employee SaaS teams with clean Salesforce usage. They convert best.
                      </div>
                    </div>
                    <div className="rounded-[20px] border border-border bg-white p-4">
                      <div className="text-[13px] font-semibold">Drafted first email</div>
                      <div className="mt-2 text-[13px] leading-6 text-muted-foreground">
                        Noticed you&apos;re hiring sales leadership. That usually shows up right before pipeline systems start
                        straining.
                      </div>
                    </div>
                    <div className="rounded-[18px] border border-border bg-card-strong px-4 py-3 text-[13px] text-muted-foreground">
                      Ask AI to help with this campaign...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-4">
          {landingFeatures.map((feature, index) => {
            const Icon = featureIcons[index];

            return (
              <article key={feature.id} className="surface-card p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-2 text-[14px] leading-6 text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
