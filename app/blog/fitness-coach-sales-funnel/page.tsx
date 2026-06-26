import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Sales Funnel in 2026: The Complete System for Selling Programs Online | Creatdrop",
  description: "A sales funnel turns strangers into buyers automatically. The exact funnel stages, tools, and metrics fitness coaches use to sell digital programs while they sleep.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Sales Funnel</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Sales Funnel in 2026: The Complete System for Selling Programs Online</h1>
      <p className="mb-10 text-lg text-slate-600">
        A fitness coach without a sales funnel trades time for money one client at a time.
        A coach with a funnel sells while sleeping, traveling, and coaching other clients.
        The funnel is not complicated — it is a series of intentional steps that move a
        stranger from discovering you to buying from you, mostly automated. Here is exactly
        how to build one.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 5-Stage Fitness Funnel</h2>
      <div className="mb-8 space-y-4">
        {[
          {
            stage: "1",
            name: "Awareness",
            desc: "A stranger discovers you through content — a TikTok video, a YouTube search result, a Pinterest pin, or a friend sharing your post. They have no idea who you are yet.",
            tools: "Instagram, TikTok, YouTube, Pinterest, Google",
            metric: "Reach and impressions",
          },
          {
            stage: "2",
            name: "Interest",
            desc: "They follow you, save your content, or visit your profile. They are interested but not ready to buy. Your job here is to give them a reason to give you their email address.",
            tools: "Profile bio, link-in-bio page, content quality",
            metric: "Profile visits, follows, link clicks",
          },
          {
            stage: "3",
            name: "Lead capture",
            desc: "They claim your lead magnet (free PDF, challenge, quiz) and join your email list. This is the most important stage — email subscribers convert 5-10x better than social followers.",
            tools: "Lead magnet, email opt-in page, email provider",
            metric: "Email opt-in rate (target: 20-35%)",
          },
          {
            stage: "4",
            name: "Nurture",
            desc: "An automated email sequence educates, builds trust, and demonstrates results over 7-14 days. You are not selling yet — you are making the sale inevitable.",
            tools: "Email automation (ConvertKit, Mailchimp, Klaviyo)",
            metric: "Email open rate (target: 30-45%), click rate (target: 3-8%)",
          },
          {
            stage: "5",
            name: "Conversion",
            desc: "A direct offer email (or series) presents your paid product with a clear CTA. The subscriber has been warmed up — they know you, trust you, and see the result they want.",
            tools: "Creatdrop product page, sales email, checkout",
            metric: "Subscriber-to-buyer rate (target: 2-5%)",
          },
        ].map((item) => (
          <div key={item.stage} className="rounded-xl border border-slate-200 p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                {item.stage}
              </div>
              <p className="text-lg font-semibold text-slate-900">Stage {item.stage}: {item.name}</p>
            </div>
            <p className="mb-2 text-sm text-slate-600">{item.desc}</p>
            <p className="text-xs text-slate-500"><span className="font-medium">Tools:</span> {item.tools}</p>
            <p className="text-xs text-slate-500"><span className="font-medium">Key metric:</span> {item.metric}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Minimum Viable Funnel</h2>
      <p className="mb-4 text-slate-600">
        You do not need complex software to start. The simplest funnel that actually converts:
      </p>
      <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-violet-600 font-bold">→</span>
            <p className="text-slate-700"><span className="font-semibold">Social content</span> (Instagram/TikTok/YouTube) ends with "Free [X] in my bio"</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-violet-600 font-bold">→</span>
            <p className="text-slate-700"><span className="font-semibold">Bio link</span> goes to a simple opt-in page: headline, 3 bullet benefits, email form</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-violet-600 font-bold">→</span>
            <p className="text-slate-700"><span className="font-semibold">Confirmation email</span> delivers the lead magnet instantly</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-violet-600 font-bold">→</span>
            <p className="text-slate-700"><span className="font-semibold">6-email automated sequence</span> over 10 days: welcome → story → teaching → proof → soft pitch → offer</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-violet-600 font-bold">→</span>
            <p className="text-slate-700"><span className="font-semibold">Offer email</span> links to Creatdrop product page with clear price, description, and buy button</p>
          </div>
        </div>
      </div>
      <p className="mb-8 text-slate-600">
        This five-step funnel can be built in a weekend using ConvertKit (free up to 1,000
        subscribers), a Carrd opt-in page ($19/year), and a Creatdrop product page ($0/month).
        Total cost: under $20/year to start.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 6-Email Nurture Sequence</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Email</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Send Day</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Content</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">CTA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">1 — Delivery</td>
              <td className="border border-slate-200 p-3 text-slate-600">Immediately</td>
              <td className="border border-slate-200 p-3 text-slate-600">Lead magnet + warm welcome</td>
              <td className="border border-slate-200 p-3 text-slate-600">Download the freebie</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">2 — Story</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 2</td>
              <td className="border border-slate-200 p-3 text-slate-600">Your transformation story — why you coach</td>
              <td className="border border-slate-200 p-3 text-slate-600">Reply with your goal</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">3 — Teaching</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 4</td>
              <td className="border border-slate-200 p-3 text-slate-600">One high-value tip they can apply today</td>
              <td className="border border-slate-200 p-3 text-slate-600">Try this today</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">4 — Proof</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 6</td>
              <td className="border border-slate-200 p-3 text-slate-600">Client result story with specific numbers</td>
              <td className="border border-slate-200 p-3 text-slate-600">See the full story</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">5 — Soft pitch</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 8</td>
              <td className="border border-slate-200 p-3 text-slate-600">Introduce the product as the natural next step</td>
              <td className="border border-slate-200 p-3 text-slate-600">Learn more about [program]</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">6 — Offer</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 10</td>
              <td className="border border-slate-200 p-3 text-slate-600">Direct offer: price, what's included, deadline or bonus</td>
              <td className="border border-slate-200 p-3 text-slate-600">Get instant access</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Funnel Tool Stack (Budget Options)</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Function</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Free Option</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Paid Option</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Monthly Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Product sales page</td>
              <td className="border border-slate-200 p-3 text-slate-600">Creatdrop</td>
              <td className="border border-slate-200 p-3 text-slate-600">Creatdrop</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email marketing</td>
              <td className="border border-slate-200 p-3 text-slate-600">ConvertKit (up to 1k subs)</td>
              <td className="border border-slate-200 p-3 text-slate-600">ConvertKit Creator ($25/mo)</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0–$25</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Opt-in landing page</td>
              <td className="border border-slate-200 p-3 text-slate-600">ConvertKit landing page</td>
              <td className="border border-slate-200 p-3 text-slate-600">Carrd ($19/yr) or Unbounce</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0–$2</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Lead magnet delivery</td>
              <td className="border border-slate-200 p-3 text-slate-600">ConvertKit automated email</td>
              <td className="border border-slate-200 p-3 text-slate-600">Same</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Analytics</td>
              <td className="border border-slate-200 p-3 text-slate-600">Google Analytics 4</td>
              <td className="border border-slate-200 p-3 text-slate-600">Same</td>
              <td className="border border-slate-200 p-3 text-slate-600">$0</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Funnel Metrics and Optimization</h2>
      <p className="mb-4 text-slate-600">
        A funnel with no metrics is a guess. Track these numbers weekly and know what each one means:
      </p>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Metric</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Healthy Range</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">If Below — Fix This</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Opt-in page conversion</td>
              <td className="border border-slate-200 p-3 text-slate-600">20–40%</td>
              <td className="border border-slate-200 p-3 text-slate-600">Headline specificity; make the lead magnet more concrete</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email open rate</td>
              <td className="border border-slate-200 p-3 text-slate-600">30–50%</td>
              <td className="border border-slate-200 p-3 text-slate-600">Subject line — use curiosity or specificity, not generic titles</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Email click rate</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–8%</td>
              <td className="border border-slate-200 p-3 text-slate-600">CTA placement — put the link earlier and more often in the email</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Product page conversion</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–6%</td>
              <td className="border border-slate-200 p-3 text-slate-600">Social proof — add testimonials and client results above the fold</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Subscriber-to-buyer rate (30 days)</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–5%</td>
              <td className="border border-slate-200 p-3 text-slate-600">Email sequence — add more proof emails before the pitch</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Revenue per subscriber</td>
              <td className="border border-slate-200 p-3 text-slate-600">$1–$5</td>
              <td className="border border-slate-200 p-3 text-slate-600">Product price or sequence — low RPS often means underprice or no offer email</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Common Funnel Mistakes</h2>
      <div className="mb-8 space-y-3">
        {[
          { mistake: "Building the funnel before building the audience", fix: "A funnel with no traffic converts nothing. Get to 1,000 social followers or 200 email subscribers before optimizing the funnel." },
          { mistake: "Sending traffic to a homepage instead of an opt-in page", fix: "Your homepage serves multiple purposes — your opt-in page has one job. Bio link should always go to a dedicated opt-in page, not your website." },
          { mistake: "No email automation — manually sending sequences", fix: "Manual sequences fail the moment you get busy. Automation is non-negotiable. ConvertKit free tier handles this for up to 1,000 subscribers." },
          { mistake: "Pitching too early (email 1 or 2)", fix: "A subscriber who gets a sales pitch before a value email unsubscribes. Minimum 4 value-first emails before any product mention." },
          { mistake: "No follow-up after the sequence ends", fix: "Most subscribers do not buy on day 10 — they buy on day 47 after the 6th email they received from you. Keep emailing weekly with value content." },
        ].map((item) => (
          <div key={item.mistake} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">Mistake: {item.mistake}</p>
            <p className="mt-1 text-sm text-slate-600">Fix: {item.fix}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to build a funnel that sells for you?</h2>
        <p className="mb-6 text-slate-600">
          Creatdrop gives you the product page and checkout — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-sales-funnel" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-lead-magnet" className="text-violet-600 hover:underline">
              Fitness Coach Lead Magnet Ideas
            </Link>
          </li>
          <li>
            <Link href="/blog/personal-trainer-email-marketing" className="text-violet-600 hover:underline">
              Personal Trainer Email Marketing Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-get-fitness-clients-online" className="text-violet-600 hover:underline">
              How to Get Fitness Clients Online
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-product-launch" className="text-violet-600 hover:underline">
              How to Launch a Fitness Product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
