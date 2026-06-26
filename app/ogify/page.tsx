import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ogzap — OG images for any URL. One GET request.",
  description:
    "ogzap generates Open Graph images on-demand — headless rendered, CDN-cached, delivered in milliseconds. Add it in one line.",
  openGraph: {
    title: "ogzap — OG images for any URL. One GET request.",
    description: "Headless rendered OG images. CDN-cached. API key in 30 seconds.",
    url: "https://ogzap.com",
    siteName: "ogzap",
    type: "website",
  },
};

const TESTIMONIALS = [
  {
    quote:
      "Saved me an entire weekend of infrastructure work. One GET request and my link previews are perfect everywhere.",
    author: "Marin Aslanian",
    role: "Backend engineer @ pencilbase",
    initials: "MA",
    from: "#00b8a0",
    to: "#0080ff",
  },
  {
    quote:
      "I was about to spend a week building headless Chromium rendering. ogzap is 10 lines of code instead.",
    author: "Jules Karpinski",
    role: "Founder, Linkroom",
    initials: "JK",
    from: "#6366f1",
    to: "#8b5cf6",
  },
  {
    quote:
      "p50 cache hit at 7ms. p99 cold render at 312ms. These are the numbers I needed to ship and forget.",
    author: "Rohan Velasco",
    role: "Indie hacker",
    initials: "RV",
    from: "#0ea5e9",
    to: "#00E8CC",
  },
];

const FEATURES = [
  {
    icon: "🖥",
    title: "Headless rendered",
    desc: "Real Chrome. Real fonts. CSS grid, web fonts, the full browser stack — no shortcuts.",
  },
  {
    icon: "⚡",
    title: "CDN cached globally",
    desc: "First render cold-starts in <400ms. Every cache hit is served from edge in single-digit ms.",
  },
  {
    icon: "📐",
    title: "1200×630px guaranteed",
    desc: "Perfect Open Graph dimensions every time. Twitter, LinkedIn, Slack, iMessage all render correctly.",
  },
  {
    icon: "🔗",
    title: "Any URL, any stack",
    desc: "Works on Next.js, Rails, Django, static sites, anything. If it has a URL, we render it.",
  },
  {
    icon: "💳",
    title: "Flat-rate pricing",
    desc: "One monthly price. Unlimited renders. No per-render fees, no traffic spike anxiety.",
  },
  {
    icon: "🔑",
    title: "API key in 30 seconds",
    desc: "Sign up, copy your key, point your og:image at our URL. That's the entire setup.",
  },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Get your API key",
    desc: "Sign up and copy your key from the dashboard. Takes 30 seconds.",
  },
  {
    n: "02",
    title: "Send one GET request",
    desc: "Point ogzap at any URL. We render it headless and return a 1200×630 PNG.",
    code: "GET api.ogzap.com/v1/og\n  ?url={url}&key={key}",
  },
  {
    n: "03",
    title: "Beautiful OG image returned",
    desc: "Serve the URL as your og:image. Every platform shows the branded preview.",
  },
];

// OG card content for the gallery — pure CSS/HTML mockups
type OgCard = {
  bg: string;
  label: string;
  stamp: string;
  stampHit: boolean;
  content: ReactNode;
};

