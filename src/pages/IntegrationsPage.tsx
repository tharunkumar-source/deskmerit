import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  Boxes,
  ArrowRight,
  Bot,
  Terminal,
  Check,
  Search,
  ExternalLink,
  Layers,
  Calendar,
  MessageSquare,
  Workflow,
  Cpu,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  ShieldCheck,
  RefreshCw,
  GitBranch,
} from "lucide-react";

interface IntegrationDetailData {
  id: string;
  name: string;
  category: "pm" | "calendars" | "chat" | "automation" | "hrms" | "developers";
  categoryLabel: string;
  tagline: string;
  badge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroDescription: string;
  initials: string;
  color: string;
  previewCardTitle: string;
  previewCardSub: string;
  previewMetricLabel: string;
  previewMetricValue: string;
  previewBadgeText: string;
  image: string;
  imageAlt: string;
  steps: { num: string; title: string; desc: string }[];
  features: { icon: any; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const INTEGRATION_DETAILS: Record<string, IntegrationDetailData> = {
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
    initials: "J",
    color: "bg-[#0052CC]",
    previewCardTitle: "Jira KMB-482 · API Gateway Refactor",
    previewCardSub: "Sprint 24 · Active Task Bound",
    previewMetricLabel: "Logged to Jira Worklog",
    previewMetricValue: "3h 45m",
    previewBadgeText: "Synced to Atlassian Cloud",
    image: "/images/figma/integration-jira.png",
    imageAlt: "Deskmerit Jira Task Binding & Sprint Worklog Sync",
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
    initials: "AD",
    color: "bg-[#0078D4]",
    previewCardTitle: "User Story #8492 · Payment Engine",
    previewCardSub: "Iteration 12 · Azure Boards",
    previewMetricLabel: "Remaining Work Adjusted",
    previewMetricValue: "5h 15m",
    previewBadgeText: "Synced to Azure DevOps",
    image: "/images/figma/integration-azure-devops.png",
    imageAlt: "Deskmerit Azure DevOps Work Item & Sprint Boards Sync",
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
  openproject: {
    id: "openproject",
    name: "OpenProject",
    category: "pm",
    categoryLabel: "Project Management",
    tagline: "Open-Source PM Sync",
    badge: "Tracker Plus",
    heroHeadline: "Privacy-first task binding for",
    heroHighlight: "self-hosted OpenProject teams.",
    heroDescription:
      "Connect Deskmerit to your open-source OpenProject deployment. Enjoy automatic desktop tracking while maintaining strict data sovereignty and local infrastructure control.",
    initials: "OP",
    color: "bg-[#182A44]",
    previewCardTitle: "Work Package #3021 · Security Audit",
    previewCardSub: "OpenProject Self-Hosted",
    previewMetricLabel: "Logged Spent Time",
    previewMetricValue: "2h 30m",
    previewBadgeText: "OpenProject API Active",
    image: "/images/figma/integration-openproject.png",
    imageAlt: "Deskmerit OpenProject Task Telemetry & Work Package Tracking",
    steps: [
      {
        num: "01",
        title: "Enter Instance Host URL",
        desc: "Provide your self-hosted or OpenProject Cloud domain URL and user API access key.",
      },
      {
        num: "02",
        title: "Filter Work Package Types",
        desc: "Specify which projects and work packages your team can log hours against.",
      },
      {
        num: "03",
        title: "Log Time Without Manual Forms",
        desc: "Deskmerit updates spent time entries in your OpenProject database with sub-second accuracy.",
      },
    ],
    features: [
      {
        icon: Terminal,
        title: "100% Data Sovereignty",
        desc: "Keep your project work packages completely on your private servers with zero third-party telemetry leakage.",
      },
      {
        icon: RefreshCw,
        title: "Native Spent Time Entries",
        desc: "Logs match OpenProject's standard activity cost units for accurate project budget monitoring.",
      },
      {
        icon: Zap,
        title: "Fast Local Desktop Cache",
        desc: "Quick search thousands of work packages in milliseconds from the Deskmerit search bar.",
      },
      {
        icon: ShieldCheck,
        title: "GDPR & Works Council Compliant",
        desc: "Built to pass strict European works council privacy guidelines with optional screenshot bans.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit work behind corporate VPNs?",
        a: "Yes. The desktop agent respects your local OS routing and connects securely through internal corporate VPN tunnels.",
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
    initials: "GC",
    color: "bg-[#EA4335]",
    previewCardTitle: "Architecture Sprint Review · Google Meet",
    previewCardSub: "Accepted Calendar Invite",
    previewMetricLabel: "Auto-Logged Duration",
    previewMetricValue: "45 min",
    previewBadgeText: "Credited as Billable Time",
    image: "/images/figma/integration-google-calendar.png",
    imageAlt: "Deskmerit Google Calendar Automated Meeting Attendance Credit",
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
        title: "Zero Manual Meeting Logging",
        desc: "Accepted meetings within work hours are automatically entered into daily timesheets as productive work.",
      },
      {
        icon: ShieldCheck,
        title: "Privacy Safe (Titles Only)",
        desc: "Deskmerit inspects meeting duration and title only — never agenda documents, chat transcripts, or attachments.",
      },
      {
        icon: Zap,
        title: "Conflict Resolution",
        desc: "If you track a Jira ticket while on a call, Deskmerit intelligently prevents duplicate hour billing.",
      },
      {
        icon: Clock,
        title: "Smart Calendar Disconnect",
        desc: "Disconnect anytime from your account settings with immediate token revocation and zero cache retention.",
      },
    ],
    faqs: [
      {
        q: "What if a meeting gets canceled at the last minute?",
        a: "If you decline or delete the calendar invite, Deskmerit automatically removes the credited attendance entry.",
      },
    ],
  },
  "outlook-calendar": {
    id: "outlook-calendar",
    name: "Outlook Calendar",
    category: "calendars",
    categoryLabel: "Calendars",
    tagline: "Microsoft 365 Sync",
    badge: "Office 365",
    heroHeadline: "Transform Microsoft Outlook invites",
    heroHighlight: "into verified work hours.",
    heroDescription:
      "Enterprise Microsoft 365 calendar presence. Automatically record client video calls and internal sprint planning sessions into clean, auditable billing reports.",
    initials: "OC",
    color: "bg-[#0078D4]",
    previewCardTitle: "Q4 Client Strategy · Teams Call",
    previewCardSub: "Outlook Calendar Event",
    previewMetricLabel: "Auto-Logged Shift Time",
    previewMetricValue: "1h 00m",
    previewBadgeText: "Microsoft 365 Verified",
    image: "/images/figma/integration-outlook-calendar.png",
    imageAlt: "Deskmerit Outlook Calendar & Microsoft 365 Shift Sync",
    steps: [
      {
        num: "01",
        title: "Sign in with Microsoft 365",
        desc: "Authenticate with your corporate Azure / Entra ID work credentials.",
      },
      {
        num: "02",
        title: "Set Work Hour Boundaries",
        desc: "Only calendar appointments within configured office shifts are credited to attendance.",
      },
      {
        num: "03",
        title: "Export Audit-Ready Reports",
        desc: "Meeting hours appear cleanly labeled in timesheet exports alongside desktop coding hours.",
      },
    ],
    features: [
      {
        icon: Calendar,
        title: "Enterprise Office 365 Governance",
        desc: "Completely governed by your IT organization's Microsoft 365 app consent policies.",
      },
      {
        icon: Clock,
        title: "Teams Call Duration Sync",
        desc: "Automatically syncs Microsoft Teams meeting lengths to billable client project codes.",
      },
      {
        icon: ShieldCheck,
        title: "Private Calendar Masking",
        desc: "Personal appointments marked 'Private' in Outlook are credited as private pauses without exposing subjects.",
      },
      {
        icon: RefreshCw,
        title: "One-Click Disconnect",
        desc: "Revoke permissions in Microsoft My Apps with immediate cessation of all calendar reads.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit read my Outlook email inbox?",
        a: "No, never. The integration requests strictly Calendars.Read permissions, with zero access to email, OneDrive, or contacts.",
      },
    ],
  },
  slack: {
    id: "slack",
    name: "Slack",
    category: "chat",
    categoryLabel: "Chat & Collaboration",
    tagline: "Live Status & Standup Bot",
    badge: "Official Slack App",
    heroHeadline: "Live presence, daily digests &",
    heroHighlight: "instant status in Slack channels.",
    heroDescription:
      "Post automated end-of-day team summaries to Slack channels, and let team members query live work status with the simple `/deskmerit status` command.",
    initials: "S",
    color: "bg-[#4A154B]",
    previewCardTitle: "@Deskmerit Bot · #engineering-standup",
    previewCardSub: "Daily Automated Digest",
    previewMetricLabel: "Active Team Members",
    previewMetricValue: "28 / 30",
    previewBadgeText: "Live Slack Bot Connected",
    image: "/images/figma/integration-slack.png",
    imageAlt: "Deskmerit Slack Bot Notifications & Daily Check-In Templates",
    steps: [
      {
        num: "01",
        title: "Add to Slack Workspace",
        desc: "Click 'Add to Slack' and choose which channel receives automated team digests.",
      },
      {
        num: "02",
        title: "Configure Digest Schedule",
        desc: "Set morning standup reminders and end-of-day summary posts per engineering squad.",
      },
      {
        num: "03",
        title: "Query with Slash Commands",
        desc: "Type `/deskmerit status @colleague` in any channel to see their active task and availability.",
      },
    ],
    features: [
      {
        icon: MessageSquare,
        title: "Slash Command Status",
        desc: "Check if a colleague is deep in code, in a meeting, or on a break before sending urgent pings.",
      },
      {
        icon: Sparkles,
        title: "Automated Standup Digests",
        desc: "Replaces tedious manual standup questions by summarizing actual Jira tasks completed that day.",
      },
      {
        icon: Clock,
        title: "Overtime & Burnout Alerts",
        desc: "Notify team managers when an engineer exceeds 9 hours of continuous work in a single day.",
      },
      {
        icon: ShieldCheck,
        title: "Strict Channel Scoping",
        desc: "Broadcast metrics only to designated private management or public engineering channels.",
      },
    ],
    faqs: [
      {
        q: "Can employees turn off personal status sharing in Slack?",
        a: "Yes. Team members can switch their status to 'Private Time' in the desktop daemon at any moment.",
      },
    ],
  },
  "microsoft-teams": {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    category: "chat",
    categoryLabel: "Chat & Collaboration",
    tagline: "Channel Telemetry Bot",
    badge: "Teams App",
    heroHeadline: "Automated team summaries and",
    heroHighlight: "live presence in Teams channels.",
    heroDescription:
      "Deliver automated work telemetry and shift attendance directly into Microsoft Teams channels. No custom webhooks or complicated bot hosting required.",
    initials: "MT",
    color: "bg-[#6264A7]",
    previewCardTitle: "Engineering Ops · Teams Adaptive Card",
    previewCardSub: "Live Sprint Telemetry",
    previewMetricLabel: "Total Billable Hours Today",
    previewMetricValue: "142.5 hrs",
    previewBadgeText: "Microsoft Teams Verified",
    image: "/images/figma/integration-teams.png",
    imageAlt: "Deskmerit Microsoft Teams Status Sync & Team Activity Pulse",
    steps: [
      {
        num: "01",
        title: "Install in Teams Admin Center",
        desc: "Add Deskmerit to your Microsoft Teams organization or specific team workspaces.",
      },
      {
        num: "02",
        title: "Pin to Department Channels",
        desc: "Select which channels receive daily attendance rosters and sprint burn reports.",
      },
      {
        num: "03",
        title: "Interactive Adaptive Cards",
        desc: "Managers can review timesheet submissions directly inside Microsoft Teams cards.",
      },
    ],
    features: [
      {
        icon: MessageSquare,
        title: "Native Adaptive Cards",
        desc: "Beautifully styled Microsoft Teams cards displaying shift attendance and ticket velocity.",
      },
      {
        icon: Clock,
        title: "Shift Start & Stop Alerts",
        desc: "Optional morning notifications reminding remote staff to start their task trackers.",
      },
      {
        icon: ShieldCheck,
        title: "Microsoft Entra Scoped",
        desc: "Permissions mapped directly to user roles within your Microsoft enterprise tenant.",
      },
      {
        icon: Zap,
        title: "No Webhook Infrastructure",
        desc: "Hosted completely on our certified cloud infrastructure with zero IT server maintenance.",
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit post to private Teams chats?",
        a: "Deskmerit only posts to channels or direct chats where a user or team admin explicitly invokes the bot.",
      },
    ],
  },
  zapier: {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    categoryLabel: "Automation",
    tagline: "7,000+ App Workflows",
    badge: "No-Code",
    heroHeadline: "Connect workforce telemetry to",
    heroHighlight: "7,000+ business applications.",
    heroDescription:
      "Create powerful multi-app automations without code. Trigger Zapier flows whenever a timer stops, overtime is logged, or a client timesheet is approved.",
    initials: "Z",
    color: "bg-[#FF4A00]",
    previewCardTitle: "Zap: Deskmerit → Google Sheets & QuickBooks",
    previewCardSub: "Live Multi-Step Automation",
    previewMetricLabel: "Automations Executed",
    previewMetricValue: "1,240 / mo",
    previewBadgeText: "Zapier App Published",
    image: "/images/figma/integration-zapier.png",
    imageAlt: "Deskmerit Zapier Webhook Automations & Event Triggers",
    steps: [
      {
        num: "01",
        title: "Accept Deskmerit Zapier Invite",
        desc: "Add Deskmerit to your Zapier account and paste your workspace API token.",
      },
      {
        num: "02",
        title: "Choose Triggers & Filters",
        desc: "Select triggers like 'Shift Completed', 'New Timesheet Entry', or 'Budget Alert Exceeded'.",
      },
      {
        num: "03",
        title: "Map Destination Apps",
        desc: "Route clean timesheet rows into Google Sheets, Airtable, QuickBooks, or internal CRMs.",
      },
    ],
    features: [
      {
        icon: Workflow,
        title: "Comprehensive Trigger Events",
        desc: "Triggers for timer started, timer stopped, shift completed, and weekly report finalized.",
      },
      {
        icon: Zap,
        title: "Instant Real-Time Webhooks",
        desc: "Zapier receives event webhooks in under 200ms for immediate downstream action execution.",
      },
      {
        icon: Layers,
        title: "Pre-Built Zap Templates",
        desc: "1-click templates for logging time to QuickBooks, generating invoices, and Slack alerts.",
      },
      {
        icon: ShieldCheck,
        title: "Payload Encryption",
        desc: "All Zapier payloads are sent over TLS 1.3 with signed HMAC headers for zero data tampering.",
      },
    ],
    faqs: [
      {
        q: "What data fields are included in the Zapier payload?",
        a: "Payloads include employee name, email, project name, Jira/Azure ticket key, start/end timestamps, and duration in minutes.",
      },
    ],
  },
  make: {
    id: "make",
    name: "Make (Integromat)",
    category: "automation",
    categoryLabel: "Automation",
    tagline: "Visual Scenario Automations",
    badge: "Published Module",
    heroHeadline: "Build complex multi-branch",
    heroHighlight: "workforce data pipelines in Make.",
    heroDescription:
      "Design advanced visual scenarios with routers, aggregators, and error handlers. Sync Deskmerit timesheet records directly into your custom ERP or relational database.",
    initials: "M",
    color: "bg-[#6D32EC]",
    previewCardTitle: "Make Scenario: Deskmerit → PostgreSQL",
    previewCardSub: "Visual Data Pipeline Active",
    previewMetricLabel: "Data Packets Transferred",
    previewMetricValue: "48.2k records",
    previewBadgeText: "Make Published App",
    image: "/images/figma/integration-make.png",
    imageAlt: "Deskmerit Make.com Visual Integration Workflows",
    steps: [
      {
        num: "01",
        title: "Add Deskmerit Module",
        desc: "Search for Deskmerit in Make.com scenario editor and create your API connection.",
      },
      {
        num: "02",
        title: "Configure Routers & Iterators",
        desc: "Split billable vs non-billable hours, route specific clients to different databases.",
      },
      {
        num: "03",
        title: "Activate Scenario",
        desc: "Run scheduled batch syncs or trigger real-time instant webhooks on every timer event.",
      },
    ],
    features: [
      {
        icon: Workflow,
        title: "Complex Multi-Branch Scenarios",
        desc: "Use Make's visual router to filter, transform, and map time records across dozens of databases.",
      },
      {
        icon: Terminal,
        title: "Custom JSON Structure",
        desc: "Full access to raw telemetry fields, window titles, and project cost formulas.",
      },
      {
        icon: RefreshCw,
        title: "Automated Error Handling",
        desc: "Configure rollback routes and notification fallbacks if your destination ERP is offline.",
      },
      {
        icon: ShieldCheck,
        title: "SOC-2 Certified Bridge",
        desc: "Enterprise data pipelines comply with banking-grade security and encryption standards.",
      },
    ],
    faqs: [
      {
        q: "Is there a rate limit when syncing through Make?",
        a: "Deskmerit supports up to 1,200 requests/minute for Make connections, ample for thousands of daily team records.",
      },
    ],
  },
  sqalible: {
    id: "sqalible",
    name: "Sqalible HRMS",
    category: "hrms",
    categoryLabel: "HRMS & Payroll",
    tagline: "1-Click Native Add-on",
    badge: "Flagship Integration",
    heroHeadline: "Native 1-click time tracking inside",
    heroHighlight: "the Sqalible HRMS ecosystem.",
    heroDescription:
      "Turn on Deskmerit time intelligence straight inside Sqalible HRMS. Auto-provision employees, sync approved leaves, and flow verified hours directly into payroll with zero manual CSV exports.",
    initials: "SH",
    color: "bg-[#0F1730]",
    previewCardTitle: "Sqalible HRMS · Telemetry Module",
    previewCardSub: "Native Embedded Add-on",
    previewMetricLabel: "Payroll Ready Hours",
    previewMetricValue: "1,840 hrs",
    previewBadgeText: "1-Click Add-on Active",
    image: "/images/figma/integration-sqalible.png",
    imageAlt: "Deskmerit Native Sqalible HRMS Payroll & Attendance Sync",
    steps: [
      {
        num: "01",
        title: "Toggle Add-on in Sqalible",
        desc: "Navigate to Sqalible HRMS App Store and switch on Deskmerit. No API keys to configure.",
      },
      {
        num: "02",
        title: "Auto-Provision Employees",
        desc: "Employee profiles, department rosters, and manager hierarchies sync automatically.",
      },
      {
        num: "03",
        title: "Automate Monthly Payroll",
        desc: "Approved hours, overtime thresholds, and attendance deductions calculate into payroll runs.",
      },
    ],
    features: [
      {
        icon: RefreshCw,
        title: "Zero-Click Employee Provisioning",
        desc: "New hires added in Sqalible automatically receive desktop agent login invites.",
      },
      {
        icon: Calendar,
        title: "Leave Calendar Bi-Directional Sync",
        desc: "Approved vacation and sick leaves in Sqalible HRMS automatically pause shift absence flags.",
      },
      {
        icon: Sparkles,
        title: "One Consolidated Bill",
        desc: "Deskmerit licenses appear directly on your unified Sqalible monthly or annual subscription invoice.",
      },
      {
        icon: ShieldCheck,
        title: "Unified Single Sign-On",
        desc: "Employees use their existing Sqalible corporate credentials to sign in across all desktop agents.",
      },
    ],
    faqs: [
      {
        q: "Do I need a separate contract for Deskmerit if I use Sqalible HRMS?",
        a: "No. Deskmerit is available as an integrated add-on to your Sqalible plan with unified billing and joint support SLAs.",
      },
    ],
  },
};

const INTEGRATIONS_DIRECTORY_LIST = [
  {
    id: "jira",
    name: "Jira Software",
    category: "pm",
    tagline: "Tracker Plus",
    badge: "Direct PM sync",
    description: "Pick Jira issues in the Deskmerit desktop agent and press Start. Time logs against that issue's project and client with no Jira timers.",
    linkText: "View Jira integration →",
    href: "/integrations/jira",
    initials: "J",
    color: "bg-[#0052CC]",
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "pm",
    tagline: "Tracker Plus",
    badge: "Boards & work items",
    description: "Start tracking from any Azure DevOps work item assigned to you, alongside Jira or on its own with zero duplicate project names.",
    linkText: "View Azure DevOps integration →",
    href: "/integrations/azure-devops",
    initials: "AD",
    color: "bg-[#0078D4]",
  },
  {
    id: "openproject",
    name: "OpenProject",
    category: "pm",
    tagline: "Tracker Plus",
    badge: "Open-source PM",
    description: "The open-source PM tool gets an automatic tracker that respects your self-hosting choices with tasks keyed strictly by ID.",
    linkText: "View OpenProject integration →",
    href: "/integrations/openproject",
    initials: "OP",
    color: "bg-[#182A44]",
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    category: "calendars",
    tagline: "Meetings count as work",
    badge: "Calendar sync",
    description: "Accepted meetings during working hours automatically count toward attendance, so meeting-heavy days are never marked absent.",
    linkText: "View Google Calendar integration →",
    href: "/integrations/google-calendar",
    initials: "GC",
    color: "bg-[#EA4335]",
  },
  {
    id: "outlook-calendar",
    name: "Outlook Calendar",
    category: "calendars",
    tagline: "Meetings count as work",
    badge: "Microsoft 365",
    description: "Read-only calendar presence for Microsoft 365 users. Disconnect stops reads immediately without lingering tokens.",
    linkText: "View Outlook integration →",
    href: "/integrations/outlook-calendar",
    initials: "OC",
    color: "bg-[#0078D4]",
  },
  {
    id: "slack",
    name: "Slack",
    category: "chat",
    tagline: "Summaries & /status",
    badge: "Bot",
    description: "Daily and weekly summaries posted to your team channels, and a convenient `/deskmerit status` command to look up anyone's live state.",
    linkText: "View Slack integration →",
    href: "/integrations/slack",
    initials: "S",
    color: "bg-[#4A154B]",
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    category: "chat",
    tagline: "Summaries & live status",
    badge: "Bot-based",
    description: "Automated work summaries and live status lookups inside Teams channels. No complex custom webhooks to configure.",
    linkText: "View Teams integration →",
    href: "/integrations/microsoft-teams",
    initials: "MT",
    color: "bg-[#6264A7]",
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    tagline: "No-code workflows",
    badge: "7,000+ apps",
    description: "Send attendance to payroll systems, post overtime alerts, or update Google Sheets and Airtable without writing code.",
    linkText: "View Zapier integration →",
    href: "/integrations/zapier",
    initials: "Z",
    color: "bg-[#FF4A00]",
  },
  {
    id: "make",
    name: "Make",
    category: "automation",
    tagline: "Visual automations",
    badge: "Published app",
    description: "Build robust visual workflows with Deskmerit triggers and actions across your enterprise tech stack.",
    linkText: "View Make integration →",
    href: "/integrations/make",
    initials: "M",
    color: "bg-[#6D32EC]",
  },
  {
    id: "sqalible",
    name: "Sqalible HRMS",
    category: "hrms",
    tagline: "Native add-on",
    badge: "1-click toggle",
    description: "Turn on time tracking inside the HRMS you already use. Auto-provision employees, single sign-on, and one consolidated invoice.",
    linkText: "View HRMS add-on →",
    href: "/integrations/sqalible",
    initials: "SH",
    color: "bg-[#0F1730]",
  },
  {
    id: "rest-api",
    name: "REST API",
    category: "developers",
    tagline: "Scoped, read-only keys",
    badge: "OpenAPI specs",
    description: "Versioned, read-only REST API with 600 req/min per key by default, self-serve scopes, and guaranteed stability.",
    linkText: "View API docs →",
    href: "/developers/api",
    initials: "RA",
    color: "bg-slate-700",
  },
  {
    id: "mcp-server",
    name: "Claude MCP Server",
    category: "developers",
    tagline: "For AI assistants",
    badge: "Claude ready",
    description: "Model Context Protocol server allowing Claude and Cursor AI tools to query attendance, project margins and sprint progress safely.",
    linkText: "View MCP server docs →",
    href: "/developers/mcp-server",
    initials: "MS",
    color: "bg-[#FF5A36]",
  },
];

export function IntegrationsPage() {
  const { slug } = useParams<{ slug?: string }>();
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const categories = [
    { id: "all", label: "All integrations" },
    { id: "pm", label: "Project management" },
    { id: "calendars", label: "Calendars" },
    { id: "chat", label: "Chat" },
    { id: "automation", label: "Automation" },
    { id: "hrms", label: "HRMS" },
    { id: "developers", label: "Developers" },
  ];

  // If a slug is provided and matches an integration, render the dedicated Detail Page
  const detailData = slug ? INTEGRATION_DETAILS[slug] : null;

  // Filtered directory items
  const filtered = INTEGRATIONS_DIRECTORY_LIST.filter((item) => {
    const matchesCategory = filter === "all" || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.tagline.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {detailData ? (
          /* ========================================================================= */
          /* 1. DEDICATED INTEGRATION DETAIL VIEW (Unique Content for Each Tool)       */
          /* ========================================================================= */
          <div>
            {/* Dark Hero Section Tailored to Specific Tool */}
            <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden mb-8">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumbs */}
                <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
                  <Link to="/" className="hover:underline text-slate-300">
                    Home
                  </Link>
                  <span className="text-slate-500">/</span>
                  <Link to="/integrations" className="hover:underline text-slate-300">
                    Integrations
                  </Link>
                  <span className="text-slate-500">/</span>
                  <span className="text-[#FFE6DF]">{detailData.name}</span>
                </div>

                <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left Column: Overline, Headline, Description */}
                  <div className="col-span-12 lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF]/15 px-3 py-1 rounded-full border border-[#FF5A36]/30">
                        {detailData.categoryLabel.toUpperCase()} INTEGRATION
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {detailData.badge}
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                      {detailData.heroHeadline}{" "}
                      <span className="text-[#FF5A36] block">{detailData.heroHighlight}</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                      {detailData.heroDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-3.5 pt-2">
                      <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all cursor-pointer"
                      >
                        <span>Connect {detailData.name} Free</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to="/demo"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
                      >
                        <span>Schedule Demo</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Authentic Integration Screenshot in macOS Browser Window Frame */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
                      <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                          <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                          <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                          app.deskmerit.com/integrations/{detailData.id}
                        </div>
                        <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Live Sync
                        </div>
                      </div>

                      <div className="bg-[#070E1A] p-2 sm:p-3">
                        <img
                          src={detailData.image}
                          alt={detailData.imageAlt}
                          className="w-full h-auto rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* In-Page Navigation Bar (Image 5 Style) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5 p-1 bg-[#FFFFFF] rounded-xl border border-[#E6E2D8] shadow-subtle">
                  <Link
                    to="/integrations"
                    className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#4A5370] hover:text-[#0F1730] hover:bg-[#F7F4EE] transition-all"
                  >
                    ← All integrations
                  </Link>
                  {["jira", "azure-devops", "openproject", "google-calendar", "slack", "zapier", "sqalible"].map(
                    (key) => {
                      const item = INTEGRATION_DETAILS[key];
                      if (!item) return null;
                      const isActive = slug === key;
                      return (
                        <Link
                          key={key}
                          to={`/integrations/${key}`}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            isActive
                              ? "bg-[#0F1730] text-white shadow-xs"
                              : "text-[#4A5370] hover:text-[#0F1730] hover:bg-[#F7F4EE]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    }
                  )}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-[#9AA1B2] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#FFFFFF] text-[#0F1730] placeholder-[#9AA1B2] focus:outline-none focus:border-[#FF5A36]"
                  />
                </div>
              </div>
            </div>

            {/* 3-Step Setup Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] font-mono">
                  QUICK ONBOARDING
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight mt-2">
                  Connect {detailData.name} in under 3 minutes
                </h2>
                <p className="text-sm text-[#4A5370] mt-3 leading-relaxed">
                  Fast, verified, and enterprise-secure. No complicated custom webhook servers or IT
                  tickets required.
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
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] font-mono">
                    CAPABILITIES
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight mt-2">
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
          /* 2. DIRECTORY VIEW (When browsing /integrations without slug)               */
          /* ========================================================================= */
          <div>
            {/* DARK HERO SECTION */}
            <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden mb-12">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
                  <Link to="/" className="hover:underline text-slate-300">
                    Home
                  </Link>
                  <span className="text-slate-500">/</span>
                  <span className="text-[#FFE6DF]">Integrations & Ecosystem</span>
                </div>

                <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div className="col-span-12 lg:col-span-6 space-y-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF]/15 px-3 py-1 rounded-full inline-block border border-[#FF5A36]/30">
                      ECOSYSTEM & TOOL CONNECTORS
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                      Connect your tools.{" "}
                      <span className="text-[#FF5A36] block">Keep tracking effortless.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                      Deskmerit binds to Jira, Azure DevOps, Google Calendar, Slack, and your HRMS.
                      Start tracking from a task, auto-credit meetings, and eliminate manual timesheets
                      forever.
                    </p>

                    <div className="flex flex-wrap items-center gap-3.5 pt-2">
                      <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all cursor-pointer"
                      >
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/developers"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
                      >
                        <span>Developer Platform</span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-6">
                    <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-2xl overflow-hidden group">
                      <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                          <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                          <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                          app.deskmerit.com/settings/integrations
                        </div>
                        <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          10 Connectors
                        </div>
                      </div>

                      <div className="bg-[#070E1A] p-2">
                        <img
                          src="/images/figma/integrations-hub-catalog.png"
                          alt="Deskmerit Integrations Catalog & Connected Tools Hub"
                          className="w-full h-auto rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* In-Page Navigation Bar & Search matching Image 5 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5 p-1 bg-[#FFFFFF] rounded-xl border border-[#E6E2D8] shadow-subtle">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setFilter(c.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        filter === c.id
                          ? "bg-[#0F1730] text-white shadow-xs"
                          : "text-[#4A5370] hover:text-[#0F1730] hover:bg-[#F7F4EE]"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-4 h-4 text-[#9AA1B2] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search tools..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#FFFFFF] text-[#0F1730] placeholder-[#9AA1B2] focus:outline-none focus:border-[#FF5A36]"
                  />
                </div>
              </div>
            </div>

            {/* Integration Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`w-11 h-11 rounded-xl ${item.color} text-white font-bold text-xs flex items-center justify-center shadow-sm`}
                        >
                          {item.initials}
                        </span>
                        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#F7F4EE] text-[#4A5370] border border-[#E6E2D8]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg text-[#0F1730] group-hover:text-[#FF5A36] transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-xs font-semibold text-[#FF5A36] mb-2">{item.tagline}</div>
                      <p className="text-xs text-[#4A5370] leading-relaxed">{item.description}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E6E2D8]">
                      <Link
                        to={item.href}
                        className="text-xs font-bold text-[#0F1730] group-hover:text-[#FF5A36] flex items-center justify-between transition-colors"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Split FAQ Section */}
            <DeskmeritFaq
              title="Integrations & API FAQs"
              category="FAQS"
              helpTitle="Building a Custom Tool Integration?"
              helpDescription="Our developer advocacy team provides dedicated guidance for connecting Deskmerit Webhooks and MCP Servers with your in-house engineering systems."
              customFaqs={[
                {
                  q: "How does the Jira and Azure DevOps bi-directional sync work?",
                  a: "When a developer starts work on a Jira issue or Azure DevOps work item, Deskmerit binds active telemetry directly to that work key. Completed session durations and work logs sync back into your project tickets automatically.",
                },
                {
                  q: "Does Deskmerit have an official Model Context Protocol (MCP) server for AI assistants?",
                  a: "Yes. Deskmerit includes a native MCP server allowing AI tools like Claude Code and Cursor to query team bandwidth, active project progress, and sprint velocity via secure natural language.",
                },
                {
                  q: "Are webhooks and REST APIs available on all plans?",
                  a: "REST API tokens and webhook events (time entry created, timer started, attendance finalized) are available on Pro and Enterprise tiers with high rate limits and comprehensive Swagger/OpenAPI specifications.",
                },
                {
                  q: "How does Google Calendar and Outlook meeting detection work?",
                  a: "Deskmerit checks your authenticated corporate calendar for accepted meetings during scheduled shift hours. Meeting slots are automatically credited as active client work without manual clock-ins.",
                },
                {
                  q: "Can we build a custom integration using Zapier or Make?",
                  a: "Yes. The Deskmerit Zapier and webhook connector lets you trigger custom automations in thousands of apps, such as posting daily team summaries to Slack or logging client time to QuickBooks.",
                },
              ]}
            />
          </div>
        )}

        {/* Global Sqalible-style Deskmerit CTA Banner */}
        <DeskmeritCtaBand
          pretitle="Get Started"
          title="Experience automatic time tracking and task binding in action with our engineering specialists."
          trialText="Start free trial"
          demoText="Book a demo"
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}