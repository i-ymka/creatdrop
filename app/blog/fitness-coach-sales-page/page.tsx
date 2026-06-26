import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Sales Page: How to Write a Page That Converts | Creatdrop",
  description: "Your sales page is the single highest-leverage piece of copy in your fitness business. How to structure, write, and optimize a sales page that converts visitors into buyers.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Sales Page</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Sales Page: How to Write a Page That Converts</h1>
      <p className="mb-10 text-lg text-slate-600">
        Your sales page is the single highest-leverage piece of copy in your fitness business.
        Every visitor your social content, email list, and paid advertising sends arrives at
        the sales page to make their final purchase decision. A weak sales page means all that
        upstream effort converts at 1–2%. A strong sales page converts at 5–15%. The difference
        is not design — it is structure, specificity, and understanding how fitness buyers make
        decisions. Here is the framework that works.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Sales Page Structure: The Elements That Matter</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Section</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Purpose</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Common Mistake</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Headline</td>
              <td className="border border-slate-200 p-3 text-slate-600">State the specific outcome for the specific person</td>
              <td className="border border-slate-200 p-3 text-slate-600">Generic ("Get Fit Now") with no specificity</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Problem statement</td>
              <td className="border border-slate-200 p-3 text-slate-600">Make the reader feel understood before you sell</td>
              <td className="border border-slate-200 p-3 text-slate-600">Skipping straight to the solution</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Credibility proof</td>
              <td className="border border-slate-200 p-3 text-slate-600">Establish why you can deliver this outcome</td>
              <td className="border border-slate-200 p-3 text-slate-600">Bio focused on credentials, not results</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Program description</td>
              <td className="border border-slate-200 p-3 text-slate-600">Show what&apos;s included with specific detail</td>
              <td className="border border-slate-200 p-3 text-slate-600">Vague ("comprehensive program")</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Social proof</td>
              <td className="border border-slate-200 p-3 text-slate-600">Specific testimonials with measurable results</td>
              <td className="border border-slate-200 p-3 text-slate-600">"Great program!" with no specifics</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Objection handling</td>
              <td className="border border-slate-200 p-3 text-slate-600">Address "but what if..." before the buyer thinks it</td>
              <td className="border border-slate-200 p-3 text-slate-600">Ignoring objections and hoping buyers commit anyway</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Price and CTA</td>
              <td className="border border-slate-200 p-3 text-slate-600">Clear price, clear next step, clear guarantee</td>
              <td className="border border-slate-200 p-3 text-slate-600">Burying the price or making checkout confusing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">The Headline: The Most Impactful 10 Words You Will Write</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Specificity converts — generic headlines do not</p>
          <p className="mt-1 text-sm text-slate-600">The most common fitness sales page headline mistake is writing something that could apply to any fitness product: "Transform Your Body," "Get the Results You Deserve," "Your Best Self Starts Here." These headlines fail because they provide no information about who the program is for, what it produces, or how it is different from everything else the visitor has already seen. Specific headlines — "Build Your First 10 Pull-Ups in 12 Weeks Using Only a Bar" or "The 4-Day Strength Program Designed Around Women&apos;s Hormonal Cycle" — filter for the exact buyer the program is designed for and signal immediately that the creator understands this specific problem deeply enough to solve it.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Lead with the outcome, not the mechanism</p>
          <p className="mt-1 text-sm text-slate-600">Fitness buyers care about outcomes first, mechanisms second. A headline that leads with the outcome ("Run Your First Half Marathon Without Getting Injured") converts better than a headline that leads with the mechanism ("A Periodized 16-Week Training Plan With Progressive Overload and Built-In Deload Weeks"). The mechanism matters — and it belongs in the body of the page — but the headline needs to communicate what changes in the buyer&apos;s life, not how the program works. The buyer who is not yet certain they want the outcome will not care about the mechanism at all.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Name the specific person the program is for</p>
          <p className="mt-1 text-sm text-slate-600">Headlines that identify the specific buyer — "For Women Over 40," "For Runners Who Keep Getting Injured," "For Beginners Who Have Tried and Quit Before" — feel like a tap on the shoulder to the right buyer. The visitor who matches the description stops scrolling because they feel personally addressed. Fitness coaches who worry that naming a specific audience will exclude other potential buyers consistently underestimate how much the right buyer responds to feeling specifically seen versus how much an excluded buyer would have purchased anyway. A headline that speaks to everyone speaks to no one.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Writing Copy That Moves Fitness Buyers to Action</h2>
      <div className="mb-8 space-y-4">
        {[
          { step: "1", title: "Open with the problem before you introduce the solution", desc: "The most effective fitness sales page openings describe the buyer's current situation with enough specificity that the reader stops and thinks \"this is exactly me.\" Not the surface-level problem (\"you want to get in shape\") but the specific, daily experience of having that problem (\"You set your alarm for 5:30am again. You know you should work out. But you've tried three different programs this year, you're confused about what actually works, and you're not sure your body responds to training the way other people's do\"). When a buyer feels understood — when the page describes their internal experience accurately — they trust that the solution will be equally specific and relevant to them." },
          { step: "2", title: "Use testimonials that are specific, numbered, and attributed", desc: "The most common testimonial mistake is collecting quotes like \"This program changed my life!\" which provide no information a skeptical buyer can evaluate. Testimonials that convert have three elements: a specific result (numbers, time frames, measurable changes), an attribution that makes the person real (first name, last initial, photo, or context like \"marathoner, age 38\"), and enough detail about the starting point that the reader can see themselves in the story. \"I went from barely running a mile to finishing my first half marathon in 2:14 — Sarah T., 3x failed beginner\" tells the buyer what the program produces, who it is for, and that it works even for people who have failed before." },
          { step: "3", title: "Handle the three universal fitness objections explicitly", desc: "Every fitness buyer arrives with some version of the same three objections: \"I'm not sure this will work for me specifically,\" \"I've tried things before and they didn't work,\" and \"I'm not sure I will actually follow through.\" Sales pages that address these explicitly — with a FAQ section, with specific testimonials from similar backgrounds, with a clear refund policy that removes the financial risk — convert at significantly higher rates than pages that ignore them and hope buyers commit anyway. The objection the page does not address becomes the reason the buyer does not purchase." },
          { step: "4", title: "Make the price look small relative to the value stack", desc: "The price section of a fitness sales page should not appear before the value has been thoroughly established. By the time the buyer sees \"$67,\" they should have already read about the 12 weeks of programming, the video library, the form guide library, the recovery protocol, and the private community access that come with it. Value stacking — listing every component of the offer individually, with an implied or stated value for each — makes the all-in price feel like a discount rather than an expense. A buyer who has mentally calculated $67 against $500 worth of described content is in a very different decision state than a buyer who sees $67 with no context." },
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Sales Page Optimization After Launch</h2>
      <div className="mb-8 space-y-3">
        {[
          { channel: "Read your sales page out loud — awkward copy reveals itself immediately", note: "The fastest quality check for sales page copy is reading it aloud. Copy that sounds natural when spoken converts better than copy that reads formally on the page but feels stiff when heard. Most fitness coaches write sales pages that are more formal than how they would describe the program to a friend — using industry terminology, passive voice, and abstract language that puts distance between the writer and the reader. Reading the page aloud identifies these friction points instantly: if you stumble over a sentence or feel embarrassed reading it, a buyer will feel the same disconnect." },
          { channel: "Use a heatmap tool to see where buyers stop reading", note: "Free heatmap tools (Hotjar, Microsoft Clarity) show exactly how far down the page visitors scroll and where they click. This data reveals the sections where buyers disengage — typically where the copy becomes vague, the testimonials are weak, or the program description lacks specificity. The section just above the highest drop-off point is the section that most needs improvement. Fitness coaches who optimize their sales page based on actual scroll data consistently see conversion rate improvements of 30–80% within two iterations without changing any other part of their marketing." },
          { channel: "Test one element at a time — headline first", note: "Sales page optimization is most effective when changes are isolated so the impact of each can be measured. The element with the highest impact on conversion rate is almost always the headline — a 2x improvement in headline effectiveness produces a 2x improvement in page conversion rate because every visitor who reads past the headline has already cleared the most significant engagement barrier. After the headline, test the primary call-to-action button text, the testimonials section, and the price presentation. Never change multiple elements simultaneously on a page receiving meaningful traffic — the data becomes uninterpretable." },
          { channel: "Add a money-back guarantee and state it prominently", note: "A 30-day money-back guarantee, stated clearly and early on the sales page, consistently increases conversion rates for fitness digital products by removing the financial risk that is the final barrier for undecided buyers. The refund rate on fitness digital products with a guarantee is almost always lower than creators expect — typically 3–8% — because buyers who purchase with confidence follow through at higher rates. The guarantee framing matters: \"If you complete the first two weeks and don't see results, I'll refund every cent\" is more compelling than a general \"30-day guarantee\" because it implies the program is confident enough to back itself with specificity." },
        ].map((item) => (
          <div key={item.channel} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.channel}</p>
            <p className="mt-1 text-sm text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your fitness programs?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-sales-page" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-product-launch" className="text-violet-600 hover:underline">
              How to Launch a Fitness Product Online
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-email-sequences" className="text-violet-600 hover:underline">
              Fitness Coach Email Sequences: How to Build Automations That Convert
            </Link>
          </li>
          <li>
            <Link href="/blog/online-fitness-coach-retention" className="text-violet-600 hover:underline">
              Online Fitness Coach Retention: How to Keep Clients Longer
            </Link>
          </li>
          <li>
            <Link href="/blog/sell-strength-training-programs-online" className="text-violet-600 hover:underline">
              How to Sell Strength Training Programs Online
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
