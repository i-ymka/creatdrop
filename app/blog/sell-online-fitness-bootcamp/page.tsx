import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell an Online Fitness Bootcamp in 2026: Structure, Pricing, and Launch | Creatdrop",
  description: "Online fitness bootcamps generate intense community energy and premium pricing. How to design, price, and launch a virtual bootcamp that fills seats and gets results.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Sell Online Fitness Bootcamp</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Digital Products</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Sell an Online Fitness Bootcamp in 2026: Structure, Pricing, and Launch</h1>
      <p className="mb-10 text-lg text-slate-600">
        Online fitness bootcamps combine the energy of group training with the reach of digital
        delivery. A well-run bootcamp creates intense community, drives extraordinary client results,
        and commands premium pricing that self-paced programs cannot match. The time-limited,
        cohort-based model also generates natural urgency that makes selling easier. Here is how
        to design, price, and fill your first — or next — online fitness bootcamp.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Bootcamp Formats and Pricing</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Format</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Duration</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Self-paced video bootcamp</td>
              <td className="border border-slate-200 p-3 text-slate-600">4–8 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$147</td>
              <td className="border border-slate-200 p-3 text-slate-600">Pre-recorded, on-demand access</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Cohort bootcamp (live + recorded)</td>
              <td className="border border-slate-200 p-3 text-slate-600">4–6 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$97–$297</td>
              <td className="border border-slate-200 p-3 text-slate-600">Scheduled start/end, community access</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Live daily bootcamp</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–4 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$97–$247</td>
              <td className="border border-slate-200 p-3 text-slate-600">Live sessions via Zoom, recordings available</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">VIP small group bootcamp</td>
              <td className="border border-slate-200 p-3 text-slate-600">4–8 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$297–$797</td>
              <td className="border border-slate-200 p-3 text-slate-600">Small cohort (10–20), direct coach access</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Annual bootcamp membership</td>
              <td className="border border-slate-200 p-3 text-slate-600">4 cohorts/year</td>
              <td className="border border-slate-200 p-3 text-slate-600">$197–$497/year</td>
              <td className="border border-slate-200 p-3 text-slate-600">Members join each quarterly cohort</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">What Makes Bootcamps Sell at Premium Prices</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Community and accountability are the product</p>
          <p className="mt-1 text-sm text-slate-600">Buyers don"t purchase a bootcamp for the workout content — they can get workouts for free. They purchase for the community, the accountability of a start date, the shared experience with other participants, and the coach"s direct presence. These elements justify 2–5x the price of a self-paced program with identical content.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Scarcity and cohort urgency drives enrollment</p>
          <p className="mt-1 text-sm text-slate-600">A self-paced program can be bought anytime — and therefore can be bought later, which often means never. A bootcamp starts on a specific date with limited enrollment. "Registration closes Friday" is genuinely true, and that urgency converts fence-sitters. The enrollment window creates a reason to decide now.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Results are dramatically better than solo programs</p>
          <p className="mt-1 text-sm text-slate-600">Completion rates for group bootcamps are 60–80%, compared to 10–20% for self-paced programs. Higher completion means better results. Better results generate stronger testimonials. Stronger testimonials fill the next cohort. The bootcamp model is self-reinforcing when executed well.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Structure a 4-Week Online Bootcamp</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Pre-bootcamp onboarding (1 week before start)", desc: "Send a welcome sequence: community access, equipment checklist, introductory videos, and a kickoff call. Participants who feel prepared before week 1 complete at dramatically higher rates. Use this week to build anticipation and reduce first-week dropout." },
          { step: "2", title: "Week 1: Foundation and community building", desc: "Start with accessible workouts that build confidence. Host a live kickoff call or Q&A. Encourage introductions in the community group. The first week sets the social dynamic — make it safe for participants to share struggles and victories publicly." },
          { step: "3", title: "Week 2–3: Progressive intensity and engagement", desc: "Increase workout intensity and complexity. Add weekly challenge elements — a personal record challenge, a transformation photo submission, a community leaderboard. Mid-program engagement activities prevent the \"week 3 drop-off\" that kills completion rates." },
          { step: "4", title: "Week 4: Finale and testimonial collection", desc: "Frame the final week as the culmination, not just the end. Host a finale call, collect transformation photos and written testimonials, and celebrate completions publicly. The finale generates your marketing content for the next cohort enrollment period." },
          { step: "5", title: "Post-bootcamp: Next step offer", desc: "Within 48 hours of the bootcamp ending, present the next offer — the next cohort, an ongoing membership, or a self-paced continuation program. Participants who just completed are at peak motivation and most likely to continue. This is your highest-converting sales moment." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Bootcamp Launch Timeline</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Timing</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">6 weeks before start</td>
              <td className="border border-slate-200 p-3 text-slate-600">Announce bootcamp, open waitlist, begin teaser content</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">4 weeks before start</td>
              <td className="border border-slate-200 p-3 text-slate-600">Open enrollment at early-bird price, email waitlist first</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">2 weeks before start</td>
              <td className="border border-slate-200 p-3 text-slate-600">Early-bird closes, standard price opens, post testimonials</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">5 days before close</td>
              <td className="border border-slate-200 p-3 text-slate-600">Final push email sequence (3 emails), post enrollment count</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Enrollment close</td>
              <td className="border border-slate-200 p-3 text-slate-600">Close enrollment, send onboarding to all participants</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to launch your online bootcamp?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-sell-online-fitness-bootcamp" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/sell-fitness-challenges-online" className="text-violet-600 hover:underline">
              How to Sell Fitness Challenges Online
            </Link>
          </li>
          <li>
            <Link href="/blog/online-group-fitness-classes" className="text-violet-600 hover:underline">
              How to Sell Online Group Fitness Classes
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-product-launch" className="text-violet-600 hover:underline">
              Fitness Product Launch Strategy
            </Link>
          </li>
          <li>
            <Link href="/blog/online-fitness-community" className="text-violet-600 hover:underline">
              How to Build an Online Fitness Community
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
