import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Pricing Strategy in 2026: How to Charge What You Are Worth | Creatdrop",
  description: "Most fitness coaches underprice by 30-50%. The pricing psychology, anchoring strategies, and raise frameworks fitness coaches use to charge premium rates.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Pricing Strategy</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Pricing Strategy in 2026: How to Charge What You Are Worth</h1>
      <p className="mb-10 text-lg text-slate-600">
        The most common mistake fitness coaches make is not underdelivering — it is underpricing.
        A coach who charges $50/month for 1-on-1 coaching is not offering a deal; they are
        signaling low confidence and attracting clients who will undervalue their time. Pricing
        is a positioning statement. Here is how to set prices that reflect your actual value
        and raise them without losing clients.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Why Fitness Coaches Underprice</h2>
      <p className="mb-4 text-slate-600">
        Underpricing comes from three sources: fear of rejection, comparison to cheap competitors,
        and pricing based on time rather than results. Each is a mindset problem, not a market problem.
      </p>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Fear of rejection</p>
          <p className="mt-1 text-sm text-slate-600">Coaches price low to avoid hearing "no." But a lower price does not eliminate rejection — it just attracts clients who would say no to even lower prices next time you raise them. Price for yes from the right clients, not yes from everyone.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Comparing to cheap competitors</p>
          <p className="mt-1 text-sm text-slate-600">There will always be a coach charging less. You can not win a price war against someone willing to work for $10/session. Do not compete on price — compete on specificity, results, and relationship.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Time-based pricing</p>
          <p className="mt-1 text-sm text-slate-600">Pricing based on your hourly rate caps your income at hours available. A client does not buy your time — they buy the result of your expertise. A coach who charges $197/month for a program that takes 2 hours/month to deliver earns $98/hour. The same coach charging $49/month earns $24/hour. Same work, very different outcome.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Pricing Models Compared</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Model</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Structure</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best For</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Income Ceiling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Per session</td>
              <td className="border border-slate-200 p-3 text-slate-600">$40–$150 each</td>
              <td className="border border-slate-200 p-3 text-slate-600">New coaches, live 1-on-1</td>
              <td className="border border-slate-200 p-3 text-slate-600">Low — limited by hours</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Monthly retainer (1-on-1)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$150–$600/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Established coaches, premium clients</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium — capped by client slots</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Group coaching subscription</td>
              <td className="border border-slate-200 p-3 text-slate-600">$29–$99/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Growing audience, scalable income</td>
              <td className="border border-slate-200 p-3 text-slate-600">High — scales with subscribers</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Digital product (one-time)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$17–$297 per sale</td>
              <td className="border border-slate-200 p-3 text-slate-600">Passive income, large audiences</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high — unlimited sales</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">High-ticket program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$1,000–$5,000 per client</td>
              <td className="border border-slate-200 p-3 text-slate-600">Expert coaches, transformation promises</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high — fewer clients needed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Pricing Anchor Framework</h2>
      <p className="mb-4 text-slate-600">
        Anchoring is the most powerful pricing psychology tool available. When you present
        options, the first price shown sets the reference point — everything else is evaluated
        against it. For fitness coaches, this means always showing your highest-priced option first.
      </p>
      <div className="mb-8 rounded-xl border border-slate-200 p-5">
        <p className="mb-3 font-semibold text-slate-900">3-tier pricing example (coaching programs)</p>
        <div className="space-y-3">
          <div className="rounded-lg bg-violet-50 p-3">
            <p className="font-semibold text-violet-900">Premium — $497/month</p>
            <p className="text-sm text-slate-600">Custom programming, weekly video check-ins, WhatsApp access, monthly nutrition review</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-3">
            <p className="font-semibold text-slate-900">Standard — $197/month</p>
            <p className="text-sm text-slate-600">Customized program, biweekly check-ins, email support</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="font-semibold text-slate-900">Self-guided — $47/month</p>
            <p className="text-sm text-slate-600">Group program, community access, monthly Q&amp;A call</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-600">Most clients choose the middle option when anchored against a high price. The Premium tier makes Standard look reasonable, and Standard makes Self-guided feel accessible. Without anchoring, Standard would feel expensive.</p>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Market Rate Benchmarks by Coaching Type</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Coaching Type</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Entry Level</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Mid-Market</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Online 1-on-1 coaching</td>
              <td className="border border-slate-200 p-3 text-slate-600">$100–$150/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$350/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$400–$800/month</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Group coaching program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$19–$39/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$49–$79/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$99–$197/month</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Digital program (PDF/video)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$17–$47</td>
              <td className="border border-slate-200 p-3 text-slate-600">$67–$127</td>
              <td className="border border-slate-200 p-3 text-slate-600">$197–$297</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Nutrition + training bundle</td>
              <td className="border border-slate-200 p-3 text-slate-600">$197–$297/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$397–$597/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$700–$1,200/month</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">12-week transformation</td>
              <td className="border border-slate-200 p-3 text-slate-600">$297–$497 total</td>
              <td className="border border-slate-200 p-3 text-slate-600">$697–$1,497 total</td>
              <td className="border border-slate-200 p-3 text-slate-600">$2,000–$5,000 total</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Raise Your Prices Without Losing Clients</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Grandfather existing clients (temporarily)", desc: "Lock existing clients at their current rate for 90 days. New clients pay the new rate. This gives you proof that people will pay higher prices, which helps you transition existing clients later." },
          { step: "2", title: "Give 30 days notice", desc: "Email existing clients 30 days before the price increase. Be direct: \"My rates are increasing from $X to $Y on [date]. This reflects the expanded support I now provide.\" No apology needed." },
          { step: "3", title: "Raise by 20-30% maximum at once", desc: "Increases over 30% at once cause more client churn than multiple smaller increases over time. If you need to double your rates, do it in two 50% increases separated by 6 months." },
          { step: "4", title: "Add something new when you raise", desc: "Tie the price increase to a new feature — adding WhatsApp support, monthly video calls, a new resource library. The new addition gives clients a concrete reason the price changed." },
          { step: "5", title: "Expect some attrition and be okay with it", desc: "Some clients will leave when you raise prices. This is acceptable. The clients who leave at $150/month because you raised from $100 were probably not aligned with your long-term positioning anyway." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Digital Product Pricing vs Coaching Pricing</h2>
      <p className="mb-4 text-slate-600">
        Digital products and coaching programs require different pricing logic:
      </p>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="mb-2 font-semibold text-slate-900">Digital products</p>
          <p className="mb-2 text-sm text-slate-600">Price on perceived value, not creation cost. A PDF that took 3 hours to write but solves a $500 problem should not cost $9. Price on the outcome, not the format.</p>
          <p className="text-sm text-slate-600">Test with split pricing: run the same product at two price points to different audiences and measure conversion. The highest converting price is rarely the lowest one.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="mb-2 font-semibold text-slate-900">Coaching programs</p>
          <p className="mb-2 text-sm text-slate-600">Price on transformation delivered. A coach who can reliably help clients lose 20 lbs in 12 weeks is worth $1,000+. The client values the result, not the number of Zoom calls.</p>
          <p className="text-sm text-slate-600">Higher price also improves outcomes — clients who pay more are more committed, follow through better, and get better results, which gives you better case studies.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 5 Pricing Mistakes That Kill Coach Revenue</h2>
      <div className="mb-8 space-y-3">
        {[
          { mistake: "Offering too many options", fix: "Cap at 3 tiers maximum. More choices cause decision paralysis and reduce conversion." },
          { mistake: "Discounting before asked", fix: "Never offer a discount without being asked. If you discount proactively, you signal that your original price was not real." },
          { mistake: "Making price the centerpiece of marketing", fix: "Lead with outcomes and results. Price should be the last thing discussed, not the headline." },
          { mistake: "Monthly pricing when quarterly converts better", fix: "Offer a 3-month minimum for coaching programs. Monthly allows people to quit after one difficult week. 90-day commitments produce better results and better retention." },
          { mistake: "Not raising prices annually", fix: "Inflation means stable prices are actually price cuts. Plan at least one price increase per year for all active offerings." },
        ].map((item) => (
          <div key={item.mistake} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">Mistake: {item.mistake}</p>
            <p className="mt-1 text-sm text-slate-600">Fix: {item.fix}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to charge what you are worth?</h2>
        <p className="mb-6 text-slate-600">
          Sell your programs on Creatdrop — no monthly fees, instant payouts, keep more of every sale.
        </p>
        <WaitlistForm source="blog-fitness-coach-pricing-strategy" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/how-to-price-fitness-programs" className="text-violet-600 hover:underline">
              How to Price Your Fitness Programs
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-pricing" className="text-violet-600 hover:underline">
              Fitness Coach Pricing Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/online-personal-training-packages" className="text-violet-600 hover:underline">
              Online Personal Training Packages
            </Link>
          </li>
          <li>
            <Link href="/blog/scale-online-fitness-coaching" className="text-violet-600 hover:underline">
              How to Scale Your Online Fitness Coaching Business
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
