import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Online Fitness Coach Client Onboarding in 2026: Systems, Templates, and Automation | Creatdrop",
  description: "A strong onboarding system turns new clients into loyal ones. The templates, forms, and automation fitness coaches use to onboard clients professionally.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Online Fitness Coach Client Onboarding</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Online Fitness Coach Client Onboarding in 2026: Systems, Templates, and Automation</h1>
      <p className="mb-10 text-lg text-slate-600">
        The first 72 hours after a client pays you determine whether they will still be with you
        in three months. A chaotic onboarding — delayed welcome emails, missing intake forms,
        unclear next steps — destroys the confidence clients felt when they bought. A tight
        onboarding system does the opposite: it confirms their decision and sets the tone for
        a professional coaching relationship.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">What Onboarding Actually Covers</h2>
      <p className="mb-4 text-slate-600">
        Onboarding is everything that happens between a client paying and their first real
        coaching interaction. For online fitness coaches, that typically includes:
      </p>
      <ul className="mb-8 space-y-2 text-slate-600">
        <li className="flex gap-2"><span className="text-violet-600">—</span> Welcome email and next steps</li>
        <li className="flex gap-2"><span className="text-violet-600">—</span> Client intake form (health history, goals, availability)</li>
        <li className="flex gap-2"><span className="text-violet-600">—</span> Liability waiver and coaching agreement</li>
        <li className="flex gap-2"><span className="text-violet-600">—</span> Access to program, app, or platform</li>
        <li className="flex gap-2"><span className="text-violet-600">—</span> Onboarding call or video orientation</li>
        <li className="flex gap-2"><span className="text-violet-600">—</span> Week 1 expectations and check-in schedule</li>
      </ul>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The 7-Step Onboarding Sequence</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Step</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Timing</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Action</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">1. Purchase confirmation</td>
              <td className="border border-slate-200 p-3 text-slate-600">Immediate</td>
              <td className="border border-slate-200 p-3 text-slate-600">Automated receipt + welcome email</td>
              <td className="border border-slate-200 p-3 text-slate-600">Creatdrop / email provider</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">2. Intake form</td>
              <td className="border border-slate-200 p-3 text-slate-600">Within 1 hour</td>
              <td className="border border-slate-200 p-3 text-slate-600">Health history, goals, current fitness level</td>
              <td className="border border-slate-200 p-3 text-slate-600">Typeform / Google Forms</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">3. Liability waiver</td>
              <td className="border border-slate-200 p-3 text-slate-600">Within 1 hour</td>
              <td className="border border-slate-200 p-3 text-slate-600">Digital signature on coaching agreement</td>
              <td className="border border-slate-200 p-3 text-slate-600">HelloSign / DocuSign</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">4. Platform access</td>
              <td className="border border-slate-200 p-3 text-slate-600">Within 24 hours</td>
              <td className="border border-slate-200 p-3 text-slate-600">Login credentials or download link</td>
              <td className="border border-slate-200 p-3 text-slate-600">Program platform / Creatdrop</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">5. Welcome video</td>
              <td className="border border-slate-200 p-3 text-slate-600">Within 24 hours</td>
              <td className="border border-slate-200 p-3 text-slate-600">Personal video tour of the program and expectations</td>
              <td className="border border-slate-200 p-3 text-slate-600">Loom / email embed</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">6. Onboarding call</td>
              <td className="border border-slate-200 p-3 text-slate-600">Within 48 hours</td>
              <td className="border border-slate-200 p-3 text-slate-600">30-min call to review intake, set goals, answer questions</td>
              <td className="border border-slate-200 p-3 text-slate-600">Zoom / Calendly booking</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">7. Week 1 check-in</td>
              <td className="border border-slate-200 p-3 text-slate-600">Day 7</td>
              <td className="border border-slate-200 p-3 text-slate-600">How is Week 1 going? Any questions?</td>
              <td className="border border-slate-200 p-3 text-slate-600">Email / WhatsApp</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Intake Form: What to Ask</h2>
      <p className="mb-4 text-slate-600">
        Your intake form is the most important piece of data you will collect. It tells you exactly
        what each client needs and protects you legally. Keep it under 15 questions — anything
        longer and completion rates drop.
      </p>
      <div className="mb-8 space-y-3">
        {[
          { section: "Health History", questions: ["Any injuries, surgeries, or chronic conditions?", "Are you currently under medical supervision?", "Any medications that affect exercise tolerance?"] },
          { section: "Goals", questions: ["What is your primary goal? (weight loss, muscle gain, performance, general health)", "What does success look like to you in 12 weeks?", "Have you tried to reach this goal before? What happened?"] },
          { section: "Current Fitness Level", questions: ["How many days per week are you currently training?", "What types of exercise do you have experience with?", "Rate your current fitness level 1-10."] },
          { section: "Availability & Logistics", questions: ["How many days per week can you commit to training?", "Do you have access to a gym or are you training at home?", "What equipment do you have available?"] },
          { section: "Communication", questions: ["What is your preferred check-in method (email, WhatsApp, app)?", "What time zone are you in?"] },
        ].map((item) => (
          <div key={item.section} className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 font-semibold text-slate-900">{item.section}</p>
            <ul className="space-y-1">
              {item.questions.map((q) => (
                <li key={q} className="text-sm text-slate-600">• {q}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Welcome Email Template</h2>
      <p className="mb-4 text-slate-600">
        Send this within minutes of purchase using automated email sequences. Personalize with
        the client name and their specific program.
      </p>
      <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
        <p className="mb-2 font-semibold text-slate-900">Subject: You are in — here is your next step</p>
        <p className="mb-3">Hi [First Name],</p>
        <p className="mb-3">Welcome to [Program Name]. I am excited to work with you.</p>
        <p className="mb-3">Before we start, I need 5 minutes from you. Please complete your intake form here: [LINK]. This tells me exactly what you need so I can tailor the program to you from day one.</p>
        <p className="mb-3">Once you submit the form, I will send your program access and we will schedule your onboarding call.</p>
        <p className="mb-3">If you have questions before then, reply to this email.</p>
        <p>Talk soon,<br />[Your Name]</p>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Automating Your Onboarding</h2>
      <p className="mb-4 text-slate-600">
        Once your onboarding sequence is defined, most of it can run without you. Here is what
        to automate and what to keep manual:
      </p>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Step</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Automate or Manual?</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 text-slate-600">Purchase confirmation email</td>
              <td className="border border-slate-200 p-3 font-medium text-violet-700">Automate</td>
              <td className="border border-slate-200 p-3 text-slate-600">Immediate delivery expected — manual is too slow</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 text-slate-600">Intake form delivery</td>
              <td className="border border-slate-200 p-3 font-medium text-violet-700">Automate</td>
              <td className="border border-slate-200 p-3 text-slate-600">Trigger from purchase; add 5-minute delay for naturalness</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 text-slate-600">Waiver delivery</td>
              <td className="border border-slate-200 p-3 font-medium text-violet-700">Automate</td>
              <td className="border border-slate-200 p-3 text-slate-600">Send alongside intake form or triggered when form completes</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 text-slate-600">Program access grant</td>
              <td className="border border-slate-200 p-3 font-medium text-violet-700">Automate</td>
              <td className="border border-slate-200 p-3 text-slate-600">Immediate access prevents buyer's remorse</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 text-slate-600">Welcome video</td>
              <td className="border border-slate-200 p-3 font-medium text-violet-700">Automate</td>
              <td className="border border-slate-200 p-3 text-slate-600">Pre-record once; triggers automatically on purchase</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 text-slate-600">Onboarding call</td>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Manual</td>
              <td className="border border-slate-200 p-3 text-slate-600">High-touch moment — personal connection here drives retention</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 text-slate-600">Week 1 check-in</td>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Manual</td>
              <td className="border border-slate-200 p-3 text-slate-600">Personal message signals you are watching their progress</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Onboarding for Digital Products vs Coaching Programs</h2>
      <p className="mb-4 text-slate-600">
        The onboarding experience differs significantly depending on what you sold:
      </p>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="mb-2 font-semibold text-slate-900">Digital product (PDF, video program)</p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• Immediate download access</li>
            <li>• Welcome email with usage guide</li>
            <li>• No intake form required</li>
            <li>• Optional: join email list for tips</li>
            <li>• 3-day and 7-day follow-up emails</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="mb-2 font-semibold text-slate-900">1-on-1 or group coaching program</p>
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• Full intake form + waiver</li>
            <li>• Welcome video + call</li>
            <li>• Program access with orientation</li>
            <li>• Weekly check-in structure</li>
            <li>• Emergency contact protocol</li>
          </ul>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Red Flags to Fix in Your Onboarding</h2>
      <div className="mb-8 space-y-3">
        {[
          { flag: "No welcome email within 10 minutes of purchase", fix: "Set up automation. Delayed confirmation creates anxiety and increases refund requests." },
          { flag: "Intake form with 30+ questions", fix: "Cut to 12-15 questions maximum. Every extra question reduces completion rate by 10-15%." },
          { flag: "No program orientation or welcome video", fix: "Record a 5-minute Loom video explaining where everything is. Reduces day-1 confusion questions by 80%." },
          { flag: "Onboarding call booked more than 3 days out", fix: "Keep a 2-day booking window minimum. Long gaps between purchase and first contact erode motivation." },
          { flag: "No clear Week 1 plan", fix: "Tell clients exactly what to do on Day 1, 2, and 3. Do not make them figure it out from the program." },
        ].map((item) => (
          <div key={item.flag} className="rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="font-semibold text-red-800">Red flag: {item.flag}</p>
            <p className="mt-1 text-sm text-slate-700">Fix: {item.fix}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell fitness products with a professional experience?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — automated delivery, instant payouts, no monthly fees.
        </p>
        <WaitlistForm source="blog-online-fitness-coach-onboarding" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/online-fitness-coaching-contract" className="text-violet-600 hover:underline">
              Online Fitness Coaching Contract Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/scale-online-fitness-coaching" className="text-violet-600 hover:underline">
              How to Scale Your Online Fitness Coaching Business
            </Link>
          </li>
          <li>
            <Link href="/blog/online-personal-training-packages" className="text-violet-600 hover:underline">
              Online Personal Training Packages
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-personal-training-online" className="text-violet-600 hover:underline">
              How to Sell Personal Training Online
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
