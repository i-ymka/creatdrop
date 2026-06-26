import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Scale Your Online Fitness Coaching Business in 2026",
  description:
    "Growing from $3k to $10k/month as a fitness coach requires a different strategy than getting to $3k. Here's how to scale without burning out or sacrificing quality.",
  alternates: {
    canonical: "https://creatdrop.com/blog/scale-online-fitness-coaching",
  },
  openGraph: {
    title: "How to Scale Your Online Fitness Coaching Business in 2026",
    description:
      "Growing from $3k to $10k/month as a fitness coach requires a different strategy than getting to $3k. Here's how to scale without burning out or sacrificing quality.",
    url: "https://creatdrop.com/blog/scale-online-fitness-coaching",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "How to Scale Your Online Fitness Coaching Business in 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Scale Your Online Fitness Coaching Business in 2026",
    description:
      "Growing from $3k to $10k/month as a fitness coach requires a different strategy than getting to $3k. Here's how to scale without burning out or sacrificing quality.",
  },
}

export default function ScaleOnlineFitnessCoaching() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="text-xl font-bold text-violet-600 hover:text-violet-700">
            Creatdrop
          </Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 px-6 py-3">
        <div className="mx-auto max-w-5xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-700">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-700">Business Strategy</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Category */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-600">
          Business Strategy
        </p>

        {/* H1 */}
        <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How to Scale Your Online Fitness Coaching Business in 2026
        </h1>

        {/* Intro */}
        <p className="mb-4 text-slate-700 leading-relaxed">
          The tactics that get you to $3k/month stop working at $10k. More clients does not equal more
          revenue — it equals more burnout. At a certain point, your time becomes the bottleneck, and no
          amount of hustle can change that math. Scaling requires a different model, not just more effort.
          Here is the playbook that fitness coaches are actually using to break through the ceiling.
        </p>

        {/* Section 1 */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why &quot;More Clients&quot; Is Not a Scaling Strategy
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Run the math and it becomes obvious fast. At $200 per month per client, hitting $10,000 per
            month means managing 50 active coaching clients simultaneously. That is 50 weekly check-ins,
            50 custom training programs to write and adjust, 50 ongoing conversations to keep up with.
            That is not a business — that is a full-time job with worse hours than any gym ever offered
            you.
          </p>
          <p className="mb-6 text-slate-700 leading-relaxed">
            The coaches who successfully scale online fitness coaching understand that the 1:1-only model
            has a hard ceiling. The question is not how to get more clients — it is how to restructure
            revenue so your income grows faster than your hours do.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Revenue target
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    1:1 only model
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Hybrid model (coaching + products)
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Products-first model
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">$3,000/mo</td>
                  <td className="border border-slate-200 p-3 text-slate-600">15 clients × $200</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    10 clients + $1,000 from products
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">30+ product sales/mo</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">$5,000/mo</td>
                  <td className="border border-slate-200 p-3 text-slate-600">25 clients × $200</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    15 clients + $2,000 from products
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">50+ product sales/mo</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">$10,000/mo</td>
                  <td className="border border-slate-200 p-3 text-slate-600">50 clients × $200</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    20 clients + $6,000 from products
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">100+ product sales/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            The hybrid model — combining premium 1:1 clients with digital products and memberships — is
            the most sustainable path to $10k per month for the majority of fitness coaches. It does not
            require you to abandon coaching. It requires you to stop letting coaching be your only revenue
            source.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The 4 Scaling Levers for Fitness Coaches
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            There are exactly four ways to scale online fitness coaching without working more hours. Most
            coaches only use one of them. The ones who hit $10k/month and beyond are usually using at
            least three.
          </p>

          <div className="flex flex-col gap-6">
            {/* Lever 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  1
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Raise prices</p>
                <p className="text-slate-700 leading-relaxed">
                  Going from $150 to $250 per month per client means you need 40 fewer clients to hit
                  the same revenue. Before you add a single new product or hire a contractor, try raising
                  your prices. This is the highest-ROI action available to any coach who has been
                  undercharging — and most coaches are undercharging. Price increases are uncomfortable
                  the first time. Do it anyway.
                </p>
              </div>
            </div>

            {/* Lever 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  2
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Add group coaching</p>
                <p className="text-slate-700 leading-relaxed">
                  Instead of delivering 20 individual check-in calls per week, coach 20 people inside one
                  weekly group call. The total hours are identical. The revenue is identical. But your
                  customization burden drops by 95 percent. Group coaching at $99 to $149 per month
                  attracts clients who cannot afford 1:1 — this is net-new revenue, not cannibalization.
                </p>
              </div>
            </div>

            {/* Lever 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  3
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Launch digital products</p>
                <p className="text-slate-700 leading-relaxed">
                  One $97 program sold 30 times per month equals $2,910 with zero coaching hours after
                  the product is built. A 12-week training guide, a nutrition template pack, a home
                  workout series — these are one-time creation efforts that generate ongoing revenue.
                  Stack two or three digital products alongside your coaching and you have fundamentally
                  changed the economics of your business.
                </p>
              </div>
            </div>

            {/* Lever 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  4
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Build a membership</p>
                <p className="text-slate-700 leading-relaxed">
                  Recurring monthly income at $29 to $49 per month is far more predictable than
                  one-off program sales or coaching package launches. A membership with 100 members at
                  $29 per month is $2,900 in revenue that arrives every month whether you launch anything
                  or not. It also creates a warm pool of buyers for your higher-ticket offers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The Hybrid Revenue Model in Practice
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Abstract strategy is easy to write about. Here is what a real, sustainable $8,000 per month
            fitness coaching business can actually look like when built on the hybrid model:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Revenue stream
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Description
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Monthly revenue
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    10 premium 1:1 clients
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">$400/month each</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$4,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">2 digital product lines</td>
                  <td className="border border-slate-200 p-3 text-slate-600">15 sales/mo at $97 avg</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$1,455</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Membership site</td>
                  <td className="border border-slate-200 p-3 text-slate-600">80 members at $29/mo</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$2,320</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Affiliate income</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Equipment, supps</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$300</td>
                </tr>
                <tr className="font-bold">
                  <td className="border border-slate-200 p-3 text-slate-900">Total</td>
                  <td className="border border-slate-200 p-3 text-slate-900"></td>
                  <td className="border border-slate-200 p-3 text-slate-900">$8,075</td>
                </tr>
                <tr className="font-bold bg-violet-50">
                  <td className="border border-slate-200 p-3 text-violet-900">Weekly hours</td>
                  <td className="border border-slate-200 p-3 text-violet-900"></td>
                  <td className="border border-slate-200 p-3 text-violet-900">~25 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Twenty-five hours per week instead of fifty. The difference is not working smarter — it is
            diversification. No single revenue stream dominates, which also means no single client
            cancellation is a crisis.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Systems That Make Scaling Possible
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Scaling without systems is just chaos at a larger scale. Every hour you spend on manual admin
            is an hour you are not creating, not coaching, and not growing. The coaches who successfully
            scale online fitness coaching businesses do not have more hours in the day — they have fewer
            manual processes eating those hours.
          </p>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Here are the core systems, the tools that handle them, and the realistic time savings each
            delivers per week:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    System
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Tool
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Time saved/week
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Onboarding new clients
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Google Form + Notion template
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">2–3 hours</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Weekly check-in automation
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    PT Distinction or Typeform
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">3–4 hours</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Program delivery</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Creatdrop (instant)
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">1–2 hours</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Email sequences</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Kit (automated welcome sequence)
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">2–3 hours</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Social content batching
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Later/Buffer + batch recording
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">3–4 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            That is 11 to 16 hours per week returned to you — without cutting a single coaching client or
            reducing quality. Systems are not optional infrastructure. They are the prerequisite for
            scaling.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The Content Flywheel: How Top Coaches Scale Their Audience
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Audience growth is not separate from revenue growth — it is the engine of it. The coaches who
            scale online fitness coaching businesses to $10k/month and beyond have almost always built a
            content system that runs on compounding returns. The flywheel looks like this: content leads
            to leads, leads lead to sales, sales produce testimonials, and testimonials fuel better
            content. Each cycle is larger than the last.
          </p>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Here is how to build that flywheel deliberately:
          </p>

          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  1
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Create cornerstone content</p>
                <p className="text-slate-700 leading-relaxed">
                  Produce one substantial piece of content — a YouTube video or long-form blog post —
                  targeting a high-intent keyword your ideal client is actually searching. Something like
                  &quot;12-week home strength program for beginners&quot; or &quot;how to lose fat
                  without losing muscle.&quot; This is the anchor everything else is built around.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  2
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Repurpose into short-form</p>
                <p className="text-slate-700 leading-relaxed">
                  Pull three to five Reels or TikToks out of each long-form piece. You are not creating
                  new content — you are redistributing content you already made to where different
                  audiences spend their attention. One YouTube video or blog post should generate at
                  least a week of short-form content.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  3
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Drive to a lead magnet</p>
                <p className="text-slate-700 leading-relaxed">
                  Every piece of content should point toward a free resource — a PDF guide, a mini email
                  course, a sample workout — in exchange for an email address. The email list is the
                  only audience you own. Social platforms change algorithms. Your list does not.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  4
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Email sequence sells the paid product</p>
                <p className="text-slate-700 leading-relaxed">
                  Build a five-email welcome sequence that delivers value, establishes your authority, and
                  makes a clear pitch to the paid product on day seven. Automated. Runs while you sleep.
                  Every new subscriber enters the sequence and either buys or does not — without you
                  doing anything new.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  5
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Collect testimonials from buyers</p>
                <p className="text-slate-700 leading-relaxed">
                  Every buyer who gets a result is a piece of future content. A short video testimonial,
                  a before-and-after written review, a screenshot of a message — these become the social
                  proof that makes the next round of content convert at a higher rate. Systematically
                  collect them. Use them everywhere.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  6
                </span>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Repeat — the cycle compounds</p>
                <p className="text-slate-700 leading-relaxed">
                  With each cycle, the audience is larger, the social proof is stronger, and the products
                  are more refined. The second launch of any product outperforms the first. The tenth
                  piece of cornerstone content reaches more people than the first. This is the compounding
                  return that makes content-led fitness businesses genuinely scalable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Pricing Power: The Fastest Scaling Lever
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Before building a new product, before launching a membership, before any of it — run the
            numbers on what happens if you simply charge more. Raising prices is the highest-ROI scaling
            action available to most fitness coaches, and it is consistently the most avoided.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Action
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Revenue impact
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Hours impact
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Net effect
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Add 5 new clients at $150
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">+$750/mo</td>
                  <td className="border border-slate-200 p-3 text-slate-600">+5–8 hours/week</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Negative ROI on time</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Raise prices from $150 to $250 for existing 20 clients
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">+$2,000/mo</td>
                  <td className="border border-slate-200 p-3 text-slate-600">0 additional hours</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Positive ROI</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Launch one $97 digital product
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">Variable</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Product creation only
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-600">High ROI after launch</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            The fear every coach has before raising prices is the same: clients will leave. Here is the
            reality: 10 to 20 percent may leave. But the remaining clients at the higher price often
            generate equal or greater total revenue — with fewer people to manage, fewer check-ins to
            handle, and fewer last-minute messages to answer. The clients who leave when you raise prices
            are often the highest-maintenance clients anyway.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Raise prices. Do it before anything else. Then add products, group programs, and memberships
            on top of a properly priced 1:1 offering — not instead of it.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Scaling online fitness coaching is not a mystery. The coaches hitting $10k, $15k, and $20k
            per month are not working harder than the coaches stuck at $3k. They have built diversified
            revenue, installed systems that return time, and created content that compounds. The ceiling
            is not your effort — it is your model. Change the model.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Add the Digital Revenue Stream That Scales
          </h2>
          <p className="mb-6 text-slate-600">
            Creatdrop is where fitness coaches list and sell digital products — 0% Creatdrop commission,
            instant delivery, no monthly platform cost.
          </p>
          <WaitlistForm source="blog-scale-online-fitness-coaching" />
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/passive-income-fitness-coach"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-500 group-hover:text-violet-600">
                Business Strategy
              </p>
              <p className="font-semibold text-slate-800 group-hover:text-slate-900">
                How Fitness Coaches Build Passive Income With Digital Products
              </p>
            </Link>

            <Link
              href="/blog/fitness-membership-site"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-500 group-hover:text-violet-600">
                Memberships
              </p>
              <p className="font-semibold text-slate-800 group-hover:text-slate-900">
                How to Launch a Fitness Membership Site From Scratch
              </p>
            </Link>

            <Link
              href="/blog/personal-trainer-business-plan"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-500 group-hover:text-violet-600">
                Business Planning
              </p>
              <p className="font-semibold text-slate-800 group-hover:text-slate-900">
                Personal Trainer Business Plan: The $10k/Month Blueprint
              </p>
            </Link>

            <Link
              href="/blog/fitness-coach-burnout"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-500 group-hover:text-violet-600">
                Wellbeing
              </p>
              <p className="font-semibold text-slate-800 group-hover:text-slate-900">
                Fitness Coach Burnout: Signs, Causes, and How to Recover
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
