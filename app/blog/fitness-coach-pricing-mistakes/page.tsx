import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Pricing Mistakes That Cost You Revenue | Creatdrop",
  description: "Most fitness coaches undercharge and leave thousands of dollars on the table every month. The 7 most common pricing mistakes and how to fix them without losing clients.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Pricing Mistakes</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Pricing Mistakes That Cost You Revenue</h1>
      <p className="mb-10 text-lg text-slate-600">
        Pricing is the highest-leverage decision in a fitness business and the one most coaches get
        wrong. The errors are almost never in the direction of overcharging — the overwhelming
        majority of coaches systematically undercharge, accept prices that do not reflect the value
        they deliver, and then compensate by working more hours rather than fixing the underlying
        pricing problem. Here are the seven most common pricing mistakes and the specific changes
        that fix them.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 7 Pricing Mistakes</h2>
      <div className="mb-8 space-y-4">
        {[
          {
            step: "1",
            title: "Pricing based on what you would pay, not what your buyer would pay",
            desc: "Coaches frequently price products at what they themselves would be comfortable paying — which is systematically lower than what their target buyer will pay. A coach who earns $50,000 per year prices a $197 program as expensive because $197 feels significant to them. A nurse practitioner making $95,000 per year with back pain and a reformer in her garage sees $147 as a reasonable entry price for quality instruction. Price based on your buyer's income, urgency, and alternatives — not your own reference point.",
          },
          {
            step: "2",
            title: "Anchoring prices to competitors who are also undercharging",
            desc: "New coaches often set prices by looking at what other coaches charge and matching or slightly undercutting. The problem: if the coaches you are benchmarking against are also making pricing mistakes, you are inheriting their errors. Competitive research for pricing should be directional, not definitive. Look at what your target buyer pays for other solutions to the same problem — gym memberships, personal training sessions, chiropractic visits, nutrition coaching — not just what fitness digital products typically cost.",
          },
          {
            step: "3",
            title: "Discounting as a default response to objection",
            desc: "When a prospect says \"that's a bit expensive,\" the reflexive response of many coaches is to offer a discount. This trains buyers to object on price because objecting produces a lower price. It also signals that your original price was not your real price — which undermines trust. The correct response to a price objection is to clarify the value, address the real concern (which is usually not the price but the risk of not getting results), and hold the price. Discounts for urgency or volume are legitimate; discounts for negotiation are not.",
          },
          {
            step: "4",
            title: "Selling time instead of outcomes",
            desc: "Programs priced per session or per month frame the product as an ongoing time commitment. Programs priced for an outcome — \"12-week fat loss program\" at a flat rate — frame the product as a result. Outcome-priced products command significantly higher fees because the buyer is purchasing a transformation, not a service unit. A 12-week coaching engagement priced at $1,200 per month for three months ($3,600) is harder to sell than the same engagement priced at $2,997 for the full program — even though the outcome-priced option is 20% less money, it converts better because the framing is different.",
          },
          {
            step: "5",
            title: "No price increase as reputation grows",
            desc: "Coaches who have been charging the same prices for 2–3 years are leaving significant revenue on the table. As your reputation grows, testimonials accumulate, and your waitlist builds, the market signals that demand exceeds supply at your current price. The appropriate response is to increase prices — gradually, with notice to existing clients, and with clear communication of the value increase. A 20–30% price increase on a product that is already selling well typically reduces volume by less than 10% while dramatically increasing revenue per sale.",
          },
          {
            step: "6",
            title: "Not having a premium tier",
            desc: "Without a premium option, your most motivated buyers — the ones who would pay significantly more for more access, more customization, or faster results — have nowhere to go except your standard offer. Every fitness product or service line should have a version at 2–3x the standard price. This is not about extracting maximum revenue from every buyer; it is about serving the segment that genuinely wants and will pay for more, and using that premium revenue to cross-subsidize more accessible products for other segments.",
          },
          {
            step: "7",
            title: "Giving away the first session or consultation free",
            desc: "Free discovery calls are appropriate for selling high-ticket coaching (above $500). For digital product sales, a free consultation is usually unnecessary and often counterproductive — it introduces the coach's time as a free commodity before any relationship is established. For products under $197, the sales page should convert without a call. Free calls for low-ticket products cost your time and do not increase conversion enough to justify the investment.",
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Price Testing Without Losing Clients</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Test new prices on new products first</p>
          <p className="mt-1 text-sm text-slate-600">The safest place to test a higher price is on a new product with no existing price history. Launch your next program at 30–40% higher than you would have otherwise, see how it converts, and gather data on whether your buyer pool truly has the ceiling you assumed. If conversion holds at the higher price, adjust your existing products upward in the next revision cycle. Existing products have price memory with your audience; new products have none.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Grandfather existing clients when raising prices</p>
          <p className="mt-1 text-sm text-slate-600">When increasing membership prices, current subscribers should be grandfathered at their existing rate or given 60–90 days notice before the new rate applies. Price increases for renewals — not mid-cycle — are standard practice and rarely cause churn when communicated with sufficient notice. Grandfathering existing subscribers at their current rate while raising prices for new subscribers is a common approach that allows price discovery without risking the current client base.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Use bundle pricing to increase average order value</p>
          <p className="mt-1 text-sm text-slate-600">A bundle priced at 70–80% of the individual product prices creates perceived value that makes the higher total spend feel like a deal. A coach who sells a $37 nutrition guide and a $67 workout program separately can bundle them for $79 — higher than either product alone but perceived as a discount. Bundle pricing increases average order value by 30–60% while simultaneously making individual products feel better priced by contrast.</p>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to price your fitness programs correctly?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-pricing-mistakes" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-pricing-strategy" className="text-violet-600 hover:underline">
              Fitness Coach Pricing Strategy Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-upsell-strategy" className="text-violet-600 hover:underline">
              Fitness Coach Upsell Strategy
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-price-fitness-programs" className="text-violet-600 hover:underline">
              How to Price Fitness Programs
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-revenue-streams" className="text-violet-600 hover:underline">
              Fitness Coach Revenue Streams
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
