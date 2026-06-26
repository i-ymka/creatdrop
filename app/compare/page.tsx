import type { Metadata } from "next";
import Link from "next/link";
import { CompareCalculator } from "@/components/CompareCalculator";

const TITLE =
  "Gumroad vs Creatdrop Fee Calculator — Honest Math (2026)";
const DESCRIPTION =
  "An honest decision tool that tells you exactly when NOT to use Creatdrop. The break-even is $580/month. Below that, Gumroad costs you less.";
const URL = "https://creatdrop.com/compare";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Creatdrop",
    type: "website",
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
    title: TITLE,
    description: DESCRIPTION,
  },
};

interface ProfileRow {
  platform: string;
  cost: string;
  highlight: boolean;
}

interface Profile {
  label: string;
  verdict: string;
  emphasis: "stay" | "works" | "expensive";
  example: string;
  rows: ProfileRow[];
  copy: string;
}

const PROFILES: Profile[] = [
  {
    label: "$300/month",
    verdict: "Stay on Gumroad",
    emphasis: "stay",
    example: "$300/month",
    rows: [
      { platform: "Gumroad (10%)", cost: "$30.00", highlight: false },
      { platform: "Creatdrop ($29 + 5%)", cost: "$44.00", highlight: true },
      {
        platform: "Difference",
        cost: "Gumroad cheaper by $14/month",
        highlight: false,
      },
    ],
    copy: "At $300/month, Gumroad costs $30. Creatdrop costs $44 ($29 flat + 5% of $300). Switching costs you $168/year with no upside. Wait until you consistently clear $580/month.",
  },
  {
    label: "$580/month",
    verdict: "Break-even",
    emphasis: "works",
    example: "$580/month",
    rows: [
      { platform: "Gumroad (10%)", cost: "$58.00", highlight: false },
      { platform: "Creatdrop ($29 + 5%)", cost: "$58.00", highlight: true },
      { platform: "Difference", cost: "$0 — exact break-even", highlight: false },
    ],
    copy: "At $580/month both platforms cost exactly $58. Every dollar above $580/month is a dollar where Gumroad's percentage model costs more.",
  },
  {
    label: "$1,000/month",
    verdict: "Creatdrop wins",
    emphasis: "expensive",
    example: "$1,000/month",
    rows: [
      { platform: "Gumroad (10%)", cost: "$100.00", highlight: false },
      { platform: "Creatdrop ($29 + 5%)", cost: "$79.00", highlight: true },
      {
        platform: "You save",
        cost: "$21/month ($252/year)",
        highlight: false,
      },
    ],
    copy: "At $1,000/month Creatdrop costs $79 ($29 flat + 5%). Gumroad costs $100. You keep $21 more every month — $252/year.",
  },
  {
    label: "$5,000/month",
    verdict: "Gumroad is expensive",
    emphasis: "expensive",
    example: "$5,000/month",
    rows: [
      { platform: "Gumroad (10%)", cost: "$500.00", highlight: false },
      { platform: "Creatdrop ($29 + 5%)", cost: "$279.00", highlight: true },
      {
        platform: "You save",
        cost: "$221/month ($2,652/year)",
        highlight: false,
      },
    ],
    copy: "You are paying Gumroad $2,652/year you do not have to. At this revenue level, Creatdrop's effective rate is just 5.6%.",
  },
];

const VERDICT_STYLES: Record<
  Profile["emphasis"],
  { badge: string; text: string }
> = {
  stay: {
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    text: "text-slate-700",
  },
  works: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    text: "text-emerald-700",
  },
  expensive: {
    badge: "bg-red-50 text-red-700 border-red-200",
    text: "text-red-700",
  },
};

function ProfileCard({ profile }: { profile: Profile }) {
  const styles = VERDICT_STYLES[profile.emphasis];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {profile.label}
      </div>
      <div
        className={`mb-4 inline-block rounded-lg border px-3 py-1 text-sm font-bold ${styles.badge}`}
      >
        {profile.verdict}
      </div>
      <p className="mb-3 text-xs text-slate-400">Example: {profile.example}</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 font-semibold text-slate-600">
            <tr>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">Monthly cost</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {profile.rows.map((row) => (
              <tr
                key={row.platform}
                className={row.highlight ? "bg-violet-50/40" : "hover:bg-slate-50"}
              >
                <td
                  className={`px-4 py-3 font-medium ${
                    row.highlight ? "text-violet-700" : "text-slate-800"
                  }`}
                >
                  {row.platform}
                </td>
                <td
                  className={`px-4 py-3 ${
                    row.highlight
                      ? "font-semibold text-emerald-700"
                      : "text-slate-600"
                  }`}
                >
                  {row.cost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={`mt-4 text-sm leading-relaxed ${styles.text}`}>
        {profile.copy}
      </p>
    </div>
  );
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does Creatdrop save money over Gumroad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Above $580/month in sales. Below that, Gumroad's 10% fee costs less than Creatdrop's $29 flat + 5% Paddle fee.",
      },
    },
    {
      "@type": "Question",
      name: "Does Creatdrop charge per sale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creatdrop charges $29/month flat. Paddle (the payment processor) charges ~5% per transaction. There is no additional Creatdrop commission — the 5% goes to Paddle.",
      },
    },
    {
      "@type": "Question",
      name: "What is the break-even between Gumroad and Creatdrop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$580/month. Solve: $29 + 5% × sales = 10% × sales → sales = $580. At $580/month, both cost $58. Above that, Creatdrop is cheaper every dollar.",
      },
    },
    {
      "@type": "Question",
      name: "Is Creatdrop right for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if you are already earning above $580/month consistently. Below that, we recommend staying on Gumroad until your revenue validates the switch.",
      },
    },
  ],
};

