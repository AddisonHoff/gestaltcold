import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import type { AppShellOutletContext } from "@/app/AppShell";
import { analyticsPoints, routeThreads, topAngles } from "@/data/mockData";

function buildChartPath(points: { label: string; value: number }[]) {
  const width = 560;
  const height = 220;
  const max = Math.max(...points.map((point) => point.value));
  const min = Math.min(...points.map((point) => point.value));
  const range = max - min || 1;

  return points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point.value - min) / range) * (height - 28) - 14;
      return `${index === 0 ? "M" : "L"} ${x},${y}`;
    })
    .join(" ");
}

export default function AnalyticsPage() {
  const { openPanelThread } = useOutletContext<AppShellOutletContext>();
  const path = useMemo(() => buildChartPath(analyticsPoints), []);

  return (
    <div className="mx-auto max-w-[1180px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-7">
        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Analytics</div>
        <h1 className="mt-3 text-[34px] font-semibold tracking-[-0.06em] text-foreground">Performance by angle and signal</h1>
        <p className="mt-2 max-w-[760px] text-[15px] text-muted-foreground">
          Enough measurement to make the fake product feel grounded: reply-rate motion, winning angles, and a plausible story about why.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="surface-card p-5">
          <div className="mb-5">
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Reply rate trend</div>
            <div className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-foreground">Seven-day momentum</div>
          </div>
          <button className="w-full text-left" onClick={() => openPanelThread(routeThreads.analytics)}>
            <svg className="h-[240px] w-full" viewBox="0 0 560 240" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(142,81,255,0.24)" />
                  <stop offset="100%" stopColor="rgba(142,81,255,0.02)" />
                </linearGradient>
              </defs>
              <path d={`${path} L 560,240 L 0,240 Z`} fill="url(#chart-fill)" />
              <path d={path} fill="none" stroke="#8e51ff" strokeWidth="4" strokeLinecap="round" />
              {analyticsPoints.map((point, index) => {
                const x = (index / (analyticsPoints.length - 1)) * 560;
                const max = Math.max(...analyticsPoints.map((item) => item.value));
                const min = Math.min(...analyticsPoints.map((item) => item.value));
                const range = max - min || 1;
                const y = 220 - ((point.value - min) / range) * (220 - 28) - 14;
                return (
                  <g key={point.label}>
                    <circle cx={x} cy={y} fill="#8e51ff" r="5" />
                    <text x={x} y="238" textAnchor="middle" className="fill-[#7a7d8e] text-[12px]">
                      {point.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </button>
        </section>

        <section className="surface-card p-5">
          <div className="mb-5">
            <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Top performing angles</div>
            <div className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-foreground">What is actually converting</div>
          </div>
          <div className="space-y-3">
            {topAngles.map((angle, index) => (
              <button
                key={angle.id}
                className="flex w-full items-center justify-between gap-4 rounded-[22px] border border-border bg-card-strong px-4 py-4 text-left transition-all hover:border-primary/20"
                onClick={() => openPanelThread(routeThreads.analytics)}
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/[0.08] text-[13px] font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold tracking-[-0.02em] text-foreground">{angle.angle}</div>
                    <div className="mt-1 text-[12px] text-muted-foreground">{angle.volume} sends behind this angle</div>
                  </div>
                </div>
                <div className="text-[18px] font-semibold tracking-[-0.03em] text-foreground">{angle.rate}</div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
