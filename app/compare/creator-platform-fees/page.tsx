import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

const TITLE =
  "Gumroad vs Stan vs Beacons: Creator Platform Fee Comparison (2026)";
const DESCRIPTION =
  "Side-by-side fee comparison of Gumroad, Stan, Beacons and Creatdrop at $500, $2k and $5k/month. See the real 12-month cost of percentage fees vs a flat $29/mo, 0% model, including where a flat fee is NOT the cheapest.";
const URL = "https://creatdrop.com/compare/creator-platform-fees";

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
  {
    platform: "Gumroad",
    fee: "$0",
    perSale: "10% (+$0.50/sale, not counted below)",
    model: "Percentage",
  },
  {
    platform: "Beacons (standard)",
    fee: "$0 / $10",
    perSale: "9%",
    model: "Percentage",
  },
  { platform: "Stan", fee: "$29", perSale: "0%", model: "Flat" },
  { platform: "Creatdrop", fee: "$29", perSale: "$0", model: "Flat" },
];

const ROWS_500 = [
  ["Gumroad (10%)", "$600"],
  ["Beacons (9%)", "$540"],
  ["Stan ($29/mo, 0%)", "$348"],
  ["Creatdrop ($29/mo, 0%)", "$348"],
];
const ROWS_2K = [
  ["Gumroad (10%)", "$2,400"],
  ["Beacons (9%)", "$2,160"],
  ["Stan ($29/mo, 0%)", "$348"],
  ["Creatdrop ($29/mo, 0%)", "$348"],
];
const ROWS_5K = [
  ["Gumroad (10%)", "$6,000"],
  ["Beacons (9%)", "$5,400"],
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

export default function CreatorPlatformFeeComparison() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-16"
        breadcrumbs={[{ name: "Compare", url: "https://creatdrop.com/compare" }, { name: "Creator platform fee comparison", url: URL }]}
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
          <span className="text-slate-800">Creator platform fee comparison</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Gumroad vs Stan vs Beacons: what creator platform fees really cost
        </h1>

        <p className="mb-10 text-base text-slate-500">
          Most creator platforms take a percentage of every sale, so the cost
          never shows up as a bill. Here is the side-by-side, at three revenue
          levels, with the breakeven stated plainly.
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            At a glance
          </h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform</th>
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
          <p>
            Beacons also sells a Store Pro tier at ~$30/mo with 0% fees. At that
            point it is itself a flat ~$30/mo product, the same model argued for
            here.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The 12-month cost, at three revenue levels
          </h2>
          <p>
            Percentage platforms charged on gross sales; flat platforms charged
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
            The gap is not Creatdrop versus everyone. It is the percentage model
            versus the flat model. Stan and Creatdrop land in the same place on
            price because both charge a flat $29/month and take 0% of sales. If
            you are choosing between Stan and Creatdrop, fee math will not decide
            it. Choose on the product. Where the math does decide it is the
            moment you compare a flat fee to a percentage cut.
          </p>
          <p>
            And it is genuinely two-sided. A percentage with no monthly fee is
            cheaper while you are small. Below roughly $300/month in sales,
            Gumroad&apos;s or Beacons&apos; percentage costs less than a
            $348/year flat fee, and we are not going to pretend otherwise. The
            point is what happens after you cross that line: the percentage does
            not stop. It scales with you, in the wrong direction.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The breakeven, stated plainly
          </h2>
          <p>
            A flat $29/month is $348/year. A percentage platform with no monthly
            fee stays cheaper until your sales get big enough that the
            percentage passes $348.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>vs Gumroad (10%):</strong> breakeven at $3,480/year in
              sales, about <strong>$290/month</strong>. Below that, Gumroad is
              cheaper. Above it, the flat fee wins and the gap widens every
              month.
            </li>
            <li>
              <strong>vs Beacons (9%):</strong> breakeven at about $3,867/year,
              roughly <strong>$322/month</strong>.
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
              .
            </p>
          </div>

          <p className="text-sm text-slate-500">
            Figures exclude payment processing (Stripe/PayPal, about 2.9% +
            $0.30/sale), which is similar on every platform. Gumroad&apos;s
            additional $0.50 per sale is not counted, so its real cost is
            slightly higher than shown. Competitor pricing verified 2026-05-16
            against each platform&apos;s public pricing page.
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
