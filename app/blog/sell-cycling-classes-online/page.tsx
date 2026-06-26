import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Cycling Classes Online in 2026: Programs, Pricing, and Platforms | Creatdrop",
  description: "Indoor cycling has one of the most passionate fitness communities online. How to create, price, and sell online cycling classes and training plans to riders worldwide.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Sell Cycling Classes Online</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Digital Products</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Sell Cycling Classes Online in 2026: Programs, Pricing, and Platforms</h1>
      <p className="mb-10 text-lg text-slate-600">
        Indoor cycling has undergone a fundamental shift. What was once exclusive to boutique spin
        studios and gym group fitness rooms is now a home workout category with tens of millions of
        dedicated practitioners. Riders who invested in home bikes during 2020–2022 are no longer
        satisfied with generic content — they want quality instruction, structured training plans,
        and coaches who understand the specific demands of indoor cycling. This is a market that is
        large, loyal, and willing to pay. Here is how to build and sell online cycling content that
        generates consistent revenue.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Online Cycling Product Formats and Pricing</h2>
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
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Monthly ride membership</td>
              <td className="border border-slate-200 p-3 text-slate-600">$19–$39/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Ongoing (4–8 rides/month)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Core recurring model, highest LTV</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Structured training plan (4–12 weeks)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$97 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">Goal-oriented riders, highest intent</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Single premium ride (60–90 min)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$9–$19 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1 filming session</td>
              <td className="border border-slate-200 p-3 text-slate-600">Entry product, discovery purchase</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Power zone training program</td>
              <td className="border border-slate-200 p-3 text-slate-600">$67–$147 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–3 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">Serious riders, performance focus</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Live weekly class (Zoom)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$10–$20/class or $39–$79/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Ongoing</td>
              <td className="border border-slate-200 p-3 text-slate-600">Community energy, group motivation</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Event prep plan (sportive, gran fondo)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$127 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">High motivation, clear deadline</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Two Distinct Buyer Segments</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Entertainment-focused riders — want energy, music, motivation</p>
          <p className="mt-1 text-sm text-slate-600">This segment — historically the Peloton and boutique studio market — values the instructor"s energy, the music selection, and the motivational quality of the ride above technical training metrics. They ride because it is enjoyable and makes them feel good. They are the largest segment of indoor cycling consumers, they pay for membership models, and they churn when the content becomes repetitive or the instructor"s energy declines. Serving this segment requires consistent content volume and high production energy.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Performance-focused riders — want structured training and metrics</p>
          <p className="mt-1 text-sm text-slate-600">This segment — often cyclists who also ride outdoors, triathlon participants, or riders training toward events — values structured intervals, power zone training, and evidence-based programming. They are a smaller segment but significantly higher-value per customer: they pay more for structured plans, churn less when they see fitness improvement, and frequently upgrade to premium coaching tiers. Serving this segment requires genuine sports science knowledge and measurable outcomes.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">What Makes a Great Online Cycling Class</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Clear effort cues for every rider, not just power meter users", desc: "Power meters are common among serious cyclists but far from universal. Classes that rely exclusively on watt targets exclude the majority of home riders. Always provide effort cues in at least two formats: watts for those who have the data, and RPE (Rate of Perceived Exertion) or descriptive cues (\"this should feel like you could hold a conversation, but just barely\") for everyone else. Classes that include both reach the full spectrum of riders." },
          { step: "2", title: "Music that matches the ride structure", desc: "Music is the most underinvested element of most instructor-filmed cycling content. For rides sold to the entertainment segment, music selection and licensing are critical quality signals. Use licensed music through a platform that covers instructor content, and match the tempo and energy of music specifically to the interval structure of the ride. A climb needs a different feel from a sprint interval; generic background music treats every interval the same." },
          { step: "3", title: "Cueing that anticipates the interval, not just calls it", desc: "Elite indoor cycling instruction gives riders 10–15 seconds to prepare for a change — \"coming up in 10 seconds we are going into a 1-minute hard effort, start preparing your legs now\" — rather than calling the effort at the moment it begins. Anticipatory cueing feels professional and allows riders to properly prepare, which improves both the workout quality and the perceived instruction quality." },
          { step: "4", title: "Consistent format so riders know what to expect", desc: "Riders who return to a channel or membership for regular classes want predictability in format: a consistent warm-up structure, a recognizable workout build, and a satisfying cool-down. Predictable formats reduce cognitive load and allow riders to fully invest in the effort rather than wondering what comes next. This does not mean every ride is the same — the specific intervals and music change, but the structure is familiar." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Marketing Channels for Online Cycling Instructors</h2>
      <div className="mb-8 space-y-3">
        {[
          { channel: "Facebook groups for home cycling communities", note: "The home cycling community has enormous, active Facebook groups — particularly around specific bike brands and platforms. Participating genuinely in these communities, answering questions, and occasionally sharing free ride samples builds awareness with exactly the right audience. Instructors who engage authentically in these groups before promoting any product convert at dramatically higher rates than those who appear only with promotional content." },
          { channel: "YouTube for free ride samples", note: "A free 20–30 minute sample ride on YouTube demonstrates your instruction quality better than any marketing copy. Riders who find your YouTube ride and enjoy it are pre-qualified buyers. The YouTube ride functions as both marketing and product — it proves your value and converts viewers into customers. Instructors who post one free ride per month on YouTube consistently generate paid memberships from the audience it builds." },
          { channel: "Strava communities and challenges", note: "Strava — the social network for athletes — has active cycling communities and a challenge system that cycling instructors can use to engage performance-focused riders. Creating a Strava club for your subscribers adds a data layer to your coaching that performance riders value. Segment-based challenges and monthly distance goals give structured training plan buyers a community to train within." },
          { channel: "Instagram for instructor brand building", note: "Short clips of live or recorded rides, training plan previews, and rider testimonials perform well on Instagram for cycling instructors. The visual energy of a well-shot indoor cycling segment — lighting, music, effort — is compelling content that attracts the entertainment-focused rider segment. Behind-the-scenes content about how rides are structured appeals to performance-focused riders who want to understand the methodology." },
        ].map((item) => (
          <div key={item.channel} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.channel}</p>
            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your cycling classes?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-sell-cycling-classes-online" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/sell-online-spin-classes" className="text-violet-600 hover:underline">
              How to Sell Online Spin Classes
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
            <Link href="/blog/sell-hiit-programs-online" className="text-violet-600 hover:underline">
              How to Sell HIIT Programs Online
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
