import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

export const metadata: Metadata = {
  title:
    "How to Sell Nutrition Plans Online: A Fitness Coach's Guide | Creatdrop",
  description:
    "Fitness coaches and nutritionists: how to package, price, and sell nutrition plans online. Platform comparison, pricing benchmarks, and first-sale playbook.",
  alternates: {
    canonical: "https://creatdrop.com/blog/sell-nutrition-plans-online",
  },
  openGraph: {
    title: "How to Sell Nutrition Plans Online: A Fitness Coach's Guide | Creatdrop",
    description: "Fitness coaches and nutritionists: how to package, price, and sell nutrition plans online. Platform comparison, pricing benchmarks, and first-sale playbook.",
    url: "https://creatdrop.com/blog/sell-nutrition-plans-online",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "How to Sell Nutrition Plans Online: A Fitness Coach's Guide | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Nutrition Plans Online: A Fitness Coach's Guide | Creatdrop",
    description: "Fitness coaches and nutritionists: how to package, price, and sell nutrition plans online. Platform comparison, pricing benchmarks, and first-sale playbook.",
  },
};

export default function SellNutritionPlansOnline() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="How to Sell Nutrition Plans Online: A Fitness Coach's Guide"
        description="Fitness coaches and nutritionists: how to package, price, and sell nutrition plans online. Platform comparison, pricing benchmarks, and first-sale playbook."
        url="https://creatdrop.com/blog/sell-nutrition-plans-online"
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
          <span className="text-slate-800">How to sell nutrition plans online</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How to Sell Nutrition Plans Online: A Fitness Coach&apos;s Guide
        </h1>

        <p className="mb-10 text-base text-slate-500">
          7 min read &mdash; Published April 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            Nutrition guidance is the most requested thing fitness coaches
            provide — and the most undermonetized. Most coaches answer the same
            questions in every intake call, in every client check-in, in every
            Instagram DM. That knowledge can be packaged once and sold
            indefinitely.
          </p>
          <p>
            This guide covers how to structure, price, and sell nutrition plans
            as digital products — without needing a dietitian license and without
            giving away the content you charge for 1-on-1.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What You Can (and Can&apos;t) Sell
          </h2>
          <p>
            Before packaging anything nutrition-related, be clear on the
            distinction:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>What you can sell as a fitness coach:</strong> general
              wellness nutrition guidance, macro frameworks, meal planning
              templates, food prep systems, calorie target ranges by goal. These
              are educational tools, not medical prescriptions.
            </li>
            <li>
              <strong>What requires a registered dietitian:</strong> clinical
              nutrition for medical conditions (diabetes, eating disorders,
              kidney disease), individualised therapeutic diets, anything that
              functions as a substitute for medical nutrition therapy.
            </li>
          </ul>
          <p>
            The good news: most of what fitness clients actually need falls
            squarely in the first category. &ldquo;Here&apos;s a 4-week meal
            plan template for a 180lb person trying to lose fat while lifting
            4x/week&rdquo; is general wellness content — and it&apos;s exactly
            what people are searching for and willing to pay for.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Types of Nutrition Products Fitness Coaches Sell
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Product Type</th>
                  <th className="px-4 py-3">What It Is</th>
                  <th className="px-4 py-3">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Macro guide",
                    "Framework for setting protein/carb/fat targets by goal",
                    "$19 – $39",
                  ],
                  [
                    "Meal plan template",
                    "7–28 day plan with meals, portions, prep notes",
                    "$29 – $59",
                  ],
                  [
                    "Food prep system",
                    "Weekly batch cooking guide, grocery lists, storage tips",
                    "$29 – $49",
                  ],
                  [
                    "Nutrition + training bundle",
                    "Paired plan: workout program + matching nutrition guide",
                    "$79 – $149",
                  ],
                  [
                    "Calorie calculator + guide",
                    "Spreadsheet tool + explanation of how to use it",
                    "$15 – $29",
                  ],
                  [
                    "Competition prep nutrition",
                    "Cutting/peaking protocols for physique athletes",
                    "$49 – $97",
                  ],
                ].map(([type, desc, price]) => (
                  <tr key={type} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">
                      {type}
                    </td>
                    <td className="px-4 py-3 text-slate-600 text-sm">{desc}</td>
                    <td className="px-4 py-3 font-semibold text-violet-700">
                      {price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The bundle format consistently outperforms standalone products.
            Pairing a training program with a nutrition guide typically sells at
            $97–$149 — roughly double what either product would earn alone.
            Buyers see it as a complete system and price sensitivity drops.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            How to Build Your First Nutrition Product
          </h2>
          <p>
            The fastest path is to start with what you already use with clients.
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Identify the template you send most often.</strong> What
              nutrition framework do you explain to every new client? What food
              prep system do you recommend to everyone in the first week? That
              is your first product. You have already built it — it just
              exists in your head, your messages, or scattered files.
            </li>
            <li>
              <strong>Write it into a structured document.</strong> A 7-day meal
              plan with grocery lists. A macro calculation walkthrough. A food
              prep guide with Monday shopping and Sunday prep. Give it a clear
              outcome in the title: &ldquo;The 4-Week Fat Loss Meal Plan (For
              People Who Hate Meal Prepping).&rdquo;
            </li>
            <li>
              <strong>Design it properly.</strong> A well-formatted PDF sells at
              2–3× the price of the same content in a plain Google Doc. Use
              Canva or Notion export. Add your branding, a clear table of
              contents, and consistent formatting. First impressions determine
              perceived value.
            </li>
            <li>
              <strong>Price for the outcome, not the page count.</strong> A
              5-page macro guide that gives someone a clear system for hitting
              their protein target is worth $29–$39. Price based on the result
              the buyer achieves, not the effort you put into making it.
            </li>
          </ol>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Pricing Strategy: Common Mistakes
          </h2>
          <p>
            Two mistakes consistently cost fitness coaches money:
          </p>
          <p>
            <strong>Underpricing to reduce risk of rejection.</strong> A $9
            nutrition plan signals low value. Buyers wonder what&apos;s wrong
            with it. The coaches who do best typically price at 2–3× what their
            first instinct tells them to charge. If you think $15, charge $29.
            If you think $29, charge $49. Test from the top, not the bottom.
          </p>
          <p>
            <strong>Pricing per page instead of per outcome.</strong> A 40-page
            meal plan guide is not worth 4× a 10-page one. The buyer does not
            care about page count. They care about whether the system is clear,
            practical, and works. Buyers regularly pay more for concise,
            well-designed products than bloated ones.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Which Platform to Sell On
          </h2>
          <p>
            Platform choice determines how much of each sale you keep. The two
            main models:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Fee Model</th>
                  <th className="px-4 py-3">Cost on $500/mo</th>
                  <th className="px-4 py-3">Cost on $2,000/mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Gumroad", "10% of every sale", "$50", "$200"],
                  ["Creatdrop", "$29/month flat, 0% cut", "$29", "$29"],
                ].map(([platform, fee, cost500, cost2k]) => (
                  <tr
                    key={platform}
                    className={`hover:bg-slate-50 ${platform === "Creatdrop" ? "bg-violet-50/30" : ""}`}
                  >
                    <td
                      className={`px-4 py-3 font-medium ${platform === "Creatdrop" ? "text-violet-700" : "text-slate-800"}`}
                    >
                      {platform}
                    </td>
                    <td className="px-4 py-3 text-slate-600 text-sm">{fee}</td>
                    <td
                      className={`px-4 py-3 ${platform === "Creatdrop" ? "text-violet-700 font-semibold" : "text-red-600"}`}
                    >
                      {cost500}
                    </td>
                    <td
                      className={`px-4 py-3 ${platform === "Creatdrop" ? "text-violet-700 font-semibold" : "text-red-600"}`}
                    >
                      {cost2k}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The crossover is at $290/month in sales. Above that, Gumroad&apos;s
            10% model costs more than a flat fee. At $2,000/month, Gumroad takes
            $200 — more than 6 months of Creatdrop flat fee.
          </p>
          <p>
            Creatdrop is free to start. Upload your nutrition plan, set a price,
            get a checkout link. When your monthly revenue passes $290, upgrade
            to the flat-fee plan. Until then: free.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            How to Get Your First Sales
          </h2>
          <p>
            Nutrition products tend to sell more easily than training programs
            because the buyer&apos;s pain point is clearer. Everyone knows they
            &ldquo;don&apos;t eat well enough&rdquo; — the problem is visceral
            and immediate.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Content about the problem, not the product.</strong> A
              post titled &ldquo;Why you can&apos;t stick to a diet long-term
              (and what actually works instead)&rdquo; will outperform
              &ldquo;My new 4-week meal plan is available.&rdquo; Lead with the
              diagnosis. Close with the solution.
            </li>
            <li>
              <strong>Instagram and TikTok &ldquo;what I eat&rdquo; content.</strong>
              Your own meal prep, grocery haul, or daily nutrition habits shown
              as content is a natural lead-in to selling a meal plan. Viewers
              who like your approach will ask where to get it.
            </li>
            <li>
              <strong>Email list with a free lead magnet.</strong> A &ldquo;free
              macro calculator spreadsheet&rdquo; email capture converts well.
              Subscribers who opted in for nutrition content are warm leads for
              a paid nutrition plan.
            </li>
            <li>
              <strong>Reddit — r/fitness, r/xxfitness, r/loseit.</strong> Answer
              nutrition questions genuinely and helpfully. Mention your resource
              when directly relevant, never as a pitch. Useful answers convert;
              promotional posts get removed.
            </li>
            <li>
              <strong>Bundle with your training program.</strong> If you already
              sell a workout program, add a nutrition guide to it and raise the
              price. Most buyers will take the bundle. The incremental
              production cost is low; the revenue uplift is significant.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Start Simple, Build From There
          </h2>
          <p>
            The mistake is waiting for the perfect product. A clear, practical
            7-day meal plan in a well-formatted PDF, priced at $29–$39, will
            outperform the elaborate 12-week nutrition system you&apos;ve been
            designing for 6 months but never shipped.
          </p>
          <p>
            Start with one focused product. Upload it, get the checkout link,
            tell your audience. Use the first 5–10 buyers&apos; feedback to
            build the next product. The catalog compounds. The first product is
            never the best one — it&apos;s just the one that gets you started.
          </p>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Keep reading
          </p>
          <div className="space-y-3">
            <Link
              href="/blog/make-money-personal-trainer-online"
              className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                How to Make Money as a Personal Trainer Online
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                The 4 income streams that break the session ceiling.
              </p>
            </Link>
            <Link
              href="/blog/sell-workout-programs-online"
              className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                How to Sell Workout Programs Online in 2026
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                From file to checkout link in 10 minutes.
              </p>
            </Link>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-10 rounded-2xl border border-slate-200 px-8 py-10 text-center">
          <p className="mb-1 text-base font-semibold text-slate-900">
            More resources for fitness coaches
          </p>
          <p className="mb-6 text-sm text-slate-500">
            Guides on packaging, pricing, and selling your expertise online —
            sent to coaches who are serious about building digital income.
          </p>
          <WaitlistForm />
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
          <p className="mb-2 text-lg font-semibold text-slate-900">
            Ready to sell your nutrition plans?
          </p>
          <p className="mb-6 text-slate-600">
            Upload your plan, set a price, share the link. Free to start — no
            credit card required.
          </p>
          <a
            href="https://creatdrop.com/sign-up"
            className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
          >
            Start for free
          </a>
        </div>
      </article>
    </main>
  );
}
