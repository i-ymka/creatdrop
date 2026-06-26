import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Upsell Strategy: How to Increase Revenue from Existing Buyers | Creatdrop",
  description: "The easiest sale is to someone who has already bought from you. How fitness coaches structure upsells, cross-sells, and product ladders to maximize revenue per client.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Upsell Strategy</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Upsell Strategy: How to Increase Revenue from Existing Buyers</h1>
      <p className="mb-10 text-lg text-slate-600">
        Acquiring a new client costs 5–7x more than selling to an existing one. Yet most fitness
        coaches focus almost exclusively on new client acquisition and almost nothing on maximizing
        revenue from buyers who already trust them. The coaches who build seven-figure businesses
        understand that a well-designed product ladder — where each product naturally leads to
        the next — is the most efficient revenue growth strategy available. Here is how to
        implement it.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Fitness Product Ladder</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Level</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Product Type</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Entry</td>
              <td className="border border-slate-200 p-3 text-slate-600">Lead magnet / free content</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0</td>
              <td className="border border-slate-200 p-3 text-slate-600">Attract and convert strangers to subscribers</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Tripwire</td>
              <td className="border border-slate-200 p-3 text-slate-600">PDF guide, short program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$9–$37</td>
              <td className="border border-slate-200 p-3 text-slate-600">Convert subscribers to first-time buyers</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Core</td>
              <td className="border border-slate-200 p-3 text-slate-600">Full program, 4–12 week</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$197</td>
              <td className="border border-slate-200 p-3 text-slate-600">Primary revenue product</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Continuity</td>
              <td className="border border-slate-200 p-3 text-slate-600">Monthly membership</td>
              <td className="border border-slate-200 p-3 text-slate-600">$19–$79/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Recurring revenue from proven buyers</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Premium</td>
              <td className="border border-slate-200 p-3 text-slate-600">1-on-1 coaching, VIP program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$800/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Highest LTV from most committed buyers</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-slate-600">
        The product ladder is not a sequence you force buyers through — it is a path you make
        available for buyers who are ready to go deeper. Most buyers will stop at one or two
        levels. A small percentage will climb to premium. The ladder works because each level
        serves a real need for exactly the buyers who are ready for it.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">3 Types of Upsells for Fitness Coaches</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Immediate post-purchase upsell (order bump)</p>
          <p className="mt-1 text-sm text-slate-600">Offered immediately after checkout, before the buyer reaches the confirmation page. At this moment, the buyer is in maximum commitment mode — they have just paid money, they believe in what you offer, and their credit card is open. An order bump offering a complementary product at a discount converts at 15–35% with zero additional marketing. Example: someone buys a 4-week HIIT program, immediately offered a nutrition guide for an extra $17.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Completion-triggered upsell</p>
          <p className="mt-1 text-sm text-slate-600">When a buyer finishes a program, they are at peak motivation and maximum evidence of your effectiveness. "You just completed week 12 — here is what's next" is the most natural upsell in fitness. A buyer who completed your 8-week strength program and got results is 3–5x more likely to buy your advanced program than any cold traffic visitor.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Milestone-triggered upgrade offer</p>
          <p className="mt-1 text-sm text-slate-600">When a subscriber or program participant hits a notable milestone, offer a higher-tier product that takes their results further. "You"ve been with me for 3 months and hit your goal — the clients who get the most dramatic results at this stage are the ones who move into 1-on-1 coaching. Here"s what that looks like." Milestone triggers convert because timing and relevance are perfect.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The LTV Math: Why Upsells Change Your Business</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Scenario</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Revenue Per 100 Buyers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">No upsell (core program only at $97)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$9,700</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">+ Order bump ($17, 25% take rate)</td>
              <td className="border border-slate-200 p-3 text-slate-600">+$425 = $10,125</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">+ Completion upsell ($67, 20% take rate)</td>
              <td className="border border-slate-200 p-3 text-slate-600">+$1,340 = $11,465</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">+ Membership offer ($29/month, 15% take rate, avg 5 months)</td>
              <td className="border border-slate-200 p-3 text-slate-600">+$2,175 = $13,640</td>
            </tr>
            <tr className="border-t-2 border-slate-300">
              <td className="border border-slate-200 p-3 font-semibold text-slate-900">Total uplift from upsells</td>
              <td className="border border-slate-200 p-3 font-semibold text-violet-600">+40% revenue, same 100 buyers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Present Upsells Without Feeling Pushy</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Frame every upsell as a natural next step", desc: "\"Now that you've completed the foundation phase, here is what the next phase looks like\" is not a sales pitch — it is coaching. The upsell should always be positioned as the logical continuation of the journey the buyer is already on, not as a separate sale." },
          { step: "2", title: "Let results speak first", desc: "The best time to present a higher-tier offer is when the buyer has just experienced a result. \"You've lost 12 pounds in 8 weeks — now imagine what happens if we work together for another 12 weeks and add [X element].\" Results-validated upsells have 3–5x the conversion rate of pre-results pitches." },
          { step: "3", title: "Use honest scarcity, not fake urgency", desc: "Real constraints work. \"I only take 8 1-on-1 clients at a time and I have 2 spots open right now\" is honest. Fake countdown timers that reset are not. Buyers in 2026 can see through manufactured urgency instantly, and it destroys the trust that made the initial sale possible." },
          { step: "4", title: "Make declining easy", desc: "A clear \"No thanks, I'll stick with just the program\" option on every upsell page increases the conversion rate on the upsell itself — because buyers feel less pressured and more in control. Removing the fear of being trapped makes saying yes easier." },
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

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to maximize revenue from your buyers?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-upsell-strategy" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-sales-funnel" className="text-violet-600 hover:underline">
              Fitness Coach Sales Funnel
            </Link>
          </li>
          <li>
            <Link href="/blog/online-fitness-coach-retention" className="text-violet-600 hover:underline">
              Online Fitness Coach Retention
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-price-fitness-programs" className="text-violet-600 hover:underline">
              How to Price Your Fitness Programs
            </Link>
          </li>
          <li>
            <Link href="/blog/personal-trainer-passive-income" className="text-violet-600 hover:underline">
              Personal Trainer Passive Income
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
