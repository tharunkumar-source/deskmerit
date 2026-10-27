import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
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

function GoogleCalendarLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" fill="#FFFFFF" />
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v3h18V6a2 2 0 00-2-2z" fill="#4285F4" />
      <path d="M3 9v11a2 2 0 002 2h2V9H3z" fill="#34A853" />
      <path d="M17 22h2a2 2 0 002-2V9h-4v13z" fill="#EA4335" />
      <path d="M7 20h10v2H7v-2z" fill="#FBBC04" />
      <text x="12" y="17.5" textAnchor="middle" fill="#1973E8" fontSize="7.5" fontWeight="900" fontFamily="sans-serif">31</text>
    </svg>
  );
}

function OutlookLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M13 5.5h7.5a1 1 0 011 1v11a1 1 0 01-1 1H13V5.5z" fill="#0078D4"/>
      <path d="M13 12l8.5-5.5v11L13 12z" fill="#005A9E" fillOpacity="0.8"/>
      <path d="M13 5.5l8.5 5.5-8.5 5.5V5.5z" fill="#28A8EA"/>
      <rect x="2" y="5" width="13" height="14" rx="2.5" fill="#0078D4"/>
      <ellipse cx="8.5" cy="12" rx="3.5" ry="4" fill="#FFFFFF"/>
      <ellipse cx="8.5" cy="12" rx="2" ry="2.5" fill="#0078D4"/>
    </svg>
  );
}

function JiraLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.571 0H2.083C.932 0 0 .933 0 2.083v9.488C0 6.012 4.417 1.595 9.976 1.595h1.595V0z" fill="#0052CC"/>
      <path d="M11.917 5.952H6.071c-.932 0-1.69.758-1.69 1.69v4.262c0 3.286 2.667 5.953 5.953 5.953h1.583V5.952z" fill="#2684FF"/>
      <path d="M23.833 11.905h-9.488c-5.559 0-9.976 4.417-9.976 9.976v.036c0 1.15.932 2.083 2.083 2.083h9.488c5.559 0 9.976-4.417 9.976-9.976v-.036c0-1.15-.932-2.083-2.083-2.083z" fill="#0052CC"/>
    </svg>
  );
}

function AsanaLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="asanaGradDetail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FC636B" />
          <stop offset="100%" stopColor="#FF7A59" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="6.5" r="4.2" fill="url(#asanaGradDetail)" />
      <circle cx="5.6" cy="17" r="4.2" fill="url(#asanaGradDetail)" />
      <circle cx="18.4" cy="17" r="4.2" fill="url(#asanaGradDetail)" />
    </svg>
  );
}

function TrelloLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#0079BF" />
      <rect x="4" y="4" width="6.5" height="13" rx="1.5" fill="#FFFFFF" />
      <rect x="13.5" y="4" width="6.5" height="8.5" rx="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function GitLabLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M23.6 9.6l-1.3-4.1c-.2-.5-.8-.8-1.3-.8-.5 0-1 .3-1.2.8L17.7 12H6.3L4.2 5.5c-.2-.5-.7-.8-1.2-.8-.5 0-1.1.3-1.3.8L.4 9.6c-.2.5 0 1.1.4 1.4L12 20.2l11.2-9.2c.4-.3.6-.9.4-1.4z" fill="#E24329"/>
      <path d="M12 20.2l5.7-8.2H6.3l5.7 8.2z" fill="#E24329"/>
      <path d="M12 20.2L6.3 12H.4l11.6 8.2z" fill="#FC6D26"/>
      <path d="M.4 9.6c-.2.5 0 1.1.4 1.4L6.3 12 4.2 5.5.4 9.6z" fill="#FCA326"/>
      <path d="M12 20.2l5.7-8.2h5.9L12 20.2z" fill="#FC6D26"/>
      <path d="M23.6 9.6c.2.5 0 1.1-.4 1.4L17.7 12l2.1-6.5 3.8 4.1z" fill="#FCA326"/>
    </svg>
  );
}

function SlackLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.5 10a2 2 0 100-4 2 2 0 000 4z" fill="#36C5F0"/>
      <path d="M2 11.5a2 2 0 002 2h3.5a2 2 0 100-4H4a2 2 0 00-2 2z" fill="#36C5F0"/>
      <path d="M10 5.5a2 2 0 10-4 0 2 2 0 004 0z" fill="#2EB67D"/>
      <path d="M11.5 2a2 2 0 00-2 2v3.5a2 2 0 104 0V4a2 2 0 00-2-2z" fill="#2EB67D"/>
      <path d="M18.5 14a2 2 0 100 4 2 2 0 000-4z" fill="#ECB22E"/>
      <path d="M22 12.5a2 2 0 00-2-2h-3.5a2 2 0 100 4H20a2 2 0 002-2z" fill="#ECB22E"/>
      <path d="M14 18.5a2 2 0 104 0 2 2 0 00-4 0z" fill="#E01E5A"/>
      <path d="M12.5 22a2 2 0 002-2v-3.5a2 2 0 10-4 0V20a2 2 0 002 2z" fill="#E01E5A"/>
    </svg>
  );
}

function ZapierLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FFF2ED" />
      <path
        d="M12 4v16M4 12h16M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34"
        stroke="#FF4F00"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MakeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#6D32EC" />
      <path d="M6 16l4-8 4 8M14 8l4 8" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TeamsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#5059C9" />
      <path d="M16 8a2 2 0 100-4 2 2 0 000 4zM16 10h-2a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 00-2-1z" fill="#FFFFFF" fillOpacity="0.7"/>
      <circle cx="10" cy="7" r="2.5" fill="#FFFFFF" />
      <rect x="5.5" y="11" width="9" height="8" rx="2" fill="#FFFFFF" />
      <text x="10" y="17" textAnchor="middle" fill="#5059C9" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">T</text>
    </svg>
  );
}

function AzureDevOpsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0078D4" />
      <path d="M17.5 7.5L12 4 6.5 7.5v9l5.5 3.5 5.5-3.5V7.5z" stroke="#FFFFFF" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
      <path d="M12 4v16M6.5 7.5l11 9M17.5 7.5l-11 9" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.8"/>
    </svg>
  );
}

function ClaudeMcpLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0F1730" />
      <circle cx="12" cy="12" r="7" stroke="#FF5A36" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="12" cy="12" r="3" fill="#FF5A36" />
    </svg>
  );
}

function SqalibleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0F1730" />
      <path d="M7 16l5-8 5 8" stroke="#FF5A36" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="14" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

function RestApiLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1E293B" />
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  logo: React.ReactNode;
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
    logo: <AsanaLogo className="w-8 h-8" />,
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
    logo: <AzureDevOpsLogo className="w-8 h-8" />,
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
    logo: <span className="font-extrabold text-purple-600 text-xl">C</span>,
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
    logo: <JiraLogo className="w-8 h-8" />,
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
    logo: <span className="font-extrabold text-indigo-600 text-xl">L</span>,
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
    logo: <span className="font-extrabold text-blue-600 text-xl">O</span>,
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
    logo: <GoogleCalendarLogo className="w-8 h-8" />,
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
    logo: <OutlookLogo className="w-8 h-8" />,
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
    logo: <SlackLogo className="w-8 h-8" />,
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
    logo: <TeamsLogo className="w-8 h-8" />,
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
    logo: <ZapierLogo className="w-8 h-8" />,
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
    logo: <MakeLogo className="w-8 h-8" />,
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
    logo: <TrelloLogo className="w-8 h-8" />,
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
    logo: <GitLabLogo className="w-8 h-8" />,
  },
  {
    id: "sqalible",
    name: "Sqalible HRMS",
    category: "hrms",
    categoryLabel: "HRMS & Payroll",
    avatarBg: "#0F1730",
    monogram: "SQ",
    authType: "Native SSO",
    description: "Turn on time tracking inside Sqalible HRMS with unified payroll sync.",
    scopes: ["biometric_sync", "payroll_calc", "leave_deduct"],
    status: "connected",
    href: "/features/integrations/sqalible",
    tagline: "Native payroll & leave engine",
    badge: "1-click toggle",
    logo: <SqalibleLogo className="w-8 h-8" />,
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
    logo: <ClaudeMcpLogo className="w-8 h-8" />,
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
    logo: <RestApiLogo className="w-8 h-8" />,
  },
];

