import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

const TITLE =
  "Whop Alternative: Fees, Features & When to Switch (2026)";
const DESCRIPTION =
  "Whop charges 3% on sales plus payment processing. At $1,000/month that's $30 to Whop alone. See how Creatdrop's $29 flat fee changes the math for fitness creators and digital product sellers.";
const URL = "https://creatdrop.com/compare/whop-alternative";

export const metadata: Metadata = {
  title: `${TITLE} | Creatdrop`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | Creatdrop`,
    description: DESCRIPTION,
    url: URL,
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Creatdrop`,
    description: DESCRIPTION,
  },
};

const AT_A_GLANCE = [
  { platform: "Whop", monthlyFee: "$0", txFee: "3% + Stripe (~2.9%)", model: "Marketplace %" },
  { platform: "Creatdrop", monthlyFee: "$29/mo", txFee: "0% + Stripe (~2.9%)", model: "Flat fee" },
];

const REVENUE_TABLE = [
  { revenue: "$300/mo", whopPlatform: "$9", whopStripe: "~$9", creatdrop: "$29 + ~$9" },
  { revenue: "$500/mo", whopPlatform: "$15", whopStripe: "~$15", creatdrop: "$29 + ~$15" },
  { revenue: "$967/mo", whopPlatform: "~$29", whopStripe: "~$28", creatdrop: "$29 + ~$28" },
  { revenue: "$1,000/mo", whopPlatform: "$30", whopStripe: "~$29", creatdrop: "$29 + ~$29" },
  { revenue: "$2,000/mo", whopPlatform: "$60", whopStripe: "~$58", creatdrop: "$29 + ~$58" },
  { revenue: "$5,000/mo", whopPlatform: "$150", whopStripe: "~$145", creatdrop: "$29 + ~$145" },
];

