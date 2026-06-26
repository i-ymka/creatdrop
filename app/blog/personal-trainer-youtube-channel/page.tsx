import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Personal Trainer YouTube Channel in 2026: How to Grow, Monetize, and Sell From It",
  description:
    "YouTube is the highest-converting platform for fitness coaches. Here's how to start a channel, grow it, and turn viewers into buyers of your programs.",
  alternates: {
    canonical: "https://creatdrop.com/blog/personal-trainer-youtube-channel",
  },
  openGraph: {
    type: "article",
    siteName: "Creatdrop",
    title: "Personal Trainer YouTube Channel in 2026: How to Grow, Monetize, and Sell From It",
    description:
      "YouTube is the highest-converting platform for fitness coaches. Here's how to start a channel, grow it, and turn viewers into buyers of your programs.",
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
    title: "Personal Trainer YouTube Channel in 2026: How to Grow, Monetize, and Sell From It",
    description:
      "YouTube is the highest-converting platform for fitness coaches. Here's how to start a channel, grow it, and turn viewers into buyers of your programs.",
  },
}

export default function PersonalTrainerYouTubeChannelPage() {
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

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-700 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-slate-700">Content Creation</span>
        </nav>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Category */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-600">
          Content Creation
        </p>

        {/* H1 */}
        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
          Personal Trainer YouTube Channel in 2026: How to Grow, Monetize, and Sell From It
        </h1>

        {/* Intro */}
        <p className="mb-4 text-slate-700 leading-relaxed">
          YouTube is the long game — but it is the best game for fitness coaches. A video that ranks on YouTube in year one earns views and clients in year three. Instagram followers forget you in 48 hours. YouTube subscribers search for you months after they first found you.
        </p>
        <p className="mb-10 text-slate-700 leading-relaxed">
          The mechanics are different from short-form social. Growth is slower at the start and compounding over time. That combination is exactly why fitness coaches who commit to YouTube end up building the most durable businesses in the creator economy. This guide covers every phase: setup, content strategy, SEO, monetization, and how to link it all to product revenue.
        </p>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why YouTube converts better than other platforms
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Not all social traffic is equal. A follower who scrolled past your Reel on a Saturday afternoon is a very different prospect from a viewer who searched for your topic and chose to watch 18 minutes of your content. Intent is the variable that changes conversion rates.
          </p>

          <div className="mb-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Platform</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Content lifespan</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Search traffic</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Avg viewer-to-buyer rate</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Time to monetize</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 text-slate-700">Instagram Reels</td>
                  <td className="border border-slate-200 p-3 text-slate-600">24–72 hours</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Low</td>
                  <td className="border border-slate-200 p-3 text-slate-600">1–3%</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Immediate (small)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">TikTok</td>
                  <td className="border border-slate-200 p-3 text-slate-600">7–30 days</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Low</td>
                  <td className="border border-slate-200 p-3 text-slate-600">0.5–2%</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Slow</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-violet-700">YouTube</td>
                  <td className="border border-slate-200 p-3 font-medium text-violet-700">Years</td>
                  <td className="border border-slate-200 p-3 font-medium text-violet-700">High</td>
                  <td className="border border-slate-200 p-3 font-medium text-violet-700">3–8%</td>
                  <td className="border border-slate-200 p-3 font-medium text-violet-700">6–18 months</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 text-slate-700">Pinterest</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Months</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
                  <td className="border border-slate-200 p-3 text-slate-600">2–5%</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            YouTube"s search engine is the mechanism behind those conversion numbers. Someone who types \"how to build muscle at home as a beginner\" into YouTube"s search bar and clicks your 15-minute video is a qualified buyer. They told you exactly what they want. Your job is to deliver it on screen and point them to the next step.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Channel setup checklist
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Before you post your first video, these six elements need to be in place. Viewers who find a video they love will immediately check your channel page. A sparse or confusing channel page kills subscriber conversion.
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <ul className="space-y-4">
              {[
                {
                  label: "Channel name",
                  detail:
                    "Use your name or a niche brand name. Avoid generic handles like \"FitLife123\" — they signal nothing about who you help or what results you deliver.",
                },
                {
                  label: "Channel art",
                  detail:
                    "Your banner should communicate who you help and what result they get. Think of it as a billboard: \"I help busy moms lose fat without a gym.\"",
                },
                {
                  label: "About section",
                  detail:
                    "The first two lines appear in search results before the \"show more\" cutoff. Write them as: \"I help [who] achieve [what] in [how long]. New video every [day].\"",
                },
                {
                  label: "Channel trailer",
                  detail:
                    "A 60–90 second video that explains who the channel is for and why they should subscribe. Speak directly to the viewer you want, not to everyone.",
                },
                {
                  label: "Playlists",
                  detail:
                    "Organize by goal, not by upload date. Create playlists for beginner workouts, fat loss, muscle building, and nutrition so new viewers can binge the content most relevant to them.",
                },
                {
                  label: "Links",
                  detail:
                    "Put your Creatdrop product page in the top three profile links. YouTube displays these prominently on channel pages and in the About tab.",
                },
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-600">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-slate-900">{item.label}: </span>
                    <span className="text-slate-700">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What types of videos grow a fitness YouTube channel
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Not every video format serves the same purpose. Some drive search traffic and discoverability. Others convert viewers to subscribers. Others directly sell products. A healthy channel mixes all three, with the ratio weighted toward the formats that score highest on the metrics you need most at your current stage.
          </p>

          <div className="mb-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Video type</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">SEO potential</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Subscriber conversion</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Viewer-to-buyer</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Example title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Full workout (follow-along)</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
                  <td className="border border-slate-200 p-3 text-slate-600">30-Minute Full Body Workout — No Equipment</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Educational explainer</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Why You're Not Losing Fat (The Real Reason)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Beginner guide</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">How to Start Lifting Weights for Beginners</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Transformation story</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
                  <td className="border border-slate-200 p-3 text-slate-600">I Lost 30 lbs in 12 Weeks — Here's What I Did</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Program review</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Medium</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Very high</td>
                  <td className="border border-slate-200 p-3 text-slate-600">I Tried AthleanX's Program for 90 Days</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Day in my life</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Low SEO</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">High</td>
                  <td className="border border-slate-200 p-3 text-slate-600">What I Eat and How I Train on a Rest Day</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            Beginner guides and full follow-along workouts should dominate your upload calendar in your first year. They compound fastest in search and attract the viewers most likely to need a structured program — which is exactly what you sell.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            YouTube SEO for fitness creators
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            YouTube is Google's search engine for video. The algorithm is designed to surface content that satisfies a search query, holds attention, and generates repeat visits. Ranking in fitness requires getting six variables right on every upload.
          </p>

          <div className="space-y-4">
            {[
              {
                n: 1,
                heading: "Keyword in title",
                body: "Use the exact phrase people type into search: \"home chest workout no equipment\" rather than \"my favorite chest day.\" The title is the primary signal YouTube uses to understand what your video is about.",
              },
              {
                n: 2,
                heading: "Keyword in first 2 lines of description",
                body: "YouTube reads the description for indexing. Put the target phrase in the first sentence. The first two lines also appear in search results before the \"Show more\" truncation.",
              },
              {
                n: 3,
                heading: "Tags",
                body: "Add 5–10 related search phrases as tags. Include the exact target keyword, close variations (\"home chest workout\", \"chest workout at home\", \"no equipment chest\"), and broader category tags (\"home workout\", \"calisthenics\").",
              },
              {
                n: 4,
                heading: "Thumbnail",
                body: "High contrast performs. Faces outperform non-faces. Text overlays that state the result (\"20 lbs down\", \"FULL BODY\") outperform abstract imagery. Your thumbnail and title should work as a unit — together they answer \"why should I click this?\"",
              },
              {
                n: 5,
                heading: "Click-through rate (CTR)",
                body: "Target greater than 5% CTR on impressions. Low CTR tells YouTube that your thumbnail or title does not match what viewers were searching for. Use YouTube Studio's A/B thumbnail test tool to run two versions against each other for the first 48 hours.",
              },
              {
                n: 6,
                heading: "Watch time",
                body: "YouTube rewards videos that people finish. Structure your video with a strong hook in the first 30 seconds — state the problem, tease the solution, start delivering value immediately. Add chapter timestamps to reduce drop-off by letting viewers navigate to the sections they care about.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {item.n}
                </span>
                <div>
                  <p className="mb-1 font-semibold text-slate-900">{item.heading}</p>
                  <p className="text-slate-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Monetization tiers for fitness YouTubers
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Revenue on YouTube scales in tiers. The mistake most fitness creators make is waiting for AdSense to justify the work. The table below shows why that math never adds up at low subscriber counts — and why selling your own products from day one is the only strategy that makes the early grind worth it financially.
          </p>

          <div className="mb-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Stage</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Subscribers</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Primary revenue</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">Est. monthly income</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Pre-monetization</td>
                  <td className="border border-slate-200 p-3 text-slate-600">0–1,000</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Digital product sales via Creatdrop</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$0–$500</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Early monetization</td>
                  <td className="border border-slate-200 p-3 text-slate-600">1,000+</td>
                  <td className="border border-slate-200 p-3 text-slate-600">AdSense ($1–$5 per 1k views) + products</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$500–$2,000</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Growing</td>
                  <td className="border border-slate-200 p-3 text-slate-600">10,000</td>
                  <td className="border border-slate-200 p-3 text-slate-600">AdSense + products + affiliates</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$1,500–$6,000</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Established</td>
                  <td className="border border-slate-200 p-3 text-slate-600">50,000</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Above + brand deals</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$4,000–$20,000</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-900">Large creator</td>
                  <td className="border border-slate-200 p-3 text-slate-600">100,000+</td>
                  <td className="border border-slate-200 p-3 text-slate-600">Full revenue mix</td>
                  <td className="border border-slate-200 p-3 text-slate-600">$10,000–$100,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            AdSense alone will not cover rent until you are generating 100,000 or more views per month. At the fitness niche CPM of $3–$8 per thousand views, a channel with 50,000 monthly views earns $150–$400 from ads. A single $49 training program sale to 1% of that audience earns $2,450. Product revenue is the priority at every stage.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Video description template for selling products
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The description is the highest-leverage real estate you have outside of the video itself. Most viewers never scroll past the first visible lines — but those lines appear in search results and in the YouTube mobile interface before tapping "Show more." Every description should follow this structure.
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
            <p className="mb-3 text-slate-500"># Paste into every video description</p>
            <p className="mb-1">[First 2 lines — keyword-rich summary of the video]</p>
            <p className="mb-4 text-slate-400">[Example: In this video I show you a complete 30-minute full body workout you can do at home with zero equipment.]</p>

            <p className="mb-1 font-semibold">PROGRAMS:</p>
            <p className="mb-1">→ [Product name]: [link to Creatdrop product page]</p>
            <p className="mb-4">→ [Free resource]: [email capture link]</p>

            <p className="mb-1 font-semibold">CHAPTERS:</p>
            <p className="mb-1">0:00 Intro</p>
            <p className="mb-4">[timestamp] [section name]</p>

            <p className="mb-1 font-semibold">FOLLOW ME:</p>
            <p>Instagram: @[handle]</p>
          </div>

          <p className="mt-4 mb-4 text-slate-700 leading-relaxed">
            The product link must appear before the fold — before a viewer has to tap "Show more" to read it. On mobile, YouTube shows approximately 150 characters before truncating. Put your Creatdrop product link in the PROGRAMS block, which immediately follows the two-line video summary.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Repurposing YouTube content across platforms
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Each long-form YouTube video is not a single piece of content. It is a content asset that can be extracted and redistributed across every platform you are active on. Repurposing is how a team of one competes with a media company.
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <ul className="space-y-4">
              {[
                {
                  source: "YouTube long-form",
                  arrow: "3–5 Reels / TikToks",
                  detail: "Extract the best 30–60 second clips. The hook, a key exercise demonstration, or a surprising data point all work well as standalone short-form content.",
                },
                {
                  source: "YouTube long-form",
                  arrow: "email newsletter",
                  detail: "Summarize the key points from the video in 200–300 words. Link back to the full video. This drives views from your email list and re-engages subscribers who missed the upload.",
                },
                {
                  source: "YouTube tutorial",
                  arrow: "blog post",
                  detail: "Embed the YouTube video at the top of a written post, then write the text version of the same content for Google search. Two search engines indexed from one piece of source content.",
                },
                {
                  source: "YouTube comments",
                  arrow: "future video ideas",
                  detail: "Client questions in the comments section are direct expressions of unmet search intent. Every question that appears more than once is a video brief.",
                },
                {
                  source: "YouTube Shorts",
                  arrow: "hook testing",
                  detail: "Post a 60-second Short using the hook you plan to open your next long-form video with. High retention on the Short validates the hook before you invest in full production.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-600">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-slate-900">{item.source} → {item.arrow}: </span>
                    <span className="text-slate-700">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 mb-4 text-slate-700 leading-relaxed">
            The goal is to remove the idea that you need to "create more content." You need to create one excellent long-form video per week and then distribute it intelligently. That ratio — one source, five destinations — is what makes the workload sustainable for a solo fitness creator.
          </p>
        </section>

        {/* Closing context */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The compounding nature of YouTube for fitness coaches
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The most important mental model for building a personal trainer YouTube channel is compounding. Month one is slow. Month six is faster. Year two is where the curve bends upward noticeably. Videos you published in your first 90 days will continue generating views and product sales two years later, without any additional work from you.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Fitness coaches who abandon YouTube after three months typically do so because they compare early YouTube growth rates to early Instagram or TikTok growth rates. The comparison is misleading. Short-form platforms reward novelty. YouTube rewards relevance. Relevance accumulates over time in a way that novelty never can.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The channel you build this year is a distribution asset that pays out for the next decade. Pair it with a product stack on Creatdrop — training programs, meal plans, workout templates — and every view your past content generates becomes a potential sale with no additional input from you.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Turn Your YouTube Views Into Sales</h2>
          <p className="mb-6 text-slate-600">
            Link your Creatdrop products in every video description — instant delivery to your viewers, 0% Creatdrop commission.
          </p>
          <WaitlistForm source="blog-personal-trainer-youtube-channel" />
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/blog/how-to-film-workout-videos"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">Content Creation</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Film Workout Videos at Home (Without a Crew)
              </p>
            </Link>

            <Link
              href="/blog/fitness-creator-tools"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">Tools</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                The Best Tools for Fitness Creators in 2026
              </p>
            </Link>

            <Link
              href="/blog/sell-workout-videos-online"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">Monetization</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                How to Sell Workout Videos Online in 2026
              </p>
            </Link>

            <Link
              href="/blog/passive-income-fitness-coach"
              className="group rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-600">Business</p>
              <p className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                Passive Income for Fitness Coaches: What Actually Works
              </p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
