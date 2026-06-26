import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Personal Trainer Passive Income: How to Earn Money While You Sleep | Creatdrop",
  description: "Trading hours for dollars caps your income. How personal trainers build passive income streams with digital products, memberships, and affiliate revenue that earn 24/7.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Personal Trainer Passive Income</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Personal Trainer Passive Income: How to Earn Money While You Sleep</h1>
      <p className="mb-10 text-lg text-slate-600">
        A personal trainer who only earns while actively training clients has a hard ceiling on
        their income — determined by hours in the day and rate per session. The trainers who break
        through that ceiling build income streams that work without their direct involvement: digital
        products, memberships, and affiliate partnerships that generate revenue around the clock.
        Here is the complete guide to building passive income as a personal trainer.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Passive Income Streams for Personal Trainers</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Income Stream</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Setup Time</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Monthly Potential</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Passivity Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Digital workout programs</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–4 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$500–$10,000+</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high — create once, sell forever</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Fitness membership site</td>
              <td className="border border-slate-200 p-3 text-slate-600">4–8 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$1,000–$20,000+</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium — requires monthly content</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">YouTube ad revenue</td>
              <td className="border border-slate-200 p-3 text-slate-600">12–24 months to scale</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$5,000+</td>
              <td className="border border-slate-200 p-3 text-slate-600">High once channel is established</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Affiliate partnerships</td>
              <td className="border border-slate-200 p-3 text-slate-600">1–2 weeks to set up</td>
              <td className="border border-slate-200 p-3 text-slate-600">$100–$3,000+</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high — links earn passively</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Fitness ebooks and guides (PDF)</td>
              <td className="border border-slate-200 p-3 text-slate-600">2–5 days</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$3,000+</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high — zero delivery cost</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Online course (structured curriculum)</td>
              <td className="border border-slate-200 p-3 text-slate-600">4–12 weeks</td>
              <td className="border border-slate-200 p-3 text-slate-600">$1,000–$15,000+</td>
              <td className="border border-slate-200 p-3 text-slate-600">High once created</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Fastest Path to Passive Income: Digital Programs</h2>
      <p className="mb-4 text-slate-600">
        Digital workout programs are the fastest route to meaningful passive income for most trainers.
        They leverage existing expertise, require no ongoing time investment after creation, and can
        be sold indefinitely to an unlimited number of buyers.
      </p>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Start with what you already know</p>
          <p className="mt-1 text-sm text-slate-600">The programs you use with in-person clients are your product backlog. A 12-week strength program you run with every new client is already a digital product waiting to be formatted and sold. The hardest step is often recognizing that your existing knowledge has commercial value and beginning to package it.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">PDF programs: lowest barrier to entry</p>
          <p className="mt-1 text-sm text-slate-600">A well-designed PDF training program can be created in 2–5 days, requires no video filming or editing, and sells at $17–$67 with zero delivery cost. A trainer who sells 50 copies per month of a $37 PDF earns $1,850/month in fully passive income from a one-time creation investment.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Video programs: higher conversion, higher effort</p>
          <p className="mt-1 text-sm text-slate-600">Video programs convert at 2–3x the rate of PDF-only programs because buyers can see your coaching style before they purchase. They require 1–3 weeks of filming and editing investment, but sell at $47–$197 and generate testimonials and word-of-mouth at much higher rates than text-only products.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Building Passive Income Step by Step</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Create your first digital product", desc: "Start with the program you run most often with in-person clients. Document it fully — every workout, every set and rep scheme, every progression — and format it as a PDF or video program. Launch it to your existing client base and social following first. Their purchase and testimonials validate the product before you invest in marketing." },
          { step: "2", title: "Set up an evergreen sales page", desc: "A sales page that converts visitors to buyers around the clock is the foundation of passive income. It should include: a clear outcome statement, who the program is for, what is included, social proof from real buyers, FAQ, and a simple checkout process. A good sales page works while you sleep." },
          { step: "3", title: "Build an email list to drive consistent sales", desc: "Social media algorithms change. YouTube rankings fluctuate. An email list is stable. A trainer with 2,000 relevant email subscribers and a quality digital product generates $800–$2,000/month in consistent passive sales through automated email sequences — no active promotion required." },
          { step: "4", title: "Add affiliate revenue from products you already recommend", desc: "Every trainer recommends equipment, supplements, and apps to clients. Almost every manufacturer has an affiliate program paying 5–20% commission. Replacing \"I recommend X\" with \"I recommend X — here is my link\" costs nothing and creates recurring passive income from recommendations you make anyway." },
          { step: "5", title: "Systematize and scale", desc: "Once your first product generates consistent passive revenue, create the next product for a different segment of your audience or a different goal. Each additional product increases monthly passive income without a proportional increase in time investment. Trainers with 3–5 digital products typically earn $3,000–$8,000/month passively with the same audience." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Realistic Passive Income Milestones</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Timeline</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Milestone</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Typical Passive Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Month 1–3</td>
              <td className="border border-slate-200 p-3 text-slate-600">First product created and launched</td>
              <td className="border border-slate-200 p-3 text-slate-600">$200–$800/month</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Month 4–8</td>
              <td className="border border-slate-200 p-3 text-slate-600">Email list 500–1,000, 1–2 products</td>
              <td className="border border-slate-200 p-3 text-slate-600">$500–$2,000/month</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Month 9–18</td>
              <td className="border border-slate-200 p-3 text-slate-600">Email list 2,000–5,000, 3–5 products</td>
              <td className="border border-slate-200 p-3 text-slate-600">$2,000–$6,000/month</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Month 18–36</td>
              <td className="border border-slate-200 p-3 text-slate-600">Established content, email, product catalog</td>
              <td className="border border-slate-200 p-3 text-slate-600">$5,000–$15,000/month</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-8 text-slate-600">
        These timelines assume consistent content creation and product development. Trainers who
        already have an audience (social following, existing client base) typically reach each
        milestone faster. Trainers starting from zero require more time in months 1–6 for audience
        building before passive revenue becomes significant.
      </p>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to build your passive income stream?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-personal-trainer-passive-income" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/passive-income-fitness-coach" className="text-violet-600 hover:underline">
              Passive Income for Fitness Coaches
            </Link>
          </li>
          <li>
            <Link href="/blog/digital-products-personal-trainers" className="text-violet-600 hover:underline">
              Digital Products for Personal Trainers
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-affiliate-marketing" className="text-violet-600 hover:underline">
              Fitness Affiliate Marketing
            </Link>
          </li>
          <li>
            <Link href="/blog/how-much-do-online-fitness-coaches-make" className="text-violet-600 hover:underline">
              How Much Do Online Fitness Coaches Make?
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
