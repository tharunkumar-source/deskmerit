import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Lock,
  Workflow,
  Clock,
  BarChart3,
  Users,
  CheckCircle2,
  Calendar,
  FileSpreadsheet,
  Building,
  Building2,
  Briefcase,
  Globe,
  Rocket,
  TrendingUp,
  Laptop,
  UserCheck,
  Palette,
  Headphones,
  Scale,
  Stethoscope,
  Wifi,
  Shuffle,
  Code2,
  HeartHandshake,
  Receipt,
  MapPin,
  Compass,
  Navigation,
  BookOpen,
  FileText,
  Calculator,
  Zap,
  MessageSquare,
  CalendarRange,
  Timer,
  CheckSquare,
  Activity,
} from "lucide-react";
import { DeskmeritLogo } from "./DeskmeritLogo";

export function DeskmeritHeader() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [productsActiveTab, setProductsActiveTab] = useState<
    "track" | "bill" | "people"
  >("track");
  const [solutionsActiveTab, setSolutionsActiveTab] = useState<
    "industry" | "team" | "region"
  >("industry");
  const [integrationsActiveTab, setIntegrationsActiveTab] = useState<
    "developer" | "calendar" | "automation" | "developers"
  >("developer");
  const [resourcesActiveTab, setResourcesActiveTab] = useState<
    "learn" | "tools" | "laws"
  >("learn");
  const [compareActiveTab, setCompareActiveTab] = useState<
    "competitors" | "trust"
  >("competitors");
  const [companyActiveTab, setCompanyActiveTab] = useState<
    "company" | "developers" | "legal"
  >("company");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileSection(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-[#61126E] text-white py-2 px-4 text-xs font-medium border-b border-[#4E0E58]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="pulse-dot mr-1 shrink-0 bg-white" />
          <span className="text-white font-semibold">Introducing Tracker Plus:</span>
          <span className="text-purple-100 hidden sm:inline">
            start tracking directly from Jira, Azure DevOps or OpenProject tasks
          </span>
          <Link
            to="/features/tracker-plus"
            className="inline-flex items-center gap-1 text-white hover:text-[#F6EDF8] font-bold underline underline-offset-4 ml-1 transition-colors"
          >
            See how it works <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Clean Luminous Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-white relative ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_-5px_rgba(15,23,48,0.08)] border-b border-slate-200/80 py-3.5"
            : "border-b border-slate-100 py-4"
        }`}
        aria-label="Main Navigation"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Logo anchored to left content margin */}
          <div className="shrink-0 flex items-center">
            <DeskmeritLogo variant="horizontal" size="md" />
          </div>

          {/* Center: Desktop Navigation Dock — Clearly visually grouped with generous breathing room */}
          <div className="hidden xl:flex items-center gap-0.5 bg-[#FAF4FB]/90 border border-[#E8D5EC] rounded-full p-1 shadow-[inset_0_1px_2px_rgba(15,23,48,0.03)] font-semibold text-[12.5px] 2xl:text-[13px] text-[#0F1730]">
            {/* Product Mega Menu Trigger */}
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("products")}
              onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
              className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-full transition-all duration-150 ${
                activeMenu === "products"
                  ? "text-[#61126E] bg-white shadow-xs font-bold"
                  : "text-[#0F1730] hover:text-[#61126E] hover:bg-white/70"
              }`}
              aria-expanded={activeMenu === "products"}
            >
              <span>Product</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMenu === "products" ? "rotate-180 text-[#61126E]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Solutions Mega Menu Trigger */}
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
              className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-full transition-all duration-150 ${
                activeMenu === "solutions"
                  ? "text-[#61126E] bg-white shadow-xs font-bold"
                  : "text-[#0F1730] hover:text-[#61126E] hover:bg-white/70"
              }`}
              aria-expanded={activeMenu === "solutions"}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMenu === "solutions" ? "rotate-180 text-[#61126E]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Integrations Mega Menu Trigger */}
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("integrations")}
              onClick={() => setActiveMenu(activeMenu === "integrations" ? null : "integrations")}
              className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-full transition-all duration-150 ${
                activeMenu === "integrations"
                  ? "text-[#61126E] bg-white shadow-xs font-bold"
                  : "text-[#0F1730] hover:text-[#61126E] hover:bg-white/70"
              }`}
              aria-expanded={activeMenu === "integrations"}
            >
              <span>Integrations</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMenu === "integrations" ? "rotate-180 text-[#61126E]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Compare Mega Menu Trigger */}
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("compare")}
              onClick={() => setActiveMenu(activeMenu === "compare" ? null : "compare")}
              className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-full transition-all duration-150 ${
                activeMenu === "compare"
                  ? "text-[#61126E] bg-white shadow-xs font-bold"
                  : "text-[#0F1730] hover:text-[#61126E] hover:bg-white/70"
              }`}
              aria-expanded={activeMenu === "compare"}
            >
              <span>Compare</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMenu === "compare" ? "rotate-180 text-[#61126E]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Pricing Direct Link */}
            <Link
              to="/pricing"
              onMouseEnter={() => handleMouseEnter("")}
              className={`px-2.5 2xl:px-3 py-1.5 rounded-full transition-all duration-150 ${
                location.pathname === "/pricing"
                  ? "text-[#61126E] bg-white shadow-xs font-bold"
                  : "text-[#0F1730] hover:text-[#61126E] hover:bg-white/70"
              }`}
            >
              Pricing
            </Link>

            {/* Resources Mega Menu Trigger */}
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("resources")}
              onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
              className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-full transition-all duration-150 ${
                activeMenu === "resources"
                  ? "text-[#61126E] bg-white shadow-xs font-bold"
                  : "text-[#0F1730] hover:text-[#61126E] hover:bg-white/70"
              }`}
              aria-expanded={activeMenu === "resources"}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180 text-[#61126E]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Company Mega Menu Trigger */}
            <button
              type="button"
              onMouseEnter={() => handleMouseEnter("company")}
              onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
              className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-full transition-all duration-150 ${
                activeMenu === "company"
                  ? "text-[#61126E] bg-white shadow-xs font-bold"
                  : "text-[#0F1730] hover:text-[#61126E] hover:bg-white/70"
              }`}
              aria-expanded={activeMenu === "company"}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMenu === "company" ? "rotate-180 text-[#61126E]" : "text-slate-400"
                }`}
              />
            </button>
          </div>

          {/* Right Action Items — Desktop */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            {/* Sign in / Log in */}
            <a
              href="https://app.deskmerit.com"
              target="_blank"
              rel="noreferrer"
              className="text-[12.5px] 2xl:text-[13px] font-semibold text-[#0F1730] hover:text-[#61126E] transition-colors px-2 py-1.5 whitespace-nowrap"
            >
              Sign in
            </a>

            {/* Book a Demo Button */}
            <Link
              to="/demo"
              className="px-2.5 2xl:px-3 py-1.5 rounded-xl text-xs font-semibold text-[#0F1730] bg-white border border-[#E8D5EC] hover:border-[#0F1730] hover:bg-slate-50 transition-all shadow-xs whitespace-nowrap"
            >
              Book a demo
            </Link>

            {/* Start Free Trial Primary Button */}
            <Link
              to="/signup"
              className="px-3 2xl:px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#61126E] hover:bg-[#4E0E58] transition-all shadow-[0_2px_8px_rgba(97, 18, 110,0.28)] hover:shadow-[0_4px_12px_rgba(97, 18, 110,0.38)] flex items-center gap-1.5 whitespace-nowrap group"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right Action Items — Tablet / Mobile (Never overflows, crisp quick-CTAs) */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              to="/demo"
              className="hidden sm:inline-flex px-3 py-1.5 rounded-xl text-xs font-semibold text-[#0F1730] bg-white border border-[#E8D5EC] hover:bg-slate-50 transition-all shadow-xs whitespace-nowrap"
            >
              Book a demo
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#61126E] hover:bg-[#4E0E58] transition-all shadow-xs whitespace-nowrap"
            >
              <span>Start free trial</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0A2540] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* FULL-WIDTH MEGA MENU (Aligned to max-w-7xl content bounds) */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.995 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full w-full pointer-events-auto z-50 pt-2"
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-[0_30px_70px_-15px_rgba(15,23,48,0.24),0_15px_30px_-5px_rgba(15,23,48,0.08)] border border-slate-200/90 overflow-hidden text-[#0F1730]">
                  {activeMenu === "products" && renderProductsMegaMenu()}
                  {activeMenu === "solutions" && renderSolutionsMegaMenu()}
                  {activeMenu === "integrations" && renderIntegrationsMegaMenu()}
                  {activeMenu === "compare" && renderCompareMegaMenu()}
                  {activeMenu === "resources" && renderResourcesMegaMenu()}
                  {activeMenu === "company" && renderCompanyMegaMenu()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive Mobile Navigation Drawer (Brand-Aligned: Exact Web Structure & Deskmerit Colors) */}
        {typeof document !== "undefined" &&
          createPortal(
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="fixed inset-0 z-[9999] bg-white overflow-y-auto flex flex-col justify-between px-6 py-6 xl:hidden font-sans"
                  style={{ height: "100dvh" }}
                >
              <div>
                {/* Top Row: Wordmark Logo Left, Ember Close Button Right */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <DeskmeritLogo variant="horizontal" size="md" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl bg-[#F6EDF8] text-[#61126E] hover:bg-[#E8D5EC] flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Main Navigation List with Web-Matching Structured Accordions */}
                <div className="divide-y divide-slate-100 mt-2">
                  {/* 1. Products Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "products" ? null : "products")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors text-left"
                    >
                      <span className={mobileSection === "products" ? "text-[#61126E]" : ""}>
                        Products
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#61126E] transition-transform duration-200 ${
                          mobileSection === "products" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "products" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        {/* Featured Tracker Plus Spotlight */}
                        <Link
                          to="/features/tracker-plus"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-3 rounded-xl bg-[#F6EDF8]/70 border border-[#E8D5EC] text-xs font-bold text-[#4E0E58] flex items-center justify-between shadow-xs"
                        >
                          <div>
                            <div className="font-extrabold text-[#4E0E58]">Tracker Plus for Jira & DevOps</div>
                            <div className="text-[11px] text-[#0F1730] font-normal mt-0.5">Start work directly from sprint tasks</div>
                          </div>
                          <span className="text-[9px] uppercase px-2 py-0.5 bg-[#61126E] text-white rounded-md font-extrabold shrink-0">
                            ★ Key
                          </span>
                        </Link>

                        {/* Group: Track */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Track
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/features"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Features overview
                            </Link>
                            <Link
                              to="/features/automatic-time-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Automatic time tracking
                            </Link>
                            <Link
                              to="/features/productivity-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Productivity tracking
                            </Link>
                            <Link
                              to="/features/document-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Document tracking
                            </Link>
                            <Link
                              to="/features/live-status"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Live status
                            </Link>
                            <Link
                              to="/features/focus-timer"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Focus timer
                            </Link>
                          </div>
                        </div>

                        {/* Group: Bill & Report */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Bill & report
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/features/tracker-plus"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Tracker Plus ★
                            </Link>
                            <Link
                              to="/features/project-time-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Project time & billing
                            </Link>
                            <Link
                              to="/features/timesheets-and-reports"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Timesheets & reports
                            </Link>
                          </div>
                        </div>

                        {/* Group: People */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            People
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/features/attendance-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Attendance tracking
                            </Link>
                            <Link
                              to="/features/shift-scheduling"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Shift scheduling
                            </Link>
                            <Link
                              to="/features/leave-management"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Leave management
                            </Link>
                            <Link
                              to="/features/idle-and-private-time"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Idle & Private Time
                            </Link>
                            <Link
                              to="/features/screenshots"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Screenshots
                            </Link>
                            <Link
                              to="/download"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] hover:bg-slate-100 transition-colors"
                            >
                              Download desktop agent
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Solutions Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "solutions" ? null : "solutions")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors text-left"
                    >
                      <span className={mobileSection === "solutions" ? "text-[#61126E]" : ""}>
                        Solutions
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#61126E] transition-transform duration-200 ${
                          mobileSection === "solutions" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "solutions" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            By Industry
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/solutions/it-services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              IT services
                            </Link>
                            <Link
                              to="/solutions/staff-augmentation"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Staff augmentation
                            </Link>
                            <Link
                              to="/solutions/agencies"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Agencies
                            </Link>
                            <Link
                              to="/solutions/bpo"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              BPO & contact centres
                            </Link>
                            <Link
                              to="/solutions/professional-services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Consulting & accounting
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            By Team
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/solutions/remote-teams"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Remote teams
                            </Link>
                            <Link
                              to="/solutions/hybrid-teams"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Hybrid teams
                            </Link>
                            <Link
                              to="/solutions/office-teams"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Office teams
                            </Link>
                            <Link
                              to="/solutions/hr"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              For HR teams
                            </Link>
                            <Link
                              to="/solutions/managers"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              For managers
                            </Link>
                            <Link
                              to="/solutions/finance"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              For finance
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            By Region & Resellers
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/hrms-add-on"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-[#F6EDF8]/60 text-xs font-bold text-[#4E0E58] hover:text-[#61126E] transition-colors"
                            >
                              HRMS add-on (Sqalible) →
                            </Link>
                            <Link
                              to="/partners/white-label"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              White-label for resellers →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. Integrations Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "integrations" ? null : "integrations")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors text-left"
                    >
                      <span className={mobileSection === "integrations" ? "text-[#61126E]" : ""}>
                        Integrations
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#61126E] transition-transform duration-200 ${
                          mobileSection === "integrations" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "integrations" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5 flex items-center justify-between">
                            <span>Developer & Sprint (8)</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            <Link
                              to="/features/integrations/jira"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/jira.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Jira</span>
                            </Link>
                            <Link
                              to="/features/integrations/azure-devops"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/azure-devops.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Azure DevOps</span>
                            </Link>
                            <Link
                              to="/features/integrations/linear"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/linear.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Linear</span>
                            </Link>
                            <Link
                              to="/features/integrations/asana"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/asana.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Asana</span>
                            </Link>
                            <Link
                              to="/features/integrations/clickup"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/clickup.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">ClickUp</span>
                            </Link>
                            <Link
                              to="/features/integrations/trello"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/trello.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Trello</span>
                            </Link>
                            <Link
                              to="/features/integrations/gitlab"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/gitlab.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">GitLab</span>
                            </Link>
                            <Link
                              to="/features/integrations/openproject"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/openproject.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">OpenProject</span>
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5 flex items-center justify-between">
                            <span>Calendars & Comms (4)</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            <Link
                              to="/features/integrations/google-calendar"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/google-calendar.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Google Cal</span>
                            </Link>
                            <Link
                              to="/features/integrations/outlook-calendar"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/outlook.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Outlook</span>
                            </Link>
                            <Link
                              to="/features/integrations/slack"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/slack.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Slack</span>
                            </Link>
                            <Link
                              to="/features/integrations/microsoft-teams"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/teams.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">MS Teams</span>
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5 flex items-center justify-between">
                            <span>Automation & HRMS (3)</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            <Link
                              to="/features/integrations/zapier"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/zapier.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Zapier</span>
                            </Link>
                            <Link
                              to="/features/integrations/make"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/make.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Make</span>
                            </Link>
                            <Link
                              to="/features/integrations/sqalible"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/sqalible.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Sqalible HRMS</span>
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5 flex items-center justify-between">
                            <span>Developers & AI (2)</span>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            <Link
                              to="/developers/mcp-server"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/claude.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">Claude MCP</span>
                            </Link>
                            <Link
                              to="/developers/api"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              <img src="/images/integrations/rest-api.svg" alt="" className="w-4 h-4 object-contain shrink-0" />
                              <span className="truncate">REST API</span>
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="grid grid-cols-1 gap-1.5 pt-1">
                            <Link
                              to="/integrations"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2.5 rounded-lg bg-[#F6EDF8] text-xs font-bold text-[#4E0E58] hover:text-[#61126E] transition-colors flex items-center justify-between"
                            >
                              <span>Explore all 17 Integrations Hub</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 4. Compare & Trust Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "compare" ? null : "compare")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors text-left"
                    >
                      <span className={mobileSection === "compare" ? "text-[#61126E]" : ""}>
                        Compare & Trust
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#61126E] transition-transform duration-200 ${
                          mobileSection === "compare" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "compare" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Competitor Comparisons
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/compare/desktime-alternative"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              vs DeskTime
                            </Link>
                            <Link
                              to="/compare/hubstaff-alternative"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              vs Hubstaff
                            </Link>
                            <Link
                              to="/compare/time-doctor-alternative"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              vs Time Doctor
                            </Link>
                            <Link
                              to="/compare/activtrak-alternative"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              vs ActivTrak
                            </Link>
                            <Link
                              to="/compare/toggl-alternative"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              vs Toggl Track
                            </Link>
                            <Link
                              to="/compare/time-champ-alternative"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              vs Time Champ
                            </Link>
                            <Link
                              to="/compare"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-[#F6EDF8]/60 text-xs font-bold text-[#4E0E58] hover:text-[#61126E] transition-colors"
                            >
                              All comparisons overview →
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Trust & Security
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/security"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Security architecture
                            </Link>
                            <Link
                              to="/privacy-promise"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Privacy promise
                            </Link>
                            <Link
                              to="/trust"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Trust Center
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 5. Direct Link: Pricing */}
                  <div className="py-3.5">
                    <Link
                      to="/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors"
                    >
                      Pricing
                    </Link>
                  </div>

                  {/* 6. Resources Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "resources" ? null : "resources")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors text-left"
                    >
                      <span className={mobileSection === "resources" ? "text-[#61126E]" : ""}>
                        Resources
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#61126E] transition-transform duration-200 ${
                          mobileSection === "resources" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "resources" && (
                      <div className="mt-3 pl-2 space-y-2 pt-1 animate-fade-in">
                        <Link
                          to="/blog"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] block"
                        >
                          Blog & Insights
                        </Link>
                        <Link
                          to="/guides/employee-monitoring-laws"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] block"
                        >
                          Monitoring-law guides hub
                        </Link>
                        <Link
                          to="/glossary"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] block"
                        >
                          Terminology Glossary
                        </Link>
                        <a
                          href="https://help.deskmerit.io"
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] flex items-center justify-between"
                        >
                          <span>Help centre</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* 7. Company & Legal Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "company" ? null : "company")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors text-left"
                    >
                      <span className={mobileSection === "company" ? "text-[#61126E]" : ""}>
                        Company & Legal
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#61126E] transition-transform duration-200 ${
                          mobileSection === "company" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "company" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Company
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/about"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              About us
                            </Link>
                            <Link
                              to="/careers"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Careers
                            </Link>
                            <Link
                              to="/partners"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Partners & Resellers
                            </Link>
                            <Link
                              to="/press"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Press & Media Kit
                            </Link>
                            <Link
                              to="/contact"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Contact us
                            </Link>
                            <Link
                              to="/demo"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Book a demo
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Developers
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/developers"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Developers & REST API
                            </Link>
                            <Link
                              to="/developers/mcp-server"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Claude MCP AI server
                            </Link>
                            <Link
                              to="/changelog"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Changelog
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Legal & Compliance
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/legal/terms"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Terms of Service
                            </Link>
                            <Link
                              to="/legal/privacy"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Privacy Policy
                            </Link>
                            <Link
                              to="/legal/dpa"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Data Processing Agreement
                            </Link>
                            <Link
                              to="/legal/subprocessors"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Sub-processors
                            </Link>
                            <Link
                              to="/legal/cookies"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Cookie Policy
                            </Link>
                            <Link
                              to="/legal/sla"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#61126E] transition-colors"
                            >
                              Service Level Agreement
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Direct Link: Sign in */}
                  <div className="py-3.5">
                    <a
                      href="https://app.deskmerit.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block font-extrabold text-[18px] text-[#0F1730] hover:text-[#61126E] transition-colors"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                {/* Deskmerit Brand Highlight Card (Replaces Purple Box) */}
                <Link
                  to="/features/tracker-plus"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 block p-4 rounded-2xl border border-[#F6EDF8] bg-gradient-to-br from-[#FAF4FB] via-white to-white hover:border-[#61126E] shadow-xs transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#61126E]" />
                      <span className="font-extrabold text-[14px] text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                        Tracker Plus for Jira & DevOps
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#61126E] text-white">
                      ★ Key
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5370] mt-2 leading-relaxed">
                    Synchronize billable work logs directly from Jira issues and Azure DevOps boards without manual time entry.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#61126E]">
                    <span>Explore Tracker Plus</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Bottom Side-by-Side CTAs (Deskmerit Brand Colors: Ember Coral + White/Navy) */}
              <div className="pt-6 pb-2 grid grid-cols-2 gap-3 border-t border-slate-100 mt-6 bg-white">
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 px-4 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-bold text-xs sm:text-sm text-center shadow-md flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Start free trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 px-4 rounded-xl bg-white border border-slate-300 text-[#0F1730] font-bold text-xs sm:text-sm text-center hover:bg-slate-50 shadow-sm flex items-center justify-center transition-all"
                >
                  <span>Book a demo</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
      </nav>
    </header>
  );

  {/* ========================================================================= */}
  {/* 1. PRODUCTS FULL-WIDTH MEGA MENU (Stripe 4-Cols + Spotlight Card)         */}
  {/* ========================================================================= */}
  function renderProductsMegaMenu() {
    const productCategories = [
      {
        id: "track" as const,
        name: "Track",
        icon: Clock,
        banner: {
          title: "Time & Activity Tracking",
          href: "/features",
          description:
            "Silent background time capture and real-time team activity dashboards without intrusive spying.",
        },
        links: [
          {
            title: "Features overview",
            description: "Explore the complete suite of 14 time tracking modules.",
            href: "/features",
            icon: Layers,
          },
          {
            title: "Automatic time tracking",
            description: "Silent background computer time logging without manual timers.",
            href: "/features/automatic-time-tracking",
            icon: Clock,
          },
          {
            title: "Productivity tracking",
            description: "Categorize work apps and productive vs unproductive hours.",
            href: "/features/productivity-tracking",
            icon: BarChart3,
          },
          {
            title: "Document tracking",
            description: "Track time against document titles and active window tabs.",
            href: "/features/document-tracking",
            icon: FileText,
          },
          {
            title: "Live status",
            description: "Real-time team presence, working states, and active tasks.",
            href: "/features/live-status",
            icon: Activity,
          },
          {
            title: "Focus timer",
            description: "Pomodoro focus intervals to maintain flow and prevent burnout.",
            href: "/features/focus-timer",
            icon: Timer,
          },
        ],
      },
      {
        id: "bill" as const,
        name: "Bill & report",
        icon: Receipt,
        banner: {
          title: "Billing & Defensible Reports",
          href: "/features/tracker-plus",
          description:
            "Defensible billable hours synced directly with Jira issues and client rate cards.",
        },
        links: [
          {
            title: "Tracker Plus ★",
            description: "Start timers directly from Jira or Azure DevOps sprint tasks.",
            href: "/features/tracker-plus",
            icon: Sparkles,
          },
          {
            title: "Project time & billing",
            description: "Billable hours, hourly rate cards, and client invoice reconciliation.",
            href: "/features/project-time-tracking",
            icon: Receipt,
          },
          {
            title: "Timesheets & reports",
            description: "Export audit-ready CSV, Excel, and PDF timesheet summaries.",
            href: "/features/timesheets-and-reports",
            icon: FileSpreadsheet,
          },
        ],
      },
      {
        id: "people" as const,
        name: "People",
        icon: Users,
        banner: {
          title: "Attendance & Workforce Planning",
          href: "/features/attendance-tracking",
          description:
            "Transparent clock-ins, shift schedules, and ethical private time controls.",
        },
        links: [
          {
            title: "Attendance tracking",
            description: "Automated punch-ins and transparent working hours proof.",
            href: "/features/attendance-tracking",
            icon: UserCheck,
          },
          {
            title: "Shift scheduling",
            description: "Shift roster planning, rotations, and adherence alerts.",
            href: "/features/shift-scheduling",
            icon: Calendar,
          },
          {
            title: "Leave management",
            description: "Time-off balances, company holidays, and manager approvals.",
            href: "/features/leave-management",
            icon: HeartHandshake,
          },
          {
            title: "Idle & Private Time",
            description: "Pause tracking during personal breaks with complete worker dignity.",
            href: "/features/idle-and-private-time",
            icon: Lock,
          },
          {
            title: "Screenshots",
            description: "Optional blurred or interval screenshots with employee opt-out.",
            href: "/features/screenshots",
            icon: Layers,
          },
          {
            title: "Download desktop agent",
            description: "Native background app for macOS, Windows, and Linux.",
            href: "/download",
            icon: Laptop,
          },
        ],
      },
    ];

    const currentCategory =
      productCategories.find((c) => c.id === productsActiveTab) ||
      productCategories[0];

    return (
      <div className="bg-white">
        <div className="p-6 lg:p-7 flex items-stretch gap-6 lg:gap-8 min-h-[380px]">
          {/* 1. Left Sidebar: Category Tabs */}
          <div className="w-52 xl:w-60 shrink-0 border-r border-[#E8D5EC] pr-4 flex flex-col justify-start">
            <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em] px-3 pb-3">
              PRODUCT
            </p>
            <div className="space-y-1.5">
              {productCategories.map((cat) => {
                const isActive = productsActiveTab === cat.id;
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setProductsActiveTab(cat.id)}
                    onClick={() => setProductsActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#F6EDF8] text-[#0F1730] font-bold border border-[#61126E]/40 shadow-xs"
                        : "text-[#4A5370] hover:bg-[#FAF4FB] hover:text-[#0F1730] font-medium border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#61126E] text-white shadow-xs"
                          : "bg-[#FAF4FB] text-[#4A5370]"
                      }`}
                    >
                      <IconComp className="w-4 h-4 stroke-[1.8] text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Middle Column: Header Banner + 2-Column Links Grid */}
          <div className="flex-1 px-1 lg:px-2 flex flex-col justify-start">
            {/* Top Dark Banner Card */}
            <Link
              to={currentCategory.banner.href}
              onClick={() => setActiveMenu(null)}
              className="group block bg-[#0F1730] text-white px-5 py-3.5 rounded-[12px] border border-[#24305A] mb-4 hover:border-[#61126E]/60 transition-all shadow-xs"
            >
              <div className="flex items-center gap-1.5 font-display font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#D8B4FE] transition-colors">
                <span>{currentCategory.banner.title}</span>
                <span className="text-[#D8B4FE] font-extrabold text-base transition-transform group-hover:translate-x-1">›</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 font-normal">
                {currentCategory.banner.description}
              </p>
            </Link>

            {/* 2-Column Grid of Feature Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {currentCategory.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF4FB] border border-transparent hover:border-[#E8D5EC] transition-all text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF4FB] text-[#0F1730] group-hover:bg-[#F6EDF8] group-hover:text-[#61126E] transition-colors mt-0.5 border border-[#E8D5EC]/60">
                      <LinkIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                          {link.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4A5370] line-clamp-2 mt-0.5 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Spotlight Card */}
          <div className="w-72 2xl:w-80 shrink-0 pl-6 border-l border-[#E8D5EC] flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em]">
                SPOTLIGHT
              </p>
              <div className="p-5 rounded-[16px] bg-[#FAF4FB] border border-[#E8D5EC] space-y-2.5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#61126E] block">
                  KEY FEATURE
                </span>
                <h4 className="font-display font-bold text-[15px] leading-snug text-[#0F1730]">
                  Tracker Plus for Jira & DevOps
                </h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Start timers directly from Jira issues and Azure DevOps work items with personal scoped tokens.
                </p>
                <Link
                  to="/features/tracker-plus"
                  onClick={() => setActiveMenu(null)}
                  className="text-xs font-bold text-[#61126E] hover:underline flex items-center gap-1.5 pt-1 group"
                >
                  <span>Explore Tracker Plus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#E8D5EC]">
              <Link
                to="/download"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[#0F1730] hover:text-[#61126E] flex items-center justify-between group transition-colors"
              >
                <span>Download desktop tracker</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Strip (Sitemap Specification) */}
        <div className="px-8 py-3.5 bg-[#FAF4FB] border-t border-[#E8D5EC] flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-6">
            <Link
              to="/features"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>All features</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/download"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Download</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/security"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Security</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/privacy-promise"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Privacy promise</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
          </div>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-2 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
            <span>Zero keystroke logging · Defensible billable hours · Pure trust</span>
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 2. SOLUTIONS FULL-WIDTH MEGA MENU                                         */}
  {/* ========================================================================= */}
  function renderSolutionsMegaMenu() {
    const solutionsCategories = [
      {
        id: "industry" as const,
        name: "By industry",
        icon: Briefcase,
        banner: {
          title: "Industry Solutions",
          href: "/solutions/it-services",
          description:
            "Tailored time tracking and margin defense built for professional services firms.",
        },
        links: [
          {
            title: "IT services",
            description:
              "Prove client billable hours with zero invasive keystroke logging or employee resentment.",
            href: "/solutions/it-services",
            icon: Laptop,
          },
          {
            title: "Staff augmentation",
            description:
              "Multi-client scoped tokens, verified attendance proof, and client billing exports.",
            href: "/solutions/staff-augmentation",
            icon: UserCheck,
          },
          {
            title: "Agencies",
            description:
              "Track project profitability, budget burn, and creative team milestones in real-time.",
            href: "/solutions/agencies",
            icon: Palette,
          },
          {
            title: "BPO & contact centres",
            description:
              "Shift adherence, accurate break logging, and attendance without intrusive surveillance.",
            href: "/solutions/bpo",
            icon: Headphones,
          },
          {
            title: "Consulting & accounting",
            description:
              "Audit-ready timesheets matched directly to matter codes and defensible client accounts.",
            href: "/solutions/professional-services",
            icon: Scale,
          },
        ],
      },
      {
        id: "team" as const,
        name: "By team",
        icon: Users,
        banner: {
          title: "Solutions by Team Model",
          href: "/solutions/remote-teams",
          description:
            "Purpose-built workflows for remote, hybrid, office, and specialized leadership departments.",
        },
        links: [
          {
            title: "Remote teams",
            description:
              "Outcomes over webcams. Asynchronous trust and accurate records for distributed staff.",
            href: "/solutions/remote-teams",
            icon: Wifi,
          },
          {
            title: "Hybrid teams",
            description:
              "One unified, tamper-proof record across office desks and home setups.",
            href: "/solutions/hybrid-teams",
            icon: Shuffle,
          },
          {
            title: "Office teams",
            description:
              "Eliminate punch clocks, biometrics, and manual paper cards with automatic attendance.",
            href: "/solutions/office-teams",
            icon: Building,
          },
          {
            title: "For HR teams",
            description:
              "Attendance software, shift rosters, and leave balance with zero disputes.",
            href: "/solutions/hr",
            icon: HeartHandshake,
          },
          {
            title: "For managers",
            description:
              "Team productivity dashboards, workload visibility, and burnout prevention.",
            href: "/solutions/managers",
            icon: TrendingUp,
          },
          {
            title: "For finance",
            description:
              "Project profitability, client billing runs, and real-time margin visibility.",
            href: "/solutions/finance",
            icon: Receipt,
          },
        ],
      },
      {
        id: "region" as const,
        name: "By region",
        icon: Globe,
        banner: {
          title: "Regional Compliance & Invoicing",
          href: "/en-in/",
          description:
            "Country-specific labor laws, compliance frameworks, and regional currency invoicing.",
        },
        links: [
          {
            title: "India (₹ INR)",
            description:
              "DPDP Act 2023 compliant, local GST invoices, and Indian regional working week rules.",
            href: "/en-in/",
            icon: MapPin,
          },
          {
            title: "Australia (A$ AUD)",
            description:
              "NSW 14-day employee notice compliance and Fair Work overtime transparency.",
            href: "/en-au/",
            icon: Compass,
          },
          {
            title: "New Zealand (NZ$)",
            description:
              "Privacy Act 2020 open data principles built into every employee dashboard view.",
            href: "/en-nz/",
            icon: Navigation,
          },
          {
            title: "UAE",
            description:
              "Sunday–Thursday work week support, UAE Federal Labour Law, and bilingual readiness.",
            href: "/en-ae/",
            icon: Globe,
          },
          {
            title: "Saudi Arabia",
            description:
              "Saudi Labour Law, PDPL compliance, and Middle East enterprise data residency.",
            href: "/en-sa/",
            icon: Globe,
          },
        ],
      },
    ];

    const currentCategory =
      solutionsCategories.find((c) => c.id === solutionsActiveTab) ||
      solutionsCategories[0];

    return (
      <div className="bg-white">
        <div className="p-6 lg:p-7 flex items-stretch gap-6 lg:gap-8 min-h-[380px]">
          {/* 1. Left Sidebar: Category Tabs */}
          <div className="w-52 xl:w-60 shrink-0 border-r border-[#E8D5EC] pr-4 flex flex-col justify-start">
            <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em] px-3 pb-3">
              SOLUTIONS
            </p>
            <div className="space-y-1.5">
              {solutionsCategories.map((cat) => {
                const isActive = solutionsActiveTab === cat.id;
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setSolutionsActiveTab(cat.id)}
                    onClick={() => setSolutionsActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#F6EDF8] text-[#0F1730] font-bold border border-[#61126E]/40 shadow-xs"
                        : "text-[#4A5370] hover:bg-[#FAF4FB] hover:text-[#0F1730] font-medium border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#61126E] text-white shadow-xs"
                          : "bg-[#FAF4FB] text-[#4A5370]"
                      }`}
                    >
                      <IconComp className="w-4 h-4 stroke-[1.8] text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Middle Column: Header Banner + 2-Column Links Grid */}
          <div className="flex-1 px-1 lg:px-2 flex flex-col justify-start">
            {/* Top Dark Banner Card */}
            <Link
              to={currentCategory.banner.href}
              onClick={() => setActiveMenu(null)}
              className="group block bg-[#0F1730] text-white px-5 py-3.5 rounded-[12px] border border-[#24305A] mb-4 hover:border-[#61126E]/60 transition-all shadow-xs"
            >
              <div className="flex items-center gap-1.5 font-display font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#D8B4FE] transition-colors">
                <span>{currentCategory.banner.title}</span>
                <span className="text-[#D8B4FE] font-extrabold text-base transition-transform group-hover:translate-x-1">›</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 font-normal">
                {currentCategory.banner.description}
              </p>
            </Link>

            {/* 2-Column Grid of Solution Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {currentCategory.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF4FB] border border-transparent hover:border-[#E8D5EC] transition-all text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF4FB] text-[#0F1730] group-hover:bg-[#F6EDF8] group-hover:text-[#61126E] transition-colors mt-0.5 border border-[#E8D5EC]/60">
                      <LinkIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                          {link.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4A5370] line-clamp-2 mt-0.5 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Spotlight Card (Replaces Case Study Image) */}
          <div className="w-72 2xl:w-80 shrink-0 pl-6 border-l border-[#E8D5EC] flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em]">
                SPOTLIGHT
              </p>
              <div className="p-5 rounded-[16px] bg-[#FAF4FB] border border-[#E8D5EC] space-y-2.5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#61126E] block">
                  HRMS ADD-ON
                </span>
                <h4 className="font-display font-bold text-[15px] leading-snug text-[#0F1730]">
                  Deskmerit + Sqalible HRMS
                </h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Seamlessly bridge automatic desktop tracking with full HRMS payroll, leave balances, and employee records.
                </p>
                <Link
                  to="/hrms-add-on"
                  onClick={() => setActiveMenu(null)}
                  className="text-xs font-bold text-[#61126E] hover:underline flex items-center gap-1.5 pt-1 group"
                >
                  <span>Discover HRMS add-on</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#E8D5EC]">
              <Link
                to="/partners/white-label"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[#0F1730] hover:text-[#61126E] flex items-center justify-between group transition-colors"
              >
                <span>White-label for resellers</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Strip (Sitemap Specification) */}
        <div className="px-8 py-3.5 bg-[#FAF4FB] border-t border-[#E8D5EC] flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-6">
            <Link
              to="/hrms-add-on"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>HRMS add-on (Sqalible)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/partners/white-label"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>White-label for resellers</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
          </div>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-2 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
            <span>Zero keystroke logging · Defensible billable hours · Employee dignity first</span>
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 3. INTEGRATIONS FULL-WIDTH MEGA MENU                                      */}
  {/* ========================================================================= */}
  function renderIntegrationsMegaMenu() {
    const integrationCategories = [
      {
        id: "developer" as const,
        name: "Developer & sprint",
        icon: Code2,
        banner: {
          title: "Developer & Issue Trackers",
          href: "/integrations",
          description:
            "Sync work directly with your sprint boards, code commits, and engineering backlog.",
        },
        links: [
          {
            title: "Jira Software",
            description: "Sprint issue sync and real-time ticket timers with personal tokens.",
            href: "/features/integrations/jira",
            iconUrl: "/images/integrations/jira.svg",
            icon: Sparkles,
          },
          {
            title: "Azure DevOps",
            description: "Boards, work items, and sprint planning direct timer integration.",
            href: "/features/integrations/azure-devops",
            iconUrl: "/images/integrations/azure-devops.svg",
            icon: Layers,
          },
          {
            title: "Linear",
            description: "Bring Linear teams, issues, and cycles directly into Deskmerit.",
            href: "/features/integrations/linear",
            iconUrl: "/images/integrations/linear.svg",
            icon: Sparkles,
          },
          {
            title: "Asana",
            description: "Sync Asana projects, portfolios, and tasks for accurate time logs.",
            href: "/features/integrations/asana",
            iconUrl: "/images/integrations/asana.svg",
            icon: Workflow,
          },
          {
            title: "ClickUp",
            description: "Import spaces, lists, and tasks with bi-directional time sync.",
            href: "/features/integrations/clickup",
            iconUrl: "/images/integrations/clickup.svg",
            icon: Layers,
          },
          {
            title: "Trello",
            description: "Attribute logged hours directly to Kanban cards and board lists.",
            href: "/features/integrations/trello",
            iconUrl: "/images/integrations/trello.svg",
            icon: CheckSquare,
          },
          {
            title: "GitLab",
            description: "Map engineering hours against GitLab issues, MRs, and milestones.",
            href: "/features/integrations/gitlab",
            iconUrl: "/images/integrations/gitlab.svg",
            icon: Code2,
          },
          {
            title: "OpenProject",
            description: "Open-source project tracking and work package time records.",
            href: "/features/integrations/openproject",
            iconUrl: "/images/integrations/openproject.svg",
            icon: CheckSquare,
          },
        ],
      },
      {
        id: "calendar" as const,
        name: "Calendars & comms",
        icon: Calendar,
        banner: {
          title: "Calendars & Communication",
          href: "/integrations",
          description:
            "Log meetings automatically and broadcast daily status to team channels.",
        },
        links: [
          {
            title: "Google Calendar",
            description: "Automatically convert calendar events and Google Meet calls to time logs.",
            href: "/features/integrations/google-calendar",
            iconUrl: "/images/integrations/google-calendar.svg",
            icon: Calendar,
          },
          {
            title: "Outlook Calendar",
            description: "Office 365 calendar meeting sync with project allocation.",
            href: "/features/integrations/outlook-calendar",
            iconUrl: "/images/integrations/outlook.svg",
            icon: CalendarRange,
          },
          {
            title: "Slack",
            description: "Daily standup digests, start/stop commands, and status sync.",
            href: "/features/integrations/slack",
            iconUrl: "/images/integrations/slack.svg",
            icon: MessageSquare,
          },
          {
            title: "Microsoft Teams",
            description: "Teams presence status synchronization and meeting tracking.",
            href: "/features/integrations/microsoft-teams",
            iconUrl: "/images/integrations/teams.svg",
            icon: Users,
          },
        ],
      },
      {
        id: "automation" as const,
        name: "Automation & HRMS",
        icon: Workflow,
        banner: {
          title: "Automation & HR Platforms",
          href: "/integrations",
          description:
            "Connect Deskmerit to over 5,000 tools with no-code workflows and webhooks.",
        },
        links: [
          {
            title: "Zapier",
            description: "Trigger automated actions across 5,000+ cloud business apps.",
            href: "/features/integrations/zapier",
            iconUrl: "/images/integrations/zapier.svg",
            icon: Zap,
          },
          {
            title: "Make",
            description: "Visual automated workflows, webhooks, and multi-step scenarios.",
            href: "/features/integrations/make",
            iconUrl: "/images/integrations/make.svg",
            icon: Workflow,
          },
          {
            title: "Sqalible HRMS",
            description: "Native HRMS time tracking, payroll, and leave balance integration.",
            href: "/features/integrations/sqalible",
            iconUrl: "/images/integrations/sqalible.svg",
            icon: Building2,
          },
        ],
      },
      {
        id: "developers" as const,
        name: "AI & Developer APIs",
        icon: Cpu,
        banner: {
          title: "AI Agents & Developer APIs",
          href: "/developers",
          description:
            "Connect Claude Code, Cursor, LLMs, and custom enterprise webhooks.",
        },
        links: [
          {
            title: "Claude MCP Server",
            description: "Connect Claude, Cursor, and AI coding agents to live workforce data.",
            href: "/developers/mcp-server",
            iconUrl: "/images/integrations/claude.svg",
            icon: Cpu,
          },
          {
            title: "REST API & Webhooks",
            description: "Versioned REST endpoints with webhooks, OpenAPI specs, and SDKs.",
            href: "/developers/api",
            iconUrl: "/images/integrations/rest-api.svg",
            icon: Code2,
          },
        ],
      },
    ];

    const currentCategory =
      integrationCategories.find((c) => c.id === integrationsActiveTab) ||
      integrationCategories[0];

    return (
      <div className="bg-white">
        <div className="p-6 lg:p-7 flex items-stretch gap-6 lg:gap-8 min-h-[380px]">
          {/* 1. Left Sidebar: Category Tabs */}
          <div className="w-52 xl:w-60 shrink-0 border-r border-[#E8D5EC] pr-4 flex flex-col justify-start">
            <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em] px-3 pb-3">
              INTEGRATIONS
            </p>
            <div className="space-y-1.5">
              {integrationCategories.map((cat) => {
                const isActive = integrationsActiveTab === cat.id;
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setIntegrationsActiveTab(cat.id)}
                    onClick={() => setIntegrationsActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#F6EDF8] text-[#0F1730] font-bold border border-[#61126E]/40 shadow-xs"
                        : "text-[#4A5370] hover:bg-[#FAF4FB] hover:text-[#0F1730] font-medium border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#61126E] text-white shadow-xs"
                          : "bg-[#FAF4FB] text-[#4A5370]"
                      }`}
                    >
                      <IconComp className="w-4 h-4 stroke-[1.8] text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Middle Column: Header Banner + 2-Column Links Grid */}
          <div className="flex-1 px-1 lg:px-2 flex flex-col justify-start">
            {/* Top Dark Banner Card */}
            <Link
              to={currentCategory.banner.href}
              onClick={() => setActiveMenu(null)}
              className="group block bg-[#0F1730] text-white px-5 py-3.5 rounded-[12px] border border-[#24305A] mb-4 hover:border-[#61126E]/60 transition-all shadow-xs"
            >
              <div className="flex items-center gap-1.5 font-display font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#D8B4FE] transition-colors">
                <span>{currentCategory.banner.title}</span>
                <span className="text-[#D8B4FE] font-extrabold text-base transition-transform group-hover:translate-x-1">›</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 font-normal">
                {currentCategory.banner.description}
              </p>
            </Link>

            {/* 2-Column Grid of Integration Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {currentCategory.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 p-2 rounded-xl hover:bg-[#FAF4FB] border border-transparent hover:border-[#E8D5EC] transition-all text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF4FB] text-[#0F1730] group-hover:bg-white group-hover:shadow-xs transition-all mt-0.5 border border-[#E8D5EC]/60 p-1.5">
                      {link.iconUrl ? (
                        <img
                          src={link.iconUrl}
                          alt={link.title}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <LinkIcon className="w-4 h-4 stroke-[1.8]" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                          {link.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4A5370] line-clamp-2 mt-0.5 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Spotlight Card (Exact Match to User Screenshot) */}
          <div className="w-72 2xl:w-80 shrink-0 pl-6 border-l border-[#E8D5EC] flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em]">
                SPOTLIGHT
              </p>
              <div className="p-5 rounded-[16px] bg-[#FAF4FB] border border-[#E8D5EC] space-y-2.5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#61126E] block">
                  TRACKER PLUS FOR JIRA
                </span>
                <h4 className="font-display font-bold text-[15px] leading-snug text-[#0F1730]">
                  Track directly inside Jira or Azure DevOps
                </h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Personal scoped tokens with zero admin credentials required.
                </p>
                <Link
                  to="/features/tracker-plus"
                  onClick={() => setActiveMenu(null)}
                  className="text-xs font-bold text-[#61126E] hover:underline flex items-center gap-1.5 pt-1 group"
                >
                  <span>Learn how it connects</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#E8D5EC]">
              <Link
                to="/developers"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[#0F1730] hover:text-[#61126E] flex items-center justify-between group transition-colors"
              >
                <span>Request a custom integration</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Strip (Sitemap Specification) */}
        <div className="px-8 py-3.5 bg-[#FAF4FB] border-t border-[#E8D5EC] flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-6">
            <Link
              to="/integrations"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Integrations hub</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/developers/mcp-server"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Claude MCP AI server</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/developers"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>REST API & Webhooks</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
          </div>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-2 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#61126E]" />
            <span>2-minute API key setup · No IT ticket required</span>
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 4. RESOURCES FULL-WIDTH MEGA MENU                                         */}
  {/* ========================================================================= */}
  function renderResourcesMegaMenu() {
    const resourceCategories = [
      {
        id: "learn" as const,
        name: "Learn",
        icon: BookOpen,
        banner: {
          title: "Deskmerit Knowledge & Guides",
          href: "/blog",
          description:
            "Research, benchmark reports, and workplace guides for high-trust engineering teams.",
        },
        links: [
          {
            title: "Blog",
            description: "Deep dives into remote productivity, trust, and operations.",
            href: "/blog",
            icon: FileText,
          },
          {
            title: "Monitoring-law guides",
            description: "Comprehensive international workplace monitoring compliance.",
            href: "/guides/employee-monitoring-laws",
            icon: Scale,
          },
          {
            title: "Glossary",
            description: "Definitive A to Z terms for time tracking and activity metrics.",
            href: "/glossary",
            icon: BookOpen,
          },
        ],
      },
      {
        id: "tools" as const,
        name: "Free tools & templates",
        icon: Calculator,
        banner: {
          title: "Free Calculators & Templates",
          href: "/tools",
          description:
            "Interactive operational tools and production-ready timesheets and policies.",
        },
        links: [
          {
            title: "Utilisation calculator",
            description: "Calculate team billable utilization rate and bench leakages.",
            href: "/tools/utilisation-calculator",
            icon: Calculator,
          },
          {
            title: "Overtime calculator",
            description: "Compute overtime costs and statutory working hour thresholds.",
            href: "/tools/overtime-calculator",
            icon: Clock,
          },
          {
            title: "Timesheet template",
            description: "Free downloadable Excel and Google Sheets bi-weekly timesheets.",
            href: "/templates/timesheet-template",
            icon: FileSpreadsheet,
          },
          {
            title: "Monitoring policy template",
            description: "Ethical workplace surveillance and employee notice charter.",
            href: "/templates/employee-monitoring-policy",
            icon: FileText,
          },
        ],
      },
      {
        id: "laws" as const,
        name: "Monitoring law guides",
        icon: Scale,
        banner: {
          title: "Country Legal Guides",
          href: "/guides/employee-monitoring-laws",
          description:
            "Detailed legal requirements for workplace surveillance and employee consent.",
        },
        links: [
          {
            title: "Guide: India",
            description: "Digital Personal Data Protection (DPDP) Act 2023 compliance.",
            href: "/guides/employee-monitoring-laws/india",
            icon: MapPin,
          },
          {
            title: "Guide: Australia",
            description: "NSW Workplace Surveillance Act and Fair Work guidelines.",
            href: "/guides/employee-monitoring-laws/australia",
            icon: Compass,
          },
          {
            title: "Guide: New Zealand",
            description: "Privacy Act 2020 Information Privacy Principles (IPPs).",
            href: "/guides/employee-monitoring-laws/new-zealand",
            icon: Navigation,
          },
          {
            title: "Guide: UAE",
            description: "Federal Decree-Law No. 33 worker privacy protections.",
            href: "/guides/employee-monitoring-laws/uae",
            icon: Globe,
          },
          {
            title: "Guide: Saudi Arabia",
            description: "Personal Data Protection Law (PDPL) workplace requirements.",
            href: "/guides/employee-monitoring-laws/saudi-arabia",
            icon: Globe,
          },
        ],
      },
    ];

    const currentCategory =
      resourceCategories.find((c) => c.id === resourcesActiveTab) ||
      resourceCategories[0];

    return (
      <div className="bg-white">
        <div className="p-6 lg:p-7 flex items-stretch gap-6 lg:gap-8 min-h-[380px]">
          {/* 1. Left Sidebar: Category Tabs */}
          <div className="w-52 xl:w-60 shrink-0 border-r border-[#E8D5EC] pr-4 flex flex-col justify-start">
            <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em] px-3 pb-3">
              RESOURCES
            </p>
            <div className="space-y-1.5">
              {resourceCategories.map((cat) => {
                const isActive = resourcesActiveTab === cat.id;
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setResourcesActiveTab(cat.id)}
                    onClick={() => setResourcesActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#F6EDF8] text-[#0F1730] font-bold border border-[#61126E]/40 shadow-xs"
                        : "text-[#4A5370] hover:bg-[#FAF4FB] hover:text-[#0F1730] font-medium border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#61126E] text-white shadow-xs"
                          : "bg-[#FAF4FB] text-[#4A5370]"
                      }`}
                    >
                      <IconComp className="w-4 h-4 stroke-[1.8] text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Middle Column: Header Banner + 2-Column Links Grid */}
          <div className="flex-1 px-1 lg:px-2 flex flex-col justify-start">
            {/* Top Dark Banner Card */}
            <Link
              to={currentCategory.banner.href}
              onClick={() => setActiveMenu(null)}
              className="group block bg-[#0F1730] text-white px-5 py-3.5 rounded-[12px] border border-[#24305A] mb-4 hover:border-[#61126E]/60 transition-all shadow-xs"
            >
              <div className="flex items-center gap-1.5 font-display font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#D8B4FE] transition-colors">
                <span>{currentCategory.banner.title}</span>
                <span className="text-[#D8B4FE] font-extrabold text-base transition-transform group-hover:translate-x-1">›</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 font-normal">
                {currentCategory.banner.description}
              </p>
            </Link>

            {/* 2-Column Grid of Resource Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {currentCategory.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF4FB] border border-transparent hover:border-[#E8D5EC] transition-all text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF4FB] text-[#0F1730] group-hover:bg-[#F6EDF8] group-hover:text-[#61126E] transition-colors mt-0.5 border border-[#E8D5EC]/60">
                      <LinkIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                          {link.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4A5370] line-clamp-2 mt-0.5 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Spotlight Card */}
          <div className="w-72 2xl:w-80 shrink-0 pl-6 border-l border-[#E8D5EC] flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em]">
                SPOTLIGHT
              </p>
              <div className="p-5 rounded-[16px] bg-[#FAF4FB] border border-[#E8D5EC] space-y-2.5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#61126E] block">
                  COMPLIANCE SPOTLIGHT
                </span>
                <h4 className="font-display font-bold text-[15px] leading-snug text-[#0F1730]">
                  Global Employee Monitoring Laws
                </h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Understand legal rights, employee notice requirements, and data privacy across top hiring regions.
                </p>
                <Link
                  to="/guides/employee-monitoring-laws"
                  onClick={() => setActiveMenu(null)}
                  className="text-xs font-bold text-[#61126E] hover:underline flex items-center gap-1.5 pt-1 group"
                >
                  <span>Read legal guides</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#E8D5EC]">
              <Link
                to="/privacy-promise"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[#0F1730] hover:text-[#61126E] flex items-center justify-between group transition-colors"
              >
                <span>Review privacy promise</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Strip (Sitemap Specification) */}
        <div className="px-8 py-3.5 bg-[#FAF4FB] border-t border-[#E8D5EC] flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-6">
            <a
              href="https://help.deskmerit.io"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Help centre</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#61126E]" />
            </a>
            <Link
              to="/developers"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Developers (REST API)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/developers/mcp-server"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>MCP server</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/changelog"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Changelog</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
          </div>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-2 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
            <span>Legal clarity for modern distributed employers</span>
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 5. COMPARE FULL-WIDTH MEGA MENU (3-Cols: Tabs + Links + Spotlight)        */}
  {/* ========================================================================= */}
  function renderCompareMegaMenu() {
    const compareCategories = [
      {
        id: "competitors" as const,
        name: "Competitor comparisons",
        icon: Scale,
        banner: {
          title: "Compare All Time Trackers",
          href: "/compare",
          description:
            "See how Deskmerit's privacy-first model and task-led Tracker Plus compare to legacy monitoring tools.",
        },
        links: [
          {
            title: "vs DeskTime",
            description: "Built around your PM tasks and HRMS with a generous free plan.",
            href: "/compare/desktime-alternative",
            icon: Scale,
          },
          {
            title: "vs Hubstaff",
            description: "Privacy-first tracking for desk teams without mobile GPS creep.",
            href: "/compare/hubstaff-alternative",
            icon: ShieldCheck,
          },
          {
            title: "vs Time Doctor",
            description: "Accountability without screenshot bombardment or intrusive alerts.",
            href: "/compare/time-doctor-alternative",
            icon: Clock,
          },
          {
            title: "vs ActivTrak",
            description: "Actionable workforce insights without enterprise complexity.",
            href: "/compare/activtrak-alternative",
            icon: BarChart3,
          },
          {
            title: "vs Toggl Track",
            description: "Automatic background tracking without forgotten timers.",
            href: "/compare/toggl-alternative",
            icon: Timer,
          },
          {
            title: "vs Time Champ",
            description: "Starts from Jira/Azure tickets with native Sqalible HRMS.",
            href: "/compare/time-champ-alternative",
            icon: Sparkles,
          },
        ],
      },
      {
        id: "trust" as const,
        name: "Trust & security",
        icon: ShieldCheck,
        banner: {
          title: "Enterprise Trust & Compliance",
          href: "/trust",
          description:
            "Designed for both sides of the screen: honest answers for managers, complete dignity for employees.",
        },
        links: [
          {
            title: "Security architecture",
            description: "Encryption in transit & at rest, multi-region residency, strict zero-keystrokes.",
            href: "/security",
            icon: Lock,
          },
          {
            title: "Privacy promise",
            description: "Strict guarantee: no keylogging, no webcams, screenshots off by default.",
            href: "/privacy-promise",
            icon: ShieldCheck,
          },
          {
            title: "Trust Center",
            description: "SOC2 Type II, ISO 27001, and regional statutory compliance proofs.",
            href: "/trust",
            icon: CheckCircle2,
          },
        ],
      },
    ];

    const currentCategory =
      compareCategories.find((c) => c.id === compareActiveTab) ||
      compareCategories[0];

    return (
      <div className="bg-white">
        <div className="p-6 lg:p-7 flex items-stretch gap-6 lg:gap-8 min-h-[380px]">
          {/* 1. Left Sidebar: Category Tabs */}
          <div className="w-52 xl:w-60 shrink-0 border-r border-[#E8D5EC] pr-4 flex flex-col justify-start">
            <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em] px-3 pb-3">
              COMPARE & TRUST
            </p>
            <div className="space-y-1.5">
              {compareCategories.map((cat) => {
                const isActive = compareActiveTab === cat.id;
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setCompareActiveTab(cat.id)}
                    onClick={() => setCompareActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#F6EDF8] text-[#0F1730] font-bold border border-[#61126E]/40 shadow-xs"
                        : "text-[#4A5370] hover:bg-[#FAF4FB] hover:text-[#0F1730] font-medium border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#61126E] text-white shadow-xs"
                          : "bg-[#FAF4FB] text-[#4A5370]"
                      }`}
                    >
                      <IconComp className="w-4 h-4 stroke-[1.8] text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Middle Column: Header Banner + 2-Column Links Grid */}
          <div className="flex-1 px-1 lg:px-2 flex flex-col justify-start">
            {/* Top Dark Banner Card */}
            <Link
              to={currentCategory.banner.href}
              onClick={() => setActiveMenu(null)}
              className="group block bg-[#0F1730] text-white px-5 py-3.5 rounded-[12px] border border-[#24305A] mb-4 hover:border-[#61126E]/60 transition-all shadow-xs"
            >
              <div className="flex items-center gap-1.5 font-display font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#D8B4FE] transition-colors">
                <span>{currentCategory.banner.title}</span>
                <span className="text-[#D8B4FE] font-extrabold text-base transition-transform group-hover:translate-x-1">›</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 font-normal">
                {currentCategory.banner.description}
              </p>
            </Link>

            {/* 2-Column Grid of Compare Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {currentCategory.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF4FB] border border-transparent hover:border-[#E8D5EC] transition-all text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF4FB] text-[#0F1730] group-hover:bg-[#F6EDF8] group-hover:text-[#61126E] transition-colors mt-0.5 border border-[#E8D5EC]/60">
                      <LinkIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                          {link.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4A5370] line-clamp-2 mt-0.5 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Spotlight Card */}
          <div className="w-72 2xl:w-80 shrink-0 pl-6 border-l border-[#E8D5EC] flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em]">
                SPOTLIGHT
              </p>
              <div className="p-5 rounded-[16px] bg-[#FAF4FB] border border-[#E8D5EC] space-y-2.5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#61126E] block">
                  WHY DESKMERIT
                </span>
                <h4 className="font-display font-bold text-[15px] leading-snug text-[#0F1730]">
                  Outcomes over surveillance
                </h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Legacy trackers watch keystrokes and spy. Deskmerit connects to sprint tickets so honest proof happens automatically.
                </p>
                <Link
                  to="/compare"
                  onClick={() => setActiveMenu(null)}
                  className="text-xs font-bold text-[#61126E] hover:underline flex items-center gap-1.5 pt-1 group"
                >
                  <span>Explore full comparison</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#E8D5EC]">
              <Link
                to="/privacy-promise"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[#0F1730] hover:text-[#61126E] flex items-center justify-between group transition-colors"
              >
                <span>Read our Privacy Promise</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Strip (Sitemap Specification) */}
        <div className="px-8 py-3.5 bg-[#FAF4FB] border-t border-[#E8D5EC] flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-6">
            <Link
              to="/compare"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Compare all time trackers</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/security"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Security architecture</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/privacy-promise"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Privacy promise</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/trust"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Trust Center</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
          </div>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-2 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
            <span>Zero keystroke logging · No webcams · 100% announced</span>
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 6. COMPANY FULL-WIDTH MEGA MENU (3-Cols: Tabs + Links + Spotlight)        */}
  {/* ========================================================================= */}
  function renderCompanyMegaMenu() {
    const companyCategories = [
      {
        id: "company" as const,
        name: "Company",
        icon: Building2,
        banner: {
          title: "About Deskmerit & Mission",
          href: "/about",
          description:
            "Our mission to give distributed teams honest, defensible time records without sacrificing dignity.",
        },
        links: [
          {
            title: "About us",
            description: "Our story, founding principles, and leadership team.",
            href: "/about",
            icon: Building2,
          },
          {
            title: "Careers",
            description: "Join our remote-first engineering and product team.",
            href: "/careers",
            icon: Briefcase,
          },
          {
            title: "Partners",
            description: "White-label resellers, consulting, and system integration tracks.",
            href: "/partners",
            icon: HeartHandshake,
          },
          {
            title: "Press & media kit",
            description: "Brand assets, executive bios, and press releases.",
            href: "/press",
            icon: FileText,
          },
          {
            title: "Contact us",
            description: "Speak with enterprise specialists or submit product feedback.",
            href: "/contact",
            icon: MessageSquare,
          },
          {
            title: "Book a demo",
            description: "1-on-1 walkthrough tailored to your team's tech stack.",
            href: "/demo",
            icon: Calendar,
          },
        ],
      },
      {
        id: "developers" as const,
        name: "Developers & API",
        icon: Code2,
        banner: {
          title: "Developer Platform & API",
          href: "/developers",
          description:
            "Versioned REST APIs, webhook events, and official Model Context Protocol (MCP) tooling.",
        },
        links: [
          {
            title: "Developers overview",
            description: "API keys, rate limits, SDKs, and webhook configurations.",
            href: "/developers",
            icon: Code2,
          },
          {
            title: "Claude MCP AI server",
            description: "Query workforce capacity and margins directly inside Claude & AI tools.",
            href: "/developers/mcp-server",
            icon: Cpu,
          },
          {
            title: "API documentation",
            description: "OpenAPI specifications, endpoints, and authentication guides.",
            href: "/developers/api",
            icon: FileText,
          },
          {
            title: "Product changelog",
            description: "Weekly release notes, improvements, and new platform features.",
            href: "/changelog",
            icon: Sparkles,
          },
          {
            title: "System status ↗",
            description: "Real-time uptime metrics, incident logs, and SLA monitoring.",
            href: "https://status.deskmerit.com",
            icon: Activity,
          },
        ],
      },
      {
        id: "legal" as const,
        name: "Legal & compliance",
        icon: ShieldCheck,
        banner: {
          title: "Legal Agreements & Compliance",
          href: "/legal/terms",
          description:
            "Transparent enterprise contractual frameworks, DPAs, and privacy commitments.",
        },
        links: [
          {
            title: "Terms of Service",
            description: "Master subscription agreement and customer obligations.",
            href: "/legal/terms",
            icon: FileText,
          },
          {
            title: "Privacy Policy",
            description: "What telemetry is captured, how it is stored, and your rights.",
            href: "/legal/privacy",
            icon: Lock,
          },
          {
            title: "Data Processing Agreement",
            description: "GDPR, DPDP, and APPs compliant data processing addendum.",
            href: "/legal/dpa",
            icon: CheckCircle2,
          },
          {
            title: "Sub-processors list",
            description: "Full list of infrastructure, cloud hosting, and email providers.",
            href: "/legal/subprocessors",
            icon: Layers,
          },
          {
            title: "Cookie Policy",
            description: "Essential and analytics cookie disclosures.",
            href: "/legal/cookies",
            icon: ShieldCheck,
          },
          {
            title: "Service Level Agreement",
            description: "99.95% availability guarantee and credit response schedules.",
            href: "/legal/sla",
            icon: CheckSquare,
          },
        ],
      },
    ];

    const currentCategory =
      companyCategories.find((c) => c.id === companyActiveTab) ||
      companyCategories[0];

    return (
      <div className="bg-white">
        <div className="p-6 lg:p-7 flex items-stretch gap-6 lg:gap-8 min-h-[380px]">
          {/* 1. Left Sidebar: Category Tabs */}
          <div className="w-52 xl:w-60 shrink-0 border-r border-[#E8D5EC] pr-4 flex flex-col justify-start">
            <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em] px-3 pb-3">
              COMPANY & DEVELOPERS
            </p>
            <div className="space-y-1.5">
              {companyCategories.map((cat) => {
                const isActive = companyActiveTab === cat.id;
                const IconComp = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onMouseEnter={() => setCompanyActiveTab(cat.id)}
                    onClick={() => setCompanyActiveTab(cat.id)}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-[#F6EDF8] text-[#0F1730] font-bold border border-[#61126E]/40 shadow-xs"
                        : "text-[#4A5370] hover:bg-[#FAF4FB] hover:text-[#0F1730] font-medium border border-transparent"
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#61126E] text-white shadow-xs"
                          : "bg-[#FAF4FB] text-[#4A5370]"
                      }`}
                    >
                      <IconComp className="w-4 h-4 stroke-[1.8] text-current" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold truncate">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Middle Column: Header Banner + 2-Column Links Grid */}
          <div className="flex-1 px-1 lg:px-2 flex flex-col justify-start">
            {/* Top Dark Banner Card */}
            <Link
              to={currentCategory.banner.href}
              onClick={() => setActiveMenu(null)}
              className="group block bg-[#0F1730] text-white px-5 py-3.5 rounded-[12px] border border-[#24305A] mb-4 hover:border-[#61126E]/60 transition-all shadow-xs"
            >
              <div className="flex items-center gap-1.5 font-display font-bold text-[14px] sm:text-[15px] text-white group-hover:text-[#D8B4FE] transition-colors">
                <span>{currentCategory.banner.title}</span>
                <span className="text-[#D8B4FE] font-extrabold text-base transition-transform group-hover:translate-x-1">›</span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 line-clamp-1 font-normal">
                {currentCategory.banner.description}
              </p>
            </Link>

            {/* 2-Column Grid of Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {currentCategory.links.map((link) => {
                const LinkIcon = link.icon;
                const isExternal = link.href.startsWith("http");
                return isExternal ? (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF4FB] border border-transparent hover:border-[#E8D5EC] transition-all text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF4FB] text-[#0F1730] group-hover:bg-[#F6EDF8] group-hover:text-[#61126E] transition-colors mt-0.5 border border-[#E8D5EC]/60">
                      <LinkIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors inline-flex items-center gap-1">
                          {link.title}
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4A5370] line-clamp-2 mt-0.5 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ) : (
                  <Link
                    key={link.title}
                    to={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF4FB] border border-transparent hover:border-[#E8D5EC] transition-all text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF4FB] text-[#0F1730] group-hover:bg-[#F6EDF8] group-hover:text-[#61126E] transition-colors mt-0.5 border border-[#E8D5EC]/60">
                      <LinkIcon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-[13px] font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                          {link.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#4A5370] line-clamp-2 mt-0.5 leading-snug">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Spotlight Card */}
          <div className="w-72 2xl:w-80 shrink-0 pl-6 border-l border-[#E8D5EC] flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-bold text-[#4A5370] uppercase tracking-[0.14em]">
                SPOTLIGHT
              </p>
              <div className="p-5 rounded-[16px] bg-[#FAF4FB] border border-[#E8D5EC] space-y-2.5 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#61126E] block">
                  PARTNER ECOSYSTEM
                </span>
                <h4 className="font-display font-bold text-[15px] leading-snug text-[#0F1730]">
                  Global Partner Program
                </h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Deliver Deskmerit under your agency domain, earn recurring revenue shares, or integrate with bespoke HRMS.
                </p>
                <Link
                  to="/partners"
                  onClick={() => setActiveMenu(null)}
                  className="text-xs font-bold text-[#61126E] hover:underline flex items-center gap-1.5 pt-1 group"
                >
                  <span>Explore partner tracks</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[#E8D5EC]">
              <Link
                to="/signup"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[#0F1730] hover:text-[#61126E] flex items-center justify-between group transition-colors"
              >
                <span>Try Deskmerit free for 14 days</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Strip (Sitemap Specification) */}
        <div className="px-8 py-3.5 bg-[#FAF4FB] border-t border-[#E8D5EC] flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>About Deskmerit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/partners"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Partner program</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/developers/mcp-server"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Claude MCP AI server</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
            <Link
              to="/legal/terms"
              onClick={() => setActiveMenu(null)}
              className="font-bold text-[#0F1730] hover:text-[#61126E] flex items-center gap-1.5 transition-colors"
            >
              <span>Terms & Privacy</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#61126E]" />
            </Link>
          </div>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-2 font-medium">
            <Building2 className="w-3.5 h-3.5 text-[#61126E]" />
            <span>A Kombee Technologies product · India · Australia · UAE</span>
          </span>
        </div>
      </div>
    );
  }
}
