import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Online Spin Classes in 2026: Cycling Coaching and Digital Products | Creatdrop",
  description: "Indoor cycling has a passionate, loyal audience willing to pay for quality coaching. How to sell live and on-demand spin classes, cycling programs, and digital products online.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Sell Online Spin Classes</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Digital Products</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Sell Online Spin Classes in 2026: Cycling Coaching and Digital Products</h1>
      <p className="mb-10 text-lg text-slate-600">
        Indoor cycling has one of the most enthusiastic fitness communities online. Spin class
        devotees ride multiple times per week, invest in quality equipment, and are loyal to
        instructors who deliver exceptional classes. The rise of connected fitness bikes (Peloton,
        Wahoo, Bowflex) has normalized paying for premium cycling content — and opened an enormous
        market for independent instructors who want to build outside the Peloton ecosystem.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Online Spin Product Types and Pricing</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Product</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Live weekly spin class (Zoom)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$15–$25/class or $49–$99/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Community-driven, recurring revenue</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">On-demand class library</td>
              <td className="border border-slate-200 p-3 text-slate-600">$19–$49/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Riders with irregular schedules</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">4-week cycling training program (PDF + audio)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$37–$97 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">Structured training buyers, event prep</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Century ride training plan (12-week)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$47–$127 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">Cyclists with specific event goals</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Cycling coaching (1-on-1 monthly)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$150–$400/month</td>
              <td className="border border-slate-200 p-3 text-slate-600">Performance-focused riders</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Spin instructor training course</td>
              <td className="border border-slate-200 p-3 text-slate-600">$197–$497 one-time</td>
              <td className="border border-slate-200 p-3 text-slate-600">Aspiring instructors — premium B2B niche</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Peloton Opportunity for Independent Instructors</h2>
      <p className="mb-4 text-slate-600">
        Peloton's success created a generation of indoor cycling enthusiasts who now expect
        premium, music-driven, instructor-led cycling content. Many of these riders:
      </p>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Already own bikes without Peloton subscriptions</p>
          <p className="mt-1 text-sm text-slate-600">Millions of riders use non-Peloton bikes (Schwinn, Bowflex, NordicTrack) or older Peloton hardware without active subscriptions. They want cycling content but are not locked into the Peloton ecosystem. Independent instructors can capture this audience with lower-priced, more personal alternatives.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Want community with a specific instructor</p>
          <p className="mt-1 text-sm text-slate-600">Peloton riders are often loyal to specific instructors, not the platform. When instructors leave Peloton (which happens regularly), their communities follow. Independent instructors who build genuine personal relationships with their riders create communities that are platform-independent and highly loyal.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-3">
          <p className="font-semibold text-slate-900">Prefer boutique to mass-market</p>
          <p className="mt-1 text-sm text-slate-600">A significant segment of the cycling audience actively prefers smaller, more personal class experiences to algorithm-driven mega-platforms. This preference for boutique fitness at boutique prices is the independent instructor's competitive advantage.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">What You Need to Start Selling Online Spin</h2>
      <div className="mb-8 space-y-3">
        {[
          { item: "Indoor cycling certification", detail: "Spinning (Mad Dogg Athletics), ISSA Indoor Cycling, or ACE Group Fitness with cycling specialization. Certification is not legally required for digital products but dramatically increases buyer trust and justifies premium pricing." },
          { item: "Quality audio setup", detail: "The instructor's voice and music are the primary product in spin classes. A quality USB microphone ($50–$150) and basic audio processing software make the difference between \"sounds like a home video\" and \"sounds like a professional class.\" This is the most important technical investment." },
          { item: "Music licensing for commercial use", detail: "Using copyrighted music in paid classes without licensing creates legal and platform liability. Options: Epidemic Sound, Pretzel (spin-specific), or custom playlists built from licensed tracks. Factor licensing costs ($15–$40/month) into your pricing." },
          { item: "Reliable live streaming or video hosting", detail: "Zoom works for live classes. For on-demand, you need a video host (Vimeo, Kajabi, or Creatdrop for digital downloads) or a platform built for fitness content. Choose based on whether you prioritize live community or on-demand flexibility." },
        ].map((item) => (
          <div key={item.item} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.item}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Growing Your Spin Audience</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Post ride recaps and energy clips on social", desc: "Short clips from class — the drop, the sprint, the team celebrating a milestone — perform well on Instagram and TikTok because cycling content has natural visual energy. Post the feeling of the class, not just the workout details." },
          { step: "2", title: "Target cycling communities on Facebook and Reddit", desc: "r/pelotoncycle, indoor cycling Facebook groups, and platform-specific communities (Zwift, Peloton) are where your buyers gather. Being genuinely present and helpful in these communities generates organic awareness without paid advertising." },
          { step: "3", title: "Build a free class as a trial", desc: "A free class removes purchase risk for first-time buyers. Offer a free 20-minute class in exchange for an email address. Riders who complete it and enjoy it convert to paid subscriptions at 15–30% — far higher than cold traffic." },
          { step: "4", title: "Partner with indoor cycling equipment brands", detail: "Schwinn, Bowflex, and other non-Peloton bike manufacturers often lack the content their customers want. Affiliate partnerships or sponsored content deals are accessible to smaller instructors and provide both revenue and audience access." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
              {item.step}
            </div>
            <div>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-600">{(item as any).desc || (item as any).detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your cycling programs?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-sell-online-spin-classes" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/online-group-fitness-classes" className="text-violet-600 hover:underline">
              How to Sell Online Group Fitness Classes
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-hiit-programs-online" className="text-violet-600 hover:underline">
              How to Sell HIIT Programs Online
            </Link>
          </li>
          <li>
            <Link href="/blog/running-coach-online" className="text-violet-600 hover:underline">
              Running Coach Online: How to Build Your Business
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-membership-site" className="text-violet-600 hover:underline">
              How to Build a Fitness Membership Site
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
