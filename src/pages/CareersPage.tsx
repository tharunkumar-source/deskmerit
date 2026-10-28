import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  ChevronDown,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  Globe,
  Terminal,
  HeartHandshake,
  ShieldCheck,
  Send,
  X,
} from "lucide-react";

interface Role {
  id: string;
  title: string;
  level: string;
  experience: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
  niceToHave?: string[];
}

export function CareersPage() {
  const [openRoleId, setOpenRoleId] = useState<string | null>("graphic-designer");
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<Role | null>(null);
  const [applySubmitted, setApplySubmitted] = useState(false);

  const toggleRole = (id: string) => {
    setOpenRoleId((prev) => (prev === id ? null : id));
  };

  const openRoles: Role[] = [
    {
      id: "senior-dotnet-rust",
      title: "Senior .Net / Rust Systems Developer",
      level: "Senior",
      experience: "6 - 9 years",
      type: "Full Time",
      location: "Surat / Remote",
      department: "Desktop Core Engine",
      description:
        "We are looking for an experienced Senior Systems Developer to architect and optimize our cross-platform desktop daemon on Windows, macOS, and Linux. You will develop low-overhead background workers (< 25MB RAM footprint), asynchronous SQLite replication, and secure OS-level activity monitors with zero battery degradation.",
      requirements: [
        "Extensive experience with .Net Core / C# or modern Rust for native desktop systems.",
        "Deep familiarity with Windows APIs (Win32, UI Automation) and macOS/Linux event dispatchers.",
        "Demonstrated ability to write multithreaded, memory-safe, and zero-crash background services.",
        "Experience with local SQLite caching, WebSocket state synchronization, and offline queueing.",
        "Passion for software craft, transparent logging, and privacy-preserving architecture.",
      ],
      niceToHave: [
        "Experience building daemon installers with WiX, MSI, PKG, or Debian packages.",
        "Contributions to open-source system utilities or telemetry libraries.",
      ],
    },
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      level: "Mid Level",
      experience: "3 - 5 years",
      type: "Full Time",
      location: "Remote",
      department: "Brand & Creative",
      description:
        "We are looking for a talented and imaginative Graphic Designer to join our team! As a Graphic Designer, you will create visually compelling designs for digital and print media, ensuring brand consistency and engaging user experiences. You will collaborate with marketing and design teams to develop innovative visuals that communicate ideas effectively.",
      requirements: [
        "Extensive experience in graphic design, branding, and digital media.",
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign, XD, etc.) and Figma.",
        "Strong portfolio showcasing creative and strategic design work for modern software products.",
        "Ability to lead projects, manage deadlines, and provide creative direction for campaigns.",
        "Experience in UI/UX design and motion graphics is a plus.",
      ],
      niceToHave: [
        "Familiarity with SaaS product mockups, icon systems, and dark/light mode asset creation.",
        "Basic understanding of front-end web constraints (SVG, responsive layouts, web typography).",
      ],
    },
    {
      id: "solution-architect",
      title: "Solution Architect",
      level: "Senior",
      experience: "6 - 9 years",
      type: "Full Time",
      location: "Remote",
      department: "Enterprise Solutions",
      description:
        "Partner with enterprise IT leadership, CTOs, and global systems integrators to architect custom workforce telemetry deployments, SSO/SCIM integrations, and large-scale Jira/Azure DevOps synchronizations for 5,000+ seat delivery teams.",
      requirements: [
        "Proven experience designing scalable B2B enterprise architectures and multi-tenant integrations.",
        "Hands-on expertise with OAuth 2.0, SAML 2.0, SCIM provisioning, and REST/GraphQL APIs.",
        "Familiarity with enterprise ERP/HRMS systems (Sqalible, SAP, Workday, Keka, Darwinbox).",
        "Strong consultative presentation skills and ability to lead deep architectural reviews.",
        "Experience evaluating security compliance, data residency frameworks, and audit logging.",
      ],
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      level: "Mid Level",
      experience: "3 - 5 years",
      type: "Full Time",
      location: "Surat / Remote",
      department: "Cloud & Infrastructure",
      description:
        "Lead the automation, reliability, and security of our multi-region cloud infrastructure. You will manage Kubernetes clusters, automate zero-downtime CI/CD deployment pipelines, and ensure sub-50ms ingestion latency for millions of daily activity events.",
      requirements: [
        "Demonstrated experience with AWS or GCP infrastructure, Terraform, and Docker/Kubernetes.",
        "Strong scripting abilities in Python, Bash, or Go.",
        "Familiarity with distributed monitoring stacks (Prometheus, Grafana, OpenTelemetry, Datadog).",
        "Experience managing Postgres/ClickHouse replication and disaster recovery protocols.",
        "Rigorous adherence to SOC-2 and ISO 27001 infrastructure controls.",
      ],
    },
    {
      id: "qa-tester",
      title: "QA Tester (Mobile & Desktop Automation)",
      level: "Mid Level",
      experience: "3 - 5 years",
      type: "Full Time",
      location: "Remote",
      department: "Quality Engineering",
      description:
        "Build end-to-end automated testing suites for our desktop clients, web portals, and mobile extensions. You will ensure pixel-perfect visual fidelity, multi-OS regression coverage, and high-load stress testing across diverse hardware setups.",
      requirements: [
        "Proven background in automated testing frameworks (Playwright, Cypress, Selenium, or Appium).",
        "Experience writing test plans, bug reproduction scripts, and performance regression benchmarks.",
        "Familiarity testing desktop native apps across Windows 10/11, macOS Sequoia/Sonoma, and Ubuntu.",
        "Comfortable with CI/CD GitHub Actions integration and test telemetry reporting.",
      ],
    },
    {
      id: "lead-generation-executive",
      title: "Lead Generation Executive",
      level: "Mid Level",
      experience: "3 - 5 years",
      type: "Full Time",
      location: "Mumbai",
      department: "Sales & Growth",
      description:
        "Drive outbound sales pipelines and connect with IT service providers, software consultancies, and digital agencies across India, APAC, and the Middle East seeking ethical, task-bound time tracking software.",
      requirements: [
        "Demonstrated track record in B2B SaaS prospecting, outbound email outreach, and LinkedIn Sales Navigator.",
        "Excellent written and verbal communication in English; additional business languages are a plus.",
        "Familiarity with modern CRM platforms (HubSpot, Salesforce) and sequencing tools.",
        "Goal-oriented mentality with consistent achievement of pipeline generation targets.",
      ],
    },
    {
      id: "staff-fullstack",
      title: "Staff Full-Stack Engineer (React & TypeScript)",
      level: "Senior",
      experience: "5 - 8 years",
      type: "Full Time",
      location: "Remote",
      department: "Web & Analytics Platform",
      description:
        "Design and scale our real-time analytics web dashboard. You will build high-density interactive timesheet grids, custom CSV/Excel export engines, and WebSocket synchronization feeds that render 10,000+ data rows with 60fps smoothness.",
      requirements: [
        "Deep mastery of React, TypeScript, Next.js or Vite, Tailwind CSS, and state management.",
        "Expertise in virtualization (TanStack Table, Virtual List) and high-performance canvas/SVG charts.",
        "Solid back-end proficiency with Node.js/Go and REST/WebSocket APIs.",
        "Strong aesthetic sensibility and devotion to micro-interactions and accessible UX.",
      ],
    },
  ];

  const careersFaqs = [
    {
      q: "What is Deskmerit's work policy and location model?",
      a: "Deskmerit is remote-first and outcome-driven. We have collaborative engineering hubs in Surat, Pune, Bengaluru, and Sydney, but team members have full autonomy to work remotely across compatible APAC/EMEA timezones.",
    },
    {
      q: "How does the interview process work?",
      a: "Our process consists of 4 focused stages: (1) An initial 30-minute intro conversation, (2) A practical craft/take-home or system architecture walkthrough, (3) A cross-functional team culture fit chat, and (4) An offer discussion with competitive compensation and equity incentives.",
    },
    {
      q: "What benefits and equipment does Deskmerit provide?",
      a: "All full-time team members receive a top-spec laptop (M3 MacBook Pro or Dell XPS), an ergonomic home-office stipend, comprehensive health insurance for self and dependents, annual learning budgets, and flexible paid time off.",
    },
    {
      q: "How are promotions and career milestones evaluated?",
      a: "We evaluate team members through transparent engineering and career ladders based on delivered impact, craft quality, and mentorship — never through surveillance metrics or green activity dots.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* 1. DARK HERO SECTION (Consistent Deskmerit Platform Standard)              */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-20 lg:pt-12 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#61126E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-slate-400 font-medium flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Company</span>
              <span className="text-slate-500">/</span>
              <span className="text-[#D8B4FE] font-bold">Careers</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headline, Overline, Description */}
              <div className="col-span-1 lg:col-span-7 space-y-6 min-w-0 max-w-full w-full">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#F0ABFC] bg-[#61126E]/40 px-3.5 py-1 rounded-full inline-block border border-[#A81CD0]/50 shadow-xs">
                  CAREERS AT DESKMERIT
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Build the future of ethical{" "}
                  <span className="text-[#D8B4FE]">workforce intelligence.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  We are engineers, designers, and systems architects building lightweight,
                  privacy-first tools that eliminate manual timesheets without invasive spyware.
                  Work with autonomy, high craft standards, and genuine respect for deep work.
                </p>

                <div className="flex flex-row items-center gap-3 sm:gap-3.5 pt-2">
                  <a
                    href="#open-roles"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_16px_rgba(97, 18, 110,0.35)] hover:shadow-[0_6px_22px_rgba(97, 18, 110,0.45)] transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Explore Open Roles</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#culture"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Our Culture & Values</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Showcase with Authentic General Culture Images (White Window Standard) */}
              {/* Right Column: Individual Clean Image (No UI wrappers) */}
              <div className="col-span-1 lg:col-span-5 min-w-0 max-w-full w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[16/10] sm:aspect-[4/3] group bg-slate-900 w-full max-w-full">
                  <img
                    src="/images/company/careers-hero.jpg"
                    alt="Life at Deskmerit & Engineering Team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CULTURE & VALUES SECTION                                               */}
        {/* ========================================================================= */}
        <section id="culture" className="py-20 lg:py-24 bg-[#FAF4FB] border-b border-[#E8D5EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-[#61126E] font-mono">
                HOW WE OPERATE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em] mt-2">
                Designed for builders who value autonomy and craft
              </h2>
              <p className="text-sm text-[#4A5370] mt-3 leading-relaxed">
                We believe exceptional software is built by autonomous, empowered teams with
                uninterrupted blocks of focus time and honest feedback loops.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="p-8 rounded-2xl bg-white border border-[#E8D5EC] shadow-subtle hover:border-[#61126E] hover:shadow-card transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#F6EDF8] text-[#61126E] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">
                  Remote-First & Async
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                  We measure delivered outcomes, shipped releases, and code quality — never green
                  status dots or idle minutes. Work when and where your mind operates at its peak.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E8D5EC] shadow-subtle hover:border-[#61126E] hover:shadow-card transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#F6EDF8] text-[#61126E] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">
                  High Craft Standards
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                  Rust on the desktop, TypeScript on the web, robust WebSocket replication. We care
                  deeply about sub-20ms responsiveness and clean, maintainable architecture.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-[#E8D5EC] shadow-subtle hover:border-[#61126E] hover:shadow-card transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#F6EDF8] text-[#61126E] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-lg text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">
                  Ethical Integrity
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                  We strictly refuse to build keyloggers, webcam stalkerware, or stealth trackers. We
                  only build features we would proudly run on our own personal machines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Team Workplace Photo Gallery */}
        <section className="py-16 bg-[#FFFFFF] border-b border-[#E8D5EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-subtle border border-[#E8D5EC] group relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team Whiteboard and Sprint Planning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1730]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-bold">Collaborative Sprint Planning</div>
                  <div className="text-[10px] text-slate-300">Bi-weekly async roadmap alignments</div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-subtle border border-[#E8D5EC] group relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                  alt="Ergonomic Workstation Setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1730]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-bold">Home Office & Hardware Stipend</div>
                  <div className="text-[10px] text-slate-300">Top-spec M3 Max or Dell XPS + 4K monitors</div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-subtle border border-[#E8D5EC] group relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Global Engineering Team Hackathon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1730]/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-bold">Annual Engineering Summits</div>
                  <div className="text-[10px] text-slate-300">In-person hackathons & regional pods</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. OPEN ROLES ACCORDION (Exact Reference Image 1 Layout + Deskmerit Branding) */}
        {/* ========================================================================= */}
        <section id="open-roles" className="py-20 lg:py-28 bg-[#FFFFFF]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title matching Image 1 */}
            <div className="border-b border-[#0F1730] pb-5 mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight">
                Open Roles
              </h2>
            </div>

            {/* Accordion List matching Image 1 structure */}
            <div className="divide-y divide-[#E8D5EC]">
              {openRoles.map((role) => {
                const isOpen = openRoleId === role.id;
                return (
                  <div key={role.id} className="py-6 first:pt-2 transition-all">
                    {/* Collapsible Header Row matching Image 1 */}
                    <button
                      type="button"
                      onClick={() => toggleRole(role.id)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer py-1"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors leading-snug">
                        {role.title} · {role.level} ({role.experience}) · {role.type} ·{" "}
                        {role.location}
                      </span>

                      <div className="ml-4 shrink-0 text-[#0F1730] group-hover:text-[#61126E] transition-transform duration-200">
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#61126E]" : "text-[#0F1730]"
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expanded Details matching Image 1 */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="overflow-hidden pt-4 pb-2 space-y-5"
                        >
                          {/* Role Description */}
                          <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed max-w-4xl">
                            {role.description}
                          </p>

                          {/* Requirements Section matching Image 1 */}
                          <div className="space-y-2.5 pt-1">
                            <h4 className="text-sm font-extrabold text-[#0F1730]">Requirements</h4>
                            <ul className="space-y-2 text-xs sm:text-sm text-[#4A5370]">
                              {role.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="text-[#61126E] font-bold mt-1 text-xs">•</span>
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {role.niceToHave && role.niceToHave.length > 0 && (
                            <div className="space-y-2.5 pt-1">
                              <h4 className="text-sm font-extrabold text-[#0F1730]">
                                Preferred Qualifications
                              </h4>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#4A5370]">
                                {role.niceToHave.map((nth, i) => (
                                  <li key={i} className="flex items-start gap-2.5">
                                    <span className="text-[#0F1730] font-bold mt-1 text-xs">•</span>
                                    <span>{nth}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Action Buttons: [View More] and [Apply] matching Image 1 with Deskmerit Branding */}
                          <div className="flex flex-wrap items-center gap-3 pt-3">
                            <button
                              type="button"
                              onClick={() => {
                                const details = `Role: ${role.title}\nDepartment: ${role.department}\nExperience: ${role.experience}\nLocation: ${role.location}\n\nDescription:\n${role.description}\n\nRequirements:\n${role.requirements.join("\n- ")}`;
                                navigator.clipboard?.writeText(details);
                                alert(`Copied full job specifications for "${role.title}" to clipboard!`);
                              }}
                              className="px-6 py-2.5 rounded-full bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
                            >
                              View More
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setSelectedRoleForApply(role);
                                setApplySubmitted(false);
                              }}
                              className="px-6 py-2.5 rounded-full bg-[#61126E] hover:bg-[#4E0E58] text-white font-bold text-xs transition-colors shadow-xs hover:shadow-md cursor-pointer"
                            >
                              Apply
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CAREER FAQS SECTION                                                    */}
        {/* ========================================================================= */}
        <DeskmeritFaq
          title="Frequently Asked Questions"
          category="CAREERS & HIRING"
          customFaqs={careersFaqs}
          helpTitle="Have a Question About Joining Our Team?"
          helpDescription="Reach out directly to our talent team at careers@deskmerit.com. We reply to all engineering and design inquiries within 48 hours."
        />

        {/* ========================================================================= */}
        {/* 5. SQALIBLE-STYLE BOOK DEMO / CTA BANNER (Deskmerit Brand Standard)       */}
        {/* ========================================================================= */}
        <DeskmeritCtaBand
          pretitle="Get Started"
          title="Experience automatic time tracking and task binding in action with our engineering specialists."
          trialText="Start free trial"
          demoText="Book a demo"
        />
      </main>

      <DeskmeritFooter />

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE APPLICATION MODAL                                          */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedRoleForApply && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl border border-[#E8D5EC] shadow-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedRoleForApply(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-[#0F1730] rounded-xl hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {applySubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F1730]">Application Received!</h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed max-w-md mx-auto">
                    Thank you for applying to{" "}
                    <span className="font-bold text-[#0F1730]">{selectedRoleForApply.title}</span>.
                    Our talent team will review your profile and reply within 48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedRoleForApply(null)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#0F1730] text-white font-bold text-xs hover:bg-[#24305A] transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F0ABFC] font-mono">
                      JOB APPLICATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1730] mt-1">
                      {selectedRoleForApply.title}
                    </h3>
                    <p className="text-xs text-[#4A5370] mt-1">
                      {selectedRoleForApply.department} · {selectedRoleForApply.location}
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setApplySubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-[#0F1730] mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB] text-[#0F1730] focus:outline-none focus:border-[#61126E]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#0F1730] mb-1">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="alex@domain.com"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB] text-[#0F1730] focus:outline-none focus:border-[#61126E]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0F1730] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB] text-[#0F1730] focus:outline-none focus:border-[#61126E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1730] mb-1">
                        Portfolio / GitHub / LinkedIn URL *
                      </label>
                      <input
                        required
                        type="url"
                        placeholder="https://github.com/username or linkedin.com/in/alex"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB] text-[#0F1730] focus:outline-none focus:border-[#61126E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F1730] mb-1">
                        Brief Note or Cover Letter
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us why you are interested in Deskmerit and what projects you're proud of..."
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB] text-[#0F1730] focus:outline-none focus:border-[#61126E]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedRoleForApply(null)}
                        className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#4A5370] hover:bg-slate-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-full bg-[#61126E] hover:bg-[#4E0E58] text-white font-bold text-xs transition-colors shadow-md flex items-center gap-1.5"
                      >
                        <span>Submit Application</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
