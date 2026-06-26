import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { BlogArticleSchema } from "@/components/BlogArticleSchema";

export const metadata: Metadata = {
  title:
    "How to Sell Yoga Classes Online in 2026: Formats, Pricing, and Where to Host | Creatdrop",
  description:
    "From live Zoom sessions to on-demand video libraries — the complete guide to monetizing your yoga practice online.",
  keywords: [
    "sell yoga classes online",
    "yoga instructor digital products",
    "online yoga business",
    "yoga membership site",
    "how to monetize yoga",
    "yoga teacher income",
    "sell yoga videos",
    "yoga on demand platform",
  ],
  alternates: {
    canonical: "https://creatdrop.com/blog/sell-yoga-classes-online",
  },
  openGraph: {
    title:
      "How to Sell Yoga Classes Online in 2026: Formats, Pricing, and Where to Host | Creatdrop",
    description:
      "From live Zoom sessions to on-demand video libraries — the complete guide to monetizing your yoga practice online.",
    url: "https://creatdrop.com/blog/sell-yoga-classes-online",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "How to Sell Yoga Classes Online in 2026: Formats, Pricing, and Where to Host | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Sell Yoga Classes Online in 2026: Formats, Pricing, and Where to Host | Creatdrop",
    description:
      "From live Zoom sessions to on-demand video libraries — the complete guide to monetizing your yoga practice online.",
  },
};

