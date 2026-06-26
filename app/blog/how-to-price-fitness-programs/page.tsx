import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

export const metadata: Metadata = {
  title:
    "How to Price Fitness Programs: A Coach's Complete Pricing Guide | Creatdrop",
  description:
    "Stop guessing what to charge. A data-driven pricing guide for fitness coaches selling workout programs, nutrition plans, and video courses online.",
  alternates: {
    canonical: "https://creatdrop.com/blog/how-to-price-fitness-programs",
  },
  openGraph: {
    title: "How to Price Fitness Programs: A Coach's Complete Pricing Guide | Creatdrop",
    description: "Stop guessing what to charge. A data-driven pricing guide for fitness coaches selling workout programs, nutrition plans, and video courses online.",
    url: "https://creatdrop.com/blog/how-to-price-fitness-programs",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "How to Price Fitness Programs: A Coach's Complete Pricing Guide | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Price Fitness Programs: A Coach's Complete Pricing Guide | Creatdrop",
    description: "Stop guessing what to charge. A data-driven pricing guide for fitness coaches selling workout programs, nutrition plans, and video courses online.",
  },
};

export default function HowToPriceFitnessPrograms() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="How to Price Fitness Programs: A Coach's Complete Pricing Guide"
        description="Stop guessing what to charge. A data-driven pricing guide for fitness coaches selling workout programs, nutrition plans, and video courses online."
        url="https://creatdrop.com/blog/how-to-price-fitness-programs"
        datePublished="2026-04-24"
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
          <span className="text-slate-800">How to price fitness programs</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How to Price Fitness Programs: The Coach&apos;s Complete Guide
        </h1>

        <p className="mb-10 text-base text-slate-500">
          8 min read &mdash; Published April 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            Pricing is the decision most fitness coaches spend the least time
            on — and get the most wrong. The two failure modes are mirroring
            what you paid for ebooks as a consumer (too low) or anchoring to
            what big-name coaches charge for full coaching packages (too high
            for a first product).
          </p>
          <p>
            This guide gives you a realistic framework based on what fitness
            digital products actually sell for, why underpricing backfires, and
            how to adjust your price as your audience and reputation grow.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Why Most Coaches Underprice
          </h2>
          <p>
            The psychology of pricing your own work is different from pricing
            someone else&apos;s. When you&apos;ve built something yourself — a
            workout program you know every detail of — it&apos;s easy to discount
            its value because it feels obvious to you.
          </p>
          <p>Three specific traps:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>The consumer reference point.</strong> You&apos;ve bought
              ebooks for $9 on Amazon. Those were traditionally published books
              with different economics. Your 30-page workout program has higher
              specificity and direct applicability to someone&apos;s goals. It&apos;s
              not competing with a $9 novel.
            </li>
            <li>
              <strong>The &ldquo;test&rdquo; price fallacy.</strong> Pricing at $9 to
              &ldquo;see if anyone buys&rdquo; tests price sensitivity at the absolute
              bottom of the market. It doesn&apos;t tell you whether people value
              your work — only whether some people will pay the lowest possible
              amount. A $49 price tells you something real.
            </li>
            <li>
              <strong>Fear of rejection.</strong> A $49 product that gets no
              sales feels more like rejection than a $9 product with no sales.
              But the business outcome is the same (zero revenue) and the
              higher price at least preserved your positioning.
            </li>
          </ol>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The Market Rate Framework
          </h2>
          <p>
            What the fitness digital product market actually pays in 2026, based
            on what coaches with engaged audiences consistently earn:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Product Type</th>
                  <th className="px-4 py-3">Starter Price</th>
                  <th className="px-4 py-3">Established Price</th>
                  <th className="px-4 py-3">Premium Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["4-week beginner program (PDF)", "$19–29", "$39–49", "$49–69"],
                  ["8-week intermediate program", "$39–49", "$59–79", "$79–97"],
                  ["12-week comprehensive program", "$49–69", "$79–97", "$97–147"],
                  ["Nutrition guide (standalone)", "$19–29", "$39–59", "$59–79"],
                  ["Training + nutrition bundle", "$59–79", "$97–127", "$127–197"],
                  ["Video technique course", "$49–79", "$79–127", "$127–197"],
                  ["Home workout program", "$29–39", "$39–59", "$49–79"],
                  ["Template pack (spreadsheets)", "$19–29", "$29–49", "$49–79"],
                ].map(([type, starter, established, premium]) => (
                  <tr key={type} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{type}</td>
                    <td className="px-4 py-3 text-slate-600">{starter}</td>
                    <td className="px-4 py-3 text-slate-700">{established}</td>
                    <td className="px-4 py-3 font-semibold text-slate-800">{premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 italic">
            Starter = launching with a small/new audience. Established = 2,000+ engaged followers
            who have seen your content for 6+ months. Premium = recognized expertise in a specific
            niche, strong social proof.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            How Audience Size Affects Pricing
          </h2>
          <p>
            Counterintuitively, audience size matters less than audience
            quality. A fitness coach with 500 highly engaged followers in a
            specific niche (powerlifting for women over 40, say) can charge
            more than a generalist coach with 10,000 passive followers.
          </p>
          <p>What actually matters:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Trust duration</strong> — how long have people been
              following you? New accounts should price at the lower end of
              the starter range. Accounts with 12+ months of consistent content
              can price at the upper end.
            </li>
            <li>
              <strong>Niche specificity</strong> — a program for &ldquo;marathon
              runners over 50&rdquo; can charge more than a program for &ldquo;get
              fit.&rdquo; Specificity signals expertise and increases perceived
              value.
            </li>
            <li>
              <strong>Demonstrated results</strong> — before/after content,
              client testimonials, and specific outcome stories increase what
              people will pay. This is the single highest-leverage way to
              justify a price increase.
            </li>
            <li>
              <strong>Content quality</strong> — a program that clearly
              shows craft in design and depth of coaching cues commands higher
              prices. A screenshot of a spreadsheet with minimal explanation
              does not.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Pricing Your First Product
          </h2>
          <p>
            If you&apos;re launching your first digital product with a small-to-medium
            audience, the recommended starting point is $39-49 for a training
            program. Here&apos;s why that range works:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>It&apos;s not an impulse buy</strong> — someone who pays $49
              is likely to actually use the program. This leads to better
              outcomes, better testimonials, and a product that grows through
              word of mouth.
            </li>
            <li>
              <strong>It&apos;s not a barrier</strong> — $49 is below the threshold
              where fitness buyers start seriously questioning whether the
              program is right for them. Anything above $79 typically requires
              more social proof to convert.
            </li>
            <li>
              <strong>It creates real data</strong> — if 200 people follow your
              content and 3 buy at $49, you have $147 and evidence that your
              audience converts at ~1.5%. That&apos;s actionable. Three sales at
              $9 is $27 and tells you nothing.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            When (and How) to Raise Your Price
          </h2>
          <p>The two triggers that justify a price increase:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>You have testimonials and outcome evidence.</strong> Once
              you have 5-10 buyers who have completed the program and can
              describe the result, you have social proof. This changes the
              conversion math and allows a price increase without losing
              conversion rate.
            </li>
            <li>
              <strong>Demand is consistently exceeding expectations.</strong> If
              you expected 10 sales and got 50, that&apos;s a signal your price is
              below what the market will bear. Raise it by 20-30% and test.
            </li>
          </ol>
          <p>How to raise prices:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Give existing followers a &ldquo;founding customer&rdquo; deadline —
              &ldquo;price goes up on Friday.&rdquo; This creates urgency without
              deception and often drives a sales spike.
            </li>
            <li>
              Don&apos;t raise and lower repeatedly. Inconsistent pricing erodes
              trust. Set a price, hold it, raise it once when you have evidence.
            </li>
            <li>
              When raising price on an existing product, add value (updated
              content, a bonus PDF) so the increase feels justified rather than
              arbitrary.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Bundling to Increase Average Order Value
          </h2>
          <p>
            A $49 workout program and a $29 nutrition guide sold separately
            generate $78 if both are bought. Sold as a bundle at $69, you
            generate $69 on the same purchase — but the conversion rate on the
            bundle is often higher than the sum of individual purchases.
          </p>
          <p>Bundle pricing that works for fitness coaches:</p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Bundle</th>
                  <th className="px-4 py-3">Individual Total</th>
                  <th className="px-4 py-3">Bundle Price</th>
                  <th className="px-4 py-3">Buyer Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Training program + nutrition guide", "$49 + $29 = $78", "$59–69", "15–25%"],
                  ["12-week program + tracking spreadsheet", "$79 + $29 = $108", "$89–97", "10–17%"],
                  ["Starter + advanced program", "$39 + $59 = $98", "$79–89", "9–19%"],
                  ["Full system (program + nutrition + videos)", "$49 + $29 + $79 = $157", "$97–127", "19–38%"],
                ].map(([bundle, individual, price, savings]) => (
                  <tr key={bundle} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{bundle}</td>
                    <td className="px-4 py-3 text-slate-600">{individual}</td>
                    <td className="px-4 py-3 font-semibold text-violet-700">{price}</td>
                    <td className="px-4 py-3 text-emerald-700">{savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Platform Fees Change Your Effective Price
          </h2>
          <p>
            The price you set and the money you receive are different numbers
            depending on your platform. On a 10% commission platform like Gumroad,
            a $49 product puts $44.10 in your account. On a flat-fee platform
            like Creatdrop ($29/month), a $49 product puts approximately
            $47.50 in your account (after payment processing fees only — no
            platform cut).
          </p>
          <p>
            This matters at scale. If you sell 100 units of a $49 program in a
            month:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gumroad: $4,900 revenue → $440 in platform fees → $4,460 net</li>
            <li>Creatdrop: $4,900 revenue → $29 in platform fee → ~$4,851 net</li>
          </ul>
          <p>
            That&apos;s a $391 difference per month, or $4,692/year — on the same
            product at the same price.
          </p>
          <p>
            When you calculate your price, decide what you want to net — then
            work backwards including platform fees. A $49 product on Gumroad is
            not the same economics as a $49 product on Creatdrop.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The Short Answer
          </h2>
          <p>
            If you have a training program and you&apos;re not sure what to charge:
            start at $39-49. If it converts well (3%+ of people who see the
            direct link), raise it 20% on your next product. If it doesn&apos;t
            convert, the price isn&apos;t the problem — the audience, the
            positioning, or the distribution is.
          </p>
          <p>
            Price is the last thing to optimize. Get the product live, get it
            in front of people, and iterate from there.
          </p>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Keep reading</p>
          <div className="space-y-3">
            <Link href="/blog/sell-workout-programs-online" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800">How to Sell Workout Programs Online in 2026</p>
              <p className="text-sm text-slate-500 mt-0.5">From file to checkout link in 10 minutes.</p>
            </Link>
            <Link href="/blog/digital-products-personal-trainers" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800">Digital Products for Personal Trainers: What to Sell and How to Price It</p>
              <p className="text-sm text-slate-500 mt-0.5">8 product types with full pricing benchmarks.</p>
            </Link>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-10 rounded-2xl border border-slate-200 px-8 py-10 text-center">
          <p className="mb-1 text-base font-semibold text-slate-900">Want the full pricing playbook?</p>
          <p className="mb-6 text-sm text-slate-500">Practical tips on pricing, platforms, and selling digital products — straight to your inbox.</p>
          <WaitlistForm />
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
          <p className="mb-2 text-lg font-semibold text-slate-900">
            Ready to price and sell your first program?
          </p>
          <p className="mb-6 text-slate-600">
            Free to start — set your price, upload your file, and get a
            checkout link in minutes.
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
