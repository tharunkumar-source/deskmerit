import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { Shield, FileText, CheckCircle2, Lock, ShieldCheck, Download, ArrowRight } from "lucide-react";

export function LegalPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  let activeDoc = "terms";
  let title = "Terms of Service";
  let subtitle = "These terms govern your subscription and use of Deskmerit software and services.";

  if (path.includes("privacy")) {
    activeDoc = "privacy";
    title = "Privacy Policy";
    subtitle = "Our strict commitments to data minimization, employee privacy, and non-intrusive monitoring.";
  } else if (path.includes("dpa")) {
    activeDoc = "dpa";
    title = "Data Processing Agreement (DPA)";
    subtitle = "Standard contractual clauses, GDPR, DPDP Act 2023, and global data privacy terms for enterprise controllers.";
  } else if (path.includes("subprocessors")) {
    activeDoc = "subprocessors";
    title = "Sub-processors List";
    subtitle = "Approved third-party cloud infrastructure and telemetry subprocessors utilized by Deskmerit.";
  } else if (path.includes("cookies")) {
    activeDoc = "cookies";
    title = "Cookie Policy";
    subtitle = "Information regarding essential session tokens, performance cookies, and opt-out preferences.";
  } else if (path.includes("sla")) {
    activeDoc = "sla";
    title = "Service Level Agreement (SLA)";
    subtitle = "99.9% availability commitment, priority support response times, and disaster recovery objectives.";
  }

  const legalDocs = [
    { slug: "terms", label: "Terms of Service", href: "/legal/terms" },
    { slug: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
    { slug: "dpa", label: "Data Processing Agreement", href: "/legal/dpa" },
    { slug: "subprocessors", label: "Sub-processors", href: "/legal/subprocessors" },
    { slug: "cookies", label: "Cookie Policy", href: "/legal/cookies" },
    { slug: "sla", label: "Service Level Agreement", href: "/legal/sla" },
  ];

  const subprocessors = [
    { name: "Amazon Web Services (AWS)", purpose: "Cloud infrastructure, encrypted RDS database hosting, KMS key management", location: "US, India (Mumbai), Australia (Sydney)" },
    { name: "Stripe, Inc.", purpose: "Payment processing and tax calculations", location: "Global" },
    { name: "Cloudflare, Inc.", purpose: "Edge CDN, DDoS mitigation and DNS routing", location: "Global" },
    { name: "WorkOS, Inc.", purpose: "Enterprise SAML SSO and SCIM directory sync", location: "United States" },
    { name: "Sentry (Functional Software)", purpose: "Application error monitoring and crash diagnostics (anonymised)", location: "United States" },
    { name: "Grafana Labs", purpose: "Infrastructure telemetry and cluster metrics", location: "United States" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Standard Consistent Dark Hero */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
          {/* Dual Radial Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#24305A]/40 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -top-24 right-10 w-[400px] h-[250px] bg-[#FF5A36]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Legal</span>
              <span className="text-slate-500">/</span>
              <span>{title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Pitch */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#FFE6DF]/15 border border-[#FF5A36]/30 text-[11px] font-bold uppercase tracking-wider text-[#FF5A36]">
                  DESKMERIT LEGAL GOVERNANCE
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  {title} <span className="text-[#FF5A36] block">& Compliance Standards.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  {subtitle} Operated by Kombee Technologies (India) Pvt. Ltd. Structured for corporate integrity, data minimization, and cross-border statutory compliance.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      window.print();
                    }}
                    className="px-6 py-3.5 rounded-[12px] bg-[#FF5A36] hover:bg-[#E04826] text-white font-extrabold text-sm shadow-lg hover:shadow-glow-ember transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    Print or save PDF <Download className="w-4 h-4" />
                  </a>
                  <Link
                    to="/privacy-promise"
                    className="px-6 py-3.5 rounded-[12px] bg-[#10192A] border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-all"
                  >
                    Privacy Promise & Security
                  </Link>
                </div>
              </div>

              {/* Right Column: Floating macOS Mockup */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-2xl overflow-hidden backdrop-blur-md">
                  {/* macOS Window Titlebar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#0A1628] border-b border-slate-800">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/legal/{activeDoc}
                    </div>
                    <div className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                      Audited 2026
                    </div>
                  </div>

                  {/* Window Body Widget */}
                  <div className="p-6 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Jurisdiction & Entity</span>
                        <span className="text-[#FF5A36] font-bold">Kombee Technologies</span>
                      </div>
                      <div className="text-sm font-bold text-white">
                        {title} · Active Version 2.8
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-left">
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Statutory Framework</div>
                        <div className="text-xs font-bold text-[#FF5A36] mt-0.5">GDPR · DPDP 2023</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Data Residency</div>
                        <div className="text-xs font-bold text-white mt-0.5">Mumbai · Sydney · US</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 text-[11px] space-y-1.5">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Surveillance Tech:</span>
                        <span className="text-red-400 font-bold">Keystrokes Blocked</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Database Encryption:</span>
                        <span className="text-[#FF5A36] font-bold">AES-256 KMS</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Effective: October 2026</span>
                      <span className="text-[#FF5A36] font-semibold">Legally Binding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Document Content Card */}
        <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card space-y-8">
            <div className="border-b border-[#E6E2D8] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] block mb-1">
                  Deskmerit Legal Governance
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">{title}</h1>
                <p className="text-xs text-[#4A5370] mt-1.5">{subtitle}</p>
                <div className="text-[11px] text-[#9AA1B2] mt-2">
                  Effective Date: October 2026 · Kombee Technologies (India) Pvt. Ltd.
                </div>
              </div>

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  window.print();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F7F4EE] hover:bg-[#E6E2D8] text-xs font-bold text-[#0F1730] shrink-0 self-start transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Print / Save PDF
              </a>
            </div>

            {/* Document Body depending on active legal slug */}
            {activeDoc === "subprocessors" ? (
              <div className="space-y-4">
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Deskmerit utilizes the following third-party infrastructure and sub-processors to deliver high-availability services. Each vendor undergoes strict security, SOC 2, and DPA reviews:
                </p>
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left text-xs border border-[#E6E2D8] rounded-xl overflow-hidden">
                    <thead className="bg-[#F7F4EE] text-[#0F1730]">
                      <tr className="border-b border-[#E6E2D8]">
                        <th className="py-3 px-4 font-bold">Sub-processor</th>
                        <th className="py-3 px-4 font-bold">Purpose</th>
                        <th className="py-3 px-4 font-bold">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8] text-[#4A5370]">
                      {subprocessors.map((s, idx) => (
                        <tr key={idx}>
                          <td className="py-3 px-4 font-semibold text-[#0F1730]">{s.name}</td>
                          <td className="py-3 px-4">{s.purpose}</td>
                          <td className="py-3 px-4">{s.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : activeDoc === "sla" ? (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. 99.9% Monthly Uptime Commitment</h3>
                  <p>
                    Deskmerit commits to providing at least 99.9% uptime availability for the cloud syncing API and web reporting platform across each calendar month.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Service Credits</h3>
                  <p>
                    If monthly uptime falls below 99.9%, customers are entitled to service credits on their next billing cycle:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>99.0% to 99.89%: 10% credit of monthly billing</li>
                    <li>95.0% to 98.99%: 25% credit of monthly billing</li>
                    <li>Below 95.0%: 50% credit of monthly billing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">3. Recovery Point & Recovery Time</h3>
                  <p>
                    • Recovery Point Objective (RPO): 15 minutes via continuous encrypted WAL streaming.
                    <br />
                    • Recovery Time Objective (RTO): 4 hours. Automated hot standby database replication.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">4. Local Offline Resilience</h3>
                  <p>
                    Because the Deskmerit desktop agent operates fully offline, local time recording and task capture continue without interruption even during upstream network outages.
                  </p>
                </div>
              </div>
            ) : activeDoc === "privacy" ? (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. Purpose Limitation & Data Minimization</h3>
                  <p>
                    We collect only the telemetry strictly required to attribute work time to client projects and verify active work hours. We do not inspect personal emails, bank accounts, or non-work applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Non-Negotiable Privacy Tenets</h3>
                  <p>
                    • No Keystroke Logging: We never record typed keys or passwords.
                    <br />
                    • No Secret Webcam or Microphone Access: The application contains zero audio/video capture hardware hooks.
                    <br />
                    • Screenshots Blurred by Default: Screenshots are optional, announced, and blurred by default.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">3. Employee Private Time</h3>
                  <p>
                    Every team member retains unilateral control to activate Private Time with one click. When Private Time is active, all monitoring is paused entirely and no data is transmitted to managers.
                  </p>
                </div>
              </div>
            ) : activeDoc === "cookies" ? (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. Essential Authentication Tokens</h3>
                  <p>
                    We use secure HTTP-only cookies strictly for user session state, SAML single sign-on authentication, and CSRF protection. These cannot be disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Analytics & Preferences</h3>
                  <p>
                    We store your preferred currency (INR, AUD, NZD, AED, SAR, USD) and UI density locally in browser storage to provide a seamless browsing experience.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. License & Subscription</h3>
                  <p>
                    Deskmerit licenses its desktop tracking client and web reporting suite on a per-active-seat subscription basis. Subscriptions renew automatically until cancelled.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Acceptable Use Policy</h3>
                  <p>
                    The software must be deployed in accordance with applicable labor laws. Employers are responsible for providing mandatory statutory employee notices (such as the 14-day notice required under NSW Workplace Surveillance laws or DPDP Act notices in India).
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">3. Data Ownership & Deletion</h3>
                  <p>
                    Customer retains full and unencumbered ownership of all tracked records. Upon termination of service, customers may request complete cryptographic erasure of all stored databases and backups within 30 days.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Legal & Compliance FAQs"
          category="FAQS"
          helpTitle="Need a Custom Data Processing Addendum?"
          helpDescription="Enterprise customers on annual commitments can request counter-signed DPAs with custom model clauses, audit rights, and specialized security SLA schedules."
          customFaqs={[
            {
              q: "Can enterprise customers execute a bilateral DPA with Deskmerit?",
              a: "Yes. We offer standard Data Processing Agreements including EU/UK Standard Contractual Clauses (SCCs), Swiss addenda, and India DPDP 2023 compliance terms. Contact legal@deskmerit.com for execution."
            },
            {
              q: "How does Deskmerit comply with the Indian DPDP Act 2023?",
              a: "Deskmerit acts as a Data Processor on behalf of the customer (Data Fiduciary). Telemetry capture requires explicit prior employee consent, and personal data can be homed exclusively within AWS Mumbai (ap-south-1)."
            },
            {
              q: "What is your uptime guarantee under the Service Level Agreement (SLA)?",
              a: "Deskmerit guarantees 99.9% monthly availability for cloud ingestion APIs and web dashboard services. In the event of an SLA breach, enterprise accounts receive automated service billing credits."
            },
            {
              q: "What notice period is provided before adding new subprocessors?",
              a: "We maintain a public Sub-processors registry and provide at least 30 calendar days' advance written notice to designated enterprise contacts before engaging any new infrastructure or telemetry subprocessor."
            },
            {
              q: "How can a customer request complete data export or deletion upon termination?",
              a: "Account owners can trigger an automated JSON/CSV archive export from their admin dashboard. Upon contract termination, all primary database records and automated backups are purged within 30 days."
            }
          ]}
        />

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
