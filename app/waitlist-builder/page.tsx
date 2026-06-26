import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WAITROCKET — 100 signups become 1,000",
  description:
    "Turn your waitlist into a viral growth machine. Every signup gets a referral link. Watch signups compound.",
  openGraph: {
    title: "WAITROCKET — 100 signups become 1,000",
    description: "Viral waitlist builder. Every signup brings 3 more. 5 min install.",
    url: "https://waitrocket.com",
    siteName: "WAITROCKET",
    type: "website",
  },
};

const TESTIMONIALS = [
  {
    quote:
      "We hit 2,400 signups in 4 days. I did nothing — the referral loop just ran. It was wild to watch.",
    author: "Elena Marsh",
    role: "Founder, Tidepool",
    initials: "EM",
    metric: "2,400 signups in 4 days",
    from: "#FF5E1A",
    to: "#ff8c00",
  },
  {
    quote:
      "Tried three other tools before this. None of them had a 3.8× viral coefficient. WAITROCKET does.",
    author: "Arjun Sharma",
    role: "Co-founder, Forge.dev",
    initials: "AS",
    metric: "3.8× viral coefficient",
    from: "#6366f1",
    to: "#8b5cf6",
  },
  {
    quote:
      "1,100 people on the list before we shipped a single line of product code. This is how you validate.",
    author: "Naomi Lewis",
    role: "Indie maker, Quill",
    initials: "NL",
    metric: "1,100 signups pre-launch",
    from: "#059669",
    to: "#A3E635",
  },
];

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#FF5E1A" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stat: "3.7×",
    title: "Viral referral engine",
    desc: "Every signup gets a unique referral link. Climb the queue by referring friends. Your list compounds.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#FF5E1A" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    stat: "2 min",
    title: "Email automation built in",
    desc: "Confirmation, referral updates, launch day announcement — all automated. Zero manual work.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#FF5E1A" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stat: "Real-time",
    title: "Founder dashboard",
    desc: "See signups, referral chains, viral coefficient and conversion rates in real time.",
  },
];

// Bar chart data (visual only)
const CHART_BARS = [
  { h: 45, signups: 812 },
  { h: 62, signups: 1124 },
  { h: 38, signups: 688 },
  { h: 78, signups: 1412 },
  { h: 55, signups: 998 },
  { h: 90, signups: 1630 },
  { h: 100, signups: 1813 },
];

