import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell CrossFit Programming Online in 2026: Plans, Subscriptions, and Platforms | Creatdrop",
  description: "CrossFit coaches and programmers are building profitable online businesses. How to sell WOD programming, strength cycles, and training plans to the CrossFit community.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Sell CrossFit Programming Online</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Digital Products</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Sell CrossFit Programming Online in 2026: Plans, Subscriptions, and Platforms</h1>
      <p className="mb-10 text-lg text-slate-600">
        The CrossFit community is one of the most loyal and highest-spending audiences in fitness.
        Athletes who identify as CrossFitters pay for programming year-round, often across multiple
        subscriptions simultaneously — a strength program, a gymnastics skill program, and a
        competition prep cycle running concurrently. If you can program, this audience will pay
        for it.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">CrossFit Programming Product Types</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Product</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Delivery</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Daily WOD programming (monthly sub)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$19–$49/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Weekly email / PDF</td>
              <td className="border border-slate-200 p-3 text-slate-600">Home gym athletes, affiliate supplement</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">12-week strength cycle (squat/deadlift/press)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$127 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">PDF download</td>
              <td className="border border-slate-200 p-3 text-slate-600">Athletes wanting strength gains outside WODs</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Open / competition prep program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$97–$297 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">PDF or platform</td>
              <td className="border border-slate-200 p-3 text-slate-600">Competitors — high price tolerance</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Gymnastics skill program (muscle-ups, HSPU)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$97 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">PDF or video course</td>
              <td className="border border-slate-200 p-3 text-slate-600">Athletes chasing specific skill benchmarks</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Home gym WOD program (no rig needed)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$27–$67 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">PDF download</td>
              <td className="border border-slate-200 p-3 text-slate-600">Athletes without box access</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Affiliate programming (box subscription)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$97–$299/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Weekly delivery to coach</td>
              <td className="border border-slate-200 p-3 text-slate-600">Highest MRR per customer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">CrossFit Programming Niches</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Competition programming</p>
          <p className="mt-1 text-sm text-slate-600">Athletes preparing for the CrossFit Open, Quarterfinals, or local competitions. This is the highest-intent, highest-price-tolerance niche in CrossFit. A 16-week Open prep program from a credible programmer can command $147-$297.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Masters programming (35+, 45+, 55+)</p>
          <p className="mt-1 text-sm text-slate-600">The fastest-growing CrossFit demographic. Masters athletes need age-appropriate volume, recovery emphasis, and competition-specific preparation. Very few programmers specialize here — enormous opportunity with loyal, high-retention customers.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Beginner CrossFit / scaled programming</p>
          <p className="mt-1 text-sm text-slate-600">New CrossFitters feel overwhelmed by RX programming. A specifically scaled beginner program with movement standards, scaling options, and progression built in fills a real gap. Lower price point but extremely high volume potential.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Strength-focused supplemental programming</p>
          <p className="mt-1 text-sm text-slate-600">Athletes who want to improve their back squat, deadlift, or Olympic lifts alongside their regular WODs. Typically delivered as 3x/week supplemental work. This niche buys repeatedly — once they finish one cycle, they want the next one.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Gymnastics skills programming</p>
          <p className="mt-1 text-sm text-slate-600">Muscle-ups, handstand push-ups, bar muscle-ups, handstand walks — athletes who cannot do these skills will pay $37-$97 for a structured progression. High search volume on YouTube and Reddit for these topics means organic discovery is achievable.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Affiliate box programming service</p>
          <p className="mt-1 text-sm text-slate-600">Sell monthly programming to CrossFit box owners rather than individual athletes. A box owner pays $99-$299/month for done-for-you daily WODs. With 10 affiliate clients, that is $1,000-$3,000 MRR from a single product tier.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Pricing Benchmarks</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Product</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Unknown Programmer</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Known in Community</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Established / Competed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Monthly WOD subscription</td>
              <td className="border border-slate-200 p-3 text-slate-600">$15–$25/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$29–$39/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$49–$79/month</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">12-week strength cycle</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$57</td>
              <td className="border border-slate-200 p-3 text-slate-600">$67–$97</td>
              <td className="border border-slate-200 p-3 text-slate-600">$127–$197</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Competition prep program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$67–$97</td>
              <td className="border border-slate-200 p-3 text-slate-600">$127–$197</td>
              <td className="border border-slate-200 p-3 text-slate-600">$247–$397</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Affiliate box programming</td>
              <td className="border border-slate-200 p-3 text-slate-600">$79–$99/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$129–$179/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$199–$299/month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Building a CrossFit Audience as a Programmer</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Program publicly and share results", desc: "Post your own training — workouts, scores, lifts — consistently. CrossFit athletes buy from programmers who actually train. Your numbers are your portfolio." },
          { step: "2", title: "Post programming previews", desc: "Share the structure of your cycles without giving away the full program. \"Week 1 structure: Monday — squat focus, Tuesday — met-con benchmark, Wednesday — gymnastics skill...\" Athletes respond to visible programming logic." },
          { step: "3", title: "Engage in CrossFit Reddit and community forums", desc: "r/crossfit, r/weightlifting, and community-specific Slack groups are where programming buyers congregate. Provide genuine programming advice without selling, and you will attract followers naturally." },
          { step: "4", title: "Offer a free week as lead magnet", desc: "Give Week 1 of your most popular program free in exchange for email. CrossFit athletes evaluate programming by doing it — a free week is a low-friction trial." },
          { step: "5", title: "Partner with local boxes for exposure", desc: "Offer a neighboring box free programming for one month. Their athletes become familiar with your style and many will subscribe individually when the affiliate arrangement ends." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Platform Options for CrossFit Programmers</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Platform</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Monthly Cost</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best For</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Limitation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Creatdrop</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0</td>
              <td className="border border-slate-200 p-3 text-slate-600">PDF programs, one-time plans, digital downloads</td>
              <td className="border border-slate-200 p-3 text-slate-600">Digital only — no workout tracking built in</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">SugarWOD / Wodify</td>
              <td className="border border-slate-200 p-3 text-slate-600">$49–$149/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Box-level programming delivery with athlete tracking</td>
              <td className="border border-slate-200 p-3 text-slate-600">Expensive for individual programmers</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">TrainHeroic</td>
              <td className="border border-slate-200 p-3 text-slate-600">$35–$99/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Remote team programming with athlete apps</td>
              <td className="border border-slate-200 p-3 text-slate-600">Overkill for PDF-only products</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Substack / email</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0 (free tier)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Weekly WOD delivery via email newsletter</td>
              <td className="border border-slate-200 p-3 text-slate-600">No native payment processing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-slate-600">
        For programmers starting out, the highest-margin approach is selling PDF-format cycles through
        Creatdrop (no monthly platform fee) while delivering weekly WOD subscriptions through email.
        As your client base grows, adding a dedicated platform like TrainHeroic becomes worthwhile
        for the athlete experience it provides.
      </p>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your CrossFit programming?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-sell-crossfit-programming-online" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/sell-strength-training-programs-online" className="text-violet-600 hover:underline">
              How to Sell Strength Training Programs Online
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-workout-programs-online" className="text-violet-600 hover:underline">
              How to Sell Workout Programs Online
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-gym-programs-online" className="text-violet-600 hover:underline">
              How to Sell Gym Programs Online
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-price-fitness-programs" className="text-violet-600 hover:underline">
              How to Price Your Fitness Programs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
