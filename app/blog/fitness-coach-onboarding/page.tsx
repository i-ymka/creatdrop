import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Client Onboarding: How to Start Every Client Relationship Correctly | Creatdrop",
  description: "The first 7 days of a coaching relationship determine whether a client stays or quits. How to build an onboarding system that sets clients up for success and reduces refund requests.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Client Onboarding</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Client Onboarding: How to Start Every Client Relationship Correctly</h1>
      <p className="mb-10 text-lg text-slate-600">
        The first seven days after a client purchases your program or signs on for coaching are the
        most critical period in the entire client relationship. Research consistently shows that
        clients who engage actively in the first week of a program have dramatically higher
        completion rates, better results, and are significantly more likely to renew, refer, and
        review. Most fitness coaches treat onboarding as an administrative step — sending a welcome
        email and directing clients to the content. Here is what separates the coaches whose
        clients get results from the rest.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Onboarding Sequence That Drives Completion</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Day</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Action</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Purpose</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Format</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Day 0 (purchase)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Welcome email + access delivery</td>
              <td className="border border-slate-200 p-3 text-slate-600">Confirm, reassure, deliver</td>
              <td className="border border-slate-200 p-3 text-slate-600">Automated email</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Day 1</td>
              <td className="border border-slate-200 p-3 text-slate-600">Start here email — what to do first</td>
              <td className="border border-slate-200 p-3 text-slate-600">Reduce overwhelm, create first action</td>
              <td className="border border-slate-200 p-3 text-slate-600">Automated email</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Day 3</td>
              <td className="border border-slate-200 p-3 text-slate-600">Check-in: how is the first workout going?</td>
              <td className="border border-slate-200 p-3 text-slate-600">Catch early friction, encourage</td>
              <td className="border border-slate-200 p-3 text-slate-600">Automated email or manual DM</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Day 7</td>
              <td className="border border-slate-200 p-3 text-slate-600">Week 1 celebration + what is coming next</td>
              <td className="border border-slate-200 p-3 text-slate-600">Reinforce momentum, preview program</td>
              <td className="border border-slate-200 p-3 text-slate-600">Email or short video</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Day 14</td>
              <td className="border border-slate-200 p-3 text-slate-600">Midpoint check-in with quick survey</td>
              <td className="border border-slate-200 p-3 text-slate-600">Identify stuck clients early, collect feedback</td>
              <td className="border border-slate-200 p-3 text-slate-600">Email with 3-question form</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Day 30</td>
              <td className="border border-slate-200 p-3 text-slate-600">Milestone celebration + testimonial request</td>
              <td className="border border-slate-200 p-3 text-slate-600">Capture results, begin social proof cycle</td>
              <td className="border border-slate-200 p-3 text-slate-600">Email + optional upsell</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">What Your Welcome Email Must Include</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">One specific first action — not a menu of options</p>
          <p className="mt-1 text-sm text-slate-600">The most common onboarding failure is overwhelming new clients with everything at once: "Here is your program, here is the Facebook group, here are the bonus PDFs, here is the exercise library, here is the progress tracker." The client opens a wall of text, feels overwhelmed, and closes the tab. The welcome email should tell the client exactly one thing to do: "Click here to watch the 5-minute orientation video before you do anything else." One action. One link. Nothing else competing for attention.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Emotional validation of the purchase decision</p>
          <p className="mt-1 text-sm text-slate-600">New buyers often experience post-purchase doubt — "was this the right choice, can I actually do this, what if it does not work for me." The welcome email should proactively address this by validating the decision and setting realistic expectations: "You made the right call. This program is designed for people exactly in your situation, and the first week is intentionally light so you can build the habit without burning out." Emotional reassurance in the first email reduces early cancellations and sets the tone for a client who feels supported rather than transactional.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Clear expectations for what the next 30 days look like</p>
          <p className="mt-1 text-sm text-slate-600">Clients who know what to expect do not get discouraged when they experience it. "Week 1 is foundational — expect to feel the basics are easy. Week 2 we add intensity. Week 3 is when most clients start seeing measurable changes." This preview does two things: it prevents early quitters who feel the program is too easy in week 1 (a common dropout point), and it creates anticipation for the later weeks that keeps clients engaged through the harder middle of a program.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Onboarding Elements That Reduce Refund Requests</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "A short orientation video from you personally", desc: "A 5-minute video where you speak directly to the camera — \"welcome, I am so glad you are here, here is what you can expect\" — creates an immediate personal connection that a PDF or text email cannot replicate. Clients who feel they have met you before they start the program are significantly less likely to request refunds during the first two weeks, because the relationship is personal rather than transactional. The video does not need production quality — a phone camera in good lighting with clear audio is entirely sufficient." },
          { step: "2", title: "A setup checklist that takes less than 10 minutes", desc: "A single document that lists the 5–7 things a client needs to do before starting — download the app, bookmark the program page, gather equipment, join the community group, complete the intake form — creates early engagement and reduces the chance that clients abandon the program before they start due to setup friction. Each completed item is a micro-commitment that increases the psychological investment in the program and makes quitting feel more costly." },
          { step: "3", title: "Clear instructions for asking questions and getting support", desc: "Clients who get stuck and do not know how to get help quietly abandon their program rather than asking. Explicit instructions in the welcome email — \"if you have a question about the program, reply to this email\" or \"join the Facebook group and post in the weekly check-in thread\" — remove the social friction of asking for help. The easier you make it for clients to get their questions answered, the fewer of them silently quit and request refunds two weeks later." },
          { step: "4", title: "A simple goal-setting exercise to complete on day 1", desc: "Clients who articulate a specific goal in writing before they start a program have significantly higher completion rates than those who begin without documented intentions. A one-page goal-setting worksheet — what do you want to achieve in the next 30 days, what has stopped you in the past, what will success look and feel like — takes 5 minutes to complete and creates a reference point the client can return to when motivation dips. You can also use these responses to personalize your check-in communications in weeks 2–4." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Onboarding for Digital Products vs. Coaching Programs</h2>
      <div className="mb-8 space-y-3">
        {[
          { channel: "Digital product onboarding (minimal touch)", note: "For self-paced digital products — a workout program PDF, an on-demand video course — onboarding is primarily automated. The purchase confirmation email, the day-1 \"start here\" email, and the day-3 check-in can all be delivered through an email automation sequence with no manual intervention required. The goal is to get the buyer to take one action in the first 48 hours after purchase. Buyers who open the program within 48 hours complete it at 3–5x the rate of buyers who wait more than a week to begin." },
          { channel: "1-on-1 coaching onboarding (high touch)", note: "For direct coaching relationships, onboarding should include a dedicated onboarding call within 72 hours of sign-up. Use this call to review the intake form, set specific 30-day goals with measurable outcomes, agree on communication cadence, and address any concerns or questions. The investment of 30 minutes in an onboarding call reliably extends the average client relationship by 2–3 months — an ROI that makes it one of the highest-leverage activities in client retention." },
          { channel: "Group program onboarding (cohort-based)", note: "Group programs benefit from a shared starting ritual: a live kickoff call (Zoom), a community introduction thread, and a shared challenge that everyone completes in week 1. The group accountability dynamic means that individual momentum is reinforced by peer activity — when clients see others posting their first workout completion, they are more likely to complete theirs. The kickoff call also lets you identify the most engaged clients in each cohort, who often become your strongest testimonials and community contributors." },
          { channel: "Membership onboarding (ongoing)", note: "Members who join a subscription product need a clear starting point — the single most common reason for early cancellation is \"I did not know where to begin.\" A dedicated \"new member start here\" content section that curates the 3–5 most important resources for a new member removes this friction. Monthly check-in emails that highlight new content and upcoming live sessions keep members actively engaged rather than passively subscribed — the difference between a member who stays for 14 months and one who cancels after 2." },
        ].map((item) => (
          <div key={item.channel} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.channel}</p>
            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Start building better client relationships</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-onboarding" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-client-intake-form" className="text-violet-600 hover:underline">
              Fitness Coach Client Intake Form: What to Ask and Why
            </Link>
          </li>
          <li>
            <Link href="/blog/online-fitness-coach-retention" className="text-violet-600 hover:underline">
              Online Fitness Coach Client Retention
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-discovery-call" className="text-violet-600 hover:underline">
              Fitness Coach Discovery Call: How to Run One That Converts
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
