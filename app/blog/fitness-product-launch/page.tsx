import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Launch a Fitness Product in 2026: The Complete Pre-Launch to Post-Launch Playbook",
  description:
    "Most fitness creators launch to silence because they skip the pre-launch. Here's the complete launch playbook — from building anticipation to closing the cart — that fills your first cohort.",
  alternates: {
    canonical: "https://creatdrop.com/blog/fitness-product-launch",
  },
  openGraph: {
    type: "article",
    siteName: "Creatdrop",
    title: "How to Launch a Fitness Product in 2026: The Complete Pre-Launch to Post-Launch Playbook",
    description:
      "Most fitness creators launch to silence because they skip the pre-launch. Here's the complete launch playbook — from building anticipation to closing the cart — that fills your first cohort.",
    url: "https://creatdrop.com/blog/fitness-product-launch",
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
    title: "How to Launch a Fitness Product in 2026: The Complete Pre-Launch to Post-Launch Playbook",
    description:
      "Most fitness creators launch to silence because they skip the pre-launch. Here's the complete launch playbook — from building anticipation to closing the cart — that fills your first cohort.",
  },
}

export default function FitnessProductLaunchPage() {
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

      <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-700 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-slate-700 transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-900">Selling Programs</li>
          </ol>
        </nav>

        {/* Category */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-600">
          Selling Programs
        </p>

        {/* H1 */}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          How to Launch a Fitness Product in 2026: The Complete Pre-Launch to Post-Launch Playbook
        </h1>

        {/* Intro */}
        <p className="mb-12 text-lg text-slate-600 leading-relaxed">
          The difference between a launch that makes $200 and one that makes $2,000 is almost never the product quality. It&apos;s the pre-launch. Here&apos;s the complete playbook — what to do before, during, and after launch day.
        </p>

        {/* Section 1: Launch types */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Choose the Right Launch Type for Your Audience Size
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Not every fitness product launch looks the same. The right approach depends on where you are in building your audience. Trying to run a full 14-day launch campaign with 50 followers is a recipe for burnout and disappointment. Match your launch type to your current reality.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Launch type</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Audience needed</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Typical revenue</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Quiet launch (just list it)</td>
                  <td className="border border-slate-200 p-3 text-slate-700">None</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$0–$500</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Very low</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Soft launch to email list</td>
                  <td className="border border-slate-200 p-3 text-slate-700">100–500 emails</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$500–$2,000</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Low</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Full launch campaign (7–14 days)</td>
                  <td className="border border-slate-200 p-3 text-slate-700">500–2,000 emails</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$2,000–$10,000</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Medium</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Waitlist launch (pre-sell)</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Any size</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Variable</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Medium</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Live challenge launch</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Any size</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$1,000–$5,000</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Medium-High</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Partner / collaboration launch</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Access to partner&apos;s audience</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$2,000–$20,000</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            For first-time launchers: start with a soft launch to your email list or a quiet launch plus DM outreach. Don&apos;t wait until you have a perfect audience. The feedback from your first buyers is more valuable than any audience size threshold.
          </p>
        </section>

        {/* Section 2: Pre-launch sequence */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The Pre-Launch Sequence (2 Weeks Before Open Cart)
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            This is where 80% of launch revenue is made. Most coaches skip this entirely and then wonder why launch day is quiet. The pre-launch does not sell your product directly — it sells the idea that the problem is real, the solution exists, and you are the right person to deliver it.
          </p>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">1</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Week -2, Day 1: Announce the problem</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Post content about the exact problem your product solves. No mention of a product yet. Just &ldquo;does this sound familiar?&rdquo; — a relatable scenario, a frustration your audience has voiced, a result they want but haven&apos;t achieved. Measure the engagement. High engagement here signals a hungry audience.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">2</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Week -2, Day 3: Share your story</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Why you created this, what motivated you, who it is for. Personal story content outperforms promotional content by a wide margin on every platform. You are not selling yet — you are making people care about you as the creator.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">3</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Week -2, Day 5: Tease the solution</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Hint at the program without a full reveal. &ldquo;I have been working on something that addresses exactly this…&rdquo; or a blurred screenshot, a sneak peek of the cover page. Curiosity drives click-throughs better than complete information.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">4</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Week -1, Day 1: Open the waitlist</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  &ldquo;I am launching [product name] next [day]. Join the waitlist for early bird pricing.&rdquo; Collect emails. This step separates genuinely interested buyers from casual observers. A person who joins a waitlist is five to ten times more likely to buy than a follower who does not.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">5</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Week -1, Day 3: Show proof</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  A client result, your own transformation, or a behind-the-scenes clip of the product in action. Real results — even a single person&apos;s progress — eliminate the &ldquo;but does it actually work?&rdquo; objection before launch day.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">6</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Week -1, Day 5: Build urgency</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  &ldquo;Waitlist closes in 48 hours. Early bird price expires at launch.&rdquo; Urgency that is genuine converts. Urgency that is manufactured erodes trust. If you are offering an early bird price, make sure it actually disappears on launch day.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">7</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Launch day: Open cart</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Send the email and post across all platforms simultaneously. Your waitlist gets first access. The sequence you built over two weeks has done the selling already — launch day is just opening the door.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Launch day sequence */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Launch Day Sequence: The 7-Day Open Cart
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Seven days is the proven open cart window for fitness products. Short enough to create urgency, long enough to catch buyers who need a few days to think it over. Every day has a job. Do not go silent mid-launch because you feel like you are &ldquo;posting too much.&rdquo; You are not. Most people will not see most of your posts.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Day</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Action</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700 whitespace-nowrap">Day 1 (launch)</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Email + all social posts announcing open cart</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Maximum initial conversions</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-700 whitespace-nowrap">Day 2</td>
                  <td className="border border-slate-200 p-3 text-slate-700">FAQ post / Stories: answer common objections</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Handle hesitation</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700 whitespace-nowrap">Day 3</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Social proof post: client result or testimonial</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Build trust</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-700 whitespace-nowrap">Day 4</td>
                  <td className="border border-slate-200 p-3 text-slate-700">&ldquo;Behind the scenes&rdquo; of the product</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Reduce uncertainty</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700 whitespace-nowrap">Day 5</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Reminder: X days left + early bird pricing ending</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Urgency</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-700 whitespace-nowrap">Day 6</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Final day reminder — post + email</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Capture late buyers</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700 whitespace-nowrap">Day 7</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Cart closes: last chance email + post</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Urgency close</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            In a typical 7-day fitness product launch, roughly 40–50% of sales happen on Day 1 and Day 7. The middle days build momentum and handle objections. Do not judge a launch mid-week. The closing day spike is real.
          </p>
        </section>

        {/* Section 4: Email sequence */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The Launch Email Sequence
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Six emails across the open cart window is the minimum effective dose. Email converts at three to five times the rate of social media for fitness product sales. If you only have time for one channel, make it email.
          </p>

          <div className="space-y-4">
            {/* Email 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">1</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Cart open email</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Subject: &ldquo;It&apos;s live: [Product name]&rdquo;. Lead with the transformation, not the features. What does life look like after someone completes your program? Include the buy link above the fold — do not make them scroll to find it.
                </p>
              </div>
            </div>

            {/* Email 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">2</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Day 2: The story email</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Why you built this, who it is for, what makes it different from everything else they have tried. This email is not a sales pitch — it is a conversation. Write it the way you would explain your product to a friend over coffee.
                </p>
              </div>
            </div>

            {/* Email 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">3</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Day 3: Social proof email</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  A client result. Even one real result converts. Numbers beat adjectives every time — &ldquo;lost 12 lbs in 6 weeks&rdquo; outperforms &ldquo;incredible results&rdquo; by a wide margin. If you do not have client results yet, use your own before and after data.
                </p>
              </div>
            </div>

            {/* Email 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">4</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Day 5: Objections email</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Address the top three hesitations directly: &ldquo;What if I don&apos;t have time?&rdquo; / &ldquo;What if it doesn&apos;t work for me?&rdquo; / &ldquo;Is this the right program for where I am right now?&rdquo; Naming the objection out loud removes its power.
                </p>
              </div>
            </div>

            {/* Email 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">5</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Day 6: Urgency email</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  &ldquo;24 hours left. Here is what you get.&rdquo; Bullet list of everything included, the price, and the buy link. Clarity converts. Do not try to be creative here — make it dead simple for a distracted person to understand exactly what they are getting and what they need to do.
                </p>
              </div>
            </div>

            {/* Email 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-0.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">6</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Day 7: Cart closing</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Send twice: once in the morning and once two hours before close. &ldquo;Doors close tonight at 11pm.&rdquo; The second email on closing day is often responsible for 20–30% of total launch revenue. Send it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Post-launch */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Post-Launch: What to Do After Cart Closes
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Most coaches stop at cart close. They take a breath, deliver the product, and move on. The best coaches treat the 30 days after launch as a second revenue and relationship phase. These actions compound — each one makes your next launch stronger.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Action</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">When</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Send &ldquo;welcome aboard&rdquo; email to buyers</td>
                  <td className="border border-slate-200 p-3 text-slate-700 whitespace-nowrap">Immediately</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Reduce buyer&apos;s remorse, set expectations</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Send &ldquo;sorry we missed you&rdquo; email to non-buyers</td>
                  <td className="border border-slate-200 p-3 text-slate-700 whitespace-nowrap">Same day cart closes</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Capture a few late buyers with a short extension or waitlist for next cohort</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Collect testimonials from buyers</td>
                  <td className="border border-slate-200 p-3 text-slate-700 whitespace-nowrap">Day 7 and Day 21</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Build social proof for next launch</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Analyze: what content drove most sales?</td>
                  <td className="border border-slate-200 p-3 text-slate-700 whitespace-nowrap">1 week post-launch</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Improve next launch</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Plan next launch date</td>
                  <td className="border border-slate-200 p-3 text-slate-700 whitespace-nowrap">1 week post-launch</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Momentum + income prediction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            The &ldquo;sorry we missed you&rdquo; email is underused. A 24-hour cart extension offered only to people who opened your emails but did not buy will typically recover 5–15% of missed revenue. Make it one-time, make it genuine, and do not make a habit of it — buyers notice when urgency is fake.
          </p>
        </section>

        {/* Section 6: Launch metrics */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Launch Metrics to Track
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            You cannot improve what you do not measure. After your first fitness product launch, these five numbers tell you everything you need to know about what to fix for launch number two.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Metric</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">How to calculate</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Benchmark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">Email open rate</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Opens divided by delivered</td>
                  <td className="border border-slate-200 p-3 text-slate-700">20–35% (above 25% = good)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">Click-through rate</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Clicks divided by opens</td>
                  <td className="border border-slate-200 p-3 text-slate-700">3–8%</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">Conversion rate</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Sales divided by email list size</td>
                  <td className="border border-slate-200 p-3 text-slate-700">1–5%</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">Revenue per subscriber</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Total revenue divided by list size</td>
                  <td className="border border-slate-200 p-3 text-slate-700">$1–$5 is typical</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-700">Social conversion</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Sales from social vs email</td>
                  <td className="border border-slate-200 p-3 text-slate-700">Email wins 70–80% of the time</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Low open rate means your subject lines need work or your list has gone cold. Low click-through rate means the email body is not compelling enough to drive action. Low conversion rate usually means the offer, the price, or the trust is off — not the audience size.
          </p>
        </section>

        {/* Section 7: Evergreen vs launch model */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Evergreen vs Launch Model: Which Is Right for You
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            After your first launch, you face a choice about how to sell going forward. Both models work. Neither is universally better. The right answer depends on your audience, your energy, and your income goals.
          </p>

          <div className="mb-4 space-y-4">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="mb-2 font-semibold text-slate-900">Evergreen</p>
              <p className="text-slate-700 leading-relaxed">
                Always available, sold through an automated email sequence. A new subscriber joins your list, goes through your welcome sequence, and is presented with an offer on Day 5 or Day 7. Lower peak revenue, but consistent monthly income with no active work. Works well for lower-priced products ($37–$97) with broad appeal.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="mb-2 font-semibold text-slate-900">Launch windows</p>
              <p className="text-slate-700 leading-relaxed">
                Open cart two to four times per year, drive urgency with a live campaign. Higher peak revenue — your best months will dwarf what evergreen produces. More marketing work, more emotional investment, and more susceptibility to a bad launch if something goes wrong with timing.
              </p>
            </div>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            Most fitness coaches benefit from a hybrid: keep the product on Creatdrop for evergreen sales through an automated sequence, but do two focused launches per year to spike revenue, attract new buyers, and re-engage your existing audience. The evergreen income gives you a predictable floor. The launch spikes give you growth.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The single biggest mistake fitness creators make is treating launch mode as the default forever. It is exhausting. Build the systems that sell for you between launches, and use launch energy strategically — not constantly.
          </p>
        </section>

        {/* CTA section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">List Your Product and Start Your Launch</h2>
          <p className="mb-6 text-slate-600">Creatdrop gives your fitness product a professional storefront — instant delivery, 0% commission, ready for your first launch day.</p>
          <WaitlistForm source="blog-fitness-product-launch" />
        </section>

        {/* Related articles */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/sell-workout-programs-online"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-600">Selling Programs</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Sell Workout Programs Online
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Platforms, pricing, and positioning for fitness creators selling digital programs.
              </p>
            </Link>

            <Link
              href="/blog/personal-trainer-email-marketing"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-600">Email Marketing</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                Email Marketing for Personal Trainers
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                How to build and monetize an email list as a fitness coach, from first subscriber to first sale.
              </p>
            </Link>

            <Link
              href="/blog/fitness-coach-testimonials"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-600">Social Proof</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Collect and Use Testimonials as a Fitness Coach
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                The right way to ask for testimonials, format them, and use them to close more sales.
              </p>
            </Link>

            <Link
              href="/blog/how-to-price-fitness-programs"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-violet-600">Pricing</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Price Fitness Programs
              </p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Pricing strategy for online fitness products — what the market pays and how to position at any price point.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
