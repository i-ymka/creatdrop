import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Online Martial Arts Classes in 2026: Programs, Pricing, and Platforms | Creatdrop",
  description: "Martial arts instruction translates exceptionally well to digital formats. How to create, price, and sell online martial arts classes and programs to students worldwide.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Sell Online Martial Arts Classes</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Digital Products</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Sell Online Martial Arts Classes in 2026: Programs, Pricing, and Platforms</h1>
      <p className="mb-10 text-lg text-slate-600">
        Martial arts instruction was once considered impossible to deliver online — technique requires
        correction, sparring requires a partner, and belt progression requires in-person assessment.
        Instructors who solved these problems discovered something unexpected: the online market for
        martial arts content is massive, underserved, and willing to pay premium prices for quality
        instruction. Millions of people want to learn self-defense, practice kata, improve their
        striking, or train at home — and they have no local school. Here is how to build an online
        martial arts business that serves them.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Online Martial Arts Product Formats and Pricing</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Product</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Time to Create</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Technique library (video series)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$127 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–4 weeks filming</td>
              <td className="border border-slate-200 p-3 text-slate-600">Reference product, high retention value</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Beginner fundamentals program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$97 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks filming</td>
              <td className="border border-slate-200 p-3 text-slate-600">Highest volume, widest audience</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Monthly membership (ongoing classes)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$29–$67/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Ongoing</td>
              <td className="border border-slate-200 p-3 text-slate-600">Core recurring revenue model</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Self-defense program (standalone)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$67–$197 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–3 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">High intent, premium buyer segment</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Live weekly class (Zoom)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$15–$30/class or $49–$99/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Ongoing</td>
              <td className="border border-slate-200 p-3 text-slate-600">Community, real-time correction</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Competition prep program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$97–$297 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–4 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">Serious practitioners, highest ticket</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Why Online Martial Arts Works Better Than Expected</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Most martial arts students have no local school for their style</p>
          <p className="mt-1 text-sm text-slate-600">The in-person martial arts market is geographically constrained. A BJJ school needs 30+ committed students within driving distance to survive. Online instruction removes this constraint entirely — a Muay Thai instructor in Thailand can now teach students in rural Ohio, suburban Germany, and urban Japan simultaneously. The potential student base for any martial arts style online is orders of magnitude larger than in any local market.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Solo drilling is the largest part of most training</p>
          <p className="mt-1 text-sm text-slate-600">The objection that "martial arts requires a partner" is less true than most assume. Shadowboxing, kata, bag work, solo drilling of entries and exits, conditioning — the majority of martial arts training time is spent alone or with a partner doing pre-arranged drills. Online instruction is perfectly suited to all of this. Live sparring is the one element that genuinely requires an in-person partner, but it represents a minority of total training time.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Serious students consume content voraciously</p>
          <p className="mt-1 text-sm text-slate-600">Martial arts practitioners are among the most eager learners in any fitness category. A serious BJJ student who buys your guard passing series will come back for your passing from the mount series, your leg lock entries series, and your competition strategy program. The customer lifetime value of a genuinely interested martial arts student is exceptionally high compared to general fitness buyers.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Solving the Technique Correction Problem</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Multi-angle filming for self-correction", desc: "Film every technique from at least two angles — typically front and side. Multi-angle footage allows students to compare their body position to yours without requiring your live feedback on every repetition. Add verbal cues that specifically describe what incorrect execution looks and feels like, so students can self-diagnose. Most online martial arts programs are filmed from one angle only; multi-angle content is an immediate quality differentiator." },
          { step: "2", title: "Slow-motion breakdowns for complex techniques", desc: "Slow-motion clips of joint locks, strikes, and throws allow students to see exactly what is happening at each phase of a technique. This is information that live instruction cannot provide at regular speed. A technique broken into a slow-motion phase-by-phase analysis, followed by real-speed execution, teaches the internal structure of the movement more clearly than many in-person classes." },
          { step: "3", title: "Video submission for feedback in premium tiers", desc: "Offer a premium membership or coaching tier that includes video submission — students film themselves executing techniques and you provide recorded feedback. This service commands premium pricing ($99–$297/month), is scalable with batched review sessions, and provides the human correction element that pure video libraries cannot. Many serious students will pay significantly more for access to direct instructor feedback." },
          { step: "4", title: "Live class for real-time correction", desc: "A weekly or bi-weekly live class via Zoom allows real-time technique observation and verbal correction. Instructors who run live classes alongside a video library retain students at higher rates — the combination of self-paced learning and live interaction mirrors the hybrid model that the best in-person schools use. Live classes also build the community feeling that keeps long-term subscribers loyal." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Marketing Channels for Martial Arts Instructors</h2>
      <div className="mb-8 space-y-3">
        {[
          { channel: "YouTube — technique content as top-of-funnel", note: "\"How to do [technique]\" and \"[style] for beginners\" are among the most consistently searched martial arts queries on YouTube. An instructor who publishes quality technique breakdowns builds an audience of serious students who eventually convert to paid programs. Instructors with 10,000–50,000 YouTube subscribers and a paid product generate $2,000–$20,000/month in product revenue." },
          { channel: "Reddit communities", note: "Martial arts subreddits (r/bjj, r/muaythai, r/karate, r/martialarts) have millions of active members who actively seek technique help and product recommendations. Participating genuinely in these communities — answering questions, offering technique advice, sharing free content — builds credibility with exactly the audience that buys martial arts products. Promotional content is strictly controlled; genuine community participation is the only approach that works." },
          { channel: "Instagram and TikTok for demonstration content", note: "Short-form video of techniques, drilling sequences, and highlight-reel combinations performs well on Instagram and TikTok. The key for martial arts content is showing something genuinely useful or impressive in 30–60 seconds — not just promotional content, but real instruction. Instructors who teach something valuable in every short-form video build audiences that convert." },
          { channel: "School and gym partnerships", note: "Instructors with an existing reputation in the martial arts community can partner with schools in complementary styles (a BJJ instructor partnering with a wrestling gym, a Muay Thai instructor partnering with a boxing gym). Cross-promotion reaches pre-qualified audiences who already train and are already inclined to purchase supplementary instruction online." },
        ].map((item) => (
          <div key={item.channel} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.channel}</p>
            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your martial arts programs?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-sell-online-martial-arts-classes" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/sell-boxing-classes-online" className="text-violet-600 hover:underline">
              How to Sell Boxing Classes Online
            </Link>
          </li>
          <li>
            <Link href="/blog/online-group-fitness-classes" className="text-violet-600 hover:underline">
              How to Sell Online Group Fitness Classes
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-membership-site" className="text-violet-600 hover:underline">
              How to Build a Fitness Membership Site
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-workout-programs-online" className="text-violet-600 hover:underline">
              How to Sell Workout Programs Online
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
