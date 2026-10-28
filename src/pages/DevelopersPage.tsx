import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  Code2,
  Cpu,
  FileCode2,
  Terminal,
  Key,
  Webhook,
  Zap,
  ShieldCheck,
  ArrowRight,
  Check,
  Copy,
  CheckCircle2,
  Layers,
  Sparkles,
  Bot,
  Database,
  ExternalLink,
} from "lucide-react";

export interface DevelopersPageProps {
  mode?: "overview" | "mcp" | "api";
}

export function DevelopersPage({ mode = "overview" }: DevelopersPageProps) {
  const [copiedCode, setCopiedCode] = useState(false);

  const copySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // 1. OVERVIEW DATA
  // ---------------------------------------------------------------------------
  const overviewPillars = [
    {
      icon: Key,
      title: "Scoped Personal Access Tokens",
      desc: "Generate granular API keys with least-privilege permissions: read-only timesheets, webhook administration, or workspace management.",
    },
    {
      icon: Webhook,
      title: "Real-time Webhook Events",
      desc: "Receive deterministic HMAC-SHA256 signed webhook payloads for timer starts, shift completions, and invoice status updates.",
    },
    {
      icon: Zap,
      title: "High Throughput & Reliability",
      desc: "Engineered for scale with 1,200 requests/minute default limits, automated backoff headers, and 99.95% API uptime SLA.",
    },
    {
      icon: FileCode2,
      title: "TypeScript & Python SDKs",
      desc: "First-party typed client libraries with automatic retries, exponential backoff, and full TypeScript interfaces for every payload.",
    },
  ];

  const overviewCode = `import { DeskmeritClient } from "@deskmerit/sdk";

// Initialize client with your scoped API token
const client = new DeskmeritClient({
  apiKey: process.env.DESKMERIT_API_KEY,
});

// Stream real-time team presence and current active tickets
const liveActivity = await client.activities.listLive({
  workspaceId: "ws_live_94821",
  includeActiveTicket: true,
});

console.log(\`Active engineers: \${liveActivity.length}\`);
// => Active engineers: 38 (32 on Jira tickets, 6 in meetings)`;

  // ---------------------------------------------------------------------------
  // 2. CLAUDE MCP SERVER DATA
  // ---------------------------------------------------------------------------
  const mcpFeatures = [
    {
      icon: Bot,
      title: "Natural Language Capacity Queries",
      desc: "Ask Claude: 'Which projects are closest to exceeding their hourly budget this week?' and receive instant, verifiable answers.",
    },
    {
      icon: ShieldCheck,
      title: "Strict Read-Only Zero Training",
      desc: "The MCP server exposes read-only audit tools. Customer telemetry is never used for training foundation AI models.",
    },
    {
      icon: Layers,
      title: "Universal Desktop Support",
      desc: "Plug into Claude Desktop, Cursor AI, Windsurf, or any MCP-compatible agent in under 2 minutes with a simple config block.",
    },
    {
      icon: Sparkles,
      title: "Cross-Correlated Intelligence",
      desc: "Allows AI models to correlate Jira backlog velocity against actual tracked keyboard/mouse time without manual spreadsheet exports.",
    },
  ];

  const mcpConfigCode = `{
  "mcpServers": {
    "deskmerit": {
      "command": "npx",
      "args": ["-y", "@deskmerit/mcp-server"],
      "env": {
        "DESKMERIT_API_TOKEN": "dsk_live_sec_99384721",
        "DESKMERIT_WORKSPACE_ID": "ws_alpha_8820"
      }
    }
  }
}`;

  // ---------------------------------------------------------------------------
  // 3. API DOCUMENTATION DATA
  // ---------------------------------------------------------------------------
  const apiEndpoints = [
    {
      method: "GET",
      path: "/v1/workspaces",
      title: "List Workspaces",
      desc: "Returns all workspaces associated with your authentication token.",
    },
    {
      method: "GET",
      path: "/v1/activities/live",
      title: "Stream Live Activity",
      desc: "Real-time snapshot of active team members, current app/tab titles, and bound Jira keys.",
    },
    {
      method: "POST",
      path: "/v1/timesheets/export",
      title: "Generate Timesheet Export",
      desc: "Aggregates billable time per employee, client, and project for custom payroll sync.",
    },
    {
      method: "GET",
      path: "/v1/projects/:id/budget",
      title: "Project Hourly Burn",
      desc: "Retrieves contract hours ceiling, current consumed hours, and billable revenue totals.",
    },
  ];

  const apiSampleCode = `curl -X GET "https://api.deskmerit.com/v1/activities/live" \\
  -H "Authorization: Bearer dsk_live_9482710398" \\
  -H "Content-Type: application/json"`;

  const apiSampleResponse = `{
  "status": "success",
  "data": {
    "timestamp": "2026-10-26T12:00:00Z",
    "active_members": [
      {
        "id": "usr_99182",
        "name": "Arjun Rao",
        "role": "Lead Backend Engineer",
        "status": "active",
        "current_ticket": "KMB-482",
        "current_window": "CheckoutController.ts — VS Code",
        "session_duration_minutes": 142
      }
    ]
  }
}`;

  // Tab navigation items matching Integrations page categories style
  const navTabs = [
    { id: "overview", label: "Platform Overview", href: "/developers" },
    { id: "mcp", label: "Claude MCP AI Server", href: "/developers/mcp-server" },
    { id: "api", label: "REST API Reference", href: "/developers/api" },
    { id: "webhooks", label: "Webhooks & Events", href: "/developers" },
    { id: "sdks", label: "TypeScript & Python SDKs", href: "/developers" },
  ];

  const devFaqs = [
    {
      q: "Where do I generate my developer API tokens?",
      a: "Log into the Deskmerit Web Console, navigate to Settings > Developer Keys, and click 'Create Access Token'. You can configure scoping (Read Timesheets, Stream Live Activity, Write Webhooks).",
    },
    {
      q: "What is the Model Context Protocol (MCP) server used for?",
      a: "The Deskmerit MCP server gives Claude Desktop and Cursor AI tools direct, read-only access to query your workforce metrics, project hour burn, and ticket velocity through natural language.",
    },
    {
      q: "What are the API rate limits?",
      a: "Standard Pro plans support up to 600 requests per minute. Enterprise plans support 1,200+ requests per minute with dedicated egress IPs and custom SLA guarantees.",
    },
    {
      q: "Are webhooks retried if our endpoint is temporarily down?",
      a: "Yes. Deskmerit implements an exponential backoff retry schedule: 5 retries over 24 hours. Every payload contains an X-Deskmerit-Signature header with HMAC-SHA256 for integrity verification.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* DARK HERO SECTION (Consistent Across All Deskmerit Pages)                 */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Developers</span>
              <span className="text-slate-500">/</span>
              <span>
                {mode === "overview" && "Platform Overview"}
                {mode === "mcp" && "Claude MCP AI Server"}
                {mode === "api" && "REST API Reference"}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headline & Value Prop */}
              <div className="col-span-1 lg:col-span-6 space-y-6 min-w-0 max-w-full w-full">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF]/15 px-3 py-1 rounded-full inline-block border border-[#FF5A36]/30">
                  {mode === "overview" && "DEVELOPER PLATFORM & WEBHOOKS"}
                  {mode === "mcp" && "MODEL CONTEXT PROTOCOL (MCP)"}
                  {mode === "api" && "OPENAPI 3.1 SPECIFICATION"}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  {mode === "overview" && (
                    <>
                      Build on top of Deskmerit{" "}
                      <span className="text-[#FF5A36] block">time intelligence.</span>
                    </>
                  )}
                  {mode === "mcp" && (
                    <>
                      Ask Claude about your team's{" "}
                      <span className="text-[#FF5A36] block">capacity & burn.</span>
                    </>
                  )}
                  {mode === "api" && (
                    <>
                      Comprehensive REST API{" "}
                      <span className="text-[#FF5A36] block">endpoint reference.</span>
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  {mode === "overview" &&
                    "Integrate workforce telemetry, automate timesheet sync to your payroll software, and hook into live member events using our modern REST endpoints."}
                  {mode === "mcp" &&
                    "Connect Deskmerit to Claude Desktop and Cursor. Let AI assistants analyze sprint capacity, task velocity, and attendance without writing custom queries."}
                  {mode === "api" &&
                    "Deterministic JSON endpoints with bearer authentication, fine-grained scopes, and predictable HTTP status codes for enterprise software."}
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all"
                  >
                    <span>Get API Token</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <span>Talk to an Architect</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Code Console Mockup (White Card Standard) */}
              <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
                <div className="rounded-2xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-700 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {mode === "overview" && "index.ts — Deskmerit SDK"}
                      {mode === "mcp" && "claude_desktop_config.json"}
                      {mode === "api" && "GET /v1/activities/live"}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        copySnippet(
                          mode === "overview"
                            ? overviewCode
                            : mode === "mcp"
                            ? mcpConfigCode
                            : apiSampleCode
                        )
                      }
                      className="text-[11px] font-bold text-[#FF5A36] hover:text-[#0F1730] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedCode ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  <div className="p-5 font-mono text-xs leading-relaxed text-[#0F1730] overflow-x-auto bg-[#FFFFFF] selection:bg-[#FFE6DF]">
                    <pre>
                      <code>
                        {mode === "overview" && overviewCode}
                        {mode === "mcp" && mcpConfigCode}
                        {mode === "api" && `${apiSampleCode}\n\n// Response 200 OK:\n${apiSampleResponse}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MAIN BODY: MODE-SPECIFIC CONTENT (3 CARDS IN A ROW STYLE)                 */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mode === "overview" && (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  FOUNDATION CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em] mt-2">
                  Engineered for seamless enterprise integration
                </h2>
                <p className="text-sm text-[#4A5370] mt-3 leading-relaxed">
                  Everything you need to extract work telemetry, trigger automated workflows, and synchronize billing data into internal ERPs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {overviewPillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="p-7 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                          <Icon className="w-5 h-5 transition-colors" />
                        </div>
                        <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">
                          {p.title}
                        </h3>
                        <p className="text-xs text-[#4A5370] leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#E6E2D8]/60 flex items-center gap-1.5 text-xs font-bold text-[#FF5A36]">
                        <span>Read specification</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {mode === "mcp" && (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  NATURAL LANGUAGE WORKFORCE INTELLIGENCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em] mt-2">
                  Model Context Protocol (MCP) Server for Claude & Cursor
                </h2>
                <p className="text-sm text-[#4A5370] mt-3 leading-relaxed">
                  Query team time, project burn, and active Jira tickets directly from conversational AI assistants without writing SQL or building dashboards.
                </p>
              </div>

              {/* Product Visual Showcase: MCP Server Console */}
              <div className="mb-16 max-w-4xl mx-auto w-full min-w-0">
                <div className="w-full max-w-full rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-2xl overflow-hidden group">
                  <div className="bg-[#070E1A] p-1.5 sm:p-2 overflow-hidden w-full max-w-full">
                    <img
                      src="/images/figma/developer-console-mcp.png"
                      alt="Deskmerit Model Context Protocol (MCP) Server Console"
                      className="w-full max-w-full h-auto rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.005]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mcpFeatures.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="p-7 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between group"
                    >
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                          <Icon className="w-5 h-5 transition-colors" />
                        </div>
                        <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">
                          {p.title}
                        </h3>
                        <p className="text-xs text-[#4A5370] leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#E6E2D8]/60 flex items-center gap-1.5 text-xs font-bold text-[#FF5A36]">
                        <span>Install MCP package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {mode === "api" && (
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  CATALOGUE & SCHEMAS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em] mt-2">
                  Core REST API Endpoints
                </h2>
                <p className="text-sm text-[#4A5370] mt-3 leading-relaxed">
                  All requests require an <code className="bg-[#FFE6DF] text-[#C2361A] px-1.5 py-0.5 rounded text-xs">Authorization: Bearer dsk_live_...</code> header.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {apiEndpoints.map((ep) => (
                  <div
                    key={ep.path}
                    className="p-6 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono ${
                            ep.method === "GET"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#0F1730]">
                          {ep.path}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-1.5">
                        {ep.title}
                      </h3>
                      <p className="text-xs text-[#4A5370] leading-relaxed">
                        {ep.desc}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#E6E2D8]/60 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Format: JSON</span>
                      <span className="text-[#FF5A36] font-bold group-hover:underline flex items-center gap-1">
                        View schema <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <DeskmeritFaq customFaqs={devFaqs} />

        {/* Bottom CTA Band */}
        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
