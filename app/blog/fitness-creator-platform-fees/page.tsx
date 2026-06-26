import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

export const metadata: Metadata = {
  title:
    "Gumroad vs Beacons vs Stan: Fitness Creator Platform Fees | Creatdrop",
  description:
    "Fitness creators on Gumroad pay 10% per sale. Beacons takes 9%. See what you keep at $1K, $5K, and $10K/month, plus the break-even math.",
  alternates: {
    canonical: "https://creatdrop.com/blog/fitness-creator-platform-fees",
  },
  openGraph: {
    title: "Gumroad vs Beacons vs Stan: Fitness Creator Platform Fees | Creatdrop",
    description: "Fitness creators on Gumroad pay 10% per sale. Beacons takes 9%. See what you keep at $1K, $5K, and $10K/month, plus the break-even math.",
    url: "https://creatdrop.com/blog/fitness-creator-platform-fees",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Gumroad vs Beacons vs Stan: Fitness Creator Platform Fees | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gumroad vs Beacons vs Stan: Fitness Creator Platform Fees | Creatdrop",
    description: "Fitness creators on Gumroad pay 10% per sale. Beacons takes 9%. See what you keep at $1K, $5K, and $10K/month, plus the break-even math.",
  },
};

export default function FitnessCreatorPlatformFees() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="Gumroad vs Beacons vs Stan: Fitness Creator Platform Fees"
        description="Fitness creators on Gumroad pay 10% per sale. Beacons takes 9%. See what you keep at $1K, $5K, and $10K/month, plus the break-even math."
        url="https://creatdrop.com/blog/fitness-creator-platform-fees"
        datePublished="2026-05-02"
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
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-700">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Fitness creator platform fees</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Gumroad, Stan, Beacons: What Fitness Creators Actually Pay in Platform Fees
        </h1>

        <p className="mb-10 text-base text-slate-500">
          5 min read &mdash; Published May 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            If you sell workout programs online, you&apos;ve probably wondered
            whether you&apos;re using the right platform&mdash;or quietly
            overpaying. This post breaks down the actual fees on four common
            creator platforms, does the math at several revenue levels, and
            explains when each model makes financial sense.
          </p>
          <p>
            No affiliate links. No sponsored positioning. Just the numbers.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The four platforms and what they charge
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Fee model</th>
                  <th className="px-4 py-3">What you pay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Gumroad", "10% per transaction", "$0/month + 10% of every sale"],
                  ["Beacons", "9% per transaction", "$0/month + 9% of every sale"],
                  ["Stan", "Subscription", "~$27/month"],
                  ["Creatdrop", "Subscription", "$29/month, 0% Creatdrop commission"],
                ].map(([platform, model, cost]) => (
                  <tr key={platform} className={`hover:bg-slate-50 ${platform === "Creatdrop" ? "bg-violet-50/40" : ""}`}>
                    <td className={`px-4 py-3 font-medium ${platform === "Creatdrop" ? "text-violet-700" : "text-slate-800"}`}>{platform}</td>
                    <td className="px-4 py-3 text-slate-600">{model}</td>
                    <td className={`px-4 py-3 ${platform === "Creatdrop" ? "text-emerald-700 font-semibold" : "text-slate-600"}`}>{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Gumroad and Beacons charge nothing upfront&mdash;but take a cut of
            every sale. Stan and Creatdrop charge a flat monthly fee regardless
            of volume.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What you actually keep
          </h2>

          <p>
            At <strong>$1,000/month</strong> in sales:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gumroad: keep <strong>$900</strong> (platform takes $100)</li>
            <li>Beacons: keep <strong>$910</strong> (platform takes $90)</li>
            <li>Stan: keep <strong>$973</strong> (platform takes ~$27)</li>
            <li>Creatdrop: keep <strong>$971</strong> (platform takes $29)</li>
          </ul>

          <p>
            At <strong>$5,000/month</strong> in sales:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gumroad: keep <strong>$4,500</strong> (platform takes $500)</li>
            <li>Beacons: keep <strong>$4,550</strong> (platform takes $450)</li>
            <li>Stan: keep <strong>$4,973</strong> (platform takes ~$27)</li>
            <li>Creatdrop: keep <strong>$4,971</strong> (platform takes $29)</li>
          </ul>

          <p>
            At <strong>$10,000/month</strong> in sales:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gumroad: keep <strong>$9,000</strong> (platform takes $1,000)</li>
            <li>Beacons: keep <strong>$9,100</strong> (platform takes $900)</li>
            <li>Stan: keep <strong>$9,973</strong> (platform takes ~$27)</li>
            <li>Creatdrop: keep <strong>$9,971</strong> (platform takes $29)</li>
          </ul>

          <p>
            The gap between percentage-based and flat-fee models widens fast. At
            $10K/month, Gumroad costs $12,000 per year in fees. Creatdrop costs
            $348.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The break-even point
          </h2>

          <p>
            Transaction-fee platforms look cheaper at low volume. Once sales
            grow, that flips.
          </p>
          <p>
            With Gumroad, the break-even against Creatdrop is{" "}
            <strong>$290/month in sales</strong>. Above that, the $29 flat fee
            costs less than the 10% cut.
          </p>
          <p>
            With Beacons, break-even is <strong>$322/month</strong>.
          </p>
          <p>
            That threshold is low. Most fitness creators selling workout PDFs or
            meal plan bundles cross $300/month in sales quickly&mdash;sometimes
            within their first launch week. The percentage model rarely makes
            financial sense for more than a few months.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When percentage-based platforms make sense
          </h2>

          <p>
            Gumroad and Beacons aren&apos;t bad products. The percentage model
            works well when:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You&apos;re launching a first product and have no sales history yet</li>
            <li>You want $0 committed overhead while testing demand</li>
            <li>Your volume is under $300/month and you want minimal fixed cost</li>
          </ul>
          <p>
            If you genuinely don&apos;t know whether the product will sell,
            taking a 10% cut beats committing $29 upfront. That&apos;s honest.
          </p>
          <p>
            The problem is that creators often stay on percentage platforms well
            past the point where they&apos;ve proven the product. By the time
            you&apos;re doing $3K&ndash;$5K/month consistently, you may have
            been paying 10% for a year. The inertia is expensive.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The cost that doesn&apos;t show up in comparison tables
          </h2>

          <p>
            With transaction-based pricing, your platform fee increases every
            time you run a promotion, reach a new audience, or have a strong
            month. A good month becomes a partially good month. You can&apos;t
            budget a fixed number because the number moves.
          </p>
          <p>
            Flat pricing means costs are predictable. A $10K month is a $10K
            month.
          </p>
          <p>
            For fitness creators building toward a consistent recurring
            business&mdash;coaching clients, memberships, program
            libraries&mdash;predictable overhead is worth something. Variable
            fees compound against exactly the moments you want to benefit most
            from.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            A note on features
          </h2>

          <p>
            This comparison covers fees only. Each platform has different
            functionality: checkout flows, affiliate programs, course hosting,
            memberships, email tools. If you&apos;re evaluating platforms for
            reasons beyond fees, review each platform&apos;s current feature set
            before deciding.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The short version
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Revenue</th>
                  <th className="px-4 py-3">Gumroad annual fees</th>
                  <th className="px-4 py-3">Beacons annual fees</th>
                  <th className="px-4 py-3 text-violet-700">Creatdrop annual fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["$1K/month", "$1,200", "$1,080", "$348"],
                  ["$5K/month", "$6,000", "$5,400", "$348"],
                  ["$10K/month", "$12,000", "$10,800", "$348"],
                ].map(([rev, gum, bea, cre]) => (
                  <tr key={rev} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{rev}</td>
                    <td className="px-4 py-3 text-slate-600">{gum}</td>
                    <td className="px-4 py-3 text-slate-600">{bea}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">{cre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            At $5,000/month in sales, the difference between Gumroad (10%) and
            Creatdrop ($29/month) is $471 per month&mdash;or{" "}
            <strong>$5,652 per year</strong>.
          </p>
          <p>
            The right platform depends on where you are. If you&apos;re testing
            a new product, the $0 upfront makes sense. If you&apos;ve proven a
            product and want to keep more of what you earn, the math on
            flat-fee pricing improves fast.
          </p>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Keep reading</p>
          <div className="space-y-3">
            <Link href="/blog/gumroad-alternative-fitness-creators" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800">Tired of Gumroad Taking 10%?</p>
              <p className="text-sm text-slate-500 mt-0.5">The fee math that changes how you think about your platform.</p>
            </Link>
            <Link href="/blog/gumroad-vs-alternatives-fitness" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800">Gumroad vs. Alternatives for Fitness Creators: An Honest Comparison</p>
              <p className="text-sm text-slate-500 mt-0.5">Which platform wins at each revenue level?</p>
            </Link>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-10 rounded-2xl border border-slate-200 px-8 py-10 text-center">
          <p className="mb-1 text-base font-semibold text-slate-900">Still comparing platforms?</p>
          <p className="mb-6 text-sm text-slate-500">Get tips on choosing and switching — practical guidance for fitness coaches selling digital products.</p>
          <WaitlistForm />
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
          <p className="mb-2 text-lg font-semibold text-slate-900">
            Try Creatdrop free
          </p>
          <p className="mb-6 text-slate-600">
            Free to start — upload a product and get a checkout link in minutes.
          </p>
          <a
            href="https://creatdrop.com"
            className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
          >
            Start for free — no credit card required
          </a>
        </div>
      </article>
    </main>
  );
}
