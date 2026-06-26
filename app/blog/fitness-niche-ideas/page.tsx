import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"
import { BlogArticleSchema } from "@/components/BlogArticleSchema"

export const metadata: Metadata = {
  title: "Fitness Niche Ideas in 2026: 30 Profitable Niches for Online Coaches | Creatdrop",
  description:
    "Generalist trainers compete on price. Niche trainers charge 2–5× more. Here are 30 fitness niches with real demand — plus how to test yours before building products.",
  alternates: {
    canonical: "https://creatdrop.com/blog/fitness-niche-ideas",
  },
  openGraph: {
    title: "Fitness Niche Ideas in 2026: 30 Profitable Niches for Online Coaches | Creatdrop",
    description:
      "Generalist trainers compete on price. Niche trainers charge 2–5× more. Here are 30 fitness niches with real demand — plus how to test yours before building products.",
    url: "https://creatdrop.com/blog/fitness-niche-ideas",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Fitness Niche Ideas in 2026: 30 Profitable Niches for Online Coaches | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness Niche Ideas in 2026: 30 Profitable Niches for Online Coaches | Creatdrop",
    description:
      "Generalist trainers compete on price. Niche trainers charge 2–5× more. Here are 30 fitness niches with real demand — plus how to test yours before building products.",
  },
}

