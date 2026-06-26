import type { Metadata } from "next";
import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { CTALink } from "@/components/CTALink";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Creatdrop — Gumroad alternative with $29/mo flat fee",
  description:
    "The Gumroad alternative that charges $29/month flat — 0% Creatdrop commission. Sell digital products, coaching programs & memberships. Break-even at $580/month.",
  alternates: {
    canonical: "https://creatdrop.com",
  },
};

/* ─── Icon helpers ─────────────────────────────────────────────── */
const StorefrontIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ─── Static data ──────────────────────────────────────────────── */
const PRODUCT_TYPES = [
  { name: "PDF Guides",      abbr: "PDF", bg: "from-rose-500 to-pink-500" },
  { name: "Presets & LUTs",  abbr: "LUT", bg: "from-violet-600 to-indigo-500" },
  { name: "Templates",       abbr: "TPL", bg: "from-amber-500 to-orange-400" },
  { name: "Courses",         abbr: "EDU", bg: "from-emerald-500 to-green-600" },
  { name: "Music & Beats",   abbr: "MUS", bg: "from-zinc-900 to-zinc-700" },
  { name: "Ebooks",          abbr: "EBK", bg: "from-sky-500 to-blue-600" },
  { name: "Photo Packs",     abbr: "PHO", bg: "from-fuchsia-500 to-violet-600" },
  { name: "Video Assets",    abbr: "VID", bg: "from-red-600 to-rose-500" },
  { name: "Fonts & Icons",   abbr: "DES", bg: "from-teal-500 to-cyan-500" },
  { name: "Coaching Calls",  abbr: "1:1", bg: "from-orange-600 to-amber-500" },
];


const PLAN_FEATURES  = [
  "Unlimited digital products",
  "0% Creatdrop commission — keep more of every sale",
  "Instant delivery to buyers",
  "Secure checkout & payouts",
  "Sales analytics dashboard",
  "Custom storefront with your brand",
  "Buyer download portal",
  "\"Built with Creatdrop\" badge (optional)",
];
const GUMROAD_CONS   = ["10% transaction fee on every sale", "No custom storefront", "Gumroad branding everywhere", "Limited analytics"];
const CREATDROP_PROS = ["0% platform commission — you keep more", "Your branded storefront URL", "Your brand, your experience", "Full sales & revenue analytics"];

/* ─── Avatar pill data ─────────────────────────────────────────── */
const PILL_AVATARS = [
  "from-pink-400 to-rose-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-violet-400 to-indigo-500",
];
const PILL_INITIALS = ["AC", "MR", "SK", "JL"];

