import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import {
  BookOpen,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Scale,
  Clock,
  Briefcase,
  Users,
  Copy,
  Check,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

export interface GlossaryTerm {
  term: string;
  slug: string;
  category: "Time & Attendance" | "Billing & Utilization" | "Privacy & Compliance" | "Engineering Productivity" | "Shift & Scheduling";
  shortDefinition: string;
  detailedExplanation: string;
  formulaOrStandard?: string;
  whyItMatters: string;
  deskmeritApproach: string;
  relatedTerms: string[];
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Active Time",
    slug: "active-time",
    category: "Time & Attendance",
    shortDefinition: "The verified cumulative duration during which an employee generates physical keyboard, mouse, or touch input on a designated workstation.",
    detailedExplanation: "Unlike passive login duration (which merely registers that a computer is powered on or an application is open in the background), active time measures continuous human engagement. Idle periods exceeding a preconfigured threshold (typically 3 to 5 minutes of input cessation) are automatically paused from the active time counter.",
    formulaOrStandard: "Active Time = Total Session Time - Verified Idle Duration",
    whyItMatters: "Eliminates inflated timesheets caused by unattended workstations, open browsers, or forgotten end-of-day clockouts.",
    deskmeritApproach: "Deskmerit listens to OS-level hardware input events without recording key sequences. If input ceases for 3 minutes, the session is flagged as idle, giving the employee 1-click authority to categorize it as meeting, break, or private time upon return.",
    relatedTerms: ["Idle Detection", "Productive Time", "Defensible Timesheets", "Private Time"],
  },
  {
    term: "Automatic Shift Adherence",
    slug: "automatic-shift-adherence",
    category: "Shift & Scheduling",
    shortDefinition: "The mathematical comparison between an employee's scheduled roster window and their actual timestamped check-in and checkout events.",
    detailedExplanation: "In multi-shift environments (such as 24/7 technical support or follow-the-sun DevOps squads), tracking whether team members arrive within grace windows (e.g., ±15 minutes) is vital for SLA coverage. Automated shift adherence maps real-time agent presence against rostered shift schedules without requiring manual punch cards.",
    formulaOrStandard: "Adherence Rate = (Minutes Worked Within Scheduled Shift / Total Scheduled Shift Minutes) × 100%",
    whyItMatters: "Prevents understaffed client handovers, identifies chronic tardiness patterns objectively, and flags unnotified absences before client SLAs are breached.",
    deskmeritApproach: "Deskmerit automatically detects when an employee starts work, attributes their activity to the scheduled shift (including overnight midnight-crossing rosters), and computes punctuality metrics without invasive biometric hardware.",
    relatedTerms: ["Midnight Crossing Shifts", "Leave Accrual & PTO", "Core Hours & Flextime"],
  },
  {
    term: "Bench Time (Unallocated Capacity)",
    slug: "bench-time",
    category: "Billing & Utilization",
    shortDefinition: "The duration during which a full-time salaried employee is available to work but has not been assigned to a billable client contract or revenue-generating milestone.",
    detailedExplanation: "Common in IT services, systems integrators, and software consultancies, bench time represents direct payroll overhead. Managing bench time involves tracking whether unallocated engineers are engaged in internal accelerators, certification training, or proposal sprints rather than drifting unmonitored.",
    formulaOrStandard: "Bench Cost = Unallocated Hours × (Base Hourly Salary + Allocated Overhead)",
    whyItMatters: "Unmonitored bench capacity directly erodes gross operating margins. Visibility into bench velocity enables resource managers to staff incoming client RFPs faster.",
    deskmeritApproach: "Deskmerit isolates non-billable bench hours into dedicated internal tracking buckets, allowing leaders to see whether bench talent is actively upskilling or idling between project deployments.",
    relatedTerms: ["Billable Utilization Rate", "Non-Billable Overhead", "Work-In-Progress (WIP) Limit"],
  },
  {
    term: "Billable Utilization Rate",
    slug: "billable-utilization-rate",
    category: "Billing & Utilization",
    shortDefinition: "The proportion of an employee's total logged working hours that can be directly billed to an external client or revenue-producing project.",
    detailedExplanation: "Utilization rate is the north star metric for agencies, consultancies, and engineering contractors. A benchmark utilization rate of 75% to 85% is typically considered healthy for senior ICs, leaving sufficient capacity for mandatory company all-hands, mentoring, and administrative governance.",
    formulaOrStandard: "Utilization % = (Total Client Billable Hours / Total Logged Working Hours) × 100%",
    whyItMatters: "Provides the underlying data needed for capacity forecasting, project pricing, and hiring decisions. Protects teams from systemic burnout caused by unsustainable 95%+ utilization targets.",
    deskmeritApproach: "Deskmerit breaks down work logs by billable client tags, project milestones, and Jira ticket IDs, generating clean utilization histograms that leaders can filter by squad, department, or office location.",
    relatedTerms: ["Bench Time", "Non-Billable Overhead", "Defensible Timesheets"],
  },
  {
    term: "Biometric Attendance Exemption",
    slug: "biometric-attendance-exemption",
    category: "Privacy & Compliance",
    shortDefinition: "An architectural privacy design that replaces physical fingerprint scanners and facial recognition cameras with software-verified workstation activity.",
    detailedExplanation: "Biometric data collection carries severe regulatory liabilities under GDPR (Article 9 special category data), BIPA (Illinois Biometric Information Privacy Act), and India's DPDP Act. A biometric exemption architecture verifies employee presence and working hours strictly through cryptographic session telemetry and active workstation interaction.",
    formulaOrStandard: "Presence Verification = Hardware Event Daemon + SSO Token Authentication (Zero Biometric Storage)",
    whyItMatters: "Protects enterprise employers from catastrophic biometric data breach liabilities, expensive scanning hardware upkeep, and employee union grievances.",
    deskmeritApproach: "Deskmerit never captures, transmits, or stores fingerprints, facial geometry, or retinal data. Presence is verified via signed desktop telemetry matched against corporate SSO logins.",
    relatedTerms: ["Zero Surveillance Architecture", "GDPR Article 88", "Employee Audit Priority"],
  },
  {
    term: "Blurred Screenshots",
    slug: "blurred-screenshots",
    category: "Privacy & Compliance",
    shortDefinition: "An optional audit mechanism where desktop screenshots are processed through an obfuscation filter (Gaussian blur) before uploading, rendering text illegible while confirming workflow context.",
    detailedExplanation: "Traditional screen capture monitoring tools frequently record sensitive employee passwords, client banking details, private medical portals, and internal confidential IP. Blurred screenshots destroy high-frequency text resolution while preserving macro layout colors, confirming that an employee is in an IDE or spreadsheets without exposing raw data.",
    formulaOrStandard: "Visual Redaction = GaussianBlur(Radius: 18px - 25px) + In-App Screenshot Broadcast Notice",
    whyItMatters: "Fulfills enterprise client compliance audits while eliminating the risk of accidental trade secret leaks or employee privacy violations.",
    deskmeritApproach: "Screenshots in Deskmerit are strictly disabled by default. If enabled for high-security client contracts, they are blurred, announced to the employee via desktop tray banner, and stored with automatic 30-day retention shredding.",
    relatedTerms: ["Keystroke Logging (Keylogger)", "Employee Audit Priority", "Zero Surveillance Architecture"],
  },
  {
    term: "Core Hours & Flextime",
    slug: "core-hours-and-flextime",
    category: "Shift & Scheduling",
    shortDefinition: "A modern workplace policy requiring team members to be online and available during synchronized core overlap hours, while scheduling peripheral hours at their discretion.",
    detailedExplanation: "Distributed teams spanning multi-hour timezones utilize core hours (e.g., 1:00 PM to 5:00 PM local time) for team standups, customer demonstrations, and code reviews. The remaining 4 hours of the workday can be completed early in the morning or late at night without penalty.",
    formulaOrStandard: "Daily Compliance = (100% Core Hours Overlap Verified) AND (Total Working Hours >= 8.0 hrs)",
    whyItMatters: "Empowers asynchronous knowledge workers with personal schedule autonomy without sacrificing collaborative alignment and responsive customer support.",
    deskmeritApproach: "Deskmerit allows organizations to configure flexible shift bands with designated core overlap windows, celebrating total output and goal completion rather than rigid 9-to-5 desk lock-in.",
    relatedTerms: ["Automatic Shift Adherence", "Midnight Crossing Shifts", "Private Time"],
  },
  {
    term: "Defensible Timesheets",
    slug: "defensible-timesheets",
    category: "Billing & Utilization",
    shortDefinition: "Time logs and invoicing records backed by objective, timestamped telemetry that withstand rigorous third-party client audits and statutory labor inspections.",
    detailedExplanation: "Manual timesheets filled out on Friday afternoons are notorious for guesswork, rounded numbers, and retroactive padding. A defensible timesheet ties every logged hour to verifiable computer presence, active project timers, or synced Google Calendar invites.",
    formulaOrStandard: "Defensible Record = Timestamp + Synced PM Issue Key + Validated Active Telemetry + Employee Signature",
    whyItMatters: "Eliminates invoice disputes, prevents delayed client milestone sign-offs, and shields organizations from billing fraud allegations.",
    deskmeritApproach: "Deskmerit captures second-by-second task transitions directly from Jira, Azure DevOps, and calendar meetings, producing exportable CSV/PDF audit trails that client CFOs accept immediately without pushback.",
    relatedTerms: ["Billable Utilization Rate", "Active Time", "Jira Two-Way Sync"],
  },
  {
    term: "Electronic Communications Privacy Act (ECPA)",
    slug: "electronic-communications-privacy-act",
    category: "Privacy & Compliance",
    shortDefinition: "United States federal statute (18 U.S.C. §§ 2510-2523) regulating the interception, monitoring, and disclosure of electronic wire, oral, and computer communications.",
    detailedExplanation: "Under the ECPA, employers generally may monitor electronic communications on company-owned equipment for legitimate business purposes provided clear prior disclosure and written policy acknowledgement have been executed. Covert wiretapping or intercepting purely personal communications outside work scope introduces severe legal liability.",
    formulaOrStandard: "Legal Compliance = Clear Prior Employee Notice + Legitimate Business Purpose + Proportional Scope",
    whyItMatters: "Operating tracking software without clear employee policy notification violates federal and state wiretapping statutes, risking statutory financial damages and criminal sanctions.",
    deskmeritApproach: "Deskmerit operates with total transparency: zero covert background spyware, zero hidden process names, clear desktop indicators whenever tracking is active, and downloadable employee handbooks.",
    relatedTerms: ["GDPR Article 88", "Zero Surveillance Architecture", "Keystroke Logging (Keylogger)"],
  },
  {
    term: "Employee Audit Priority (Self-Review Right)",
    slug: "employee-audit-priority",
    category: "Privacy & Compliance",
    shortDefinition: "The architectural principle guaranteeing that an employee has the right to inspect, review, and annotate their own daily timeline before it is aggregated for managerial oversight.",
    detailedExplanation: "Traditional monitoring treats employees as suspects under surveillance. Employee audit priority reverses this dynamic: workers see exactly what was tracked, can delete personal breaks or accidentally logged doctor appointments, and submit a finalized, honest record of their day.",
    formulaOrStandard: "Employee First Visibility = Timeline Available to IC Instantly; Synced to Admin on Daily Batch",
    whyItMatters: "Builds psychological safety, reduces software circumvention (e.g. mouse jigglers), and fosters a company culture grounded in mutual accountability.",
    deskmeritApproach: "Deskmerit's desktop client gives every individual developer their own real-time dashboard. If a screenshot was taken during an unexpected personal notification, the developer can delete or blur that segment with one click.",
    relatedTerms: ["Private Time", "Blurred Screenshots", "Zero Surveillance Architecture"],
  },
  {
    term: "GDPR Article 88 (Workplace Data Processing)",
    slug: "gdpr-article-88",
    category: "Privacy & Compliance",
    shortDefinition: "European Union General Data Protection Regulation provision authorizing member states to enact specific rules governing the processing of employees' personal data in the employment context.",
    detailedExplanation: "Article 88 mandates that any monitoring of workers must safeguard human dignity, legitimate interests, and fundamental rights. European Data Protection Authorities (such as France's CNIL, Germany's BfDI, and the UK ICO) strictly prohibit continuous automated screen recording, keyloggers, and webcam telemetry.",
    formulaOrStandard: "Proportionality Test: Is the monitoring method strictly necessary, minimal in scope, and non-intrusive?",
    whyItMatters: "Fines under GDPR reach up to €20,000,000 or 4% of total worldwide annual turnover, whichever is higher, alongside employee works council bans.",
    deskmeritApproach: "Deskmerit is engineered specifically to satisfy EU works councils and GDPR requirements, providing zero-knowledge encryption, no continuous video streaming, and complete data subject access request (DSAR) export tools.",
    relatedTerms: ["Zero Surveillance Architecture", "Biometric Attendance Exemption", "ECPA"],
  },
  {
    term: "Idle Detection",
    slug: "idle-detection",
    category: "Time & Attendance",
    shortDefinition: "A background operating system monitor that detects when no keyboard keystrokes, mouse movements, or digital stylus inputs have occurred for a designated window of time.",
    detailedExplanation: "When an engineer steps away from their laptop for a coffee, a physical meeting, or a whiteboard discussion, idle detection registers the cessation of hardware events. Once the idle timer trips (e.g., after 180 seconds), active tracking pauses so that unworked time is not recorded as active software delivery.",
    formulaOrStandard: "Idle State Triggered = (Time Since Last Input Event > Configured Idle Threshold [e.g., 180s])",
    whyItMatters: "Guarantees accurate billable hours and ensures managers receive real activity data without needing invasive continuous camera feeds.",
    deskmeritApproach: "Deskmerit's agent hooks into native OS event loops with less than 0.5% CPU overhead. When the user returns, a friendly modal offers instant attribution: 'You were away for 22 mins. Attribute to: [Offline Meeting] [Break] [Discard]'.",
    relatedTerms: ["Active Time", "Private Time", "Tamper Resistance"],
  },
  {
    term: "Jira & Azure DevOps Two-Way Sync",
    slug: "jira-azure-devops-two-way-sync",
    category: "Engineering Productivity",
    shortDefinition: "Direct API integration that connects time tracking timers to software project tickets, automatically logging worklogs and issue keys into both systems simultaneously.",
    detailedExplanation: "Rather than forcing software engineers to manually open Jira, find ticket PROJ-1048, and type in '2h 15m' at the end of the day, two-way sync lets engineers start a timer directly from their desktop tray or IDE. When stopped, time is pushed directly to the Jira or Azure DevOps worklog API with zero manual entry.",
    formulaOrStandard: "Task Attribution = Time Tracking Telemetry (Timer Duration) <==> Jira REST API v3 (/worklog)",
    whyItMatters: "Eliminates timesheet amnesia, produces accurate sprint velocity statistics, and links budget burn down rates directly to release milestones.",
    deskmeritApproach: "Deskmerit Tracker Plus displays each developer's assigned Jira, Azure DevOps, and OpenProject tickets in a sleek native menu bar dropdown. Developers hit 'Start' on the ticket, and all billable math happens invisibly.",
    relatedTerms: ["Defensible Timesheets", "Work-In-Progress (WIP) Limit", "Active Time"],
  },
  {
    term: "Keystroke Logging (Keylogger)",
    slug: "keystroke-logging",
    category: "Privacy & Compliance",
    shortDefinition: "The covert or overt software recording of every sequential character typed on a physical or virtual keyboard, including passwords, personal chat logs, and financial records.",
    detailedExplanation: "Keyloggers are historically considered the most invasive category of workplace software. Because keystroke sequences invariably expose corporate two-factor authentication tokens, private messages, and customer PII, keyloggers represent a severe cybersecurity vulnerability.",
    formulaOrStandard: "High Risk Practice = Logging [Keycode Sequences: ASCII / Unicode string storage]",
    whyItMatters: "Keylogging violates employee privacy rights in virtually all major jurisdictions, destroys team morale, and exposes companies to credential theft in the event of a database compromise.",
    deskmeritApproach: "Deskmerit enforces an architectural zero-keylogger policy. The tracker only checks a boolean flag: 'did input occur within this 1-minute window? (Yes/No)' — it is physically incapable of recording what was typed.",
    relatedTerms: ["Zero Surveillance Architecture", "GDPR Article 88", "Idle Detection"],
  },
  {
    term: "Leave Accrual & PTO Sync",
    slug: "leave-accrual-and-pto-sync",
    category: "Shift & Scheduling",
    shortDefinition: "The automatic deduction of approved annual leave, sick days, and public holidays from an employee's required monthly shift hours.",
    detailedExplanation: "When time tracking operates disconnected from HR leave management, employees taking an approved holiday are mistakenly flagged as 'absent' or penalized in utilization calculations. PTO sync harmonizes approved leave records directly into expected capacity figures.",
    formulaOrStandard: "Adjusted Expected Hours = (Standard Working Days - Approved PTO Days - Public Holidays) × 8.0 hrs",
    whyItMatters: "Prevents payroll errors, eliminates manual reconciliation by HR managers at month-end, and avoids penalizing employees for taking entitled rest.",
    deskmeritApproach: "Deskmerit's native module inside Sqalible HRMS automatically reads approved leave requests and holidays, updating expected attendance rosters instantly without manual spreadsheet imports.",
    relatedTerms: ["Automatic Shift Adherence", "Midnight Crossing Shifts", "Bench Time"],
  },
  {
    term: "Midnight Crossing Shifts",
    slug: "midnight-crossing-shifts",
    category: "Shift & Scheduling",
    shortDefinition: "Work shifts that initiate before midnight (e.g. 10:00 PM) and conclude in the early morning of the following calendar day (e.g. 6:00 AM).",
    detailedExplanation: "Naïve time tracking databases group hours strictly by UTC or local calendar day (00:00 to 23:59), fragmenting a single night shift into two disconnected half-shifts. Correct midnight handling attributes the entire shift to the shift's initiating roster date.",
    formulaOrStandard: "Shift Grouping = Session Start Timestamp <= Roster Shift Start Window (regardless of 00:00 date rollover)",
    whyItMatters: "Crucial for night shift allowances, statutory overtime limits, and fair attendance records in 24/7 technical operations and NOC support centers.",
    deskmeritApproach: "Deskmerit features dedicated overnight shift attribution logic that binds hours across the midnight boundary, calculating night differential pay and continuous rest periods flawlessly.",
    relatedTerms: ["Automatic Shift Adherence", "Core Hours & Flextime", "Overtime Multipliers"],
  },
  {
    term: "Non-Billable Overhead",
    slug: "non-billable-overhead",
    category: "Billing & Utilization",
    shortDefinition: "Legitimate company-mandated working time spent on administrative tasks, sprint retrospectives, town halls, or team mentoring that cannot be invoiced to a client.",
    detailedExplanation: "No software engineering team can bill 100% of their working hours. Healthy organizations budget 15% to 25% of employee time for non-billable overhead to allow for technical debt refactoring, security reviews, and operational hygiene.",
    formulaOrStandard: "Non-Billable Ratio = (Total Internal Hours / Total Working Hours) × 100%",
    whyItMatters: "Budgeting for non-billable overhead ensures realistic project scheduling, prevents developer burnout, and identifies operational bureaucracy bottlenecks.",
    deskmeritApproach: "Deskmerit enables distinct internal project codes (e.g., 'Internal: Architecture Council', 'Company: All-Hands') so overhead is accounted for constructively without hurting team productivity scores.",
    relatedTerms: ["Billable Utilization Rate", "Bench Time", "Defensible Timesheets"],
  },
  {
    term: "Overtime Statutory Multipliers",
    slug: "overtime-statutory-multipliers",
    category: "Shift & Scheduling",
    shortDefinition: "Legally mandated wage premiums (e.g., 1.5× or 2.0× regular hourly rate) applied when non-exempt employees exceed statutory daily or weekly working hour limits.",
    detailedExplanation: "Under statutory labor laws (such as the Fair Labor Standards Act in the US, Factories Act in India, or Working Time Directive in Europe), hours worked beyond standard thresholds trigger mandatory overtime premiums. Automated tracking flags when an employee approaches overtime thresholds before costs accumulate.",
    formulaOrStandard: "Overtime Pay = Regular Hours × Base Rate + Overtime Hours × (Base Rate × 1.5)",
    whyItMatters: "Shields companies from multi-million dollar wage-and-hour lawsuits while preventing engineering teams from becoming systematically overworked.",
    deskmeritApproach: "Deskmerit includes configurable overtime alert thresholds, notifying engineering managers when contractors or non-exempt staff approach 38+ hours within a work week.",
    relatedTerms: ["Defensible Timesheets", "Automatic Shift Adherence", "Midnight Crossing Shifts"],
  },
  {
    term: "Pomodoro Productivity Interval",
    slug: "pomodoro-productivity-interval",
    category: "Engineering Productivity",
    shortDefinition: "A cognitive workflow technique that partitions work into 25-minute periods of deep, uninterrupted focus, separated by mandatory 5-minute rest breaks.",
    detailedExplanation: "Developed by Francesco Cirillo in the late 1980s, the technique leverages sprint-based cognitive psychology. When coupled with automated time tracking, Pomodoro timers encourage engineers to work in deep focus intervals without switching context.",
    formulaOrStandard: "1 Pomodoro Unit = 25 min Active Focus Sprint + 5 min Physical Break",
    whyItMatters: "Proven to diminish cognitive fatigue, prevent back-to-back meeting burnout, and encourage healthier screen-break habits.",
    deskmeritApproach: "Deskmerit's desktop client features an integrated Pomodoro timer in the system tray, helping engineers maintain steady focus while automatically logging work blocks against assigned task keys.",
    relatedTerms: ["Active Time", "Private Time", "Work-In-Progress (WIP) Limit"],
  },
  {
    term: "Private Time (Employee Exemption Mode)",
    slug: "private-time",
    category: "Privacy & Compliance",
    shortDefinition: "A 1-click feature allowing employees to instantly suspend all tracking, screenshot capture, and URL logging while remaining logged into their workstation for personal tasks.",
    detailedExplanation: "Knowledge workers frequently need to check personal bank accounts, respond to urgent family messages, or look up medical appointments during the workday. In legacy monitoring tools, employees must either perform these tasks on mobile devices or risk personal data being recorded. Private Time explicitly records a 'Personal Exemption' block that is never inspected or logged.",
    formulaOrStandard: "Private Mode Active = (Agent Suspended) AND (Telemetry = Discarded) AND (State = 'Private Rest')",
    whyItMatters: "Fosters psychological safety, reinforces workplace dignity, and guarantees compliance with workplace privacy legislation.",
    deskmeritApproach: "Deskmerit provides a prominent 'Private Time' button in the menu bar. During Private Time, screenshots are completely disabled, URL capturing ceases, and the timeline shows an unmonitored gray stripe titled 'Private Time' that administrators cannot inspect.",
    relatedTerms: ["Employee Audit Priority", "Blurred Screenshots", "Zero Surveillance Architecture"],
  },
  {
    term: "Real-Time Presence Telemetry",
    slug: "real-time-presence-telemetry",
    category: "Time & Attendance",
    shortDefinition: "A non-invasive status feed indicating whether remote colleagues are actively coding, attending a calendar meeting, taking a break, or offline.",
    detailedExplanation: "Replaces constant Slack 'pinging' and interruptions ('Hey, are you free?') with real-time awareness. Unlike invasive live video walls, presence telemetry simply broadcasts high-level availability states derived from system idle timers and calendar sync.",
    formulaOrStandard: "Presence State = f(OS Idle Event, Active Calendar Meeting, Private Mode Flag)",
    whyItMatters: "Saves distributed remote squads hours of coordination friction every week, allowing team members to identify ideal collaboration windows without intrusive monitoring.",
    deskmeritApproach: "Deskmerit publishes a clean, privacy-respecting team live feed: 'In Meeting (Google Meet)', 'Deep Focus (Jira PROJ-49)', or 'Away (Break)' — visible to teammates with zero webcam snooping.",
    relatedTerms: ["Active Time", "Idle Detection", "Automatic Shift Adherence"],
  },
  {
    term: "SCIM (System for Cross-domain Identity Management)",
    slug: "scim-provisioning",
    category: "Engineering Productivity",
    shortDefinition: "An open HTTP-based REST standard (RFC 7644) that automates the provisioning, updating, and de-provisioning of employee user accounts between identity providers and SaaS platforms.",
    detailedExplanation: "Enterprise IT teams use SCIM with Okta, Microsoft Azure AD (Entra ID), or OneLogin to automatically create Deskmerit accounts whenever a new engineer joins the company, and revoke access immediately when offboarding occurs.",
    formulaOrStandard: "Automated Lifecycle = Identity Provider (IdP) ==[SCIM 2.0 API]==> Deskmerit Organization Directory",
    whyItMatters: "Eliminates orphan accounts, ensures ex-contractors cannot access proprietary project worklogs, and streamlines SOC 2 access control compliance.",
    deskmeritApproach: "Deskmerit Enterprise includes native SCIM 2.0 support, enabling instant group synchronization, role mapping, and automated seat allocation from Okta and Azure AD.",
    relatedTerms: ["Single Sign-On (SSO)", "Zero Surveillance Architecture", "Defensible Timesheets"],
  },
  {
    term: "Single Sign-On (SSO)",
    slug: "single-sign-on",
    category: "Engineering Productivity",
    shortDefinition: "An enterprise authentication method enabling users to access multiple business applications using a single set of corporate login credentials backed by SAML 2.0 or OIDC.",
    detailedExplanation: "Instead of remembering individual usernames and passwords for time tracking software, employees authenticate through their primary enterprise identity provider (Google Workspace, Okta, Microsoft 365) with centralized Multi-Factor Authentication (MFA) enforcement.",
    formulaOrStandard: "Security Protocol: SAML 2.0 Web Browser SSO Profile or OpenID Connect (OIDC)",
    whyItMatters: "Dramatically reduces password-related phishing vulnerabilities, accelerates developer onboarding, and complies with enterprise vendor security assessments.",
    deskmeritApproach: "Deskmerit provides one-click SAML 2.0 and OIDC integrations for Google, Okta, Azure AD, and PingFederate on all Enterprise plans.",
    relatedTerms: ["SCIM (System for Cross-domain Identity Management)", "Defensible Timesheets"],
  },
  {
    term: "Tamper Resistance & Anti-Jiggler Detection",
    slug: "tamper-resistance",
    category: "Time & Attendance",
    shortDefinition: "Software algorithms engineered to detect and discount artificial input generators (such as motorized mouse movers, mechanical jigglers, or scripted macro loops).",
    detailedExplanation: "When workers are subjected to punitive monitoring software, some resort to hardware 'mouse movers' that generate synthetic linear cursor oscillations to simulate presence. Tamper resistance algorithms detect perfectly repetitive or unnatural input vectors to maintain timesheet data integrity.",
    formulaOrStandard: "Input Heuristic: Entropy(Delta X, Delta Y) + Variance(Time Intervals) < Human Threshold ==> Flagged",
    whyItMatters: "Protects billing accuracy for client deliverables and surfaces the root cause of employee disengagement before it turns into silent quitting.",
    deskmeritApproach: "Deskmerit pairs light mathematical entropy checks with a high-trust philosophy: rather than punishing mouse physics, we advocate setting realistic project deliverable goals that make fake jiggling completely unnecessary.",
    relatedTerms: ["Idle Detection", "Defensible Timesheets", "Active Time"],
  },
  {
    term: "Work-In-Progress (WIP) Limit",
    slug: "work-in-progress-limit",
    category: "Engineering Productivity",
    shortDefinition: "A Lean and Agile operational constraint that restricts the maximum number of concurrent tasks an engineer or squad can actively work on simultaneously.",
    detailedExplanation: "Context-switching between 4 different client projects or Jira tickets in a single afternoon degrades cognitive flow and increases defect rates. WIP limits restrict active task hopping, encouraging engineers to finish one release milestone before pulling the next.",
    formulaOrStandard: "Agile Principle: 'Stop Starting, Start Finishing' (Max Active Tasks Per Developer: 1 to 2)",
    whyItMatters: "Reduces cycle times, increases code quality, and provides cleaner time tracking logs that reflect deep, focused problem solving.",
    deskmeritApproach: "Deskmerit's desktop tracker gently alerts developers when they have toggled between more than 3 distinct Jira issues within an hour, encouraging focused time blocks.",
    relatedTerms: ["Pomodoro Productivity Interval", "Jira & Azure DevOps Two-Way Sync", "Active Time"],
  },
  {
    term: "Zero Surveillance Architecture",
    slug: "zero-surveillance-architecture",
    category: "Privacy & Compliance",
    shortDefinition: "A foundational software engineering paradigm stipulating that workforce productivity metrics must be gathered with zero covert surveillance, zero keyloggers, and zero hardware snooping.",
    detailedExplanation: "Traditional employee tracking software was spawned from spyware architectures that secretly install rootkits, intercept private keystrokes, and capture webcam photos. Zero surveillance architecture proves that business leaders can obtain accurate utilization, sprint velocity, and defensible billing data through open, transparent, announced telemetry.",
    formulaOrStandard: "Trust-First Core = Transparent Telemetry + Zero Covert Processes + Zero Keylogging + Zero Video Sniffing",
    whyItMatters: "Attracts top-tier senior software talent who refuse to work under panopticon conditions, protects corporate IP, and fulfills global data privacy laws.",
    deskmeritApproach: "Deskmerit was founded explicitly on this architecture. We are the colleague who keeps good notes, not the supervisor behind the two-way mirror.",
    relatedTerms: ["Employee Audit Priority", "GDPR Article 88", "Biometric Attendance Exemption", "Blurred Screenshots"],
  },
];

