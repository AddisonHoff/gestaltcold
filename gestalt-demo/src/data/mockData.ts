export type IntentLevel = "High Intent" | "Medium Intent";
export type AIBlockType = "user" | "insight" | "draft";

export interface AIBlock {
  id: string;
  type: AIBlockType;
  title?: string;
  body: string;
  actions?: string[];
}

export interface AIThreadState {
  modeLabel: string;
  modelLabel: string;
  summary: string;
  blocks: AIBlock[];
  quickPrompts: string[];
  composerPlaceholder: string;
}

export interface CampaignSection {
  id: string;
  label: string;
  eyebrow?: string;
}

export interface Signal {
  id: string;
  name: string;
  description: string;
  intent: IntentLevel;
  matches: number;
  motif: "violet" | "orange" | "amber" | "teal";
  aiThread: AIThreadState;
}

export interface SequenceStep {
  id: string;
  channel: "Email" | "LinkedIn" | "Call";
  title: string;
  dayLabel: string;
  description: string;
  bodyPreview: string;
  aiThread: AIThreadState;
}

export interface Asset {
  id: string;
  label: string;
  count: number;
}

export interface LaunchPlanItem {
  id: string;
  label: string;
  value: string;
}

export interface AudienceDefinition {
  targetPersona: string;
  icpCriteria: string[];
  exclusions: string[];
  estimatedReach: number;
  reachDelta: string;
}

export interface Campaign {
  id: string;
  name: string;
  status: "Draft" | "Active" | "Paused";
  subtitle: string;
  updatedBy: string;
  updatedAgo: string;
  matchCount: number;
  audience: AudienceDefinition;
  sections: CampaignSection[];
  signals: Signal[];
  sequence: SequenceStep[];
  assets: Asset[];
  launchPlan: LaunchPlanItem[];
  aiThread: AIThreadState;
}

export interface LandingFeature {
  id: string;
  title: string;
  description: string;
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone?: "violet" | "teal" | "amber";
}

export interface DashboardSuggestion {
  id: string;
  title: string;
  description: string;
}

export interface InboxPool {
  id: string;
  name: string;
  inboxes: number;
  health: "Healthy" | "Warming" | "Watch";
  dailyCap: number;
  sent: number;
  deliverability: number;
}

export interface AnalyticsPoint {
  label: string;
  value: number;
}

export interface TopAngle {
  id: string;
  angle: string;
  rate: string;
  volume: number;
}

const makeInsightThread = (
  summary: string,
  title: string,
  body: string,
  actions: string[],
): AIThreadState => ({
  modeLabel: "Gestalt Agent",
  modelLabel: "claude-sonnet-4-5",
  summary,
  blocks: [
    {
      id: `${title}-insight`,
      type: "insight",
      title,
      body,
    },
    {
      id: `${title}-actions`,
      type: "draft",
      title: "Suggested next move",
      body: actions.join(" • "),
      actions,
    },
  ],
  quickPrompts: ["Sharpen the targeting", "Draft a better opener", "Show related signals"],
  composerPlaceholder: "Ask AI to help with this campaign...",
});

