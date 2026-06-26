import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Content Calendar: How to Plan 30 Days of Content in 2 Hours | Creatdrop",
  description: "A content calendar is the difference between coaches who post consistently and coaches who disappear for weeks. How to plan, batch, and schedule 30 days of fitness content.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Content Calendar</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Content Calendar: How to Plan 30 Days of Content in 2 Hours</h1>
      <p className="mb-10 text-lg text-slate-600">
        Inconsistency kills audience growth. A fitness coach who posts 5 times one week and nothing
        for two weeks trains their audience to ignore them. A content calendar eliminates the daily
        "what do I post?" paralysis, ensures consistency even during busy weeks, and turns content
        creation from a stressful daily task into a predictable system. Here is how to build one
        that actually gets used.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Content Pillar Framework</h2>
      <p className="mb-4 text-slate-600">
        Before scheduling content, define 4–5 content pillars — recurring themes that every piece
        of content fits into. Pillars ensure variety, prevent creative fatigue, and train your
        audience to expect different types of value from you.
      </p>
      <div className="mb-8 space-y-3">
        {[
          { pillar: "Education", example: "\"Why your body stores fat in your midsection\" / \"3 mistakes new lifters make\"", desc: "Establishes expertise and drives saves/shares on social media. Evergreen content that performs well on Pinterest and YouTube long after posting." },
          { pillar: "Demonstration", example: "\"How to do a perfect Romanian deadlift\" / \"Try this hip mobility drill\"", desc: "Shows your skill as a coach and builds credibility. Video performs best; demos are the top-performing content format for fitness coaches on all platforms." },
          { pillar: "Inspiration / Transformation", example: "Client before/after / personal training milestone / a week in my training life", desc: "Builds emotional connection and trust. Testimonials here double as social proof for product sales." },
          { pillar: "Behind the scenes / personal", example: "\"How I train at 5am\" / \"What I eat in a day\" / \"My biggest coaching mistake\"", desc: "Creates parasocial connection that turns followers into loyal buyers. Coaches who share their genuine perspective outperform polished \"brand\" accounts." },
          { pillar: "Promotion", example: "Product announcement / waitlist opening / limited-time offer", desc: "Should represent no more than 20% of total content. Audiences tolerate promotion when the other 80% is genuinely valuable. Too much promotion without value destroys trust." },
        ].map((item) => (
          <div key={item.pillar} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.pillar}</p>
            <p className="mt-1 text-xs text-violet-600 font-medium">Examples: {item.example}</p>
            <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Platform-Specific Posting Frequencies</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Platform</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Minimum Frequency</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Optimal Frequency</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best Content Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Instagram Feed</td>
              <td className="border border-slate-200 p-3 text-slate-600">3x/week</td>
              <td className="border border-slate-200 p-3 text-slate-600">5x/week</td>
              <td className="border border-slate-200 p-3 text-slate-600">Reels, carousels</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Instagram Stories</td>
              <td className="border border-slate-200 p-3 text-slate-600">Daily</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–5 stories/day</td>
              <td className="border border-slate-200 p-3 text-slate-600">Behind scenes, polls, links</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">TikTok</td>
              <td className="border border-slate-200 p-3 text-slate-600">5x/week</td>
              <td className="border border-slate-200 p-3 text-slate-600">Daily (1–2x)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Short demos, education, hooks</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">YouTube</td>
              <td className="border border-slate-200 p-3 text-slate-600">1x/week</td>
              <td className="border border-slate-200 p-3 text-slate-600">2x/week</td>
              <td className="border border-slate-200 p-3 text-slate-600">Long workouts, tutorials, vlogs</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email newsletter</td>
              <td className="border border-slate-200 p-3 text-slate-600">Biweekly</td>
              <td className="border border-slate-200 p-3 text-slate-600">Weekly</td>
              <td className="border border-slate-200 p-3 text-slate-600">Value content + product mentions</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Pinterest</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–5x/week</td>
              <td className="border border-slate-200 p-3 text-slate-600">10–15x/week</td>
              <td className="border border-slate-200 p-3 text-slate-600">Infographics, blog graphics, workout pins</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 2-Hour Monthly Planning System</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Block 2 hours on the last Friday of the month (30 min)", desc: "Schedule your monthly content planning session as a recurring calendar event. Treat it like a client appointment — non-negotiable. Most coaches who say they \"don't have time\" for content planning spend more time in reactive, day-by-day content stress than they would in a single focused planning session." },
          { step: "2", title: "Review last month's performance (15 min)", desc: "Check your analytics: which posts got the most saves, shares, and follows? Which drove link clicks? Which flopped? This 15-minute review tells you what to do more of and what to stop wasting time on. Do not skip this step — it compounds your improvement monthly." },
          { step: "3", title: "Map out the month using your content pillars (30 min)", desc: "Create a simple spreadsheet or Notion table with dates and platforms. Fill in your promotional dates first (launches, waitlist openings, sale periods). Then distribute the four content pillars across remaining slots. Aim for the 80/20 split: 80% value, 20% promotion." },
          { step: "4", title: "Write all captions and scripts in one session (45 min)", desc: "Batching copy creation is dramatically more efficient than writing one caption per day. With your topics already mapped, write all 30 captions or video scripts in a single session. Quality may feel lower in batch mode, but consistency and completion rates are much higher." },
          { step: "5", title: "Film in 1–2 batch sessions per month (remaining time)", desc: "Film all video content in 1–2 sessions rather than daily. Batch filming reduces setup time, maintains a consistent background and lighting, and allows you to stay in \"content creation mode\" rather than context-switching in and out of coach mode multiple times per week." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Content Ideas by Month</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Month</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Primary Theme</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Launch Opportunity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">January</td>
              <td className="border border-slate-200 p-3 text-slate-600">New year habit building, beginner content</td>
              <td className="border border-slate-200 p-3 text-slate-600">Beginner programs, transformation challenges</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">March/April</td>
              <td className="border border-slate-200 p-3 text-slate-600">Spring body composition, "summer prep"</td>
              <td className="border border-slate-200 p-3 text-slate-600">Fat loss programs, 12-week challenges</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">September</td>
              <td className="border border-slate-200 p-3 text-slate-600">"Back to routine" after summer</td>
              <td className="border border-slate-200 p-3 text-slate-600">Recommitment programs, membership relaunches</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">November</td>
              <td className="border border-slate-200 p-3 text-slate-600">Maintenance during holidays</td>
              <td className="border border-slate-200 p-3 text-slate-600">Holiday programs, gift-able digital products</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to monetize your content?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-content-calendar" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-content-ideas" className="text-violet-600 hover:underline">
              Fitness Content Ideas for Coaches
            </Link>
          </li>
          <li>
            <Link href="/blog/personal-trainer-social-media" className="text-violet-600 hover:underline">
              Personal Trainer Social Media Strategy
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-instagram-growth" className="text-violet-600 hover:underline">
              Fitness Coach Instagram Growth
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