export function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [expandedTermSlug, setExpandedTermSlug] = useState<string | null>(null);

  const categories = [
    "All",
    "Time & Attendance",
    "Billing & Utilization",
    "Privacy & Compliance",
    "Engineering Productivity",
    "Shift & Scheduling",
  ];

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      // Category filter
      if (selectedCategory !== "All" && term.category !== selectedCategory) {
        return false;
      }
      // Letter filter
      if (
        selectedLetter !== "All" &&
        !term.term.toUpperCase().startsWith(selectedLetter)
      ) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTerm = term.term.toLowerCase().includes(query);
        const matchesShort = term.shortDefinition.toLowerCase().includes(query);
        const matchesDetailed = term.detailedExplanation.toLowerCase().includes(query);
        const matchesCategory = term.category.toLowerCase().includes(query);
        const matchesRelated = term.relatedTerms.some((t) =>
          t.toLowerCase().includes(query)
        );
        return matchesTerm || matchesShort || matchesDetailed || matchesCategory || matchesRelated;
      }
      return true;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Available starting letters in the full dictionary
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    GLOSSARY_TERMS.forEach((t) => {
      letters.add(t.term[0].toUpperCase());
    });
    return letters;
  }, []);

  const handleCopyLink = (slug: string) => {
    const url = `${window.location.origin}/glossary#${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#0F1730] font-sans antialiased flex flex-col selection:bg-[#61126E]/15 selection:text-[#61126E]">
      <DeskmeritHeader />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-10 pb-16 lg:pt-14 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#61126E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Standard Breadcrumb */}
            <div className="text-xs font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Resources</span>
              <span className="text-slate-500">/</span>
              <span className="text-[#D8B4FE] font-bold">Glossary</span>
            </div>

            <div className="max-w-3xl space-y-6">
              {/* Standard Accent Eyebrow */}
              <div className="text-xs font-bold uppercase tracking-wider text-[#D8B4FE]">
                DESKMERIT TERMINOLOGY GLOSSARY
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.2] text-white">
                Definitive Workforce & Time Tracking Glossary
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Authoritative definitions, legal compliance nuances, mathematical billing formulas, and architectural standards for modern workforce presence and employee trust.
              </p>

              {/* Instant Search Bar */}
              <div className="pt-2">
                <div className="relative max-w-xl">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search terms, concepts, formulas (e.g. Active Time, GDPR, Utilization)..."
                    className="w-full pl-12 pr-10 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#61126E] focus:ring-1 focus:ring-[#61126E] transition-all shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-semibold px-1.5 py-0.5 rounded bg-slate-800"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTROLS SECTION: Category Filter & Alphabetical Index Bar */}
        <section className="bg-white border-b border-[#E8D5EC] sticky top-16 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedLetter("All");
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0F1730] text-white shadow-xs"
                      : "bg-[#FAF4FB] text-[#4A5370] hover:bg-slate-200 hover:text-[#0F1730]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* A to Z Jump Bar */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-2">
              <button
                onClick={() => setSelectedLetter("All")}
                className={`px-2 py-1 rounded text-xs font-extrabold transition-all cursor-pointer ${
                  selectedLetter === "All"
                    ? "bg-[#61126E] text-white"
                    : "text-slate-500 hover:text-[#0F1730] hover:bg-slate-100"
                }`}
              >
                ALL
              </button>
              {alphabet.map((letter) => {
                const hasTerms = availableLetters.has(letter);
                const isSelected = selectedLetter === letter;
                return (
                  <button
                    key={letter}
                    disabled={!hasTerms}
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#61126E] text-white shadow-xs"
                        : hasTerms
                        ? "text-[#0F1730] hover:bg-slate-100 cursor-pointer"
                        : "text-slate-300 cursor-not-allowed"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* GLOSSARY LISTING SECTION */}
        <section className="py-12 lg:py-16 bg-[#FDFCFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-extrabold text-[#0F1730]">
                  {selectedCategory === "All" ? "All Glossary Terms" : selectedCategory}
                  {selectedLetter !== "All" && ` — Starting with "${selectedLetter}"`}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Showing {filteredTerms.length} of {GLOSSARY_TERMS.length} curated workforce concepts
                </p>
              </div>

              {(searchQuery || selectedCategory !== "All" || selectedLetter !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedLetter("All");
                  }}
                  className="text-xs font-bold text-[#61126E] hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {filteredTerms.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 max-w-lg mx-auto">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching terms found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  We couldn't find any terms matching your current search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedLetter("All");
                  }}
                  className="mt-4 px-4 py-2 bg-[#61126E] text-white text-xs font-bold rounded-lg hover:bg-[#4E0E58] transition-all cursor-pointer"
                >
                  Clear search & filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTerms.map((term) => {
                  const isExpanded = expandedTermSlug === term.slug;
                  return (
                    <article
                      key={term.slug}
                      id={term.slug}
                      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8D5EC] shadow-[0_2px_12px_rgba(15,23,48,0.03)] hover:shadow-[0_8px_24px_rgba(15,23,48,0.08)] hover:border-[#61126E]/40 transition-all duration-300 flex flex-col justify-between group scroll-mt-36"
                    >
                      <div>
                        {/* Header: Category Badge + Copy Link */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FAF4FB] text-[#4A5370] border border-[#E8D5EC]">
                            {term.category}
                          </span>
                          <button
                            onClick={() => handleCopyLink(term.slug)}
                            className="text-slate-400 hover:text-[#61126E] transition-colors p-1 rounded hover:bg-slate-50"
                            title="Copy link to this term"
                          >
                            {copiedSlug === term.slug ? (
                              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                                <Check className="w-3.5 h-3.5" /> Copied
                              </span>
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1730] group-hover:text-[#61126E] transition-colors tracking-tight mb-3">
                          {term.term}
                        </h3>

                        {/* Short Definition */}
                        <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
                          {term.shortDefinition}
                        </p>

                        {/* Formula or Standard (if present) */}
                        {term.formulaOrStandard && (
                          <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-800">
                            <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                              Standard / Formula:
                            </span>
                            {term.formulaOrStandard}
                          </div>
                        )}

                        {/* Expandable Deep Dive */}
                        {isExpanded && (
                          <div className="space-y-4 pt-3 border-t border-slate-100 mt-4 text-xs leading-relaxed animate-fade-in">
                            <div>
                              <h4 className="font-bold text-[#0F1730] uppercase tracking-wider text-[11px] mb-1">
                                Detailed Explanation
                              </h4>
                              <p className="text-slate-600 leading-relaxed">
                                {term.detailedExplanation}
                              </p>
                            </div>

                            <div>
                              <h4 className="font-bold text-[#0F1730] uppercase tracking-wider text-[11px] mb-1">
                                Why It Matters
                              </h4>
                              <p className="text-slate-600 leading-relaxed">
                                {term.whyItMatters}
                              </p>
                            </div>

                            <div className="p-3 rounded-xl bg-[#F6EDF8]/60 border border-[#61126E]/20">
                              <h4 className="font-bold text-[#61126E] uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-[#61126E]" />
                                Deskmerit's Approach
                              </h4>
                              <p className="text-slate-700 leading-relaxed">
                                {term.deskmeritApproach}
                              </p>
                            </div>

                            {term.relatedTerms && term.relatedTerms.length > 0 && (
                              <div className="pt-2">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2">
                                  Related Terms:
                                </span>
                                <div className="inline-flex flex-wrap gap-1.5 mt-1">
                                  {term.relatedTerms.map((rt) => (
                                    <button
                                      key={rt}
                                      onClick={() => setSearchQuery(rt)}
                                      className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-[#0F1730] text-[11px] font-medium transition-colors cursor-pointer"
                                    >
                                      {rt}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Expand / Collapse Action */}
                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() =>
                            setExpandedTermSlug(isExpanded ? null : term.slug)
                          }
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#61126E] hover:text-[#4E0E58] transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? "Collapse definition" : "Read full explanation & benchmarks"}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <span className="text-[11px] font-mono text-slate-400">
                          #{term.slug}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* BOTTOM CTA: Need deeper help? */}
        <section className="py-16 bg-[#FAF4FB] border-t border-[#E8D5EC]">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EDF8]/30 text-xs font-bold text-[#61126E] border border-[#61126E]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Have a term or policy nuance we should cover?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
              Built for high-trust software and engineering teams
            </h2>
            <p className="text-sm sm:text-base text-[#4A5370] max-w-xl mx-auto leading-relaxed">
              Explore how Deskmerit applies these privacy standards in live enterprise production environments with zero keystroke logging and blurred screenshots.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/signup"
                className="px-6 py-3 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-bold text-xs transition-all shadow-sm hover:shadow-md"
              >
                Start free 14-day trial
              </Link>
              <Link
                to="/guides/employee-monitoring-laws"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0F1730] font-bold text-xs border border-slate-300 transition-all"
              >
                Read monitoring law guides
              </Link>
            </div>
          </div>
        </section>
      </main>

      <DeskmeritFooter />
    </div>
  );
}
