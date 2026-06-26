import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

export const metadata: Metadata = {
  title:
    "How to Sell Fitness Courses Online in 2026 — Full Guide | Creatdrop",
  description:
    "Everything fitness coaches need to sell courses online: what to build, how to price, which platform to use, and how to keep more of your revenue with 0% Creatdrop commission.",
  alternates: {
    canonical: "https://creatdrop.com/blog/sell-fitness-courses-online",
  },
  openGraph: {
    title: "How to Sell Fitness Courses Online in 2026 — Full Guide | Creatdrop",
    description: "Everything fitness coaches need to sell courses online: what to build, how to price, which platform to use, and how to keep more of your revenue with 0% Creatdrop commission.",
    url: "https://creatdrop.com/blog/sell-fitness-courses-online",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "How to Sell Fitness Courses Online in 2026 — Full Guide | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Fitness Courses Online in 2026 — Full Guide | Creatdrop",
    description: "Everything fitness coaches need to sell courses online: what to build, how to price, which platform to use, and how to keep more of your revenue with 0% Creatdrop commission.",
  },
};

export default function SellFitnessCoursesOnline() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="How to Sell Fitness Courses Online in 2026 — Full Guide"
        description="Everything fitness coaches need to sell courses online: what to build, how to price, which platform to use, and how to keep more of your revenue with 0% Creatdrop commission."
        url="https://creatdrop.com/blog/sell-fitness-courses-online"
        datePublished="2026-04-01"
      />
      {/* Nav */}
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
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-700">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">How to sell fitness courses online</span>
        </nav>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How to Sell Fitness Courses Online in 2026: The Complete Guide
        </h1>

        <p className="mb-10 text-base text-slate-500">
          8 min read &mdash; Published April 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            Selling fitness courses online is one of the highest-leverage moves a
            trainer or coach can make. The market for digital fitness content is
            large, the production costs are low, and the unit economics get better
            the more you sell — unlike sessions, where you hit a ceiling.
          </p>
          <p>
            This guide covers everything from what to build to which platform
            actually lets you keep your revenue.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What Counts as a &ldquo;Fitness Course&rdquo;?
          </h2>
          <p>
            Broadly: any structured content that teaches someone something about
            fitness and is delivered digitally. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Video courses</strong> — the premium format. Think form
              masterclasses, programming tutorials, movement education series.
              Highest perceived value, highest price ceiling.
            </li>
            <li>
              <strong>PDF programs</strong> — the fastest to produce. A 4-week
              or 12-week training program with exercise descriptions, sets/reps,
              and progressions. Sells well at $39–$97.
            </li>
            <li>
              <strong>Audio coaching</strong> — workout audio tracks, guided
              breathwork, run coaching narration. Lower production barrier than
              video, niche but growing.
            </li>
            <li>
              <strong>Bundled curricula</strong> — training + nutrition + mindset,
              packaged as a 30- or 90-day system. Highest price point, commands
              $97–$297+.
            </li>
          </ul>
          <p>
            The right format depends on what you already know, not what you
            think will sell. If you have 5 years of coaching form corrections —
            a video course is obvious. If you have a 12-week strength program
            you&apos;ve run 40 clients through — a PDF with your template is
            the fastest path to your first sale.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            How to Price Your Fitness Course
          </h2>
          <p>
            Pricing is where most fitness creators get it wrong — usually by
            going too low. Here&apos;s what the market actually supports:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Format</th>
                  <th className="px-4 py-3">Price Range</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["4-week PDF program", "$29 – $49", "Good entry point; high volume potential"],
                  ["12-week PDF program", "$49 – $97", "Transformation arc justifies higher price"],
                  ["Short video course (< 2 hrs)", "$79 – $149", "Technique/form content performs well here"],
                  ["Full video course (4–8 hrs)", "$149 – $297", "Requires authority and strong marketing"],
                  ["Bundle (program + nutrition + video)", "$97 – $297", "Best revenue per unit sold"],
                ].map(([format, range, notes]) => (
                  <tr key={format} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{format}</td>
                    <td className="px-4 py-3 text-violet-700 font-semibold">{range}</td>
                    <td className="px-4 py-3 text-slate-500 text-sm">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            A practical test: if you were buying this course from someone whose
            content you follow and trust, what would you pay? That price is
            usually closer to the right number than what you&apos;d price it
            yourself.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Choosing a Platform to Sell On
          </h2>
          <p>
            This is the decision most fitness coaches regret getting wrong. The
            platform you choose affects how much of each sale you keep — and
            the difference compounds quickly.
          </p>
          <p>
            The two most common models:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Example</th>
                  <th className="px-4 py-3">What You Pay</th>
                  <th className="px-4 py-3">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["% of every sale", "Gumroad", "10% of revenue, forever", "Very early stage (< $200/mo)"],
                  ["Flat monthly fee", "Creatdrop", "$29/month, 0% Creatdrop commission", "Anyone making $290+/month"],
                ].map(([model, example, cost, fit]) => (
                  <tr key={model} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{model}</td>
                    <td className="px-4 py-3 text-slate-600">{example}</td>
                    <td className="px-4 py-3 text-slate-600">{cost}</td>
                    <td className="px-4 py-3 text-slate-500 text-sm">{fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The 10% model seems friendly when you&apos;re making $200/month. It
            becomes very unfriendly at $2,000/month ($200 gone), and brutal at
            $10,000/month ($1,000 quietly leaving your account every 30 days).
          </p>
          <p>
            Creatdrop charges $29/month regardless of sales volume, handles
            file delivery automatically, and uses Paddle for globally trusted
            checkout (which also handles international VAT — one less thing to
            manage). Start free, upgrade when the flat fee makes more sense than
            the percentage.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Building Your First Course (Without Overcomplicating It)
          </h2>
          <p>
            The most common mistake: trying to make the perfect course before
            selling anything.
          </p>
          <p>
            The right order:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Pick the narrowest useful topic.</strong> Not &ldquo;complete
              fitness system.&rdquo; &ldquo;4-week program for beginners who
              can only train 3 days a week.&rdquo; Narrow sells better than broad.
            </li>
            <li>
              <strong>Build an outline first.</strong> Week 1, Week 2, Week 3,
              Week 4. What does someone know or be able to do at the end of each?
              This prevents scope creep.
            </li>
            <li>
              <strong>Start with PDF, upgrade later.</strong> A well-designed PDF
              program can charge $49–$97. Add video in a v2. Ship the v1.
            </li>
            <li>
              <strong>Set up the checkout before finishing the product.</strong>
              Get the store page live, even if the product isn&apos;t. &ldquo;
              Available [date]&rdquo; creates urgency. Pre-sales are real signal.
            </li>
          </ol>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            How to Get Your First Sales
          </h2>
          <p>
            You don&apos;t need an audience to make sales. You need to reach the
            right people with a specific enough offer.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Instagram bio link.</strong> If your content attracts
              fitness-interested followers, 1–2% will buy a well-positioned
              product. 1,000 followers × 1% × $49 = $490 from a single link
              swap.
            </li>
            <li>
              <strong>Threads question posts.</strong> &ldquo;What&apos;s the
              biggest gap in fitness programs aimed at beginners?&rdquo; gets
              answers that position your next post. Question format gets replies.
              Replies get reach. Reach gets buyers.
            </li>
            <li>
              <strong>Reddit communities.</strong> r/fitness, r/bodyweightfitness,
              r/xxfitness, r/weightroom. Be genuinely helpful. Mention your
              resource when directly relevant. Never pitch, always add value
              first.
            </li>
            <li>
              <strong>A launch email to whoever you have.</strong> Even 50 people
              who opted in for a reason will outperform cold outreach to thousands.
              If you have a list, use it.
            </li>
            <li>
              <strong>DM outreach to 5 specific people.</strong> Not mass DMs.
              Five people whose content you&apos;ve followed, who have an
              audience that matches your course topic. Personalised, genuine.
              One enthusiastic customer becomes a referrer.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            After the First Sale
          </h2>
          <p>
            The first sale changes your psychology more than your revenue. It
            proves the market exists. Here&apos;s what to do next:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Ask the buyer for honest feedback — what was most useful, what was
              missing, what they were unsure about before buying.
            </li>
            <li>
              Use that feedback in your next piece of marketing content. Real
              objections answered publicly build more trust than any sales copy.
            </li>
            <li>
              Build a second product. The second product benefits from everything
              you learned selling the first.
            </li>
          </ol>
          <p>
            The goal isn&apos;t one course. It&apos;s a catalog — a reason for
            buyers to come back and a system that earns while you&apos;re not
            actively selling.
          </p>
        </div>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Keep reading</p>
          <div className="space-y-3">
            <Link href="/blog/passive-income-fitness-coach" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800">Passive Income for Fitness Coaches</p>
              <p className="text-sm text-slate-500 mt-0.5">What to build first, how to price it, the compounding math.</p>
            </Link>
            <Link href="/blog/gumroad-alternative-fitness-creators" className="block rounded-xl border border-slate-200 px-5 py-4 hover:border-violet-200 hover:bg-violet-50 transition-colors">
              <p className="font-semibold text-slate-800">Tired of Gumroad Taking 10%?</p>
              <p className="text-sm text-slate-500 mt-0.5">The platform fee math every fitness creator should know.</p>
            </Link>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-10 rounded-2xl border border-slate-200 px-8 py-10 text-center">
          <p className="mb-1 text-base font-semibold text-slate-900">Not ready to launch yet?</p>
          <p className="mb-6 text-sm text-slate-500">Get tips on building and selling fitness courses — what to charge, how to market it, which platforms keep the most of your money.</p>
          <WaitlistForm />
        </div>

        {/* CTA */}
        <div className="mt-6 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
          <p className="mb-2 text-lg font-semibold text-slate-900">
            Ready to sell your first fitness course?
          </p>
          <p className="mb-6 text-slate-600">
            Upload your course, set a price, share the link. Free to start — no credit card required.
          </p>
          <a
            href="https://creatdrop.com/sign-up"
            className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
          >
            Start for free
          </a>
        </div>
      </article>
    </main>
  );
}
