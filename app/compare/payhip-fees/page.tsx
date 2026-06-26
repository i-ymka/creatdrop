import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

const TITLE =
  "Payhip Fees: What the 5% Free-Plan Cut Actually Costs You (2026)";
const DESCRIPTION =
  "Payhip's free plan charges 5% of every sale with no monthly fee. See the real 12-month cost at $500, $2k and $5k/month versus flat $29/mo, 0% platforms like Stan and Creatdrop, including where Payhip is the cheaper choice.";
const URL = "https://creatdrop.com/compare/payhip-fees";

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

const AT_A_GLANCE: { platform: string; fee: string; perSale: string; model: string }[] = [
  { platform: "Payhip (Free Forever)", fee: "$0", perSale: "5%", model: "Percentage" },
  { platform: "Payhip (Plus)", fee: "$29", perSale: "2%", model: "Hybrid" },
  { platform: "Payhip (Pro)", fee: "$99", perSale: "0%", model: "Flat" },
  { platform: "Stan", fee: "$29", perSale: "0%", model: "Flat" },
  { platform: "Creatdrop", fee: "$29", perSale: "$0", model: "Flat" },
];

const ROWS_500 = [
  ["Payhip Free (5%)", "$300"],
  ["Stan ($29/mo, 0%)", "$348"],
  ["Creatdrop ($29/mo, 0%)", "$348"],
];
const ROWS_2K = [
  ["Payhip Free (5%)", "$1,200"],
  ["Stan ($29/mo, 0%)", "$348"],
  ["Creatdrop ($29/mo, 0%)", "$348"],
];
const ROWS_5K = [
  ["Payhip Free (5%)", "$3,000"],
  ["Stan ($29/mo, 0%)", "$348"],
  ["Creatdrop ($29/mo, 0%)", "$348"],
];

function CostTable({ caption, rows }: { caption: string; rows: string[][] }) {
  return (
    <div className="my-6">
      <p className="mb-2 text-sm font-semibold text-slate-800">{caption}</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-600 font-semibold">
            <tr>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">Paid to the platform in a year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map(([platform, cost]) => {
              const isCreatdrop = platform.startsWith("Creatdrop");
              return (
                <tr
                  key={platform}
                  className={`hover:bg-slate-50 ${isCreatdrop ? "bg-violet-50/40" : ""}`}
                >
                  <td
                    className={`px-4 py-3 font-medium ${isCreatdrop ? "text-violet-700" : "text-slate-800"}`}
                  >
                    {platform}
                  </td>
                  <td
                    className={`px-4 py-3 ${isCreatdrop ? "text-emerald-700 font-semibold" : "text-slate-600"}`}
                  >
                    {cost}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PayhipFeesComparison() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-17"
        breadcrumbs={[{ name: "Compare", url: "https://creatdrop.com/compare" }, { name: "Payhip fees", url: URL }]}
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
          <span className="text-slate-800">Payhip fees</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Payhip fees: what the 5% free-plan cut actually costs you
        </h1>

        <p className="mb-10 text-base text-slate-500">
          Payhip&apos;s free plan takes 5% of every sale with no monthly fee, so
          the cost never shows up as a bill. Payhip also sells paid tiers that
          lower or remove that cut. Here is the side-by-side against flat
          $29/mo, 0% platforms, at three revenue levels, with the breakeven
          stated plainly.
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            At a glance
          </h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform / plan</th>
                  <th className="px-4 py-3">Monthly fee</th>
                  <th className="px-4 py-3">Per-sale platform fee</th>
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
                      <td className="px-4 py-3 text-slate-600">{r.fee}</td>
                      <td className="px-4 py-3 text-slate-600">{r.perSale}</td>
                      <td className="px-4 py-3 text-slate-600">{r.model}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The 12-month cost, at three revenue levels
          </h2>
          <p>
            Payhip modeled on its free plan&apos;s 5%; flat platforms charged
            the subscription only.
          </p>

          <CostTable
            caption="At $500/month in sales ($6,000/year)"
            rows={ROWS_500}
          />
          <CostTable
            caption="At $2,000/month in sales ($24,000/year)"
            rows={ROWS_2K}
          />
          <CostTable
            caption="At $5,000/month in sales ($60,000/year)"
            rows={ROWS_5K}
          />

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Who is actually cheapest? (the honest read)
          </h2>
          <p>
            This one is genuinely close at the low end, so we will say it
            straight. At $500/month in sales, Payhip&apos;s free plan costs
            about $300 a year, which is less than Creatdrop&apos;s $348. Below
            roughly $580/month in sales, Payhip Free&apos;s 5% is the cheaper
            choice, and we are not going to pretend otherwise. The flat model
            only pulls ahead once you cross that line, and then the percentage
            keeps scaling against you while $348 stays put.
          </p>
          <p>
            Two more honest notes. Payhip&apos;s own Pro tier ($99/month, 0%)
            is a flat model, the same shape as Creatdrop, just at a higher
            monthly price. And Stan and Creatdrop are tied: both are $29/month
            with 0% platform commission, so fee math will not separate them. Choose those two
            on the product, not the price.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The breakeven, stated plainly
          </h2>
          <p>
            A flat $29/month is $348/year. Payhip&apos;s free plan, with its 5%
            cut and no monthly fee, stays cheaper until your sales pass that.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>vs Payhip Free (5%):</strong> breakeven at $6,960/year in
              sales, about <strong>$580/month</strong>. Below that, Payhip Free
              is cheaper. Above it, the flat fee wins and the gap widens every
              month.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Run your own numbers
          </h2>
          <p>
            Enter your monthly sales and current platform and see your exact
            12-month difference.
          </p>
          <div className="not-prose my-6 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
            <a
              href="https://creatdrop.com/fee-calculator"
              className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
            >
              Open the fee calculator
            </a>
            <p className="mt-4 text-sm text-slate-600">
              Want the full first-person breakdown?{" "}
              <Link
                href="/blog/creator-platform-fee-math"
                className="font-medium text-violet-600 hover:underline"
              >
                Read the analysis
              </Link>
              , or compare every platform side by side on the{" "}
              <Link
                href="/compare/creator-platform-fees"
                className="font-medium text-violet-600 hover:underline"
              >
                creator platform fee hub
              </Link>
              .
            </p>
          </div>

          <p className="text-sm text-slate-500">
            Payhip: free plan 5%, Plus $29/mo + 2%, Pro $99/mo + 0%, per
            payhip.com/pricing (verified 2026-05-17). Figures exclude payment
            processing (Stripe/PayPal, about 2.9% + $0.30/sale), which is
            similar on every platform.
          </p>
          <p className="mt-6 text-sm text-slate-500">
            <Link href="/compare" className="text-violet-600 hover:underline">
              See all comparisons — full Gumroad vs Creatdrop fee calculator
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