const OG_CARDS: OgCard[] = [
  {
    bg: "#0B1220",
    label: "pencilbase.dev/blog/edge",
    stamp: "HIT · 7ms",
    stampHit: true,
    content: (
      <div className="w-full h-full flex flex-col justify-end p-5">
        <p className="text-[10px] font-mono mb-2" style={{ color: "#00E8CC", opacity: 0.6 }}>
          pencilbase.dev
        </p>
        <p className="text-white font-bold text-sm leading-snug mb-1">
          Cutting p99 latency by 60% at the edge
        </p>
        <p className="text-[10px]" style={{ color: "#8896A4" }}>
          Marin Aslanian · 8 min read
        </p>
        <div
          className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #00E8CC18 0%, transparent 70%)",
          }}
        />
      </div>
    ),
  },
  {
    bg: "#F5F1EA",
    label: "linkroom.io/launch",
    stamp: "HIT · 12ms",
    stampHit: true,
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center p-5 text-center">
        <div
          className="w-7 h-7 rounded mb-2 flex items-center justify-center"
          style={{ background: "#111" }}
        >
          <span className="text-white text-[9px] font-black">L</span>
        </div>
        <p className="font-bold text-sm leading-tight" style={{ color: "#111" }}>
          Linkroom 2.0 —{" "}
          <span className="font-normal text-[#666]">share links that share back</span>
        </p>
      </div>
    ),
  },
  {
    bg: "linear-gradient(135deg, #1a0533 0%, #0a0010 100%)",
    label: "podcasts.io/ep47",
    stamp: "MISS · 301ms",
    stampHit: false,
    content: (
      <div className="w-full h-full flex items-center gap-3 p-5">
        <div
          className="w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-[9px] font-mono"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#c4b5fd" }}
        >
          WAVE
        </div>
        <div>
          <p className="text-white font-bold text-xs leading-snug mb-1">
            Ep. 47 — Why every CTO is wrong about caching
          </p>
          <p className="text-[10px]" style={{ color: "#a78bfa" }}>
            58 min
          </p>
        </div>
      </div>
    ),
  },
  {
    bg: "#0D1117",
    label: "github.com/saasweekly/edge-cache",
    stamp: "HIT · 9ms",
    stampHit: true,
    content: (
      <div className="w-full h-full flex flex-col justify-center p-5">
        <p className="text-[10px] font-mono mb-2" style={{ color: "#8b949e" }}>
          saasweekly / edge-cache-bench
        </p>
        <p className="font-mono text-xs leading-snug mb-3" style={{ color: "#c9d1d9" }}>
          Benchmarks for edge caching strategies<br />across 14 CDNs
        </p>
        <div className="flex gap-3 text-[10px] font-mono" style={{ color: "#8b949e" }}>
          <span>★ 2,341</span>
          <span>forks 188</span>
          <span>MIT</span>
        </div>
      </div>
    ),
  },
  {
    bg: "#DCE6DD",
    label: "ceramics.store/no4",
    stamp: "HIT · 5ms",
    stampHit: true,
    content: (
      <div className="w-full h-full flex items-center gap-4 p-5">
        <div
          className="w-14 h-14 rounded-lg flex-shrink-0 flex items-center justify-center text-[9px] font-mono text-center"
          style={{ background: "#c8d5ca", color: "#5a7060" }}
        >
          pour<br />over
        </div>
        <div>
          <p className="font-bold text-sm" style={{ color: "#2d3a2e", fontFamily: "Georgia, serif" }}>
            Stoneware No. 4
          </p>
          <p className="text-xs" style={{ color: "#5a7060" }}>
            now in matte oat
          </p>
          <p className="text-xs font-bold mt-1" style={{ color: "#2d3a2e" }}>
            €68
          </p>
        </div>
      </div>
    ),
  },
  {
    bg: "linear-gradient(135deg, #FF006B 0%, #FF8C00 100%)",
    label: "rendercon.dev/26",
    stamp: "HIT · 11ms",
    stampHit: true,
    content: (
      <div className="w-full h-full flex flex-col justify-center p-5">
        <p className="text-white font-black text-2xl italic leading-none">
          RenderCon &apos;26
        </p>
        <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>
          Sept 12–14 · Lisbon
        </p>
        <p className="mt-2 text-[10px]" style={{ color: "#FFE066" }}>
          Early bird ends June 1
        </p>
      </div>
    ),
  },
];