export default function FitnessNicheIdeas() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="Fitness Niche Ideas in 2026: 30 Profitable Niches for Online Coaches"
        description="Generalist trainers compete on price. Niche trainers charge 2–5× more. Here are 30 fitness niches with real demand — plus how to test yours before building products."
        url="https://creatdrop.com/blog/fitness-niche-ideas"
        datePublished="2026-04-24"
      />

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
          Fitness Niche Ideas in 2026: 30 Profitable Niches for Online Coaches
        </h1>

        <p className="mb-10 text-base text-slate-500">
          10 min read &mdash; Published April 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            Most fitness coaches start out as generalists. The pitch is broad: &ldquo;I help people get fit,
            lose weight, and feel better.&rdquo; It sounds inclusive. In practice, it means you compete
            with every trainer on Instagram, every free YouTube channel, and every $9.99 app on the
            App Store. You race to the bottom on price because nothing distinguishes you from the noise.
          </p>
          <p>
            Niche coaches operate in a different market entirely. When someone searches for &ldquo;prenatal
            workout program&rdquo; or &ldquo;strength training for men over 40,&rdquo; they are not comparison
            shopping between you and a generalist. They are looking for the person who speaks directly
            to their specific situation. That specificity commands a premium — typically 2–5 times what
            a generalist charges for the equivalent product or service.
          </p>
          <p>
            This article covers 30 proven fitness niche ideas, how to evaluate them before building
            anything, and how to turn a validated niche into your first digital product.
          </p>

          {/* Section 1 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why Niching Down Makes You More Money
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The difference between a generalist and a niche coach is not the quality of their
            programming. It is the clarity of the problem they solve. Consider two positioning
            statements side by side:
          </p>

          <div className="rounded-xl border border-slate-200 overflow-hidden my-6">
            <div className="grid grid-cols-2 divide-x divide-slate-200">
              <div className="p-5 bg-slate-50">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Generalist</p>
                <p className="text-slate-700 text-sm">&ldquo;I help people get fit.&rdquo;</p>
                <p className="mt-3 text-xl font-bold text-slate-900">$30/session</p>
              </div>
              <div className="p-5 bg-violet-50">
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-500 mb-2">Niche Coach</p>
                <p className="text-slate-700 text-sm">&ldquo;I help busy moms lose the baby weight without giving up wine.&rdquo;</p>
                <p className="mt-3 text-xl font-bold text-slate-900">$150/session</p>
              </div>
            </div>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            The niche coach is not five times better at programming. She is five times better at
            speaking to a specific person&apos;s problem. That person feels understood immediately. There
            is no friction of &ldquo;does this apply to me?&rdquo; — the answer is obviously yes. That clarity
            of fit is what drives premium pricing.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            In practice, niche coaches typically charge 2–5x more for equivalent digital products,
            and their conversion rates are higher because their audience self-selects. A $97 program
            for postpartum moms does not need to compete with free YouTube content aimed at everyone.
            It is solving a very specific problem for a very specific person who is actively looking
            for that solution.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Every profitable fitness niche sits at the intersection of three dimensions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>WHO</strong> — the specific audience (busy moms, men over 40, seniors,
              desk workers, beginners)
            </li>
            <li>
              <strong>WHAT</strong> — the transformation or goal they want (lose fat, build muscle,
              run a marathon, get their first pull-up)
            </li>
            <li>
              <strong>HOW</strong> — the method or constraint (home workouts, no equipment,
              kettlebells only, 20 minutes a day)
            </li>
          </ul>
          <p className="mb-4 text-slate-700 leading-relaxed">
            You do not need all three dimensions to have a viable niche, but combining two or
            three creates a positioning that is nearly impossible to commoditize.
          </p>

          {/* Section 2 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The 30 Fitness Niche Ideas
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The niches below are organized by dimension. Each includes an example positioning
            statement and digital product ideas you can build and sell without a studio,
            equipment, or a large team.
          </p>

          <h3 className="mt-8 text-lg font-bold text-slate-900">By Audience (WHO)</h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Niche</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Example positioning</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Digital product ideas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Busy moms (postpartum)",
                    "\"Get your body back without 2-hour gym sessions\"",
                    "Home workout PDF, meal plans, 12-week program",
                  ],
                  [
                    "Men over 40",
                    "\"Build muscle without destroying your joints\"",
                    "Mobility + strength hybrid program",
                  ],
                  [
                    "Women over 50",
                    "\"Perimenopause fitness and body composition\"",
                    "Hormone-friendly training PDF",
                  ],
                  [
                    "Desk workers / office professionals",
                    "\"Fix your posture and stop back pain from sitting all day\"",
                    "10-min desk stretch series",
                  ],
                  [
                    "Teens and youth athletes",
                    "\"Sport-specific strength for high school athletes\"",
                    "Sport-specific PDF programs",
                  ],
                  [
                    "Seniors (60+)",
                    "\"Stay strong and independent longer\"",
                    "Low-impact strength and balance program",
                  ],
                  [
                    "Pregnant women",
                    "\"Safe exercise during pregnancy, trimester by trimester\"",
                    "Prenatal program PDF",
                  ],
                  [
                    "Beginners intimidated by gyms",
                    "\"Your first 90 days in the gym\"",
                    "Beginner's guide + video series",
                  ],
                ].map(([niche, positioning, products]) => (
                  <tr key={niche} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{niche}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{positioning}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{products}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">By Goal (WHAT)</h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Niche</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Example positioning</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Digital product ideas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Fat loss",
                    "\"Lose 20 lbs without cardio or calorie counting\"",
                    "Resistance training program + meal framework",
                  ],
                  [
                    "Muscle gain (natural)",
                    "\"Build visible muscle without steroids\"",
                    "Progressive overload program",
                  ],
                  [
                    "Powerlifting",
                    "\"Add 50 lbs to your total in 12 weeks\"",
                    "Periodization template PDF",
                  ],
                  [
                    "Marathon / endurance",
                    "\"From couch to 5K to marathon\"",
                    "Training schedule PDF",
                  ],
                  [
                    "Flexibility / splits",
                    "\"Get your front splits in 30 days\"",
                    "Daily stretch program",
                  ],
                  [
                    "Body recomposition",
                    "\"Lose fat and build muscle at the same time\"",
                    "Recomp protocol guide",
                  ],
                ].map(([niche, positioning, products]) => (
                  <tr key={niche} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{niche}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{positioning}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{products}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">By Method (HOW)</h3>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Niche</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Example positioning</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Digital product ideas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Home workouts (no equipment)",
                    "\"Get results with zero gym membership\"",
                    "Bodyweight program PDF",
                  ],
                  [
                    "Kettlebell training",
                    "\"One tool, full body\"",
                    "Kettlebell-only program",
                  ],
                  [
                    "Yoga for athletes",
                    "\"Add yoga to your lifting to prevent injury\"",
                    "Recovery yoga sequence PDF",
                  ],
                  [
                    "Calisthenics",
                    "\"Master bodyweight strength from push-ups to planche\"",
                    "Skill progression program",
                  ],
                  [
                    "Walking for weight loss",
                    "\"Lose weight without running\"",
                    "Step-goal + nutrition guide",
                  ],
                ].map(([niche, positioning, products]) => (
                  <tr key={niche} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{niche}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{positioning}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{products}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">By Identity and Lifestyle (Bonus Niches)</h3>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Identity-based niches are particularly strong for digital products because the audience
            is not just seeking a fitness outcome — they want to be seen and understood. These niches
            often have highly engaged communities willing to pay a premium for content that speaks
            their language.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Niche</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Example positioning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Christian fitness", "Faith-based workout devotionals and training programs"],
                  ["Sober athletes", "Recovery-focused training and performance without alcohol"],
                  ["LGBTQ+ inclusive fitness", "Body-positive, affirming language and community programs"],
                  ["Vegan athletes", "Plant-based performance and muscle-building guides"],
                  ["Budget fitness", "\"Get fit for under $50 total\" — minimal equipment programs"],
                ].map(([niche, positioning]) => (
                  <tr key={niche} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{niche}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{positioning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 3 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How to Validate Your Niche Before Building Products
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Choosing a niche and building a product are two separate decisions. Before you spend
            weeks creating a PDF program or video course, spend one to two weeks validating that
            real demand exists. These five steps, done in order, take less than a week and tell
            you what months of building cannot.
          </p>

          <div className="space-y-5 my-6">
            {[
              {
                n: 1,
                title: "Search Instagram hashtags",
                body: "Search #[yourniche] on Instagram and look for accounts with 10,000+ followers and comments that show genuine engagement — questions, personal stories, gratitude. If multiple creators exist and their audiences are active, the demand is real. If you find nothing, the niche may be too narrow or too early.",
              },
              {
                n: 2,
                title: "Check Google Trends",
                body: "Enter your core niche keyword into Google Trends and look at the 5-year view. A flat or rising line means consistent or growing search demand. A declining line means the audience is shrinking — valid reason to pivot or adjust your angle before investing.",
              },
              {
                n: 3,
                title: "Look at Gumroad and Etsy bestsellers",
                body: "Search \"[niche] workout program\" on Gumroad and Etsy. If similar products exist with reviews and sales counts visible, that is direct proof that people pay for this type of content. You are not looking for a gap in the market — you are looking for evidence that a market exists.",
              },
              {
                n: 4,
                title: "Post three free pieces of content",
                body: "Before building anything, post three Reels or TikToks specifically targeting your niche. Watch which one gets the most saves, shares, and comments. Saves are the highest-signal metric: someone saving your content means they want to come back to it. That is a buying signal.",
              },
              {
                n: 5,
                title: "Pre-sell before you build",
                body: "Announce in a post or Story: \"I'm creating a [niche] program. Who wants early access?\" Include a link to a simple email signup or DM opt-in. If you collect 20 or more signups from people who have never paid you before, the niche is validated. Build the product. If you get two signups, the positioning needs work before you spend time building.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 pt-0.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                    {n}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{title}</p>
                  <p className="text-slate-700 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Niche Scoring Matrix
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            If you are deciding between two or three niche ideas, use this scoring matrix to make
            the decision concrete rather than instinctive. Score each factor 1–5 based on your
            honest assessment, then add the scores.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Factor</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Questions to ask</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Score 1–5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Audience size",
                    "Is this audience large enough? (100,000+ people on Instagram is a reasonable floor)",
                    "",
                  ],
                  [
                    "Pain intensity",
                    "How urgently do they need a solution? A back injury is more urgent than wanting six-pack abs.",
                    "",
                  ],
                  [
                    "Willingness to pay",
                    "Do they already spend money on fitness products, supplements, gym memberships?",
                    "",
                  ],
                  [
                    "Competition level",
                    "Are there other creators in this space? (Competitors prove the market — no competition often means no market.)",
                    "",
                  ],
                  [
                    "Your expertise",
                    "Do you have lived experience, professional credentials, or documented results in this niche?",
                    "",
                  ],
                ].map(([factor, question]) => (
                  <tr key={factor} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{factor}</td>
                    <td className="border border-slate-200 p-3 text-slate-600">{question}</td>
                    <td className="border border-slate-200 p-3 text-slate-400 text-center">__/5</td>
                  </tr>
                ))}
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-3 font-bold text-slate-900" colSpan={2}>Total</td>
                  <td className="border border-slate-200 p-3 font-bold text-slate-900 text-center">__/25</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            <strong>18 or higher:</strong> Strong niche. Build for it.
            <br />
            <strong>12–17:</strong> Viable but requires refinement. Identify the lowest-scoring
            factor and address it — usually either your own expertise (solvable with time) or
            audience size (solvable by broadening slightly).
            <br />
            <strong>Under 12:</strong> Reconsider. Either the niche is too small, the pain is
            too low-urgency, or you do not yet have the credibility to charge premium prices in
            that space.
          </p>

          {/* Section 5 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            From Niche to First Digital Product
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Once your niche is validated, the next question is what to build first. The answer
            is almost always the same: create one product that solves the single most urgent
            problem for your niche audience. Not a course. Not a membership. One product.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            A 4-week PDF program is faster to produce than a video course, easier to update, and
            easier to price test. Video courses have a higher perceived ceiling but significantly
            higher production costs — in time, equipment, and editing. For a first product, a
            well-structured PDF or spreadsheet with clear explanations and photos outperforms a
            hastily produced video series every time.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Pricing follows the pain intensity of the niche:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>High-pain niches</strong> (prenatal fitness, seniors with injuries,
              postpartum recovery, chronic pain): these audiences have a clear, urgent need
              and will pay $97–$297 for a program that speaks directly to their situation.
              They have likely already spent money on solutions that did not work.
            </li>
            <li>
              <strong>Mid-pain niches</strong> (fat loss, muscle building, posture correction,
              marathon training): $49–$97 is the sweet spot. The problem is real but not
              medically urgent. Buyers need social proof and clear outcomes before committing.
            </li>
            <li>
              <strong>Lifestyle niches</strong> (yoga, walking, flexibility, budget fitness):
              $29–$67 is typical. The motivation is improvement rather than relief. Lower
              price friction reduces the commitment barrier and increases volume.
            </li>
          </ul>
          <p className="mb-4 text-slate-700 leading-relaxed">
            When you list your product, include your niche in the title and description. &ldquo;12-Week
            Strength Program for Women Over 50&rdquo; will rank in search results and convert better than
            &ldquo;12-Week Strength Program.&rdquo; Every word in your title is either helping your buyer
            self-select or adding friction.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Creatdrop is built for exactly this — fitness coaches who have a specific niche and a
            product ready to sell, without needing a full e-commerce stack or paying platform
            fees on every transaction. Upload your PDF, set your price, and your product is live
            in minutes.
          </p>
        </div>

        {/* CTA section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to Sell in Your Niche?</h2>
          <p className="mb-6 text-slate-600">
            Creatdrop is built for fitness creators who want to sell digital products — no monthly
            fee, instant delivery.
          </p>
          <WaitlistForm source="blog-fitness-niche-ideas" />
        </section>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Keep reading
          </p>
          <div className="space-y-3">
            <Link
              href="/blog/sell-workout-programs-online"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                How to Sell Workout Programs Online in 2026 &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                From file to checkout link in 10 minutes.
              </p>
            </Link>
            <Link
              href="/blog/digital-products-personal-trainers"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                Digital Products for Personal Trainers: What to Sell and How to Price It &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                8 product types with full pricing benchmarks.
              </p>
            </Link>
            <Link
              href="/blog/how-to-price-fitness-programs"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                How to Price Fitness Programs: The Complete Guide &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Data-backed pricing ranges for every product type.
              </p>
            </Link>
            <Link
              href="/blog/passive-income-fitness-coach"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                Passive Income for Fitness Coaches: The Digital Products Playbook &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                How to earn while you sleep with one product and an audience.
              </p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
