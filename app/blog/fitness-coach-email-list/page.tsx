import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Email List: How to Build, Grow, and Monetize | Creatdrop",
  description: "An email list is the most valuable asset a fitness coach can own. How to build your list from zero, grow it with lead magnets, and convert subscribers into digital product buyers.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Email List</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Email List: How to Build, Grow, and Monetize</h1>
      <p className="mb-10 text-lg text-slate-600">
        Every fitness coach who earns consistent revenue from digital products has one thing in
        common: an email list. Not Instagram followers, not YouTube subscribers — an email list.
        Social platforms change algorithms, reduce reach, and can ban accounts overnight. An email
        list is an asset you own permanently. Here is how to build it, grow it, and use it to
        generate predictable revenue from your programs.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Why Email Outperforms Every Social Platform</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Platform</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Typical Reach Rate</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Click-Through Rate</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">You Own It?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email</td>
              <td className="border border-slate-200 p-3 text-slate-600">35–55% open rate</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–5% CTR</td>
              <td className="border border-slate-200 p-3 text-slate-600 font-semibold text-green-700">Yes</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Instagram</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–8% of followers</td>
              <td className="border border-slate-200 p-3 text-slate-600">0.5–1% CTR</td>
              <td className="border border-slate-200 p-3 text-slate-600 text-red-600">No</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">TikTok</td>
              <td className="border border-slate-200 p-3 text-slate-600">Algorithm-dependent</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very low (bio link only)</td>
              <td className="border border-slate-200 p-3 text-slate-600 text-red-600">No</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">YouTube</td>
              <td className="border border-slate-200 p-3 text-slate-600">20–40% of subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2% CTR (description links)</td>
              <td className="border border-slate-200 p-3 text-slate-600 text-red-600">No</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Facebook</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–5% of page likes</td>
              <td className="border border-slate-200 p-3 text-slate-600">0.5–1% CTR</td>
              <td className="border border-slate-200 p-3 text-slate-600 text-red-600">No</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-slate-600">
        A fitness coach with 1,000 email subscribers typically generates more revenue from a single
        product launch than a coach with 10,000 Instagram followers. The relationship is not 10:1
        — it is closer to email being 5–10x more valuable per subscriber than social followers,
        because email subscribers chose to give you their contact information and expect to hear from you.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Step 1: Choose a Lead Magnet That Converts</h2>
      <p className="mb-4 text-slate-600">
        A lead magnet is the free offer you give in exchange for an email address. The quality
        of your lead magnet determines the quality and quantity of your subscribers. The best
        fitness lead magnets share three traits: specific promise, fast delivery of value, and
        direct connection to your paid product.
      </p>
      <div className="mb-8 space-y-3">
        {[
          { type: "5-day challenge", example: "\"5-Day Hip Mobility Fix\" or \"5-Day Home Workout Starter\"", note: "Highest converting lead magnet format for fitness. Creates a habit, delivers immediate value, and has a natural endpoint where paid programming is introduced." },
          { type: "Free guide or PDF", example: "\"The Beginner's Guide to Pelvic Floor Training\" or \"10 Exercises to Fix Lower Back Pain\"", note: "Lower friction than a challenge — no daily commitment required. Works better for pain-point audiences where someone wants an immediate answer, not a program." },
          { type: "Free sample workout", example: "\"Free Week 1 of My 8-Week HIIT Program\"", note: "The best quality signal for a paid program. Letting someone experience your coaching style before they buy dramatically increases purchase confidence." },
          { type: "Recipe or meal plan PDF", example: "\"7-Day High-Protein Meal Plan for Lifters\"", note: "Extremely high conversion rate because nutrition content is universally sought after. Works well as a secondary lead magnet that attracts fitness buyers from outside your primary audience." },
          { type: "Quiz or assessment", example: "\"What's Your Fitness Archetype?\" or \"Find Your Ideal Training Style\"", note: "Interactive lead magnets have 2-3x higher completion rates than static downloads. Particularly effective for coaches who want to segment their audience by goal or fitness level." },
        ].map((item) => (
          <div key={item.type} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.type}</p>
            <p className="mt-1 text-xs text-violet-600 font-medium">Example: {item.example}</p>
            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Step 2: Set Up Your Email Sequence</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Email #</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Timing</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Purpose</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">1 — Welcome</td>
              <td className="border border-slate-200 p-3 text-slate-600">Immediately</td>
              <td className="border border-slate-200 p-3 text-slate-600">Deliver lead magnet, set expectations</td>
              <td className="border border-slate-200 p-3 text-slate-600">Lead magnet link, brief intro, what's coming</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">2 — Story</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 2</td>
              <td className="border border-slate-200 p-3 text-slate-600">Build trust and connection</td>
              <td className="border border-slate-200 p-3 text-slate-600">Your personal story and why you coach</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">3 — Value</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 4</td>
              <td className="border border-slate-200 p-3 text-slate-600">Demonstrate expertise</td>
              <td className="border border-slate-200 p-3 text-slate-600">Your best tip, a mini-lesson, or a quick win</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">4 — Social proof</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 6</td>
              <td className="border border-slate-200 p-3 text-slate-600">Build credibility through results</td>
              <td className="border border-slate-200 p-3 text-slate-600">Client transformation story or testimonial</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">5 — Offer</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 8</td>
              <td className="border border-slate-200 p-3 text-slate-600">Convert subscriber to buyer</td>
              <td className="border border-slate-200 p-3 text-slate-600">Introduce your core product with a clear CTA</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">6 — Objection handling</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 10</td>
              <td className="border border-slate-200 p-3 text-slate-600">Address "not yet" subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">FAQ, common doubts answered, repeat offer</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">7 — Ongoing value</td>
              <td className="border border-slate-200 p-3 text-slate-600">Weekly</td>
              <td className="border border-slate-200 p-3 text-slate-600">Maintain relationship until next purchase</td>
              <td className="border border-slate-200 p-3 text-slate-600">Tips, content, non-promotional value</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Growing Your List: Channels That Work</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Optimize every social bio and video description", desc: "Every piece of content you create should have a clear path to your lead magnet. Instagram bio link, YouTube description link, TikTok bio link — all pointing to your lead magnet landing page. This is the lowest-friction list-building activity and should be set up before anything else." },
          { step: "2", title: "Mention your lead magnet in video content", desc: "YouTube creators who verbally mention their lead magnet in videos (\"I've linked my free hip mobility guide in the description\") see 3-5x more sign-ups than those who rely on passive description links. Mention it naturally, once, and include the link." },
          { step: "3", title: "Use Story swipe-ups and link stickers on Instagram", desc: "Instagram Stories with a link sticker to a lead magnet landing page convert at 2-4%. Consistently posting lead magnet Stories once or twice per week compounds into meaningful list growth without paid advertising." },
          { step: "4", title: "Run a free challenge that requires email sign-up", desc: "A free challenge is both a lead magnet and a community-building event. \"Join my free 5-day challenge — sign up at the link below\" gives people a reason to give you their email immediately, and the challenge format creates shared experience that builds loyalty." },
          { step: "5", title: "Partner with complementary creators for list swaps", desc: "Find coaches in adjacent niches — a nutritionist for a fitness coach, a sleep specialist for a recovery coach — and cross-promote lead magnets to each other's audiences. A list swap to 2,000 aligned subscribers can add hundreds of new email subscribers in a single week." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
              {item.step}
            </div>
            <div>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Email Revenue Benchmarks for Fitness Coaches</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">List Size</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Monthly Revenue (Evergreen)</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Launch Revenue (Quarterly)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">500 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$500/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$1,000–$3,000</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">2,000 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$800–$2,000/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$4,000–$10,000</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">5,000 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$2,000–$5,000/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$10,000–$25,000</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">10,000 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$4,000–$10,000/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$20,000–$50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-slate-600">
        These estimates assume a well-set-up evergreen email sequence, a quality lead magnet
        attracting relevant subscribers, and quarterly product launches to the full list. Coaches
        with strong launch strategies and multiple products consistently outperform these
        benchmarks. Coaches who send only promotional emails (no value content) consistently
        underperform.
      </p>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to monetize your email list?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-email-list" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/personal-trainer-email-marketing" className="text-violet-600 hover:underline">
              Personal Trainer Email Marketing
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-lead-magnet" className="text-violet-600 hover:underline">
              Fitness Coach Lead Magnet Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-sales-funnel" className="text-violet-600 hover:underline">
              Fitness Coach Sales Funnel
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-monetize-fitness-content" className="text-violet-600 hover:underline">
              How to Monetize Fitness Content
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
