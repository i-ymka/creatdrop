import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Become an Online Running Coach in 2026: Products, Pricing, and Platforms | Creatdrop",
  description: "Running coaches are building scalable online businesses with training plans, coaching packages, and digital products. How to start and scale your running coaching business.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Online Running Coach</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Become an Online Running Coach in 2026: Products, Pricing, and Platforms</h1>
      <p className="mb-10 text-lg text-slate-600">
        Running coaching has one of the clearest paths to online income in fitness. Runners are
        obsessed buyers: they pay for training plans, race prep programs, injury prevention guides,
        and 1-on-1 coaching year-round. A running coach who moves even part of their practice
        online can serve hundreds of clients simultaneously while a studio-only coach is capped
        at whoever can drive to them.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Running Coaching Product Types</h2>
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
              <td className="border border-slate-200 p-3 font-medium text-slate-900">16-week marathon plan (PDF)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$27–$97</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–5 days</td>
              <td className="border border-slate-200 p-3 text-slate-600">High volume, passive income</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Couch to 5K program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$17–$47</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–3 days</td>
              <td className="border border-slate-200 p-3 text-slate-600">Largest beginner audience</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">1-on-1 custom coaching (monthly)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$150–$400/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Ongoing</td>
              <td className="border border-slate-200 p-3 text-slate-600">Highest revenue per client</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Race-specific prep plan (10K, half, full)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$127</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–7 days</td>
              <td className="border border-slate-200 p-3 text-slate-600">Race-season demand, evergreen</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Injury prevention guide</td>
              <td className="border border-slate-200 p-3 text-slate-600">$19–$57</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–4 days</td>
              <td className="border border-slate-200 p-3 text-slate-600">High search volume, strong intent</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Speed and interval training program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$97</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–5 days</td>
              <td className="border border-slate-200 p-3 text-slate-600">Intermediate runners wanting PR</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Running Coaching Niches</h2>
      <p className="mb-4 text-slate-600">
        "Running coach" is a crowded search. Niching down dramatically reduces competition and
        increases your ability to charge premium prices.
      </p>
      <div className="mb-8 space-y-3">
        {[
          { niche: "Marathon coaching", detail: "Most competitive niche but also highest buyer intent. Runners preparing for their first marathon will spend whatever it takes. Price premium: 30-50% over generic plans." },
          { niche: "Women's running (postpartum return to running)", detail: "Underserved niche with passionate community. Return-to-running programs after pregnancy fill fast. Can charge $47-$97 for an 8-week progressive return plan." },
          { niche: "Trail and ultramarathon coaching", detail: "Small but ultra-committed buyer pool. Trail runners will pay $200-$400/month for coaching because good trail-specific coaching is genuinely rare online." },
          { niche: "Masters runners (50+)", detail: "Growing demographic with disposable income. Need specific guidance on recovery, intensity management, and age-appropriate training. Almost no direct competition in this niche." },
          { niche: "Running for weight loss", detail: "Bridges the running niche into the much larger weight loss audience. Converts well at entry-level price points ($27-$47 starter plans)." },
          { niche: "Run your first 5K / beginner runners", detail: "Largest audience, lowest price tolerance, but highest volume. Couch-to-5K programs sell hundreds of copies per month with minimal marketing." },
        ].map((item) => (
          <div key={item.niche} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.niche}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Pricing by Experience Level</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Coach Level</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">PDF Plan</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Monthly 1-on-1</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Group Coaching</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">New coach (no credentials/audience)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$17–$37</td>
              <td className="border border-slate-200 p-3 text-slate-600">$75–$150/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$29–$49/month</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Certified coach (RRCA, USATF)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$79</td>
              <td className="border border-slate-200 p-3 text-slate-600">$150–$250/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$59–$99/month</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Elite / competitive runner</td>
              <td className="border border-slate-200 p-3 text-slate-600">$79–$127</td>
              <td className="border border-slate-200 p-3 text-slate-600">$250–$500/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">$99–$199/month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Content That Grows a Running Audience</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Training tip videos (2-3/week)", desc: "Short videos on cadence, breathing, pacing, form — whatever your niche cares about. These establish expertise and drive discovery on Instagram Reels and TikTok." },
          { step: "2", title: "Training plan previews", desc: "Show page 1 of your marathon plan or the first week of your 5K program. Partial reveals convert better than feature lists — runners want to see what they are buying." },
          { step: "3", title: "Race recap content", desc: "Document races you run or coach clients through. Nothing sells a marathon plan like watching a coach successfully run one with a client. Authentic and highly shareable." },
          { step: "4", title: "Injury Q&A content", desc: "\"Runner's knee explained\" and \"IT band syndrome treatment\" videos get enormous search traffic from injured runners desperately seeking answers. This audience converts to your injury prevention products." },
          { step: "5", title: "Strava / Garmin data breakdowns", desc: "Screenshot interesting training data — heart rate zones, pace progression, weekly mileage builds — and explain what it means. Tech-savvy runners love data content." },
          { step: "6", title: "Free training plan as lead magnet", desc: "Offer a free 4-week beginner plan or 5K starter plan in exchange for email. Running audiences are specifically hungry for free plans — conversion rates are unusually high." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Platform Options for Running Coaches</h2>
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
              <td className="border border-slate-200 p-3 text-slate-600">Selling PDF plans, video programs, digital products</td>
              <td className="border border-slate-200 p-3 text-slate-600">Best for digital — no live scheduling</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Final Surge / Training Peaks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$15–$49</td>
              <td className="border border-slate-200 p-3 text-slate-600">Coaching with structured workout delivery</td>
              <td className="border border-slate-200 p-3 text-slate-600">Monthly fee even at low client count</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Gumroad</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0 + 10% fee</td>
              <td className="border border-slate-200 p-3 text-slate-600">Simple digital file sales</td>
              <td className="border border-slate-200 p-3 text-slate-600">High fee percentage eats into margins</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Patreon</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0 + 8% fee</td>
              <td className="border border-slate-200 p-3 text-slate-600">Monthly membership communities</td>
              <td className="border border-slate-200 p-3 text-slate-600">Not built for product sales</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-slate-600">
        Most running coaches use a combination: Creatdrop for selling training plans as digital
        downloads, and a coaching-specific platform like Final Surge for their 1-on-1 clients
        who need structured workout delivery and analytics integration.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Get Your First 10 Online Clients</h2>
      <p className="mb-4 text-slate-600">
        New running coaches consistently make the same mistake: they build products before
        building relationships. The fastest path to your first 10 clients is:
      </p>
      <ol className="mb-8 space-y-3 text-slate-600">
        <li className="flex gap-3"><span className="font-bold text-violet-600">1.</span> Offer free plan reviews to 20 runners in your running club, Strava group, or local community. Analyze their current training and give specific feedback.</li>
        <li className="flex gap-3"><span className="font-bold text-violet-600">2.</span> Ask the 5 who found your feedback most valuable if they would like to work together at a discounted beta rate ($50-$75/month).</li>
        <li className="flex gap-3"><span className="font-bold text-violet-600">3.</span> Over-deliver for your beta clients. Document their progress with their permission.</li>
        <li className="flex gap-3"><span className="font-bold text-violet-600">4.</span> Use their results as case studies and testimonials to launch publicly at full price.</li>
        <li className="flex gap-3"><span className="font-bold text-violet-600">5.</span> Create your first digital product based on the most common patterns you saw across those 10 beta clients.</li>
      </ol>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your running programs?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts, zero platform fee on digital products.
        </p>
        <WaitlistForm source="blog-running-coach-online" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/sell-workout-programs-online" className="text-violet-600 hover:underline">
              How to Sell Workout Programs Online
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-become-online-fitness-coach" className="text-violet-600 hover:underline">
              How to Become an Online Fitness Coach
            </Link>
          </li>
          <li>
            <Link href="/blog/digital-products-personal-trainers" className="text-violet-600 hover:underline">
              Digital Products for Personal Trainers
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