export default function WhopAlternativePage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-22"
        breadcrumbs={[
          { name: "Compare", url: "https://creatdrop.com/compare" },
          { name: "Whop alternative", url: URL },
        ]}
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
          <Link href="/compare" className="hover:text-slate-700">
            Compare
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Whop alternative</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Whop alternative: fees, features, and when to switch
        </h1>

        <p className="mb-10 text-base text-slate-500">
          Whop charges 3% of every sale to the platform, on top of payment
          processing. At $1,000/month in revenue that is $30 straight to Whop —
          same as Creatdrop&apos;s flat monthly fee. Here is the full breakdown
          and when the math shifts.
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Fee structure at a glance
          </h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Monthly fee</th>
                  <th className="px-4 py-3">Platform cut</th>
                  <th className="px-4 py-3">Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {AT_A_GLANCE.map((r) => {
                  const isCreatdrop = r.platform === "Creatdrop";
                  return (
                    <tr
                      key={r.platform}
                      className={`hover:bg-slate-50 ${isCreatdrop ? "bg-violet-50/40" : ""}`}
                    >
                      <td
                        className={`px-4 py-3 font-medium ${isCreatdrop ? "text-violet-700" : "text-slate-800"}`}
                      >
                        {r.platform}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{r.monthlyFee}</td>
                      <td className="px-4 py-3 text-slate-600">{r.txFee}</td>
                      <td className="px-4 py-3 text-slate-600">{r.model}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The break-even: $967/month
          </h2>
          <p>
            Whop takes 3% of gross sales. Creatdrop charges $29/month flat.
            The break-even is where 3% of monthly revenue equals $29:
          </p>
          <p className="text-center font-semibold text-slate-900 text-lg">
            $29 ÷ 0.03 = <strong>$967/month</strong>
          </p>
          <p>
            Below $967/month, Whop&apos;s 3% cut costs less than $29. Above it,
            Creatdrop is cheaper — and the gap widens by $3 for every $100 in
            additional monthly sales.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Platform fee by revenue level
          </h2>
          <p>
            Stripe fees (~2.9% + $0.30/sale) apply equally on both platforms
            and are shown separately. The comparison focuses on the platform cut
            only.
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Monthly revenue</th>
                  <th className="px-4 py-3">Whop platform fee (3%)</th>
                  <th className="px-4 py-3 text-violet-700">Creatdrop platform fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {REVENUE_TABLE.map((r) => {
                  const isBreakeven = r.revenue === "$967/mo";
                  return (
                    <tr
                      key={r.revenue}
                      className={`hover:bg-slate-50 ${isBreakeven ? "bg-amber-50/40" : ""}`}
                    >
                      <td className="px-4 py-3 font-medium text-slate-800">{r.revenue}</td>
                      <td className="px-4 py-3 text-slate-600">{r.whopPlatform}</td>
                      <td className="px-4 py-3 text-violet-700 font-semibold">$29 flat</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500">
            Stripe fees not included above — they apply equally on both platforms.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When Whop is the right choice
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Low revenue (&lt;$967/mo):</strong> Below the break-even,
              Whop&apos;s 3% is cheaper than paying $29 flat.
            </li>
            <li>
              <strong>Marketplace discovery value:</strong> Whop has a
              marketplace where buyers browse and find products. If Whop sends
              you meaningful organic traffic, that discovery has real value not
              captured in the fee math. A 3% cut might be worth paying for
              consistent inbound customers.
            </li>
            <li>
              <strong>Software and SaaS products:</strong> Whop is well-suited
              for selling software licenses, Discord servers, and SaaS access.
              Its ecosystem is built around these categories.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When Creatdrop wins
          </h2>
          <p>
            Above $967/month in sales, Creatdrop&apos;s $29 flat fee is cheaper
            than Whop&apos;s 3% cut. At $2,000/month, you save $31/month
            ($372/year). At $5,000/month, you save $121/month ($1,452/year).
          </p>
          <p>
            If you have your own audience — Instagram, email list, TikTok
            following — and do not rely on Whop for discovery, the marketplace
            value argument disappears. You are paying 3% per sale for nothing
            Creatdrop does not also provide.
          </p>
          <p>
            Creatdrop is optimized for digital product sellers (workout
            programs, PDFs, ebooks, templates, audio) who drive their own
            traffic and want a clean checkout link to share on their bio page.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                What does Whop charge per sale?
              </h3>
              <p className="text-sm text-slate-600">
                Whop charges 3% of gross sales as its platform fee, plus
                standard payment processing (Stripe ~2.9% + $0.30/transaction).
                There is no monthly subscription fee.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                What is the break-even between Whop and Creatdrop?
              </h3>
              <p className="text-sm text-slate-600">
                $967/month. At that revenue, Whop&apos;s 3% fee = $29.01 —
                identical to Creatdrop. Above $967/month, Creatdrop is cheaper
                every dollar.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Does Creatdrop have a marketplace like Whop?
              </h3>
              <p className="text-sm text-slate-600">
                No. Creatdrop is a creator storefront, not a marketplace.
                Buyers arrive through your links (bio page, social posts,
                email). This is a feature if you have an audience — no cut for
                discovery you don&apos;t use. It is a drawback if you rely on
                marketplace browsing for sales.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Is Creatdrop good for fitness creators?
              </h3>
              <p className="text-sm text-slate-600">
                Yes. Fitness coaches selling workout PDFs, training programs,
                nutrition plans, or digital guides are the core Creatdrop user.
                Clean checkout, file delivery, and a bio-link storefront —
                $29/month flat, 0% commission.
              </p>
            </div>
          </div>

          <div className="not-prose my-8 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
            <p className="mb-2 text-lg font-semibold text-slate-900">
              Run the exact numbers for your revenue
            </p>
            <p className="mb-6 text-slate-600">
              Free to start — upload a product and get a checkout link in minutes.
            </p>
            <a
              href="https://creatdrop.com/sign-up"
              className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
            >
              Start free — no credit card required
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            See also
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <Link href="/compare" className="text-violet-600 hover:underline">
                Gumroad vs Creatdrop — the break-even calculator
              </Link>
            </li>
            <li>
              <Link href="/compare/creator-platform-fees" className="text-violet-600 hover:underline">
                All creator platform fees compared
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-violet-600 hover:underline">
                Creatdrop pricing
              </Link>
            </li>
          </ul>

          <p className="text-sm text-slate-500 mt-8">
            Whop fees verified 2026-05-22 against whop.com. Break-even calculation based on
            Whop&apos;s 3% platform fee vs Creatdrop&apos;s $29/mo flat fee. Payment processing
            (~2.9% + $0.30/sale) applies on all platforms and is excluded from comparison.
          </p>
        </div>
      </article>
    </main>
  );
}