export const landingFeatures: LandingFeature[] = [
  {
    id: "signals",
    title: "Signal-first targeting",
    description: "Find the buying moments before lists, then turn those signals into executable campaigns.",
  },
  {
    id: "sequencer",
    title: "Operator-style sequencing",
    description: "Shape message variants, timing, and channel mix as a single outbound system instead of isolated emails.",
  },
  {
    id: "inbox",
    title: "Infrastructure-aware sending",
    description: "Keep inbox pools, warmup, deliverability, and send caps inside the same control surface.",
  },
  {
    id: "assistant",
    title: "Chat-driven control plane",
    description: "Use Gestalt Agent to refine signals, sharpen copy, and optimize your sequence before launch.",
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  { id: "reply-rate", label: "Reply rate", value: "4.8%", delta: "+0.9% vs last week", tone: "violet" },
  { id: "qualified", label: "Qualified accounts", value: "2,847", delta: "+12% from last quarter", tone: "teal" },
  { id: "positive", label: "Positive replies", value: "31", delta: "Across 3 active campaigns", tone: "amber" },
];

export const dashboardSuggestions: DashboardSuggestion[] = [
  {
    id: "segment",
    title: "Audience refinement",
    description: "Consider narrowing to North America companies with 500-2000 employees. Your close rate is strongest there.",
  },
  {
    id: "signal",
    title: "Signal weighting",
    description: "The hiring-sales-leadership signal is overperforming. Weight it higher in the scoring model.",
  },
  {
    id: "sequence-gap",
    title: "Sequence gap",
    description: "A six-day delay between step 4 and 5 is suppressing replies. Add a LinkedIn touchpoint on day 11.",
  },
];

export const routeThreads: Record<string, AIThreadState> = {
  dashboard: {
    modeLabel: "Agent Mode",
    modelLabel: "claude-4-sonnet",
    summary: "I analyzed your pipeline setup. Here are the fastest quality-of-revenue wins.",
    blocks: dashboardSuggestions.map((suggestion) => ({
      id: suggestion.id,
      type: "insight",
      title: suggestion.title,
      body: suggestion.description,
    })),
    quickPrompts: ["Show strongest segments", "Draft a new angle", "What should I test next?"],
    composerPlaceholder: "Ask AI to tighten this week’s motion...",
  },
  campaigns: {
    modeLabel: "Agent Mode",
    modelLabel: "claude-4-sonnet",
    summary: "Your campaign mix is healthy. One enterprise motion and two expansion motions are best positioned to launch.",
    blocks: [
      {
        id: "campaign-readout",
        type: "insight",
        title: "Campaign readout",
        body: "The enterprise pipeline campaign has the strongest signal density and the cleanest message-market fit.",
      },
      {
        id: "campaign-draft",
        type: "draft",
        title: "Next step",
        body: "Promote the enterprise motion to launch-ready, then clone its sequence structure into the expansion campaign.",
        actions: ["Create sibling campaign", "Generate launch plan", "Review inbox coverage"],
      },
    ],
    quickPrompts: ["Rank campaigns by readiness", "Create a new campaign", "Find missing assets"],
    composerPlaceholder: "Ask AI to build or improve a campaign...",
  },
  campaignDetail: {
    modeLabel: "Agent Mode",
    modelLabel: "claude-4-sonnet",
    summary: "I’ve analyzed the current campaign and generated recommendations across audience, signals, and messaging.",
    blocks: [
      {
        id: "campaign-overview",
        type: "insight",
        title: "Audience refinement",
        body: "Your strongest close pattern sits in public B2B SaaS companies between 500 and 2000 employees with mature Salesforce hygiene.",
      },
      {
        id: "campaign-draft",
        type: "draft",
        title: "First email draft",
        body: "Subject: Scaling your sales team?\n\nHi [First Name],\n\nNoticed [Company] is hiring a [Role Title]. That signal usually shows up when pipeline systems start straining.\n\nWe helped similar teams move faster by automating signal-based prospecting and daily orchestration.\n\nWorth a 15-minute chat?",
        actions: ["Copy", "Insert", "Regenerate"],
      },
    ],
    quickPrompts: ["Draft a hiring variant", "Turn this into LinkedIn copy", "Show hidden risks"],
    composerPlaceholder: "Ask AI to help with your campaign...",
  },
  signals: {
    modeLabel: "Agent Mode",
    modelLabel: "claude-4-sonnet",
    summary: "Signal quality is trending up. Hiring and funding remain your best early indicators.",
    blocks: [
      {
        id: "signal-opportunity",
        type: "insight",
        title: "Best-performing signal",
        body: "Hiring sales leadership has the strongest overlap with deal creation velocity and positive reply rate.",
      },
      {
        id: "signal-action",
        type: "draft",
        title: "Suggested action",
        body: "Create a variant sequence that pairs leadership hiring with recent CRM process changes.",
        actions: ["Create campaign", "Compare signals", "See sample message"],
      },
    ],
    quickPrompts: ["Suggest a new signal", "Rank by intent", "Show overlap between signals"],
    composerPlaceholder: "Ask AI to reason about signal quality...",
  },
  sequences: {
    modeLabel: "Agent Mode",
    modelLabel: "claude-4-sonnet",
    summary: "Sequence performance is healthy, but step-2 compression would likely lift replies.",
    blocks: [
      {
        id: "sequence-improvement",
        type: "insight",
        title: "Copy improvement",
        body: "Step 1 is strong. Step 2 should be tighter and more specific to the operational pain introduced by the signal.",
      },
      {
        id: "sequence-actions",
        type: "draft",
        title: "Suggested rewrite",
        body: "Reference the exact hiring signal again, then bridge directly into pipeline acceleration rather than general scaling language.",
        actions: ["Rewrite step 2", "Shorten sequence", "Generate alt angle"],
      },
    ],
    quickPrompts: ["Write a stronger step 2", "Add a call step", "Test a different CTA"],
    composerPlaceholder: "Ask AI to rewrite sequence steps...",
  },
  inboxPools: {
    modeLabel: "Agent Mode",
    modelLabel: "claude-4-sonnet",
    summary: "Mailbox health looks good. One pool is still in warmup and should stay off the highest-intent campaign.",
    blocks: [
      {
        id: "inbox-insight",
        type: "insight",
        title: "Deliverability note",
        body: "Primary Pool A can support the enterprise motion immediately. Keep Warmup Pool on lower-risk experiments for a few more days.",
      },
      {
        id: "inbox-action",
        type: "draft",
        title: "Suggested routing",
        body: "Route highest-intent accounts to the healthiest inbox group and reserve the warmup pool for low-volume tests.",
        actions: ["Rebalance capacity", "Show risk drivers", "Export pool summary"],
      },
    ],
    quickPrompts: ["Which pool should launch first?", "Show send-cap risks", "Explain deliverability health"],
    composerPlaceholder: "Ask AI about inbox capacity...",
  },
  analytics: {
    modeLabel: "Agent Mode",
    modelLabel: "claude-4-sonnet",
    summary: "Top-performing angles are clustered around strong operational change signals rather than generic growth language.",
    blocks: [
      {
        id: "analytics-angle",
        type: "insight",
        title: "Angle performance",
        body: "Pipeline acceleration messaging tied to hiring and leadership change is outperforming generic expansion language by 0.9 percentage points.",
      },
      {
        id: "analytics-action",
        type: "draft",
        title: "Suggested experiment",
        body: "Clone the enterprise motion and test a tighter operator-centric CTA against the current sequencing.",
        actions: ["Duplicate experiment", "Generate summary", "Share report"],
      },
    ],
    quickPrompts: ["Find underperforming steps", "What angle is winning?", "Summarize this for a prospect"],
    composerPlaceholder: "Ask AI to interpret performance...",
  },
};

export const primaryCampaign: Campaign = {
  id: "q1-enterprise-pipeline",
  name: "Q1 Enterprise Pipeline Acceleration",
  status: "Draft",
  subtitle: "Multi-touch outbound campaign targeting enterprise accounts showing expansion signals",
  updatedBy: "Jordan",
  updatedAgo: "Last edited 2 min ago",
  matchCount: 2847,
  audience: {
    targetPersona:
      "VP of Sales and CROs at B2B SaaS companies with 200-2000 employees, Series C+ or public, using Salesforce as primary CRM",
    icpCriteria: [
      "ARR $10M-$500M",
      "B2B SaaS",
      "200-2000 employees",
      "North America",
      "Salesforce CRM",
      "Series C+",
    ],
    exclusions: [
      "Current customers",
      "Companies in active deal cycle",
      "Accounts contacted in the last 90 days",
      "Direct competitors",
    ],
    estimatedReach: 2847,
    reachDelta: "+12% from last quarter",
  },
  sections: [
    { id: "overview", label: "Overview" },
    { id: "audience", label: "Audience" },
    { id: "signals", label: "Signals" },
    { id: "messaging", label: "Messaging" },
    { id: "launch-plan", label: "Launch Plan" },
    { id: "analytics", label: "Analytics" },
  ],
  signals: [
    {
      id: "hiring",
      name: "Hiring Sales Leadership",
      description: "Companies posting VP Sales, CRO, or Sales Director roles in the last 30 days",
      intent: "High Intent",
      matches: 847,
      motif: "violet",
      aiThread: makeInsightThread(
        "Leadership hiring strongly correlates with pipeline rebuilds.",
        "Signal optimization",
        "This signal has the strongest correlation with new process buying. Prioritize it over generic expansion language.",
        ["Weight signal higher", "Create a hiring sequence", "Find similar accounts"],
      ),
    },
    {
      id: "funding",
      name: "Funding Round Announced",
      description: "Series C or later funding announced in the last 60 days",
      intent: "High Intent",
      matches: 312,
      motif: "orange",
      aiThread: makeInsightThread(
        "Fresh capital supports a stronger launch narrative.",
        "Funding angle",
        "Pair funding language with operational acceleration, not congratulations. The best responses come from practical execution framing.",
        ["Draft funding email", "Compare against hiring", "Show best CTA"],
      ),
    },
    {
      id: "stack",
      name: "Tech Stack Change",
      description: "Recently adopted or evaluating sales engagement platforms",
      intent: "Medium Intent",
      matches: 523,
      motif: "amber",
      aiThread: makeInsightThread(
        "Stack-change signals indicate active workflow redesign.",
        "Platform migration insight",
        "These accounts are already questioning workflow assumptions. Lead with orchestration and control, not feature parity.",
        ["Generate migration angle", "Add supporting proof", "Blend with hiring signal"],
      ),
    },
    {
      id: "research",
      name: "G2 Category Research",
      description: "Actively researching sales intelligence or outbound tooling on G2",
      intent: "Medium Intent",
      matches: 1165,
      motif: "teal",
      aiThread: makeInsightThread(
        "Category research is broad, so tighter combination logic matters.",
        "Research signal",
        "Use this signal as a supporting layer, not the primary trigger. It performs best when paired with concrete expansion activity.",
        ["Combine with funding", "Tighten ICP", "Generate comparison copy"],
      ),
    },
  ],
  sequence: [
    {
      id: "step-1",
      channel: "Email",
      title: "Personalized Intro",
      dayLabel: "Day 1",
      description: "Reference their specific signal and connect it to how we help similar companies scale.",
      bodyPreview:
        "Hi [First Name], noticed [Company] is hiring a [Role Title] — usually the moment when pipeline coordination starts breaking. We help revenue teams automate signal-based prospecting before reps feel the chaos.",
      aiThread: makeInsightThread(
        "Step 1 is strong but can carry a sharper operator hook.",
        "Message tuning",
        "Keep the signal reference in the first sentence, then move directly into the operational pain. Remove any generic transformation language.",
        ["Rewrite opener", "Shorten body", "Add stronger CTA"],
      ),
    },
    {
      id: "step-2",
      channel: "LinkedIn",
      title: "Soft Touchpoint",
      dayLabel: "Day 4",
      description: "Brief follow-up reinforcing the operational moment behind the signal.",
      bodyPreview:
        "Teams adding sales leadership usually start reworking routing, ownership, and pipeline hygiene quickly. Happy to send a few patterns we’re seeing if useful.",
      aiThread: makeInsightThread(
        "This step should feel shorter and less salesy.",
        "Touchpoint refinement",
        "Lead with a one-line observation and a low-friction offer. The current version is close, but still too polished for LinkedIn.",
        ["Make more casual", "Turn into DM", "Try new angle"],
      ),
    },
    {
      id: "step-3",
      channel: "Call",
      title: "Operator Follow-up",
      dayLabel: "Day 8",
      description: "Call task backed by one line of context from previous touches.",
      bodyPreview:
        "Call note: hiring + funding combo, likely revops complexity emerging. Mention we help teams launch signal-based outbound systems fast.",
      aiThread: makeInsightThread(
        "The call step is timed to follow LinkedIn engagement, giving reps a warm reason to reach out.",
        "Call script direction",
        "Keep this short and tactical. The strongest framing is: saw the change, understand the operational pain, can share patterns quickly.",
        ["Write talk track", "Create voicemail version", "Add objection handling"],
      ),
    },
  ],
  assets: [
    { id: "email-templates", label: "Email Templates", count: 4 },
    { id: "linkedin-messages", label: "LinkedIn Msgs", count: 3 },
    { id: "call-scripts", label: "Call Scripts", count: 2 },
  ],
  launchPlan: [
    { id: "audience", label: "Audience segments ready", value: "3 segments / 2,847 accounts" },
    { id: "mailboxes", label: "Mailbox coverage", value: "8 healthy inboxes available" },
    { id: "cadence", label: "Cadence mix", value: "Email + LinkedIn + call" },
    { id: "risk", label: "Launch risk", value: "Low after warmup completion" },
  ],
  aiThread: routeThreads.campaignDetail,
};

export const campaigns: Campaign[] = [
  primaryCampaign,
  {
    ...primaryCampaign,
    id: "series-c-ops-rollout",
    name: "Series C Revenue Ops Rollout",
    status: "Active",
    subtitle: "Targeting funded teams rebuilding routing, ownership, and forecasting",
    updatedAgo: "Last edited 14 min ago",
    matchCount: 1916,
    sequence: [
      {
        id: "sc-step-1",
        channel: "Email",
        title: "Funding congrats — ops angle",
        dayLabel: "Day 1",
        description: "Lead with the operational complexity that follows a Series C raise, not congratulations.",
        bodyPreview:
          "Hi [First Name], saw the raise — congrats. In our experience, the 90 days after a Series C are when routing, forecasting, and pipeline hygiene quietly start breaking. Happy to share what we're seeing.",
        aiThread: makeInsightThread(
          "This opener is strong but can lose the congrats framing entirely.",
          "Funding opener",
          "Remove the word 'congrats' — it signals you're a vendor who monitors Crunchbase. Lead with the operational reality instead.",
          ["Cut congrats line", "Add specific pain", "Generate variant"],
        ),
      },
      {
        id: "sc-step-2",
        channel: "LinkedIn",
        title: "Process question",
        dayLabel: "Day 3",
        description: "Short question about how they're handling RevOps headcount post-raise.",
        bodyPreview:
          "Curious — are you expanding the RevOps function alongside the sales hire, or keeping it lean for now? Asking because the answer usually determines where friction surfaces first.",
        aiThread: makeInsightThread(
          "Good question framing. Could be tighter.",
          "LinkedIn follow-up",
          "The question is solid but two sentences is one too many for LinkedIn DMs. Trim to one sharp line.",
          ["Tighten to one line", "Try different hook", "Make more casual"],
        ),
      },
      {
        id: "sc-step-3",
        channel: "Email",
        title: "Framework follow-up",
        dayLabel: "Day 8",
        description: "Send a relevant framework for post-Series C RevOps scaling with a soft CTA.",
        bodyPreview:
          "Following up — put together a short framework on how Series C teams typically restructure their outbound motion before the next hiring wave hits. Worth 5 minutes if the timing is right.",
        aiThread: makeInsightThread(
          "The framework offer is strong. Soften the CTA.",
          "Follow-up framing",
          "Replace '5 minutes' with 'a quick read' — it removes the calendar ask and lowers the commitment threshold.",
          ["Soften CTA", "Add social proof", "Shorten email"],
        ),
      },
    ],
  },
  {
    ...primaryCampaign,
    id: "product-launch-signal",
    name: "Product Launch Demand Capture",
    status: "Paused",
    subtitle: "Signal-based motion for teams announcing category expansion or launch windows",
    updatedAgo: "Last edited 1 hr ago",
    matchCount: 1264,
    sequence: [
      {
        id: "pl-step-1",
        channel: "Email",
        title: "Launch timing outreach",
        dayLabel: "Day 1",
        description: "Reference the product launch signal and connect it to outbound demand capture timing.",
        bodyPreview:
          "Hi [First Name], noticed [Company] just announced [Product/Category]. Launch windows are one of the highest-signal moments for outbound — the market is paying attention and pipeline usually accelerates if the motion is tight.",
        aiThread: makeInsightThread(
          "Good timing hook. The second sentence is too generic.",
          "Launch opener",
          "Replace 'pipeline usually accelerates' with a specific outcome: 'we typically see 2–3× more replies in the 30 days around a launch when the sequence is signal-anchored.'",
          ["Add specific stat", "Shorten email", "Try different angle"],
        ),
      },
      {
        id: "pl-step-2",
        channel: "LinkedIn",
        title: "Category question",
        dayLabel: "Day 4",
        description: "Ask about their outbound strategy for the new category — positions you as knowledgeable.",
        bodyPreview:
          "Saw the launch — nice work. Curious how you're approaching outbound for the new category. Are you running separate sequences or blending it into the existing motion?",
        aiThread: makeInsightThread(
          "This touchpoint is well-positioned.",
          "Category question",
          "The question is good. Consider adding 'happy to share what we're seeing work' to give them a reason to respond beyond curiosity.",
          ["Add value hook", "Make shorter", "Try voice note angle"],
        ),
      },
      {
        id: "pl-step-3",
        channel: "Call",
        title: "Launch window follow-up",
        dayLabel: "Day 9",
        description: "Call while the launch window is still active — time-sensitive framing works here.",
        bodyPreview:
          "Call note: product launch + category expansion signal. Mention that the launch window is typically 30–45 days and signal-based outbound performs best when started early in that window.",
        aiThread: makeInsightThread(
          "Good call framing. The urgency is real and legitimate.",
          "Call direction",
          "Lead with the window timing — 'still early in your launch window' — before anything else. It establishes relevance without being pushy.",
          ["Write talk track", "Add objection handling", "Create voicemail"],
        ),
      },
    ],
  },
];

export const inboxPools: InboxPool[] = [
  {
    id: "primary",
    name: "Primary Pool A",
    inboxes: 3,
    health: "Healthy",
    dailyCap: 150,
    sent: 92,
    deliverability: 98.4,
  },
  {
    id: "secondary",
    name: "Secondary Pool",
    inboxes: 2,
    health: "Healthy",
    dailyCap: 120,
    sent: 68,
    deliverability: 97.9,
  },
  {
    id: "warmup",
    name: "Warmup Pool",
    inboxes: 4,
    health: "Warming",
    dailyCap: 70,
    sent: 26,
    deliverability: 95.8,
  },
];

export const analyticsPoints: AnalyticsPoint[] = [
  { label: "Mon", value: 3.4 },
  { label: "Tue", value: 4.1 },
  { label: "Wed", value: 4.4 },
  { label: "Thu", value: 4.2 },
  { label: "Fri", value: 4.8 },
  { label: "Sat", value: 4.7 },
  { label: "Sun", value: 5.1 },
];

export const topAngles: TopAngle[] = [
  {
    id: "enterprise",
    angle: "Hiring sales leadership -> pipeline acceleration",
    rate: "5.1%",
    volume: 428,
  },
  {
    id: "funding",
    angle: "Series C funding -> operator urgency",
    rate: "4.4%",
    volume: 312,
  },
  {
    id: "stack",
    angle: "Stack change -> orchestration control",
    rate: "3.9%",
    volume: 197,
  },
];
