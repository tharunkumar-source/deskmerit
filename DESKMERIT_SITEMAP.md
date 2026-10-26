# Deskmerit — Complete Website Architecture & Sitemap

> **Document Version:** 2.4.0  
> **Brand Name:** Deskmerit (formerly known as PulseTrack / Sqalible)  
> **Base Domain:** `https://deskmerit.com`  
> **Application Domain:** `https://app.deskmerit.com`  
> **Target Audience:** Modern remote, hybrid, and distributed engineering, agency, BPO, and IT service teams.

---

## 1. Executive Overview

Deskmerit provides transparent, privacy-first, automated time tracking and team telemetry with flat-rate transparent pricing ($2.99 / ₹120 user/mo). The website is organized into 6 core sections accessible via full-width mega menus, top-level actions, and footer matrices, with all in-page navigation pill switchers removed in favor of direct mega menu access.

### Core Navigation Structure

| Navigation Item | Menu Type | Subsections | Total Page URLs |
| :--- | :--- | :--- | :--- |
| **Product** | Mega Menu | Track, Manage, People, Platforms | 15 pages |
| **Solutions** | Mega Menu | By Industry, By Team, By Role, Global Regions | 19 pages |
| **Integrations** | Mega Menu | PM Tools, Calendars, Chat, Dev Tools | 11 pages |
| **Compare** | Mega Menu | Competitor Benchmarks, Trust & Security | 10 pages |
| **Pricing** | Direct Link | Flat-Rate Tiered Calculator, Global Currencies | 1 page |
| **Resources** | Mega Menu | Editorial, Free Calculators, Policy Templates | 9 pages |
| **Company** | Mega Menu | About, Careers, Developers, Legal, DPA | 17 pages |
| **Design System** | Direct / Dev | Color Tokens, Typography, UI Showcase | 3 routes |

---

## 2. Product Pages (15 URLs)

All features focus on privacy-first telemetry without intrusive spy tactics (no keystroke logging, no webcam snapping).

| # | Route | Page Title | Key Capabilities |
| :--- | :--- | :--- | :--- |
| 1 | `/features` | Features Index | Master product capability matrix and feature hub |
| 2 | `/features/automatic-time-tracking` | Automatic Time Tracking | Background zero-effort clocking, idle detection |
| 3 | `/features/productivity-tracking` | Productivity Tracking | Category scoring, productive/unproductive metrics |
| 4 | `/features/tracker-plus` | Tracker Plus | Real-time focus telemetry, flow state analysis |
| 5 | `/features/attendance-tracking` | Attendance Tracking | Shift check-in/out, roster compliance, leaves |
| 6 | `/features/idle-and-private-time` | Idle & Private Time | Privacy mode, manual breaks, personal time masking |
| 7 | `/features/screenshots` | Screenshot Verification | Optional blurred screenshots, privacy-safe audit trails |
| 8 | `/features/project-time-tracking` | Project & Task Tracking | Billable vs non-billable hours, client budgeting |
| 9 | `/features/timesheets-and-reports` | Timesheets & Export Reports | 1-click approvals, CSV/PDF payroll exports |
| 10 | `/features/shift-scheduling` | Shift Scheduling | Roster management, recurring shifts, coverage alerts |
| 11 | `/features/leave-management` | Leave Management | PTO requests, holiday calendars, balance tracking |
| 12 | `/features/document-tracking` | Document Tracking | Active window file path tracking (Figma, VS Code, Docs) |
| 13 | `/features/focus-timer` | Focus Timer | Built-in Pomodoro cycles, distraction blockers |
| 14 | `/features/live-status` | Live Team Status | Real-time who's working pulse board for distributed teams |
| 15 | `/download` | Downloads Center | Desktop native clients (macOS, Windows, Linux) & Mobile |

---

## 3. Solutions Pages (19 URLs)

Tailored use cases by industry vertical, team arrangement, organizational role, and regional labor compliance.

