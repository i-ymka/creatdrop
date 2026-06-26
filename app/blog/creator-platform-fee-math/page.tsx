import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";
import { FeeCalculator } from "@/components/FeeCalculator";

const TITLE =
  "I added up a year of platform fees. Here is what the percentage cut actually costs.";
const DESCRIPTION =
  "I added up a full year of platform fees at $500, $2k, and $5k/month. The percentage model costs creators thousands more than a flat fee — here is the honest math, including where the flat fee is NOT cheaper.";
const URL = "https://creatdrop.com/blog/creator-platform-fee-math";

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

function CostTable({
  caption,
  rows,
}: {
  caption: string;
  rows: string[][];
}) {
  return (
    <div className="my-6">
      <p className="mb-2 text-sm font-semibold text-slate-800">{caption}</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-600 font-semibold">
            <tr>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">What you pay the platform in a year</th>
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

export default function CreatorPlatformFeeMath() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={URL}
        datePublished="2026-05-16"
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
          <span className="text-slate-800">A year of platform fees</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          I added up a year of platform fees. Here is what the percentage cut
          actually costs.
        </h1>

        <p className="mb-10 text-base text-slate-500">
          6 min read &mdash; Published May 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            I do not think most creators ever sit down and add up what their
            store platform took from them last year. I did it this month, and
            the number was bigger than I expected, so I wrote it down.
          </p>
          <p>
            Here is the setup. Say you sell digital products and you are doing
            $2,000 a month. Courses, presets, templates, plans, does not matter.
            That is $24,000 a year going through your checkout.
          </p>
          <p>
            On Gumroad, the platform fee is 10% plus fifty cents a sale. On the
            $24,000, the 10% alone is $2,400. Beacons on its standard tier is
            9%, so $2,160. Neither of those charges a monthly fee, which is how
            the number stays invisible. It is not a bill you pay. It is a slice
            taken off the top of every sale before the money reaches you, so you
            never feel the moment it leaves.
          </p>
          <p>
            Now run the same year on a flat-fee platform. Stan is $29 a month
            and takes 0% of sales. That is $348 for the year, full stop.
            Creatdrop is the same shape, $29 a month, $0 per sale, $348 for the
            year.
          </p>
          <p>
            Same $24,000 in sales. One model costs you $2,160 to $2,400. The
            other costs you $348.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The full year, at three revenue levels
          </h2>
          <p>
            12-month platform cost. Percentage platforms are charged on gross
            sales; flat platforms are charged the subscription only.
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

          <p>
            <strong>The honest read:</strong> the gap is not Creatdrop vs
            everyone. The gap is the percentage model vs the flat model. Stan
            and Creatdrop land in the same place on price because both charge a
            flat $29/mo and take 0% of sales. If you are choosing between Stan
            and Creatdrop, fee math will not decide it. Choose on the product.
            Where the math does decide it is the moment you compare a flat fee
            to a percentage cut.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The breakeven, stated plainly
          </h2>
          <p>
            A flat $29/mo is $348/year. A percentage platform with no monthly
            fee is cheaper until your revenue gets big enough that the
            percentage passes $348.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>vs Gumroad (10%):</strong> breakeven at $3,480/year in
              sales, about <strong>$290/month</strong>. Below that,
              Gumroad&apos;s 10% costs you less than $348. Above it, the flat
              fee wins, and the gap widens every month after.
            </li>
            <li>
              <strong>vs Beacons (9%):</strong> breakeven at about $3,867/year,
              roughly <strong>$322/month</strong>.
            </li>
          </ul>
          <p>
            So the honest pitch is not &ldquo;flat fee is always
            cheaper.&rdquo; It is: if you are doing more than roughly $300/month
            in digital sales, the percentage model is quietly taxing your
            growth, and the more you grow the worse it gets. A creator at
            $5k/month hands Gumroad $6,000 a year for the same checkout a flat
            platform charges $348 for.
          </p>

          <p>
            I want to be straight about two things, because the comparison is
            only worth anything if it is honest.
          </p>
          <p>
            First, a percentage with no monthly fee is genuinely cheaper when
            you are small. If you are doing $200 a month, 10% of that is $20,
            and a $29 monthly subscription is more than that. The flat model
            only wins once you cross roughly $300 a month in sales. Below that
            line, the percentage platforms are the cheaper choice and I would
            not pretend otherwise. The point is what happens after you cross it,
            because the percentage does not stop. It scales with you, in the
            wrong direction.
          </p>
          <p>
            Second, Stan and Creatdrop are basically tied on this math. Both are
            flat $29 a month, both take 0%. If you put them side by side on fees
            alone, there is nothing to choose. That comparison gets decided by
            the product, not the price, and anyone telling you a flat-fee
            platform is uniquely cheap is skipping over the other flat-fee
            platforms.
          </p>
          <p>
            So this is not a &ldquo;switch to X&rdquo; post. It is a &ldquo;do
            the addition&rdquo; post. Take your average monthly sales, multiply
            by twelve, take 9 or 10% of it, and compare that to $348. For a lot
            of creators that one subtraction is the difference between a fee and
            a flight.
          </p>
          <p>
            If you want the exact number for your revenue without doing the
            arithmetic, there is a calculator below.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The calculator
          </h2>
          <FeeCalculator />
          <p className="text-sm text-slate-500">
            Prefer a standalone link to share?{" "}
            <Link
              href="/fee-calculator"
              className="font-medium text-violet-600 hover:underline"
            >
              creatdrop.com/fee-calculator
            </Link>
          </p>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Keep reading
          </p>
          <div className="space-y-3">
            <Link
              href="/compare/creator-platform-fees"
              className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                Gumroad vs Stan vs Beacons: Creator Platform Fee Comparison
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                The structured side-by-side, at $500, $2k and $5k/month.
              </p>
            </Link>
            <Link
              href="/blog/gumroad-vs-alternatives-fitness"
              className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                Gumroad vs. Alternatives for Fitness Creators
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                Fee structures, who wins at each revenue level, and when to
                switch.
              </p>
            </Link>
            <Link
              href="/blog/sell-fitness-courses-online"
              className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                How to Sell Fitness Courses Online: The Complete Guide
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                What to build, how to price it, where to sell.
              </p>
            </Link>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-10 rounded-2xl border border-slate-200 px-8 py-10 text-center">
          <p className="mb-1 text-base font-semibold text-slate-900">
            Still comparing platforms?
          </p>
          <p className="mb-6 text-sm text-slate-500">
            Get tips on choosing and switching — practical guidance for
            creators selling digital products.
          </p>
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
