import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Personal Trainer Business Plan: A Simple Template for Online Coaches | Creatdrop",
  description:
    "You don't need a 40-page business plan. You need 6 decisions made clearly. Here's the one-page trainer business plan that actually gets used.",
  alternates: {
    canonical: "https://creatdrop.com/blog/personal-trainer-business-plan",
  },
  openGraph: {
    title: "Personal Trainer Business Plan: A Simple Template for Online Coaches | Creatdrop",
    description:
      "You don't need a 40-page business plan. You need 6 decisions made clearly. Here's the one-page trainer business plan that actually gets used.",
    url: "https://creatdrop.com/blog/personal-trainer-business-plan",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Trainer Business Plan: A Simple Template for Online Coaches | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Business Plan: A Simple Template for Online Coaches | Creatdrop",
    description:
      "You don't need a 40-page business plan. You need 6 decisions made clearly. Here's the one-page trainer business plan that actually gets used.",
  },
}

export default function PersonalTrainerBusinessPlan() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-slate-100 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="text-lg font-semibold text-violet-600 hover:text-violet-700">
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
          <span className="text-slate-800">Business Strategy</span>
        </nav>

        {/* Category label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-violet-600">
          Business Strategy
        </p>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Personal Trainer Business Plan: A Simple Template for Online Coaches
        </h1>

        <p className="mb-10 text-base text-slate-500">
          9 min read &mdash; Published April 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p className="mb-4 text-slate-700 leading-relaxed">
            Traditional business plans were designed for bank loans. They assume you need
            to convince a committee of strangers to hand you capital, which is why they
            run 40 pages and include financial projections for years you haven&apos;t
            lived yet.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            As an online fitness coach, you don&apos;t need that. You need something
            you&apos;ll actually use &mdash; a one-page plan that fits on a napkin and
            gets you to first revenue. What follows is exactly that.
          </p>

          {/* Section 1 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The 6 Decisions That Replace a Business Plan
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Instead of a formal document, make six concrete decisions. Write each one
            down in a sentence. When all six are answered, you have a business plan
            that is more useful than anything a consultant would produce.
          </p>

          <div className="space-y-5 my-6">
            {/* Decision 1 */}
            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Who exactly do I serve?</p>
                <p className="text-slate-700 leading-relaxed">
                  Not &ldquo;people who want to get fit&rdquo; but something specific:
                  &ldquo;desk-working men 35&ndash;50 who want to build muscle without
                  spending two hours in the gym.&rdquo; The narrower your answer, the
                  easier every subsequent decision becomes. Specificity is not limiting
                  &mdash; it is targeting.
                </p>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">What specific transformation do I sell?</p>
                <p className="text-slate-700 leading-relaxed">
                  Not &ldquo;coaching&rdquo; but a measurable outcome: &ldquo;a 12-week
                  program that adds 20 lbs to your bench press and 30 lbs to your
                  deadlift.&rdquo; People do not buy programs &mdash; they buy results.
                  Name the result explicitly.
                </p>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">What is my flagship product and price?</p>
                <p className="text-slate-700 leading-relaxed">
                  One product at one price. Not a suite of offers, not a tiered pricing
                  matrix. One thing. For example: &ldquo;12-week Home Strength Program,
                  $97.&rdquo; You can add more products later. Your job right now is to
                  have one thing that exists and can be purchased.
                </p>
              </div>
            </div>

            {/* Decision 4 */}
            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">How will I find my first 10 clients or buyers?</p>
                <p className="text-slate-700 leading-relaxed">
                  Name the specific channel &mdash; Instagram DMs to engaged followers,
                  posting in a local Facebook fitness group, three Reels per week on a
                  specific topic. &ldquo;Social media&rdquo; is not an answer.
                  &ldquo;Three Reels per week about home workouts for busy dads,
                  directing viewers to my Creatdrop link in bio&rdquo; is an answer.
                </p>
              </div>
            </div>

            {/* Decision 5 */}
            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">What does revenue look like at 3, 6, and 12 months?</p>
                <p className="text-slate-700 leading-relaxed">
                  Set targets with actual numbers. Month 3: $500/mo. Month 6:
                  $2,000/mo. Month 12: $4,000/mo. These numbers hold you accountable
                  and tell you early whether your acquisition channel is working or
                  needs to change. A goal of &ldquo;grow my business&rdquo; cannot be
                  evaluated. A goal of &ldquo;$500 by month 3&rdquo; can.
                </p>
              </div>
            </div>

            {/* Decision 6 */}
            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                6
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">What does success look like in 12 months?</p>
                <p className="text-slate-700 leading-relaxed">
                  Be specific and visual: &ldquo;10 active coaching clients at
                  $200/month each, two digital products earning $1,500/mo combined,
                  posting three times per week on Instagram.&rdquo; When you can
                  picture it clearly, you can work backward from it.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The One-Page Business Plan Template
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Here is what a completed plan looks like. Fill in your own answers using
            this structure. Once filled, this is your business plan. No additional
            document is needed. Review and update it quarterly.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Section
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Example answer
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Niche", "Busy dads 35–50 who want to get strong at home"],
                  ["Transformation", "12 weeks to visible muscle without gym or hours of cardio"],
                  ["Flagship product", "Home Strength Blueprint PDF program — $97"],
                  ["Acquisition channel", "Instagram Reels 3x/week + DM outreach to engaged followers"],
                  ["Month 3 revenue target", "$500 (5 sales)"],
                  ["Month 6 revenue target", "$2,000 (10 coaching clients or 20 product sales)"],
                  ["Year 1 goal", "$3,000/mo passive + $2,000/mo active coaching"],
                ].map(([section, answer]) => (
                  <tr key={section} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">
                      {section}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-600">{answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            Once you&apos;ve filled this in, this is your business plan. Update it
            quarterly &mdash; not because anything is wrong, but because your answers
            will sharpen as you learn what actually converts.
          </p>

          {/* Section 3 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Revenue Model Options for Online Trainers
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Not all revenue models are equal. They differ in how much time they require,
            how much they can scale, and how hard they are to start. Here is a clear
            comparison:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Model</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Hourly equivalent</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Scalability</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Starting difficulty</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1:1 coaching (hourly)", "$60–$150/hr", "Low", "Easy"],
                  ["Group coaching (cohort)", "$100–$200/hr", "Medium", "Medium"],
                  ["Digital products (PDF/video)", "Unlimited", "Very high", "Medium"],
                  ["Membership site", "$200–$500+/hr", "High", "Medium-High"],
                  ["Affiliate income", "Variable", "Medium", "Easy after audience"],
                ].map(([model, hourly, scale, difficulty]) => (
                  <tr key={model} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{model}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{hourly}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{scale}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            The recommendation for coaches who are just starting: lead with 1:1 coaching
            to generate immediate cash flow while building your first digital product in
            parallel. Once the product exists, 1:1 coaching clients become your best
            early buyers.
          </p>

          {/* Section 4 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Pricing and Revenue Targets
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Here is a realistic income ladder for an online trainer selling a small
            suite of products at different price points:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Monthly sales target</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Product</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Price</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["5 units", "Beginner PDF program", "$47", "$235"],
                  ["10 units", "12-week PDF program", "$97", "$970"],
                  ["3 units", "Premium video course", "$197", "$591"],
                  ["2 clients", "Monthly coaching", "$200/mo", "$400"],
                ].map(([target, product, price, revenue]) => (
                  <tr key={product} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 text-slate-700">{target}</td>
                    <td className="border border-slate-200 p-3 text-slate-700">{product}</td>
                    <td className="border border-slate-200 p-3 font-medium text-violet-700">{price}</td>
                    <td className="border border-slate-200 p-3 text-slate-700">{revenue}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-3 font-bold text-slate-900" colSpan={3}>Total</td>
                  <td className="border border-slate-200 p-3 font-bold text-slate-900">$2,196/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            You do not need to go viral. You do not need a large following. Ten to
            fifteen sales per month at $97&ndash;$197 is a viable part-time income.
            Twenty sales per month at those price points puts you past most gym trainer
            salaries, with no commute and no schedule you didn&apos;t set yourself.
          </p>

          {/* Section 5 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            First 90-Day Action Plan
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            This is a complete operating plan for your first three months. No theory
            &mdash; only actions with specific timelines.
          </p>

          <div className="space-y-5 my-6">
            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Days 1&ndash;7: Define your niche</p>
                <p className="text-slate-700 leading-relaxed">
                  Write one sentence using this formula: &ldquo;I help [who] achieve
                  [what] without [obstacle].&rdquo; For example: &ldquo;I help busy
                  fathers over 35 build real muscle without expensive gym memberships
                  or two-hour training sessions.&rdquo; This sentence goes in your
                  bio, your product description, and every piece of content you make.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Days 8&ndash;21: Create your first product</p>
                <p className="text-slate-700 leading-relaxed">
                  Build one PDF program using Canva for layout and Google Docs for
                  content. Do not attempt a video course for your first product &mdash;
                  the production overhead kills momentum. A well-structured PDF with
                  clear programming, coaching notes, and a progression scheme is a
                  complete product that buyers will pay for and use.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Days 22&ndash;30: List on Creatdrop</p>
                <p className="text-slate-700 leading-relaxed">
                  Upload your file, set your price, write your product description
                  (who it&apos;s for, what they get, what result they can expect), and
                  go live. This is not a placeholder step &mdash; a live product with
                  a real checkout link is the difference between having a business and
                  having a plan to have a business.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Days 31&ndash;60: Post 3x/week on Instagram</p>
                <p className="text-slate-700 leading-relaxed">
                  Rotate three content types each week: one results post (client
                  transformation, your own progress, or a before/after walkthrough),
                  one education post (technique, programming principle, nutrition
                  concept your niche cares about), and one behind-the-scenes post
                  (how you train, how you program, what your day looks like). The
                  checkout link stays in your bio the entire time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Days 61&ndash;90: Launch to your audience</p>
                <p className="text-slate-700 leading-relaxed">
                  Announce your product directly &mdash; not a tease, not
                  &ldquo;something exciting is coming,&rdquo; but the actual product
                  with the price and the link. Offer an early bird discount for your
                  first 10 buyers. Email your list if you have one. DM your most
                  engaged followers personally. Personal messages convert at 5&ndash;15%.
                  Broadcast posts convert at 0.5&ndash;2%. Do both.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Common Planning Mistakes (and What to Do Instead)
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Most trainers who never launch their first product are not lacking
            knowledge or skill. They are stuck in one of these patterns:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-red-600">
                    Wrong approach
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-emerald-700">
                    Right approach
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Spending weeks on a logo",
                    "Post content first, brand later — buyers buy from coaches they trust, not logos",
                  ],
                  [
                    "Building a full website before selling anything",
                    "Sell on Creatdrop first. Build a website when you are at $1,000/mo and know what your buyers need",
                  ],
                  [
                    "Waiting until you are certified enough",
                    "Your clients are less experienced than you right now. You have enough to help someone who has nothing",
                  ],
                  [
                    "Planning too many products at once",
                    "One flagship product, launched and selling, then iterate based on buyer feedback",
                  ],
                  [
                    "Trying to serve everyone",
                    "Pick one niche and own it for six months. Breadth is for coaches with large audiences already",
                  ],
                ].map(([wrong, right]) => (
                  <tr key={wrong} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 text-red-700">{wrong}</td>
                    <td className="border border-slate-200 p-3 text-slate-700">{right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            The pattern in every mistake is the same: optimizing something peripheral
            while avoiding the thing that is actually hard, which is making something
            and offering it for sale. A logo does not generate revenue. A product
            listed at a price does.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The Only Move That Matters This Week
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Answer the six decisions above. Write them in a note, a Google Doc, or on
            paper. Then do one thing to move toward decision three: identify what your
            flagship product is going to be.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Everything else &mdash; the website, the email list, the brand, the content
            strategy &mdash; follows from having a product that exists and a price
            someone can pay. Without that, you are not running a business. You are
            planning one.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The difference between trainers who build a sustainable online income and
            those who stay stuck is not credentials, audience size, or the quality of
            their programming. It is shipping the first product.
          </p>
        </div>

        {/* CTA Section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Turn Your Plan Into Revenue</h2>
          <p className="mb-6 text-slate-600">
            Creatdrop is where online trainers list and sell digital products &mdash; no
            monthly fee, instant delivery, 0% Creatdrop commission.
          </p>
          <WaitlistForm source="blog-personal-trainer-business-plan" />
        </section>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Keep reading
          </p>
          <div className="space-y-3">
            <Link
              href="/blog/how-to-start-online-fitness-business"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                How to Start an Online Fitness Business in 2026
              </p>
              <p className="mt-0.5 text-sm text-slate-500">
                The complete step-by-step guide from niche to first paying client.
              </p>
            </Link>
            <Link
              href="/blog/fitness-niche-ideas"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                Fitness Niche Ideas: 30 Profitable Niches for Online Coaches
              </p>
              <p className="mt-0.5 text-sm text-slate-500">
                How to pick a niche that converts and own it before anyone else does.
              </p>
            </Link>
            <Link
              href="/blog/how-to-price-fitness-programs"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                How to Price Fitness Programs: The Coach&apos;s Complete Guide
              </p>
              <p className="mt-0.5 text-sm text-slate-500">
                Market rates, pricing psychology, and when to raise your prices.
              </p>
            </Link>
            <Link
              href="/blog/passive-income-fitness-coach"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800">
                Passive Income for Fitness Coaches: The Digital Products Playbook
              </p>
              <p className="mt-0.5 text-sm text-slate-500">
                What to sell, how to price it, and which platforms let you keep what you earn.
              </p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