const MORE_COMPARISONS = [
  { href: "/compare/gumroad-fees", label: "Gumroad fees" },
  { href: "/compare/beacons-fees", label: "Beacons fees" },
  { href: "/compare/stan-store-fees", label: "Stan Store fees" },
  { href: "/compare/payhip-fees", label: "Payhip fees" },
  { href: "/compare/lemon-squeezy-fees", label: "Lemon Squeezy fees" },
  { href: "/compare/patreon-alternative-fees", label: "Patreon fees" },
  { href: "/compare/kajabi-alternative", label: "Kajabi alternative" },
  { href: "/compare/creator-platform-fees", label: "All creator platform fees" },
  { href: "/compare/sellfy-alternative", label: "Sellfy alternative" },
  { href: "/compare/podia-alternative", label: "Podia alternative" },
  { href: "/compare/whop-alternative", label: "Whop alternative" },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
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

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Compare</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Gumroad vs Creatdrop fees: when to switch (and when not to)
        </h1>
        <p className="mb-10 text-base text-slate-500">
          Should you switch from Gumroad? The honest answer depends on one
          number. Here is the math, the break-even, and the cases where staying
          on Gumroad is the right call.
        </p>

        {/* Section 1 — Interactive calculator */}
        <section className="mb-14">
          <h2 className="mb-4 text-xl font-bold text-slate-900">
            Run the math on your numbers
          </h2>
          <CompareCalculator />
        </section>

        {/* Section 2 — Four creator profiles */}
        <section className="mb-14">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Four creator profiles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {PROFILES.map((p) => (
              <ProfileCard key={p.label} profile={p} />
            ))}
          </div>
        </section>

        {/* Section 3 — Qualitative "stay on Gumroad" cases */}
        <section className="mb-14">
          <h2 className="mb-4 text-xl font-bold text-slate-900">
            When the math does not tell the whole story
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Seasonal or irregular sellers
              </h3>
              <p className="text-sm text-slate-600">
                Monthly average matters; if December is big but other months are
                quiet, divide annual by 12 first. The break-even is about
                consistent monthly averages, not peak months.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                New creators still validating audience
              </h3>
              <p className="text-sm text-slate-600">
                No 3+ consistent months? Prove revenue first; Gumroad free tier
                is right while you find your audience. Paying $29/month to test
                whether you can sell is the wrong order of operations.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Gumroad marketplace/discover traffic
              </h3>
              <p className="text-sm text-slate-600">
                Creatdrop is a storefront, not a marketplace; if Gumroad&apos;s
                discover sends you real customers, that value is not in the fee
                math. A 10% cut might be worth paying for consistent inbound
                discovery.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4">
              <h3 className="mb-1 text-sm font-semibold text-slate-800">
                Very low average order value
              </h3>
              <p className="text-sm text-slate-600">
                Payment processing (~2.9% + $0.30/transaction) applies equally
                on both platforms; at $1–$3 products the per-transaction base
                fee matters more than the platform&apos;s cut.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Decision tree */}
        <section className="mb-14">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Decision tree
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                Step 1 — Monthly revenue
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                    Under $580/mo
                  </span>
                  <span className="text-slate-700">→ Stay on Gumroad</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    $580–$700/mo
                  </span>
                  <span className="text-slate-700">
                    → Borderline. Only switch if revenue is consistent
                    month-to-month.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    Over $700/mo
                  </span>
                  <span className="text-slate-700">
                    → Creatdrop saves you money
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                Step 2 — Revenue consistency{" "}
                <span className="normal-case font-normal tracking-normal text-slate-400">
                  (if borderline or favorable)
                </span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    Consistent
                  </span>
                  <span className="text-slate-700">
                    → Proceed to savings calculation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    Seasonal
                  </span>
                  <span className="text-slate-700">
                    → Calculate annual / 12 and re-enter
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                Step 3 — Acquisition channel{" "}
                <span className="normal-case font-normal tracking-normal text-slate-400">
                  (if math favors switching)
                </span>
              </h3>
              <p className="mb-3 text-sm text-slate-600">
                &ldquo;Does Gumroad marketplace/discover send you
                customers?&rdquo;
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                    Yes
                  </span>
                  <span className="text-slate-700">
                    → &ldquo;That discovery has real value not in the fee math.
                    Weigh it before switching.&rdquo;
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    No
                  </span>
                  <span className="text-slate-700">
                    → &ldquo;Clean switch. No hidden cost.&rdquo;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl border border-violet-100 bg-violet-50 px-8 py-10 text-center">
          <p className="mb-2 text-lg font-semibold text-slate-900">
            Run the exact numbers for your revenue
          </p>
          <p className="mb-6 text-slate-600">
            Free to start — upload a product and get a checkout link in minutes.
          </p>
          <a
            href="https://creatdrop.com/sign-up"
            className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
          >
            Start for free — no credit card required
          </a>
        </div>

        {/* More comparisons */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold text-slate-900">More comparisons</h2>
          <div className="flex flex-wrap gap-2">
            {MORE_COMPARISONS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:border-violet-200 hover:text-violet-700 transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Mandatory self-incrimination footnote — exact copy, do not modify */}
        <footer className="border-t border-slate-100 pt-6">
          <p className="text-sm italic text-slate-500">
            This tool is built by Creatdrop. We have obvious reasons to want you
            to switch. Run the math yourself with your actual numbers. Gumroad
            fee source: gumroad.com/pricing. Creatdrop fee: $29/month flat + 5%
            Paddle payment processing fee, 0% additional Creatdrop commission.
          </p>
        </footer>
      </div>
    </main>
  );
}