### 3.1 By Industry
| # | Route | Industry | Focus Area |
| :--- | :--- | :--- | :--- |
| 16 | `/solutions` / `/solutions/it-services` | IT Services & Software | Billable client hours, SLA tracking, developer flow |
| 17 | `/solutions/staff-augmentation` | Staff Augmentation | Verified proof of work for remote contractors |
| 18 | `/solutions/agencies` | Creative & Marketing Agencies | Multi-client profitability, retainer tracking |
| 19 | `/solutions/bpo` | BPO & Contact Centers | Shift adherence, schedule compliance, team rosters |
| 20 | `/solutions/professional-services` | Professional Services | Legal, accounting & consultancy audit-grade timesheets |

### 3.2 By Team Structure
| # | Route | Team Type | Focus Area |
| :--- | :--- | :--- | :--- |
| 21 | `/solutions/remote-teams` | Remote Teams | Async accountability, timezone-agnostic work |
| 22 | `/solutions/hybrid-teams` | Hybrid Teams | In-office vs remote parity, hot-desking attendance |
| 23 | `/solutions/office-teams` | Office Teams | Automated workstation check-in, overtime auditing |

### 3.3 By Role
| # | Route | Target Role | Focus Area |
| :--- | :--- | :--- | :--- |
| 24 | `/solutions/hr` | HR & People Operations | Leave balances, attendance audit trails, employee wellbeing |
| 25 | `/solutions/managers` | Engineering & Team Leads | Workload distribution, burnout detection, project velocity |
| 26 | `/solutions/finance` | Finance & Payroll | Accurate billing, contractor payouts, margin reporting |

### 3.4 Enterprise Add-on & Partners
| # | Route | Feature | Focus Area |
| :--- | :--- | :--- | :--- |
| 27 | `/hrms-add-on` | HRMS Integration Suite | Payroll sync with Darwinbox, Keka, BambooHR, Rippling |
| 28 | `/partners/white-label` | White-Label Reseller Edition | Custom branded tracker client for MSPs & agencies |

### 3.5 Regional Localization & Labor Compliance
| # | Route | Country / Region | Regulatory Compliance Standards |
| :--- | :--- | :--- | :--- |
| 29 | `/en-in/` (`/india`) | 🇮🇳 India | Shops & Establishments Act, Indian Leave Rules, GST |
| 30 | `/en-au/` (`/australia`) | 🇦🇺 Australia | Fair Work Act, Modern Awards, NES compliance |
| 31 | `/en-nz/` (`/new-zealand`) | 🇳🇿 New Zealand | Holidays Act 2003, Employment Relations Act |
| 32 | `/en-ae/` (`/uae`) | 🇦🇪 UAE | Federal Decree-Law No. 33, MoHRE, Wages Protection System (WPS) |
| 33 | `/en-sa/` (`/saudi-arabia`) | 🇸🇦 Saudi Arabia | Saudi Labor Law (MHRSD), GOSI social insurance compliance |
| 34 | `/ar/` | 🇸🇦 العربية | Full Right-to-Left (RTL) localized Arabic edition |

---

## 4. Integrations & Developer Ecosystem (11 URLs)

Native 2-way sync with enterprise tools plus AI Agent connectivity via Model Context Protocol (MCP).

| # | Route | Integration Category | Connected Ecosystems |
| :--- | :--- | :--- | :--- |
| 35 | `/integrations` | Integrations Directory | Master ecosystem directory with category filtering |
| 36 | `/integrations/jira` | Project Management | Atlassian Jira issue time logging & sprint syncing |
| 37 | `/integrations/asana` | Project Management | Asana task timer sync & workspace auto-tracking |
| 38 | `/integrations/trello` | Project Management | Trello board card timers & checklist tracking |
| 39 | `/integrations/clickup` | Project Management | ClickUp custom statuses, tasks, and billing sync |
| 40 | `/integrations/slack` | Team Communication | Daily digest, start/stop notifications, status sync |
| 41 | `/integrations/google-calendar` | Calendar & Scheduling | Automated meeting time logging from Google Meet |
| 42 | `/integrations/outlook-calendar` | Calendar & Scheduling | Outlook 365 calendar event time block ingestion |
| 43 | `/integrations/github` | Developer Tools | Commit & PR linked task tracking for engineers |
| 44 | `/developers` | Developer Hub | REST API docs, Webhooks sandbox, API key management |
| 45 | `/developers/mcp-server` | MCP Server (AI Agents) | Anthropic Claude / AI agents telemetry query integration |

