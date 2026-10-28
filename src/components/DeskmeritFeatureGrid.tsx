import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface FeatureCard {
  title: string;
  href: string;
  description: string;
  badge: string;
  category: "time" | "billing" | "attendance" | "privacy" | "integrations";
  image: string;
  highlight?: boolean;
}

export function DeskmeritFeatureGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", label: "All features" },
    { id: "time", label: "Time & Activity" },
    { id: "billing", label: "Project & Billing" },
    { id: "attendance", label: "Attendance & Shifts" },
    { id: "privacy", label: "Privacy & Compliance" },
    { id: "integrations", label: "Integrations & AI" },
  ];

  const allFeatures: FeatureCard[] = [
    {
      title: "Tracker Plus for Jira & DevOps",
      href: "/features/tracker-plus",
      description:
        "Start tracking directly from the PM task itself. Automatic bi-directional work log sync with zero second login.",
      badge: "Flagship ★",
      category: "billing",
      image: "/images/features/tracker-plus.jpg",
      highlight: true,
    },
    {
      title: "Automatic Time Tracking",
      href: "/features/automatic-time-tracking",
      description:
        "Lightweight native desktop agent starts on computer boot. Attributes active window titles and application focus without manual start/stop timers.",
      badge: "Zero-effort",
      category: "time",
      image: "/images/features/automatic-time.jpg",
    },
    {
      title: "Productivity & App Scoring",
      href: "/features/productivity-tracking",
      description:
        "Role-customized application, URL, and window scoring. Developers on GitHub and designers in Figma are scored accurately without rigid blanket rules.",
      badge: "Role-aware",
      category: "time",
      image: "/images/features/productivity-scoring.jpg",
    },
    {
      title: "Attendance & Daily Presence",
      href: "/features/attendance-tracking",
      description:
        "Daily presence derived from active computer time, calendar video calls, and approved leaves. Completely eliminates invasive biometric scanners.",
      badge: "No biometrics",
      category: "attendance",
      image: "/images/features/attendance-presence.jpg",
    },
    {
      title: "Timesheets & Defensible Reports",
      href: "/features/timesheets-and-reports",
      description:
        "Slice and filter 100,000+ hours by employee, ticket, client, or date. Clean CSV and Excel exports that balance to the exact second.",
      badge: "CSV & Excel",
      category: "billing",
      image: "/images/features/timesheets-reports.jpg",
    },
    {
      title: "Project Time & Client Billing",
      href: "/features/project-time-tracking",
      description:
        "Hourly rates per person, client budgets, burn-down alerts, and invoice-ready billing rollups with zero spreadsheet math.",
      badge: "Defensible revenue",
      category: "billing",
      image: "/images/features/project-billing.jpg",
    },
    {
      title: "Shift Scheduling & Midnight Rosters",
      href: "/features/shift-scheduling",
      description:
        "Multi-shift scheduling with overnight support crossing midnight. Tracks late check-ins, early leaves, and shift adherence automatically.",
      badge: "24/7 Rosters",
      category: "attendance",
      image: "/images/features/shift-scheduling.jpg",
    },
    {
      title: "Leave Management & PTO Calendars",
      href: "/features/leave-management",
      description:
        "Employee self-service PTO requests, multi-manager approval workflows, public holiday sets, and automatic deduction from expected hours.",
      badge: "Team calendar",
      category: "attendance",
      image: "/images/features/leave-management.jpg",
    },
    {
      title: "Ethical Screenshots (Blurred by Default)",
      href: "/features/screenshots",
      description:
        "Screenshots are disabled by default. If enabled for client audit compliance, frames are blurred, employee-announced, and deletable.",
      badge: "Privacy-first",
      category: "privacy",
      image: "/images/features/ethical-screenshots.jpg",
    },
    {
      title: "Idle Detection & Private Time",
      href: "/features/idle-and-private-time",
      description:
        "Smart idle prompts when keyboard/mouse activity ceases. Employees can switch to Private Time anytime for complete unmonitored personal breaks.",
      badge: "Dignity first",
      category: "privacy",
      image: "/images/features/idle-private-time.jpg",
    },
    {
      title: "Document Title Tracking",
      href: "/features/document-tracking",
      description:
        "Attribute hours spent on specific CAD models, spreadsheets, presentations, and code files by reading OS window titles only — never document contents.",
      badge: "Titles only",
      category: "time",
      image: "/images/features/document-tracking.jpg",
    },
    {
      title: "Real-Time Live Status Feed",
      href: "/features/live-status",
      description:
        "Live presence feed updated every 60 seconds. Know who is actively coding, in a meeting, on a break, or offline without pinging in Slack.",
      badge: "60s refresh",
      category: "time",
      image: "/images/features/live-status.jpg",
    },
    {
      title: "Pomodoro Deep Work Focus Timer",
      href: "/features/focus-timer",
      description:
        "Built-in 25/50-minute deep work sprints with gentle break reminders. Ties directly into active Jira and Azure DevOps tasks to minimize context switching.",
      badge: "Deep work",
      category: "time",
      image: "/images/features/pomodoro-focus.jpg",
    },
    {
      title: "Developer Platform & AI MCP Server",
      href: "/developers",
      description:
        "Query live workforce telemetry directly inside Claude Desktop, ChatGPT, or Cursor via native Model Context Protocol (MCP) and REST endpoints.",
      badge: "Claude & MCP",
      category: "integrations",
      image: "/images/features/developer-mcp.jpg",
    },
    {
      title: "Integrations Hub Catalog",
      href: "/integrations",
      description:
        "Bi-directional connectors for Jira, Azure DevOps, OpenProject, Google Calendar, Outlook 365, Slack, Teams, Zapier, Make, and Sqalible HRMS.",
      badge: "10+ Connectors",
      category: "integrations",
      image: "/images/features/integrations-hub.jpg",
    },
    {
      title: "Enterprise Security & Audit Logs",
      href: "/security",
      description:
        "Immutable tamper-proof activity audit trails, SAML 2.0 / Entra ID SSO, granular RBAC permissions, and SOC-2 Type II enterprise readiness.",
      badge: "SOC-2 & SAML",
      category: "privacy",
      image: "/images/features/security-compliance.jpg",
    },
  ];

  const filteredFeatures =
    selectedCategory === "all"
      ? allFeatures
      : allFeatures.filter((f) => f.category === selectedCategory);

  // Duplicated list for infinite seamless auto-scrolling
  const displayItems =
    filteredFeatures.length >= 4
      ? [...filteredFeatures, ...filteredFeatures]
      : filteredFeatures;

  // Step-based discrete auto-scroll: every 5 seconds, move by 1 card to the right
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      const card = el.querySelector<HTMLElement>("[data-card]");
      const cardWidth = card ? card.offsetWidth + 28 : 448;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft + cardWidth >= maxScroll - 15) {
        // Smoothly loop back to start when reaching end
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, selectedCategory]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector<HTMLElement>("[data-card]");
      const cardWidth = card ? card.offsetWidth + 28 : 448;
      const offset = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E8D5EC]/80 font-sans relative overflow-hidden">
      {/* 1. Header & Controls - Contained to Standard Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="mb-8 max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
            TAILORED ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F1730] tracking-[-0.03em] leading-[1.24]">
            Features Built for Every Workflow
          </h2>
          <p className="text-sm sm:text-base text-[#4A5370] mt-3 leading-relaxed">
            Automatic background time capture, bi-directional Jira sprint sync, role-aware application scoring, and audit-ready defensible timesheets.
          </p>
        </div>

        {/* Toolbar: Categories with horizontal scroll on left, View All & Navigation on right */}
        <div className="flex items-center justify-between gap-3 mb-10 pb-1">
          {/* Categories with Horizontal Scroll on Mobile/Desktop */}
          <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar scrollbar-none flex items-center gap-2 py-1 pr-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                  }}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border whitespace-nowrap ${
                    isActive
                      ? "bg-[#61126E] text-white border-[#61126E] shadow-sm"
                      : "bg-white text-[#4A5370] border-slate-300 hover:border-[#61126E] hover:text-[#61126E]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: < Arrow, View All Button, > Arrow */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:border-[#61126E] hover:text-[#61126E] text-[#0F1730] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
              aria-label="Scroll features left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <Link
              to="/features"
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-slate-300 bg-white hover:border-[#61126E] hover:bg-[#61126E] hover:text-white text-xs font-bold text-[#0F1730] shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              View all
            </Link>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:border-[#61126E] hover:text-[#61126E] text-[#0F1730] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
              aria-label="Scroll features right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Full-Bleed Scrolling Track - Extends all the way to screen edges across full desktop width */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fade on left only to blend with header margin */}
        <div className="absolute left-0 top-0 bottom-6 w-6 sm:w-12 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container bleeding to the very right edge of the screen */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto no-scrollbar gap-6 sm:gap-7 py-3 pb-8 select-none"
          style={{
            scrollBehavior: "smooth",
            paddingLeft: "max(1.25rem, calc((100vw - 80rem) / 2 + 1.5rem))",
            paddingRight: "2rem",
          }}
        >
          {displayItems.map((item, idx) => (
            <Link
              key={`${item.title}-${idx}`}
              to={item.href}
              data-card="true"
              className="group shrink-0 w-[310px] sm:w-[370px] lg:w-[410px] rounded-none bg-[#0B1426] border border-slate-800/90 shadow-lg hover:shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden block"
            >
              {/* Top Image Canvas flush to top edges with sharp corners */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-800 rounded-none">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none"
                  loading="lazy"
                />

                {/* Floating Tag */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm bg-white/95 text-[#0F1730] backdrop-blur-xs border border-white/60">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Bottom Dark Card Body with bold white title and slate description */}
              <div className="p-6 bg-[#0B1426] flex-1 flex flex-col justify-start">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#61126E] transition-colors mb-2.5 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
