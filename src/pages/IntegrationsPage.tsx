import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { DeskmeritLogo } from "../components/DeskmeritLogo";
import {
  ArrowRight,
  ExternalLink,
  Search,
  Check,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  RefreshCw,
  GitBranch,
  Star,
  Monitor,
  Folder,
  BarChart3,
  FileText,
  Sliders,
  Users,
  Moon,
  Camera,
  Layers,
  Sparkles,
  Bot,
  Terminal,
  Activity,
  Calendar,
  Lock,
  Pencil,
  Trash2,
} from "lucide-react";

// =============================================================================
// AUTHENTIC OFFICIAL SVG LOGOS FOR INTEGRATIONS
// =============================================================================

function GoogleCalendarLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#FFFFFF" stroke="#E6E8EB" strokeWidth="1" />
      <g transform="translate(6, 6) scale(0.666)">
        <rect x="6" y="6" width="36" height="36" rx="8" fill="#FFFFFF" />
        <path d="M34 6H14C9.58 6 6 9.58 6 14v20c0 4.42 3.58 8 8 8h20c4.42 0 8-3.58 8-8V14c0-4.42-3.58-8-8-8z" fill="#FFFFFF"/>
        <path d="M34 6H14C9.58 6 6 9.58 6 14v2h36v-2c0-4.42-3.58-8-8-8z" fill="#4285F4"/>
        <path d="M6 14v20c0 4.42 3.58 8 8 8v-4H10V16H6v-2z" fill="#34A853"/>
        <path d="M14 42h20c4.42 0 8-3.58 8-8v-2H10v4c0 3.31 2.69 6 4 6z" fill="#FBBC04"/>
        <path d="M42 14v20c0 4.42-3.58 8-8 8v-4h4V16h4v-2z" fill="#EA4335"/>
        <path d="M21.2 31.5h-5.4v-2.2l3-3.1c.9-.9 1.5-1.7 1.5-2.5 0-.6-.4-1.1-1.1-1.1-.7 0-1.2.4-1.3 1.1l-2.1-.3c.3-1.6 1.7-2.6 3.4-2.6 1.8 0 3.2 1.1 3.2 2.8 0 1.2-.7 2.2-1.8 3.3l-2 1.9h4v2.8zm11 0h-2.5v-7.8l-2.4 1.7-1.1-1.8 3.5-2.5h2.5v10.4z" fill="#1A73E8"/>
      </g>
    </svg>
  );
}

function OutlookLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#0078D4" />
      <path d="M22 10h12a2 2 0 012 2v20a2 2 0 01-2 2H22V10z" fill="#005A9E"/>
      <path d="M22 22l14-9v18l-14 3V22z" fill="#004B87" opacity="0.6"/>
      <path d="M22 10l14 8.5-14 8.5V10z" fill="#28A8EA"/>
      <rect x="8" y="12" width="18" height="20" rx="3.5" fill="#0078D4" stroke="#28A8EA" strokeWidth="1"/>
      <ellipse cx="17" cy="22" rx="4.5" ry="5.5" fill="#FFFFFF"/>
      <ellipse cx="17" cy="22" rx="2.5" ry="3.5" fill="#0078D4"/>
    </svg>
  );
}

function JiraLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#0052CC" />
      <g transform="translate(10, 10)">
        <path d="M11.571 0H2.083C.932 0 0 .933 0 2.083v9.488C0 6.012 4.417 1.595 9.976 1.595h1.595V0z" fill="#FFFFFF" fillOpacity="0.85"/>
        <path d="M11.917 5.952H6.071c-.932 0-1.69.758-1.69 1.69v4.262c0 3.286 2.667 5.953 5.953 5.953h1.583V5.952z" fill="#2684FF"/>
        <path d="M23.833 11.905h-9.488c-5.559 0-9.976 4.417-9.976 9.976v.036c0 1.15.932 2.083 2.083 2.083h9.488c5.559 0 9.976-4.417 9.976-9.976v-.036c0-1.15-.932-2.083-2.083-2.083z" fill="#FFFFFF"/>
        <path d="M23.958 17.857h-5.845c-.932 0-1.69.758-1.69 1.69v4.262c0 3.286 2.667 5.953 5.953 5.953h1.582v-11.905z" fill="#2684FF"/>
      </g>
    </svg>
  );
}

function AsanaLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#FFFFFF" stroke="#FDE2DF" strokeWidth="1.5" />
      <circle cx="22" cy="14" r="6.5" fill="#FC636B"/>
      <circle cx="12.5" cy="29" r="6.5" fill="#FC636B"/>
      <circle cx="31.5" cy="29" r="6.5" fill="#FC636B"/>
    </svg>
  );
}

function TrelloLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#0079BF"/>
      <rect x="8" y="9" width="11" height="22" rx="2.5" fill="#FFFFFF"/>
      <rect x="25" y="9" width="11" height="15" rx="2.5" fill="#FFFFFF"/>
    </svg>
  );
}

function GitLabLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#FFFFFF" stroke="#FEE5DF" strokeWidth="1.5" />
      <g transform="translate(4, 4) scale(0.75)">
        <path d="M47.2 19.2l-2.6-8.2a2.4 2.4 0 00-4.6 0l-4.2 13H12.2l-4.2-13a2.4 2.4 0 00-4.6 0L.8 19.2a3 3 0 001.1 3.4L24 41.4l22.1-18.8a3 3 0 001.1-3.4z" fill="#E24329"/>
        <path d="M24 41.4l11.4-17.4H12.6L24 41.4z" fill="#E24329"/>
        <path d="M24 41.4L12.6 24H.8l23.2 17.4z" fill="#FC6D26"/>
        <path d="M.8 19.2a3 3 0 001.1 3.4L12.6 24 8.4 11l-7.6 8.2z" fill="#FCA326"/>
        <path d="M24 41.4l11.4-17.4h11.8L24 41.4z" fill="#FC6D26"/>
        <path d="M47.2 19.2a3 3 0 01-1.1 3.4L35.4 24l4.2-13 7.6 8.2z" fill="#FCA326"/>
      </g>
    </svg>
  );
}

function SlackLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#FFFFFF" stroke="#E6E8EB" strokeWidth="1.5" />
      <g transform="translate(6, 6) scale(0.666)">
        <path d="M11 20a4 4 0 100-8 4 4 0 000 8z" fill="#36C5F0"/>
        <path d="M4 23a4 4 0 004 4h7a4 4 0 100-8H8a4 4 0 00-4 4z" fill="#36C5F0"/>
        <path d="M20 11a4 4 0 10-8 0 4 4 0 008 0z" fill="#2EB67D"/>
        <path d="M23 4a4 4 0 00-4 4v7a4 4 0 108 0V8a4 4 0 00-4-4z" fill="#2EB67D"/>
        <path d="M37 28a4 4 0 100 8 4 4 0 000-8z" fill="#ECB22E"/>
        <path d="M44 25a4 4 0 00-4-4h-7a4 4 0 100 8h7a4 4 0 004-4z" fill="#ECB22E"/>
        <path d="M28 37a4 4 0 108 0 4 4 0 00-8 0z" fill="#E01E5A"/>
        <path d="M25 44a4 4 0 004-4v-7a4 4 0 10-8 0v7a4 4 0 004 4z" fill="#E01E5A"/>
      </g>
    </svg>
  );
}

function ZapierLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#FF4F00"/>
      <path d="M22 8v28M8 22h28M12.1 12.1l19.8 19.8M12.1 31.9l19.8-19.8" stroke="#FFFFFF" strokeWidth="4.8" strokeLinecap="round"/>
    </svg>
  );
}

function MakeLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#6D32EC"/>
      <path d="M11 29l7-14 7 14M25 15l7 14" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TeamsLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#5059C9"/>
      <circle cx="30" cy="15" r="3.5" fill="#FFFFFF" fillOpacity="0.8"/>
      <path d="M30 20h-3c-1.3 0-2.5 1-2.5 2.3v6.7h8v-6.7c0-1.3-1.2-2.3-2.5-2.3z" fill="#FFFFFF" fillOpacity="0.8"/>
      <circle cx="18" cy="14" r="4.5" fill="#FFFFFF"/>
      <path d="M18 20h-3.5c-1.8 0-3.5 1.5-3.5 3.3V32h14V23.3c0-1.8-1.7-3.3-3.5-3.3H18z" fill="#FFFFFF"/>
      <rect x="7" y="15" width="13" height="14" rx="2.5" fill="#444CAC"/>
      <text x="13.5" y="25.5" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="900" fontFamily="system-ui, sans-serif">T</text>
    </svg>
  );
}

function AzureDevOpsLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#0078D4"/>
      <path d="M32 14L22 7.5 12 14v16l10 6.5 10-6.5V14z" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" fill="none"/>
      <path d="M22 7.5v29M12 14l20 16M32 14l-20 16" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85"/>
    </svg>
  );
}

function ClaudeMcpLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#0F1730"/>
      <circle cx="22" cy="22" r="12" stroke="#FF5A36" strokeWidth="3" strokeDasharray="4 3"/>
      <circle cx="22" cy="22" r="5" fill="#FF5A36"/>
    </svg>
  );
}

function SqalibleLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#0F1730"/>
      <path d="M13 30l9-15 9 15" stroke="#FF5A36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="22" cy="26" r="2.8" fill="#FFFFFF"/>
    </svg>
  );
}

function RestApiLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#1E293B"/>
      <path d="M15 17l-5 5 5 5M29 17l5 5-5 5M24 13l-4 18" stroke="#10B981" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LinearLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#12151A"/>
      <path d="M11 33L33 11M7 24L24 7M20 37L37 20" stroke="#5E6AD2" strokeWidth="3.6" strokeLinecap="round"/>
    </svg>
  );
}

function ClickUpLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#FFFFFF" stroke="#EDE9FE" strokeWidth="1.5"/>
      <path d="M9 27c4.5 3.5 9.5 5 13 5s8.5-1.5 13-5" stroke="#7B68EE" strokeWidth="4.2" strokeLinecap="round"/>
      <path d="M14 19l8-8 8 8" stroke="#FF007A" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function OpenProjectLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#1070CA"/>
      <circle cx="22" cy="22" r="12" stroke="#FFFFFF" strokeWidth="3.8" fill="none"/>
      <circle cx="22" cy="22" r="4.8" fill="#FFFFFF"/>
    </svg>
  );
}