---

## 5. Competitor Comparisons & Trust (10 URLs)

In-depth honest comparative rubrics demonstrating Deskmerit's privacy-first, affordable advantage over legacy spyware.

### 5.1 Competitor Benchmarks
| # | Route | Comparison | Core Differentiator |
| :--- | :--- | :--- | :--- |
| 46 | `/compare` | Competitor Hub | Complete feature & pricing breakdown across 6 vendors |
| 47 | `/compare/desktime-alternative` | vs DeskTime | Flexible pricing ($2.99 vs $7), private offline mode |
| 48 | `/compare/hubstaff-alternative` | vs Hubstaff | No aggressive keystroke spyware; flat price without add-on fees |
| 49 | `/compare/time-doctor-alternative` | vs Time Doctor | Modern UI, ethical telemetry, no mandatory invasive video capture |
| 50 | `/compare/activtrak-alternative` | vs ActivTrak | Affordable for SMBs, transparent employee dashboard access |
| 51 | `/compare/toggl-alternative` | vs Toggl Track | Automated background tracking with team shifts (not just manual timer) |
| 52 | `/compare/time-champ-alternative` | vs Time Champ | Global data residency, modern sleek lightweight agent app |

### 5.2 Trust & Security
| # | Route | Focus | Architecture Standards |
| :--- | :--- | :--- | :--- |
| 53 | `/security` | Enterprise Security | AES-256 data at rest, TLS 1.3 in transit, SOC2 roadmap |
| 54 | `/privacy-promise` | Privacy Promise | Non-invasive surveillance pledge, transparent employee rights |
| 55 | `/trust` | Trust Center | Global data centers (US, EU, IN), uptime, compliance audits |

---

## 6. Pricing (1 URL)

| # | Route | Page Title | Structure |
| :--- | :--- | :--- | :--- |
| 56 | `/pricing` | Pricing Calculator | Transparent flat rate: **$2.99 USD / ₹120 INR** per user/month. Includes live team-size calculator and currency switcher. |

---

## 7. Resources & Free Tools (9 URLs)

Educational content, free interactive ROI calculators, and legal policy templates.

### 7.1 Editorial & Legal Guides
| # | Route | Content Type | Subject |
| :--- | :--- | :--- | :--- |
| 57 | `/blog` | Blog & Editorial | Thought leadership on async management & engineering efficiency |
| 58 | `/guides/employee-monitoring-laws` | Legal Guide | Comprehensive global guide on legal limits of workplace tracking |
| 59 | `/guides/employee-monitoring-laws/india` | Regional Legal Guide | Indian IT Act, DPDP Act 2023, and state labor regulations |

### 7.2 Interactive Tools
| # | Route | Tool Name | Purpose |
| :--- | :--- | :--- | :--- |
| 60 | `/tools` / `/tools/utilisation-calculator` | Utilisation Calculator | Calculate team billable utilization % against revenue goals |
| 61 | `/tools/overtime-calculator` | Overtime Calculator | Calculate statutory overtime costs and budget implications |

### 7.3 Downloadable Business Templates
| # | Route | Template Name | Format & Scope |
| :--- | :--- | :--- | :--- |
| 62 | `/templates` / `/templates/timesheet-template` | Timesheet Template | Ready-to-use Excel / Google Sheets weekly/bi-weekly timesheets |
| 63 | `/templates/employee-monitoring-policy` | Monitoring Policy Template | Pre-drafted privacy-first HR workplace monitoring policy |

