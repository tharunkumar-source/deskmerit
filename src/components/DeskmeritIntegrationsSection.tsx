import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function DeskmeritIntegrationsSection() {
  const integrationTools = [
    {
      name: "Google Calendar",
      category: "Calendar & Meet Sync",
      href: "/features/integrations/google-calendar-time-tracking",
      iconUrl: "/images/integrations/google-calendar.svg",
    },
    {
      name: "Jira Software",
      category: "Sprint Worklog Sync",
      href: "/features/integrations/jira-time-tracking",
      iconUrl: "/images/integrations/jira.svg",
    },
    {
      name: "Slack",
      category: "Live Status & Alerts",
      href: "/features/integrations/slack-time-tracking",
      iconUrl: "/images/integrations/slack.svg",
    },
    {
      name: "Asana",
      category: "Task Time Attribution",
      href: "/features/integrations/asana-time-tracking",
      iconUrl: "/images/integrations/asana.svg",
    },
    {
      name: "Zapier",
      category: "9,000+ App Connectors",
      href: "/features/integrations/zapier-time-tracking",
      iconUrl: "/images/integrations/zapier.svg",
    },
    {
      name: "Microsoft Outlook",
      category: "Meeting Attendance",
      href: "/features/integrations/outlook-time-tracking",
      iconUrl: "/images/integrations/outlook.svg",
    },
    {
      name: "Trello",
      category: "Kanban Card Timers",
      href: "/features/integrations/trello-time-tracking",
      iconUrl: "/images/integrations/trello.svg",
    },
    {
      name: "GitLab",
      category: "Commit & Issue Sync",
      href: "/features/integrations/gitlab-time-tracking",
      iconUrl: "/images/integrations/gitlab.svg",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Structured Integration Ecosystem Stage */}
          <div className="lg:col-span-6">
            <div className="bg-[#FBF9F5] border border-[#E6E2D8] rounded-3xl p-5 sm:p-7 shadow-[0_10px_30px_rgba(15,23,48,0.04)] relative overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A36]/5 rounded-full blur-3xl pointer-events-none" />

              {/* Stage Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E6E2D8] relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-bold text-[#0F1730] uppercase tracking-wider">
                    Ecosystem Connectors
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-600 font-mono">
                  Zero Code Setup
                </span>
              </div>

              {/* Grid of Compact Idea 2 Cards (4 cards in a row with real SVG logo images) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
                {integrationTools.map((tool) => (
                  <Link
                    key={tool.name}
                    to={tool.href}
                    className="bg-white rounded-xl p-3 sm:p-3.5 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-[0_8px_20px_rgba(15,23,48,0.06)] hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between cursor-pointer text-left"
                  >
                    <div>
                      {/* Real Brand SVG Logo Image */}
                      <div className="w-10 h-10 flex items-center justify-start shrink-0 mb-2.5 group-hover:scale-105 transition-transform">
                        <img
                          src={tool.iconUrl}
                          alt={`${tool.name} logo`}
                          className="w-9 h-9 max-h-9 max-w-9 object-contain"
                          loading="lazy"
                        />
                      </div>
                      {/* Name */}
                      <div className="font-bold text-xs sm:text-[13px] text-[#0F1730] group-hover:text-[#FF5A36] transition-colors truncate leading-tight">
                        {tool.name}
                      </div>
                      {/* Category */}
                      <div className="text-[11px] text-[#64748B] truncate mt-1 font-normal">
                        {tool.category}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Stage Bottom Reassurance */}
              <div className="mt-4 pt-3.5 border-t border-[#E6E2D8] flex items-center justify-between text-[11px] text-[#64748B] relative z-10">
                <span>Auto-sync every 60 seconds</span>
                <span className="text-[#FF5A36] font-bold font-mono">REST & Webhooks Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Content with Standard Accent Heading and Spacious Line Height */}
          <div className="lg:col-span-6 max-w-xl text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-3">
              INTEGRATIONS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F1730] tracking-[-0.025em] leading-[1.28] sm:leading-[1.25] lg:leading-[1.22]">
              Integrations with popular work tools
            </h2>

            <p className="text-base sm:text-lg text-[#4A5370] mt-5 leading-relaxed font-normal">
              From calendar apps to help you track offline time, to project management software to make project and task tracking accurate, while effortless. Deskmerit connects with the tools your team already lives in.
            </p>

            <div className="pt-8">
              <Link
                to="/integrations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F1730] font-bold text-sm border border-slate-300 shadow-sm hover:border-slate-400 transition-all cursor-pointer"
              >
                <span>View integrations</span>
                <ArrowRight className="w-4 h-4 text-[#FF5A36]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