export default function SellYogaClassesOnline() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="How to Sell Yoga Classes Online in 2026: Formats, Pricing, and Where to Host"
        description="From live Zoom sessions to on-demand video libraries — the complete guide to monetizing your yoga practice online."
        url="https://creatdrop.com/blog/sell-yoga-classes-online"
        datePublished="2026-04-24"
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
          <span className="text-slate-800">Sell yoga classes online</span>
        </nav>

        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-violet-600">
          Digital Products
        </p>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          How to Sell Yoga Classes Online in 2026: Formats, Pricing, and Where
          to Host
        </h1>

        <p className="mb-10 text-base text-slate-500">
          9 min read &mdash; Published April 2026
        </p>

        <div className="prose prose-slate max-w-none text-[17px] leading-relaxed text-slate-700 space-y-6">
          <p>
            Yoga instructors have more leverage online than almost any other
            fitness professional. A well-sequenced class, a carefully written
            PDF, or a curated video library can generate revenue around the
            clock — with none of the scheduling friction of in-person teaching.
          </p>
          <p>
            But getting there requires more than uploading a video and hoping.
            The decisions about format, pricing, and platform are where most
            yoga instructors lose money or leave it on the table. This guide
            covers those decisions plainly, with benchmarks from the current
            market.
          </p>

          {/* Section 1 */}
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            The 5 Formats for Selling Yoga Online
          </h2>
          <p>
            Not every format suits every instructor or every audience. The
            table below maps each format to its ideal use case, market price
            range, and how well it fits a platform like Creatdrop for direct
            delivery.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="border border-slate-200 p-3 text-left">Format</th>
                  <th className="border border-slate-200 p-3 text-left">Best for</th>
                  <th className="border border-slate-200 p-3 text-left">Avg price</th>
                  <th className="border border-slate-200 p-3 text-left">Creatdrop fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Live Zoom drop-ins (per session)",
                    "Beginners building an audience",
                    "$10–$25",
                    "Link in bio checkout",
                  ],
                  [
                    "Live Zoom series (4–8 weeks)",
                    "Community building and retention",
                    "$80–$200",
                    "Landing page with payment",
                  ],
                  [
                    "On-demand video library",
                    "Passive income at scale",
                    "$15–$40/mo or $97–$297 one-time",
                    "Yes — upload + instant delivery",
                  ],
                  [
                    "Downloadable PDF sequences",
                    "Low-effort upsell or lead magnet",
                    "$9–$29",
                    "Yes — PDF delivery built-in",
                  ],
                  [
                    "Bundled programs (PDF + video)",
                    "Premium offer, highest AOV",
                    "$97–$297",
                    "Yes — multi-file bundles",
                  ],
                ].map(([format, best, price, fit]) => (
                  <tr key={format} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">
                      {format}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      {best}
                    </td>
                    <td className="border border-slate-200 p-3 font-semibold text-violet-700">
                      {price}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-500">
                      {fit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Live sessions are the natural starting point for most yoga
            instructors — they require the least production effort and provide
            immediate feedback on what students want. The shift to on-demand and
            bundled products is where income becomes genuinely passive: the same
            video library earns on a Tuesday at 2am as it does during peak
            posting hours.
          </p>
          <p>
            Downloadable PDF sequences are frequently underestimated. A clean,
            well-illustrated 20-pose morning flow PDF can sell at $15–$25 with
            near-zero marginal cost per sale and serve as an entry product that
            converts buyers into repeat customers for higher-priced video
            programs.
          </p>

          {/* Section 2 */}
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Pricing Your Yoga Offers
          </h2>
          <p>
            Yoga instructors consistently underprice their work. The most common
            reason: comparing themselves to free YouTube content rather than to
            the value their students receive. A student who finally nails
            pigeon pose safely after three years of hip pain is not comparing
            your $97 program to a free video — they are comparing it to physio
            bills.
          </p>
          <p>
            Market benchmarks by experience level:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="border border-slate-200 p-3 text-left">
                    Experience level
                  </th>
                  <th className="border border-slate-200 p-3 text-left">
                    Drop-in
                  </th>
                  <th className="border border-slate-200 p-3 text-left">
                    Monthly membership
                  </th>
                  <th className="border border-slate-200 p-3 text-left">
                    Program bundle
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Less than 1 year teaching", "$8–$12", "$15–$25", "$47–$97"],
                  ["1–3 years teaching", "$12–$20", "$25–$45", "$97–$197"],
                  [
                    "3+ years / specialty (prenatal, trauma-informed)",
                    "$20–$35",
                    "$45–$80",
                    "$197–$397",
                  ],
                ].map(([level, dropin, monthly, bundle]) => (
                  <tr key={level} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">
                      {level}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      {dropin}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      {monthly}
                    </td>
                    <td className="border border-slate-200 p-3 font-semibold text-violet-700">
                      {bundle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Specialty certifications shift pricing meaningfully. A prenatal
            yoga program or a trauma-informed yin series commands a premium not
            because the production cost is higher, but because the audience is
            more specific and the perceived expertise is greater. If you have a
            specialty, price accordingly.
          </p>
          <p>
            <strong>Anchor pricing</strong> is the single most effective
            structural change most yoga instructors can make to their offer
            page. The principle: always display your highest-priced offer first.
            When a visitor sees your $197 bundle before they see your $25/month
            membership, the membership feels like excellent value by comparison
            — even if they would have found $25/month expensive without the
            anchor. List bundle first, then membership, then drop-in. The
            sequence shapes perception.
          </p>

          {/* Section 3 */}
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Platform Comparison for Yoga Instructors
          </h2>
          <p>
            Most yoga instructors start with Zoom and a payment link, then look
            for something more robust as they grow. The platform you choose
            matters primarily for two reasons: how much of each sale you keep,
            and how much technical overhead you inherit.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="border border-slate-200 p-3 text-left">Platform</th>
                  <th className="border border-slate-200 p-3 text-left">Transaction fee</th>
                  <th className="border border-slate-200 p-3 text-left">Video hosting</th>
                  <th className="border border-slate-200 p-3 text-left">PDF delivery</th>
                  <th className="border border-slate-200 p-3 text-left">Monthly cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Zoom alone", "0%", "No", "No", "$15"],
                  ["YouTube + Gumroad", "0% + 10%", "YouTube (free)", "Yes", "$0"],
                  ["Teachable", "0–10%", "Yes", "Yes", "$39–$119"],
                  ["Kajabi", "0%", "Yes", "Yes", "$149"],
                  ["Creatdrop", "0%", "Via upload", "Yes", "$0 at launch"],
                ].map(([platform, fee, video, pdf, cost]) => (
                  <tr key={platform} className="hover:bg-slate-50">
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">
                      {platform}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      {fee}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      {video}
                    </td>
                    <td className="border border-slate-200 p-3 text-slate-600">
                      {pdf}
                    </td>
                    <td className="border border-slate-200 p-3 font-semibold text-violet-700">
                      {cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Creatdrop is purpose-built for fitness and yoga creators. There is
            no course overhead to configure, no drip scheduling to set up, no
            community forum to manage unless you want one. Upload your files,
            set a price, and the platform handles delivery. At launch there is
            no monthly fee — making it a rational starting point before volume
            justifies a more elaborate setup.
          </p>
          <p>
            Kajabi and Teachable make sense when your primary product is a
            structured multi-module course with quizzes, completion tracking,
            and community forums. If you are selling a yoga sequence PDF, a
            class recording bundle, or a 30-day on-demand program, those
            features add cost and complexity without adding value for your
            students.
          </p>

          {/* Section 4 */}
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            What to Include in a Yoga Digital Product
          </h2>
          <p>
            A well-packaged yoga product answers the student&apos;s most likely
            questions before they need to ask them. That means going beyond a
            single video file. The components that meaningfully increase
            perceived value and reduce refund rates:
          </p>
          <ul className="space-y-3 pl-0 list-none">
            {[
              [
                "Class recording (MP4, 1080p recommended)",
                "The core deliverable. Record at 1080p minimum — 4K adds file size without benefit for follow-along formats. Ensure the instructor is clearly visible in wide shots and that audio captures cues cleanly.",
              ],
              [
                "Written sequence PDF (for offline use)",
                "A companion document listing every pose in order with alignment cues and hold times. Students who travel, practice without wifi, or simply prefer reading benefit enormously from this. It also extends the life of the product — the video requires a screen, the PDF can be printed.",
              ],
              [
                "Breathing and pranayama guide",
                "A short reference (2–4 pages) covering the breathwork patterns used in the class: ujjayi, nadi shodhana, kapalabhati. Many students want to practice breath separately from asana. A standalone guide positions your product as more complete than a raw recording.",
              ],
              [
                "Modifications guide (beginner and injury-safe alternatives)",
                "The single most common reason students do not finish a yoga program: they hit a pose they cannot do and stop. A modifications guide with prop suggestions and alternative poses for tight hips, wrist issues, and lower back sensitivity removes this barrier. This document also protects you — students who injure themselves because no alternatives were shown are more likely to request refunds.",
              ],
              [
                "Optional: Spotify playlist link",
                "If music is part of your teaching, include the playlist link. It costs nothing to add and students frequently cite it as a standout feature of higher-priced programs. It also creates a distribution touchpoint — students who share your playlist expose your brand to their followers.",
              ],
            ].map(([title, detail]) => (
              <li
                key={title}
                className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <span className="mt-0.5 flex-shrink-0 font-bold text-violet-600">
                  &#10003;
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Section 5 */}
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            5-Step Launch Sequence
          </h2>
          <p>
            Most yoga instructors treat launching as a single event — post once,
            hope for sales. The instructors who build consistent revenue treat
            launching as a five-step sequence that builds audience, captures
            leads, and converts over a defined window.
          </p>

          <ol className="space-y-4 pl-0 list-none">
            {[
              {
                n: "1",
                title: "Record 3 free classes and publish them as short-form content",
                body: "Post 60–90 second clips to Instagram Reels and YouTube Shorts. These clips are not teasers — they are complete micro-lessons. A tip on warrior alignment, a 90-second breathing tutorial, a before/after of a common hip-opening mistake. People who find your free content useful are the people who buy your paid content. Build this audience before you have a product to sell.",
              },
              {
                n: "2",
                title: "Create a lead magnet to capture emails",
                body: "A free 15-minute morning flow PDF — pose sequence, cue notes, and a breathing guide — is sufficient. Gate it behind an email opt-in on your website or a platform like ConvertKit. Every person who downloads it has self-identified as someone interested in exactly what you sell. This list is worth more than your follower count.",
              },
              {
                n: "3",
                title: "Build your product on Creatdrop",
                body: "Upload your class recording, sequence PDF, modifications guide, and breathwork reference as a single product bundle. Set your pricing tiers. Write a product description that speaks to a specific student (\"for intermediate practitioners who want a 60-minute hip-opening flow they can do from home\") rather than everyone. Narrow descriptions convert better than broad ones.",
              },
              {
                n: "4",
                title: "Set your pricing tiers using the anchor structure",
                body: "List the bundle first at your highest price point. Below it, offer the monthly membership. Below that, the single drop-in or standalone PDF. The anchor effect means most students will evaluate the membership and drop-in relative to the bundle — making both feel more accessible. Do not offer all three at the same visual weight; the bundle should lead.",
              },
              {
                n: "5",
                title: "Send a launch email and post a Story on release day",
                body: "Email your list with a personal note about why you built this, what it includes, and a direct link. Post an Instagram Story with a link sticker and a short video of you talking about the program — not a polished ad, a genuine explanation. Students buy from teachers they feel they know. Same-day email + Story is the highest-converting launch combination for solo creators with lists under 5,000 subscribers.",
              },
            ].map(({ n, title, body }) => (
              <li key={n} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {n}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Section 6 */}
          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            SEO and Discoverability for Yoga Instructors
          </h2>
          <p>
            Social media content disappears within 48 hours. Search content
            compounds. A YouTube video titled &ldquo;20 min morning yoga for
            beginners&rdquo; that ranks on YouTube search will drive views in
            month 1, month 6, and month 24. SEO is the long game that
            eventually makes the social media hustle optional.
          </p>

          <p className="mb-4 text-slate-700 leading-relaxed">
            The four channels that build durable discoverability for yoga
            instructors:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">
                YouTube as a search engine
              </p>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                YouTube is the second-largest search engine in the world, and
                yoga searches are among its highest-volume fitness categories.
                Title every video like a search query: &ldquo;20 min morning yoga for
                beginners,&rdquo; &ldquo;yin yoga for tight hips — 30 minutes,&rdquo; &ldquo;prenatal
                yoga second trimester safe sequence.&rdquo; Include your product link in
                the video description. A student who finds your free YouTube
                class, enjoys it, and wants more will click that link.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">
                Pinterest boards linking to your product page
              </p>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Pinterest is an intent-heavy platform. People searching for
                yoga sequences, morning routines, and mindfulness content on
                Pinterest are in a discovery mindset and significantly more
                likely to purchase than social media scrollers. Create boards for
                your specific niches — restorative yoga, power yoga for athletes,
                yoga for desk workers — and pin images with direct links to your
                product or blog pages.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">
                Blog posts targeting [style] yoga for [audience]
              </p>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Long-form content on your own domain is the most durable SEO
                asset. A post titled &ldquo;Yin yoga for runners: a 45-minute recovery
                sequence&rdquo; targets a searcher with a specific problem who has
                already eliminated yoga beginners and general practitioners from
                their search. These high-intent visitors convert to email
                subscribers and buyers at much higher rates than generic traffic.
                Aim for one post per month on a distinct [style] + [audience]
                combination relevant to your practice.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">
                Google Business Profile for local students
              </p>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                If you teach any in-person classes or serve a local market, a
                Google Business Profile is free infrastructure that drives local
                search traffic. Searches like &ldquo;yoga teacher near me&rdquo; or &ldquo;online
                yoga classes [city]&rdquo; surface Business Profiles above organic
                results. Use the products section to link directly to your
                Creatdrop offerings. Local students who find you through Google
                Maps frequently convert to online buyers when they discover you
                have on-demand content.
              </p>
            </div>
          </div>

          <p>
            The compounding effect of SEO means these channels require patience.
            A YouTube video published today may not rank for six months. A blog
            post may take three months to index meaningfully. But a yoga
            instructor who publishes consistently across these channels for one
            year builds a discovery engine that makes paid advertising
            unnecessary — and that is a significant structural advantage over
            instructors who depend entirely on social media reach.
          </p>
        </div>

        {/* CTA — WaitlistForm */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Your Yoga Classes
          </h2>
          <p className="mb-6 text-slate-600">
            Creatdrop handles delivery, payments, and downloads — so you can
            focus on teaching.
          </p>
          <WaitlistForm source="blog-sell-yoga-classes-online" />
        </section>

        {/* Related articles */}
        <section className="mt-16 border-t border-slate-100 pt-10">
          <h2 className="mb-6 text-xl font-semibold text-slate-900">
            Related Articles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/sell-workout-videos-online"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-900 group-hover:text-violet-700">
                How to Sell Workout Videos Online in 2026 &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Download vs streaming, pricing by format, and platforms that
                keep more of your revenue.
              </p>
            </Link>
            <Link
              href="/blog/sell-fitness-courses-online"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-900 group-hover:text-violet-700">
                How to Sell Fitness Courses Online in 2026 &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Format, pricing, platform choice — the complete guide for
                fitness creators.
              </p>
            </Link>
            <Link
              href="/blog/passive-income-fitness-coach"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-900 group-hover:text-violet-700">
                Passive Income for Fitness Coaches &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                What to build first, how to price it, and the compounding math
                behind digital products.
              </p>
            </Link>
            <Link
              href="/blog/how-to-price-fitness-programs"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-900 group-hover:text-violet-700">
                How to Price Fitness Programs &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Market rates for video, PDF, and bundle products across
                experience levels.
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
