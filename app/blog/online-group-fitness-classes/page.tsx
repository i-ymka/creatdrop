import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Run Online Group Fitness Classes in 2026: Formats, Pricing, and Tools",
  description:
    "Group fitness online is the most scalable coaching model. One coach, many clients, recurring revenue. Here's how to launch and fill your first group fitness class.",
  alternates: {
    canonical: "https://creatdrop.com/blog/online-group-fitness-classes",
  },
  openGraph: {
    type: "article",
    siteName: "Creatdrop",
    title: "How to Run Online Group Fitness Classes in 2026: Formats, Pricing, and Tools",
    description:
      "Group fitness online is the most scalable coaching model. One coach, many clients, recurring revenue. Here's how to launch and fill your first group fitness class.",
    url: "https://creatdrop.com/blog/online-group-fitness-classes",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Run Online Group Fitness Classes in 2026: Formats, Pricing, and Tools",
    description:
      "Group fitness online is the most scalable coaching model. One coach, many clients, recurring revenue. Here's how to launch and fill your first group fitness class.",
  },
}

export default function OnlineGroupFitnessClassesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <Link href="/" className="text-lg font-bold text-violet-600 hover:text-violet-700 transition-colors">
            Creatdrop
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-700">Selling Programs</span>
        </nav>

        {/* Category */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-600">
          Selling Programs
        </p>

        {/* H1 */}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          How to Run Online Group Fitness Classes in 2026: Formats, Pricing, and Tools
        </h1>

        {/* Intro */}
        <p className="mb-10 text-lg text-slate-700 leading-relaxed">
          Group fitness online is the sweet spot between 1:1 coaching (high value, low scale) and
          digital products (high scale, low personal touch). One coach, 10–30 participants, recurring
          income. Here&apos;s how to build it.
        </p>

        {/* Section 1: Formats */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Group fitness formats for online coaches
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Not every format suits every coach. Choose based on your audience size, content style,
            and how hands-on you want to be. The table below covers the main models coaches are using
            to run online group fitness classes today.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Format
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Size
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Session length
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Pricing model
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Best for
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Live Zoom group class</td>
                  <td className="border border-slate-200 p-3 text-slate-600">5–30 people</td>
                  <td className="border border-slate-200 p-3 text-slate-600">30–60 min</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Per class or monthly</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Community, accountability</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Pre-recorded group program</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Unlimited</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Self-paced</td>
                  <td className="border border-slate-200 p-3 text-slate-600">One-time purchase</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Scale, passive income</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Hybrid (live + recordings)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">10–50 people</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Live + async</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Monthly subscription</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Best of both</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Cohort-based program</td>
                  <td className="border border-slate-200 p-3 text-slate-600">10–30 people</td>
                  <td className="border border-slate-200 p-3 text-slate-600">4–12 weeks</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Per cohort</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Transformation focus</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Drop-in classes (ongoing)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Varies</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Per session</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Drop-in fee $10–$25</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Yoga, HIIT, dance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Most coaches start with the cohort-based or live Zoom format because it requires the least
            upfront production. You can always layer in recordings and on-demand access once you have
            proven the content with a live audience.
          </p>
        </section>

        {/* Section 2: Pricing */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Pricing group fitness correctly
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Group fitness is underpriced by most coaches. The comparison point people default to is
            a gym class ($15–$25), but your online group program delivers far more: personalized
            attention, community, programming structure, and direct access to a coach. Price
            accordingly.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Model
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Group size
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Price per person
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Monthly revenue
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Drop-in ($15/class)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">15 people × 3 classes/week</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$15/class</td>
                  <td className="border border-slate-200 p-3 font-semibold text-slate-900">$2,700</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Monthly membership ($49/mo)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">40 members</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$49/mo</td>
                  <td className="border border-slate-200 p-3 font-semibold text-slate-900">$1,960</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">8-week cohort ($197)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">20 participants</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$197 one-time</td>
                  <td className="border border-slate-200 p-3 font-semibold text-slate-900">$3,940/cohort</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Live + on-demand ($39/mo)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">60 members</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$39/mo</td>
                  <td className="border border-slate-200 p-3 font-semibold text-slate-900">$2,340</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50 p-5">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Key insight:</strong> a cohort of 20 people at $197
              earns $3,940 in a 2-week launch window — the equivalent of 26 1:1 coaching sessions
              with one piece of marketing effort.
            </p>
          </div>
        </section>

        {/* Section 3: Tools */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Tools for running group fitness online
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            You do not need an expensive tech stack to start. Most coaches over-invest in platforms
            before they have validated demand. Start lean, then upgrade as revenue justifies it.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Need
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Free option
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Paid option
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Live class platform</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Zoom (free up to 40 min)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Zoom Pro ($15/mo)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Scheduling</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Calendly (free)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Acuity ($16/mo)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Payment + delivery</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Creatdrop</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Teachable, Kajabi</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Community / chat</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Facebook Groups, Discord (free)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Circle ($49/mo), Mighty Networks</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Email communication</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Kit free tier</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Kit paid ($29/mo)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Recording storage</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Google Drive (15GB free)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Vimeo ($12/mo)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl border border-violet-100 bg-violet-50 p-5">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Minimal viable stack:</strong> Zoom + Creatdrop +
              Facebook Group + Kit free = $0/month to launch your first group program.
            </p>
          </div>
        </section>

        {/* Section 4: Filling your first cohort */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Filling your first group fitness cohort
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            The biggest fear new coaches have is launching to empty seats. The five steps below
            eliminate that risk by building demand before you commit to a delivery date.
          </p>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Set a hard cap</p>
                <p className="text-slate-700 leading-relaxed">
                  10–15 people for your first cohort. Scarcity drives urgency and makes first-time
                  delivery manageable.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Pre-sell before you build</p>
                <p className="text-slate-700 leading-relaxed">
                  Announce the cohort, collect sign-ups (and payment) before you have recorded a
                  single session. Validation before creation.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Leverage your existing audience</p>
                <p className="text-slate-700 leading-relaxed">
                  Post 3 times leading up to launch: problem post, solution teaser, direct offer.
                  Even 500 followers can fill a 15-person cohort.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="mb-1 font-semibold text-slate-900">Early bird pricing</p>
                <p className="text-slate-700 leading-relaxed">
                  First cohort at 30–40% discount creates urgency. &quot;Founding member&quot; framing
                  makes early buyers feel special, not cheap.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="mb-1 font-semibold text-slate-900">DM your engaged followers</p>
                <p className="text-slate-700 leading-relaxed">
                  Message the 20–30 people who engage most with your content.
                  &quot;I&apos;m running a small group program next month — you&apos;re exactly who
                  I built it for.&quot;
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Section 5: Running a great live session */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Running a great live group session
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The quality of your live sessions determines whether participants renew, refer, or drop
            off. Small operational habits compound into a reputation.
          </p>
          <ul className="mb-6 space-y-3">
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Start on time</strong> — late starts erode trust
                and attendance
              </span>
            </li>
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Use breakout rooms</strong> for pairs and small
                groups (Zoom feature) — increases accountability and connection
              </span>
            </li>
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Record every session</strong> and share replay
                within 24 hours — reduces attrition for people who miss a live
              </span>
            </li>
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">End with a homework or challenge</strong> — keeps
                energy up between sessions
              </span>
            </li>
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Create a WhatsApp or Facebook group</strong> for
                between-session community
              </span>
            </li>
          </ul>
          <p className="mb-4 font-semibold text-slate-900">
            Session structure for a 45-minute group class:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Time block
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    What happens
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">0–5 min</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Welcome, attendance check-in, motivation
                  </td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">5–35 min</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Main workout (coach leads, participants follow)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">35–40 min</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Q&A or form check</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">40–45 min</td>
                  <td className="border border-slate-200 p-3 text-slate-600">
                    Wins sharing, week challenge, close
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Converting participants to long-term clients */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Converting group participants to long-term clients
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Group fitness is your best top-of-funnel for everything else. Participants experience
            your coaching style, trust your expertise, and are already paying customers. That is the
            hardest part of the sales process — already done.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Group to 1:1 coaching:</strong> offer a discounted
                first month of 1:1 to group graduates
              </span>
            </li>
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Group to digital product:</strong> sell your group
                program recordings as an on-demand product after the live cohort ends — same content,
                passive revenue
              </span>
            </li>
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Group to membership:</strong> convert seasonal
                cohort participants into a monthly membership for ongoing access
              </span>
            </li>
            <li className="flex gap-3 text-slate-700 leading-relaxed">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-400"></span>
              <span>
                <strong className="text-slate-900">Group to referrals:</strong> happy group
                participants bring friends — offer a &quot;bring a friend&quot; discount
              </span>
            </li>
          </ul>
          <p className="mt-5 text-slate-700 leading-relaxed">
            The math here is compelling. A cohort of 20 people is not just $3,940 in launch revenue.
            It is 20 potential 1:1 clients, 20 potential on-demand buyers, and 20 people who might
            each refer one more person. Think in lifetime value, not single transaction value.
          </p>
        </section>

        {/* Section 7: Marketing */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Marketing your group fitness classes
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            You do not need a large audience to fill a group fitness cohort. You need the right
            audience and a targeted launch sequence. Here are the three channels that consistently
            deliver for fitness coaches running online group programs.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Instagram Stories</h3>
              <p className="text-slate-700 leading-relaxed">
                Use the countdown sticker for &quot;cohort opens in X days&quot; leading up to launch.
                Stories create daily touchpoints without requiring polished content. A 7-day countdown
                sequence — problem, solution, social proof, details, early bird, last chance, doors
                open — is enough to fill a 15-person cohort from a 1,000-follower account.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Email list</h3>
              <p className="text-slate-700 leading-relaxed">
                Even a small list of 200 niche subscribers can fill a 10-person cohort. Email
                converts at 5–10x the rate of social media for paid offers because subscribers have
                already opted into your content. If you do not have a list, start one today — it is
                the highest-leverage asset you can build.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Existing clients</h3>
              <p className="text-slate-700 leading-relaxed">
                Your 1:1 clients are the warmest leads for your group program. The pitch writes
                itself: &quot;you would save 50% versus 1:1 and still get my coaching.&quot; For
                clients you are offboarding or who cannot afford ongoing 1:1, the group program is
                a natural next step that keeps them in your ecosystem.
              </p>
            </div>
          </div>
          <p className="mt-6 text-slate-700 leading-relaxed">
            Sequence these channels together. Email your list on day 1 of your launch window. Post
            Stories daily. DM engaged followers personally. After 5–7 days of this combined push,
            most coaches with even a modest audience hit their cohort cap.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Sell Your Group Program With Creatdrop
          </h2>
          <p className="mb-6 text-slate-600">
            List your cohort program, collect payments, and deliver recordings instantly — 0% commission,
            no monthly platform cost.
          </p>
          <WaitlistForm source="blog-online-group-fitness-classes" />
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/fitness-membership-site"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                Selling Programs
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Build a Fitness Membership Site in 2026
              </p>
            </Link>
            <Link
              href="/blog/sell-fitness-challenges-online"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                Selling Programs
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Sell Fitness Challenges Online
              </p>
            </Link>
            <Link
              href="/blog/online-fitness-community"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                Business
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Build an Online Fitness Community
              </p>
            </Link>
            <Link
              href="/blog/passive-income-fitness-coach"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                Business
              </p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                Passive Income for Fitness Coaches: 7 Revenue Streams
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
