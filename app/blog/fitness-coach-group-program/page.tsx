import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Launch a Fitness Coach Group Program: Structure, Pricing, and Sales | Creatdrop",
  description: "Group programs let fitness coaches serve more clients at higher margins without adding more hours. How to design, price, fill, and deliver a group coaching program that gets results.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Group Program</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">How to Launch a Fitness Coach Group Program: Structure, Pricing, and Sales</h1>
      <p className="mb-10 text-lg text-slate-600">
        Group programs are the most efficient way to scale a coaching business without sacrificing
        the accountability and human connection that make coaching effective. One coach, 15–30 clients,
        one price point that is premium for clients and highly profitable for you. The coaches who
        run successful group programs understand that group dynamics are not a compromise on
        quality — they are a feature that makes client results better. Here is how to design and
        launch a group program that fills and delivers.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Group Program Structures and Pricing</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Format</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Group Size</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Price Per Person</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Revenue Per Cohort</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Small group (high-touch)</td>
              <td className="border border-slate-200 p-3 text-slate-600">5–10 clients</td>
              <td className="border border-slate-200 p-3 text-slate-600">$497–$997</td>
              <td className="border border-slate-200 p-3 text-slate-600">$2,500–$9,970</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Medium group (standard)</td>
              <td className="border border-slate-200 p-3 text-slate-600">15–25 clients</td>
              <td className="border border-slate-200 p-3 text-slate-600">$197–$497</td>
              <td className="border border-slate-200 p-3 text-slate-600">$2,955–$12,425</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Large group (scalable)</td>
              <td className="border border-slate-200 p-3 text-slate-600">30–100 clients</td>
              <td className="border border-slate-200 p-3 text-slate-600">$97–$197</td>
              <td className="border border-slate-200 p-3 text-slate-600">$2,910–$19,700</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Hybrid (program + group calls)</td>
              <td className="border border-slate-200 p-3 text-slate-600">20–50 clients</td>
              <td className="border border-slate-200 p-3 text-slate-600">$297–$697</td>
              <td className="border border-slate-200 p-3 text-slate-600">$5,940–$34,850</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Design the Program</h2>
      <div className="mb-8 space-y-4">
        {[
          {
            step: "1",
            title: "Define a single, specific outcome",
            desc: "The most successful group programs promise one clear transformation: \"Lose your first 10 pounds in 12 weeks,\" \"Build a pull-up from zero in 8 weeks,\" \"Run your first 5K in 10 weeks.\" Generic accountability groups — \"get fit with a supportive community\" — do not sell. Specificity creates belief that the outcome is achievable and attracts clients who want exactly that result. The more specific the promised outcome, the easier the sales conversation.",
          },
          {
            step: "2",
            title: "Set a fixed timeline with a clear start and end date",
            desc: "Open-ended programs have low completion rates and low satisfaction. Programs with a defined start and end — 8 weeks, 12 weeks, 90 days — create urgency to enroll, expectation of a journey with a destination, and a natural milestone for testimonials. Cohort programs (everyone starts together) create peer accountability that dramatically improves completion rates. The shared timeline is not a limitation — it is a design feature that makes the program work.",
          },
          {
            step: "3",
            title: "Build weekly deliverables, not just weekly content",
            desc: "Group programs fail when they are collections of weekly content without structured deliverables. Each week should have: a training plan to execute, a specific action to complete, and a check-in mechanism (form submission, community post, or live call Q&A). When clients have a clear \"this week I will do X,\" completion and satisfaction rates are significantly higher than when the program is framed as \"watch these videos each week.\"",
          },
          {
            step: "4",
            title: "Create community infrastructure before launch",
            desc: "The community element — whether a private Facebook group, Discord server, Slack workspace, or forum — should be built and partially seeded before the cohort begins. A community that launches on day one with no existing posts or energy feels empty and kills momentum. Prepare welcome prompts, introduction templates, and the first week's discussion threads before the first client logs in.",
          },
          {
            step: "5",
            title: "Plan your time commitment realistically",
            desc: "A 20-person group program should require 4–8 hours per week of your time: one live group call (60–90 minutes), community monitoring and responses (2–3 hours), and program delivery overhead (1–2 hours). If your group program would require more than 10 hours per week per cohort, it is not economically differentiated from 1-on-1 coaching at scale. Design the program to run on systemized workflows, not constant availability.",
          },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Fill the Program</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Sell to your existing audience first</p>
          <p className="mt-1 text-sm text-slate-600">Your first group program cohort should be filled from people who already know you — email list subscribers, social media followers, past clients, and 1-on-1 coaching alumni. These warm leads convert at dramatically higher rates than cold traffic. Do not invest in paid advertising for a first cohort; validate the program structure and outcomes with known quantities before scaling.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Use a waitlist launch sequence</p>
          <p className="mt-1 text-sm text-slate-600">Announce enrollment 2–3 weeks before opening using a waitlist: "I'm launching a 12-week group program — join the waitlist for early access and a founding member discount." Waitlist members convert at 20–40% when enrollment opens; cold launches to general audiences convert at 1–3%. The waitlist builds social proof, creates anticipation, and pre-qualifies your most interested prospects before you spend any time on sales calls.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Run a short-form challenge as a feeder</p>
          <p className="mt-1 text-sm text-slate-600">A free 5-day or 7-day challenge in the weeks before enrollment opens serves dual purposes: it builds your email list with highly relevant prospects, and it gives participants a taste of your coaching style and program quality. Participants who complete the challenge and get a small result are primed to invest in the full program. Challenge-to-program conversion rates of 5–15% are common for well-structured sequences.</p>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to launch your group program?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-group-program" />
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
            <Link href="/blog/fitness-coach-revenue-streams" className="text-violet-600 hover:underline">
              Fitness Coach Revenue Streams
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-upsell-strategy" className="text-violet-600 hover:underline">
              Fitness Coach Upsell Strategy
            </Link>
          </li>
          <li>
            <Link href="/blog/scale-online-fitness-coaching" className="text-violet-600 hover:underline">
              How to Scale Your Online Fitness Coaching Business
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