/* ─── Page ─────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Creatdrop",
  description:
    "Sell workout programs, fitness plans & coaching online. $29/mo flat — 0% Creatdrop commission. The Gumroad alternative built for fitness creators.",
  url: "https://creatdrop.com",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "29",
      priceCurrency: "USD",
      unitText: "MONTH",
    },
  },
  provider: {
    "@type": "Organization",
    name: "Creatdrop",
    url: "https://creatdrop.com",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-violet-100 selection:text-violet-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-[10px] flex items-center justify-center shadow-lg shadow-violet-200/60 group-hover:shadow-violet-300/60 transition-shadow">
              <StorefrontIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-zinc-900">Creatdrop</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="#how-it-works" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
              How it works
            </Link>
            <Link href="#pricing" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
              Pricing
            </Link>
            <Show when="signed-out">
              <Link href="/sign-in" className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
                Sign in
              </Link>
              <CTALink href="/sign-up" location="nav" className="text-sm font-bold bg-violet-600 text-white px-5 py-2.5 rounded-full hover:bg-violet-700 transition-all shadow-md shadow-violet-200/50 active:scale-95">
                Start for free
              </CTALink>
            </Show>
            <Show when="signed-in">
              <Link href="/dashboard" className="text-sm font-semibold text-zinc-600 hover:text-violet-600 transition-colors">
                Dashboard
              </Link>
              <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9 border-2 border-violet-100 hover:border-violet-200 transition-all" } }} />
            </Show>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">

        {/* ══ HERO ══════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white">
          {/* Gradient mesh */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-40 -right-24 w-[700px] h-[700px] bg-violet-200/25 rounded-full blur-[120px]" />
            <div className="absolute -top-20 -left-24 w-[500px] h-[500px] bg-indigo-100/25 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-100/15 rounded-full blur-[80px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
            <div className="flex flex-col items-center text-center">

              {/* Trial pill */}
              <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 bg-violet-50 border border-violet-100 rounded-full text-violet-700 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex -space-x-2">
                  {PILL_AVATARS.map((g, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full bg-gradient-to-br ${g} border-2 border-white flex items-center justify-center`}>
                      <span className="text-white text-[8px] font-black leading-none">{PILL_INITIALS[i]}</span>
                    </div>
                  ))}
                </div>
                <span className="text-xs font-black tracking-wider uppercase">Free to start · No credit card</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(2rem,8vw,8rem)] font-black tracking-tight text-zinc-900 leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                At $1,000/month in sales, Gumroad keeps $100.{" "}
                <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
                  Creatdrop keeps $0.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-zinc-500 font-medium max-w-xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                $29/month flat. 0% Creatdrop commission — standard payment processing applies. If you are already making sales, the math is simple.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                <Show when="signed-out">
                  <CTALink href="/sign-up" location="hero" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 hover:shadow-2xl hover:shadow-violet-300/50 transition-all active:scale-95">
                    Start for free
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </CTALink>
                </Show>
                <Show when="signed-in">
                  <Link href="/dashboard" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 hover:shadow-2xl hover:shadow-violet-300/50 transition-all active:scale-95">
                    Go to my dashboard
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Show>
                <Link href="#pricing" className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-zinc-100 bg-white text-zinc-700 font-bold text-lg hover:border-violet-200 hover:text-violet-700 transition-all active:scale-95">
                  See pricing
                </Link>
              </div>

              {/* Phone mockup — storefront */}
              <div className="relative w-full max-w-sm mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-500">
                {/* Glow */}
                <div className="absolute -inset-10 bg-gradient-to-b from-violet-400/10 to-indigo-400/5 rounded-[6rem] blur-3xl -z-10" />

                {/* Frame */}
                <div className="relative bg-white rounded-[2.75rem] shadow-2xl shadow-zinc-900/15 border border-zinc-200/70 overflow-hidden ring-1 ring-black/5">
                  {/* Notch bar */}
                  <div className="relative h-12 bg-gradient-to-br from-violet-600 via-indigo-700 to-violet-800 flex items-center justify-between px-6">
                    <span className="text-white/60 text-[10px] font-bold">9:41</span>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-900/90 rounded-b-3xl" />
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-1 h-1 rounded-full bg-white/50" />
                      ))}
                    </div>
                  </div>

                  {/* Banner */}
                  <div className="h-28 bg-gradient-to-br from-violet-600 via-indigo-700 to-violet-800 relative overflow-hidden">
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  </div>

                  {/* Storefront body */}
                  <div className="-mt-12 px-5 pb-7 bg-white">
                    <div className="w-20 h-20 rounded-full border-4 border-white bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center mx-auto mb-3 shadow-xl shadow-violet-200/60">
                      <span className="text-white font-black text-xl">AC</span>
                    </div>
                    <h3 className="font-black text-zinc-900 text-lg text-center mb-0.5">Alex Chen</h3>
                    <p className="text-zinc-400 text-center text-sm font-semibold mb-5">@alexchen · Digital Creator</p>

                    <div className="space-y-2.5">
                      {[
                        { title: "Lightroom Preset Pack", price: "$27" },
                        { title: "Photography Masterclass", price: "$97" },
                        { title: "Editing Templates Bundle", price: "$19" },
                      ].map(({ title, price }) => (
                        <div key={title} className="flex items-center gap-3 p-3 pr-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-violet-300 hover:bg-violet-50/50 transition-all cursor-pointer group">
                          <div className="w-9 h-9 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all shadow-sm flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <span className="font-bold text-zinc-700 text-sm flex-1">{title}</span>
                          <span className="font-black text-violet-600 text-sm">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating sale notification */}
                <div className="absolute -right-2 sm:-right-12 top-20 bg-white rounded-2xl shadow-xl border border-zinc-100 px-3.5 py-2.5 flex items-center gap-2.5 animate-bounce [animation-duration:3s]">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-900 whitespace-nowrap">$247 earned today</p>
                    <p className="text-xs text-zinc-400 font-medium">0% platform commission</p>
                  </div>
                </div>

                {/* Pricing badge */}
                <div className="absolute -left-2 sm:-left-10 bottom-24 bg-violet-600 text-white rounded-2xl shadow-xl shadow-violet-300/40 px-4 py-3">
                  <p className="text-xs font-black">Creator Plan</p>
                  <p className="text-xs text-violet-200 font-medium mt-0.5">$29 / month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PRODUCT TYPES STRIP ═══════════════════════════════════ */}
        <section className="py-14 border-y border-zinc-100 bg-zinc-50/60">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-8">
              Sell anything digital
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {PRODUCT_TYPES.map(({ name, abbr, bg }) => (
                <div key={name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all cursor-default select-none">
                  <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${bg} flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <span className="text-white font-black text-[8px] leading-none">{abbr}</span>
                  </div>
                  <span className="text-sm font-bold text-zinc-700">{name}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-dashed border-zinc-300">
                <span className="text-sm font-bold text-zinc-400">+ any digital file</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ══════════════════════════════════════════ */}
        <section id="how-it-works" className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-700 text-xs font-black uppercase tracking-widest rounded-full mb-5">Simple setup</span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4">Open for business in 60 seconds</h2>
              <p className="text-xl text-zinc-500 font-medium">No developers, no plugins, no monthly surprises.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line — desktop only */}
              <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200 z-0" />

              {[
                {
                  step: "01",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  ),
                  title: "Upload your products",
                  desc: "Add PDFs, presets, courses, templates — any digital file. Set your price and write a description.",
                },
                {
                  step: "02",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                  title: "Share your storefront",
                  desc: "Put your creatdrop.com/@you in your Instagram bio, TikTok, Twitter. One link, all your products.",
                },
                {
                  step: "03",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Keep more of every sale",
                  desc: "Paddle handles secure checkout and buyers get instant delivery. You keep more — Creatdrop takes 0% commission (standard payment processing applies).",
                },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center relative z-10 group">
                  <div className="relative mb-7">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-violet-200 group-hover:border-violet-600 transition-all duration-500 bg-white shadow-sm">
                      {icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-900 text-white text-xs font-black flex items-center justify-center shadow-lg">
                      {step}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 mb-3">{title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FEATURES BENTO ════════════════════════════════════════ */}
        <section className="py-32 bg-zinc-50/70">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-700 text-xs font-black uppercase tracking-widest rounded-full mb-5">Features</span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4">Everything your storefront needs</h2>
              <p className="text-xl text-zinc-500 font-medium">Built for creators who sell — not enterprises.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Large card — spans 2 cols */}
              <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-zinc-200 hover:border-violet-200 transition-colors shadow-sm hover:shadow-xl hover:shadow-violet-50 group">
                <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-200 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-3">0% Creatdrop commission. Forever.</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">Gumroad takes 10% of every sale. Creatdrop takes 0% platform commission — standard Paddle payment processing fees apply, but nothing to us, ever.</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["0% commission", "Paddle checkout", "Instant delivery"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold border border-violet-100">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Dark analytics card */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-3">See exactly what sells</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">Real-time sales, revenue, and top product analytics.</p>
                </div>
              </div>

              {/* Delivery card */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 hover:border-violet-200 transition-colors shadow-sm hover:shadow-xl hover:shadow-violet-50 group">
                <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-200 transition-all duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-zinc-900 mb-3">Instant delivery to buyers</h3>
                <p className="text-zinc-500 text-lg leading-relaxed">Payment clears, download link appears. No emails, no delays, no support tickets.</p>
              </div>

              {/* Storefront card — spans 2 cols */}
              <div className="md:col-span-2 bg-violet-600 p-10 rounded-[2.5rem] text-white shadow-xl shadow-violet-300/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-3">Your branded storefront — not ours</h3>
                  <p className="text-violet-100 text-lg leading-relaxed">Custom URL, your colors, your brand. Buyers see your storefront, not a generic marketplace. Built with Creatdrop badge is optional.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PRICING ═══════════════════════════════════════════════ */}
        <section id="pricing" className="py-32 bg-zinc-50/70">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-700 text-xs font-black uppercase tracking-widest rounded-full mb-5">Pricing</span>
              <h2 className="text-5xl font-black text-zinc-900 mb-5">
                One plan.{" "}
                <span className="text-violet-600">Zero surprises.</span>
              </h2>
              <p className="text-xl text-zinc-500 font-medium">Free plan available. No credit card required to start.</p>
            </div>

            {/* Gumroad comparison */}
            <div className="mb-14 max-w-4xl mx-auto bg-white border border-zinc-200 rounded-[2.5rem] p-10 shadow-sm">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-black uppercase tracking-widest rounded-full mb-4">Why switch from Gumroad?</span>
                <h3 className="text-2xl font-black text-zinc-900">Same products. You keep more — we charge 0% platform commission.</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                  <p className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-5">Gumroad</p>
                  <ul className="space-y-3">
                    {GUMROAD_CONS.map(label => (
                      <li key={label} className="flex items-center gap-3 text-zinc-500 font-semibold text-sm">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-red-500" />
                        </div>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-violet-600 rounded-2xl p-6 text-white">
                  <p className="text-sm font-black text-violet-200 uppercase tracking-widest mb-5">Creatdrop</p>
                  <ul className="space-y-3">
                    {CREATDROP_PROS.map(label => (
                      <li key={label} className="flex items-center gap-3 text-violet-100 font-semibold text-sm">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Fee-math calculator link — owned-channel distribution */}
            <div className="text-center mb-14 -mt-6">
              <Link
                href="/blog/creator-platform-fee-math"
                className="inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-violet-900 transition-colors group"
              >
                See the real numbers — calculate exactly how much you keep vs Gumroad, Beacons &amp; Stan
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Single plan card — centered */}
            <div className="max-w-md mx-auto">
              <div className="relative p-10 bg-zinc-900 border-2 border-zinc-900 rounded-[2.5rem] flex flex-col text-white shadow-2xl shadow-violet-200/30 ring-4 ring-violet-600/10">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-violet-600 rounded-full text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-violet-400/30">
                  Free to start
                </div>
                <div className="mb-8 mt-4">
                  <h3 className="text-2xl font-black mb-1 text-white">Creator Plan</h3>
                  <p className="text-zinc-400 font-medium">Everything you need to sell digital products.</p>
                </div>
                <div className="mb-8">
                  <span className="text-6xl font-black">$29</span>
                  <span className="text-zinc-400 font-bold ml-2">/month</span>
                  <p className="text-emerald-400 text-sm font-bold mt-2">0% platform commission</p>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {PLAN_FEATURES.map(f => (
                    <li key={f} className="flex items-center gap-4 text-zinc-300 font-semibold">
                      <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Show when="signed-out">
                  <CTALink href="/sign-up" location="pricing" className="w-full py-4 rounded-full bg-violet-600 text-center font-black text-white hover:bg-violet-500 transition-all shadow-xl shadow-violet-900/40 active:scale-95">
                    Start for free
                  </CTALink>
                </Show>
                <Show when="signed-in">
                  <Link href="/dashboard" className="w-full py-4 rounded-full bg-violet-600 text-center font-black text-white hover:bg-violet-500 transition-all shadow-xl shadow-violet-900/40 active:scale-95">
                    Go to dashboard
                  </Link>
                </Show>
                <p className="text-center text-zinc-500 text-xs font-semibold mt-4">Free plan included · Upgrade when ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ EMAIL CAPTURE ══════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-700 text-xs font-black uppercase tracking-widest rounded-full mb-5">Free resources</span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
              Get the playbook
            </h2>
            <p className="text-lg text-zinc-500 font-medium mb-10">
              Practical tips for fitness coaches selling digital products — pricing, platforms, what actually converts. No spam, unsubscribe any time.
            </p>
            <WaitlistForm />
          </div>
        </section>

        {/* ══ FINAL CTA ═════════════════════════════════════════════ */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-violet-600 via-indigo-700 to-violet-800 rounded-[3.5rem] p-16 sm:p-24 text-center text-white shadow-2xl shadow-violet-300/30 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-5xl sm:text-7xl font-black mb-8 tracking-tight leading-none">
                Ready to start<br />selling?
              </h2>
              <p className="text-2xl text-violet-100 mb-12 max-w-xl mx-auto font-medium">
                Open your storefront in 60 seconds. Free plan available, no credit card required.
              </p>
              <Show when="signed-out">
                <CTALink href="/sign-up" location="final_cta" className="inline-flex items-center gap-3 px-14 py-6 rounded-full bg-white text-violet-700 font-black text-2xl hover:bg-violet-50 transition-all shadow-2xl active:scale-95">
                  Open your storefront
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </CTALink>
              </Show>
              <Show when="signed-in">
                <Link href="/dashboard" className="inline-flex items-center gap-3 px-14 py-6 rounded-full bg-white text-violet-700 font-black text-2xl hover:bg-violet-50 transition-all shadow-2xl active:scale-95">
                  Go to my dashboard
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </Show>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="py-16 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-[10px] flex items-center justify-center shadow-md">
              <StorefrontIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-zinc-900">Creatdrop</span>
          </Link>

          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Creatdrop · Built for creators
          </p>
        </div>
      </footer>
    </div>
  );
}
