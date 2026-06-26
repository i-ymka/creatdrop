import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Social Proof for Fitness Coaches: How to Collect and Use Testimonials | Creatdrop",
  description: "Social proof is the most powerful conversion tool in fitness marketing. How fitness coaches collect, format, and display testimonials that turn skeptical prospects into buyers.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Social Proof</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Social Proof for Fitness Coaches: How to Collect and Use Testimonials</h1>
      <p className="mb-10 text-lg text-slate-600">
        A prospect deciding whether to buy your fitness program faces a fundamental uncertainty:
        will this work for someone like me? No sales page copy, no credential list, no money-back
        guarantee resolves this uncertainty as effectively as a real person who faced the same
        situation and got real results. Social proof — testimonials, reviews, before-and-afters,
        and case studies — is the most powerful conversion tool in fitness marketing. Here is how
        to build and use it systematically.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Types of Social Proof and Their Conversion Power</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Type</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Conversion Impact</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Ease of Collection</th>
              <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">Best Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Before-and-after photos</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high (visual)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium (requires consent)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Sales pages, Instagram</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Written testimonials</td>
              <td className="border border-slate-200 p-3 text-slate-600">High</td>
              <td className="border border-slate-200 p-3 text-slate-600">Easy</td>
              <td className="border border-slate-200 p-3 text-slate-600">Sales pages, email</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Video testimonials</td>
              <td className="border border-slate-200 p-3 text-slate-600">Highest (authentic)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Hard (requires client effort)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Sales pages, YouTube</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Screenshots of messages</td>
              <td className="border border-slate-200 p-3 text-slate-600">High (raw, unedited)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Easy</td>
              <td className="border border-slate-200 p-3 text-slate-600">Instagram Stories, sales pages</td>
            </tr>
            <tr>
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Detailed case studies</td>
              <td className="border border-slate-200 p-3 text-slate-600">Very high for considered buyers</td>
              <td className="border border-slate-200 p-3 text-slate-600">Hard (time-intensive)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Blog, email sequences</td>
            </tr>
            <tr className="bg-slate-50">
              <td className="border border-slate-200 p-3 font-medium text-slate-900">Star ratings and review counts</td>
              <td className="border border-slate-200 p-3 text-slate-600">Medium (volume signals)</td>
              <td className="border border-slate-200 p-3 text-slate-600">Easy</td>
              <td className="border border-slate-200 p-3 text-slate-600">Product pages, thumbnails</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Collect Testimonials Systematically</h2>
      <div className="mb-8 space-y-4">
        {[
          {
            step: "1",
            title: "Ask at the moment of peak satisfaction, not at program end",
            desc: "Most coaches wait until a program ends to request testimonials. By that point, client motivation and excitement have normalized. Ask at the moment a client reports a specific win — when they text you \"I did my first pull-up,\" \"I'm down 8 pounds,\" \"my back doesn't hurt anymore.\" That is when emotion is highest and the testimonial will be most vivid. A question like \"Would you be willing to put that in writing? It would mean a lot and help me show other people what is possible\" converts at over 80% at these moments.",
          },
          {
            step: "2",
            title: "Ask a specific question, not \"leave a review\"",
            desc: "Generic requests produce generic testimonials: \"Great program, would recommend!\" Specific questions produce specific testimonials. Ask: \"Before you started, what was your biggest concern about this program? And how did it turn out?\" or \"What result surprised you most?\" The answers to specific questions include the before state, the doubt, the journey, and the outcome — all the elements that make a testimonial persuasive rather than decorative.",
          },
          {
            step: "3",
            title: "Make leaving a testimonial frictionless",
            desc: "If collecting testimonials requires a client to navigate to a third-party review site, log in, and write something from scratch, most will intend to do it and never follow through. Create a simple Google Form with 3–4 specific questions and a photo upload option. Send the link directly in a personal message. The lower the friction, the higher the completion rate. A form that takes 3 minutes produces 5x more testimonials than a request to leave a Google review.",
          },
          {
            step: "4",
            title: "Request permission specifically for different uses",
            desc: "Ask for permission to use the testimonial on your sales page, in social media posts, and in email marketing separately from the testimonial itself. \"I'd love to share this on Instagram and on my website — are you okay with that? I'll use your first name only unless you prefer otherwise.\" This simple question avoids future disputes and builds trust with clients who might otherwise feel their words were used without consent.",
          },
          {
            step: "5",
            title: "Follow up once with people who did not respond",
            desc: "Clients who did not respond to your initial testimonial request are usually not refusing — they are busy and forgot. A single follow-up message 7 days later, referencing the specific result you observed during their program, converts a significant portion of non-responders. Do not follow up more than once; two requests is the professional maximum.",
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

      <h2 className="mb-4 text-2xl font-bold text-slate-900">How to Use Social Proof to Increase Conversions</h2>
      <div className="mb-8 space-y-3">
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Place testimonials at objection points, not just at the top</p>
          <p className="mt-1 text-sm text-slate-600">The most common mistake in testimonial placement is clustering them in one section near the top of the sales page. Testimonials are most powerful when placed immediately after the point in the sales page where a prospect is most likely to have a specific objection. If your price is at the bottom of the page, place your most compelling result testimonial just above the price. If you address the "I\'ve tried programs before and they didn\'t work" objection in the copy, follow it immediately with a testimonial from someone who had the same experience and got results with yours.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Use testimonials from people who look like the prospect</p>
          <p className="mt-1 text-sm text-slate-600">The most persuasive testimonial is not from your most dramatic transformation — it is from someone who closely resembles the prospect in demographics, starting point, and concern. A 45-year-old woman with lower back pain converts better from a testimonial from a 47-year-old woman who started with lower back pain than from a testimonial from a 28-year-old who lost 30 pounds. Organize your testimonials by persona and display the most relevant ones in the context most likely to be seen by that audience segment.</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="font-semibold text-slate-900">Screenshot messages create immediacy and authenticity</p>
          <p className="mt-1 text-sm text-slate-600">A screenshot of a WhatsApp or Instagram DM — with the client\'s permission — carries more authentic weight than a polished written testimonial because it is obviously unscripted. The informal language, the timestamp, the interface itself signals that this was a real, spontaneous communication rather than a composed marketing asset. This format performs particularly well on Instagram Stories and in email, where high production values can feel incongruous.</p>
        </div>
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to sell your fitness programs?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-social-proof" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/fitness-coach-testimonials" className="text-violet-600 hover:underline">
              Fitness Coach Testimonials Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-landing-page" className="text-violet-600 hover:underline">
              Fitness Coach Landing Page Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-case-studies" className="text-violet-600 hover:underline">
              Fitness Coach Case Studies
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
