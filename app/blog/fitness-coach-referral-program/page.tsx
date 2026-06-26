import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Referral Program: How to Turn Clients Into Your Sales Team | Creatdrop",
  description: "Referrals are the highest-converting, lowest-cost client acquisition channel for fitness coaches. How to build a referral program that generates a steady stream of warm buyers.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Referral Program</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Referral Program: How to Turn Clients Into Your Sales Team</h1>
      <p className="mb-10 text-lg text-slate-600">
        A referred client converts at 3–5x the rate of cold traffic, stays longer, and refers
        more people themselves. Word-of-mouth is already happening — your happy clients are
        already recommending you. A referral program makes that recommendation systematic,
        incentivized, and measurable instead of leaving it to chance. Here is how to build one
        that generates consistent new clients without paid advertising.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Why Referrals Outperform Every Other Acquisition Channel</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Channel</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Conversion Rate</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Cost Per Client</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Average Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Referral</td>
              <td className="border border-slate-200 p-3 text-slate-600">30–60%</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0–$50 (incentive cost)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Longest</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email list (warm)</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–10%</td>
              <td className="border border-slate-200 p-3 text-slate-600">$20–$100</td>
              <td className="border border-slate-200 p-3 text-slate-600">Above average</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Social media (organic)</td>
              <td className="border border-slate-200 p-3 text-slate-600">0.5–3%</td>
              <td className="border border-slate-200 p-3 text-slate-600">$50–$200 (time cost)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Average</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Paid ads (cold traffic)</td>
              <td className="border border-slate-200 p-3 text-slate-600">0.5–2%</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$1,000+</td>
              <td className="border border-slate-200 p-3 text-slate-600">Below average</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 3 Types of Referral Programs</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Client-to-client referral (most common)</p>
          <p className="mt-1 text-sm text-slate-600">Your existing clients refer friends, family, or colleagues. You reward the referring client with a discount, free month, or cash credit. Best for high-ticket coaching programs where the referring client has a clear incentive to help someone they know succeed at what they themselves are doing.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Affiliate program for digital products</p>
          <p className="mt-1 text-sm text-slate-600">Past buyers or aligned creators get a unique affiliate link and earn 20–40% commission on sales they drive. Best for digital products (programs, courses, PDFs) where the margin supports commissions. Former clients who loved your program become motivated marketers because they genuinely believe in it.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Professional referral network</p>
          <p className="mt-1 text-sm text-slate-600">Physicians, nutritionists, physical therapists, and other health professionals refer clients to you. You reciprocate by referring clients to them when appropriate. No financial transaction — professional credibility and mutual value are the currency. This channel is underused and produces some of the most qualified buyers.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Build a Client Referral Program</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Define the incentive structure", desc: "The referral incentive must feel valuable to the referring client. Options: one free month of coaching ($150–$400 value), a $50–$100 account credit, a free digital product, or a cash payment. For digital products, a 20–30% commission on the referred sale is standard. Choose the incentive that costs you the least while feeling most valuable to your clients." },
          { step: "2", title: "Make the ask at the right moment", desc: "The best time to ask for a referral is immediately after a positive milestone — a client hits a personal best, completes the program, or messages you with excitement about their results. \"I'm so glad to hear that! If you know anyone who's dealing with the same thing, I'd love to help them too. I have a referral program...\" This timing converts 3–5x better than a generic monthly ask." },
          { step: "3", title: "Give clients a specific ask, not a vague one", desc: "\"Refer anyone you know who wants to get fit\" generates almost nothing. \"If you have a friend who's mentioned they want to lose weight for their upcoming wedding\" is specific, memorable, and triggers an actual person in the client's mind. Specific referral requests produce referrals. Generic ones don't." },
          { step: "4", title: "Create shareable assets for clients to use", desc: "Give referring clients something to share: a testimonial graphic they can post on Instagram, a referral link they can text, or a short video they can share in a group chat. Removing the friction of \"how do I tell people about this?\" dramatically increases referral rates. Pre-written text for clients to customize works especially well." },
          { step: "5", title: "Track and acknowledge referrals visibly", desc: "Thank referring clients publicly (with permission) in your community and privately with a personal message. Make the referrer feel like a hero, not just a marketing channel. Clients who feel appreciated for referring refer more people — recognition is a more powerful motivator than the financial incentive alone." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Referral Program Economics</h2>
      <div className="mb-8 rounded-xl border border-slate-200 p-5">
        <p className="text-sm text-slate-600 mb-4">
          Example: A coach with 20 active coaching clients at $200/month runs a referral program
          offering 1 free month ($200 value) for each successful referral.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-600">If 5 clients each refer 1 person per quarter:</span>
            <span className="font-semibold text-slate-900">5 new clients</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-600">Average client lifetime (9 months at $200):</span>
            <span className="font-semibold text-slate-900">$1,800/client</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-600">Total revenue from 5 referrals:</span>
            <span className="font-semibold text-slate-900">$9,000</span>
          </div>
          <div className="flex justify-between py-1 border-b border-slate-100">
            <span className="text-slate-600">Cost of 5 referral incentives (1 free month each):</span>
            <span className="font-semibold text-slate-900">$1,000</span>
          </div>
          <div className="flex justify-between py-1 font-semibold">
            <span className="text-slate-900">Net revenue from referral program:</span>
            <span className="text-violet-600">$8,000/quarter</span>
          </div>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to build your fitness coaching business?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-referral-program" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/how-to-get-fitness-clients-online" className="text-violet-600 hover:underline">
              How to Get Fitness Clients Online
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-affiliate-marketing" className="text-violet-600 hover:underline">
              Fitness Affiliate Marketing
            </Link>
          </li>
          <li>
            <Link href="/blog/online-fitness-coach-retention" className="text-violet-600 hover:underline">
              Online Fitness Coach Retention
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-testimonials" className="text-violet-600 hover:underline">
              Fitness Coach Testimonials Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