// =============================================================================
// FIGMA INTEGRATION CARD COMPONENT
// Strict 1:1 match with Figma Product Card reference
// =============================================================================

export function FigmaIntegrationCard({
  item,
  onActionClick,
  className = "",
}: {
  item: FigmaIntegrationItem;
  onActionClick?: (id: string, action: string) => void;
  className?: string;
}) {
  const [currentStatus, setCurrentStatus] = useState<"connected" | "reconnect" | "connect">(item.status);

  const handleStatusToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentStatus === "connect" || currentStatus === "reconnect") {
      setCurrentStatus("connected");
    } else {
      setCurrentStatus("connect");
    }
    if (onActionClick) onActionClick(item.id, currentStatus);
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all duration-200 flex flex-col justify-between group text-left ${className}`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Squircle Avatar with Monogram */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-xs tracking-tight"
              style={{ backgroundColor: item.avatarBg }}
            >
              {item.monogram}
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-bold text-[#0F1730] truncate group-hover:text-[#FF5A36] transition-colors leading-tight">
                {item.name}
              </h3>
              <div className="flex flex-wrap items-center gap-1.5 mt-1">
                <span className="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#F0EBFE] text-[#6938EF] whitespace-nowrap">
                  {item.categoryLabel}
                </span>
                <span className="inline-flex items-center text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-[#F4F5F7] text-[#4A5370] whitespace-nowrap">
                  {item.authType}
                </span>
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1 text-slate-400 shrink-0">
            <button
              type="button"
              title="Edit settings"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onActionClick) onActionClick(item.id, "edit");
              }}
              className="p-1 rounded-md hover:text-[#0F1730] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Pencil className="w-4 h-4 stroke-[2]" />
            </button>
            <button
              type="button"
              title="Delete integration"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onActionClick) onActionClick(item.id, "delete");
              }}
              className="p-1 rounded-md hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-[#4A5370] leading-relaxed my-3 line-clamp-2">
          {item.description}
        </p>

        {/* Scope Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {item.scopes.map((scope, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-[#F8F9FA] text-[#4A5370] text-[11px] font-mono border border-slate-200/80"
            >
              {scope}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
        <Link
          to={item.href}
          className="text-xs font-semibold text-[#5B6CFF] hover:text-[#4338CA] hover:underline cursor-pointer"
        >
          View Details
        </Link>

        {currentStatus === "connected" && (
          <button
            type="button"
            onClick={handleStatusToggle}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF3] text-[#027A48] border border-[#A6F4C5] hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            <Check className="w-3.5 h-3.5 stroke-[2.5]" /> Connected
          </button>
        )}

        {currentStatus === "reconnect" && (
          <button
            type="button"
            onClick={handleStatusToggle}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3 stroke-[2.5]" /> Reconnect
          </button>
        )}

        {currentStatus === "connect" && (
          <button
            type="button"
            onClick={handleStatusToggle}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-[#5B6CFF] hover:bg-[#4E5BA6] shadow-sm transition-all cursor-pointer"
          >
            Connect
          </button>
        )}
      </div>
    </div>
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
    heroHeadline: "Automatically count meetings as",
    heroHighlight: "active billable attendance.",
    heroDescription:
      "Never get penalized for meeting-heavy days. Deskmerit detects accepted Google Calendar invites during shift hours and logs them to client projects with zero manual intervention.",
    logo: <GoogleCalendarLogo className="w-12 h-12" />,
    previewCardTitle: "Architecture Sprint Review · Google Meet",
    previewCardSub: "Accepted Calendar Invite",
    previewMetricLabel: "Auto-Logged Duration",
    previewMetricValue: "45 min",
    previewBadgeText: "Credited as Billable Time",
    steps: [
      {
        num: "01",
        title: "Authorize Google Workspace",
        desc: "Connect your work Google account using Google's secure read-only calendar permissions.",
      },
      {
        num: "02",
        title: "Define Meeting Matching Rules",
        desc: "Map recurring client standups, architecture syncs, and 1-on-1s to corresponding project billing tags.",
      },
      {
        num: "03",
        title: "Automatic Timesheet Credit",
        desc: "Meetings you attend automatically count toward your daily shift hours without manual clock-ins.",
      },
    ],
    features: [
      {
        icon: Calendar,
        title: "Offline & Video Meeting Credit",
        desc: "Calendar meetings automatically override idle penalties when employees are on calls or in meeting rooms.",
      },
      {
        icon: ShieldCheck,
        title: "Private Events Filtered",
        desc: "Events marked 'Private' in Google Calendar are excluded from client logs and timesheet exports.",
      },
    ],
    faqs: [
      {
        q: "What happens if a meeting ends early?",
        a: "Deskmerit verifies meeting attendance against desktop activity to ensure precise, fair duration records.",
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
    heroHeadline: "Count Microsoft 365 appointments as",
    heroHighlight: "active client meeting attendance.",
    heroDescription:
      "Detect accepted Microsoft Teams and Outlook appointments. Credit meeting hours automatically into project billing reports with enterprise SSO governance.",
    logo: <OutlookLogo className="w-12 h-12" />,
    previewCardTitle: "Client Steering Committee · MS Teams",
    previewCardSub: "Outlook Calendar Invite",
    previewMetricLabel: "Auto-Credited Duration",
    previewMetricValue: "1h 00m",
    previewBadgeText: "Credited as Shift Work",
    steps: [
      {
        num: "01",
        title: "Connect Microsoft 365",
        desc: "Single-click OAuth connection through your Microsoft Entra ID corporate tenant.",
      },
      {
        num: "02",
        title: "Map Client Projects",
        desc: "Assign Outlook meeting subject patterns or client email domains to project codes.",
      },
      {
        num: "03",
        title: "Hands-Free Credit",
        desc: "Meeting times credit into daily employee shift hours without manual stopwatch toggles.",
      },
    ],
    features: [
      {
        icon: Calendar,
        title: "Enterprise M365 Compliance",
        desc: "Meets global IT requirements with tenant-level consent and zero access to personal mailboxes.",
      },
      {
        icon: RefreshCw,
        title: "Teams Call Telemetry",
        desc: "Correlates scheduled Outlook meetings with actual Teams audio/video active participation.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit read email contents?",
        a: "No. Deskmerit only accesses calendar invite timestamps and titles; email contents are never accessed.",
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
    heroHeadline: "Connect time tracking telemetry to",
    heroHighlight: "9,000+ business applications.",
    heroDescription:
      "Build powerful automated workflows without writing a single line of code. Trigger payroll deductions, post attendance digests, or push billable hours to your CRM automatically.",
    logo: <ZapierLogo className="w-12 h-12" />,
    previewCardTitle: "Zap: Shift Completed → QuickBooks Invoice",
    previewCardSub: "Live Trigger · Automated Workflow",
    previewMetricLabel: "Zaps Triggered",
    previewMetricValue: "18,400 / mo",
    previewBadgeText: "Verified Zapier Partner",
    steps: [
      {
        num: "01",
        title: "Generate Scoped API Key",
        desc: "Create a restricted Zapier integration token within your Deskmerit workspace security settings.",
      },
      {
        num: "02",
        title: "Select Trigger & Action",
        desc: "Choose triggers like 'Shift Completed', 'New Overtime Logged', or 'Project Milestone Reached'.",
      },
      {
        num: "03",
        title: "Automate Downstream Tools",
        desc: "Pipe verified time records to HubSpot, Salesforce, Xero, QuickBooks, or Google Sheets in real time.",
      },
    ],
    features: [
      {
        icon: Zap,
        title: "Instant Webhook Triggers",
        desc: "Events fire the exact millisecond a shift starts, a break ends, or a project target is logged.",
      },
      {
        icon: Folder,
        title: "Multi-Step Automation Pipelines",
        desc: "Route time logs through branching logic to verify contractor hours before triggering payouts.",
      },
    ],
    faqs: [
      {
        q: "Is there an additional charge for using Zapier with Deskmerit?",
        a: "Deskmerit provides Zapier webhook access across all plans with no added API surcharges.",
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

// Aliases mapping common variations to canonical slugs
const SLUG_ALIASES: Record<string, string> = {
  outlook: "outlook-calendar",
  teams: "microsoft-teams",
  mcp: "mcp-server",
  api: "rest-api",
};

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
  const canonicalSlug = slug ? SLUG_ALIASES[slug.toLowerCase()] || slug.toLowerCase() : null;

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
                  {/* Left Column */}
                  <div className="col-span-12 lg:col-span-7 space-y-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                      INTEGRATION: {detailData.name.toUpperCase()}
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

                  {/* Right Column: THE REAL FIGMA INTEGRATION CARD IN HERO (White Card Container) */}
                  <div className="col-span-12 lg:col-span-5">
                    <div className="relative">
                      {/* Clean Soft Ambient Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-orange-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

                      {/* Crisp White Hero Container matching other pages */}
                      <div className="relative rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] text-[#0F1730]">
                        {/* macOS Window Title Bar */}
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-2.5">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#62C554]" />
                            </div>
                            <span className="text-xs font-bold tracking-tight text-[#0F1730] ml-1">
                              Active Workspace Component
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-slate-200 text-[11px] font-mono text-[#4A5370]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>v2.4 Live Sync</span>
                          </div>
                        </div>

                        {/* Exact Figma Product Card (Internal cards are perfect) */}
                        <FigmaIntegrationCard
                          item={matchingFigmaItem}
                          className="shadow-sm border-slate-200"
                        />

                        {/* Real-time telemetry strip below the card in clean light style */}
                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 flex items-center justify-between text-xs">
                            <div>
                              <div className="text-[10px] font-mono font-bold uppercase text-[#4A5370]">
                                Active Mapped Entity
                              </div>
                              <div className="font-bold text-[#0F1730] mt-0.5">
                                {detailData.previewCardTitle}
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5]">
                              {detailData.previewMetricValue}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-[#4A5370] px-1">
                            <span className="flex items-center gap-1.5 font-medium">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#027A48]" />
                              TLS 1.3 End-to-End Encrypted
                            </span>
                            <span className="text-[#4A5370] font-mono">0 pending worklogs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3-Step Setup Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  SETUP IN MINUTES
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight leading-[1.24]">
                  Connect {detailData.name} in under 3 minutes
                </h2>
                <p className="text-sm sm:text-base text-[#4A5370] mt-3 leading-relaxed">
                  Fast, verified, and enterprise-secure. No complicated webhook infrastructure or IT tickets required.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {detailData.steps.map((st) => (
                  <div
                    key={st.num}
                    className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle flex flex-col justify-between hover:border-[#FF5A36] hover:shadow-card transition-all"
                  >
                    <div>
                      <span className="text-xs font-extrabold text-[#FF5A36] bg-[#FFE6DF] border border-[#FF5A36]/30 px-3 py-1 rounded-lg font-mono inline-block mb-4">
                        STEP {st.num}
                      </span>
                      <h3 className="text-lg font-bold text-[#0F1730] mb-2">{st.title}</h3>
                      <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Deep Feature Capabilities Grid */}
            <section className="py-16 bg-white border-y border-[#E6E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    CORE CAPABILITIES
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight leading-[1.24]">
                    Why engineering teams prefer Deskmerit + {detailData.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {detailData.features.map((feat, i) => {
                    const IconC = feat.icon;
                    return (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] hover:bg-white hover:shadow-card transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:text-white group-hover:border-[#FF5A36] flex items-center justify-center mb-4 transition-all">
                          <IconC className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-[#4A5370] leading-relaxed">{feat.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Back to All Integrations Link */}
            <div className="py-10 text-center bg-[#F7F4EE]">
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
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
                  <div className="flex flex-wrap gap-2 p-1.5 bg-[#F7F4EE] rounded-2xl border border-[#E6E2D8]">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setFilter(c.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

                {/* Grid of Authentic Figma Cards (3 Columns for spacious, authentic layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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