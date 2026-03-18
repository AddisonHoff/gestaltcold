import { createBrowserRouter } from "react-router-dom";
import AppShell from "@/app/AppShell";
import AnalyticsPage from "@/pages/AnalyticsPage";
import CampaignDetailPage from "@/pages/CampaignDetailPage";
import CampaignsPage from "@/pages/CampaignsPage";
import DashboardPage from "@/pages/DashboardPage";
import InboxPoolsPage from "@/pages/InboxPoolsPage";
import LandingPage from "@/pages/LandingPage";
import SequencesPage from "@/pages/SequencesPage";
import SignalsPage from "@/pages/SignalsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "campaigns", element: <CampaignsPage /> },
      { path: "campaigns/:campaignId", element: <CampaignDetailPage /> },
      { path: "signals", element: <SignalsPage /> },
      { path: "sequences", element: <SequencesPage /> },
      { path: "inbox-pools", element: <InboxPoolsPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
    ],
  },
]);

export default router;
