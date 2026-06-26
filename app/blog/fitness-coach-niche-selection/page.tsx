import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Niche Selection: How to Find Your Most Profitable Niche | Creatdrop",
  description: "Choosing the right niche is the most important business decision a fitness coach makes. A framework for evaluating niches by demand, competition, monetization, and personal fit.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Niche Selection</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Niche Selection: How to Find Your Most Profitable Niche</h1>
      <p className="mb-10 text-lg text-slate-600">
        "I help everyone get fit" is the most common and most expensive mistake in online fitness
        coaching. Coaches who try to serve everyone serve no one well and compete on price with
        thousands of identical generalists. Coaches who specialize deeply in one audience build
        authority, command premium rates, and generate word-of-mouth that generic coaches cannot.
        Here is a rigorous framework for choosing the niche that gives you the best chance of
        building a sustainable coaching business.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 4-Factor Niche Evaluation Framework</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">1. Demand: Are people actively searching for this?</p>
          <p className="mt-1 text-sm text-slate-600">A niche with real demand has people actively searching for solutions — on Google, YouTube, Reddit, and social media. Use free tools like Google Keyword Planner or Ubersuggest to verify search volume for your niche terms. A niche with zero organic search traffic requires you to create demand from scratch, which is far harder than meeting existing demand.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">2. Competition: Can you differentiate?</p>
          <p className="mt-1 text-sm text-slate-600">Some competition is healthy — it validates demand. Complete absence of competition often means no market. The question is not "is there competition?" but "can I be meaningfully better or different for a specific subset of this audience?" Differentiation can come from audience specificity ("strength training for women in their 40s"), method specificity ("programming based on RPE auto-regulation"), or personal story (coaching others through the same challenge you personally overcame).</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">3. Monetization: Will this audience pay?</p>
          <p className="mt-1 text-sm text-slate-600">Not all niches monetize equally. The factors that predict high willingness to pay: buyers have a specific, high-stakes problem (health, performance, pregnancy); buyers have disposable income (age 30+, professionals); the problem is urgent (injury recovery, event preparation, postpartum); and there is precedent of people paying for solutions in this space (check if competitors are selling paid products).</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">4. Authenticity: Can you sustain this for years?</p>
          <p className="mt-1 text-sm text-slate-600">Content creation and coaching require consistent output over months and years. A niche that aligns with your genuine experience, passion, or personal story is far more sustainable than one you chose purely for business reasons. The coaches who build the largest audiences in any niche are the ones who are authentically inside the same community as their buyers.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Niche Comparison: Revenue Potential and Competition</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Niche</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Demand</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Competition</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Avg Price Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">General fat loss</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
              <td className="border border-slate-200 p-3 text-slate-600">Extreme</td>
              <td className="border border-slate-200 p-3 text-slate-600">Low (commodity market)</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Prenatal / postpartum fitness</td>
              <td className="border border-slate-200 p-3 text-slate-600">High</td>
              <td className="border border-slate-200 p-3 text-slate-600">Low</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Women over 50 fitness</td>
              <td className="border border-slate-200 p-3 text-slate-600">High, growing</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very low</td>
              <td className="border border-slate-200 p-3 text-slate-600">High</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Mobility and pain relief</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium-high</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Powerlifting for beginners</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Calisthenics skills</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium-high</td>
              <td className="border border-slate-200 p-3 text-slate-600">Low-medium</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium-high</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Desk worker fitness</td>
              <td className="border border-slate-200 p-3 text-slate-600">High</td>
              <td className="border border-slate-200 p-3 text-slate-600">Low</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Common Niche Selection Mistakes</h2>
      <div className="mb-8 space-y-3">
        {[
          { mistake: "Choosing based on personal passion alone", detail: "You may be passionate about a niche that has no paying audience. \"Parkour for adults\" may be your passion, but the audience is small and non-paying. Passion is necessary but insufficient — pair it with demand and monetization data." },
          { mistake: "Choosing the biggest possible market", detail: "General fitness is the largest market and the hardest to enter. The bigger the market, the more competition from well-funded operators. Counter-intuitively, starting smaller and more specific is usually faster to first revenue." },
          { mistake: "Choosing based on what will make you look impressive", detail: "Some coaches choose niches that sound elite (professional athletes, elite military training) without having the background or the audience. The best niche is not the most impressive one — it is the one where you have genuine expertise and a real community." },
          { mistake: "Waiting until the perfect niche is obvious", detail: "Many coaches delay starting because they cannot identify the \"right\" niche with certainty. The niche becomes clearer through doing — your first 20 clients will teach you who you serve best. Start specific, refine based on who actually buys and who gets the best results." },
        ].map((item) => (
          <div key={item.mistake} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.mistake}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell in your niche?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-niche-selection" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-niche-ideas" className="text-violet-600 hover:underline">
              Fitness Niche Ideas for Online Coaches
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-start-online-fitness-business" className="text-violet-600 hover:underline">
              How to Start an Online Fitness Business
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-branding" className="text-violet-600 hover:underline">
              Fitness Coach Branding Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-case-studies" className="text-violet-600 hover:underline">
              Fitness Coach Case Studies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
