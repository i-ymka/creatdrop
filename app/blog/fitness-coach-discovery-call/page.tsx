import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Discovery Call: How to Run One That Converts | Creatdrop",
  description: "A discovery call converts interested prospects into paying clients. The exact questions to ask, how to present your offer, and how to close without feeling like a salesperson.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Discovery Call</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Discovery Call: How to Run One That Converts</h1>
      <p className="mb-10 text-lg text-slate-600">
        For fitness coaches selling high-ticket programs ($200/month+), the discovery call is
        the single highest-leverage sales activity. Done well, a 30-minute call converts 30–60%
        of qualified prospects into paying clients. Done poorly — by coaches who either pitch too
        hard or fail to demonstrate value — the same call converts at 5–15%. Here is the exact
        framework for running discovery calls that feel helpful to the prospect and profitable
        for the coach.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 5-Stage Discovery Call Framework</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Stage</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Duration</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">1. Connection</td>
              <td className="border border-slate-200 p-3 text-slate-600">3–5 min</td>
              <td className="border border-slate-200 p-3 text-slate-600">Build rapport, set agenda</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">2. Situation</td>
              <td className="border border-slate-200 p-3 text-slate-600">8–10 min</td>
              <td className="border border-slate-200 p-3 text-slate-600">Understand where they are now</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">3. Destination</td>
              <td className="border border-slate-200 p-3 text-slate-600">5–7 min</td>
              <td className="border border-slate-200 p-3 text-slate-600">Clarify where they want to be</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">4. Solution</td>
              <td className="border border-slate-200 p-3 text-slate-600">5–7 min</td>
              <td className="border border-slate-200 p-3 text-slate-600">Present how you bridge the gap</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">5. Close</td>
              <td className="border border-slate-200 p-3 text-slate-600">5–10 min</td>
              <td className="border border-slate-200 p-3 text-slate-600">Handle objections, invite commitment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Questions That Drive Each Stage</h2>
      <div className="mb-8 space-y-4">
        {[
          {
            stage: "Stage 2: Situation Questions",
            questions: [
              "\"Tell me about where you are with your fitness right now.\"",
              "\"How long have you been dealing with [the problem they mentioned]?\"",
              "\"What have you tried before? What worked, what didn't?\"",
              "\"What does a typical week of exercise look like for you right now?\"",
            ],
            note: "Listen more than you talk in this stage. The goal is to understand the specifics of their situation so you can connect your solution to their exact reality, not a generic pitch.",
          },
          {
            stage: "Stage 3: Destination Questions",
            questions: [
              "\"What does success look like for you in 12 weeks?\"",
              "\"If everything went perfectly, what would be different in your life?\"",
              "\"How important is this goal to you right now, on a scale of 1–10?\"",
              "\"What happens if nothing changes in the next 6 months?\"",
            ],
            note: "The last question is the most important. It connects inaction to a real cost in the prospect's life — and makes the investment in coaching feel small relative to the alternative.",
          },
          {
            stage: "Stage 4: Solution Presentation",
            questions: [
              "\"Based on what you've told me, here's what I'm seeing...\"",
              "\"The reason [past approaches] didn't work is typically [specific reason].\"",
              "\"What I do differently is [specific differentiator] — and this is why it works for people in your situation.\"",
            ],
            note: "Connect every element of your program directly to something they said earlier in the call. \"You mentioned you've struggled with consistency — that's exactly why I built in weekly check-ins.\" Personalized presentation converts dramatically better than a generic pitch.",
          },
        ].map((item) => (
          <div key={item.stage} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900 mb-3">{item.stage}</p>
            <ul className="space-y-1 mb-3">
              {item.questions.map((q, i) => (
                <li key={i} className="text-sm text-slate-600 flex gap-2">
                  <span className="text-violet-600 font-medium flex-shrink-0">→</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 italic">{item.note}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Handling the Most Common Objections</h2>
      <div className="mb-8 space-y-3">
        {[
          {
            objection: "\"I need to think about it.\"",
            response: "\"Absolutely — what specifically do you want to think through? I want to make sure you have everything you need to make the right decision.\" Then address the real concern that's hiding behind \"think about it.\""
          },
          {
            objection: "\"It's too expensive.\"",
            response: "\"I understand. Can I ask what feels like the right investment for this? [Listen] Here's how I think about the value: [connect price to their stated outcome and timeline]. Most of my clients say the program pays for itself within [specific timeframe/outcome].\""
          },
          {
            objection: "\"I'm not sure if now is the right time.\"",
            response: "\"What would need to be true for the timing to feel right? [Listen] The interesting thing about fitness goals is that waiting typically makes them harder, not easier — [specific reason relevant to their situation]. What would you lose by starting now versus in 3 months?\""
          },
          {
            objection: "\"I want to try it on my own first.\"",
            response: "\"That makes sense. Can I ask — you've been trying on your own for [timeframe they mentioned]. What makes you think the next 3 months will be different from the last 3?\" This is gentle but direct — it addresses the actual pattern without being confrontational."
          },
        ].map((item) => (
          <div key={item.objection} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.objection}</p>
            <p className="mt-2 text-sm text-slate-600">{item.response}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Pre-Call Qualification: Only Speak to Ready Buyers</h2>
      <p className="mb-4 text-slate-600">
        The single biggest improvement most coaches can make to their discovery call conversion
        rate is better pre-call qualification. Use a short intake form before booking:
      </p>
      <div className="mb-8 space-y-2">
        {[
          "What is your primary fitness goal right now?",
          "What have you tried before, and what happened?",
          "What is your current exercise frequency?",
          "Are you in a position to invest in coaching if we're a good fit?",
          "What is your timeline for achieving this goal?",
        ].map((q, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">{i + 1}</span>
            <p className="text-sm text-slate-600">{q}</p>
          </div>
        ))}
      </div>
      <p className="mb-8 text-slate-600">
        Coaches who screen for investment readiness before the call spend 80% of their time with
        motivated prospects instead of people who are "just curious." This single change typically
        doubles conversion rate without changing anything about the call itself.
      </p>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to build your coaching business?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-discovery-call" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-sales-funnel" className="text-violet-600 hover:underline">
              Fitness Coach Sales Funnel
            </Link>
          </li>
          <li>
            <Link href="/blog/online-personal-training-packages" className="text-violet-600 hover:underline">
              Online Personal Training Packages
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-get-fitness-clients-online" className="text-violet-600 hover:underline">
              How to Get Fitness Clients Online
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-pricing" className="text-violet-600 hover:underline">
              Fitness Coach Pricing Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
