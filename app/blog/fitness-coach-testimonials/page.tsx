import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Testimonials: How to Get, Use, and Maximize Social Proof That Sells",
  description:
    "One genuine client result converts better than 10,000 Instagram followers. Here's how to collect testimonials, use them across your marketing, and build social proof from scratch.",
  alternates: {
    canonical: "https://creatdrop.com/blog/fitness-coach-testimonials",
  },
  openGraph: {
    title: "Fitness Coach Testimonials: How to Get, Use, and Maximize Social Proof That Sells",
    description:
      "One genuine client result converts better than 10,000 Instagram followers. Here's how to collect testimonials, use them across your marketing, and build social proof from scratch.",
    url: "https://creatdrop.com/blog/fitness-coach-testimonials",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Fitness Coach Testimonials: How to Get, Use, and Maximize Social Proof That Sells",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness Coach Testimonials: How to Get, Use, and Maximize Social Proof That Sells",
    description:
      "One genuine client result converts better than 10,000 Instagram followers. Here's how to collect testimonials, use them across your marketing, and build social proof from scratch.",
  },
}

export default function FitnessCoachTestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-100 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="text-lg font-bold text-violet-600 hover:text-violet-700">
            Creatdrop
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-violet-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-violet-600">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-700">Client Acquisition</span>
        </nav>

        <article>
          {/* Category */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-600">
            Client Acquisition
          </p>

          {/* H1 */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Fitness Coach Testimonials: How to Get, Use, and Maximize Social Proof That Sells
          </h1>

          {/* Intro */}
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            Social proof is the single most powerful sales tool available to fitness coaches. Not ads, not follower count, not a perfect website. One real person saying "I lost 18 lbs with this program" closes more sales than a month of content. Here&apos;s how to get those results — and how to use them.
          </p>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              What makes a testimonial actually convert (vs. get ignored)
            </h2>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Most testimonials coaches collect are too vague to move anyone. "Great program!" feels good to receive but does almost nothing for a potential buyer who&apos;s on the fence. The gap between a testimonial that gets scrolled past and one that closes a sale comes down to specificity.
            </p>
            <p className="mb-6 text-slate-700 leading-relaxed">
              A strong testimonial answers the exact questions a skeptical buyer is already asking: How much weight? How long? What was hard about it? Could someone like me do this? Compare the weak and strong versions below.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                      Weak testimonial
                    </th>
                    <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                      Strong testimonial
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      "Great program, highly recommend!"
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-700">
                      "I lost 14 lbs in 10 weeks without giving up carbs. The progressive structure kept me from plateauing like I always do."
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 p-3 text-slate-600">
                      "Really helpful, learned a lot."
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-700">
                      "As a busy mom with 30 minutes per day, I finally found something that fits my life. Down 2 dress sizes in 8 weeks."
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      "5 stars"
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-700">
                      "My deadlift went from 135 to 225 lbs. The form coaching was the missing piece I&apos;d never had before."
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-slate-700 leading-relaxed">
              Strong testimonials share four qualities: a <strong>specific number</strong>, a <strong>specific timeframe</strong>, a <strong>specific problem that was overcome</strong>, and a <strong>specific result</strong>. When you ask clients for testimonials, you&apos;ll need to prompt them to include these elements — which means the quality of your ask determines the quality of what you get.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              How to get testimonials when you&apos;re starting out
            </h2>
            <p className="mb-6 text-slate-700 leading-relaxed">
              The "first client" problem is real: you need testimonials to get sales, but you need sales to get testimonials. Every successful fitness coach has been stuck here. The way out is to intentionally create the conditions for your first testimonials before you launch publicly.
            </p>

            <ol className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Offer your first 3–5 clients free or discounted access</strong> in exchange for a detailed review and results post. Be explicit about what you want: specific numbers, before/after, honest feedback. Vague asks get vague testimonials.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Give your product to 3 friends or colleagues in your target demographic</strong> and ask them to document their experience. This works best when they genuinely need the result your program delivers — a friend who needs to lose 20 lbs and actually does it is far more credible than someone going through the motions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Run a beta launch</strong> — sell at 50% off for the first 10 buyers, with the explicit understanding that you want their detailed feedback and results. Beta buyers are more invested, more likely to follow through, and more likely to give you genuine detailed feedback because they feel like collaborators.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  4
                </span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Use your own transformation</strong> — your before/after is valid social proof, especially with specific numbers. "I used this exact method to go from 185 lbs to 162 lbs over 14 weeks" is credible and honest. Don&apos;t underestimate this option.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  5
                </span>
                <div>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Collect testimonials from free content</strong> — if someone comments "this workout destroyed me in the best way" or "I&apos;ve been doing this for 3 weeks and I&apos;m already seeing definition," screenshot it with their permission. Organic social comments are authentic and buyers recognize that.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              How to ask for a testimonial (templates)
            </h2>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Timing is everything. The best moment to ask for a testimonial is within 24–48 hours of a client hitting a visible milestone — not at the end of a program, when motivation and memory have both faded. Catch the emotion when it&apos;s fresh.
            </p>
            <p className="mb-6 text-slate-700 leading-relaxed">
              The templates below are designed to feel personal, low-pressure, and specific. Adjust the bracketed fields before sending — generic-feeling asks get ignored.
            </p>

            <h3 className="mb-3 text-lg font-semibold text-slate-800">Template 1 — text message or DM</h3>
            <blockquote className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm italic text-slate-700">
              "Hey [name]! You just finished week 4 and [specific result they shared]. Would you be open to sharing a quick testimonial I can use on my site? Even 2–3 sentences about your experience would mean a lot. No pressure at all."
            </blockquote>

            <h3 className="mb-3 text-lg font-semibold text-slate-800">Template 2 — email</h3>
            <blockquote className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm italic text-slate-700">
              <p className="mb-2 not-italic font-medium text-slate-600">Subject: Quick favor — your experience with [program name]</p>
              <p>
                "Hi [name], You&apos;ve made incredible progress — [specific numbers if known]. I&apos;m updating my website and would love to feature your story. Could you answer these 3 questions in a few sentences?
              </p>
              <ol className="mt-3 ml-4 list-decimal space-y-1">
                <li>What was your situation before starting?</li>
                <li>What specific results have you seen?</li>
                <li>Who would you recommend this program to?"</li>
              </ol>
            </blockquote>

            <p className="mt-6 text-slate-700 leading-relaxed">
              The three-question email structure is particularly effective because it removes the blank-page problem. Clients don&apos;t have to figure out what to say — they just answer questions. The answers you get back will naturally contain the specifics you need to make the testimonial convert.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Testimonial formats and where to use them
            </h2>
            <p className="mb-6 text-slate-700 leading-relaxed">
              Not all testimonial formats perform the same way in all contexts. A screenshot of a DM lands differently on an Instagram Story than it does embedded in a product page. Matching format to placement is how you extract maximum value from each piece of social proof you collect.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Format</th>
                    <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Where to use</th>
                    <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Conversion impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 p-3 text-slate-700">Screenshot of DM or text</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Instagram Stories, product page</td>
                    <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 p-3 text-slate-700">Written (3–5 sentences)</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Product page, email, website</td>
                    <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 text-slate-700">Before/after photo</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Instagram post, product page</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="border border-slate-200 p-3 text-slate-700">Video testimonial (30–60 sec)</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Instagram Reel, YouTube, product page</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-3 text-slate-700">Star rating + short review</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Product page</td>
                    <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mb-3 mt-8 text-lg font-semibold text-slate-800">Best placement for sales conversion</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>On your product page:</strong> 2–3 written testimonials plus 1–2 before/after stats placed above the CTA button. Buyers need to see proof before they&apos;re asked to act.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>In email marketing:</strong> include a testimonial in email 4 of your welcome sequence — after you&apos;ve delivered value, before you make the pitch. Context matters.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>On Instagram:</strong> dedicate 1 post per week to a client win. Not a sell — just the result. Over time this becomes the strongest signal that your coaching works.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Using testimonials ethically and legally
            </h2>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Testimonials are powerful, which is exactly why misusing them creates serious problems — both for your reputation and legally. The FTC has clear guidelines on fitness and health testimonials, and violating them can result in fines. More importantly, fabricating or exaggerating results destroys trust the moment a buyer finds out.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  Always get written or documented consent before using someone&apos;s image or name in your marketing.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  For before/after photos specifically, explicit written permission is required — a verbal "sure, go ahead" is not enough.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  FTC guidelines require that testimonials reflect typical results, or that you clearly disclose "results not typical" near the testimonial.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  Do not edit testimonials to change their meaning — fixing typos is fine, but altering what someone said is not.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  If a client&apos;s result was exceptional relative to what most clients achieve, add "Results may vary" near the testimonial.
                </span>
              </li>
            </ul>
            <p className="mt-6 text-slate-700 leading-relaxed">
              The practical upside of doing this right: disclosed, consented testimonials are more credible, not less. Buyers are not naive — they expect some variation in results. Transparency is a trust signal.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Building social proof without testimonials (early stage)
            </h2>
            <p className="mb-4 text-slate-700 leading-relaxed">
              If you don&apos;t have client testimonials yet, you are not without options. Several credibility signals can hold the gap while you accumulate real results from real clients.
            </p>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Your own results:</strong> "I went from [X] to [Y] using this exact method" is honest, specific, and demonstrates that you&apos;ve done what you&apos;re asking clients to do.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Content quality:</strong> detailed, specific, technically accurate content signals expertise to buyers even before they see a single client result. Depth beats volume.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Credentials:</strong> NASM, ACE, NSCA certifications, years of in-person coaching experience, a relevant training background — these are proxies for trust when results aren&apos;t yet available.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Media mentions:</strong> even guest posts on small fitness blogs, podcast appearances, or newsletter features count. Being referenced elsewhere signals legitimacy.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Engagement quality:</strong> high comment engagement — "this is exactly what I needed" or "I&apos;ve been looking for this explanation for months" — is social proof, even if it&apos;s not a formal testimonial.
                </span>
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong>Download or use count:</strong> once accurate, "500+ coaches have used this template" or "downloaded by 1,200 people" is powerful passive social proof that compounds over time.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Turning testimonials into evergreen content
            </h2>
            <p className="mb-4 text-slate-700 leading-relaxed">
              Most coaches use a testimonial once — they post it, get a few likes, and move on. That is a significant underuse of something valuable. One strong client result, properly documented and deployed, can produce five or more distinct pieces of marketing content across multiple channels and months.
            </p>
            <p className="mb-6 text-slate-700 leading-relaxed">
              Here is how to extend a single testimonial across your entire content strategy:
            </p>
            <ol className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300 bg-violet-50 text-xs font-bold text-violet-700">
                  1
                </span>
                <span>
                  <strong>Instagram carousel:</strong> "Here&apos;s what happened when [client name] tried the 8-week program." Walk through their starting point, what they did, what changed, and what it means for someone in the same situation.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300 bg-violet-50 text-xs font-bold text-violet-700">
                  2
                </span>
                <span>
                  <strong>TikTok or Reel:</strong> tell the transformation story in your own words, with the client&apos;s permission. First-person storytelling with specific numbers performs well on short-form video.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300 bg-violet-50 text-xs font-bold text-violet-700">
                  3
                </span>
                <span>
                  <strong>Email story:</strong> share the result in week 3 of your welcome sequence, framed as a case study. "Here&apos;s what someone just like you did in 10 weeks" is one of the highest-converting email formats in fitness.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300 bg-violet-50 text-xs font-bold text-violet-700">
                  4
                </span>
                <span>
                  <strong>Product page:</strong> add the testimonial to your sales page testimonials section. Even if you have 10 others, adding a fresh one keeps the page feeling current and active.
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300 bg-violet-50 text-xs font-bold text-violet-700">
                  5
                </span>
                <span>
                  <strong>YouTube intro or intro hook:</strong> open a relevant video with "Like [client], who lost 18 lbs using this program..." It anchors your credibility before the content even starts and the context makes viewers more likely to watch through.
                </span>
              </li>
            </ol>
            <p className="mt-6 text-slate-700 leading-relaxed">
              The math works in your favor. If you get one strong testimonial per month from an active client roster, and you extract five pieces of content from each, you are generating 60 pieces of social-proof content per year from client results alone — before you create a single educational post.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
              Start Collecting Results With Your First Buyers
            </h2>
            <p className="mb-6 text-slate-600">
              Creatdrop makes it easy to launch, sell, and collect social proof from your first digital product customers.
            </p>
            <WaitlistForm source="blog-fitness-coach-testimonials" />
          </section>

          {/* Related articles */}
          <section className="mt-16">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Related articles</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/blog/how-to-get-fitness-clients-online"
                className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                  Client Acquisition
                </p>
                <p className="font-semibold text-slate-800 group-hover:text-violet-700 transition-colors">
                  How to Get Fitness Clients Online
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Proven channels for finding clients without a large following or paid ads.
                </p>
              </Link>

              <Link
                href="/blog/sell-workout-programs-online"
                className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                  Selling
                </p>
                <p className="font-semibold text-slate-800 group-hover:text-violet-700 transition-colors">
                  Sell Workout Programs Online
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  How to package, price, and sell your training programs as digital products.
                </p>
              </Link>

              <Link
                href="/blog/fitness-coach-instagram-growth"
                className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                  Marketing
                </p>
                <p className="font-semibold text-slate-800 group-hover:text-violet-700 transition-colors">
                  Fitness Coach Instagram Growth
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  What actually drives follower growth and sales for fitness coaches on Instagram.
                </p>
              </Link>

              <Link
                href="/blog/personal-trainer-business-plan"
                className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">
                  Business
                </p>
                <p className="font-semibold text-slate-800 group-hover:text-violet-700 transition-colors">
                  Personal Trainer Business Plan
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  A practical framework for building a sustainable online training business.
                </p>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
