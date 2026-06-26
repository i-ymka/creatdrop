import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

export const metadata: Metadata = {
  title:
    "How to Create an Online Fitness Course in 2026: From Idea to First Sale | Creatdrop",
  description:
    "A practical guide to creating and selling an online fitness course — content structure, recording tips, pricing, and which platform lets you keep the most revenue.",
  alternates: {
    canonical: "https://creatdrop.com/blog/create-online-fitness-course",
  },
  openGraph: {
    title:
      "How to Create an Online Fitness Course in 2026: From Idea to First Sale | Creatdrop",
    description:
      "A practical guide to creating and selling an online fitness course — content structure, recording tips, pricing, and which platform lets you keep the most revenue.",
    url: "https://creatdrop.com/blog/create-online-fitness-course",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "How to Create an Online Fitness Course in 2026: From Idea to First Sale | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Create an Online Fitness Course in 2026: From Idea to First Sale | Creatdrop",
    description:
      "A practical guide to creating and selling an online fitness course — content structure, recording tips, pricing, and which platform lets you keep the most revenue.",
  },
};

export default function CreateOnlineFitnessCoursePage() {
  return (
    <>
      <BlogArticleSchema
        headline="How to Create an Online Fitness Course in 2026: From Idea to First Sale"
        description="A practical guide to creating and selling an online fitness course — content structure, recording tips, pricing, and which platform lets you keep the most revenue."
        url="https://creatdrop.com/blog/create-online-fitness-course"
        datePublished="2026-04-24"
        dateModified="2026-04-24"
        breadcrumbs={[
          { name: "Blog", url: "https://creatdrop.com/blog" },
          {
            name: "How to Create an Online Fitness Course",
            url: "https://creatdrop.com/blog/create-online-fitness-course",
          },
        ]}
      />

      <main className="min-h-screen bg-white">
        <header className="border-b border-slate-100 px-6 py-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="text-lg font-semibold text-violet-600 hover:text-violet-700"
            >
              Creatdrop
            </Link>
          </div>
        </header>

        <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/blog" className="hover:text-violet-600">
              Blog
            </Link>
            <span className="mx-2">›</span>
            <span>Course Creation</span>
          </nav>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            How to Create an Online Fitness Course in 2026: From Idea to First Sale
          </h1>

          <p className="mb-8 text-lg text-slate-600">
            Creating an online fitness course sounds complicated until you actually do it.
            Most coaches overthink the production side and underthink the content structure
            and pricing. This guide skips the fluff and covers what actually matters —
            what to include, how to record it, where to sell it, and how to keep most
            of the revenue.
          </p>

          {/* Course vs workout program */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Course vs workout program: which should you build?
          </h2>
          <p className="mb-4 text-slate-700">
            Before starting, be clear on what format you&apos;re actually building.
            Most fitness creators don&apos;t need a full &quot;course&quot; with modules,
            quizzes, and drip content — they need a structured video program that guides
            someone through a transformation.
          </p>

          <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Format</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">What it is</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Build time</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Price range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-violet-50">
                  <td className="px-4 py-3 font-medium text-violet-800">Video program</td>
                  <td className="px-4 py-3 text-violet-700">5–20 workout videos + PDF guide</td>
                  <td className="px-4 py-3 text-violet-700">1–2 weeks</td>
                  <td className="px-4 py-3 text-violet-700">$47–$197</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Mini-course</td>
                  <td className="px-4 py-3 text-slate-600">3–5 teaching videos + workouts</td>
                  <td className="px-4 py-3 text-slate-600">1–3 weeks</td>
                  <td className="px-4 py-3 text-slate-600">$97–$197</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Full course</td>
                  <td className="px-4 py-3 text-slate-600">Multi-module, lessons + workouts</td>
                  <td className="px-4 py-3 text-slate-600">4–8 weeks</td>
                  <td className="px-4 py-3 text-slate-600">$197–$497</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Flagship course</td>
                  <td className="px-4 py-3 text-slate-600">Comprehensive transformation system</td>
                  <td className="px-4 py-3 text-slate-600">8–16 weeks</td>
                  <td className="px-4 py-3 text-slate-600">$497–$997</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-slate-700">
            Recommendation: start with a video program (5–10 workout videos + a PDF schedule).
            It delivers real results, takes 1–2 weeks to build, and can sell for $97–$197.
            Reserve a full multi-module course for after you&apos;ve sold 30+ units of a
            simpler product — by then you&apos;ll know exactly what your audience needs.
          </p>

          {/* Step 1: Content structure */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Step 1: Structure your content
          </h2>
          <p className="mb-4 text-slate-700">
            Good course structure answers one question clearly: &quot;How does someone go
            from where they are now to a specific result?&quot; Every video should serve
            that journey.
          </p>

          <div className="mb-4 rounded-xl border border-slate-200 p-5">
            <h3 className="mb-3 font-semibold text-slate-800">
              Example structure: &quot;4-Week Home Strength Program for Beginners&quot;
            </h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex gap-3">
                <span className="font-medium text-slate-700 w-20 shrink-0">Module 1</span>
                <span>Foundation (Week 1) — 3 workout videos, form fundamentals PDF</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-slate-700 w-20 shrink-0">Module 2</span>
                <span>Build (Week 2) — 3 workout videos, progressive overload guide</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-slate-700 w-20 shrink-0">Module 3</span>
                <span>Advance (Week 3) — 3 workout videos, nutrition timing PDF</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-slate-700 w-20 shrink-0">Module 4</span>
                <span>Peak (Week 4) — 3 workout videos, what to do next guide</span>
              </div>
              <div className="flex gap-3">
                <span className="font-medium text-slate-700 w-20 shrink-0">Bonus</span>
                <span>Equipment-free modifications video + meal prep basics PDF</span>
              </div>
            </div>
          </div>

          <p className="mb-8 text-slate-700">
            Total: 12 workout videos + 4 PDFs. Recorded over 1 week. Sells for $97–$147.
            This is more than sufficient for a first course — resist the urge to add more
            until you have buyer feedback.
          </p>

          {/* Step 2: Recording */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Step 2: Record without overthinking production
          </h2>
          <p className="mb-4 text-slate-700">
            The #1 reason fitness courses never get finished: waiting for perfect equipment.
            Here&apos;s what actually matters vs what doesn&apos;t:
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-green-800">Matters a lot</h3>
              <ul className="space-y-1 text-sm text-green-700">
                <li>• Clear audio (viewers forgive bad video, not bad audio)</li>
                <li>• Good lighting (face a window, not your back to it)</li>
                <li>• Camera stable and at the right angle to see form</li>
                <li>• Coaching cues are clear and specific</li>
                <li>• Exercise demos are visible without cropping</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-600">Doesn&apos;t matter much</h3>
              <ul className="space-y-1 text-sm text-slate-500">
                <li>• 4K resolution (1080p is plenty)</li>
                <li>• Professional camera (iPhone 12+ is fine)</li>
                <li>• Fancy background or gym setup</li>
                <li>• Perfect takes (minor stumbles are fine)</li>
                <li>• Elaborate intro sequences</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 rounded-xl border border-slate-200 p-5">
            <h3 className="mb-3 font-semibold text-slate-800">Minimum viable recording setup</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <span>Camera</span>
                <span className="font-medium text-slate-700">iPhone 12+ or equivalent Android ($0 if you have it)</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <span>Tripod</span>
                <span className="font-medium text-slate-700">$15–$30 phone tripod from Amazon</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <span>Microphone</span>
                <span className="font-medium text-slate-700">$20–$40 clip-on lavalier mic (transforms audio quality)</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                <span>Lighting</span>
                <span className="font-medium text-slate-700">Natural window light or $30 ring light</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Editing</span>
                <span className="font-medium text-slate-700">CapCut (free), iMovie (free on Mac), or DaVinci Resolve (free)</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Total setup cost: $35–$70 if you already own a smartphone.
            </p>
          </div>

          {/* Step 3: PDFs */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Step 3: Create supporting materials
          </h2>
          <p className="mb-4 text-slate-700">
            Videos are the core, but PDF companions significantly increase perceived value
            and justify higher pricing. Common supporting materials:
          </p>
          <ul className="mb-8 list-disc pl-6 text-slate-700 space-y-1">
            <li><span className="font-medium">Weekly schedule PDF</span> — one-page overview of the full program</li>
            <li><span className="font-medium">Exercise library PDF</span> — photos + cues for every movement</li>
            <li><span className="font-medium">Progress tracker</span> — weight, reps, notes per session</li>
            <li><span className="font-medium">Nutrition guide</span> — even a simple calorie/protein target sheet adds value</li>
            <li><span className="font-medium">FAQ document</span> — answers to &quot;what if I miss a day?&quot; type questions</li>
          </ul>
          <p className="mb-8 text-slate-700">
            Build these in Canva (free tier is sufficient) or Google Docs. Export as PDF.
            A complete &quot;course bundle&quot; with 10 videos + 4 PDFs can price at $147
            vs a video-only version at $97 — the PDFs more than justify the price difference.
          </p>

          {/* Step 4: Pricing */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Step 4: Price it correctly
          </h2>
          <p className="mb-4 text-slate-700">
            Fitness course pricing follows a clear pattern based on transformation depth and
            program length. The most common mistake: pricing by effort (how long it took to
            build) rather than value (what transformation it delivers).
          </p>

          <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Course type</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Duration</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Market rate</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Anchor price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Single workout video</td>
                  <td className="px-4 py-3 text-slate-600">30–60 min</td>
                  <td className="px-4 py-3 text-slate-600">$9–$19</td>
                  <td className="px-4 py-3 text-slate-600">$15</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">4-week video program</td>
                  <td className="px-4 py-3 text-slate-600">4 weeks</td>
                  <td className="px-4 py-3 text-slate-600">$47–$97</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                </tr>
                <tr className="bg-violet-50">
                  <td className="px-4 py-3 font-medium text-violet-800">8–12 week program + PDFs</td>
                  <td className="px-4 py-3 text-violet-700">8–12 weeks</td>
                  <td className="px-4 py-3 text-violet-700">$97–$197</td>
                  <td className="px-4 py-3 font-bold text-violet-800">$147</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Full coaching course</td>
                  <td className="px-4 py-3 text-slate-600">12+ weeks + modules</td>
                  <td className="px-4 py-3 text-slate-600">$197–$497</td>
                  <td className="px-4 py-3 text-slate-600">$297</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-slate-700">
            Anchor pricing: list a higher &quot;original price&quot; ($197) with a launch
            discount ($97) for the first 30 buyers. This creates urgency, rewards early
            supporters, and gives you room to raise to full price once you have testimonials.
            Never anchor below your target price — you can always discount, but raising prices
            on existing products is awkward.
          </p>

          {/* Step 5: Platform */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Step 5: Choose where to sell
          </h2>
          <p className="mb-4 text-slate-700">
            For a fitness course delivered as video files + PDFs, the platform decision comes
            down to one question: do you need a dedicated course player with locked modules and
            drip content, or do you just need a checkout link and file delivery?
          </p>
          <p className="mb-4 text-slate-700">
            Most fitness creators don&apos;t need drip content or locked modules — students
            want to move at their own pace. A ZIP file of videos + PDFs with a clear schedule
            PDF delivers the same result at a fraction of the platform cost.
          </p>

          <div className="mb-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Platform</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Fee model</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">On $147 sale</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">You keep</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Gumroad</td>
                  <td className="px-4 py-3 text-slate-600">10% + card fees</td>
                  <td className="px-4 py-3 text-slate-600">−$18.97</td>
                  <td className="px-4 py-3 text-slate-600">~$128</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Teachable</td>
                  <td className="px-4 py-3 text-slate-600">$39/mo + 5% (basic)</td>
                  <td className="px-4 py-3 text-slate-600">−$7.35 + monthly</td>
                  <td className="px-4 py-3 text-slate-600">~$100 (incl. monthly)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Thinkific</td>
                  <td className="px-4 py-3 text-slate-600">$36/mo, 0% platform commission</td>
                  <td className="px-4 py-3 text-slate-600">$0</td>
                  <td className="px-4 py-3 text-slate-600">~$111 (incl. monthly)</td>
                </tr>
                <tr className="bg-violet-50">
                  <td className="px-4 py-3 font-medium text-violet-800">Creatdrop</td>
                  <td className="px-4 py-3 text-violet-700">$29/mo flat</td>
                  <td className="px-4 py-3 text-violet-700">~$0</td>
                  <td className="px-4 py-3 font-bold text-violet-800">~$143</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-800">Kajabi</td>
                  <td className="px-4 py-3 text-slate-600">$149/mo, 0%</td>
                  <td className="px-4 py-3 text-slate-600">$0</td>
                  <td className="px-4 py-3 text-slate-600">~$94 (incl. monthly at 1 sale)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-slate-700">
            When to use a dedicated course platform (Teachable, Thinkific): if your course
            requires structured module unlocking, certificates on completion, or built-in
            quizzes — and you&apos;re pricing above $197. Otherwise, a digital storefront
            delivers the same outcome with far lower overhead.
          </p>

          {/* Step 6: Launch */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Step 6: Get your first 10 sales
          </h2>
          <p className="mb-4 text-slate-700">
            The fastest path to first sales is almost always a combination of warm outreach
            and a launch discount. Here&apos;s the sequence that works:
          </p>

          <div className="mb-8 space-y-3">
            <div className="flex gap-3 rounded-xl border border-slate-200 p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">1</span>
              <div>
                <p className="font-medium text-slate-800">Build an email list before launch</p>
                <p className="text-sm text-slate-600">
                  Offer a free workout or checklist in exchange for email. Build 50–200 subscribers
                  before your course is ready. A small warm list converts 5–15x better than
                  cold social traffic.
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-slate-200 p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">2</span>
              <div>
                <p className="font-medium text-slate-800">Announce a &quot;founding member&quot; price</p>
                <p className="text-sm text-slate-600">
                  Offer your first 20 buyers a discounted price (e.g., $67 instead of $97) in
                  exchange for a review/testimonial. Creates urgency, rewards early supporters.
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-slate-200 p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">3</span>
              <div>
                <p className="font-medium text-slate-800">Message your warm network directly</p>
                <p className="text-sm text-slate-600">
                  DM 20–30 people who match your niche: current followers, past clients, gym
                  contacts. A direct message converts far better than a public post.
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-slate-200 p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">4</span>
              <div>
                <p className="font-medium text-slate-800">Share one result-focused post per day for a week</p>
                <p className="text-sm text-slate-600">
                  Show the transformation your course creates: before/after, specific exercise
                  demonstration, a real result. Instagram Reels and TikTok with a checkout
                  link in bio.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Realistic timeline: idea to first sale
          </h2>

          <div className="mb-8 space-y-3">
            <div className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 font-medium text-slate-500">Days 1–3</span>
              <span className="text-slate-700">Outline content structure, write session plans, record intro video</span>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 font-medium text-slate-500">Days 4–8</span>
              <span className="text-slate-700">Record all workout videos (1–2 per day), basic editing</span>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 font-medium text-slate-500">Days 9–11</span>
              <span className="text-slate-700">Create PDFs (schedule, exercise guide, tracker)</span>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 font-medium text-slate-500">Day 12</span>
              <span className="text-slate-700">Upload to storefront, set price, create checkout page</span>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 font-medium text-slate-500">Days 13–14</span>
              <span className="text-slate-700">Launch email to list, direct outreach, first social posts</span>
            </div>
            <div className="flex gap-4 text-sm">
              <span className="w-20 shrink-0 font-medium text-slate-500">Day 14–21</span>
              <span className="text-slate-700">First sales, collect testimonials, iterate on description</span>
            </div>
          </div>

          <p className="mb-8 text-slate-700">
            Two weeks from idea to first sale is realistic if you commit to recording daily
            and don&apos;t wait for perfect conditions. The course that exists and sells is
            infinitely better than the perfect course still in planning.
          </p>

          {/* CTA */}
          <div className="my-10 rounded-2xl bg-violet-50 p-6 sm:p-8">
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              Sell your fitness course without platform fees eating your revenue
            </h2>
            <p className="mb-6 text-slate-600">
              Creatdrop is a flat $29/month storefront for fitness creators. Upload your
              course files, set your price, and keep all your revenue — no 10% cut on every sale.
            </p>
            <WaitlistForm source="blog-create-online-fitness-course" />
          </div>

          {/* FAQ */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-slate-900">
            Common questions
          </h2>

          <div className="mb-6 space-y-4">
            <div>
              <h3 className="mb-1 font-semibold text-slate-800">
                How long does it take to create an online fitness course?
              </h3>
              <p className="text-sm text-slate-600">
                A focused video program (10–15 videos + supporting PDFs) takes 1–2 weeks
                of consistent work. A full multi-module course takes 4–8 weeks. The biggest
                delay is usually waiting for perfect conditions — starting with a phone and
                decent lighting gets you there faster than waiting for a studio setup.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-slate-800">
                Do you need a certification to sell a fitness course?
              </h3>
              <p className="text-sm text-slate-600">
                No legal requirement exists in most countries to sell a workout program. That
                said, certification provides liability protection and buyer credibility — both
                valuable at scale. If you have 3+ years of training or coaching experience and
                visible results, you can launch while studying. If you&apos;re new, get
                certified first.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-slate-800">
                What equipment do you need to record a fitness course?
              </h3>
              <p className="text-sm text-slate-600">
                A smartphone (iPhone 12+ or equivalent), a $15–$30 tripod, and a $20–$40
                lavalier microphone. Natural window lighting works fine. Total cost under $70
                if you own a modern smartphone. Better camera gear helps slightly, but
                audio quality matters far more than video quality.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-slate-800">
                How much can you make selling fitness courses?
              </h3>
              <p className="text-sm text-slate-600">
                At $97–$147 per course, 20 sales/month = $1,940–$2,940/month from a single
                product. With a small but engaged audience (1,000–5,000 followers), 20 monthly
                sales is achievable within 3–6 months of consistent content. Courses have no
                time-per-sale cost — income grows with marketing reach, not hours.
              </p>
            </div>
          </div>

          {/* Related */}
          <div className="mt-12 border-t border-slate-100 pt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Related articles
            </h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/blog/sell-fitness-courses-online"
                className="block text-violet-600 hover:underline"
              >
                How to Sell Fitness Courses Online in 2026: The Complete Guide →
              </Link>
              <Link
                href="/blog/sell-workout-videos-online"
                className="block text-violet-600 hover:underline"
              >
                How to Sell Workout Videos Online in 2026 →
              </Link>
              <Link
                href="/blog/how-to-price-fitness-programs"
                className="block text-violet-600 hover:underline"
              >
                How to Price Fitness Programs: The Coach&apos;s Complete Guide →
              </Link>
              <Link
                href="/blog/passive-income-fitness-coach"
                className="block text-violet-600 hover:underline"
              >
                Passive Income for Fitness Coaches: The Digital Products Playbook →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
