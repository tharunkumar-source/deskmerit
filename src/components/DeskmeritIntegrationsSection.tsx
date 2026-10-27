import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Authentic Official SVG Logos for Integrations
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
        <linearGradient id="asanaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FC636B" />
          <stop offset="100%" stopColor="#FF7A59" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="6.5" r="4.2" fill="url(#asanaGrad)" />
      <circle cx="5.6" cy="17" r="4.2" fill="url(#asanaGrad)" />
      <circle cx="18.4" cy="17" r="4.2" fill="url(#asanaGrad)" />
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

function TrelloLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#0079BF" />
      <rect x="4" y="4" width="6.5" height="13" rx="1.5" fill="#FFFFFF" />
      <rect x="13.5" y="4" width="6.5" height="8.5" rx="1.5" fill="#FFFFFF" />
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

export function DeskmeritIntegrationsSection() {
  const integrationTools = [
    {
      name: "Google Calendar",
      category: "Calendar & Meet Sync",
      href: "/integrations/google-calendar",
      logo: <GoogleCalendarLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Jira Software",
      category: "Bi-directional Worklogs",
      href: "/integrations/jira",
      logo: <JiraLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Slack",
      category: "Live Status & Alerts",
      href: "/integrations",
      logo: <SlackLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Asana",
      category: "Milestone & Task Tracking",
      href: "/integrations",
      logo: <AsanaLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Zapier",
      category: "5,000+ App Connectors",
      href: "/integrations/zapier",
      logo: <ZapierLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Microsoft Outlook",
      category: "Meeting Attendance",
      href: "/integrations/outlook",
      logo: <OutlookLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "Trello",
      category: "Kanban Card Timers",
      href: "/integrations",
      logo: <TrelloLogo className="w-6 h-6 shrink-0" />,
    },
    {
      name: "GitLab",
      category: "Commit & Branch Telemetry",
      href: "/integrations",
      logo: <GitLabLogo className="w-6 h-6 shrink-0" />,
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
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E2D8] relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-bold text-[#0F1730] uppercase tracking-wider">
                    Ecosystem Connectors
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Zero Code Setup
                </span>
              </div>

              {/* 2-Column Balanced Staggered Composition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {integrationTools.map((tool) => (
                  <Link
                    key={tool.name}
                    to={tool.href}
                    className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,48,0.03)] hover:shadow-[0_8px_20px_rgba(255,90,54,0.12)] hover:border-[#FF5A36]/50 hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="p-2 rounded-xl bg-[#F7F4EE] border border-slate-100 group-hover:scale-105 transition-transform shrink-0">
                      {tool.logo}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-[#0F1730] text-sm tracking-tight group-hover:text-[#FF5A36] transition-colors truncate">
                        {tool.name}
                      </div>
                      <div className="text-[11px] text-[#64748B] font-medium truncate">
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

