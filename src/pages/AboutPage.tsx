import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  ShieldCheck,
  MousePointer,
  Lock,
  ArrowRight,
  Briefcase,
  Users,
  Building,
  Award,
  Download,
  Share2,
  CheckCircle2,
  Sparkles,
  FileText,
  Mail,
  Send,
  MapPin,
  Phone,
} from "lucide-react";

export function AboutPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isCareers = path.includes("careers");
  const isPartners = path.includes("partners");
  const isPress = path.includes("press");
  const isAbout = !isCareers && !isPartners && !isPress;

  const beliefs = [
    {
      title: "Trust first",
      desc: "If an employee would be embarrassed by a feature, we don't build it. No keystroke keyloggers, no secret webcam snaps.",
      icon: ShieldCheck,
    },
    {
      title: "One click",
      desc: "Every extra login or manual step is a tax on creative engineering work. We start from the ticket and remove friction.",
      icon: MousePointer,
    },
    {
      title: "Your data stays yours",
      desc: "Isolated at the database level, encrypted in transit and at rest, fully exportable in standard formats, and erasable upon request.",
      icon: Lock,
    },
  ];

  const offices = [
    {
      country: "India",
      tag: "Development Center",
      address: "517–520, 5th Floor, Homeland City, University Rd, Piplod, Surat",
      phone: "+91 97695 63055",
      zone: "IST Zone",
    },
    {
      country: "Australia",
      tag: "Regional Office",
      address: "2.03/202 Jells Road, Wheelers Hill & 8 Archer Grove, Rowville, VIC",
      phone: "+61 468 016 333",
      zone: "AEST Zone",
    },
    {
      country: "New Zealand",
      tag: "Regional Office",
      address: "Level 2, 221 Ihumatao Road, Mangere, Auckland 2022",
      phone: "+61 468 016 333",
      zone: "NZST Zone",
    },
  ];

  const teamMembers = [
    {
      name: "Keyur Mehta",
      role: "Managing Director",
      avatar: "/team/keyur-mehta.jpg",
      bio: "Guiding enterprise vision, governance, and ethical workplace principles."
    },
    {
      name: "Dishant Mehta",
      role: "Chief Technology Officer",
      avatar: "/team/dishant-mehta.jpg",
      bio: "Architect of Deskmerit's native Rust desktop engine and sub-20ms WebSocket sync."
    },
    {
      name: "Zil Mehta",
      role: "Sr. Project Manager",
      avatar: "/team/zil-mehta.jpg",
      bio: "Leading software delivery sprints, agile governance, and customer outcomes."
    },
    {
      name: "Sohail Khan",
      role: "Head of Strategy and Growth",
      avatar: "/team/sohail-khan.jpg",
      bio: "Scaling reseller partnerships, global MSP programs, and enterprise accounts."
    },
    {
      name: "Anshika Mishra",
      role: "Project Manager",
      avatar: "/team/anshika-mishra.jpg",
      bio: "Managing cross-functional engineering pods, quality metrics, and release cycles."
    },
    {
      name: "Shivani Mehta",
      role: "Technical Project Manager",
      avatar: "/team/shivani-mehta.jpg",
      bio: "Overseeing Jira and Azure DevOps integrations, API tooling, and client onboarding."
    },
    {
      name: "Himali Jaiswal",
      role: "Lead – Account Management",
      avatar: "/team/himali-jaiswal.jpg",
      bio: "Championing client satisfaction, rollout success, and SLA assurance."
    },
    {
      name: "Shashi Gupta",
      role: "Human Resource Manager",
      avatar: "/team/shashi-gupta.jpg",
      bio: "Nurturing our remote-first async culture and high-trust engineering talent."
    }
  ];

  const openRoles = [
    {
      title: "Senior Rust Systems Engineer",
      dept: "Desktop Engineering",
      location: "Remote (India / APAC)",
      type: "Full-Time",
      desc: "Optimize Deskmerit's lightweight native desktop client across macOS, Windows, and Linux (< 25MB RAM footprint).",
    },
    {
      title: "Staff Full-Stack Engineer (React & TypeScript)",
      dept: "Web & Analytics Platform",
      location: "Bengaluru, Pune or Remote",
      type: "Full-Time",
      desc: "Build lightning-fast timesheet visualizations, custom report builders, and real-time WebSocket sync engines.",
    },
    {
      title: "Integration Solutions Architect",
      dept: "Product & Ecosystem",
      location: "Sydney or Remote",
      type: "Full-Time",
      desc: "Deepen our integrations with Jira, Azure DevOps, OpenProject, and develop new MCP (Model Context Protocol) AI tooling.",
    },
    {
      title: "Enterprise Customer Success Lead",
      dept: "Growth & Operations",
      location: "Dubai or Pune",
      type: "Full-Time",
      desc: "Partner with CTOs, VP Eng, and HR leaders rolling out transparent productivity and time tracking for 500+ seat delivery teams.",
    },
  ];

  const partnerTiers = [
    {
      name: "White-Label & Reseller",
      desc: "Deliver Deskmerit under your own brand and domain with your logo, custom domain URL, and unified client billing.",
      benefit: "30% recurring margin",
      features: ["Custom white-label domain", "Branded desktop agent installer", "Multi-tenant master admin panel", "Dedicated reseller support manager"],
    },
    {
      name: "MSP & IT Services Partner",
      desc: "Standardize client time tracking and billable efficiency across all your managed service contracts.",
      benefit: "Volume tiered discounts",
      features: ["Consolidated partner invoicing", "Direct Jira & Azure DevOps tokens", "Client onboarding assistance", "Quarterly business reviews"],
    },
    {
      name: "HRMS & Ecosystem ISV",
      desc: "Deep API and webhook integration connecting Deskmerit's attendance telemetry into your HRMS or payroll engine.",
      benefit: "Co-marketing & marketplace listing",
      features: ["REST API & Webhooks sandbox", "Pre-built sync connectors", "Joint press releases and webinars", "Certified partner badge"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF4FB] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* BRAND DARK HERO SECTION (Consistent Platform Standard)                     */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#180C24] via-[#12081B] to-[#180C24] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden mb-12">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#61126E]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#A81CD0]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-slate-400 font-medium flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Company</span>
              <span className="text-slate-500">/</span>
              <span className="text-[#D8B4FE] font-bold">{isCareers ? "Careers" : isPartners ? "Partners" : isPress ? "Press & Media Kit" : "About Us"}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D8B4FE] mb-3">
                  {isCareers
                    ? "CAREERS AT DESKMERIT"
                    : isPartners
                    ? "PARTNER ECOSYSTEM"
                    : isPress
                    ? "PRESS & BRAND ASSETS"
                    : "ABOUT DESKMERIT"}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.28] sm:leading-[1.25] text-white mb-6">
                  {isCareers ? (
                    <>
                      Build software that respects{" "}
                      <span className="text-[#D8B4FE]">the craft of knowledge work.</span>
                    </>
                  ) : isPartners ? (
                    <>
                      Grow your consulting practice with{" "}
                      <span className="text-[#D8B4FE]">transparent time tracking.</span>
                    </>
                  ) : isPress ? (
                    <>
                      Press, brand guidelines, and{" "}
                      <span className="text-[#D8B4FE]">official media assets.</span>
                    </>
                  ) : (
                    <>
                      We believe time data should be honest —{" "}
                      <span className="text-[#D8B4FE]">and fair to both sides.</span>
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-6">
                  {isCareers
                    ? "We are a distributed engineering and product team solving one of the most fraught challenges in modern work: honest proof of work without dehumanizing surveillance."
                    : isPartners
                    ? "Whether you want to white-label Deskmerit under your agency domain, earn recurring referral commissions, or build custom HR integrations, we give partners high margins and dedicated engineering backing."
                    : isPress
                    ? "Download verified high-resolution SVG and PNG logos, brand guidelines, executive bios, and company boilerplate."
                    : "Deskmerit is built by Kombee Technologies, serving remote, hybrid, and IT services teams globally with zero-surveillance telemetry."}
                </p>

                <div className="flex flex-row items-center gap-3 sm:gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_16px_rgba(97, 18, 110,0.35)] hover:shadow-[0_6px_22px_rgba(97, 18, 110,0.45)] transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Start free trial</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0F1730] font-bold text-xs sm:text-sm border border-white/20 hover:border-white transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-sm backdrop-blur-xs"
                  >
                    <span>Book a demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Individual Clean Image (No UI wrappers) */}
              <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[16/10] sm:aspect-[4/3] group bg-slate-900 w-full max-w-full">
                  <img
                    src={
                      isCareers
                        ? "/images/company/careers-hero.jpg"
                        : isPartners
                        ? "/images/company/partners-hero.jpg"
                        : isPress
                        ? "/images/company/press-hero.jpg"
                        : "/images/company/about-hero.jpg"
                    }
                    alt={
                      isCareers
                        ? "Deskmerit Engineering Team and Culture"
                        : isPartners
                        ? "Deskmerit Global Partner Ecosystem"
                        : isPress
                        ? "Deskmerit Press Kit and Official Media Assets"
                        : "Deskmerit Company & Collaborative Engineering Pods"
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content based on which Company page is active */}
        {isCareers ? (
          /* ================= CAREERS PAGE ================= */
          <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Culture / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E8D5EC] shadow-subtle hover:border-[#61126E] hover:shadow-card transition-all group">
                <span className="text-2xl mb-3 block">🌍</span>
                <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">Remote-First & Async</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  We judge outcomes, not green status dots. Work when and where you are most productive.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E8D5EC] shadow-subtle hover:border-[#61126E] hover:shadow-card transition-all group">
                <span className="text-2xl mb-3 block">🦀</span>
                <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">High Craft Standards</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Rust on the desktop, TypeScript on the web, robust WebSocket replication. We care deeply about sub-20ms interactions.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E8D5EC] shadow-subtle hover:border-[#61126E] hover:shadow-card transition-all group">
                <span className="text-2xl mb-3 block">🤝</span>
                <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">Ethical Integrity</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  We never build features we wouldn't want running on our own personal computers.
                </p>
              </div>
            </div>

            {/* Open Roles List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0F1730] mb-6">Open Positions</h2>
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="p-6 rounded-2xl bg-white border border-[#E8D5EC] hover:border-[#61126E] transition-all shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-base text-[#0F1730]">{role.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F6EDF8] text-[#4E0E58] text-[10px] font-bold">
                        {role.type}
                      </span>
                    </div>
                    <div className="text-xs text-[#4A5370]">
                      {role.dept} · {role.location}
                    </div>
                    <p className="text-xs text-[#4A5370] leading-relaxed pt-1 max-w-2xl">
                      {role.desc}
                    </p>
                  </div>

                  <a
                    href="mailto:careers@deskmerit.com?subject=Application for Senior Role"
                    className="px-5 py-2.5 rounded-xl bg-[#0F1730] hover:bg-[#341640] hover:border-[#61126E] border border-transparent text-white font-bold text-xs shrink-0 transition-all flex items-center gap-1.5 self-start md:self-center cursor-pointer"
                  >
                    Apply for role <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ) : isPartners ? (
          /* ================= PARTNERS PAGE ================= */
          <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {partnerTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="p-7 rounded-2xl bg-white border border-[#E8D5EC] shadow-subtle flex flex-col justify-between hover:border-[#61126E] hover:shadow-card transition-all group"
                >
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#F6EDF8] text-[#4E0E58] inline-block mb-3">
                      {tier.benefit}
                    </span>
                    <h3 className="font-bold text-lg text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">{tier.name}</h3>
                    <p className="text-xs text-[#4A5370] leading-relaxed mb-6">{tier.desc}</p>
                    <ul className="space-y-2.5 text-xs text-[#0F1730] border-t border-[#E8D5EC] pt-4">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#61126E] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8D5EC]">
                    <Link
                      to="/contact?type=partner"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0F1730] hover:bg-[#341640] hover:border-[#61126E] border border-transparent text-white font-bold text-sm text-center flex items-center justify-center transition-all cursor-pointer shadow-sm"
                    >
                      Apply as Partner
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : isPress ? (
          /* ================= PRESS & MEDIA KIT ================= */
          <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Brand Logo Assets Card */}
              <div className="p-8 rounded-2xl bg-white border border-[#E8D5EC] shadow-subtle space-y-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-[#0F1730]">Official Brand Assets</h3>
                    <Download className="w-5 h-5 text-[#61126E]" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    Includes full vector SVGs, PNG marks on dark and light backgrounds, and our signature Ember flame emblem.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8D5EC]">
                  <a
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF4FB] hover:bg-[#E8D5EC] text-sm font-bold text-[#0F1730] transition-colors border border-[#E8D5EC] cursor-pointer"
                  >
                    <Download className="w-4 h-4" /> Download Media Package (.ZIP)
                  </a>
                </div>
              </div>

              {/* Media Inquiries & Press Contact */}
              <div className="p-8 rounded-2xl bg-white border border-[#E8D5EC] shadow-subtle space-y-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#0F1730] mb-2">Media & Press Inquiries</h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mb-4">
                    For interview requests with founders, briefings on workplace monitoring trends, or background commentary:
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-[#0F1730]">
                      <Mail className="w-4 h-4 text-[#61126E]" />
                      <span className="font-bold">press@deskmerit.com</span>
                    </div>
                    <div className="text-[#4A5370]">Average turnaround: under 4 business hours.</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8D5EC]">
                  <Link
                    to="/demo"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0F1730] hover:bg-[#341640] hover:border-[#61126E] border border-transparent text-white font-bold text-sm text-center flex items-center justify-center transition-all cursor-pointer shadow-sm"
                  >
                    Request Executive Interview
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* ================= ABOUT US (DEFAULT) ================= */
          <>
            {/* What We Believe */}
            <section className="py-20 bg-[#FFFFFF] border-y border-[#E8D5EC]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                    Our philosophy
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                    What we believe
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {beliefs.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={b.title}
                        className="p-8 rounded-2xl bg-white border border-[#E8D5EC] shadow-subtle hover:border-[#61126E] hover:shadow-card transition-all group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E8D5EC] text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                          <Icon className="w-5 h-5 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-3">{b.title}</h3>
                        <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">{b.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Leadership & Core Team */}
            <section className="py-20 bg-[#FAF4FB] border-b border-[#E8D5EC]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                    Executive Leadership & Core Team
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                    The team building high-trust software
                  </h2>
                  <p className="text-sm text-[#4A5370] mt-3 leading-relaxed">
                    Senior systems engineers, product designers, and client success leaders committed to ethical proof of work.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="group flex flex-col"
                    >
                      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-[#E8D5EC]/90 group-hover:border-[#61126E] group-hover:shadow-card transition-all duration-300">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="mt-3.5">
                        <h3 className="text-base sm:text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4A5370] mt-0.5 font-normal">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Global Presence with Simple Accent Cards */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                  Global Footprint
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                  Deskmerit Across the Globe
                </h2>
                <p className="text-base text-[#4A5370] mt-3 leading-relaxed">
                  Operating centralized engineering powerhouses with regional client relationship hubs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offices.map((off) => (
                  <div
                    key={off.country}
                    className="p-7 rounded-2xl bg-white border border-[#E8D5EC] hover:border-[#61126E] transition-all hover:shadow-card shadow-subtle flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#FAF4FB] border border-[#E8D5EC] flex items-center justify-center text-[#61126E] group-hover:scale-110 transition-transform shadow-xs">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                            {off.country}
                          </h3>
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FAF4FB] text-[#61126E] border border-[#E8D5EC] shadow-xs">
                          {off.tag}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mb-6 font-normal">
                        {off.address}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E8D5EC] flex items-center justify-between text-xs text-[#0F1730]">
                      <a
                        href={`tel:${off.phone.replace(/[^+\d]/g, "")}`}
                        className="flex items-center gap-2 text-xs font-semibold text-[#0F1730] group-hover:text-[#61126E] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#61126E]" />
                        <span>{off.phone}</span>
                      </a>
                      <span className="text-[11px] text-[#863A94] font-medium">
                        {off.zone}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Company & Partnership FAQs"
          category="FAQS"
          helpTitle="Looking to Partner with Deskmerit?"
          helpDescription="Whether you are an MSP reseller, HR technology ISV, or delivery consultancy, connect with our alliances team to explore partnership tiers."
          customFaqs={[
            {
              q: "What is Deskmerit's founding mission and philosophy?",
              a: "Deskmerit was founded on the conviction that software teams and agencies deserve transparent, auditable time data without invasive employee surveillance. We build high-trust productivity tooling that starts from the task token, not from webcam or keystroke snooping."
            },
            {
              q: "Where is Deskmerit hosted and where is customer data stored?",
              a: "Deskmerit provides multi-region data residency across AWS data centers in India (Mumbai), Australia (Sydney), UAE (me-central-1), and the United States (us-east-1), complying fully with local DPDP, NSW, and GDPR frameworks."
            },
            {
              q: "How does Deskmerit partner with IT services providers and MSPs?",
              a: "Our MSP and Reseller program provides multi-tenant agency dashboards, white-label client reporting, volume seat tier discounts, and dedicated priority migration assistance."
            },
            {
              q: "What open career opportunities are currently available?",
              a: "We hire globally across distributed engineering, product design, and enterprise customer success. View our open roles on this page or email careers@deskmerit.com."
            },
            {
              q: "How can journalists and media outlets request press briefings?",
              a: "Download our media kit directly from the Press tab, or reach out to press@deskmerit.com for executive commentary and high-resolution brand assets."
            }
          ]}
        />

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
