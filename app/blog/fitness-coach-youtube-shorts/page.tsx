import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "YouTube Shorts for Fitness Coaches in 2026: How to Grow and Sell From Short Video | Creatdrop",
  description: "YouTube Shorts give fitness coaches search-driven discovery AND long-form trust-building. How to use Shorts to grow an audience and convert viewers into buyers.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>YouTube Shorts for Fitness Coaches</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Content Creation</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">YouTube Shorts for Fitness Coaches in 2026: How to Grow and Sell From Short Video</h1>
      <p className="mb-10 text-lg text-slate-600">
        YouTube Shorts is the only short-form video platform where a viral clip feeds directly
        into a long-form content library. A fitness coach who goes viral on TikTok gains followers
        who may never buy. A coach who goes viral on YouTube Shorts gains subscribers who can
        immediately watch 50 other videos, build deep trust, and buy from a description link.
        That asymmetry is why Shorts deserves a dedicated strategy.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">YouTube Shorts vs TikTok vs Instagram Reels</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Platform</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Subscriber Value</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Link Placement</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Long-form Bridge</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Search Discovery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">YouTube Shorts</td>
              <td className="border border-slate-200 p-3 text-slate-600">High — access full channel</td>
              <td className="border border-slate-200 p-3 text-slate-600">Description + pinned comment</td>
              <td className="border border-slate-200 p-3 text-slate-600">Direct — same channel</td>
              <td className="border border-slate-200 p-3 text-slate-600">Yes — YouTube search</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">TikTok</td>
              <td className="border border-slate-200 p-3 text-slate-600">Low — siloed platform</td>
              <td className="border border-slate-200 p-3 text-slate-600">Bio only</td>
              <td className="border border-slate-200 p-3 text-slate-600">None</td>
              <td className="border border-slate-200 p-3 text-slate-600">Limited</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Instagram Reels</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium — profile access</td>
              <td className="border border-slate-200 p-3 text-slate-600">Bio link only</td>
              <td className="border border-slate-200 p-3 text-slate-600">None</td>
              <td className="border border-slate-200 p-3 text-slate-600">Minimal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">7 Short Types That Perform for Fitness Coaches</h2>
      <div className="mb-8 space-y-3">
        {[
          { type: "60-second workout", desc: "A complete mini-workout viewers can do immediately. Format: problem → solution → demonstration. \"Got 60 seconds? Do this for your lower back.\" These get saved and returned to." },
          { type: "Common mistake correction", desc: "\"Everyone does X wrong. Here is the fix.\" High watch-through rate because viewers want to know if they are making the mistake. Easy to produce — no equipment, just knowledge." },
          { type: "Before/after transformation", desc: "Client result stories in 60 seconds. Timeline, method, result. Clear social proof that your programs work. High share rate when viewers tag people in similar situations." },
          { type: "Myth busting", desc: "\"You do NOT need to eat less to lose weight. Here is what actually matters.\" Controversy drives comments and algorithm distribution. Pick positions you can defend credibly." },
          { type: "Quick tip / single insight", desc: "One technique, one cue, one habit. \"Hold your breath at the top of a deadlift — here is why.\" Specific and actionable beats generic every time." },
          { type: "Day in the life", desc: "What a fitness coach actually does in a day — training, content, client work. Strong parasocial trust-builder. Converts cold viewers to warm followers faster than educational content." },
          { type: "Teaser for long-form video", desc: "\"The full breakdown is on my channel.\" Cut 60 seconds from a long-form video that creates curiosity without resolving it. Drives subscribers to your main content." },
        ].map((item) => (
          <div key={item.type} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.type}</p>
            <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Hook Formula for Fitness Shorts</h2>
      <p className="mb-4 text-slate-600">
        The first 1-2 seconds determine whether someone swipes or watches. Fitness coaches
        consistently win with hooks that make a specific, surprising claim or ask a question
        the target viewer is already thinking. Formulas that work:
      </p>
      <div className="mb-8 space-y-3">
        {[
          { formula: "\"Stop [doing X].\" (pattern interrupt)", example: "\"Stop doing crunches for abs.\" Immediately stops the scroll — viewer either agrees (and feels validated) or disagrees (and watches to argue)." },
          { formula: "\"[Number] things [target audience] gets wrong.\"", example: "\"3 things beginners get wrong about protein.\" Specific audience + specific number + implied expertise = high click rate." },
          { formula: "\"If you [condition], watch this.\"", example: "\"If you have been lifting for over a year and not making gains, watch this.\" Pre-qualifies the exact viewer you want." },
          { formula: "\"The real reason [common belief is wrong].\"", example: "\"The real reason you are not losing weight has nothing to do with calories.\" Challenges assumption, forces viewer to watch for the reveal." },
          { formula: "\"[Timeframe] to [specific result] — no [equipment/gym/diet].\"", example: "\"30 days to a stronger core — no crunches, no gym required.\" Promise + accessibility = maximum beginner appeal." },
        ].map((item) => (
          <div key={item.formula} className="rounded-xl border border-slate-200 p-4">
            <p className="font-medium text-slate-900">{item.formula}</p>
            <p className="mt-1 text-sm text-slate-600">{item.example}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Content Calendar: Shorts + Long-Form Together</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Day</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Content Type</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Monday</td>
              <td className="border border-slate-200 p-3 text-slate-600">Short — workout tip or quick exercise</td>
              <td className="border border-slate-200 p-3 text-slate-600">Discovery via algorithm</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Wednesday</td>
              <td className="border border-slate-200 p-3 text-slate-600">Long-form — full tutorial or routine (8-20 min)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Trust building + search ranking</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Thursday</td>
              <td className="border border-slate-200 p-3 text-slate-600">Short — myth bust or common mistake</td>
              <td className="border border-slate-200 p-3 text-slate-600">Engagement + comments</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Saturday</td>
              <td className="border border-slate-200 p-3 text-slate-600">Short — teaser for upcoming long-form or product</td>
              <td className="border border-slate-200 p-3 text-slate-600">Subscriber conversion + product awareness</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-slate-600">
        The goal is to use Shorts as the top of the funnel — broad discovery — and long-form
        as the conversion engine. Someone who finds you via a 60-second Short, subscribes,
        then watches a 15-minute program walkthrough is primed to buy. That journey is almost
        impossible to achieve on TikTok or Instagram.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Converting YouTube Viewers to Buyers</h2>
      <p className="mb-4 text-slate-600">
        The YouTube description is your primary sales channel. Every Short and long-form video
        should have the same first three lines:
      </p>
      <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
        <p>Get the full [12-week program / PDF / meal plan]: [your Creatdrop link]</p>
        <p className="mt-1">Free [lead magnet] here: [opt-in link]</p>
        <p className="mt-1">Work with me 1-on-1: [booking link]</p>
        <p className="mt-4 text-slate-500">— then timestamps, gear list, etc.</p>
      </div>
      <p className="mb-4 text-slate-600">
        For Shorts specifically: pin a comment on every video that repeats your product link.
        YouTube descriptions on Shorts are often collapsed — the pinned comment is the most
        visible call to action.
      </p>
      <p className="mb-8 text-slate-600">
        Add a YouTube end screen to every long-form video linking to your most relevant product.
        Viewers who watch to the end are your most qualified audience — the end screen is prime
        conversion real estate.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">YouTube Shorts Analytics: What to Watch</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Metric</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Good Benchmark</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">What It Tells You</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Watch-through rate</td>
              <td className="border border-slate-200 p-3 text-slate-600">&gt;70%</td>
              <td className="border border-slate-200 p-3 text-slate-600">Hook strength — below 50% means first 2 seconds need work</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Subscriber conversion rate</td>
              <td className="border border-slate-200 p-3 text-slate-600">1-3% of viewers</td>
              <td className="border border-slate-200 p-3 text-slate-600">Content-to-channel fit — high views + low subs = wrong audience</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Long-form click-through from Shorts</td>
              <td className="border border-slate-200 p-3 text-slate-600">5-15% of subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">Bridge success — Shorts drawing wrong audience won't watch long-form</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Comment rate</td>
              <td className="border border-slate-200 p-3 text-slate-600">&gt;0.5% of views</td>
              <td className="border border-slate-200 p-3 text-slate-600">Content resonance — comments boost algorithm distribution</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your fitness products?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-youtube-shorts" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/personal-trainer-youtube-channel" className="text-violet-600 hover:underline">
              Personal Trainer YouTube Channel Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-tiktok-strategy" className="text-violet-600 hover:underline">
              Fitness Coach TikTok Strategy
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-content-ideas" className="text-violet-600 hover:underline">
              Fitness Content Ideas for 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-monetize-fitness-content" className="text-violet-600 hover:underline">
              How to Monetize Your Fitness Content
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
