import type { Metadata } from "next";
import Link from "next/link";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

const TITLE =
  "Podia Alternative for Digital Creators: Fee Comparison (2026)";
const DESCRIPTION =
  "Podia starts at $33/month with 0% transaction fees but limits features on lower tiers. See how Creatdrop's $29 flat fee compares and which platform wins at different revenue levels.";
const URL = "https://creatdrop.com/compare/podia-alternative";

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
  { tier: "Podia Mover", monthly: "$33/mo", txFee: "0%", notes: "Limited products, no memberships" },
  { tier: "Podia Shaker", monthly: "$75/mo", txFee: "0%", notes: "Full digital products + courses" },
  { tier: "Podia Earthquaker", monthly: "$166/mo", txFee: "0%", notes: "Unlimited everything + affiliate" },
  { tier: "Creatdrop", monthly: "$29/mo", txFee: "0%", notes: "Digital products storefront" },
];

const ROWS_ANNUAL = [
  ["Podia Mover ($33/mo, 0%)", "$396"],
  ["Podia Shaker ($75/mo, 0%)", "$900"],
  ["Podia Earthquaker ($166/mo, 0%)", "$1,992"],
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
              <th className="px-4 py-3">Annual subscription cost</th>
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

export default function PodiaAlternativePage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-22"
        breadcrumbs={[
          { name: "Compare", url: "https://creatdrop.com/compare" },
          { name: "Podia alternative", url: URL },
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
          <span className="text-slate-800">Podia alternative</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Podia alternative: fee comparison for digital creators
        </h1>

        <p className="mb-10 text-base text-slate-500">
          Podia charges 0% transaction fees on all plans, but its tiers start at
          $33/month and go up to $166/month. Here is how that compares to
          Creatdrop&apos;s $29 flat fee — and the key distinction in what each
          platform is built for.
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Podia tiers at a glance
          </h2>
          <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly fee</th>
                  <th className="px-4 py-3">Tx fee</th>
                  <th className="px-4 py-3">Notes</th>
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
                      <td className="px-4 py-3 text-slate-600 text-xs">{r.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p>
            Podia is a full-featured course and community platform. Its pricing
            reflects that. Creatdrop is a lean digital-product storefront — no
            course builder, no community tools, just clean checkout pages and
            file delivery.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Annual subscription cost — same 0% tx fee, different price
          </h2>
          <p>
            Because both Podia and Creatdrop charge 0% transaction fees, the
            only variable is the monthly subscription. Here is the annual cost
            at each tier.
          </p>
          <CostTable
            caption="Annual platform subscription cost (revenue-independent)"
            rows={ROWS_ANNUAL}
          />
          <p>
            Even at Podia Mover ($33/mo), you pay $48/year more than Creatdrop.
            At Podia Shaker, that gap is $552/year. These differences are fixed
            regardless of how much you earn — because neither platform charges
            per-sale fees.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When Podia makes sense
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>You sell online courses:</strong> Podia has a built-in
              course builder with video hosting, quizzes, and student progress
              tracking. If course delivery is core to your business, that
              tooling has real value.
            </li>
            <li>
              <strong>You run a community:</strong> Podia includes community
              features on higher tiers. If your business model depends on a
              paid community alongside products, Podia bundles these.
            </li>
            <li>
              <strong>You want email marketing built in:</strong> Podia
              includes email campaigns and automations. If you&apos;re not
              already using a dedicated email tool, this can simplify your
              stack.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When Creatdrop wins
          </h2>
          <p>
            If you sell digital files — PDFs, ebooks, templates, audio,
            software, or workout programs — and do not need a course builder or
            community platform, Creatdrop delivers a cleaner, faster checkout
            at $29/month versus Podia&apos;s $33–$166/month.
          </p>
          <p>
            The honest question: are you paying for Podia&apos;s course and
            community features, or just using the download delivery? If the
            latter, you are overpaying for tools you do not use.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Does Podia charge transaction fees?
              </h3>
              <p className="text-sm text-slate-600">
                No. All Podia plans charge 0% transaction fees. The cost
                difference vs Creatdrop is entirely in the monthly subscription:
                $33–$166/mo for Podia vs $29/mo for Creatdrop.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Is Creatdrop cheaper than Podia Mover?
              </h3>
              <p className="text-sm text-slate-600">
                Yes. Creatdrop at $29/mo is $4/mo less than Podia Mover ($33/mo).
                That is $48/year cheaper, plus Creatdrop has no product limits on
                its single tier.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Can Creatdrop replace Podia for course creators?
              </h3>
              <p className="text-sm text-slate-600">
                Only if your "course" is a downloadable product (PDF guide,
                video files). Creatdrop does not have a built-in video course
                player, progress tracking, or community. For structured online
                courses, Podia is built for that.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                What types of creators are a better fit for Creatdrop?
              </h3>
              <p className="text-sm text-slate-600">
                Fitness coaches selling workout PDFs, templates, meal plans,
                ebooks, audio programs, or any digital file product. You get a
                clean bio-link storefront and checkout without paying for
                course-platform features you do not use.
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
            Podia pricing verified 2026-05-22 against podia.com/pricing. Figures exclude
            payment processing (~2.9% + $0.30/sale), which applies on all platforms.
            Creatdrop fee: $29/month flat, 0% Creatdrop commission.
          </p>
        </div>
      </article>
    </main>
  );
}
