import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Landing Page: How to Write One That Converts | Creatdrop",
  description: "Your landing page is your best salesperson. How to write and structure a fitness coach landing page that turns visitors into buyers — with examples of what works.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Landing Page</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Landing Page: How to Write One That Converts</h1>
      <p className="mb-10 text-lg text-slate-600">
        A landing page is the moment of truth for every fitness coach selling online. It is where
        curious visitors become paying buyers — or leave forever. The difference between a landing
        page that converts at 2% and one that converts at 8% is not design. It is copy. Here is
        the complete framework for writing a fitness landing page that consistently turns traffic
        into revenue.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 7 Sections Every Fitness Landing Page Needs</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Headline: The single most important element", desc: "Your headline must immediately answer \"what is this and who is it for?\" The best fitness headlines combine a specific outcome with a specific audience or timeframe. Weak: \"Get Fit Online.\" Strong: \"Lose Your First 20 Pounds in 12 Weeks Without a Gym.\" The headline determines whether anyone reads the rest of the page." },
          { step: "2", title: "Subheadline: Expand the promise and address the core objection", desc: "The subheadline typically has one job: explain how the promise is achievable for someone who might be skeptical. \"A proven 3-day-per-week program built for busy parents who have tried and failed with traditional gym routines.\" It addresses the \"I've tried before\" objection immediately." },
          { step: "3", title: "Problem section: Make the reader feel seen", desc: "Describe the problem your buyer is experiencing in their own language. The more specifically you describe their frustration, the more they feel you understand them — and the more they trust you as the solution. Use bullet points: \"You start a new program every Monday... You never feel like you're making progress... You're not sure what workouts are actually right for your body.\"" },
          { step: "4", title: "Solution section: Present the program with its key benefits", desc: "Introduce your program by name and explain what makes it work. Focus on benefits, not features. Not \"20 video workouts\" — but \"follow-along workouts you can complete in your living room in 30 minutes, with modifications for every fitness level.\" The reader should see themselves succeeding, not just see a list of deliverables." },
          { step: "5", title: "Social proof: Real results from real people", desc: "Testimonials are the second most important element on your page after the headline. Video testimonials outperform text. Before/after photos outperform text. Specific numbers outperform vague praise (\"I lost 18 pounds\" beats \"It really worked for me\"). Three specific testimonials outperform ten vague ones." },
          { step: "6", title: "What's included: The complete breakdown", desc: "List everything the buyer receives. Be thorough — the perception of value increases with specificity. \"8-week progressive training plan + warm-up videos for every session + rest day active recovery routines + private community access + 30-day money-back guarantee.\" The longer this list, the more justified the price feels." },
          { step: "7", title: "Call to action: Clear, repeated, and friction-free", desc: "Your buy button should appear at least three times: near the top (for warm visitors who are ready), after the testimonials, and at the bottom. The button text should be specific: \"Start the 12-Week Program\" beats \"Buy Now.\" Price should be visible near every CTA — hiding it creates distrust." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Conversion Rate Benchmarks for Fitness Landing Pages</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Traffic Source</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Average CVR</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Good CVR</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Excellent CVR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email list (own subscribers)</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–5%</td>
              <td className="border border-slate-200 p-3 text-slate-600">6–10%</td>
              <td className="border border-slate-200 p-3 text-slate-600">10%+</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Social media followers</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–3%</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–6%</td>
              <td className="border border-slate-200 p-3 text-slate-600">6%+</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">YouTube / organic SEO</td>
              <td className="border border-slate-200 p-3 text-slate-600">0.5–2%</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–4%</td>
              <td className="border border-slate-200 p-3 text-slate-600">4%+</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Paid ads (cold traffic)</td>
              <td className="border border-slate-200 p-3 text-slate-600">0.5–1.5%</td>
              <td className="border border-slate-200 p-3 text-slate-600">1.5–3%</td>
              <td className="border border-slate-200 p-3 text-slate-600">3%+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Biggest Landing Page Mistakes Fitness Coaches Make</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Leading with credentials instead of outcomes</p>
          <p className="mt-1 text-sm text-slate-600">Coaches often open their pages with certifications, years of experience, and biography. Buyers don't care about your credentials on first contact — they care about whether this program will solve their problem. Lead with the outcome, earn credibility through testimonials and specificity. Credentials belong later in the page.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Describing the program instead of the transformation</p>
          <p className="mt-1 text-sm text-slate-600">"12 workouts across 4 weeks with video demonstrations" describes the product. "Go from struggling with basic movements to completing your first pull-up in 4 weeks" describes the transformation. Buyers purchase outcomes. The product is just the delivery vehicle for the outcome they want.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Hiding the price or burying the buy button</p>
          <p className="mt-1 text-sm text-slate-600">Visitors who have to scroll to the bottom to find the price — or search for where to buy — are already half-lost. Make the price visible and the buy button impossible to miss. Price transparency builds trust. Hiding it suggests you expect resistance, which primes resistance.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">No guarantee</p>
          <p className="mt-1 text-sm text-slate-600">A 30-day money-back guarantee on a digital fitness program costs almost nothing in actual refunds (refund rates on quality programs are typically 2–5%) and dramatically increases purchase confidence. First-time buyers from cold traffic often need a guarantee to remove the risk of trying something new. Not offering one leaves money on the table.</p>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your fitness programs?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-landing-page" />
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
            <Link href="/blog/personal-trainer-website-builder" className="text-violet-600 hover:underline">
              Personal Trainer Website Builder
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-price-fitness-programs" className="text-violet-600 hover:underline">
              How to Price Your Fitness Programs
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
