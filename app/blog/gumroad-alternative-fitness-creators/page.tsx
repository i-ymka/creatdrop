import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

export const metadata: Metadata = {
  title:
    "Gumroad Alternative for Fitness Creators — Keep More of Every Sale | Creatdrop",
  description:
    "Gumroad takes 10% of every sale. Creatdrop doesn't. See how fitness creators keep more of what they earn — $29/mo flat, free to start.",
  alternates: {
    canonical: "https://creatdrop.com/blog/gumroad-alternative-fitness-creators",
  },
  openGraph: {
    title: "Gumroad Alternative for Fitness Creators — Keep More of Every Sale | Creatdrop",
    description: "Gumroad takes 10% of every sale. Creatdrop doesn't. See how fitness creators keep more of what they earn — $29/mo flat, free to start.",
    url: "https://creatdrop.com/blog/gumroad-alternative-fitness-creators",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Gumroad Alternative for Fitness Creators — Keep More of Every Sale | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumroad Alternative for Fitness Creators — Keep More of Every Sale | Creatdrop",
    description: "Gumroad takes 10% of every sale. Creatdrop doesn't. See how fitness creators keep more of what they earn — $29/mo flat, free to start.",
  },
};

export default function GumroadAlternativeFitnessCreators() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="Gumroad Alternative for Fitness Creators — Keep More of Every Sale"
        description="Gumroad takes 10% of every sale. Creatdrop doesn't. See how fitness creators keep more of what they earn — $29/mo flat, free to start."
        url="https://creatdrop.com/blog/gumroad-alternative-fitness-creators"
        datePublished="2026-04-01"
      />
      {/* Nav */}
      <header className="border-b border-slate-100 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-lg font-semibold text-violet-600 hover:text-violet-700"
          >
            Creatdrop
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-700">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Gumroad alternative for fitness creators</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Tired of Gumroad Taking 10%? Here&apos;s What Fitness Creators Use
          Instead
        </h1>

        <p className="mb-10 text-base text-slate-500">
          5 min read &mdash; Published April 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            You just made $500 selling your 6-week strength program.
            Congratulations. Gumroad just took $50 of it.
          </p>
          <p>That&apos;s 10%. Every single sale.</p>
          <p>
            If you&apos;re a fitness coach selling workout plans, nutrition
            guides, or mobility programs, Gumroad&apos;s fee structure is
            quietly eating into your income in a way that&apos;s easy to
            miss — until the numbers get bigger.
          </p>
          <p>Here&apos;s what that looks like at scale:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>$10,000/year in sales:</strong> Gumroad takes $1,000. You
              keep $9,000.
            </li>
            <li>
              <strong>$50,000/year in sales:</strong> Gumroad takes $5,000. You
              keep $45,000.
            </li>
          </ul>
          <p>
            That&apos;s not a transaction fee. That&apos;s a silent business
            partner who does none of the work.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What Is Gumroad Actually Costing You?
          </h2>
          <p>
            Gumroad charges 10% on every sale. No cap, no volume discount, no
            exceptions.
          </p>
          <p>
            Compare that to <strong>Creatdrop</strong>: $29/month flat. Zero
            transaction fees.
          </p>
          <p>
            At $10K in annual sales, Creatdrop costs you $348/year. Gumroad
            costs $1,000. <strong>You save $652.</strong>
          </p>
          <p>
            At $50K in sales, you&apos;re saving $4,652 per year. That&apos;s
            money back in your pocket — or reinvested in your next program.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What Fitness Creators Actually Sell (And Why It Adds Up Fast)
          </h2>
          <p>
            Fitness is one of the best niches for digital products. Build it
            once, sell it forever:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Workout PDFs:</strong> 4-week programs, home workout
              routines, mobility flows
            </li>
            <li>
              <strong>Nutrition guides:</strong> Meal prep playbooks, macro
              tracking sheets, cutting/bulking templates
            </li>
            <li>
              <strong>Video courses:</strong> Form masterclasses, programming
              tutorials, movement education
            </li>
            <li>
              <strong>Templates:</strong> Training logs, client check-in forms,
              assessment tools
            </li>
            <li>
              <strong>Memberships:</strong> Monthly coaching content, community
              access
            </li>
          </ul>
          <p>
            The problem? When each product costs a 10% fee, your most
            successful products hurt you most. A $97 program with 100 sales =
            $970 gone to fees. A $197 course with 50 sales = $985 gone.
            Multiply that across your catalog and you&apos;re handing thousands
            to a platform every year.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Why a Flat Monthly Fee Wins for Fitness Coaches
          </h2>
          <p>
            The math is simple: the more you earn, the worse percentage fees
            get.
          </p>
          <p>
            Creatdrop charges $29/month regardless of your sales volume.
            Here&apos;s what that looks like in practice:
          </p>

          {/* Fee comparison table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Monthly Revenue</th>
                  <th className="px-4 py-3">Gumroad (10%)</th>
                  <th className="px-4 py-3">Creatdrop ($29 flat)</th>
                  <th className="px-4 py-3 text-emerald-700">You Save</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["$500", "$50", "$29", "$21"],
                  ["$2,000", "$200", "$29", "$171"],
                  ["$5,000", "$500", "$29", "$471"],
                  ["$10,000", "$1,000", "$29", "$971"],
                ].map(([rev, gum, creat, save]) => (
                  <tr key={rev} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{rev}</td>
                    <td className="px-4 py-3 text-red-600">{gum}</td>
                    <td className="px-4 py-3 text-slate-700">{creat}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">{save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The crossover happens at $290/month in revenue. If you&apos;re
            making more than that — and if you&apos;re reading this, you
            probably are — Creatdrop is the better deal. Full stop.
          </p>
          <p>You also get:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Paddle checkout</strong> — globally trusted payment
              infrastructure, handles international VAT automatically
            </li>
            <li>
              <strong>Instant digital delivery</strong> — buyers get their
              files the moment they pay
            </li>
            <li>
              <strong>Unlimited products</strong> — one guide or fifty, same
              $29/month
            </li>
            <li>
              <strong>Free plan included</strong> — start selling before you
              spend a dollar
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Creatdrop vs. Gumroad: Side-by-Side
          </h2>

          {/* Feature comparison table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Gumroad</th>
                  <th className="px-4 py-3 text-violet-700">Creatdrop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Transaction fee", "10%", "0%"],
                  ["Monthly fee", "$0", "$29"],
                  ["Checkout provider", "Gumroad", "Paddle (trusted globally)"],
                  ["Instant digital delivery", "Yes", "Yes"],
                  ["Free plan", "No", "Yes — free to start"],
                  ["Fee impact at $5K/mo revenue", "$500/mo lost", "$29/mo"],
                ].map(([feat, gum, creat]) => (
                  <tr key={feat} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{feat}</td>
                    <td className="px-4 py-3 text-slate-600">{gum}</td>
                    <td className="px-4 py-3 font-semibold text-violet-700">{creat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Gumroad survives on inertia. Creators sign up when they&apos;re
            small, never re-evaluate when they grow. The 10% feels invisible at
            $200/month in sales. At $5,000/month, it&apos;s $500 quietly
            leaving your account every 30 days.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Switch Before Your Next Launch
          </h2>
          <p>
            If you have a launch coming — a new program, a seasonal guide, a
            new coaching product — this is the right moment to make the switch.
          </p>
          <p>
            Creatdrop takes about 10 minutes to set up. Upload your product,
            connect your payout account, share your link. Done.
          </p>
          <p>
            Your workout programs are already good. Your platform should stop
            taking a cut of them.
          </p>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Keep reading</p>
          <div className="space-y-3">
            <Link href="/blog/sell-workout-programs-online" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">How to Sell Workout Programs Online in 2026</p>
              <p className="text-sm text-slate-500 mt-0.5">From file to checkout link in 10 minutes.</p>
            </Link>
            <Link href="/blog/passive-income-fitness-coach" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800">Passive Income for Fitness Coaches</p>
              <p className="text-sm text-slate-500 mt-0.5">What to build, how to price it, the compounding effect.</p>
            </Link>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-10 rounded-2xl border border-slate-200 px-8 py-10 text-center">
          <p className="mb-1 text-base font-semibold text-slate-900">Not ready to switch yet?</p>
          <p className="mb-6 text-sm text-slate-500">Get practical tips on selling digital products as a fitness coach — pricing, platforms, what converts.</p>
          <WaitlistForm />
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
          <p className="mb-2 text-lg font-semibold text-slate-900">
            Stop paying 10% to Gumroad
          </p>
          <p className="mb-6 text-slate-600">
            Switch to Creatdrop — $29/month flat, 0% Creatdrop commission.
          </p>
          <a
            href="https://creatdrop.com/sign-up"
            className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
          >
            Start for free — no credit card required
          </a>
        </div>
      </article>
    </main>
  );
}