export default function OgzapPage() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: "#0A0A0F",
        color: "#F8FAFF",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
      }}
    >
      {/* ─── Nav ─────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-sm"
        style={{
          background: "rgba(10,10,15,0.92)",
          borderBottom: "1px solid #1a1a2e",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-black text-lg tracking-tight" style={{ color: "#00E8CC" }}>
              ogzap
            </span>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded font-mono font-bold"
              style={{
                background: "#00E8CC18",
                color: "#00E8CC",
                border: "1px solid #00E8CC30",
              }}
            >
              v1
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#gallery"
              className="text-sm font-medium transition-colors hover:text-[#F8FAFF]"
              style={{ color: "#8896A4" }}
            >
              Gallery
            </a>
            <Link
              href="/ogify/docs"
              className="text-sm font-medium transition-colors hover:text-[#F8FAFF]"
              style={{ color: "#8896A4" }}
            >
              Docs
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: "#00E8CC", color: "#0A0A0F" }}
            >
              Get API Key
            </Link>
          </nav>
        </div>
      </header>

      {/* ─── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Spark grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #00E8CC08 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Cyan glow top-center */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            background: "radial-gradient(ellipse, #00E8CC10 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold mb-8"
              style={{
                background: "#00E8CC10",
                border: "1px solid #00E8CC25",
                color: "#00E8CC",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#00E8CC" }}
              />
              REST API · No SDK required
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
              One request.
              <br />
              <span style={{ color: "#00E8CC" }}>Perfect preview.</span>
            </h1>

            <p className="text-lg leading-relaxed mb-10" style={{ color: "#8896A4" }}>
              ogzap generates OG images for any URL on-demand — headless rendered,
              CDN-cached, delivered in milliseconds. Add it in one line.
            </p>

            {/* Code snippet */}
            <div
              className="rounded-xl overflow-hidden mb-8"
              style={{ border: "1px solid #1e1e2e" }}
            >
              <div
                className="px-4 py-2.5 flex items-center justify-between text-xs font-mono"
                style={{
                  background: "#0f0f1a",
                  borderBottom: "1px solid #1e1e2e",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <span style={{ color: "#4a4a6a" }}>GET request</span>
              </div>
              <pre
                className="p-5 text-sm overflow-x-auto"
                style={{
                  background: "#080810",
                  fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                  lineHeight: 1.7,
                }}
              >
                <code>
                  <span style={{ color: "#4a4a7a" }}>GET </span>
                  <span style={{ color: "#00E8CC" }}>https://api.ogzap.com/v1/og</span>
                  {"\n"}
                  {"  "}
                  <span style={{ color: "#4a4a7a" }}>?url=</span>
                  <span style={{ color: "#f0a050" }}>pencilbase.dev%2Fblog%2Fedge</span>
                  {"\n"}
                  {"  "}
                  <span style={{ color: "#4a4a7a" }}>&amp;key=</span>
                  <span style={{ color: "#f0a050" }}>your_key_here</span>
                  {"\n\n"}
                  <span style={{ color: "#3a6a4a" }}>{"// → returns 1200×630 PNG · CDN-cached · 7ms"}</span>
                </code>
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-black text-base transition-opacity hover:opacity-90"
                style={{ background: "#00E8CC", color: "#0A0A0F" }}
              >
                Get API Key free →
              </Link>
              <Link
                href="/ogify/docs"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base transition-colors hover:text-[#F8FAFF] hover:border-[#3a3a5a]"
                style={{ border: "1px solid #2a2a3a", color: "#8896A4" }}
              >
                See docs
              </Link>
            </div>
            <p
              className="text-xs font-mono mt-4"
              style={{ color: "#3a3a5a", fontFamily: "var(--font-geist-mono)" }}
            >
              $ no credit card required · API key in 30 seconds
            </p>
          </div>

          {/* Right column: rendered OG card */}
          <div className="lg:pl-4">
            <p
              className="text-xs font-mono mb-4 uppercase tracking-widest"
              style={{ color: "#4a4a6a", fontFamily: "var(--font-geist-mono)" }}
            >
              // rendered output
            </p>

            <div
              className="rounded-xl overflow-hidden"
              style={{
                border: "1px solid #00E8CC28",
                boxShadow: "0 0 48px #00E8CC0c, 0 20px 60px #00000060",
              }}
            >
              {/* Browser chrome */}
              <div
                className="px-4 py-2.5 flex items-center gap-3 text-xs font-mono"
                style={{
                  background: "#0f0f1a",
                  borderBottom: "1px solid #1e1e2e",
                }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <span style={{ color: "#4a4a6a" }}>1200 × 630 · cache HIT · 7ms</span>
                <span className="ml-auto" style={{ color: "#00E8CC", opacity: 0.6 }}>
                  ✓ ogzap
                </span>
              </div>

              {/* OG image */}
              <div
                className="relative"
                style={{ background: "#0B1220", aspectRatio: "1200/630" }}
              >
                {/* Faint grid */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#00E8CC10 1px, transparent 1px), linear-gradient(90deg, #00E8CC10 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    opacity: 0.4,
                  }}
                />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p
                    className="text-xs font-mono mb-3"
                    style={{ color: "#00E8CC", opacity: 0.6 }}
                  >
                    pencilbase.dev
                  </p>
                  <p className="text-2xl font-black leading-tight text-white mb-2">
                    Cutting p99 latency
                    <br />
                    by 60% at the edge
                  </p>
                  <p className="text-sm" style={{ color: "#8896A4" }}>
                    Marin Aslanian · 8 min read
                  </p>
                </div>
                {/* Cyan glow bottom-right */}
                <div
                  className="absolute bottom-0 right-0 pointer-events-none"
                  style={{
                    width: "220px",
                    height: "220px",
                    background: "radial-gradient(circle, #00E8CC22 0%, transparent 70%)",
                  }}
                />
              </div>

              {/* Link bar */}
              <div
                className="px-4 py-2 flex items-center justify-between text-xs"
                style={{
                  background: "#0f0f1a",
                  borderTop: "1px solid #1e1e2e",
                }}
              >
                <span style={{ color: "#4a4a6a" }}>pencilbase.dev</span>
                <span
                  style={{
                    color: "#00E8CC",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  ✓ ogzap
                </span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 mt-6">
              {[
                { n: "500+", l: "developers" },
                { n: "7ms", l: "p50 cache hit" },
                { n: "30s", l: "to API key" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="font-black text-sm text-white">{n}</p>
                  <p className="text-xs" style={{ color: "#4a4a6a" }}>
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Social proof ────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #1e1e2e" }}>
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center text-xs font-mono mb-12 uppercase tracking-widest"
            style={{ color: "#4a4a6a", fontFamily: "var(--font-geist-mono)" }}
          >
            // trusted by 500+ developers
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, author, role, initials, from, to }) => (
              <div
                key={author}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{ background: "#0e0e18", border: "1px solid #1e1e2e" }}
              >
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#8896A4" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${from}, ${to})`,
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{author}</p>
                    <p className="text-xs" style={{ color: "#4a4a6a" }}>
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery ─────────────────────────────────────────────────── */}
      <section id="gallery" className="py-20 px-6" style={{ borderTop: "1px solid #1e1e2e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono mb-3 uppercase tracking-widest"
              style={{ color: "#00E8CC", opacity: 0.7, fontFamily: "var(--font-geist-mono)" }}
            >
              // gallery
            </p>
            <h2 className="text-3xl font-black text-white mb-3">
              Six real images, served from cache
              <br className="hidden sm:block" /> while you read this.
            </h2>
            <p className="text-sm" style={{ color: "#8896A4" }}>
              Every card below is a 1200×630 OG image rendered by ogzap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OG_CARDS.map(({ bg, label, stamp, stampHit, content }, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid #1e1e2e" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    background: bg.startsWith("linear") ? undefined : bg,
                    backgroundImage: bg.startsWith("linear") ? bg : undefined,
                    aspectRatio: "1200/630",
                  }}
                >
                  {content}
                </div>
                <div
                  className="px-3 py-2 flex items-center justify-between text-xs font-mono"
                  style={{
                    background: "#0e0e18",
                    borderTop: "1px solid #1e1e2e",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  <span className="truncate" style={{ color: "#4a4a6a" }}>
                    {label}
                  </span>
                  <span
                    className="ml-2 flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold"
                    style={{
                      background: stampHit ? "#00E8CC12" : "#ff505012",
                      color: stampHit ? "#00E8CC" : "#ff8888",
                      border: `1px solid ${stampHit ? "#00E8CC30" : "#ff505030"}`,
                    }}
                  >
                    {stamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works ────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #1e1e2e" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono mb-3 uppercase tracking-widest"
              style={{ color: "#00E8CC", opacity: 0.7, fontFamily: "var(--font-geist-mono)" }}
            >
              // how it works
            </p>
            <h2 className="text-3xl font-black text-white">
              Three steps. Then forget about it forever.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ n, title, desc, code }) => (
              <div
                key={n}
                className="rounded-xl p-6"
                style={{ background: "#0e0e18", border: "1px solid #1e1e2e" }}
              >
                <p
                  className="text-4xl font-black font-mono mb-4"
                  style={{ color: "#1e1e2e", fontFamily: "var(--font-geist-mono)" }}
                >
                  {n}
                </p>
                <h3 className="font-black text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#8896A4" }}>
                  {desc}
                </p>
                {code && (
                  <pre
                    className="text-xs rounded-lg p-3 overflow-x-auto"
                    style={{
                      background: "#080810",
                      border: "1px solid #1e1e2e",
                      color: "#00E8CC",
                      fontFamily: "var(--font-geist-mono), monospace",
                    }}
                  >
                    {code}
                  </pre>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ borderTop: "1px solid #1e1e2e", background: "#0a0a12" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-mono mb-3 uppercase tracking-widest"
              style={{ color: "#00E8CC", opacity: 0.7, fontFamily: "var(--font-geist-mono)" }}
            >
              // features
            </p>
            <h2 className="text-3xl font-black text-white">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl p-6"
                style={{ background: "#0e0e18", border: "1px solid #1e1e2e" }}
              >
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-black text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8896A4" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ borderTop: "1px solid #1e1e2e" }}>
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs font-mono mb-3 uppercase tracking-widest"
              style={{ color: "#00E8CC", opacity: 0.7, fontFamily: "var(--font-geist-mono)" }}
            >
              // pricing
            </p>
            <h2 className="text-3xl font-black text-white">
              One plan. Unlimited renders.
            </h2>
            <p className="text-sm mt-2" style={{ color: "#8896A4" }}>
              No per-render fees. No surprises.
            </p>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background: "#0e0e18",
              border: "1px solid #00E8CC28",
              boxShadow: "0 0 48px #00E8CC08",
            }}
          >
            <div
              className="flex items-start justify-between mb-6 pb-6"
              style={{ borderBottom: "1px solid #1e1e2e" }}
            >
              <div>
                <p
                  className="text-xs font-mono font-bold mb-2 uppercase tracking-widest"
                  style={{ color: "#00E8CC" }}
                >
                  ogzap Pro
                </p>
                <p className="text-5xl font-black text-white">$9</p>
                <p className="text-sm mt-1" style={{ color: "#4a4a6a" }}>
                  per month
                </p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold font-mono"
                style={{
                  background: "#00E8CC15",
                  color: "#00E8CC",
                  border: "1px solid #00E8CC30",
                }}
              >
                Unlimited renders
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Unlimited OG image renders",
                "Headless Chrome rendering",
                "CDN-cached globally",
                "1200×630px guaranteed",
                "Any URL, any framework",
                "Monthly billing via Paddle",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-white">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#00E8CC" }}
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

            <Link
              href="/sign-up"
              className="block text-center w-full py-3.5 rounded-lg font-black text-base transition-opacity hover:opacity-90"
              style={{ background: "#00E8CC", color: "#0A0A0F" }}
            >
              Get API Key →
            </Link>
            <p
              className="text-center text-xs font-mono mt-3"
              style={{ color: "#3a3a5a", fontFamily: "var(--font-geist-mono)" }}
            >
              No credit card to start · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{ borderTop: "1px solid #1e1e2e" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, #00E8CC0a 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Stop building infrastructure.
            <br />
            <span style={{ color: "#00E8CC" }}>Start shipping.</span>
          </h2>
          <p className="mb-10" style={{ color: "#8896A4" }}>
            API key in 30 seconds. Your link previews will never look broken again.
          </p>
          <Link
            href="/sign-up"
            className="inline-block px-12 py-4 rounded-lg font-black text-lg transition-opacity hover:opacity-90"
            style={{ background: "#00E8CC", color: "#0A0A0F" }}
          >
            Get API Key free →
          </Link>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────────── */}
      <footer className="px-6 py-8" style={{ borderTop: "1px solid #1e1e2e" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black" style={{ color: "#00E8CC" }}>
              ogzap
            </span>
            <span className="text-xs" style={{ color: "#3a3a5a" }}>
              · OG images as a service
            </span>
          </div>
          <div
            className="flex items-center gap-6 text-xs font-mono"
            style={{ color: "#3a3a5a", fontFamily: "var(--font-geist-mono)" }}
          >
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">
              privacy
            </Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">
              terms
            </Link>
            <Link
              href="/ogify/docs"
              className="hover:opacity-80 transition-opacity"
              style={{ color: "#00E8CC" }}
            >
              docs
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
