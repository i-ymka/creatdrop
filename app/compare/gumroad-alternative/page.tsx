import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

const TITLE =
  "Best Gumroad Alternative in 2026: Flat $29/mo vs 10% Per Sale";
const DESCRIPTION =
  "Gumroad takes 10% of every sale. Creatdrop charges $29/month flat. See the real fee math at $500, $2k, and $5k/month — and when Gumroad is still the right choice.";
const URL = "https://creatdrop.com/compare/gumroad-alternative";

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
  { tier: "Gumroad", monthly: "$0/mo", txFee: "10%", model: "% per sale only" },
  { tier: "Creatdrop", monthly: "$29/mo", txFee: "5%", model: "Flat fee + %" },
];

// 12-month costs
// Gumroad: revenue * 10% * 12
// Creatdrop: (29 + revenue * 5%) * 12
// Break-even: 29 + 0.05R = 0.10R → R = $580/mo

const ROWS_300 = [
  ["Gumroad (10%)", "$360"],
  ["Creatdrop ($29 + 5%)", "$528"],
];
const ROWS_580 = [
  ["Gumroad (10%)", "$696"],
  ["Creatdrop ($29 + 5%)", "$696"],
];
const ROWS_2K = [
  ["Gumroad (10%)", "$2,400"],
  ["Creatdrop ($29 + 5%)", "$1,548"],
];
const ROWS_5K = [
  ["Gumroad (10%)", "$6,000"],
  ["Creatdrop ($29 + 5%)", "$3,348"],
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

export default function GumroadAlternativePage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-22"
        breadcrumbs={[
          { name: "Compare", url: "https://creatdrop.com/compare" },
          { name: "Gumroad alternative", url: URL },
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
          <span className="text-slate-800">Gumroad alternative</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Best Gumroad Alternative for Creators: Real Fee Math (2026)
        </h1>

        <p className="mb-10 text-base text-slate-500">
          Gumroad charges 10% of every sale with no monthly fee. Creatdrop
          charges $29/month flat + 5%. Below $580/month in sales, Gumroad is
          cheaper. Above it, you keep more with Creatdrop.
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            How Gumroad and Creatdrop charge differently
          </h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform</th>
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
            Gumroad&apos;s model scales with your revenue — the more you earn,
            the more you pay. Creatdrop&apos;s $29 flat fee is fixed. The
            trade-off is simple: low earners pay less with Gumroad; high earners
            pay less with Creatdrop.
          </p>

          <div className="not-prose rounded-xl border border-amber-100 bg-amber-50 px-6 py-4">
            <p className="text-sm font-semibold text-amber-800">
              Break-even: $580/month in sales
            </p>
            <p className="mt-1 text-sm text-amber-700">
              At $580/month, both platforms cost exactly the same ($58/mo to the
              platform). Below that, Gumroad is cheaper. Above it, Creatdrop
              saves you money every month.
            </p>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            12-month cost comparison
          </h2>
          <p>
            Flat subscription + transaction fees on gross sales. Payment
            processing (Stripe ~2.9% + $0.30/sale) excluded — it applies on
            both platforms.
          </p>

          <CostTable
            caption="At $300/month in sales — Gumroad wins"
            rows={ROWS_300}
          />
          <CostTable
            caption="At $580/month in sales — break-even"
            rows={ROWS_580}
          />
          <CostTable
            caption="At $2,000/month in sales — Creatdrop wins"
            rows={ROWS_2K}
          />
          <CostTable
            caption="At $5,000/month in sales — Creatdrop wins by a lot"
            rows={ROWS_5K}
          />

          <p className="text-sm italic text-slate-500">
            Already on Gumroad? Run your exact numbers on our{" "}
            <Link href="/compare" className="text-violet-600 hover:underline">
              fee calculator
            </Link>
            .
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When to stay on Gumroad
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sales below $580/month:</strong> Gumroad&apos;s 10% cut
              is cheaper than Creatdrop&apos;s $29 + 5% when your monthly
              revenue is below $580. At $300/month, Gumroad costs $360/year vs
              Creatdrop&apos;s $528/year.
            </li>
            <li>
              <strong>You want zero upfront commitment:</strong> Gumroad has no
              monthly fee. If your income is unpredictable or seasonal,
              Gumroad&apos;s pay-as-you-sell model removes the $29 fixed cost.
            </li>
            <li>
              <strong>You rely on Gumroad&apos;s built-in discovery:</strong>{" "}
              Gumroad has a marketplace and email list features. If you depend
              on their organic discovery, factor the migration cost.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When Creatdrop wins
          </h2>
          <p>
            Above $580/month in sales, Creatdrop costs less than Gumroad every
            single month — and the gap widens as you scale. At $2k/month,
            Creatdrop saves you $852/year. At $5k/month, it saves $2,652/year.
          </p>
          <p>
            Creatdrop is a lean digital-product storefront. You bring your
            audience; Creatdrop handles the checkout with no per-sale tax on
            your earnings above the flat $29.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Does Gumroad charge a monthly fee?
              </h3>
              <p className="text-sm text-slate-600">
                No. Gumroad charges 10% of every sale with no monthly
                subscription. This makes it free to start but expensive at
                scale.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                What is the break-even between Gumroad and Creatdrop?
              </h3>
              <p className="text-sm text-slate-600">
                $580/month in sales. At that revenue, both platforms cost
                $58/month to the platform. Below it, Gumroad is cheaper. Above
                it, Creatdrop saves you money.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Is Creatdrop a direct Gumroad replacement?
              </h3>
              <p className="text-sm text-slate-600">
                For creators selling digital downloads, courses, or memberships
                — yes. Creatdrop covers the same core use case with a cleaner
                storefront and lower fees at scale. Gumroad&apos;s marketplace
                discovery is not replicated.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                How much does Gumroad cost at $5,000/month in sales?
              </h3>
              <p className="text-sm text-slate-600">
                $500/month, or $6,000/year. Creatdrop at the same revenue costs
                $279/month ($3,348/year) — saving you $2,652 annually.
              </p>
            </div>
          </div>

          <div className="not-prose my-8 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
            <p className="mb-2 text-lg font-semibold text-slate-900">
              Run the exact numbers for your revenue
            </p>
            <p className="mb-6 text-slate-600">
              Free to start — upload a product and get a checkout link in
              minutes.
            </p>
            <a
              href="https://creatdrop.com/sign-up"
              className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
            >
              Start free — no credit card required
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            See all comparisons
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <Link href="/compare" className="text-violet-600 hover:underline">
                Full fee calculator — Gumroad vs Creatdrop
              </Link>
            </li>
            <li>
              <Link href="/compare/gumroad-fees" className="text-violet-600 hover:underline">
                Gumroad fees: what 10% of every sale really costs
              </Link>
            </li>
            <li>
              <Link href="/compare/sellfy-alternative" className="text-violet-600 hover:underline">
                Sellfy alternative: fee math vs Creatdrop
              </Link>
            </li>
            <li>
              <Link href="/" className="text-violet-600 hover:underline">
                Creatdrop — the zero-commission digital storefront
              </Link>
            </li>
          </ul>

          <p className="text-sm text-slate-500 mt-8">
            Gumroad pricing verified 2026-05-22 against gumroad.com/pricing.
            Figures exclude payment processing (Stripe/PayPal ~2.9% + $0.30/sale),
            which applies on all platforms. Creatdrop fee: $29/month flat + 5%
            Creatdrop commission.
          </p>
        </div>
      </article>
    </main>
  );
}
