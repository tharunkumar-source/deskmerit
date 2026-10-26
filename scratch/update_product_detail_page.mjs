import fs from 'fs';

const filePath = 'c:/Users/Admin/Downloads/Squalible code updated 4/src/pages/ProductDetailPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update interface
const interfaceTarget = `  faqs: { q: string; a: string }[];
  mockup: {`;

const interfaceReplacement = `  faqs: { q: string; a: string }[];
  screenshot?: {
    src: string;
    alt: string;
    type: "tray" | "dashboard";
  };
  mockup: {`;

content = content.replace(interfaceTarget, interfaceReplacement);

// 2. Add screenshot to each feature
const featureScreenshots = {
  '"automatic-time-tracking"': {
    src: '/images/figma/timesheet-time-ledger.png',
    alt: 'Deskmerit Automatic Time Ledger and Timesheet Review',
    type: 'dashboard'
  },
  '"productivity-tracking"': {
    src: '/images/figma/productivity-breakdown.png',
    alt: 'Deskmerit Role-Aware Productivity Scoring and Categorization',
    type: 'dashboard'
  },
  '"idle-and-private-time"': {
    src: '/images/figma/tray-private-mode.png',
    alt: 'Deskmerit Pulse Track Desktop Tray with Private Mode Active',
    type: 'tray'
  },
  'screenshots:': {
    src: '/images/figma/tray-screenshot-transparency.png',
    alt: 'Deskmerit Pulse Track Screenshot Transparency and Privacy Controls',
    type: 'tray'
  },
  '"project-time-tracking"': {
    src: '/images/figma/projects-active-portfolio.png',
    alt: 'Deskmerit Active Projects Portfolio and Budget Tracking',
    type: 'dashboard'
  },
  '"timesheets-and-reports"': {
    src: '/images/figma/reports-summary-overview.png',
    alt: 'Deskmerit Defensible Timesheet and Hours Reporting',
    type: 'dashboard'
  },
  '"shift-scheduling"': {
    src: '/images/figma/attendance-shift-schedule.png',
    alt: 'Deskmerit Workforce Shift Scheduling and Roster Management',
    type: 'dashboard'
  },
  '"leave-management"': {
    src: '/images/figma/scheduling-leave-requests.png',
    alt: 'Deskmerit Leave Management, PTO Balances and Approval Workflow',
    type: 'dashboard'
  },
  '"document-tracking"': {
    src: '/images/figma/exports-audit-jobs.png',
    alt: 'Deskmerit Activity Auditing, Document Logs and Export Generation',
    type: 'dashboard'
  },
  '"focus-timer"': {
    src: '/images/figma/tray-focus-interval.png',
    alt: 'Deskmerit Pulse Track Focus Interval and Health Break Timer',
    type: 'tray'
  },
  '"live-status"': {
    src: '/images/figma/dashboard-system-status.png',
    alt: 'Deskmerit Real-Time System and Team Live Status',
    type: 'dashboard'
  }
};

for (const [key, shot] of Object.entries(featureScreenshots)) {
  const pattern = new RegExp(`(${key}: \\{[\\s\\S]*?mockup: \\{)`);
  const match = content.match(pattern);
  if (match) {
    const injection = `    screenshot: {\n      src: "${shot.src}",\n      alt: "${shot.alt}",\n      type: "${shot.type}",\n    },\n    mockup: {`;
    content = content.replace(match[0], match[0].replace('mockup: {', injection));
    console.log(`Injected screenshot for ${key}`);
  } else {
    console.error(`Could not match key ${key}`);
  }
}

// 3. Update the Right Column in Hero
const oldHeroRight = `{/* Right Column: Browser Window Mockup with macOS Controls (Screenshot Reference Match) */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/{feat.slug}
                    </div>
                    <div className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                      Active Engine
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center">
                          <FeatureIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{feat.mockup.title}</div>
                          <div className="text-[10px] text-slate-400">{feat.mockup.subtitle}</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#FF5A36]">{feat.mockup.stats[0]?.value || "1h 42m"}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Attendance Today</div>
                        <div className="text-sm font-bold text-white mt-1">6h 12m (Present)</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Surveillance Status</div>
                        <div className="text-sm font-bold text-[#FF5A36] mt-1">Zero Keylogging</div>
                      </div>
                    </div>

                    {/* Live Telemetry Rows */}
                    <div className="space-y-2 pt-1">
                      {feat.mockup.rows.slice(0, 2).map((r, i) => (
                        <div
                          key={i}
                          className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs"
                        >
                          <div>
                            <div className="font-semibold text-white">{r.name}</div>
                            <div className="text-[10px] text-slate-400">{r.tag}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#FFE6DF]">{r.metric}</div>
                            <div className="text-[10px] text-[#FF5A36]">{r.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>`;

const newHeroRight = `{/* Right Column: Authentic Product Screenshot or Mockup */}
              <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                {feat.screenshot ? (
                  feat.screenshot.type === "tray" ? (
                    /* Native Windows/Desktop Tray UI Showcase */
                    <div className="relative max-w-[340px] sm:max-w-[360px] w-full mx-auto">
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#FF5A36]/20 via-[#38BDF8]/20 to-[#FF5A36]/10 rounded-3xl blur-xl opacity-75" />
                      <div className="relative rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
                        <div className="bg-[#0A1628] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#62C554]" />
                          </div>
                          <div className="text-[10px] font-mono text-slate-300">
                            Pulse Track Tray · Windows & macOS
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-[#12B886] font-bold">
                            <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse" />
                            Live
                          </div>
                        </div>
                        <img
                          src={feat.screenshot.src}
                          alt={feat.screenshot.alt}
                          className="w-full h-auto object-contain block"
                          loading="eager"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Web Admin Dashboard Screen Showcase */
                    <div className="w-full">
                      <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                        <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                            <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                            <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                          </div>
                          <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                            app.deskmerit.com/{feat.slug}
                          </div>
                          <div className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                            Verified Output
                          </div>
                        </div>
                        <div className="bg-slate-950 p-1 sm:p-2">
                          <img
                            src={feat.screenshot.src}
                            alt={feat.screenshot.alt}
                            className="w-full h-auto object-contain rounded-lg block shadow-inner"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  /* Fallback Mockup if no screenshot */
                  <div className="w-full">
                    <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                      <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                          <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                          <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                        </div>
                        <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                          app.deskmerit.com/{feat.slug}
                        </div>
                        <div className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                          Active Engine
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center">
                              <FeatureIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">{feat.mockup.title}</div>
                              <div className="text-[10px] text-slate-400">{feat.mockup.subtitle}</div>
                            </div>
                          </div>
                          <span className="font-mono text-xs font-bold text-[#FF5A36]">{feat.mockup.stats[0]?.value || "1h 42m"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>`;

// Replace normalizing newlines
const normContent = content.replace(/\r\n/g, '\n');
const normOldHero = oldHeroRight.replace(/\r\n/g, '\n');

if (normContent.includes(normOldHero)) {
  content = normContent.replace(normOldHero, newHeroRight);
  console.log('Replaced Hero Right Column successfully!');
} else {
  console.error('Could not find oldHeroRight block in file');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated ProductDetailPage.tsx');
