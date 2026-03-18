import type { AIThreadState } from "@/data/mockData";
import { routeThreads } from "@/data/mockData";

export type RouteKey =
  | "landing"
  | "dashboard"
  | "campaigns"
  | "campaignDetail"
  | "signals"
  | "sequences"
  | "inboxPools"
  | "analytics";

export type IconKey =
  | "sparkles"
  | "layout"
  | "users"
  | "radio"
  | "message"
  | "calendar"
  | "chart"
  | "mail"
  | "phone";

export interface AppNavItem {
  key: Exclude<RouteKey, "landing" | "campaignDetail">;
  label: string;
  path: string;
  icon: IconKey;
}

export interface CampaignRailItem {
  key: string;
  label: string;
  icon: IconKey;
  anchor: string;
}

export interface RouteMeta {
  key: RouteKey;
  title: string;
  subtitle: string;
  rail: "none" | "primary" | "campaign";
  defaultThread: AIThreadState;
}

export const appNavItems: AppNavItem[] = [
  { key: "dashboard", label: "Overview", path: "/app", icon: "layout" },
  { key: "campaigns", label: "Campaigns", path: "/app/campaigns", icon: "users" },
  { key: "signals", label: "Signals", path: "/app/signals", icon: "radio" },
  { key: "sequences", label: "Messaging", path: "/app/sequences", icon: "message" },
  { key: "inboxPools", label: "Launch Plan", path: "/app/inbox-pools", icon: "calendar" },
  { key: "analytics", label: "Analytics", path: "/app/analytics", icon: "chart" },
];

export const campaignRailItems: CampaignRailItem[] = [
  { key: "overview", label: "Overview", icon: "layout", anchor: "#overview" },
  { key: "audience", label: "Audience", icon: "users", anchor: "#audience" },
  { key: "signals", label: "Signals", icon: "radio", anchor: "#signals" },
  { key: "messaging", label: "Messaging", icon: "message", anchor: "#messaging" },
  { key: "launch-plan", label: "Launch Plan", icon: "calendar", anchor: "#launch-plan" },
  { key: "analytics", label: "Analytics", icon: "chart", anchor: "#analytics" },
  { key: "email-templates", label: "Email Templates", icon: "mail", anchor: "#assets" },
  { key: "call-scripts", label: "Call Scripts", icon: "phone", anchor: "#assets" },
];

export const routeMeta: Record<RouteKey, RouteMeta> = {
  landing: {
    key: "landing",
    title: "Gestalt",
    subtitle: "Operate outbound, not campaigns",
    rail: "none",
    defaultThread: routeThreads.dashboard,
  },
  dashboard: {
    key: "dashboard",
    title: "Campaign Overview",
    subtitle: "Signal-first outbound operating system",
    rail: "primary",
    defaultThread: routeThreads.dashboard,
  },
  campaigns: {
    key: "campaigns",
    title: "Campaigns",
    subtitle: "Signal-led motions ready to launch",
    rail: "primary",
    defaultThread: routeThreads.campaigns,
  },
  campaignDetail: {
    key: "campaignDetail",
    title: "Q1 Enterprise Pipeline Acceleration",
    subtitle: "Multi-touch outbound campaign targeting enterprise accounts showing expansion signals",
    rail: "campaign",
    defaultThread: routeThreads.campaignDetail,
  },
  signals: {
    key: "signals",
    title: "Signals",
    subtitle: "Real-world events that indicate buying intent",
    rail: "primary",
    defaultThread: routeThreads.signals,
  },
  sequences: {
    key: "sequences",
    title: "Messaging",
    subtitle: "Sequence steps tuned around the signal moment",
    rail: "primary",
    defaultThread: routeThreads.sequences,
  },
  inboxPools: {
    key: "inboxPools",
    title: "Launch Plan",
    subtitle: "Mailbox health, capacity, and launch readiness",
    rail: "primary",
    defaultThread: routeThreads.inboxPools,
  },
  analytics: {
    key: "analytics",
    title: "Analytics",
    subtitle: "Performance across angles, signals, and channels",
    rail: "primary",
    defaultThread: routeThreads.analytics,
  },
};

export function resolveRouteKey(pathname: string): RouteKey {
  if (pathname === "/") return "landing";
  if (pathname === "/app") return "dashboard";
  if (pathname.startsWith("/app/campaigns/")) return "campaignDetail";
  if (pathname === "/app/campaigns") return "campaigns";
  if (pathname === "/app/signals") return "signals";
  if (pathname === "/app/sequences") return "sequences";
  if (pathname === "/app/inbox-pools") return "inboxPools";
  if (pathname === "/app/analytics") return "analytics";
  return "dashboard";
}
