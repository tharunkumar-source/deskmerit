import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  Download,
  Laptop,
  Monitor,
  Check,
  X,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Smartphone,
} from "lucide-react";

export function DownloadPage() {
  const [detectedOs, setDetectedOs] = useState<"Windows" | "macOS" | "Linux">("macOS");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) {
      setDetectedOs("Windows");
    } else if (userAgent.includes("mac")) {
      setDetectedOs("macOS");
    } else if (userAgent.includes("linux")) {
      setDetectedOs("Linux");
    }
  }, []);

  const handleDownload = (osName: string, filename: string) => {
    setDownloadSuccess(`Deskmerit for ${osName} (${filename}) download simulated.`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

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
              <Link to="/features" className="hover:underline text-slate-300">Product</Link>
              <span className="text-slate-500">/</span>
              <span className="text-[#D8B4FE] font-bold">Downloads</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D8B4FE] mb-3">
                  NATIVE LIGHTWEIGHT DESKTOP ENGINE
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.28] sm:leading-[1.25] text-white mb-6">
                  Download Deskmerit for your computer.{" "}
                  <span className="text-[#D8B4FE]">macOS, Windows & Linux.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-6">
                  One lightweight, signed desktop agent. Native performance with less than 25MB RAM footprint and offline cache sync.
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

                {downloadSuccess && (
                  <div className="p-3 rounded-xl bg-[#F6EDF8]/20 border border-[#61126E]/40 text-xs text-[#D8B4FE] font-bold flex items-center gap-2">
                    <Check className="w-4 h-4" /> {downloadSuccess}
                  </div>
                )}
              </div>

              {/* Right Column: Authentic Native Desktop Tray Screenshot */}
              <div className="col-span-1 lg:col-span-6 flex justify-center items-center min-w-0 max-w-full w-full">
                <div className="relative max-w-full sm:max-w-[360px] w-full mx-auto overflow-hidden sm:overflow-visible">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#61126E]/25 via-[#38BDF8]/20 to-[#61126E]/15 rounded-3xl blur-xl opacity-75" />
                  <div className="relative rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
                    <img
                      src="/images/figma/tray-active-tracking.png"
                      alt="Deskmerit Pulse Track Native Desktop Client Live Tracking Session"
                      className="w-full max-w-full h-auto object-contain block"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 OS Download Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Windows */}
            <div
              className={`bg-white rounded-2xl p-7 border transition-all flex flex-col justify-between group ${
                detectedOs === "Windows"
                  ? "border-[#61126E] shadow-card ring-2 ring-[#61126E]/30"
                  : "border-[#E8D5EC] hover:border-[#61126E] hover:shadow-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E8D5EC] text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
                    <Monitor className="w-5 h-5 transition-colors" />
                  </div>
                  {detectedOs === "Windows" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F6EDF8] text-[#4E0E58] border border-[#61126E]/20">
                      Detected
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-1">
                  Windows
                </h3>
                <p className="text-xs text-[#4A5370] mb-6 leading-relaxed">
                  Windows 10 and 11 · .exe / .msi silent installer
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDownload("Windows", "deskmerit-setup-v1.0.exe")}
                  className="w-full py-3 rounded-[12px] bg-[#61126E] hover:bg-[#4E0E58] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-glow-ember transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download for Windows
                </button>
                <div className="text-[11px] text-[#9AA1B2] text-center mt-2 font-medium">
                  v1.2.4 · 22 MB · Signed MSI
                </div>
              </div>
            </div>

            {/* macOS */}
            <div
              className={`bg-white rounded-2xl p-7 border transition-all flex flex-col justify-between group ${
                detectedOs === "macOS"
                  ? "border-[#61126E] shadow-card ring-2 ring-[#61126E]/30"
                  : "border-[#E8D5EC] hover:border-[#61126E] hover:shadow-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E8D5EC] text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
                    <Laptop className="w-5 h-5 transition-colors" />
                  </div>
                  {detectedOs === "macOS" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F6EDF8] text-[#4E0E58] border border-[#61126E]/20">
                      Detected
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-1">
                  macOS
                </h3>
                <p className="text-xs text-[#4A5370] mb-6 leading-relaxed">
                  macOS 12+ · Apple silicon & Intel · Apple Notarised
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDownload("macOS", "Deskmerit-v1.0-Universal.dmg")}
                  className="w-full py-3 rounded-[12px] bg-[#0F1730] hover:bg-[#61126E] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download for Mac
                </button>
                <div className="text-[11px] text-[#9AA1B2] text-center mt-2 font-medium">
                  v1.2.4 · 28 MB · Universal binary
                </div>
              </div>
            </div>

            {/* Linux */}
            <div
              className={`bg-white rounded-2xl p-7 border transition-all flex flex-col justify-between group ${
                detectedOs === "Linux"
                  ? "border-[#61126E] shadow-card ring-2 ring-[#61126E]/30"
                  : "border-[#E8D5EC] hover:border-[#61126E] hover:shadow-card"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E8D5EC] text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
                    <Terminal className="w-5 h-5 transition-colors" />
                  </div>
                  {detectedOs === "Linux" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F6EDF8] text-[#4E0E58] border border-[#61126E]/20">
                      Detected
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-1">
                  Linux
                </h3>
                <p className="text-xs text-[#4A5370] mb-6 leading-relaxed">
                  Ubuntu, Debian, Fedora, Arch · .deb · .rpm · AppImage
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDownload("Linux", "deskmerit-linux.AppImage")}
                  className="w-full py-3 rounded-[12px] bg-white border border-[#0F1730] text-[#0F1730] hover:bg-[#FAF4FB] font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download for Linux
                </button>
                <div className="text-[11px] text-[#9AA1B2] text-center mt-2 font-medium">
                  v1.2.4 · 19 MB · Tarball & AppImage
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Launch Consent Screen Preview (Wireframe Page 17) */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E8D5EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#61126E]">
                  First launch
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  You’ll see exactly what’s tracked — before anything is.
                </h2>
                <p className="text-sm text-[#4A5370] leading-relaxed">
                  A mandatory one-time consent screen explains clearly what Deskmerit records and what it never does. Nothing is tracked until you’ve seen it and clicked proceed.
                </p>
                <div className="pt-2">
                  <Link
                    to="/privacy-promise"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E0E58] hover:underline"
                  >
                    Read our full employee privacy promise <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Consent Screen Interactive Simulation */}
              <div className="lg:col-span-6 max-w-md mx-auto w-full">
                <div className="bg-[#140A1C] text-white rounded-[24px] p-7 border border-[#2A1433] shadow-2xl space-y-5">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-[#2A1433]">
                    <span className="w-7 h-7 rounded-lg bg-[#61126E] text-white font-black text-sm flex items-center justify-center font-display">
                      ●
                    </span>
                    <h4 className="font-bold text-sm text-white">Before we start</h4>
                  </div>

                  <p className="text-xs text-[#9AA1B2]">
                    Your organisation uses Deskmerit to record working time and build honest timesheets.
                  </p>

                  <div className="space-y-2 py-1 text-xs">
                    <div className="flex items-center gap-2 text-[#E8D5EC]">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Apps, websites and window titles</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#E8D5EC]">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Active vs idle time (not what you type)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#E8D5EC]">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>The task you choose to track</span>
                    </div>

                    <div className="border-t border-[#2A1433] my-3 pt-3 space-y-2">
                      <div className="flex items-center gap-2 text-[#E5484D]">
                        <X className="w-4 h-4 text-[#E5484D] shrink-0" />
                        <span>Keystrokes, webcam or microphone (Never)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#E5484D]">
                        <X className="w-4 h-4 text-[#E5484D] shrink-0" />
                        <span>Document body content (Titles only)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#E5484D]">
                        <X className="w-4 h-4 text-[#E5484D] shrink-0" />
                        <span>Anything during Private Time (Never)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => alert("Consent confirmed! Tracking ready.")}
                      className="flex-1 py-2.5 rounded-[10px] bg-[#61126E] hover:bg-[#4E0E58] text-white font-extrabold text-xs shadow-md hover:shadow-glow-ember transition-colors text-center"
                    >
                      I understand — continue
                    </button>
                    <Link
                      to="/privacy-promise"
                      className="px-4 py-2.5 rounded-[10px] bg-[#24122C] hover:bg-white hover:text-[#0F1730] border border-[#61126E]/50 text-white font-medium text-xs text-center transition-all cursor-pointer shadow-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Feature Highlights (Built in Rust, Signed, Silent install) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#E8D5EC] hover:border-[#61126E] hover:shadow-card transition-all group">
              <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E8D5EC] text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                <Layers className="w-5 h-5 transition-colors" />
              </div>
              <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">
                Rolling out to a team?
              </h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                Silent install with MSI and MDM profiles (Jamf, Intune, Microsoft Endpoint Manager).
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E8D5EC] hover:border-[#61126E] hover:shadow-card transition-all group">
              <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E8D5EC] text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                <Cpu className="w-5 h-5 transition-colors" />
              </div>
              <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">
                Light on resources
              </h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                Engineered in Rust with sub-25MB memory footprint and no noticeable impact on CPU performance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E8D5EC] hover:border-[#61126E] hover:shadow-card transition-all group">
              <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E8D5EC] text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                <ShieldCheck className="w-5 h-5 transition-colors" />
              </div>
              <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#61126E] transition-colors mb-2">
                Signed & notarised
              </h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                EV Code-signed on Windows, Apple Notarised on macOS, with staged release rings and instant rollback.
              </p>
            </div>
          </div>

          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8D5EC] text-center text-xs sm:text-sm text-[#4A5370] w-full shadow-xs">
            📱 <strong>Note:</strong> Deskmerit tracks computer work. There is no mobile phone app — phones aren't tracked.
          </div>
        </section>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Download & Installation FAQs"
          category="FAQS"
          helpTitle="Rolling Out Across 100+ Endpoints?"
          helpDescription="Our enterprise deployment team provides pre-configured MSI packages, Intune / Jamf MDM policies, and dedicated setup assistance."
          customFaqs={[
            {
              q: "Does installing Deskmerit require local administrative privileges?",
              a: "On Windows, a user-space per-user .exe installer can run without admin rights. For fleet-wide deployment, sysadmins can use our signed .msi installer via Group Policy, Microsoft Intune, or Jamf."
            },
            {
              q: "Is the macOS agent compatible with Apple Silicon (M1/M2/M3/M4) chips?",
              a: "Yes. Deskmerit is built as a Universal 2 binary with native ARM64 and Intel x86_64 binaries, notarized directly by Apple with hardened runtime entitlements."
            },
            {
              q: "How much CPU and RAM does the desktop agent consume?",
              a: "The Deskmerit daemon is written in Rust, consuming less than 25MB of RAM and virtually 0% background CPU, with zero battery drain on laptops."
            },
            {
              q: "How are software updates delivered and managed?",
              a: "Updates are delivered via automated background silent patching. Enterprise administrators can lock specific release rings or manage rollouts through internal repository channels."
            },
            {
              q: "Why isn't there a mobile phone app for iOS or Android?",
              a: "Deskmerit tracks focused computer work. We deliberately do not build phone tracking apps to guarantee that team members are never tracked off hours or on personal mobile devices."
            }
          ]}
        />

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