export default function WaitrocketPage() {
  return (
    <div
      className={`${jakarta.variable} ${syne.variable} flex flex-col min-h-screen`}
      style={{
        background: "#FFFDF9",
        color: "#1A1A1A",
        fontFamily: "var(--font-jakarta), system-ui, sans-serif",
      }}
    >
      {/* ─── Nav ─────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{
          background: "rgba(255,253,249,0.92)",
          borderBottom: "1px solid #F0EDE8",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span
            className="font-black text-xl tracking-tight"
            style={{
              fontFamily: "var(--font-syne)",
              color: "#FF5E1A",
            }}
          >
            WAITROCKET
          </span>
          <nav className="flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-sm font-medium transition-colors hover:text-[#FF5E1A]"
              style={{ color: "#6B6B6B" }}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium transition-colors hover:text-[#FF5E1A]"
              style={{ color: "#6B6B6B" }}
            >
              Pricing
            </a>
            <Link
              href="/dashboard/waitlists/new"
              className="px-4 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90 text-white"
              style={{ background: "#FF5E1A" }}
            >
              Get started →
            </Link>
          </nav>
        </div>
      </header>

      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Subtle warm pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #FF5E1A06 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-8"
              style={{
                background: "#FF5E1A12",
                border: "1px solid #FF5E1A30",
                color: "#FF5E1A",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#FF5E1A" }}
              />
              12,847 signups collected this week
            </div>

            <h1
              className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              100 signups
              <br />
              become{" "}
              <span style={{ color: "#FF5E1A" }}>1,000.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10" style={{ color: "#6B6B6B" }}>
              Every person who signs up gets a referral link. Every referral
              jumps the queue and brings more signups. Your waitlist grows itself.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "5 min install",
                "Works anywhere",
                "No credit card",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: "#F5F0EB", color: "#6B6B6B" }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#A3E635" }}>
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard/waitlists/new"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-lg transition-opacity hover:opacity-90 text-white"
                style={{ background: "#FF5E1A" }}
              >
                Launch your waitlist →
              </Link>
            </div>
          </div>

          {/* Right: Waitlist widget mock */}
          <div className="lg:pl-4">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto"
              style={{
                background: "#fff",
                border: "1px solid #F0EDE8",
                boxShadow: "0 20px 60px #FF5E1A15, 0 4px 20px #00000010",
              }}
            >
              {/* Widget header */}
              <div
                className="p-6 text-center"
                style={{ borderBottom: "1px solid #F5F0EB" }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "#FF5E1A" }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3
                  className="font-black text-lg mb-1"
                  style={{ fontFamily: "var(--font-syne)", color: "#1A1A1A" }}
                >
                  Join Tidepool
                </h3>
                <p className="text-sm" style={{ color: "#9B9B9B" }}>
                  Early access · Be first when we launch
                </p>
              </div>

              {/* Input + submit */}
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <input
                    disabled
                    placeholder="your@email.com"
                    className="flex-1 rounded-lg px-4 py-2.5 text-sm"
                    style={{
                      background: "#FAFAF8",
                      border: "1px solid #E8E4DF",
                      color: "#9B9B9B",
                    }}
                  />
                  <button
                    disabled
                    className="px-5 py-2.5 rounded-lg text-sm font-bold text-white flex-shrink-0"
                    style={{ background: "#FF5E1A" }}
                  >
                    Join →
                  </button>
                </div>

                {/* Position indicator */}
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "#FFFBF7", border: "1px solid #F5E8DF" }}
                >
                  <p className="text-sm mb-1" style={{ color: "#6B6B6B" }}>
                    You are{" "}
                    <span className="font-black text-base" style={{ color: "#FF5E1A" }}>
                      #847
                    </span>{" "}
                    on the list
                  </p>
                  {/* Progress bar */}
                  <div
                    className="h-2 rounded-full mt-2 overflow-hidden"
                    style={{ background: "#F0EDE8" }}
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: "72%", background: "linear-gradient(90deg, #FF5E1A, #ff8c00)" }}
                    />
                  </div>
                  <p className="text-xs mt-2" style={{ color: "#B0A8A0" }}>
                    Refer friends to move up ↑
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div
                className="py-2.5 px-6 text-center text-xs"
                style={{
                  background: "#FAFAF8",
                  borderTop: "1px solid #F0EDE8",
                  color: "#B0A8A0",
                }}
              >
                Powered by{" "}
                <span className="font-bold" style={{ color: "#FF5E1A" }}>
                  WAITROCKET
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ borderTop: "1px solid #F0EDE8" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold mb-12 uppercase tracking-widest" style={{ color: "#B0A8A0" }}>
            Founders who already shipped
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, author, role, initials, metric, from, to }) => (
              <div
                key={author}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#fff", border: "1px solid #F0EDE8" }}
              >
                {/* Metric highlight */}
                <p
                  className="text-sm font-black"
                  style={{ color: "#FF5E1A" }}
                >
                  {metric}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#6B6B6B" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#1A1A1A" }}>
                      {author}
                    </p>
                    <p className="text-xs" style={{ color: "#B0A8A0" }}>
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works (viral loop) ───────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-20 px-6"
        style={{ borderTop: "1px solid #F0EDE8", background: "#FFFBF7" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "#B0A8A0" }}>
              How it works
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black"
              style={{ fontFamily: "var(--font-syne)", color: "#1A1A1A" }}
            >
              The loop that makes your list grow itself.
            </h2>
          </div>

          {/* 4-step viral loop */}
          <div className="grid sm:grid-cols-4 gap-4 mb-16 relative">
            {[
              {
                n: 1,
                title: "Someone signs up",
                desc: "Finds your waitlist page",
                color: "#FF5E1A",
                bg: "#FF5E1A12",
              },
              {
                n: 2,
                title: "Gets a referral link",
                desc: "Unique to them, shareable anywhere",
                color: "#ff8c00",
                bg: "#ff8c0012",
              },
              {
                n: 3,
                title: "Shares it",
                desc: "To jump the queue",
                color: "#A3E635",
                bg: "#A3E63512",
              },
              {
                n: 4,
                title: "More people sign up",
                desc: "Cycle repeats automatically",
                color: "#FF5E1A",
                bg: "#FF5E1A12",
              },
            ].map(({ n, title, desc, color, bg }) => (
              <div
                key={n}
                className="rounded-2xl p-5 text-center"
                style={{ background: bg, border: `1px solid ${color}30` }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-3 font-black text-white text-sm"
                  style={{ background: color }}
                >
                  {n}
                </div>
                <p className="font-bold text-sm mb-1" style={{ color: "#1A1A1A" }}>
                  {title}
                </p>
                <p className="text-xs" style={{ color: "#9B9B9B" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-6 rounded-2xl p-8"
            style={{ background: "#fff", border: "1px solid #F0EDE8" }}
          >
            {[
              { n: "14,000+", l: "signups collected" },
              { n: "3.7×", l: "average viral coefficient" },
              { n: "5 min", l: "to launch your first list" },
            ].map(({ n, l }) => (
              <div key={l} className="text-center">
                <p
                  className="text-2xl sm:text-3xl font-black"
                  style={{ fontFamily: "var(--font-syne)", color: "#FF5E1A" }}
                >
                  {n}
                </p>
                <p className="text-xs mt-1" style={{ color: "#9B9B9B" }}>
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Founder dashboard ───────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #F0EDE8" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "#B0A8A0" }}>
              Founder dashboard
            </p>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-syne)", color: "#1A1A1A" }}
            >
              Watch signups compound in real time.
            </h2>
          </div>

          {/* Browser window mockup */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{
              border: "1px solid #E8E4DF",
              boxShadow: "0 20px 60px #00000012",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: "#F5F0EB", borderBottom: "1px solid #E8E4DF" }}
            >
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <div
                className="flex-1 mx-4 rounded-lg px-4 py-1.5 text-xs text-center"
                style={{ background: "#fff", color: "#9B9B9B", border: "1px solid #E8E4DF" }}
              >
                app.waitrocket.io/dashboard
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex" style={{ background: "#FAFAF8", minHeight: "360px" }}>
              {/* Sidebar */}
              <div
                className="w-14 flex flex-col items-center py-5 gap-4 flex-shrink-0"
                style={{ background: "#1A1A1A", borderRight: "1px solid #2A2A2A" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: "#FF5E1A" }}
                >
                  W
                </div>
                {[
                  <path key="home" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
                  <path key="chart" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                  <path key="users" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
                ].map((d, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: i === 0 ? "#FF5E1A" : "#4A4A4A" }}
                  >
                    {d}
                  </svg>
                ))}
              </div>

              {/* Main area */}
              <div className="flex-1 p-6">
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-black text-sm" style={{ color: "#1A1A1A" }}>
                      Tidepool · launch waitlist
                    </h3>
                    <p className="text-xs" style={{ color: "#9B9B9B" }}>
                      Created May 14, 2026
                    </p>
                  </div>
                  <span
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
                    style={{ background: "#A3E63520", color: "#5a8a00", border: "1px solid #A3E63540" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#A3E635" }} />
                    LIVE
                  </span>
                </div>

                {/* KPI cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: "Total signups", value: "12,847", dark: true },
                    { label: "Viral coefficient", value: "3.24×", dark: false },
                    { label: "Referrers", value: "4,128", dark: false },
                    { label: "Conversion", value: "38%", dark: false },
                  ].map(({ label, value, dark }) => (
                    <div
                      key={label}
                      className="rounded-xl p-3"
                      style={{
                        background: dark ? "#1A1A1A" : "#fff",
                        border: `1px solid ${dark ? "#2A2A2A" : "#F0EDE8"}`,
                      }}
                    >
                      <p
                        className="text-[10px] mb-1"
                        style={{ color: dark ? "#6B6B6B" : "#9B9B9B" }}
                      >
                        {label}
                      </p>
                      <p
                        className="font-black text-lg leading-none"
                        style={{
                          color: dark ? "#FF5E1A" : "#1A1A1A",
                          fontFamily: "var(--font-syne)",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bar chart */}
                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ background: "#fff", border: "1px solid #F0EDE8" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-bold" style={{ color: "#1A1A1A" }}>
                      Signups / day
                    </p>
                    <p className="text-[10px]" style={{ color: "#9B9B9B" }}>
                      last 7 days
                    </p>
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {CHART_BARS.map(({ h, signups }, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-sm transition-all"
                          style={{
                            height: `${h}%`,
                            background:
                              i === 6
                                ? "#FF5E1A"
                                : "#FF5E1A40",
                            minHeight: "4px",
                          }}
                          title={`${signups} signups`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span
                        key={i}
                        className="flex-1 text-center text-[9px]"
                        style={{ color: i === 6 ? "#FF5E1A" : "#C0B8B0" }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top referrers */}
                <div
                  className="rounded-xl p-4"
                  style={{ background: "#fff", border: "1px solid #F0EDE8" }}
                >
                  <p className="text-xs font-bold mb-3" style={{ color: "#1A1A1A" }}>
                    Top referrers
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "elena@tidepool.io", refs: 47, pct: 100 },
                      { name: "dev@forge.dev", refs: 31, pct: 66 },
                      { name: "hi@quill.so", refs: 24, pct: 51 },
                    ].map(({ name, refs, pct }) => (
                      <div key={name} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, #FF5E1A, #ff8c00)" }}
                        />
                        <p className="text-xs flex-1 truncate" style={{ color: "#6B6B6B" }}>
                          {name}
                        </p>
                        <div className="flex items-center gap-2">
                          <div
                            className="w-16 h-1.5 rounded-full overflow-hidden"
                            style={{ background: "#F0EDE8" }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${pct}%`, background: "#FF5E1A" }}
                            />
                          </div>
                          <span className="text-[10px] font-bold" style={{ color: "#FF5E1A" }}>
                            {refs}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ borderTop: "1px solid #F0EDE8", background: "#FFFBF7" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "#B0A8A0" }}>
              Features
            </p>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-syne)", color: "#1A1A1A" }}
            >
              Built for founders who ship.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ background: "#fff", border: "1px solid #F0EDE8" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#FF5E1A12" }}
                  >
                    {f.icon}
                  </div>
                  <span
                    className="text-2xl font-black"
                    style={{ fontFamily: "var(--font-syne)", color: "#FF5E1A" }}
                  >
                    {f.stat}
                  </span>
                </div>
                <h3 className="font-black mb-2" style={{ color: "#1A1A1A" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9B9B9B" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="py-20 px-6"
        style={{ borderTop: "1px solid #F0EDE8" }}
      >
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "#B0A8A0" }}>
              Pricing
            </p>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "var(--font-syne)", color: "#1A1A1A" }}
            >
              $9/month. Unlimited waitlists.
            </h2>
            <p className="text-sm mt-2" style={{ color: "#9B9B9B" }}>
              No per-signup fees. No subscriber limits.
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background: "#1A1A1A",
              border: "1px solid #2A2A2A",
            }}
          >
            <div
              className="flex items-start justify-between mb-6 pb-6"
              style={{ borderBottom: "1px solid #2A2A2A" }}
            >
              <div>
                <p
                  className="text-xs font-bold mb-2 uppercase tracking-widest"
                  style={{ color: "#FF5E1A" }}
                >
                  WAITROCKET Pro
                </p>
                <p
                  className="text-5xl font-black text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  $9
                </p>
                <p className="text-sm mt-1" style={{ color: "#6B6B6B" }}>
                  per month
                </p>
              </div>
              <Link
                href="/dashboard/waitlists/new"
                className="px-5 py-2.5 rounded-xl font-black text-sm transition-opacity hover:opacity-90 text-white"
                style={{ background: "#FF5E1A" }}
              >
                Start now →
              </Link>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Unlimited waitlists",
                "Unlimited subscribers",
                "Viral referral engine",
                "Email automation",
                "Real-time founder dashboard",
                "Custom branding",
                "Embeddable widget",
                "API access",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#A3E635" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-center text-xs" style={{ color: "#4A4A4A" }}>
              No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ───────────────────────────────────────────────── */}
      <section
        className="py-24 px-6"
        style={{
          borderTop: "1px solid #F0EDE8",
          background: "linear-gradient(135deg, #FF5E1A08 0%, #A3E63508 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)", color: "#1A1A1A" }}
          >
            100 signups
            <br />
            <span style={{ color: "#FF5E1A" }}>become 1,000.</span>
          </h2>
          <p className="mb-10" style={{ color: "#9B9B9B" }}>
            Set up your viral waitlist in 5 minutes. Watch the referral loop kick in.
          </p>
          <Link
            href="/dashboard/waitlists/new"
            className="inline-flex items-center gap-2 px-12 py-4 rounded-xl font-black text-lg transition-opacity hover:opacity-90 text-white"
            style={{ background: "#FF5E1A" }}
          >
            Launch your waitlist →
          </Link>
          <p className="text-sm mt-4" style={{ color: "#C0B8B0" }}>
            No credit card required · Cancel anytime
          </p>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-8"
        style={{ borderTop: "1px solid #F0EDE8", background: "#fff" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span
            className="font-black"
            style={{ fontFamily: "var(--font-syne)", color: "#FF5E1A" }}
          >
            WAITROCKET
          </span>
          <div className="flex items-center gap-6 text-xs" style={{ color: "#B0A8A0" }}>
            <Link href="/privacy" className="hover:text-[#FF5E1A] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#FF5E1A] transition-colors">
              Terms
            </Link>
            <Link
              href="/dashboard/waitlists/new"
              className="font-bold hover:opacity-80 transition-opacity"
              style={{ color: "#FF5E1A" }}
            >
              Create a waitlist →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