function GitHubLogo({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#181717"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 9C14.82 9 9 14.82 9 22.02c0 5.76 3.73 10.64 8.91 12.36.65.12.89-.28.89-.63 0-.31-.01-1.13-.02-2.22-3.61.79-4.37-1.74-4.37-1.74-.59-1.5-1.45-1.9-1.45-1.9-1.18-.81.09-.79.09-.79 1.3.09 1.99 1.34 1.99 1.34 1.16 1.99 3.04 1.41 3.79 1.08.12-.84.45-1.41.82-1.74-2.88-.33-5.91-1.44-5.91-6.43 0-1.42.51-2.58 1.34-3.49-.13-.33-.58-1.65.13-3.45 0 0 1.09-.35 3.57 1.33a12.4 12.4 0 016.5 0c2.48-1.68 3.57-1.33 3.57-1.33.71 1.8.26 3.12.13 3.45.83.91 1.34 2.07 1.34 3.49 0 5-3.04 6.1-5.94 6.42.47.4.88 1.2.88 2.41 0 1.74-.02 3.14-.02 3.57 0 .35.23.76.89.63A13.03 13.03 0 0035 22.02C35 14.82 29.18 9 22 9z" fill="#FFFFFF"/>
    </svg>
  );
}

// =============================================================================
// FIGMA PRODUCT CARD INTERFACE & REGISTRY
// Exact design matching Figma screenshot (media_1793082249338.png)
// =============================================================================

export interface FigmaIntegrationItem {
  id: string;
  name: string;
  category: "pm" | "calendars" | "chat" | "automation" | "hrms" | "developers";
  categoryLabel: string;
  avatarBg: string;
  monogram: string;
  authType: string;
  description: string;
  scopes: string[];
  status: "connected" | "reconnect" | "connect";
  href: string;
  tagline: string;
  badge: string;
  iconUrl: string;
  logo?: React.ReactNode;
}

export const FIGMA_INTEGRATIONS: FigmaIntegrationItem[] = [
  {
    id: "asana",
    name: "Asana",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#FC636B",
    monogram: "A",
    authType: "OAuth2",
    description: "Sync Asana projects, portfolios and tasks for time tracking.",
    scopes: ["projects_sync", "tasks_sync", "portfolios"],
    status: "connect",
    href: "/features/integrations/asana",
    tagline: "Task & Milestone Telemetry",
    badge: "Native Sync",
    iconUrl: "/images/integrations/asana.svg",
    logo: <img src="/images/integrations/asana.svg" alt="Asana" className="w-10 h-10 object-contain" />,
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#0078D4",
    monogram: "AD",
    authType: "PAT",
    description: "Pull boards and work items into Deskmerit projects.",
    scopes: ["projects_sync", "tasks_sync", "boards", "+1 more"],
    status: "reconnect",
    href: "/features/integrations/azure-devops",
    tagline: "Work Item & Board Sync",
    badge: "Enterprise",
    iconUrl: "/images/integrations/azure-devops.svg",
    logo: <img src="/images/integrations/azure-devops.svg" alt="Azure DevOps" className="w-10 h-10 object-contain" />,
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#7B68EE",
    monogram: "C",
    authType: "PAT",
    description: "Import spaces, lists and tasks from ClickUp workspaces.",
    scopes: ["projects_sync", "tasks_sync", "spaces"],
    status: "connect",
    href: "/features/integrations/clickup",
    tagline: "Spaces & Tasks Sync",
    badge: "Tracker Plus",
    iconUrl: "/images/integrations/clickup.svg",
    logo: <img src="/images/integrations/clickup.svg" alt="ClickUp" className="w-10 h-10 object-contain" />,
  },
  {
    id: "jira",
    name: "Jira Software",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#0052CC",
    monogram: "JS",
    authType: "PAT",
    description: "Sync Jira projects and issues so time lands on real tasks.",
    scopes: ["projects_sync", "tasks_sync", "issues", "+2 more"],
    status: "connected",
    href: "/features/integrations/jira",
    tagline: "Bi-directional sprint worklog",
    badge: "Tracker Plus",
    iconUrl: "/images/integrations/jira.svg",
    logo: <img src="/images/integrations/jira.svg" alt="Jira Software" className="w-10 h-10 object-contain" />,
  },
  {
    id: "linear",
    name: "Linear",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#5E6AD2",
    monogram: "L",
    authType: "API Key",
    description: "Bring Linear teams, issues and cycles into Deskmerit.",
    scopes: ["projects_sync", "issues", "cycles"],
    status: "connect",
    href: "/features/integrations/linear",
    tagline: "Cycles & Issue Binding",
    badge: "Tracker Plus",
    iconUrl: "/images/integrations/linear.svg",
    logo: <img src="/images/integrations/linear.svg" alt="Linear" className="w-10 h-10 object-contain" />,
  },
  {
    id: "openproject",
    name: "OpenProject",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#1070CA",
    monogram: "O",
    authType: "PAT",
    description: "Import work packages and log tracked time back.",
    scopes: ["projects_sync", "tasks_sync", "work_packages"],
    status: "connected",
    href: "/features/integrations/openproject",
    tagline: "Work Package & Project Sync",
    badge: "Open Source Ready",
    iconUrl: "/images/integrations/openproject.svg",
    logo: <img src="/images/integrations/openproject.svg" alt="OpenProject" className="w-10 h-10 object-contain" />,
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    category: "calendars",
    categoryLabel: "Calendars",
    avatarBg: "#4285F4",
    monogram: "GC",
    authType: "OAuth2",
    description: "Convert calendar events and Google Meet calls directly to time logs.",
    scopes: ["calendar_read", "meet_telemetry", "idle_exemption"],
    status: "connected",
    href: "/features/integrations/google-calendar",
    tagline: "Auto-credit meeting hours",
    badge: "1-click OAuth",
    iconUrl: "/images/integrations/google-calendar.svg",
    logo: <img src="/images/integrations/google-calendar.svg" alt="Google Calendar" className="w-10 h-10 object-contain" />,
  },
  {
    id: "outlook-calendar",
    name: "Outlook Calendar",
    category: "calendars",
    categoryLabel: "Calendars",
    avatarBg: "#0078D4",
    monogram: "OL",
    authType: "OAuth2",
    description: "Detect accepted Microsoft Teams and Outlook appointments automatically.",
    scopes: ["events_sync", "teams_calls", "worklogs"],
    status: "connect",
    href: "/features/integrations/outlook-calendar",
    tagline: "Microsoft 365 attendance sync",
    badge: "Enterprise ready",
    iconUrl: "/images/integrations/outlook.svg",
    logo: <img src="/images/integrations/outlook.svg" alt="Outlook Calendar" className="w-10 h-10 object-contain" />,
  },
  {
    id: "slack",
    name: "Slack",
    category: "chat",
    categoryLabel: "Communication",
    avatarBg: "#4A154B",
    monogram: "SL",
    authType: "OAuth2",
    description: "Automated daily shift summaries and live in-office status lookups in channels.",
    scopes: ["bot_notifications", "status_sync", "daily_standup"],
    status: "connected",
    href: "/features/integrations/slack",
    tagline: "Standup digests & status bot",
    badge: "Bot-based",
    iconUrl: "/images/integrations/slack.svg",
    logo: <img src="/images/integrations/slack.svg" alt="Slack" className="w-10 h-10 object-contain" />,
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    category: "chat",
    categoryLabel: "Communication",
    avatarBg: "#5059C9",
    monogram: "MS",
    authType: "OAuth2",
    description: "Surface team availability, meeting hours, and project digests in Teams.",
    scopes: ["presence_sync", "calls_telemetry", "standup_bot"],
    status: "connect",
    href: "/features/integrations/microsoft-teams",
    tagline: "Live team presence",
    badge: "M365 certified",
    iconUrl: "/images/integrations/teams.svg",
    logo: <img src="/images/integrations/teams.svg" alt="Microsoft Teams" className="w-10 h-10 object-contain" />,
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    categoryLabel: "Automation",
    avatarBg: "#FF4F00",
    monogram: "ZP",
    authType: "API Key",
    description: "Trigger automated actions across 9,000+ business applications.",
    scopes: ["webhooks", "triggers_sync", "payroll_push"],
    status: "connected",
    href: "/features/integrations/zapier",
    tagline: "9,000+ app connectors",
    badge: "No-code",
    iconUrl: "/images/integrations/zapier.svg",
    logo: <img src="/images/integrations/zapier.svg" alt="Zapier" className="w-10 h-10 object-contain" />,
  },
  {
    id: "make",
    name: "Make",
    category: "automation",
    categoryLabel: "Automation",
    avatarBg: "#6D32EC",
    monogram: "MK",
    authType: "API Key",
    description: "Build robust visual automation workflows with Deskmerit triggers.",
    scopes: ["scenarios", "custom_webhooks", "data_router"],
    status: "connect",
    href: "/features/integrations/make",
    tagline: "Visual workflows & webhooks",
    badge: "Enterprise",
    iconUrl: "/images/integrations/make.svg",
    logo: <img src="/images/integrations/make.svg" alt="Make" className="w-10 h-10 object-contain" />,
  },
  {
    id: "trello",
    name: "Trello",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#0079BF",
    monogram: "TR",
    authType: "OAuth2",
    description: "Attribute logged hours directly to Trello board cards and sprint lists.",
    scopes: ["cards_sync", "boards_read", "worklogs"],
    status: "connected",
    href: "/features/integrations/trello",
    tagline: "Kanban card time tracking",
    badge: "Power-up ready",
    iconUrl: "/images/integrations/trello.svg",
    logo: <img src="/images/integrations/trello.svg" alt="Trello" className="w-10 h-10 object-contain" />,
  },
  {
    id: "gitlab",
    name: "GitLab",
    category: "pm",
    categoryLabel: "Project Management",
    avatarBg: "#E24329",
    monogram: "GL",
    authType: "PAT",
    description: "Map engineering hours against GitLab issues, MRs and release milestones.",
    scopes: ["issues_sync", "merge_requests", "commits"],
    status: "reconnect",
    href: "/features/integrations/gitlab",
    tagline: "Issue & MR tracking",
    badge: "DevOps ready",
    iconUrl: "/images/integrations/gitlab.svg",
    logo: <img src="/images/integrations/gitlab.svg" alt="GitLab" className="w-10 h-10 object-contain" />,
  },
  {
    id: "sqalible",
    name: "Sqalible HRMS",
    category: "hrms",
    categoryLabel: "HRMS & Payroll",
    avatarBg: "#008891",
    monogram: "SQ",
    authType: "Native SSO",
    description: "Turn on time tracking inside Sqalible HRMS with unified payroll sync.",
    scopes: ["biometric_sync", "payroll_calc", "leave_deduct"],
    status: "connected",
    href: "/features/integrations/sqalible",
    tagline: "Native payroll & leave engine",
    badge: "1-click toggle",
    iconUrl: "/images/integrations/sqalible.svg",
    logo: <img src="/images/integrations/sqalible.svg" alt="Sqalible HRMS" className="w-10 h-10 object-contain" />,
  },
  {
    id: "mcp-server",
    name: "Claude MCP Server",
    category: "developers",
    categoryLabel: "Developers & AI",
    avatarBg: "#1E293B",
    monogram: "MCP",
    authType: "Bearer Token",
    description: "Model Context Protocol interface for Claude Code, Cursor, and enterprise LLMs.",
    scopes: ["mcp_tools", "telemetry_query", "agentic_read"],
    status: "connected",
    href: "/developers/mcp-server",
    tagline: "Model Context Protocol for AI",
    badge: "AI ready",
    iconUrl: "/images/integrations/claude.svg",
    logo: <img src="/images/integrations/claude.svg" alt="Claude MCP Server" className="w-10 h-10 object-contain" />,
  },
  {
    id: "rest-api",
    name: "REST API & Webhooks",
    category: "developers",
    categoryLabel: "Developers & AI",
    avatarBg: "#059669",
    monogram: "API",
    authType: "API Key",
    description: "Versioned REST endpoints with 600 req/min limits, scopes, and JSON payloads.",
    scopes: ["rest_read", "rest_write", "webhook_events"],
    status: "connected",
    href: "/developers/api",
    tagline: "Scoped keys & OpenAPI specs",
    badge: "Developer API",
    iconUrl: "/images/integrations/rest-api.svg",
    logo: <img src="/images/integrations/rest-api.svg" alt="REST API" className="w-10 h-10 object-contain" />,
  },
];

