import type { Metadata } from "next";
import Link from "next/link";
import { Show } from "@clerk/nextjs";
import { CTALink } from "@/components/CTALink";

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

const PLAN_FEATURES = [
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

export const metadata: Metadata = {
  title: "Pricing — Creatdrop",
  description: "One plan. Zero surprises. $29/month, 0% Creatdrop commission. Standard payment processing applies.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-violet-100 selection:text-violet-900">
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
    </div>
  );
}
