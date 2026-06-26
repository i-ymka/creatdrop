import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Write a Fitness Ebook in 2026: From Blank Page to Bestseller",
  description:
    "A fitness ebook is the fastest digital product to create and sell. Here's how to write one that buyers recommend to their friends — outline, design, and launch included.",
  alternates: {
    canonical: "https://creatdrop.com/blog/how-to-write-fitness-ebook",
  },
  openGraph: {
    title: "How to Write a Fitness Ebook in 2026: From Blank Page to Bestseller",
    description:
      "A fitness ebook is the fastest digital product to create and sell. Here's how to write one that buyers recommend to their friends — outline, design, and launch included.",
    url: "https://creatdrop.com/blog/how-to-write-fitness-ebook",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write a Fitness Ebook in 2026: From Blank Page to Bestseller",
    description:
      "A fitness ebook is the fastest digital product to create and sell. Here's how to write one that buyers recommend to their friends — outline, design, and launch included.",
  },
}

export default function HowToWriteFitnessEbook() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
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
          <span className="text-slate-700">Digital Products</span>
        </nav>

        {/* Category */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-600">
          Digital Products
        </p>

        {/* H1 */}
        <h1 className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How to Write a Fitness Ebook in 2026: From Blank Page to Bestseller
        </h1>

        {/* Intro */}
        <p className="mb-10 text-lg text-slate-700 leading-relaxed">
          A fitness ebook is the fastest path from "I have knowledge" to "I have income." You can
          write one in a weekend, design it in an afternoon, and have it listed for sale by Monday.
          Here's exactly how.
        </p>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What makes a fitness ebook sell (vs. get abandoned)
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Most fitness ebooks fail not because the content is bad — they fail because the content
            is vague. The difference between a $9 ebook that 50 people buy and abandon and a $47
            ebook that 50 people buy and recommend comes down to five things:
          </p>
          <ul className="mb-4 space-y-4 text-slate-700 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Specific promise.</strong> Not "get fit" but
                "lose 10 lbs without counting calories in 8 weeks." The more specific the
                transformation, the easier the buying decision.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Actionable steps, not just information.</strong>{" "}
                Every chapter should leave the buyer able to do something — not just know something.
                Information is free on YouTube. Action is what they pay for.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Progress tracking built in.</strong> Worksheets,
                training logs, weekly check-in checklists — anything that makes the reader feel like
                they're moving forward keeps them engaged and increases completion rates.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Visual appeal.</strong> Readers judge the quality
                of the content by the design. A well-designed 40-page ebook will outsell a
                poorly-formatted 80-page one every time.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Short enough to finish.</strong> 30–60 pages is
                the sweet spot. Not 200. A book they complete is a book they recommend. A book they
                don't finish is a refund request waiting to happen.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Fitness ebook topic ideas that sell
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            You don't need to invent a new fitness philosophy. You need to pick a specific audience
            with a specific problem and solve it better than what's already out there. Here are eight
            proven topic categories with real market data:
          </p>
          <div className="mb-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Topic
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Target audience
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Avg price
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Demand
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Beginner strength training guide
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">Gym beginners</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$19–$47</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Very high</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Fat loss nutrition guide
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Broad fitness audience
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">$19–$37</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Very high</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Home workout program (4–8 weeks)
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">Non-gym audience</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$29–$67</td>
                  <td className="border border-slate-200 p-3 text-slate-700">High</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Flexible dieting / IIFYM guide
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">Intermediate</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$19–$37</td>
                  <td className="border border-slate-200 p-3 text-slate-700">High</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Prenatal workout guide
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">Pregnant women</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$37–$97</td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Medium (high RPM)
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Meal prep guide</td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Busy professionals
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">$19–$37</td>
                  <td className="border border-slate-200 p-3 text-slate-700">High</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Sport-specific training
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">Niche athletes</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$37–$97</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Medium</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Mindset and motivation for fitness
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">Broad</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$9–$29</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The highest-earning ebooks tend to combine training and nutrition — even a short
            nutrition chapter boosts perceived value and allows a higher price point.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Outline your ebook in 30 minutes
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Don't stare at a blank page. Use this template structure — it works for virtually every
            fitness topic and gives you a complete skeleton before you write a single sentence.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-900">Introduction</p>
                <p className="text-slate-700 leading-relaxed">
                  Who this is for, what they'll achieve, and why your approach works. Keep it brief
                  — 2–3 pages. Readers want to get to the good stuff.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-900">The problem</p>
                <p className="text-slate-700 leading-relaxed">
                  Why they"ve struggled before and what"s been missing from the advice they've
                  followed. This chapter builds trust and validates the purchase — 2–3 pages.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-900">The framework</p>
                <p className="text-slate-700 leading-relaxed">
                  Your core method, explained simply. This is the "how it works" chapter — not the
                  plan itself, but the principles behind it. 3–5 pages.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="font-semibold text-slate-900">The plan</p>
                <p className="text-slate-700 leading-relaxed">
                  Week-by-week or phase-by-phase breakdown. This is the bulk of the ebook —
                  15–30 pages. Each week should include workouts, notes on progression, and a
                  tracking section.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="font-semibold text-slate-900">Nutrition basics</p>
                <p className="text-slate-700 leading-relaxed">
                  Even workout-focused ebooks sell better with at least one nutrition chapter. Cover
                  protein targets, meal timing, and one practical framework like plate ratios or
                  hand-size portions. 3–5 pages.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                6
              </span>
              <div>
                <p className="font-semibold text-slate-900">Troubleshooting</p>
                <p className="text-slate-700 leading-relaxed">
                  Answer the questions buyers ask before they leave a bad review: "What if I miss a
                  week?" "What if I don't see results?" "What if an exercise hurts?" Anticipating
                  these questions reduces refunds. 2–3 pages.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                7
              </span>
              <div>
                <p className="font-semibold text-slate-900">Next steps + CTA</p>
                <p className="text-slate-700 leading-relaxed">
                  Where to go after finishing the ebook — your paid coaching, your next product, your
                  community. Every ebook should point toward the next thing. 1–2 pages.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-slate-700 leading-relaxed">
            Following this structure gives you a 30–55 page ebook. That's the right length — long
            enough to justify the price, short enough to be finished.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Writing the ebook (the fast way)
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The biggest mistake fitness creators make is trying to write like an academic. Your
            readers know you from Instagram or TikTok — they bought the ebook because they trust
            your voice, not because they want a textbook. Write how you talk.
          </p>
          <ul className="mb-6 space-y-3 text-slate-700 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                Use <strong className="text-slate-900">Google Docs</strong> for writing — it's free,
                auto-saves, and is easy to share with an editor or VA.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                Target <strong className="text-slate-900">300–500 words per chapter section.</strong>{" "}
                This keeps individual sections tight and prevents rambling.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Write first, edit second.</strong> Do not edit
                while writing — it kills momentum. Get a complete rough draft before touching
                anything.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Batch your sessions.</strong> Write the whole
                rough draft in 2–3 focused sessions, then edit in one separate session. Switching
                between writer-mode and editor-mode in the same sitting wastes time.
              </span>
            </li>
          </ul>
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-5 mb-6">
            <p className="font-semibold text-violet-900 mb-1">Tip: use voice-to-text for your first draft</p>
            <p className="text-violet-800 leading-relaxed text-sm">
              If you can explain an exercise verbally, dictate it. Most people speak 3x faster than
              they type. Record yourself coaching through each chapter, then clean up the
              transcript. The result reads naturally because it actually is natural — it's your
              coaching voice, captured.
            </p>
          </div>
          <p className="mb-4 text-slate-700 leading-relaxed">
            A realistic timeline: rough draft in two weekend days, editing on Monday evening, design
            Tuesday. That's a live product by Wednesday. Most people spend six months overthinking
            it and never publish.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Designing your ebook (Canva, fast)
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            You don't need a graphic designer. Canva has done most of the work for you — search
            "fitness ebook" in the Canva template library and you'll find dozens of professionally
            designed layouts you can customize in hours.
          </p>
          <ul className="mb-6 space-y-3 text-slate-700 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Brand colors:</strong> pick 2–3 colors max. Most
                fitness ebooks use black, white, and one accent color. More than three colors looks
                chaotic.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Exercise photos:</strong> use your own or
                licensed stock. Unsplash and Pexels are free and have solid fitness photography.
                Real photos of you coaching are always more compelling than stock.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Typography:</strong> one heading font, one body
                font. Canva"s default font pairing suggestions work well — don"t overthink this.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 flex-shrink-0 text-violet-600 font-bold">—</span>
              <span>
                <strong className="text-slate-900">Export as PDF</strong> at print quality (300 DPI)
                for selling. This ensures the file looks sharp on every screen and when printed.
              </span>
            </li>
          </ul>
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-5 mb-4">
            <p className="font-semibold text-violet-900 mb-3">Design checklist before you export</p>
            <ul className="space-y-2 text-violet-800 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="font-bold">—</span>
                <span>Cover page with title, subtitle, your name and photo</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">—</span>
                <span>Table of contents (clickable in PDF — Canva supports this)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">—</span>
                <span>Chapter header pages as visual breaks between sections</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">—</span>
                <span>Body text at 11–12pt for comfortable readability on screen</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">—</span>
                <span>Consistent margins (1 inch / 2.5 cm) on all pages</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">—</span>
                <span>Progress tracker and worksheet pages built into the plan section</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Pricing your fitness ebook
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Price based on the transformation you're delivering, not the page count. A 35-page
            ebook that actually gets someone their first pull-up is worth more than a 120-page
            ebook full of generic information.
          </p>
          <div className="mb-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Ebook type
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Pages
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">
                    Price range
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Short guide
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">20–30 pages</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$9–$19</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Standard program
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">40–60 pages</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$29–$47</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Premium program + worksheets
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">60–80 pages</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$47–$97</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Complete system + bonus content
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">80+ pages</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$67–$147</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-slate-700 leading-relaxed">
            <strong className="text-slate-900">Pricing psychology:</strong> $47 is a sweet spot for
            fitness ebooks. It's high enough to signal that this is a real program worth taking
            seriously, and low enough to be an impulse purchase for a motivated buyer who just
            finished watching your Instagram Reel. Price at $47 before you have social proof, then
            consider moving to $67 once you have 20+ testimonials.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Avoid pricing below $9. Low prices attract buyers who are not committed to the program,
            which leads to worse outcomes, fewer referrals, and more refund requests.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Launching your ebook</h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            A good launch doesn't require a big audience. It requires a consistent sequence of
            touchpoints that move people from awareness to purchase. Here's the six-step sequence
            that works for fitness creators regardless of audience size:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-900">Write a strong product description</p>
                <p className="text-slate-700 leading-relaxed">
                  Lead with the transformation, not the page count. "8 weeks to your first
                  unassisted pull-up" beats "47-page strength training ebook" every time. Put the
                  transformation in the headline and use bullet points to list what's inside.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-900">Create 3 social posts before launch</p>
                <p className="text-slate-700 leading-relaxed">
                  Post one problem-awareness post ("Why most beginners plateau in week 3"), one
                  solution-teaser post ("Here"s the framework I"m putting in my ebook"), and one
                  direct-sale post on launch day. Space them over 5–7 days.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-900">Set an early bird price</p>
                <p className="text-slate-700 leading-relaxed">
                  Offer $10 off for the first 48 hours. This creates genuine urgency, rewards your
                  most engaged followers, and generates your first round of testimonials quickly.
                  State the deadline clearly and honor it.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="font-semibold text-slate-900">Email your list</p>
                <p className="text-slate-700 leading-relaxed">
                  Even if you only have 50 subscribers, email them. An email list converts at 3–5%
                  vs 0.5–1% for social media. 50 subscribers seeing a launch email is a real
                  number — don"t dismiss it. If you don"t have a list yet, start one before your
                  next launch.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="font-semibold text-slate-900">Add the link everywhere</p>
                <p className="text-slate-700 leading-relaxed">
                  Instagram bio, TikTok bio, YouTube description, email signature, pinned comment on
                  your top posts. Every piece of content you've ever posted is a potential discovery
                  point — make sure all roads lead to the product page.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                6
              </span>
              <div>
                <p className="font-semibold text-slate-900">Collect testimonials from first buyers</p>
                <p className="text-slate-700 leading-relaxed">
                  Message your first buyers 2–3 weeks in and ask how it's going. Even a short
                  quote — "it was exactly what I needed" plus a first name — is social proof that
                  converts the next buyer. One testimonial on your product page can increase
                  conversions by 20–30%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Sell Your Ebook on Creatdrop</h2>
          <p className="mb-6 text-slate-600">
            Instant PDF delivery, 0% Creatdrop commission, built for fitness creators. Your ebook can be
            live in under 10 minutes.
          </p>
          <WaitlistForm source="blog-how-to-write-fitness-ebook" />
        </section>

        {/* Related articles */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/sell-fitness-ebooks-online"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">
                Digital Products
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug">
                How to Sell Fitness Ebooks Online in 2026
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Set up, price, and distribute your PDF program while keeping 100% of every sale.
              </p>
            </Link>
            <Link
              href="/blog/digital-products-personal-trainers"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">
                Business
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug">
                Digital Products for Personal Trainers
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                The six digital product types trainers use to build income that doesn't require
                more hours.
              </p>
            </Link>
            <Link
              href="/blog/how-to-price-fitness-programs"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">
                Pricing
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug">
                How to Price Fitness Programs
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Why most fitness creators underprice — and the framework for finding your right
                number.
              </p>
            </Link>
            <Link
              href="/blog/sell-fitness-templates-online"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">
                Digital Products
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors leading-snug">
                How to Sell Fitness Templates Online
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Training logs, meal prep sheets, habit trackers — templates are the fastest
                digital product to create and the easiest to upsell.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
