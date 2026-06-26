import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Online Fitness Coach Tech Stack: The Tools You Actually Need | Creatdrop",
  description: "Most online fitness coaches over-invest in tools they do not need. The minimal tech stack for selling digital fitness products — and what to add as you grow.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Online Fitness Coach Tech Stack</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Online Fitness Coach Tech Stack: The Tools You Actually Need</h1>
      <p className="mb-10 text-lg text-slate-600">
        New fitness coaches frequently spend hundreds of dollars per month on software before
        earning their first dollar in revenue. Coaching platforms, email tools, video hosts,
        payment processors, website builders, scheduling apps — the industry has created a
        market of tools designed to solve problems coaches do not yet have. Here is the honest
        answer to what you actually need at each stage of building an online fitness business,
        and what you can safely ignore until you have the revenue to justify it.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Tech Stack by Stage</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Stage 1: First $1,000 in revenue — minimal viable stack</p>
          <p className="mt-1 text-sm text-slate-600">At this stage, complexity is your enemy. You need exactly three things: a way to sell (a digital product platform with checkout), a way to deliver (file hosting or a simple video library), and a way to communicate (email). Everything else is a distraction from the only task that matters — making your first sales and learning what your audience actually wants to buy. Monthly cost at this stage: $0–$30.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Stage 2: $1,000–$5,000/month — adding email and landing pages</p>
          <p className="mt-1 text-sm text-slate-600">Once you have proven product-market fit with initial sales, you can add tools that scale the top of the funnel: an email marketing platform to build your list, and a landing page tool to create product-specific sales pages. At this stage, a proper email sequence that nurtures new subscribers toward purchase and a dedicated product page replace the generic checkout links that got you to $1,000/month. Monthly cost: $30–$80.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Stage 3: $5,000+/month — membership, scheduling, and automation</p>
          <p className="mt-1 text-sm text-slate-600">At this revenue level, the business benefits from automation: automated email sequences, membership management for subscription products, and scheduling tools for live coaching. The investment in these tools is justified by the saved time and the revenue they help retain. Monthly cost: $100–$300 depending on membership platform and email volume.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Tool Recommendations by Category</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Category</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Minimal Option</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Scale Option</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">When to Upgrade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Digital product sales</td>
              <td className="border border-slate-200 p-3 text-slate-600">Creatdrop, Gumroad</td>
              <td className="border border-slate-200 p-3 text-slate-600">Creatdrop, Kajabi</td>
              <td className="border border-slate-200 p-3 text-slate-600">Start here — do not delay</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email marketing</td>
              <td className="border border-slate-200 p-3 text-slate-600">Mailchimp free tier</td>
              <td className="border border-slate-200 p-3 text-slate-600">ConvertKit, ActiveCampaign</td>
              <td className="border border-slate-200 p-3 text-slate-600">When you hit 500 subscribers</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Video hosting</td>
              <td className="border border-slate-200 p-3 text-slate-600">YouTube (unlisted)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Vimeo, Wistia</td>
              <td className="border border-slate-200 p-3 text-slate-600">When protecting content matters</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Client scheduling</td>
              <td className="border border-slate-200 p-3 text-slate-600">Calendly free</td>
              <td className="border border-slate-200 p-3 text-slate-600">Acuity Scheduling</td>
              <td className="border border-slate-200 p-3 text-slate-600">When 1-on-1 clients exceed 5</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Website / landing pages</td>
              <td className="border border-slate-200 p-3 text-slate-600">Linktree, product page</td>
              <td className="border border-slate-200 p-3 text-slate-600">Squarespace, Webflow</td>
              <td className="border border-slate-200 p-3 text-slate-600">After first $3,000 revenue</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Program delivery</td>
              <td className="border border-slate-200 p-3 text-slate-600">PDF + video links</td>
              <td className="border border-slate-200 p-3 text-slate-600">Teachable, Thinkific</td>
              <td className="border border-slate-200 p-3 text-slate-600">When course structure matters</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Live sessions</td>
              <td className="border border-slate-200 p-3 text-slate-600">Zoom free (40-min limit)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Zoom Pro, Streamyard</td>
              <td className="border border-slate-200 p-3 text-slate-600">When running paid live classes</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Community</td>
              <td className="border border-slate-200 p-3 text-slate-600">Free Facebook group</td>
              <td className="border border-slate-200 p-3 text-slate-600">Circle, Mighty Networks</td>
              <td className="border border-slate-200 p-3 text-slate-600">When community is a product</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Tools to Avoid Until You Need Them</h2>
      <div className="mb-8 space-y-3">
        {[
          { mistake: "All-in-one coaching platforms at $100–$300/month before you have clients", detail: "Platforms like Mindbody, Trainerize, and TrueCoach are designed for coaches managing 20+ active clients with complex programming needs. At 0–5 clients, the overhead of learning and paying for these platforms generates no return. A spreadsheet, a PDF program, and a free Zoom account manage the same client load for nothing. Invest in coaching platforms when your current tools are creating real friction — not before." },
          { mistake: "Custom website development before you have proven what to say", detail: "A custom website built before you understand your niche, your offer, and your audience's language will need to be rewritten as you learn. A product listing page or a simple Squarespace site built after your first 10 sales is dramatically more effective than a beautifully designed website built on guesses about what your buyer wants. Website investment comes after market validation, not before." },
          { mistake: "Paid advertising before you understand organic conversion", detail: "Running paid ads before you understand which content and which messaging converts your audience organically is burning money for data you could get for free. Organic conversion testing — what posts drive profile visits, which lead magnets convert, which email subject lines get opened — teaches you what to scale with paid spend. Ads amplify what works; they do not discover what works for you." },
        ].map((item) => (
          <div key={item.mistake} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.mistake}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Start selling with the simplest possible stack</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-online-fitness-coach-tech-stack" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/how-to-start-online-fitness-business" className="text-violet-600 hover:underline">
              How to Start an Online Fitness Business
            </Link>
          </li>
          <li>
            <Link href="/blog/best-platform-sell-fitness-products" className="text-violet-600 hover:underline">
              Best Platform to Sell Fitness Products
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-revenue-streams" className="text-violet-600 hover:underline">
              Fitness Coach Revenue Streams
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-workout-programs-online" className="text-violet-600 hover:underline">
              How to Sell Workout Programs Online
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
