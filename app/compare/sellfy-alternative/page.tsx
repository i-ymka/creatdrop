import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

const TITLE =
  "Sellfy Alternative for Creators: Real Fee Math vs Flat $29 (2026)";
const DESCRIPTION =
  "Sellfy charges 0-5% transaction fees plus $19-$49/month depending on tier. See exactly when switching to Creatdrop's flat $29/mo saves you money — and when it doesn't.";
const URL = "https://creatdrop.com/compare/sellfy-alternative";

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

const TIER_TABLE = [
  { tier: "Sellfy Starter", monthly: "$19/mo", txFee: "5%", model: "Subscription + %" },
  { tier: "Sellfy Business", monthly: "$49/mo", txFee: "2%", model: "Subscription + %" },
  { tier: "Sellfy Premium", monthly: "$99/mo", txFee: "0%", model: "Subscription only" },
  { tier: "Creatdrop", monthly: "$29/mo", txFee: "0%", model: "Flat fee only" },
];

const ROWS_500_STARTER = [
  ["Sellfy Starter ($19 + 5%)", "$468"],
  ["Sellfy Business ($49 + 2%)", "$708"],
  ["Creatdrop ($29 flat, 0%)", "$348"],
];
const ROWS_500_PREMIUM = [
  ["Sellfy Premium ($99, 0%)", "$1,188"],
  ["Creatdrop ($29 flat, 0%)", "$348"],
];
const ROWS_2K = [
  ["Sellfy Starter ($19 + 5%)", "$1,428"],
  ["Sellfy Business ($49 + 2%)", "$1,068"],
  ["Sellfy Premium ($99, 0%)", "$1,188"],
  ["Creatdrop ($29 flat, 0%)", "$348"],
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

export default function SellfyAlternativePage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-22"
        breadcrumbs={[
          { name: "Compare", url: "https://creatdrop.com/compare" },
          { name: "Sellfy alternative", url: URL },
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
          <span className="text-slate-800">Sellfy alternative</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Sellfy alternative: real fee math vs flat $29
        </h1>

        <p className="mb-10 text-base text-slate-500">
          Sellfy has three pricing tiers — each with different monthly fees and
          transaction rates. Here is the side-by-side at real revenue levels, so
          you can see exactly when switching makes sense and when it does not.
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Sellfy pricing tiers at a glance
          </h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly fee</th>
                  <th className="px-4 py-3">Transaction fee</th>
                  <th className="px-4 py-3">Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {TIER_TABLE.map((r) => {
                  const isCreatdrop = r.tier === "Creatdrop";
                  return (
                    <tr
                      key={r.tier}
                      className={`hover:bg-slate-50 ${isCreatdrop ? "bg-violet-50/40" : ""}`}
                    >
                      <td
                        className={`px-4 py-3 font-medium ${isCreatdrop ? "text-violet-700" : "text-slate-800"}`}
                      >
                        {r.tier}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{r.monthly}</td>
                      <td className="px-4 py-3 text-slate-600">{r.txFee}</td>
                      <td className="px-4 py-3 text-slate-600">{r.model}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p>
            Sellfy Premium ($99/mo, 0%) is 3.4× the price of Creatdrop for the
            same 0% transaction model. Sellfy Business ($49/mo + 2%) may be
            cheaper than Starter at high volumes, but it is still more expensive
            than Creatdrop at virtually every revenue level.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            12-month cost comparison
          </h2>
          <p>Flat subscription + transaction fees on gross sales, payment processing excluded.</p>

          <CostTable
            caption="At $500/month in sales — Starter vs Creatdrop"
            rows={ROWS_500_STARTER}
          />
          <CostTable
            caption="At $500/month in sales — Premium vs Creatdrop"
            rows={ROWS_500_PREMIUM}
          />
          <CostTable
            caption="At $2,000/month in sales — all tiers vs Creatdrop"
            rows={ROWS_2K}
          />

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When to stay on Sellfy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Low volume (&lt;$300/mo):</strong> Sellfy Starter at
              $19/mo + 5% is cheaper than Creatdrop at $29 flat when monthly
              sales are below ~$200.
            </li>
            <li>
              <strong>You rely on Sellfy&apos;s storefront features:</strong>{" "}
              Built-in email marketing, upsells, and subscription products are
              included in Sellfy Business and Premium. If you use these
              heavily, factor the tool replacement cost.
            </li>
            <li>
              <strong>Sellfy print-on-demand:</strong> Creatdrop focuses on
              digital downloads. If you sell physical or POD products, Sellfy
              handles fulfillment that Creatdrop does not.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When Creatdrop wins
          </h2>
          <p>
            Above roughly $300/month in digital product sales, Creatdrop&apos;s
            $29 flat fee beats Sellfy Starter on total cost. Above $500/month,
            it beats Sellfy Business too. And it is less than one-third the
            price of Sellfy Premium at any revenue level.
          </p>
          <p>
            The key distinction: Creatdrop is a lean digital-product storefront
            with zero transaction fees. You bring your audience; Creatdrop
            handles the checkout. If you do not need Sellfy&apos;s built-in email
            or POD, you are paying for features you do not use.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Does Sellfy charge transaction fees on all plans?
              </h3>
              <p className="text-sm text-slate-600">
                Starter charges 5%, Business 2%, Premium 0%. You only avoid
                Sellfy&apos;s cut entirely on the $99/mo Premium tier.
                Creatdrop charges 0% on all plans.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Is Creatdrop cheaper than Sellfy Premium?
              </h3>
              <p className="text-sm text-slate-600">
                Yes — Creatdrop at $29/mo is $70/mo cheaper than Sellfy Premium
                ($99/mo), with the same 0% transaction fee. That is $840/year
                saved regardless of how much you earn.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                What does Sellfy offer that Creatdrop does not?
              </h3>
              <p className="text-sm text-slate-600">
                Sellfy includes email marketing tools, subscription products,
                and print-on-demand fulfillment on higher tiers. Creatdrop is
                focused on digital downloads and storefront simplicity.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                What is the break-even between Sellfy Starter and Creatdrop?
              </h3>
              <p className="text-sm text-slate-600">
                At $200/month in sales: Sellfy Starter costs $19 + $10 (5%) =
                $29 total — identical to Creatdrop. Below $200/mo, Sellfy
                Starter is cheaper. Above it, Creatdrop wins.
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
              <Link href="/compare/gumroad-fees" className="text-violet-600 hover:underline">
                Gumroad fees: what 10% of every sale costs
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-violet-600 hover:underline">
                Creatdrop pricing
              </Link>
            </li>
          </ul>

          <p className="text-sm text-slate-500 mt-8">
            Sellfy pricing verified 2026-05-22 against sellfy.com/pricing. Figures exclude
            payment processing (Stripe/PayPal ~2.9% + $0.30/sale), which applies on all
            platforms. Creatdrop fee: $29/month flat, 0% Creatdrop commission.
          </p>
        </div>
      </article>
    </main>
  );
}
