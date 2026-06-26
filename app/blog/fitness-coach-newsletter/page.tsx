import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Newsletter: How to Build One That Sells | Creatdrop",
  description: "An email newsletter is the most valuable asset a fitness coach can build. How to start, grow, and monetize a fitness newsletter that drives consistent digital product sales.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Newsletter</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Newsletter: How to Build One That Sells</h1>
      <p className="mb-10 text-lg text-slate-600">
        Social media followers are rented. Algorithm changes, platform policies, and account
        suspensions can eliminate years of audience-building overnight. An email newsletter is
        owned — no platform controls your access to subscribers. Fitness coaches who build an
        email list consistently outperform those who do not, because each subscriber represents
        a direct, unmediated communication channel to someone who already trusts them enough
        to invite them into their inbox. Here is how to build a fitness newsletter that both
        grows and generates revenue.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Newsletter Revenue Benchmarks for Fitness Coaches</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">List Size</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Monthly Product Revenue (est.)</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Assumes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">500 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$800</td>
              <td className="border border-slate-200 p-3 text-slate-600">1 launch/month, $37–$97 product</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">2,000 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$800–$3,000</td>
              <td className="border border-slate-200 p-3 text-slate-600">2% conversion, $67 avg product</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">5,000 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$2,000–$8,000</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–3% conversion, varied products</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">10,000 subscribers</td>
              <td className="border border-slate-200 p-3 text-slate-600">$5,000–$20,000</td>
              <td className="border border-slate-200 p-3 text-slate-600">Established trust, product ladder</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Start and Grow Your Fitness Newsletter</h2>
      <div className="mb-8 space-y-4">
        {[
          {
            step: "1",
            title: "Choose a single, specific topic — not \"fitness tips\"",
            desc: "The most common fitness newsletter mistake is being too broad. \"Weekly fitness and nutrition tips\" competes with hundreds of generic newsletters and gives no reason to subscribe. A specific topic — \"weekly strength training for women over 40,\" \"one new mobility drill every Tuesday,\" \"the business of online fitness coaching\" — gives a clear reason to subscribe and attracts an audience that will eventually buy what you sell. Specificity beats breadth at every list size.",
          },
          {
            step: "2",
            title: "Create a lead magnet that matches your product",
            desc: "A lead magnet — a free resource delivered in exchange for an email address — should solve a specific problem for the exact audience who would buy your paid product. If you sell a strength training program for desk workers, your lead magnet might be a \"5-minute office mobility routine\" PDF. If you sell beginner running plans, your lead magnet could be a \"Week 1 running schedule\" template. The tighter the alignment between lead magnet and paid product, the higher the eventual conversion rate.",
          },
          {
            step: "3",
            title: "Send on a consistent schedule — same day, same time",
            desc: "Consistency is more important than frequency. A weekly newsletter sent every Tuesday at 8am builds anticipation and habit. A newsletter sent \"whenever I feel like it\" trains subscribers to ignore it. Start with weekly. The data consistently shows that weekly newsletters generate higher open rates and more sales per subscriber than daily newsletters for coaches at early list sizes — because weekly content is anticipated rather than filtered as noise.",
          },
          {
            step: "4",
            title: "Write one thing well, not five things adequately",
            desc: "The highest-performing fitness newsletters in terms of click rates and revenue are focused on one idea per issue. One exercise with detailed instruction. One client story with the full arc. One common mistake and exactly how to fix it. One mindset shift with the reasoning behind it. Readers who receive one excellent, actionable idea per week engage more consistently than readers who receive a roundup of five mediocre tips. Depth over breadth in every issue.",
          },
          {
            step: "5",
            title: "Promote your newsletter across all content channels",
            desc: "Every YouTube video description, every Instagram bio, every podcast appearance, every blog post should include a link to subscribe to your newsletter. The newsletter should be presented not as a secondary thing — \"also subscribe to my emails\" — but as the primary community: \"The best place to learn from me is my weekly email — link in bio.\" Subscribers who come through a specific content piece that impressed them convert to buyers at significantly higher rates than subscribers from generic opt-in forms.",
          },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Monetize Without Burning Your List</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">The 80/20 rule: 80% value, 20% promotion</p>
          <p className="mt-1 text-sm text-slate-600">Subscribers who receive consistent value — real instruction, genuine insight, honest perspective — tolerate promotional emails well because they have context for the relationship. Subscribers who only receive promotional emails unsubscribe and mark as spam. A newsletter that sends 4 value-driven issues followed by 1 promotional issue maintains engagement and converts at rates that pure promotional lists cannot. The value issues are not a cost — they are the mechanism that makes the promotional issue work.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Soft-sell product mentions in content emails</p>
          <p className="mt-1 text-sm text-slate-600">The most effective product mentions in newsletters are not dedicated sales emails — they are natural references within value content. "This is the progression I use in my 8-week strength program — if you want the full 8 weeks with video demonstrations, [link]." The soft mention within relevant content converts better than a standalone promotional email because the context has already established the relevance. Readers who want to go deeper know where to go.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Dedicated launch emails for product releases</p>
          <p className="mt-1 text-sm text-slate-600">When launching a new product, a dedicated 3–5 email launch sequence to your list is appropriate and expected by subscribers who have been receiving value from you. The sequence: email 1 (announcement + what it is and who it is for), email 2 (social proof + a specific result the product creates), email 3 (FAQ + objection handling), email 4 (last chance + urgency). A well-executed launch sequence to a warm list generates 60–80% of total launch revenue from the existing subscriber base.</p>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell to your email list?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-newsletter" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-email-list" className="text-violet-600 hover:underline">
              How to Build a Fitness Coach Email List
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-lead-magnet" className="text-violet-600 hover:underline">
              Fitness Coach Lead Magnet Ideas
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-waitlist" className="text-violet-600 hover:underline">
              How Fitness Coaches Use a Waitlist to Fill Programs Faster
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-product-launch" className="text-violet-600 hover:underline">
              Fitness Product Launch Strategy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