// =============================================================================
// COMPACT INTEGRATION CARD COMPONENT (Strict 1:1 match with Idea 2)
// Clean 4-per-row card: Real brand SVG logo image, bold title, compact description
// =============================================================================

export function FigmaIntegrationCard({
  item,
  className = "",
}: {
  item: FigmaIntegrationItem;
  onActionClick?: (id: string, action: string) => void;
  className?: string;
}) {
  return (
    <Link
      to={item.href || `/features/integrations/${item.id}-time-tracking`}
      className={`bg-white rounded-2xl p-5 sm:p-6 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-[0_8px_24px_rgba(15,23,48,0.06)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group cursor-pointer text-left ${className}`}
    >
      <div>
        {/* Real Official SVG Logo Image (No fake container box) */}
        <div className="w-10 h-10 flex items-center justify-start shrink-0 mb-4 group-hover:scale-105 transition-transform">
          <img
            src={item.iconUrl}
            alt={`${item.name} logo`}
            className="w-9 h-9 max-h-9 max-w-9 object-contain"
            loading="lazy"
          />
        </div>

        {/* Integration Name */}
        <h3 className="font-bold text-[15px] sm:text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors leading-snug">
          {item.name}
        </h3>

        {/* Short, crisp description matching Idea 2 */}
        <p className="text-xs text-[#64748B] leading-relaxed mt-1.5 line-clamp-2 font-normal">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

// =============================================================================
// COMPREHENSIVE INTEGRATION DETAIL REGISTRY
// Guarantees that EVERY tool detail page has rich data and a REAL Hero Card
// =============================================================================

export interface IntegrationDetailData {
  id: string;
  name: string;
  category: "pm" | "calendars" | "chat" | "automation" | "hrms" | "developers";
  categoryLabel: string;
  tagline: string;
  badge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroDescription: string;
  logo: React.ReactNode;
  tldr?: string[];
  previewCardTitle: string;
  previewCardSub: string;
  previewMetricLabel: string;
  previewMetricValue: string;
  previewBadgeText: string;
  steps: { num: string; title: string; desc: string }[];
  features: { icon: any; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const INTEGRATION_DETAILS: Record<string, IntegrationDetailData> = {
  asana: {
    id: "asana",
    name: "Asana",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Task & Milestone Telemetry",
    badge: "Native Sync",
    heroHeadline: "Sync Asana tasks & milestones with",
    heroHighlight: "effortless desktop time attribution.",
    heroDescription:
      "Pick assigned Asana tasks inside your Deskmerit agent. Time logs write directly back to Asana portfolios and projects with zero manual forms or browser stopwatches.",
    logo: <AsanaLogo className="w-12 h-12" />,
    previewCardTitle: "Q4 Enterprise Launch · Milestone 3",
    previewCardSub: "Asana Portfolio · Marketing & Tech",
    previewMetricLabel: "Logged to Asana Task",
    previewMetricValue: "4h 20m",
    previewBadgeText: "Synced to Asana Cloud",
    steps: [
      {
        num: "01",
        title: "Connect Asana OAuth",
        desc: "Authenticate your Asana organization with 1-click secure OAuth2. Grant read tasks and worklog write permissions.",
      },
      {
        num: "02",
        title: "Select Active Portfolios",
        desc: "Choose which team portfolios and sections sync into Deskmerit. Only assigned tasks appear in employee desktop menus.",
      },
      {
        num: "03",
        title: "Start Tracking with Zero Friction",
        desc: "Select tasks from the desktop tray and focus on execution. Timesheets and completed estimates sync back automatically.",
      },
    ],
    features: [
      {
        icon: RefreshCw,
        title: "Bi-directional Task Binding",
        desc: "Task status updates and logged hours sync between Deskmerit and Asana continuously in the background.",
      },
      {
        icon: Layers,
        title: "Portfolio Rollup Analytics",
        desc: "View actual hours invested across enterprise Asana portfolios to keep executive delivery schedules accurate.",
      },
      {
        icon: ShieldCheck,
        title: "Privacy-Preserving Telemetry",
        desc: "Captures project and task durations without keyloggers or invasive background screen recordings.",
      },
      {
        icon: Zap,
        title: "Sub-Second Task Switching",
        desc: "Switch between client tasks directly in your menu bar or system tray without opening browser tabs.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit need custom admin access inside Asana?",
        a: "No. Standard Asana OAuth2 permissions are used. No special domain administrator rights or third-party webhooks are required.",
      },
      {
        q: "Can contractors log time to specific Asana projects?",
        a: "Yes. Managers can configure granular project access permissions so contractors only see relevant board columns.",
      },
    ],
  },
  "azure-devops": {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Work Item & Board Sync",
    badge: "Tracker Plus",
    heroHeadline: "Seamless work item tracking for",
    heroHighlight: "Azure Boards & DevOps sprints.",
    heroDescription:
      "Start tracking time straight from Azure DevOps user stories, tasks, or bug cards. Eliminate duplicate task logging and keep your burn-down charts 100% accurate.",
    logo: <AzureDevOpsLogo className="w-12 h-12" />,
    previewCardTitle: "User Story #8492 · Payment Engine",
    previewCardSub: "Iteration 12 · Azure Boards",
    previewMetricLabel: "Remaining Work Adjusted",
    previewMetricValue: "5h 15m",
    previewBadgeText: "Synced to Azure DevOps",
    steps: [
      {
        num: "01",
        title: "Generate Azure DevOps PAT",
        desc: "Create a Personal Access Token with Work Items (Read & Write) scope within your organization settings.",
      },
      {
        num: "02",
        title: "Select Team Projects",
        desc: "Choose the Azure DevOps organization and repositories whose sprint boards you want available inside the Deskmerit client.",
      },
      {
        num: "03",
        title: "Bind Tasks & Track",
        desc: "Select active work item IDs directly from your desktop tray. Logged hours deduct from remaining work automatically.",
      },
    ],
    features: [
      {
        icon: Layers,
        title: "Remaining Work Auto-Reduction",
        desc: "Logged hours automatically update remaining work estimates on Azure Boards cards in real time.",
      },
      {
        icon: GitBranch,
        title: "Multi-Org Enterprise Support",
        desc: "Consultancies managing multiple client Azure DevOps tenants can seamlessly bind across separate organizations.",
      },
      {
        icon: Clock,
        title: "Iteration & Sprint Rollups",
        desc: "Aggregate billable velocity per sprint iteration to see accurate contractor burn and resource allocation.",
      },
      {
        icon: ShieldCheck,
        title: "Enterprise SAML / Entra ID Ready",
        desc: "Single sign-on via Microsoft Entra ID guarantees enterprise governance and automatic team de-provisioning.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit support self-hosted Azure DevOps Server?",
        a: "Yes. Deskmerit supports both Azure DevOps Services (cloud) and self-hosted Azure DevOps Server (on-premises) with HTTPS endpoints.",
      },
      {
        q: "Can we track custom work item types?",
        a: "Yes. Tasks, Bugs, User Stories, Features, and custom inherited process work item types are fully supported.",
      },
    ],
  },
  clickup: {
    id: "clickup",
    name: "ClickUp",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Spaces & Tasks Sync",
    badge: "Tracker Plus",
    heroHeadline: "Import ClickUp spaces, lists & tasks into",
    heroHighlight: "automatic background tracking.",
    heroDescription:
      "Eliminate manual stopwatches. Connect your ClickUp workspace so developers and designers select active tasks from their system tray with real-time worklog sync.",
    logo: <span className="font-extrabold text-purple-600 text-3xl">C</span>,
    previewCardTitle: "Sprint 48 · User Authentication Overhaul",
    previewCardSub: "ClickUp Space · Engineering Core",
    previewMetricLabel: "Logged to ClickUp Worklog",
    previewMetricValue: "5h 10m",
    previewBadgeText: "Synced to ClickUp Cloud",
    steps: [
      {
        num: "01",
        title: "Authenticate ClickUp Account",
        desc: "Connect your workspace using your Personal Access Token or OAuth2 grant for granular team permissions.",
      },
      {
        num: "02",
        title: "Map Spaces & Lists",
        desc: "Choose which ClickUp folders, lists, and sprint backlogs synchronize into your Deskmerit time tracking menus.",
      },
      {
        num: "03",
        title: "Track & Reconcile Hours",
        desc: "Work on assigned tasks. Real-time hours push directly to ClickUp time estimates with full audit visibility.",
      },
    ],
    features: [
      {
        icon: RefreshCw,
        title: "Automated Time Entries",
        desc: "Time tracked in Deskmerit writes straight to the ClickUp task time-tracker field without employee manual entry.",
      },
      {
        icon: Clock,
        title: "Time Estimates vs Actuals",
        desc: "Compare initial sprint estimates in ClickUp against real-world engineering hours captured at the OS level.",
      },
      {
        icon: ShieldCheck,
        title: "Zero Invasiveness",
        desc: "Strictly logs time to assigned tasks; never captures keystrokes, passwords, or personal browsing.",
      },
      {
        icon: Zap,
        title: "Instant Space Switching",
        desc: "Move between design, product, and dev spaces in one keyboard shortcut in the Deskmerit client.",
      },
    ],
    faqs: [
      {
        q: "Can we sync multiple ClickUp workspaces?",
        a: "Yes. Enterprise accounts can connect multiple ClickUp workspaces and map them to distinct client billing codes.",
      },
    ],
  },
  jira: {
    id: "jira",
    name: "Jira Software",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Bi-directional Task Binding",
    badge: "Tracker Plus",
    heroHeadline: "Track time directly against",
    heroHighlight: "Jira issues & sprint epics.",
    heroDescription:
      "Pick assigned Jira tickets inside the lightweight Deskmerit desktop agent. Your time logs automatically to that issue with zero manual timesheets and zero browser timer extensions.",
    logo: <JiraLogo className="w-12 h-12" />,
    previewCardTitle: "Jira KMB-482 · API Gateway Refactor",
    previewCardSub: "Sprint 24 · Active Task Bound",
    previewMetricLabel: "Logged to Jira Worklog",
    previewMetricValue: "3h 45m",
    previewBadgeText: "Synced to Atlassian Cloud",
    steps: [
      {
        num: "01",
        title: "Connect Atlassian OAuth",
        desc: "Authenticate your Jira Cloud or Jira Data Center instance with 1-click OAuth. Choose read-only issue access and worklog write permissions.",
      },
      {
        num: "02",
        title: "Map Active Boards & Projects",
        desc: "Select which Jira project keys (e.g. ENG, PROD, KMB) sync to your Deskmerit workspace. Only assigned tickets appear in your desktop daemon.",
      },
      {
        num: "03",
        title: "Start Tracking with Zero Friction",
        desc: "Open Deskmerit on macOS, Windows, or Linux, select your ticket from the autocomplete dropdown, and focus. Worklogs sync back every 15 minutes.",
      },
    ],
    features: [
      {
        icon: RefreshCw,
        title: "Automatic 2-Way Worklog Sync",
        desc: "Time tracked in Deskmerit writes directly to the Jira worklog tab under the developer's verified Atlassian profile.",
      },
      {
        icon: GitBranch,
        title: "Sprint Estimate vs Actual Hours",
        desc: "Monitor whether story points align with real engineering hours spent across bug fixes, code reviews, and meetings.",
      },
      {
        icon: ShieldCheck,
        title: "Zero Spying or Keystrokes",
        desc: "Deskmerit captures ticket durations, not keystrokes or camera feeds. Developers retain trust and focus.",
      },
      {
        icon: Zap,
        title: "Instant Ticket Switching",
        desc: "Switching from KMB-482 to KMB-510 takes a single click in your system tray or menu bar without context switching.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit require installing a plugin inside our Jira instance?",
        a: "No. Deskmerit connects securely through standard Atlassian OAuth 2.0 REST endpoints. No Jira admin installation or server modifications are necessary.",
      },
      {
        q: "What happens if a developer works offline without internet?",
        a: "Deskmerit's native desktop daemon queues all worklogs locally in an encrypted SQLite database and flushes them to Jira the instant connectivity resumes.",
      },
      {
        q: "Can managers restrict tracking to only assigned tickets?",
        a: "Yes. You can enforce that developers only log time to tickets assigned to their account, or allow open task logging across active sprint epics.",
      },
    ],
  },
  linear: {
    id: "linear",
    name: "Linear",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Cycles & Issue Binding",
    badge: "Tracker Plus",
    heroHeadline: "Bring Linear issues, teams & cycles into",
    heroHighlight: "high-velocity developer telemetry.",
    heroDescription:
      "Crafted for modern engineering teams. Bind Linear cycles and assigned issues directly to Deskmerit with keyboard-first speed and zero context switching.",
    logo: <span className="font-extrabold text-indigo-600 text-3xl">L</span>,
    previewCardTitle: "LIN-1024 · Edge Caching Pipeline",
    previewCardSub: "Cycle 18 · Platform Infrastructure",
    previewMetricLabel: "Logged to Linear Issue",
    previewMetricValue: "3h 15m",
    previewBadgeText: "Synced to Linear API",
    steps: [
      {
        num: "01",
        title: "Generate Linear API Key",
        desc: "Create a Personal Access Token from your Linear developer settings with issues and teams read/write permissions.",
      },
      {
        num: "02",
        title: "Filter Active Cycles & Teams",
        desc: "Choose which engineering teams and current cycles populate your Deskmerit desktop application.",
      },
      {
        num: "03",
        title: "Track with Command-K Speed",
        desc: "Select Linear issues in milliseconds. Real engineering hours attribute directly to cycle burndowns.",
      },
    ],
    features: [
      {
        icon: Zap,
        title: "Keyboard-First Workflow",
        desc: "Built to match Linear's rapid keyboard UX. Search issues and switch active tickets in less than 2 seconds.",
      },
      {
        icon: RefreshCw,
        title: "Cycle Velocity Insights",
        desc: "Correlate cycle completion rates with genuine coding and PR review time tracked across the team.",
      },
      {
        icon: ShieldCheck,
        title: "Developer Trust",
        desc: "Zero intrusive screen monitoring. Telemetry captures ticket velocity without micromanagement.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit support multiple Linear teams?",
        a: "Yes, you can track across backend, frontend, design, and mobile Linear teams simultaneously.",
      },
    ],
  },
  openproject: {
    id: "openproject",
    name: "OpenProject",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Work Package & Project Sync",
    badge: "Open Source Ready",
    heroHeadline: "Track time against open-source work packages in",
    heroHighlight: "OpenProject with zero friction.",
    heroDescription:
      "Connect self-hosted or cloud OpenProject instances. Attribute tracked time directly to work packages, sprints, and project timelines with privacy-first telemetry.",
    logo: <span className="font-extrabold text-blue-600 text-3xl">O</span>,
    previewCardTitle: "Package #491 · PostgreSQL Sharding Plan",
    previewCardSub: "OpenProject · Backend Delivery",
    previewMetricLabel: "Logged to Work Package",
    previewMetricValue: "6h 30m",
    previewBadgeText: "Synced to OpenProject Host",
    steps: [
      {
        num: "01",
        title: "Enter OpenProject URL & Token",
        desc: "Provide your OpenProject server endpoint and generated user API token for secure TLS connection.",
      },
      {
        num: "02",
        title: "Select Active Work Packages",
        desc: "Deskmerit fetches your assigned work packages and displays them cleanly in your system tray.",
      },
      {
        num: "03",
        title: "Automatic Worklog Submission",
        desc: "Tracked hours write directly to OpenProject time and costs logs with full audit trail compliance.",
      },
    ],
    features: [
      {
        icon: ShieldCheck,
        title: "Self-Hosted & Cloud Support",
        desc: "Compatible with OpenProject Community Edition, Enterprise on-premises, and OpenProject Cloud.",
      },
      {
        icon: RefreshCw,
        title: "Cost & Budget Reconciliation",
        desc: "Hours push directly into OpenProject's cost reporting module to protect agency project margins.",
      },
    ],
    faqs: [
      {
        q: "Can we connect behind a corporate VPN?",
        a: "Yes. Deskmerit desktop clients communicate directly with internal HTTPS endpoints on your corporate network.",
      },
    ],
  },
  "google-calendar": {
    id: "google-calendar",
    name: "Google Calendar",
    category: "calendars",
    categoryLabel: "Calendars",
    tagline: "Meetings Count as Work",
    badge: "Calendar Sync",
    heroHeadline: "Integrating Google Calendar with",
    heroHighlight: "automatic time tracking.",
    heroDescription:
      "Never lose billable hours to meeting-heavy days. Deskmerit synchronizes seamlessly with Google Calendar to automatically count scheduled calls, client syncs, and team standups as active work without manual timer toggles or stopwatch apps.",
    logo: <GoogleCalendarLogo className="w-12 h-12" />,
    tldr: [
      "Eliminates manual time tracking for video calls, client reviews, and scheduled events.",
      "Deskmerit automatically accounts for accepted calendar meetings during work hours.",
      "Events marked 'Private' stay strictly confidential and are excluded from shared logs.",
    ],
    previewCardTitle: "Architecture Sprint Review · Google Meet",
    previewCardSub: "Accepted Calendar Invite · Core Engineering",
    previewMetricLabel: "Auto-Logged Duration",
    previewMetricValue: "45 min",
    previewBadgeText: "Credited as Shift Work",
    steps: [
      {
        num: "01",
        title: "Connect Google Workspace",
        desc: "Authorize Deskmerit with 1-click Google OAuth 2.0 using least-privilege, read-only calendar permissions.",
      },
      {
        num: "02",
        title: "Configure Sync & Project Rules",
        desc: "Choose which calendars sync and map recurring meetings (e.g. client standups, 1-on-1s) to respective project codes.",
      },
      {
        num: "03",
        title: "Attend Meetings Freely",
        desc: "Join Google Meet, Zoom, or offline rooms. Deskmerit logs meeting durations directly onto your daily timeline.",
      },
    ],
    features: [
      {
        icon: Calendar,
        title: "Automatic Offline & Video Meeting Capture",
        desc: "Never get penalized by idle timers during discussions. Scheduled events automatically credit toward your daily shift hours.",
      },
      {
        icon: RefreshCw,
        title: "Zero End-of-Week Timesheet Guesswork",
        desc: "Reconciles meetings and desktop tasks automatically down to the second, so your Friday timesheets are already finished.",
      },
      {
        icon: ShieldCheck,
        title: "Strict Employee Privacy Controls",
        desc: "Personal appointments and events marked 'Private' in Google Calendar are completely shielded from employers and timesheet exports.",
      },
      {
        icon: BarChart3,
        title: "Accurate Client Project Allocation",
        desc: "Assign client discovery calls and architecture reviews to client billing codes for defensible client invoices.",
      },
    ],
    faqs: [
      {
        q: "How does Deskmerit track time spent in meetings?",
        a: "When you accept a meeting invite in Google Calendar, Deskmerit reads the start and end time. During that window, Deskmerit credits your shift hours so meeting time is counted as active work rather than idle time.",
      },
      {
        q: "Are private calendar events visible to my manager or employer?",
        a: "No. Any event marked 'Private' in Google Calendar is completely filtered out. Deskmerit will never expose the title, description, or attendees of personal appointments.",
      },
      {
        q: "What happens if a scheduled meeting gets canceled or finishes early?",
        a: "Deskmerit correlates calendar bookings with desktop activity. If you finish early and resume coding or browsing, Deskmerit seamlessly transitions to recording your active desktop tasks.",
      },
      {
        q: "Can I manually adjust or delete meeting time if needed?",
        a: "Yes. Employees have 100% audit priority and can review or edit their daily timeline before timesheets finalize.",
      },
    ],
  },
  "outlook-calendar": {
    id: "outlook-calendar",
    name: "Outlook Calendar",
    category: "calendars",
    categoryLabel: "Calendars",
    tagline: "Microsoft 365 attendance sync",
    badge: "Enterprise ready",
    heroHeadline: "Integrate Outlook Calendar with",
    heroHighlight: "enterprise time tracking.",
    heroDescription:
      "Count Microsoft 365 appointments, Teams calls, and client syncs as verified attendance. Deskmerit links with Microsoft Exchange to turn calendar bookings into accurate, defensible project hours with zero manual timers.",
    logo: <OutlookLogo className="w-12 h-12" />,
    tldr: [
      "Direct Microsoft 365 Exchange sync with Microsoft Teams call correlation.",
      "Scheduled Outlook appointments automatically credit toward employee shift hours.",
      "Enterprise Entra ID OAuth governance with zero access to personal mailboxes.",
    ],
    previewCardTitle: "Client Steering Committee · MS Teams",
    previewCardSub: "Outlook 365 Invite · Core Delivery",
    previewMetricLabel: "Auto-Credited Duration",
    previewMetricValue: "1h 00m",
    previewBadgeText: "Credited as Shift Work",
    steps: [
      {
        num: "01",
        title: "Connect Microsoft 365",
        desc: "Authenticate using your Microsoft Entra ID (Azure AD) corporate account with standard read-only calendar scope.",
      },
      {
        num: "02",
        title: "Define Project & Client Rules",
        desc: "Map meeting subjects or client email domains to specific client billing accounts in Deskmerit.",
      },
      {
        num: "03",
        title: "Effortless Meeting Attendance",
        desc: "Accepted meetings credit automatically into your shift attendance ledger without stopwatch button presses.",
      },
    ],
    features: [
      {
        icon: Calendar,
        title: "Seamless Microsoft 365 Exchange Sync",
        desc: "Cloud-to-cloud synchronization updates meetings instantaneously without requiring browser extensions or Outlook add-ins.",
      },
      {
        icon: RefreshCw,
        title: "Microsoft Teams Call Correlation",
        desc: "Correlates scheduled appointments with Teams desktop audio/video participation for verified attendance records.",
      },
      {
        icon: ShieldCheck,
        title: "Enterprise SSO & Tenant Governance",
        desc: "Complies with strict corporate IT policies with tenant-level consent, AES-256 encryption, and zero email reading.",
      },
      {
        icon: BarChart3,
        title: "Defensible Client Invoicing",
        desc: "Provide clients with transparent meeting attendance logs backed by verified calendar records and delivery codes.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit have access to my emails in Microsoft Outlook?",
        a: "No. Deskmerit requests restricted Microsoft Graph API permissions limited exclusively to Calendar.Read. Your mailbox, sent items, and email contents are never accessed.",
      },
      {
        q: "Does this integration work with self-hosted Microsoft Exchange?",
        a: "Yes. Deskmerit supports both Microsoft 365 Cloud (Entra ID) and hybrid Exchange Server deployments via secure HTTPS endpoints.",
      },
      {
        q: "How fast do calendar updates reflect in Deskmerit?",
        a: "Changes to meeting invites sync via Microsoft Graph webhooks in near real time (sub-60 second latency).",
      },
      {
        q: "Can private Outlook appointments be hidden?",
        a: "Yes. Events marked as 'Private' in Outlook are automatically shielded, protecting confidential medical or personal errant blocks.",
      },
    ],
  },
  slack: {
    id: "slack",
    name: "Slack",
    category: "chat",
    categoryLabel: "Communication",
    tagline: "Standup digests & status bot",
    badge: "Bot-based",
    heroHeadline: "Automate daily shift digests &",
    heroHighlight: "team presence directly in Slack.",
    heroDescription:
      "Eliminate repetitive status meetings. The Deskmerit Slack app delivers automated daily shift recaps, overtime heads-ups, and live presence lookups inside your channels.",
    logo: <SlackLogo className="w-12 h-12" />,
    previewCardTitle: "#engineering-standup · Daily Digest",
    previewCardSub: "Deskmerit Bot Automated Dispatch",
    previewMetricLabel: "Active In-Channel",
    previewMetricValue: "34 members",
    previewBadgeText: "Verified Slack App",
    steps: [
      {
        num: "01",
        title: "Add Deskmerit Bot to Slack",
        desc: "Install the verified Deskmerit Slack app to your company workspace in two clicks.",
      },
      {
        num: "02",
        title: "Choose Notification Channels",
        desc: "Designate dedicated channels for daily morning kickoffs, shift summaries, and overtime alerts.",
      },
      {
        num: "03",
        title: "Interact with Slash Commands",
        desc: "Use /deskmerit status or /deskmerit time to check project progress right inside conversation threads.",
      },
    ],
    features: [
      {
        icon: Bot,
        title: "Automated Standup Reports",
        desc: "Replaces 30-minute status meetings with aggregated daily work summaries posted automatically at shift end.",
      },
      {
        icon: Activity,
        title: "Real-Time Status Synchronization",
        desc: "Syncs employee Slack status (e.g. In Meeting, Focusing on Jira-104) dynamically as work shifts.",
      },
    ],
    faqs: [
      {
        q: "Can individual employees mute notifications?",
        a: "Yes. Notification settings and digest frequencies are fully customizable per user and per channel.",
      },
    ],
  },
  "microsoft-teams": {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    category: "chat",
    categoryLabel: "Communication",
    tagline: "Live team presence",
    badge: "M365 certified",
    heroHeadline: "Keep remote teams aligned with",
    heroHighlight: "Teams presence & call telemetry.",
    heroDescription:
      "Surface team availability, meeting hours, and project digests right inside Microsoft Teams channels. Eliminate duplicate standup reports and keep managers informed.",
    logo: <TeamsLogo className="w-12 h-12" />,
    previewCardTitle: "Engineering Daily Sync · Microsoft Teams",
    previewCardSub: "Live Presence · In Call",
    previewMetricLabel: "Call Duration Credited",
    previewMetricValue: "40 min",
    previewBadgeText: "Credited to Attendance",
    steps: [
      {
        num: "01",
        title: "Install from Teams App Store",
        desc: "Deploy the certified Deskmerit app directly from the Microsoft Teams App Store across your tenant.",
      },
      {
        num: "02",
        title: "Configure Team Tabs",
        desc: "Embed live attendance and sprint progress dashboards as tabs within any public or private channel.",
      },
      {
        num: "03",
        title: "Automatic Attendance Updates",
        desc: "Video calls and group meetings credit toward daily shifts with zero employee manual intervention.",
      },
    ],
    features: [
      {
        icon: Users,
        title: "Presence Status Integration",
        desc: "Synchronizes Microsoft Teams availability with real tracked project activity in real time.",
      },
    ],
    faqs: [
      {
        q: "Can Teams admins restrict the app to specific departments?",
        a: "Yes. IT administrators can manage deployment policies via the Microsoft Teams Admin Center.",
      },
    ],
  },
  zapier: {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    categoryLabel: "Automation",
    tagline: "9,000+ app connectors",
    badge: "No-code",
    heroHeadline: "Automate your workforce operations with",
    heroHighlight: "Zapier time tracking triggers.",
    heroDescription:
      "Connect Deskmerit to over 9,000 web applications without writing code. Dispatch real-time webhooks on shifts, breaks, and project logs, and route verified time entries straight to QuickBooks, Xero, Slack, or Google Sheets.",
    logo: <ZapierLogo className="w-12 h-12" />,
    tldr: [
      "Connect Deskmerit to 9,000+ web apps including accounting, HRMS, and CRM software.",
      "Real-time webhook triggers on shift start/end, task completion, and overtime breaches.",
      "Eliminate manual data entry by routing verified time logs into payroll engines automatically.",
    ],
    previewCardTitle: "Zap: Shift Ended → Sync QuickBooks & Post Slack",
    previewCardSub: "Live Trigger · Automated Workflow",
    previewMetricLabel: "Real-Time Triggers",
    previewMetricValue: "Instant webhook",
    previewBadgeText: "Verified Zapier Partner",
    steps: [
      {
        num: "01",
        title: "Generate API Token in Deskmerit",
        desc: "Create a restricted Zapier integration token within your Deskmerit workspace security settings.",
      },
      {
        num: "02",
        title: "Choose Triggers & Downstream Actions",
        desc: "Select triggers like 'Shift Completed', 'New Overtime Logged', or 'Project Milestone Reached' in Zapier.",
      },
      {
        num: "03",
        title: "Automate Payroll & Reporting",
        desc: "Pipe verified time records to QuickBooks, Xero, Google Sheets, or Airtable automatically on every pay cycle.",
      },
    ],
    features: [
      {
        icon: Zap,
        title: "Connect 9,000+ Business Applications",
        desc: "Build automated pipelines connecting Deskmerit to HubSpot, Salesforce, Notion, Asana, Xero, and thousands more.",
      },
      {
        icon: RefreshCw,
        title: "Instant Millisecond Webhook Triggers",
        desc: "Events fire the exact millisecond a shift starts, a break ends, or a project target is logged with 99.99% delivery reliability.",
      },
      {
        icon: BarChart3,
        title: "Automated Payroll & Accounting Sync",
        desc: "Eliminate end-of-month manual data entry by auto-exporting billable client hours directly into accounting ledgers.",
      },
      {
        icon: ShieldCheck,
        title: "Multi-Step Conditional Logic",
        desc: "Route time logs through branching logic to verify contractor hours before triggering automatic payouts or manager alerts.",
      },
    ],
    faqs: [
      {
        q: "Is there an additional charge for using Zapier with Deskmerit?",
        a: "Deskmerit provides Zapier webhook access across all plans with no added API surcharges or connection fees.",
      },
      {
        q: "What events can trigger a Zap?",
        a: "Deskmerit supports triggers for: Shift Started, Shift Ended, Break Started, Break Ended, Task Assigned, Overtime Threshold Breached, and Project Time Logged.",
      },
      {
        q: "Can Zapier push data into Deskmerit as well?",
        a: "Yes. You can use Zapier actions to create new projects, add employees, assign tasks, and trigger time entries from external CRM or ERP systems.",
      },
      {
        q: "How does Deskmerit secure data transmitted through Zapier?",
        a: "All webhook payloads are encrypted in transit with TLS 1.3 and signed with HMAC SHA-256 signatures for tamper-proof verification.",
      },
    ],
  },
  make: {
    id: "make",
    name: "Make",
    category: "automation",
    categoryLabel: "Automation",
    tagline: "Visual workflows & webhooks",
    badge: "Enterprise",
    heroHeadline: "Build visual automation pipelines with",
    heroHighlight: "Deskmerit webhooks & Make scenarios.",
    heroDescription:
      "Visual automated workflows with multi-step scenarios and raw JSON webhooks. Build enterprise data routing, custom billing calculators, and contractor approval gates.",
    logo: <MakeLogo className="w-12 h-12" />,
    previewCardTitle: "Scenario: Overtime Alert to Slack & Sheets",
    previewCardSub: "Trigger: Daily Overtime > 1h",
    previewMetricLabel: "Payloads Dispatched",
    previewMetricValue: "1,240 / day",
    previewBadgeText: "Webhook Status 200 OK",
    steps: [
      {
        num: "01",
        title: "Create Make Webhook Module",
        desc: "Paste your Make custom webhook URL into Deskmerit webhook notifications settings.",
      },
      {
        num: "02",
        title: "Build Visual Routing Scenario",
        desc: "Map telemetry fields into your ERP, HR database, or accounting system with visual transformers.",
      },
      {
        num: "03",
        title: "Run Continuous Data Sync",
        desc: "Telemetry synchronizes automatically with comprehensive error handling and retry queues.",
      },
    ],
    features: [
      {
        icon: Sliders,
        title: "Visual Data Transformations",
        desc: "Reshape employee attendance logs into any proprietary ERP or accounting schema.",
      },
    ],
    faqs: [
      {
        q: "Does Make support real-time webhook payloads?",
        a: "Yes. Webhooks dispatch instantaneously via secure HTTPS POST with HMAC signatures.",
      },
    ],
  },
  trello: {
    id: "trello",
    name: "Trello",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Kanban card time tracking",
    badge: "Power-up ready",
    heroHeadline: "Track time straight on Kanban cards with",
    heroHighlight: "Trello board & sprint synchronization.",
    heroDescription:
      "Attribute logged hours directly to Trello board cards and sprint lists. Keep agency delivery transparent and eliminate messy manual timesheets.",
    logo: <TrelloLogo className="w-12 h-12" />,
    previewCardTitle: "Design Audit · Mobile Checkout",
    previewCardSub: "Trello Board · UX Delivery Sprint",
    previewMetricLabel: "Card Time Accumulated",
    previewMetricValue: "2h 45m",
    previewBadgeText: "Synced to Trello",
    steps: [
      {
        num: "01",
        title: "Authorize Trello Account",
        desc: "Grant read/write access to your team's Trello boards through standard OAuth.",
      },
      {
        num: "02",
        title: "Select Active Boards",
        desc: "Choose which Kanban boards sync into your Deskmerit desktop application.",
      },
      {
        num: "03",
        title: "Track directly against Cards",
        desc: "Pick cards from the system tray; hours update directly on Trello card badges.",
      },
    ],
    features: [
      {
        icon: Layers,
        title: "Visual Card Badges",
        desc: "Card time totals display directly on Trello board columns for transparent client review.",
      },
    ],
    faqs: [
      {
        q: "Can clients see logged time on shared Trello boards?",
        a: "Yes, if card badges are enabled, client stakeholders see tracked hours in real time.",
      },
    ],
  },
  gitlab: {
    id: "gitlab",
    name: "GitLab",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Issue & MR tracking",
    badge: "DevOps ready",
    heroHeadline: "Map engineering hours against",
    heroHighlight: "GitLab issues, MRs & milestones.",
    heroDescription:
      "Understand the real cost of software releases. Connect GitLab to Deskmerit so developers bind time straight to merge requests and issues with zero friction.",
    logo: <GitLabLogo className="w-12 h-12" />,
    previewCardTitle: "MR !342 · Redis Cluster Failover Config",
    previewCardSub: "GitLab Repository · Core Services",
    previewMetricLabel: "Logged to MR",
    previewMetricValue: "4h 10m",
    previewBadgeText: "Synced to GitLab",
    steps: [
      {
        num: "01",
        title: "Connect GitLab Personal Token",
        desc: "Authenticate GitLab.com or self-hosted GitLab with api read/write access token.",
      },
      {
        num: "02",
        title: "Select Repositories & Groups",
        desc: "Choose engineering groups whose issues and MRs populate your Deskmerit agent.",
      },
      {
        num: "03",
        title: "Effortless Time Logging",
        desc: "Logged hours record directly to GitLab /spend quick action commands automatically.",
      },
    ],
    features: [
      {
        icon: GitBranch,
        title: "Automated /spend Commands",
        desc: "Time tracked in Deskmerit automatically writes GitLab worklogs via native REST APIs.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit support self-managed GitLab EE / CE?",
        a: "Yes, both GitLab SaaS and self-managed GitLab servers with custom domains are supported.",
      },
    ],
  },
  sqalible: {
    id: "sqalible",
    name: "Sqalible HRMS",
    category: "hrms",
    categoryLabel: "HRMS & Payroll",
    tagline: "Native payroll & leave engine",
    badge: "1-click toggle",
    heroHeadline: "Unified workforce telemetry inside",
    heroHighlight: "Sqalible's enterprise HRMS core.",
    heroDescription:
      "Zero integration lag. Deskmerit time tracking embeds directly into Sqalible HRMS. Automatically compute biometric attendance, statutory overtime, and payroll deductions under one contract.",
    logo: <SqalibleLogo className="w-12 h-12" />,
    previewCardTitle: "Sqalible Core · Biometric & Shift Sync",
    previewCardSub: "Enterprise HRMS Platform Integration",
    previewMetricLabel: "Payroll Computed Directly",
    previewMetricValue: "100% automated",
    previewBadgeText: "Native Platform Sync",
    steps: [
      {
        num: "01",
        title: "Enable HRMS Add-On",
        desc: "Turn on Deskmerit Time Tracking directly from your Sqalible Admin Portal with a single toggle.",
      },
      {
        num: "02",
        title: "Automated User Provisioning",
        desc: "Employees added to Sqalible HRMS automatically receive their Deskmerit desktop client invite.",
      },
      {
        num: "03",
        title: "Direct Payroll Reconciliation",
        desc: "Audited shift hours flow seamlessly into monthly payroll runs, leave deductions, and tax slips.",
      },
    ],
    features: [
      {
        icon: Users,
        title: "Biometric Hardware Alignment",
        desc: "Merges physical office turnstile swipe logs with desktop boot times for true hybrid attendance clarity.",
      },
      {
        icon: RefreshCw,
        title: "Automated Leave Deduction",
        desc: "Approved leaves in Sqalible HRMS pause Deskmerit tracking expectations automatically.",
      },
    ],
    faqs: [
      {
        q: "Can Deskmerit be purchased standalone without Sqalible HRMS?",
        a: "Yes! Deskmerit works completely standalone. The Sqalible HRMS add-on provides unified payroll benefits.",
      },
    ],
  },
  "mcp-server": {
    id: "mcp-server",
    name: "Claude MCP Server",
    category: "developers",
    categoryLabel: "Developers & AI",
    tagline: "Model Context Protocol for AI",
    badge: "AI ready",
    heroHeadline: "Connect Claude Code, Cursor & AI agents to",
    heroHighlight: "Model Context Protocol telemetry.",
    heroDescription:
      "Query project margins, sprint velocity, and team capacity using natural language. The official Deskmerit MCP Server exposes scoped telemetry tools for leading AI developer assistants.",
    logo: <ClaudeMcpLogo className="w-12 h-12" />,
    previewCardTitle: "Claude Agentic Query: Team Bandwidth",
    previewCardSub: "MCP Tool: get_team_productivity",
    previewMetricLabel: "Agent Inferences",
    previewMetricValue: "84 queries",
    previewBadgeText: "MCP Server Active",
    steps: [
      {
        num: "01",
        title: "Add MCP Server Config",
        desc: "Add deskmerit-mcp to your Claude Desktop or Cursor configuration JSON file.",
      },
      {
        num: "02",
        title: "Authenticate with Scoped Token",
        desc: "Provide a read-only telemetry API key with restricted enterprise scopes.",
      },
      {
        num: "03",
        title: "Query Telemetry in Plain English",
        desc: "Ask Claude 'Which engineering sprint is running behind schedule?' with live audited context.",
      },
    ],
    features: [
      {
        icon: Bot,
        title: "Official Model Context Protocol",
        desc: "Implements standard Anthropic MCP tool schemas with zero proprietary lock-in.",
      },
    ],
    faqs: [
      {
        q: "Does MCP expose confidential employee screen captures?",
        a: "Never. MCP tools only return aggregated project hours, task durations, and team velocity metrics.",
      },
    ],
  },
  "rest-api": {
    id: "rest-api",
    name: "REST API & Webhooks",
    category: "developers",
    categoryLabel: "Developers & AI",
    tagline: "Scoped keys & OpenAPI specs",
    badge: "Developer API",
    heroHeadline: "Build custom workforce integrations with",
    heroHighlight: "Deskmerit's high-speed REST API.",
    heroDescription:
      "Versioned, secure REST endpoints with 600 req/min rate limits, granular read/write tokens, and real-time webhook events for custom enterprise ERPs and internal developer tooling.",
    logo: <RestApiLogo className="w-12 h-12" />,
    previewCardTitle: "POST /v2/telemetry/time-logs",
    previewCardSub: "Bearer Token · Rate Limit 600/min",
    previewMetricLabel: "API Response Time",
    previewMetricValue: "18 ms",
    previewBadgeText: "HTTPS TLS 1.3",
    steps: [
      {
        num: "01",
        title: "Create Developer API Key",
        desc: "Generate production API keys in your Deskmerit workspace dashboard with granular role permissions.",
      },
      {
        num: "02",
        title: "Explore OpenAPI / Swagger Specs",
        desc: "Use our interactive Swagger documentation and Postman collections for rapid testing.",
      },
      {
        num: "03",
        title: "Deploy Webhooks & Endpoints",
        desc: "Receive real-time HTTPS POST callbacks whenever shifts start, pause, or sync with external databases.",
      },
    ],
    features: [
      {
        icon: Terminal,
        title: "600 Requests / Minute Capacity",
        desc: "High-throughput endpoints engineered for large-scale enterprise reporting and continuous data warehousing.",
      },
    ],
    faqs: [
      {
        q: "Where is the full API documentation hosted?",
        a: "Visit our dedicated Developer Portal at /developers/api for complete endpoint schemas and code samples.",
      },
    ],
  },
};

// Helper to normalize any route slug (supporting variations like -time-tracking suffixes)
function normalizeSlug(raw?: string): string | null {
  if (!raw) return null;
  const s = raw.toLowerCase().trim();
  const withoutSuffix = s.replace(/-time-tracking$/, "");
  const aliases: Record<string, string> = {
    outlook: "outlook-calendar",
    "outlook-calendar": "outlook-calendar",
    "outlook-time-tracking": "outlook-calendar",
    "google-calendar": "google-calendar",
    "google-calendar-time-tracking": "google-calendar",
    zapier: "zapier",
    "zapier-time-tracking": "zapier",
    jira: "jira",
    "jira-time-tracking": "jira",
    "azure-devops": "azure-devops",
    "azure-devops-time-tracking": "azure-devops",
    teams: "microsoft-teams",
    "microsoft-teams": "microsoft-teams",
    "microsoft-teams-time-tracking": "microsoft-teams",
    slack: "slack",
    "slack-time-tracking": "slack",
    asana: "asana",
    "asana-time-tracking": "asana",
    linear: "linear",
    "linear-time-tracking": "linear",
    gitlab: "gitlab",
    "gitlab-time-tracking": "gitlab",
    trello: "trello",
    "trello-time-tracking": "trello",
    clickup: "clickup",
    "clickup-time-tracking": "clickup",
    basecamp: "basecamp",
    "basecamp-time-tracking": "basecamp",
    openproject: "openproject",
    "openproject-time-tracking": "openproject",
    sqalible: "sqalible",
    "sqalible-hrms": "sqalible",
    mcp: "mcp-server",
    "mcp-server": "mcp-server",
    api: "rest-api",
    "rest-api": "rest-api",
  };
  return aliases[s] || aliases[withoutSuffix] || withoutSuffix;
}

// =============================================================================
// MAIN COMPONENT: INTEGRATIONS PAGE
// Supports both:
// 1. Directory View (/features/integrations and /integrations)
// 2. Dedicated Tool View (/features/integrations/:slug and /integrations/:slug)
// =============================================================================

export function IntegrationsPage() {
  const { slug } = useParams<{ slug?: string }>();
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [heroActiveTab, setHeroActiveTab] = useState<string>("jira");

  const categories = [
    { id: "all", label: "All integrations" },
    { id: "pm", label: "Project management" },
    { id: "calendars", label: "Calendars" },
    { id: "chat", label: "Communication" },
    { id: "automation", label: "Automation" },
    { id: "hrms", label: "HRMS & Payroll" },
    { id: "developers", label: "Developers & AI" },
  ];

  // Resolve canonical slug if provided
  const canonicalSlug = normalizeSlug(slug);

  // Resolve matching detail data, or generate a rich dynamic detail object from FIGMA_INTEGRATIONS
  let detailData: IntegrationDetailData | null = null;
  let matchingFigmaItem: FigmaIntegrationItem | null = null;

  if (canonicalSlug) {
    matchingFigmaItem = FIGMA_INTEGRATIONS.find((x) => x.id === canonicalSlug) || null;

    if (INTEGRATION_DETAILS[canonicalSlug]) {
      detailData = INTEGRATION_DETAILS[canonicalSlug];
    } else if (matchingFigmaItem) {
      // Dynamic fallback detail for any newly linked tool
      detailData = {
        id: matchingFigmaItem.id,
        name: matchingFigmaItem.name,
        category: matchingFigmaItem.category,
        categoryLabel: matchingFigmaItem.categoryLabel,
        tagline: matchingFigmaItem.tagline,
        badge: matchingFigmaItem.badge,
        heroHeadline: `Seamlessly connect Deskmerit with`,
        heroHighlight: `${matchingFigmaItem.name} for automatic telemetry.`,
        heroDescription: matchingFigmaItem.description,
        logo: matchingFigmaItem.logo,
        previewCardTitle: `${matchingFigmaItem.name} Production Sync`,
        previewCardSub: `Active Workspace Binding · ${matchingFigmaItem.authType}`,
        previewMetricLabel: "Tracked & Attributed",
        previewMetricValue: "100% automated",
        previewBadgeText: "Live Sync Active",
        steps: [
          {
            num: "01",
            title: `Connect ${matchingFigmaItem.name}`,
            desc: `Authenticate your account securely using ${matchingFigmaItem.authType} permissions.`,
          },
          {
            num: "02",
            title: "Select Active Workspaces",
            desc: `Map projects and teams to your Deskmerit workspace for automatic attribution.`,
          },
          {
            num: "03",
            title: "Start Tracking Automatically",
            desc: `Desktop activity and project hours log in the background with zero manual input.`,
          },
        ],
        features: [
          {
            icon: RefreshCw,
            title: "Bi-directional Data Sync",
            desc: `Project statuses and tracked hours synchronize continuously with ${matchingFigmaItem.name}.`,
          },
          {
            icon: ShieldCheck,
            title: "Privacy First",
            desc: `Captures real work activity without invasive screen recorders or keyloggers.`,
          },
        ],
        faqs: [
          {
            q: `How long does it take to connect ${matchingFigmaItem.name}?`,
            a: `Under 3 minutes using standard permissions. No IT tickets or server changes required.`,
          },
        ],
      };
    }
  }

  // Filtered directory items for directory view
  const filtered = FIGMA_INTEGRATIONS.filter((item) => {
    const matchesCategory = filter === "all" || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.scopes.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
      item.categoryLabel.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans antialiased selection:bg-[#FF5A36] selection:text-white">
      <DeskmeritHeader />

      <main>
        {detailData && matchingFigmaItem ? (
          /* ========================================================================= */
          /* 1. DEDICATED INTEGRATION DETAIL VIEW (When visiting /integrations/:slug) */
          /* Features the REAL Figma Integration Card in the Hero                      */
          /* ========================================================================= */
          <div>
            {/* Dark Detail Hero */}
            <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <div className="text-xs font-semibold flex items-center gap-2 mb-6">
                  <Link to="/" className="hover:underline text-slate-300">
                    Home
                  </Link>
                  <span className="text-slate-500">/</span>
                  <Link to="/features/integrations" className="text-slate-300 hover:underline">
                    Integrations
                  </Link>
                  <span className="text-slate-500">/</span>
                  <span className="text-[#FF5A36] font-bold">{detailData.name}</span>
                </div>

                <div className="grid grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column: Headline + CTAs (No bi-directional sync capsule or dot above heading) */}
                  <div className="col-span-12 lg:col-span-7 space-y-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                      INTEGRATION: {detailData.name.toUpperCase()} TIME TRACKING
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.22] text-white">
                      {detailData.heroHeadline}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#FF5A36]">
                        {detailData.heroHighlight}
                      </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                      {detailData.heroDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-3.5 pt-2">
                      <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all cursor-pointer"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/demo"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
                      >
                        <span>Book a Live Demo</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Clean Integration Showcase Card matching Screenshot 1 branding */}
                  <div className="col-span-12 lg:col-span-5">
                    <div className="relative">
                      {/* Clean Soft Ambient Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-teal-500/10 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

                      {/* Clean White Card strictly matching Screenshot 1 branding */}
                      <div className="relative rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] text-[#0F1730]">
                        {/* Top Grey Area with Official SVG inside White Circular Badge */}
                        <div className="bg-[#F8F9FA] p-8 flex flex-col items-center justify-center border-b border-slate-100 relative">
                          <div className="w-20 h-20 rounded-2xl bg-white shadow-xs border border-slate-200/90 flex items-center justify-center p-3.5">
                            <img
                              src={matchingFigmaItem.iconUrl}
                              alt={detailData.name}
                              className="w-14 h-14 max-h-14 max-w-14 object-contain"
                            />
                          </div>
                          <h3 className="font-extrabold text-lg sm:text-xl text-[#0F1730] mt-4 tracking-tight">
                            {detailData.name} + Deskmerit
                          </h3>
                          <div className="text-xs text-[#4A5370] font-medium mt-1">
                            Automatic Background Synchronization
                          </div>
                        </div>

                        {/* Card Content & Trust Features */}
                        <div className="p-6 sm:p-7 space-y-4">
                          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 flex items-center justify-between text-xs">
                            <div>
                              <div className="text-[10px] font-mono font-bold uppercase text-[#4A5370]">
                                Connected Entity
                              </div>
                              <div className="font-bold text-[#0F1730] mt-0.5">
                                {detailData.previewCardTitle}
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5]">
                              {detailData.previewMetricValue}
                            </span>
                          </div>

                          <div className="space-y-2 text-xs text-[#4A5370]">
                            <div className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>Zero keystroke or screen recording</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>Direct worklog attribution to projects</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>100% employee audit priority review</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#4A5370]">
                            <span className="flex items-center gap-1.5 font-medium">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#027A48]" />
                              TLS 1.3 Encrypted
                            </span>
                            <span className="text-emerald-600 font-mono font-semibold">Active & Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TL;DR KEY TAKEAWAYS SECTION (DeskTime-inspired callout) */}
            {detailData.tldr && detailData.tldr.length > 0 && (
              <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6E2D8] shadow-[0_12px_32px_rgba(15,23,48,0.08)]">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-4">
                    <Sparkles className="w-4 h-4 text-[#FF5A36]" />
                    <span>TL;DR – Key Takeaways for {detailData.name} Time Tracking</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {detailData.tldr.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed font-normal">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Deep Feature Capabilities Grid */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  WHY INTEGRATE
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F1730] tracking-tight leading-[1.2]">
                  Why delivery teams choose Deskmerit for {detailData.name} time tracking
                </h2>
                <p className="text-base text-[#4A5370] mt-3 max-w-2xl mx-auto leading-relaxed font-normal">
                  Built for high-trust modern organizations. Automate attendance, prevent timesheet friction, and protect employee privacy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {detailData.features.map((feat, i) => {
                  const IconC = feat.icon;
                  return (
                    <div
                      key={i}
                      className="p-7 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                          <IconC className="w-6 h-6 stroke-[2]" />
                        </div>
                        <h3 className="font-bold text-lg text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2.5">
                          {feat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed font-normal">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 3-Step Setup Section */}
            <section className="py-20 bg-white border-y border-[#E6E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    QUICK SETUP
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight leading-[1.2]">
                    How does the {detailData.name} time tracking integration work?
                  </h2>
                  <p className="text-base text-[#4A5370] mt-3 max-w-2xl mx-auto leading-relaxed">
                    Connect your workspace in under 3 minutes. Zero server scripting, zero IT tickets, zero code required.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {detailData.steps.map((st) => (
                    <div
                      key={st.num}
                      className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] flex flex-col justify-between hover:border-[#FF5A36] hover:bg-white hover:shadow-card transition-all"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-[#FF5A36] bg-[#FFE6DF] border border-[#FF5A36]/30 px-3 py-1 rounded-md inline-block mb-5">
                          STEP {st.num}
                        </span>
                        <h3 className="text-xl font-bold text-[#0F1730] mb-3">{st.title}</h3>
                        <p className="text-sm text-[#4A5370] leading-relaxed font-normal">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Related Integrations Bar */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-1">
                    MORE INTEGRATIONS
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F1730]">
                    Explore other tools that connect with Deskmerit
                  </h3>
                </div>
                <Link
                  to="/features/integrations"
                  className="text-xs font-bold text-[#FF5A36] hover:underline flex items-center gap-1"
                >
                  <span>View all 20+ integrations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {FIGMA_INTEGRATIONS.filter((item) => item.id !== detailData.id).slice(0, 4).map((item) => (
                  <FigmaIntegrationCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* Back to All Integrations Link */}
            <div className="pb-12 text-center">
              <Link
                to="/features/integrations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-[#0F1730] font-bold text-sm hover:border-[#FF5A36] hover:text-[#FF5A36] transition-all cursor-pointer shadow-xs"
              >
                <span>← Back to all integrations directory</span>
              </Link>
            </div>

            {/* Tool-specific FAQs */}
            <DeskmeritFaq
              title={`${detailData.name} Integration FAQs`}
              category="FREQUENTLY ASKED"
              customFaqs={detailData.faqs}
              helpTitle={`Need a Custom ${detailData.name} Workflow?`}
              helpDescription="Our solutions engineering team can assist with high-volume enterprise synchronization, custom field mapping, and bespoke webhook logic."
            />
          </div>
        ) : (
          /* ========================================================================= */
          /* 2. MAIN INTEGRATIONS DIRECTORY PAGE                                       */
          /* Hero displays REAL Figma Integration Cards Showcase                       */
          /* Cards Grid strictly follows Figma Product Card Layout                      */
          /* ========================================================================= */
          <div>
            {/* HERO SECTION */}
            <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <div className="text-xs font-semibold flex items-center gap-2 mb-6">
                  <Link to="/" className="hover:underline text-slate-300">
                    Home
                  </Link>
                  <span className="text-slate-500">/</span>
                  <span className="text-[#FF5A36] font-bold">Integrations & Ecosystem</span>
                </div>

                <div className="grid grid-cols-12 gap-10 lg:gap-14 items-center">
                  <div className="col-span-12 lg:col-span-7 space-y-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                      INTEGRATIONS & ECOSYSTEM
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.22] text-white">
                      Streamline your work processes with time tracking integrations
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                      Deskmerit connects with project management software, calendars, and communication tools so tracking happens in the natural flow of work with zero manual timesheets.
                    </p>

                    <div className="flex flex-wrap items-center gap-3.5 pt-2">
                      <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all cursor-pointer"
                      >
                        <span>Start free trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/demo"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
                      >
                        <span>Explore in demo account</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </Link>
                    </div>
                  </div>

                  {/* Hero Right: THE REAL INTEGRATION CARDS SHOWCASE (White Card Container) */}
                  <div className="col-span-12 lg:col-span-5">
                    <div className="relative">
                      {/* Clean Soft Ambient Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-orange-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

                      {/* Crisp White Hero Container matching other pages */}
                      <div className="relative rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] text-[#0F1730]">
                        {/* Top Hub Bar with macOS window controls */}
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-2.5">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#62C554]" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-[#0F1730] flex items-center gap-2">
                                <span>Workspace Integrations Hub</span>
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF3] text-[#027A48] border border-[#A6F4C5]">
                                  6 Active
                                </span>
                              </div>
                              <div className="text-[11px] text-[#4A5370]">
                                Telemetry synced with production daemon
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 bg-[#F8FAFC] px-2.5 py-1 rounded-lg border border-slate-200">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-mono font-medium text-[#027A48]">
                              Live 200 OK
                            </span>
                          </div>
                        </div>

                        {/* Interactive Tabs in Clean Light Style */}
                        <div className="flex items-center gap-1.5 mb-4 p-1.5 bg-[#F7F4EE] rounded-xl border border-[#E6E2D8]">
                          <button
                            type="button"
                            onClick={() => setHeroActiveTab("jira")}
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              heroActiveTab === "jira"
                                ? "bg-white text-[#0F1730] shadow-sm border border-slate-200/80"
                                : "text-[#4A5370] hover:text-[#0F1730] hover:bg-white/60"
                            }`}
                          >
                            Jira (Connected)
                          </button>
                          <button
                            type="button"
                            onClick={() => setHeroActiveTab("azure-devops")}
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              heroActiveTab === "azure-devops"
                                ? "bg-white text-[#0F1730] shadow-sm border border-slate-200/80"
                                : "text-[#4A5370] hover:text-[#0F1730] hover:bg-white/60"
                            }`}
                          >
                            Azure DevOps
                          </button>
                          <button
                            type="button"
                            onClick={() => setHeroActiveTab("asana")}
                            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              heroActiveTab === "asana"
                                ? "bg-white text-[#0F1730] shadow-sm border border-slate-200/80"
                                : "text-[#4A5370] hover:text-[#0F1730] hover:bg-white/60"
                            }`}
                          >
                            Asana
                          </button>
                        </div>

                        {/* The Real Figma Card for Active Tab */}
                        <div className="transition-all duration-300">
                          {heroActiveTab === "jira" && (
                            <FigmaIntegrationCard
                              item={FIGMA_INTEGRATIONS.find((x) => x.id === "jira")!}
                              className="shadow-sm border-slate-200"
                            />
                          )}
                          {heroActiveTab === "azure-devops" && (
                            <FigmaIntegrationCard
                              item={FIGMA_INTEGRATIONS.find((x) => x.id === "azure-devops")!}
                              className="shadow-sm border-slate-200"
                            />
                          )}
                          {heroActiveTab === "asana" && (
                            <FigmaIntegrationCard
                              item={FIGMA_INTEGRATIONS.find((x) => x.id === "asana")!}
                              className="shadow-sm border-slate-200"
                            />
                          )}
                        </div>

                        {/* Live Sync Stats Underneath in Clean Light Style */}
                        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 text-center">
                          <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                            <div className="text-[10px] text-[#4A5370] uppercase font-mono font-bold">
                              Synced Tasks
                            </div>
                            <div className="text-sm font-extrabold text-[#0F1730] mt-0.5">
                              148 Active
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                            <div className="text-[10px] text-[#4A5370] uppercase font-mono font-bold">
                              Worklog Writes
                            </div>
                            <div className="text-sm font-extrabold text-[#FF5A36] mt-0.5">
                              38h 40m
                            </div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
                            <div className="text-[10px] text-[#4A5370] uppercase font-mono font-bold">
                              Latency
                            </div>
                            <div className="text-sm font-extrabold text-[#027A48] mt-0.5">
                              18 ms
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 1: AUTONOMOUS BY DESIGN */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  AUTONOMOUS BY DESIGN
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F1730] tracking-tight leading-[1.24]">
                  The time tracker that doesn't need 100 integrations to work
                </h2>
                <p className="text-base sm:text-lg text-[#4A5370] mt-4 leading-relaxed font-normal">
                  Most time tracking tools need integrations to capture time in every app. Deskmerit doesn't, because tracking happens automatically in the background from the moment work starts.
                </p>
              </div>

              {/* 3 Value Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center font-bold mb-6">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                      Automatic OS-level tracking
                    </h3>
                    <p className="text-sm text-[#4A5370] leading-relaxed">
                      Deskmerit records activity across every app and website at the operating system level. If your team works in Jira, Figma, Slack, or VS Code, that time is already captured without any integration.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold mb-6">
                      <RefreshCw className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                      Integrations for attribution, not capture
                    </h3>
                    <p className="text-sm text-[#4A5370] leading-relaxed">
                      Deskmerit's native integrations serve a different purpose: syncing project structures and calendar events so tracked time is attributed correctly, not just recorded.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-6">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                      Zero manual start/stop required
                    </h3>
                    <p className="text-sm text-[#4A5370] leading-relaxed">
                      No stopwatch buttons, no forgotten timers, and no end-of-week timesheet guessing games. Everything captures autonomously with 100% precision.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: AVAILABLE INTEGRATIONS (EXACT FIGMA PRODUCT CARD DESIGNS) */}
            <section className="py-20 bg-white border-t border-[#E6E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    DIRECTORY
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight leading-[1.24]">
                    Available integrations
                  </h2>
                  <p className="text-base text-[#4A5370] mt-3">
                    Click any integration card to explore setup instructions, capabilities, and workflows.
                  </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
                  <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar scrollbar-none flex items-center gap-2 p-1.5 bg-[#F7F4EE] rounded-2xl border border-[#E6E2D8]">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setFilter(c.id)}
                        className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                          filter === c.id
                            ? "bg-[#0F1730] text-white shadow-xs"
                            : "text-[#4A5370] hover:text-[#0F1730] hover:bg-white"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative w-full md:w-72">
                    <Search className="w-4 h-4 text-[#9AA1B2] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search tools (e.g. Jira, Asana, Linear)..."
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] placeholder-[#9AA1B2] focus:outline-none focus:border-[#FF5A36] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Compact Grid: 4 Cards in a Row (Strictly matching Idea 2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {filtered.map((item) => (
                    <FigmaIntegrationCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 3: CONNECT TO EVERY TOOL */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  SEAMLESS INTEGRATION
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight leading-[1.24]">
                  Connect Deskmerit to every tool your team already uses
                </h2>
                <p className="text-base sm:text-lg text-[#4A5370] mt-3 leading-relaxed">
                  Deskmerit connects to your existing tech stack through native integrations, the Deskmerit API, and Zapier.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1730]">Native integrations</h3>
                    </div>
                    <p className="text-sm text-[#4A5370] leading-relaxed">
                      Google Calendar, Outlook, Jira, Asana, ClickUp, Linear, and GitLab sync project structures and meeting time directly into Deskmerit's timeline.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1730]">Deskmerit API</h3>
                    </div>
                    <p className="text-sm text-[#4A5370] leading-relaxed">
                      Build custom connections for high-volume or unique workflows. Full documentation available for your development team with 600 req/min limits.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F1730]">Zapier & Make</h3>
                    </div>
                    <p className="text-sm text-[#4A5370] leading-relaxed">
                      Connect Deskmerit to 9,000+ tools, including payroll, CRM, and accounting software. No code required, no developer needed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <DeskmeritFaq
              title="Frequently Asked Questions About Integrations"
              category="INTEGRATION FAQS"
              customFaqs={[
                {
                  q: "How does Deskmerit track time if we don't install an integration?",
                  a: "Deskmerit tracks at the operating system level through its lightweight desktop daemon. It captures active application names, browser window titles, and websites automatically. Integrations are used for project and sprint worklog attribution.",
                },
                {
                  q: "Can integrations modify or overwrite data in our external tools?",
                  a: "Deskmerit only writes time logs and worklog records that you explicitly designate. It will never overwrite ticket descriptions, comments, or repository codes.",
                },
                {
                  q: "Are credentials and API tokens stored securely?",
                  a: "Yes. All tokens and OAuth secrets are encrypted at rest using AES-256-GCM and transmitted over TLS 1.3 with strict least-privilege scoping.",
                },
                {
                  q: "What if the tool we need isn't listed in the directory?",
                  a: "You can connect Deskmerit to thousands of tools via Zapier, Make, or use our comprehensive REST API and Webhooks to build custom bi-directional pipelines.",
                },
              ]}
              helpTitle="Looking for a Custom Integration or AI Agent?"
              helpDescription="Our enterprise solutions team builds bespoke integrations for proprietary ERPs, custom project trackers, and Model Context Protocol tooling."
            />
          </div>
        )}

        {/* Global CTA Band */}
        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}