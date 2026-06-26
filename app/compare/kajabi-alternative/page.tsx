import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

const TITLE =
  "Kajabi Alternative: A $29/mo Storefront vs Kajabi's Plans (2026)";
const DESCRIPTION =
  "Kajabi starts at $179/mo. If you only need a storefront to sell digital products, here is the monthly-price comparison against a flat $29/mo, 0% platform, plus an honest read on when Kajabi's all-in-one price is actually worth it.";
const URL = "https://creatdrop.com/compare/kajabi-alternative";

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

const PRICE_ROWS: { plan: string; monthly: string; annual: string; twelve: string }[] = [
  { plan: "Creatdrop", monthly: "$29/mo", annual: "$29/mo", twelve: "$348/year" },
  {
    plan: "Kajabi Basic",
    monthly: "$179/mo",
    annual: "$143/mo",
    twelve: "$2,148/year ($1,716 if annual)",
  },
  {
    plan: "Kajabi Growth",
    monthly: "$249/mo",
    annual: "$199/mo",
    twelve: "$2,988/year ($2,388 if annual)",
  },
  {
    plan: "Kajabi Pro",
    monthly: "$499/mo",
    annual: "$399/mo",
    twelve: "$5,988/year ($4,788 if annual)",
  },
];

export default function KajabiAlternative() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-17"
        breadcrumbs={[{ name: "Compare", url: "https://creatdrop.com/compare" }, { name: "Kajabi alternative", url: URL }]}
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
          <span className="text-slate-800">Kajabi alternative</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Kajabi alternative: what you pay if you only need a storefront
        </h1>

        <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
          Kajabi is a flat high-tier subscription. It does not take a percentage
          of your sales. This page contains no fee-percentage math and never
          implies a Kajabi percentage cut. It is a monthly-price comparison
          only.
        </div>

        <p className="mb-10 text-base text-slate-500">
          Kajabi is a flat monthly subscription. It does not take a percentage
          of your sales. The question on this page is not what cut they take, it
          is what the monthly plan costs and whether you are using what you pay
          for. If you need Kajabi&apos;s full course, email, and marketing
          suite, its price can be reasonable. If you only need a storefront and
          checkout for digital products, here is the gap.
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            The monthly-price comparison
          </h2>
          <p className="text-sm font-semibold text-slate-800">
            Monthly-price comparison only. Neither platform takes a percentage
            of your sales.
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly price</th>
                  <th className="px-4 py-3">Billed annually</th>
                  <th className="px-4 py-3">12-month price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PRICE_ROWS.map((r) => {
                  const isCreatdrop = r.plan === "Creatdrop";
                  return (
                    <tr
                      key={r.plan}
                      className={`hover:bg-slate-50 ${isCreatdrop ? "bg-violet-50/40" : ""}`}
                    >
                      <td
                        className={`px-4 py-3 font-medium ${isCreatdrop ? "text-violet-700" : "text-slate-800"}`}
                      >
                        {r.plan}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{r.monthly}</td>
                      <td className="px-4 py-3 text-slate-600">{r.annual}</td>
                      <td
                        className={`px-4 py-3 ${isCreatdrop ? "text-emerald-700 font-semibold" : "text-slate-600"}`}
                      >
                        {r.twelve}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p>
            Both Creatdrop and Kajabi are flat subscriptions that take 0% of
            your sales. This is a price-tier comparison, not a fee-take
            comparison. Neither platform skims your revenue.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What you are actually paying for (the honest read)
          </h2>
          <p>
            Kajabi is not overpriced for what it is. It bundles courses, email
            marketing, landing pages, funnels, a website builder, and a
            community product into one subscription. If you run your whole
            business on it and use those tools, Basic at $179/month can be fair
            value, and we are not going to pretend it is a ripoff.
          </p>
          <p>
            The honest question is whether you use all of that. If your need is
            to sell a digital product through a checkout page, you are paying
            Kajabi&apos;s all-in-one price for a suite you may barely touch.
            That is the case where a focused $29/month storefront does the
            storefront job for a fraction of the monthly cost. If you need
            Kajabi&apos;s marketing and course engine, this is not an
            apples-to-apples comparison and you should keep Kajabi. We are
            stating both sides plainly because the choice depends on what you
            actually use, not on a fee gap.
          </p>
          <p>
            There is no breakeven on this page, because there is no percentage
            to cross. Both platforms are flat. The decision is product scope
            versus price, not fee math.
          </p>

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
              The fee calculator covers the percentage-platform math (Gumroad,
              Beacons, Payhip and the like), not flat subscriptions like Kajabi.
              For the full first-person breakdown,{" "}
              <Link
                href="/blog/creator-platform-fee-math"
                className="font-medium text-violet-600 hover:underline"
              >
                read the analysis
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
            Kajabi plan prices per kajabi.com/pricing (verified 2026-05-17):
            Basic $179/mo ($143/mo billed annually), Growth $249/mo ($199
            annual), Pro $499/mo ($399 annual). Kajabi takes 0% of sales; its
            2.9% + $0.30 line is a payment-processor rate, equivalent to Stripe,
            not a platform revenue cut. Creatdrop is $29/mo flat, 0% of sales.
            Payment processing is similar on every platform and excluded
            throughout.
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
