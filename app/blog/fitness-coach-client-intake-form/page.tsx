import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Client Intake Form: What to Ask and Why | Creatdrop",
  description: "A thorough client intake form is the foundation of a successful coaching relationship. What questions to ask, what to avoid, and how the form protects both coach and client.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Client Intake Form</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Client Intake Form: What to Ask and Why</h1>
      <p className="mb-10 text-lg text-slate-600">
        The client intake form is the most important document in an online coaching business —
        and the most neglected. Coaches who collect the right information before session one
        deliver better programs, avoid liability, and create clients who feel genuinely understood
        from day one. Coaches who skip or rush the intake form spend weeks backtracking, adjusting
        for limitations they should have known about from the start. Here is what a professional
        intake form includes and why each section matters.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 7 Essential Sections</h2>
      <div className="mb-8 space-y-4">
        {[
          {
            step: "1",
            title: "Contact and basic demographics",
            desc: "Full name, email address, phone number, date of birth, and time zone. Time zone is often overlooked and causes immediate friction — if you schedule check-in calls or deliver live programming, mismatched time zones create conflicts that damage the coaching relationship. Date of birth allows you to design age-appropriate programming, which matters significantly over 40 and over 60.",
          },
          {
            step: "2",
            title: "Health history and medical clearance",
            desc: "This section is the most important and the one most coaches underinvest in. Ask about: current and recent injuries; chronic conditions (diabetes, hypertension, heart conditions, autoimmune diseases); recent surgeries or procedures; medications that affect heart rate or exercise capacity; pregnancy status or history. For clients with significant health conditions, require written medical clearance from a physician before programming begins. This is not bureaucracy — it is protection for your client and your business.",
          },
          {
            step: "3",
            title: "Current fitness and activity level",
            desc: "Ask specifically: how many days per week the client currently exercises, what types of activity they currently do, how long they have been at this level, and whether they have had a significant gap from training (common after injury, life events, or burnout). This prevents the most common programming error — designing for where a client says they want to be rather than where they actually are. An honest baseline prevents both underchallenge and dangerous overload.",
          },
          {
            step: "4",
            title: "Goals — primary, secondary, and timeline",
            desc: "Ask for one primary goal (the most important outcome they want), up to two secondary goals, and their realistic timeline expectation. The timeline question is critical: it surfaces unrealistic expectations before the coaching relationship starts, allowing you to reset expectations and build trust through honesty rather than discovering a mismatch in week 8. Goals stated as feelings (\"I want to feel strong and confident\") are often more revealing than metric-based goals (\"I want to lose 20 pounds\") because they tell you what the client actually cares about.",
          },
          {
            step: "5",
            title: "Equipment and training environment",
            desc: "Ask: do they have access to a gym or train at home? If gym, what equipment is available? If home, list available equipment (dumbbells, resistance bands, pull-up bar, barbell, etc.). Also ask about available training space — a client in a studio apartment with one dumbbell needs a different program than a client with a full home gym. Confirm preferred training days and time of day (morning vs. evening training has significant physiological implications for programming).",
          },
          {
            step: "6",
            title: "Nutrition and lifestyle context",
            desc: "Ask whether the client has any dietary restrictions, food allergies, or nutrition goals. If you provide nutrition guidance, ask about current eating patterns, meal frequency, and whether they track food. Also ask about sleep quality (average hours per night) and stress level (high chronic stress significantly affects recovery capacity and should change programming volume and intensity). These factors are often more important to results than the training program itself.",
          },
          {
            step: "7",
            title: "Previous coaching experience and expectations",
            desc: "Ask whether the client has worked with a coach before and what that experience was like. Clients who had a negative coaching experience will often carry specific expectations or fears — surfacing these early allows you to address them proactively. Also ask what success looks like to them at the 12-week mark. This final question often reveals whether the client's expectations are aligned with what your program can deliver.",
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Questions to Avoid</h2>
      <div className="mb-8 space-y-3">
        {[
          { mistake: "Asking for current weight and body measurements upfront", detail: "Many clients — particularly women, people recovering from disordered eating, and those with body image challenges — find weight and measurement collection triggering. Unless body composition tracking is central to your program and the client has opted into it explicitly, asking for weight and measurements before any relationship is established sets a negative tone for the coaching relationship. Focus on performance metrics and how the client feels instead." },
          { mistake: "Asking vague goal questions without follow-up prompts", detail: "\"What are your goals?\" alone produces generic answers: lose weight, build muscle, get fit. These answers tell you nothing specific enough to build a program. Prompt for specificity: \"What would be different about your daily life if you achieved this goal?\" \"What has stopped you from achieving this before?\" \"What does success feel like, not just look like?\" The follow-up prompts are where the real information lives." },
          { mistake: "Making the form too long", detail: "A form that takes more than 15 minutes to complete will see significant drop-off before submission. Prioritize the sections above, eliminate redundant questions, and save non-essential information gathering for the onboarding call. A completed 7-section form is infinitely more valuable than an abandoned 15-section form." },
        ].map((item) => (
          <div key={item.mistake} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.mistake}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Intake Form Format and Delivery</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Use a dedicated form tool, not email questionnaires</p>
          <p className="mt-1 text-sm text-slate-600">Google Forms, Typeform, or a form builder embedded in your coaching platform keeps responses organized and searchable. Email questionnaires get lost, come back in inconsistent formats, and require manual organization. A structured form makes it easy to review client history across your entire book of business.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Send it immediately after payment, before the onboarding call</p>
          <p className="mt-1 text-sm text-slate-600">The intake form should arrive in the client's inbox within minutes of payment confirmation. Clients who complete the form before the first call arrive at that call with context already shared — the conversation can go deeper from the start. Coaches who send the form after the first call often discover critical information that should have shaped the first session.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Include a liability waiver in the same workflow</p>
          <p className="mt-1 text-sm text-slate-600">A simple liability waiver — acknowledging that the client understands fitness training involves risk and releases you from liability for injuries arising from proper exercise performance — should be signed before coaching begins. This is not a replacement for professional liability insurance (which every coach should carry), but it does establish that the client entered the program with informed awareness of the risks involved.</p>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to build your coaching business?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-client-intake-form" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/online-fitness-coach-onboarding" className="text-violet-600 hover:underline">
              Online Fitness Coach Onboarding Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-discovery-call" className="text-violet-600 hover:underline">
              How to Run a Fitness Coach Discovery Call
            </Link>
          </li>
          <li>
            <Link href="/blog/online-fitness-coach-retention" className="text-violet-600 hover:underline">
              Online Fitness Coach Client Retention
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-start-online-fitness-business" className="text-violet-600 hover:underline">
              How to Start an Online Fitness Business
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