### 7.4 Docs & Knowledge Base
| # | Route | Destination | Purpose |
| :--- | :--- | :--- | :--- |
| 64 | `/docs` | `/developers` | API endpoints, authentication, and webhook payload schemas |
| 65 | `/help` | `/blog` | Support guides, setup walk-throughs, and FAQ |

---

## 8. Company, Developers & Legal (17 URLs)

Corporate background, partner network, hiring, and legal compliance register.

### 8.1 Company & Conversion
| # | Route | Section | Purpose |
| :--- | :--- | :--- | :--- |
| 66 | `/about` | About Deskmerit | Founder vision, values, remote-first global culture |
| 67 | `/careers` | Careers | Engineering, sales & product openings (remote) |
| 68 | `/partners` | Partner Network | Reseller, implementation partner & affiliate program |
| 69 | `/press` | Press & Media Kit | Brand assets, vector logos, executive bios, press releases |
| 70 | `/contact` | Contact Us | General inquiry and enterprise sales routing |
| 71 | `/demo` | Book a Demo | Calendar booking for custom 1-on-1 team demonstration |
| 72 | `/signup` | Free Trial Signup | 14-day full feature trial workspace setup |
| 73 | `/login` / `/app` | App Portal | Existing organization user authentication |

### 8.2 Developer Infrastructure & System
| # | Route | Section | Purpose |
| :--- | :--- | :--- | :--- |
| 74 | `/changelog` | Release Notes | Weekly ship log of features, fixes, and improvements |
| 75 | `/status` | System Status | Live uptime status of tracking ingress, web app, and database |

### 8.3 Legal & Compliance Documents
| # | Route | Legal Document | Regulatory Alignment |
| :--- | :--- | :--- | :--- |
| 76 | `/legal/terms` | Terms of Service | Subscription terms, acceptable use, liability limits |
| 77 | `/legal/privacy` | Privacy Policy | GDPR (EU), CCPA (US), and DPDP (India) compliant |
| 78 | `/legal/dpa` | Data Processing Agreement | Standard Contractual Clauses (SCCs) for enterprise customers |
| 79 | `/legal/subprocessors` | Sub-processors Register | List of infrastructure vendors (AWS, Cloudflare, Postmark) |
| 80 | `/legal/cookies` | Cookie Policy | Technical, analytical, and preference cookies declaration |
| 81 | `/legal/sla` | Service Level Agreement | 99.9% uptime commitment, credit schedule for downtime |

---

## 9. Brand Guidelines & Internal Design System (3 URLs)

| # | Route | Purpose | Key Artifacts |
| :--- | :--- | :--- | :--- |
| 82 | `/brand-guidelines` | Brand Styleguide | Official Deskmerit color tokens, fonts, voice, logo assets |
| 83 | `/design-system` | UI Component Gallery | Interactive buttons, inputs, cards, typography styles |
| 84 | `/brand` | Brand Identity Quick-link | Direct shortcut to brand assets and color palettes |

---

## 10. Design System Tokens Applied

All pages adhere to the official Deskmerit design tokens:

```typescript
export const brandColors = {
  midnight: "#0F1730",   // Primary Dark: Text, deep backgrounds, footer
  ember: "#FF5A36",      // Primary Accent: CTAs, focus indicators, badges
  paper: "#F7F4EE",      // Background Neutral: Crisp warm background
  dusk: "#24305A",       // Secondary Dark: Card headers, secondary buttons
  slate: "#4A5370",      // Body Muted: Secondary text, descriptions
  mist: "#E6E2D8",       // Border Light: Section dividers, card borders
  emberLight: "#FFE6DF", // Accent Tint: Hover backgrounds, badges
  pureWhite: "#FFFFFF",  // Surface: Cards, modals, mega menus
};
```

---

*Generated by Deskmerit Architecture Engineering Team. All routes active and routed in React Router DOM.*
