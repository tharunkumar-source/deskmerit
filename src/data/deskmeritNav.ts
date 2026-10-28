export interface NavMegaItem {
  name: string;
  href: string;
  description?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface NavMegaColumn {
  title: string;
  items: NavMegaItem[];
}

export const PRODUCT_MENU = {
  columns: [
    {
      title: "Track",
      items: [
        { name: "Features overview", href: "/features", description: "Explore the complete suite of 14 time tracking modules" },
        { name: "Automatic time tracking", href: "/features/automatic-time-tracking", description: "Computer time from the moment the agent starts" },
        { name: "Productivity tracking", href: "/features/productivity-tracking", description: "App, URL and document title scoring per role" },
        { name: "Document tracking", href: "/features/document-tracking", description: "Time per file and document — titles only, never content" },
        { name: "Live status", href: "/features/live-status", description: "Tracking, Idle, Private or Offline in real time" },
        { name: "Focus timer", href: "/features/focus-timer", description: "Pomodoro-style work and break intervals" },
      ],
    },
    {
      title: "Bill & report",
      items: [
        { name: "Tracker Plus", href: "/features/tracker-plus", isPopular: true, description: "Start tracking straight from Jira, Azure DevOps or OpenProject" },
        { name: "Project time & billing", href: "/features/project-time-tracking", description: "Rates per person and project, budget alerts" },
        { name: "Timesheets & reports", href: "/features/timesheets-and-reports", description: "Excel & CSV exports that match on-screen totals" },
      ],
    },
    {
      title: "People",
      items: [
        { name: "Attendance tracking", href: "/features/attendance-tracking", description: "Presence from tracked work, calendar and offline time" },
        { name: "Shift scheduling", href: "/features/shift-scheduling", description: "Shift templates, late and overtime flags" },
        { name: "Leave management", href: "/features/leave-management", description: "Requests, approvals and shared team absence calendar" },
        { name: "Idle & Private Time", href: "/features/idle-and-private-time", description: "Visible pauses, never miscounted as idle slacking" },
        { name: "Screenshots", href: "/features/screenshots", description: "Off by default, blurred by default, announced" },
        { name: "Download desktop agent", href: "/download", description: "Native background app for macOS, Windows, and Linux" },
      ],
    },
  ],
  bottomLinks: [
    { label: "All features →", href: "/features" },
    { label: "Download →", href: "/download" },
    { label: "Security →", href: "/security" },
    { label: "Privacy promise →", href: "/privacy-promise" },
  ],
};

export const SOLUTIONS_MENU = {
  columns: [
    {
      title: "By industry",
      items: [
        { name: "IT services", href: "/solutions/it-services", description: "Prove every billable hour your engineers work" },
        { name: "Staff augmentation", href: "/solutions/staff-augmentation", description: "One tracker across all clients and contractor accounts" },
        { name: "Agencies", href: "/solutions/agencies", description: "Know which clients and retainers are profitable" },
        { name: "BPO & contact centres", href: "/solutions/bpo", description: "Shift adherence and attendance across rotating rosters" },
        { name: "Consulting & accounting", href: "/solutions/professional-services", description: "Capture billable time you give away in 6-min units" },
      ],
    },
    {
      title: "By team",
      items: [
        { name: "Remote teams", href: "/solutions/remote-teams", description: "Outcomes over webcams, timezones handled" },
        { name: "Hybrid teams", href: "/solutions/hybrid-teams", description: "One fair record for home and office days" },
        { name: "Office teams", href: "/solutions/office-teams", description: "Replace biometric hardware queues" },
        { name: "HR", href: "/solutions/hr", description: "Attendance records and audit trails HR can stand behind" },
        { name: "Managers", href: "/solutions/managers", description: "Lead teams with transparent facts, not feelings" },
        { name: "Finance", href: "/solutions/finance", description: "Project profitability and labour cost variance" },
      ],
    },
    {
      title: "By region",
      items: [
        { name: "India (₹ INR)", href: "/en-in", description: "DPDP Act readiness, GST invoices, ₹299/mo" },
        { name: "Australia (A$ AUD)", href: "/en-au", description: "NSW Surveillance Act 14-day notice support, A$8/mo" },
        { name: "New Zealand (NZ$ NZD)", href: "/en-nz", description: "Privacy Act 2020 transparency, NZ$9/mo" },
        { name: "UAE (AED)", href: "/en-ae", description: "Dubai/Abu Dhabi attendance, Mon–Fri / Sun–Thu shifts" },
        { name: "Saudi Arabia (SAR)", href: "/en-sa", description: "Saudi PDPL readiness, SAR pricing, Sunday–Thursday" },
        { name: "Arabic home (العربية)", href: "/ar", description: "برنامج مراقبة وتتبع وقت الموظفين" },
      ],
    },
  ],
  bottomLinks: [
    { label: "HRMS add-on (Sqalible) →", href: "/hrms-add-on" },
    { label: "White-label for resellers →", href: "/partners/white-label" },
  ],
};

export const INTEGRATIONS_MENU = {
  columns: [
    {
      title: "Developer & sprint",
      items: [
        { name: "Jira Software", href: "/integrations/jira", description: "Sprint issue sync and real-time ticket timers with personal tokens" },
        { name: "Azure DevOps", href: "/integrations/azure-devops", description: "Boards, work items, and sprint planning direct timer integration" },
        { name: "Linear", href: "/integrations/linear", description: "Bring Linear teams, issues and cycles directly into Deskmerit" },
        { name: "Asana", href: "/integrations/asana", description: "Sync Asana projects, portfolios and tasks for time tracking" },
        { name: "ClickUp", href: "/integrations/clickup", description: "Import spaces, lists and tasks from ClickUp workspaces" },
        { name: "Trello", href: "/integrations/trello", description: "Attribute logged hours directly to Trello board cards and sprint lists" },
        { name: "GitLab", href: "/integrations/gitlab", description: "Map engineering hours against GitLab issues, MRs and release milestones" },
        { name: "OpenProject", href: "/integrations/openproject", description: "Open-source project tracking and work package time records" },
      ],
    },
    {
      title: "Calendars & comms",
      items: [
        { name: "Google Calendar", href: "/integrations/google-calendar", description: "Automatically convert calendar events and Google Meet calls to time logs" },
        { name: "Outlook Calendar", href: "/integrations/outlook-calendar", description: "Office 365 calendar meeting sync with project allocation" },
        { name: "Slack", href: "/integrations/slack", description: "Daily standup digests, start/stop commands, and status sync" },
        { name: "Microsoft Teams", href: "/integrations/microsoft-teams", description: "Teams presence status synchronization and meeting tracking" },
      ],
    },
    {
      title: "Automation & HRMS",
      items: [
        { name: "Zapier", href: "/integrations/zapier", description: "Trigger automated actions across 5,000+ cloud business apps" },
        { name: "Make", href: "/integrations/make", description: "Visual automated workflows, webhooks, and multi-step scenarios" },
        { name: "Sqalible HRMS", href: "/integrations/sqalible", description: "Native HRMS time tracking, payroll, and leave balance integration" },
      ],
    },
    {
      title: "Developers & AI",
      items: [
        { name: "Claude MCP Server", href: "/developers/mcp-server", description: "Connect Claude and AI coding agents to live workforce data" },
        { name: "REST API & Webhooks", href: "/developers/api", description: "Versioned REST endpoints with webhooks, OpenAPI specs, and SDKs" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Integrations directory →", href: "/integrations" },
    { label: "Claude MCP AI server →", href: "/developers/mcp-server" },
    { label: "Tracker Plus for Jira →", href: "/features/tracker-plus" },
  ],
};

export const RESOURCES_MENU = {
  columns: [
    {
      title: "Learn",
      items: [
        { name: "Blog", href: "/blog", description: "Ideas on productivity, remote work, attendance and law" },
        { name: "Monitoring-law guides", href: "/guides/employee-monitoring-laws", description: "Country-by-country legal guides (India, AU, NZ, UAE, SA)" },
        { name: "Glossary", href: "/glossary", description: "Workforce terminology from billable utilisation to idle time" },
      ],
    },
    {
      title: "Free tools & calculators",
      items: [
        { name: "Utilisation calculator", href: "/tools/utilisation-calculator", description: "Calculate billable utilisation in seconds" },
        { name: "Overtime calculator", href: "/tools/overtime-calculator", description: "Work out overtime pay with country presets" },
        { name: "All free tools", href: "/tools", description: "Browse all interactive workforce calculators" },
      ],
    },
    {
      title: "Policy & templates",
      items: [
        { name: "Timesheet template", href: "/templates/timesheet-template", description: "Free weekly timesheet for Excel and Google Sheets" },
        { name: "Monitoring policy template", href: "/templates/employee-monitoring-policy", description: "A fair employee monitoring policy you can adapt" },
        { name: "Templates hub", href: "/templates", description: "Free downloadable operational templates" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Help centre ↗", href: "https://help.deskmerit.io", external: true },
    { label: "Monitoring-law guides →", href: "/guides/employee-monitoring-laws" },
    { label: "Utilisation calculator →", href: "/tools/utilisation-calculator" },
  ],
};

export const COMPARE_MENU = {
  columns: [
    {
      title: "Competitor comparisons",
      items: [
        { name: "vs DeskTime", href: "/compare/desktime-alternative", description: "Built around your PM tasks and HRMS, free plan" },
        { name: "vs Hubstaff", href: "/compare/hubstaff-alternative", description: "Privacy-first tracking for desk teams without GPS creep" },
        { name: "vs Time Doctor", href: "/compare/time-doctor-alternative", description: "Accountability without the surveillance overload" },
        { name: "vs ActivTrak", href: "/compare/activtrak-alternative", description: "Workforce insights without enterprise complexity" },
        { name: "vs Toggl Track", href: "/compare/toggl-alternative", description: "Automatic background tracking without forgotten timers" },
        { name: "vs Time Champ", href: "/compare/time-champ-alternative", description: "Starts from Jira/Azure tickets with Sqalible HRMS" },
      ],
    },
    {
      title: "Trust & security",
      items: [
        { name: "Security architecture", href: "/security", description: "Encryption in transit & at rest, multi-region residency, strict zero-keystrokes" },
        { name: "Privacy promise", href: "/privacy-promise", description: "Designed for both sides of the screen — no webcams, no keylogging" },
        { name: "Trust Center", href: "/trust", description: "SOC2 Type II, ISO 27001, and regional statutory compliance proofs" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Compare all time trackers →", href: "/compare" },
    { label: "Security architecture →", href: "/security" },
    { label: "Privacy promise →", href: "/privacy-promise" },
  ],
};

export const COMPANY_MENU = {
  columns: [
    {
      title: "Company",
      items: [
        { name: "About us", href: "/about", description: "Our mission to bring trust and dignity back to workforce time" },
        { name: "Careers", href: "/careers", description: "Join our globally distributed engineering & product team" },
        { name: "Partners", href: "/partners", description: "White-label resellers, consulting and system integrators" },
        { name: "Press & media", href: "/press", description: "Official logos, brand assets, and press releases" },
        { name: "Contact", href: "/contact", description: "Speak with enterprise sales or product specialists" },
        { name: "Book a demo", href: "/demo", description: "1-on-1 walkthrough tailored to your team's workflow" },
      ],
    },
    {
      title: "Developers & API",
      items: [
        { name: "Developers overview", href: "/developers", description: "REST API, webhook webhooks, and OpenAPI specifications" },
        { name: "Claude MCP AI server", href: "/developers/mcp-server", description: "Connect Claude and AI coding agents to live workforce data" },
        { name: "API documentation", href: "/developers/api", description: "Interactive endpoint explorer and code samples" },
        { name: "Product changelog", href: "/changelog", description: "Weekly release updates, improvements, and fixes" },
      ],
    },
    {
      title: "Legal & compliance",
      items: [
        { name: "Terms of Service", href: "/legal/terms", description: "Standard enterprise terms and SaaS agreement" },
        { name: "Privacy Policy", href: "/legal/privacy", description: "Transparent details on how user data is handled" },
        { name: "Data Processing Agreement", href: "/legal/dpa", description: "GDPR, DPDP, and Australian Privacy Principles DPA" },
        { name: "Sub-processors", href: "/legal/subprocessors", description: "Complete public directory of cloud infrastructure providers" },
        { name: "Cookie Policy", href: "/legal/cookies", description: "Essential and analytics cookie disclosures" },
        { name: "Service Level Agreement", href: "/legal/sla", description: "99.95% uptime commitment and response guarantees" },
      ],
    },
  ],
  bottomLinks: [
    { label: "About Deskmerit →", href: "/about" },
    { label: "Partner program →", href: "/partners" },
    { label: "MCP AI server →", href: "/developers/mcp-server" },
    { label: "Terms & Privacy →", href: "/legal/terms" },
  ],
};

export const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Features overview", href: "/features" },
      { label: "Tracker Plus", href: "/features/tracker-plus" },
      { label: "Automatic time tracking", href: "/features/automatic-time-tracking" },
      { label: "Productivity tracking", href: "/features/productivity-tracking" },
      { label: "Attendance tracking", href: "/features/attendance-tracking" },
      { label: "Document tracking", href: "/features/document-tracking" },
      { label: "Live status", href: "/features/live-status" },
      { label: "Focus timer", href: "/features/focus-timer" },
      { label: "Project time & billing", href: "/features/project-time-tracking" },
      { label: "Timesheets & reports", href: "/features/timesheets-and-reports" },
      { label: "Shift scheduling", href: "/features/shift-scheduling" },
      { label: "Leave management", href: "/features/leave-management" },
      { label: "Idle & Private Time", href: "/features/idle-and-private-time" },
      { label: "Screenshots", href: "/features/screenshots" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download desktop agent", href: "/download" },
      { label: "Security architecture", href: "/security" },
      { label: "Privacy promise", href: "/privacy-promise" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "IT services", href: "/solutions/it-services" },
      { label: "Staff augmentation", href: "/solutions/staff-augmentation" },
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "BPO & contact centres", href: "/solutions/bpo" },
      { label: "Consulting & accounting", href: "/solutions/professional-services" },
      { label: "Remote teams", href: "/solutions/remote-teams" },
      { label: "Hybrid teams", href: "/solutions/hybrid-teams" },
      { label: "Office teams", href: "/solutions/office-teams" },
      { label: "HR", href: "/solutions/hr" },
      { label: "Managers", href: "/solutions/managers" },
      { label: "Finance", href: "/solutions/finance" },
      { label: "HRMS add-on", href: "/hrms-add-on" },
      { label: "White-label for resellers", href: "/partners/white-label" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "Integrations overview", href: "/integrations" },
      { label: "Jira Software", href: "/integrations/jira" },
      { label: "Azure DevOps", href: "/integrations/azure-devops" },
      { label: "Linear", href: "/integrations/linear" },
      { label: "Asana", href: "/integrations/asana" },
      { label: "ClickUp", href: "/integrations/clickup" },
      { label: "Trello", href: "/integrations/trello" },
      { label: "GitLab", href: "/integrations/gitlab" },
      { label: "OpenProject", href: "/integrations/openproject" },
      { label: "Google Calendar", href: "/integrations/google-calendar" },
      { label: "Outlook Calendar", href: "/integrations/outlook-calendar" },
      { label: "Slack", href: "/integrations/slack" },
      { label: "Microsoft Teams", href: "/integrations/microsoft-teams" },
      { label: "Zapier", href: "/integrations/zapier" },
      { label: "Make", href: "/integrations/make" },
      { label: "Sqalible HRMS", href: "/integrations/sqalible" },
      { label: "Claude MCP Server", href: "/developers/mcp-server" },
      { label: "REST API & Webhooks", href: "/developers/api" },
    ],
  },
  {
    title: "Compare & Trust",
    links: [
      { label: "vs DeskTime", href: "/compare/desktime-alternative" },
      { label: "vs Hubstaff", href: "/compare/hubstaff-alternative" },
      { label: "vs Time Doctor", href: "/compare/time-doctor-alternative" },
      { label: "vs ActivTrak", href: "/compare/activtrak-alternative" },
      { label: "vs Toggl Track", href: "/compare/toggl-alternative" },
      { label: "vs Time Champ", href: "/compare/time-champ-alternative" },
      { label: "All comparisons", href: "/compare" },
      { label: "Security architecture", href: "/security" },
      { label: "Privacy promise", href: "/privacy-promise" },
      { label: "Trust Center", href: "/trust" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Monitoring-law guides", href: "/guides/employee-monitoring-laws" },
      { label: "Glossary", href: "/glossary" },
      { label: "All free tools", href: "/tools" },
      { label: "Utilisation calculator", href: "/tools/utilisation-calculator" },
      { label: "Overtime calculator", href: "/tools/overtime-calculator" },
      { label: "Templates hub", href: "/templates" },
      { label: "Timesheet template", href: "/templates/timesheet-template" },
      { label: "Monitoring policy template", href: "/templates/employee-monitoring-policy" },
      { label: "Help centre", href: "https://help.deskmerit.io", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Press & media", href: "/press" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/demo" },
      { label: "Start free trial", href: "/signup" },
      { label: "Log in", href: "/login" },
      { label: "Developers overview", href: "/developers" },
      { label: "Claude MCP AI server", href: "/developers/mcp-server" },
      { label: "API documentation", href: "/developers/api" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Regions",
    links: [
      { label: "India (₹ INR)", href: "/en-in" },
      { label: "Australia (A$ AUD)", href: "/en-au" },
      { label: "New Zealand (NZ$ NZD)", href: "/en-nz" },
      { label: "UAE (AED)", href: "/en-ae" },
      { label: "Saudi Arabia (SAR)", href: "/en-sa" },
      { label: "Arabic home (العربية)", href: "/ar" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Data Processing Agreement", href: "/legal/dpa" },
      { label: "Sub-processors", href: "/legal/subprocessors" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Service Level Agreement", href: "/legal/sla" },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Data Processing Agreement (DPA)", href: "/legal/dpa" },
  { label: "Sub-processors", href: "/legal/subprocessors" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Service Level Agreement (SLA)", href: "/legal/sla" },
];
