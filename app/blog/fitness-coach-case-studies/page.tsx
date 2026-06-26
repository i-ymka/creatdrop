import { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Fitness Coach Case Studies: How Real Coaches Build Online Income | Creatdrop",
  description: "Real examples of how fitness coaches structure and sell online programs. Case studies on digital product launches, pricing strategies, and revenue models that actually work.",
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span>Fitness Coach Case Studies</span>
      </nav>

      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-violet-600">Business Strategy</p>
      <h1 className="mb-4 text-4xl font-bold text-slate-900">Fitness Coach Case Studies: How Real Coaches Build Online Income</h1>
      <p className="mb-10 text-lg text-slate-600">
        Strategy is easier to understand through examples than principles. Here are detailed
        case studies of how fitness coaches in different niches have structured their online
        businesses — what they sell, how they price it, where their buyers come from, and what
        drives their revenue. These are composite models based on observed patterns across
        successful coaching businesses.
      </p>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Case Study 1: The Niche Strength Coach</h2>
      <div className="mb-8 rounded-xl border border-slate-200 p-6">
        <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Niche</p>
            <p className="text-slate-900">Powerlifting for women over 35</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Audience Size</p>
            <p className="text-slate-900">~8,000 Instagram, ~3,500 email</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Primary Product</p>
            <p className="text-slate-900">12-week program at $97</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Monthly Revenue</p>
            <p className="text-slate-900">$4,000–$6,000</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          This coach built her audience almost entirely through Instagram content showing her own
          lifts and the lifts of her clients — specifically women in their 40s hitting new PRs.
          The specificity of "powerlifting for women over 35" gave her content instant credibility
          with an underserved demographic and almost no direct competition.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          Revenue comes from three sources: her core 12-week program ($97), a monthly online
          coaching tier ($197/month, capped at 20 clients), and a quarterly program launch to her
          email list. She does no paid advertising. Her email list converts at 4–6% on each launch.
        </p>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Key Lesson</p>
          <p className="text-sm text-slate-700">Specificity beats breadth. She turned down opportunities to create "general strength" programs because she understood that her niche position was her competitive advantage. A coach trying to serve everyone competes on price. A coach serving a specific underserved audience competes on identity fit.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Case Study 2: The YouTube-First Mobility Coach</h2>
      <div className="mb-8 rounded-xl border border-slate-200 p-6">
        <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Niche</p>
            <p className="text-slate-900">Hip mobility and lower back pain</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Audience Size</p>
            <p className="text-slate-900">~45,000 YouTube subscribers</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Primary Product</p>
            <p className="text-slate-900">30-day mobility program at $67</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Monthly Revenue</p>
            <p className="text-slate-900">$8,000–$14,000</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          This coach spent 18 months creating YouTube content before launching any product.
          Videos targeting "hip mobility exercises," "lower back pain stretches," and "tight
          hip flexors" accumulated millions of combined views — not because they went viral,
          but because they rank consistently on YouTube search for high-intent keywords.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          His first product launch — a 30-day hip mobility program — generated $22,000 in the
          first two weeks from an email list of 4,200 subscribers. He now does two product
          launches per year (spring and fall) plus evergreen sales through pinned video links
          and email sequences for new subscribers.
        </p>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Key Lesson</p>
          <p className="text-sm text-slate-700">YouTube subscribers who found you through a specific search query are buyers, not fans. Someone who searched "how to fix lower back pain" and found your video is pre-qualified for a lower back mobility program. The longer your content library, the more buyers arrive pre-sold every day.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Case Study 3: The Postpartum Specialist</h2>
      <div className="mb-8 rounded-xl border border-slate-200 p-6">
        <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Niche</p>
            <p className="text-slate-900">Postpartum return to fitness</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Audience Size</p>
            <p className="text-slate-900">~12,000 Instagram, ~5,000 email</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Primary Product</p>
            <p className="text-slate-900">Postpartum bundle at $197</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Monthly Revenue</p>
            <p className="text-slate-900">$6,000–$10,000</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          This coach built her business by starting with a prenatal audience and systematically
          transitioning them to postpartum clients. She positioned her prenatal program as step
          one of a two-program journey, making postpartum the natural continuation — not an upsell.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          Her core offer is a postpartum bundle: 12-week return-to-exercise program plus a
          pelvic floor foundation guide, sold at $197. New clients come from Instagram word-of-mouth,
          Pinterest (postpartum content performs exceptionally well), and healthcare provider
          referrals she cultivated by giving local OBs and midwives free access.
        </p>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Key Lesson</p>
          <p className="text-sm text-slate-700">Designing a prenatal-to-postpartum pipeline doubles the lifetime value of every client acquired at the prenatal stage. A client who buys prenatal program at $127 and then postpartum bundle at $197 is worth $324 — plus referrals to other pregnant women in her network.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Case Study 4: The High-Volume Digital Product Creator</h2>
      <div className="mb-8 rounded-xl border border-slate-200 p-6">
        <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Niche</p>
            <p className="text-slate-900">General fat loss and body composition</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Audience Size</p>
            <p className="text-slate-900">~85,000 TikTok, ~18,000 email</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Primary Product</p>
            <p className="text-slate-900">Multiple programs at $27–$97</p>
          </div>
          <div>
            <p className="font-semibold text-slate-500 uppercase tracking-wide text-xs mb-1">Monthly Revenue</p>
            <p className="text-slate-900">$15,000–$25,000</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mb-3">
          This coach operates at higher volume with a catalog of 8 products ranging from $27 to
          $97. Rather than one hero product, she has entry-level products (workout PDFs at $27),
          mid-tier programs (4-week plans at $47), and premium bundles ($97). Buyers often
          purchase 2–3 products over time.
        </p>
        <p className="text-sm text-slate-600 mb-3">
          Traffic comes entirely from TikTok. She posts daily — short workout clips, nutrition
          myth-busting, and transformation content. She has no paid ads and no SEO strategy.
          Her email list generates $0.80–$1.20 per subscriber per month through evergreen email
          sequences linked to her product catalog.
        </p>
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Key Lesson</p>
          <p className="text-sm text-slate-700">A catalog of complementary products at different price points extracts more revenue from an audience than a single program. Once someone buys from you and gets results, they buy again. Building multiple products for the same audience is more efficient than finding new audiences for each product.</p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-slate-900">Common Patterns Across All Cases</h2>
      <div className="mb-8 space-y-3">
        {[
          { pattern: "All started with free content", detail: "Every coach in these case studies built an audience before launching a product. The sequence is: create free content that demonstrates your expertise → build an audience that trusts you → convert a percentage of that audience into buyers. Launching a product to no audience produces no revenue." },
          { pattern: "Email is the conversion engine", detail: "Despite coming from different platforms (Instagram, YouTube, TikTok), all four coaches identified email as their primary revenue driver. Social platforms change algorithms and reduce organic reach. Email is an asset you own. Every successful digital product business ultimately converts social followers into email subscribers." },
          { pattern: "Niche specificity increases conversion", detail: "The coaches targeting specific audiences (women over 35, postpartum moms) consistently outperform on conversion rate compared to general fitness coaches, even with smaller audiences. A list of 3,000 highly relevant subscribers outperforms a list of 10,000 generic fitness followers." },
          { pattern: "Products are priced on value, not cost", detail: "None of these coaches priced their products based on time spent creating them. They priced based on the value of the transformation offered. A $197 postpartum program is not expensive relative to the value of safely returning to fitness after childbirth." },
        ].map((item) => (
          <div key={item.pattern} className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{item.pattern}</p>
            <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="my-12 rounded-2xl bg-violet-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">Ready to build your coaching business?</h2>
        <p className="mb-6 text-slate-600">
          Join fitness creators selling on Creatdrop — no monthly fees, instant payouts.
        </p>
        <WaitlistForm source="blog-fitness-coach-case-studies" />
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Related Articles</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/how-to-start-online-fitness-business" className="text-violet-600 hover:underline">
              How to Start an Online Fitness Business
            </Link>
          </li>
          <li>
            <Link href="/blog/how-much-do-online-fitness-coaches-make" className="text-violet-600 hover:underline">
              How Much Do Online Fitness Coaches Make?
            </Link>
          </li>
          <li>
            <Link href="/blog/fitness-coach-sales-funnel" className="text-violet-600 hover:underline">
              Fitness Coach Sales Funnel
            </Link>
          </li>
          <li>
            <Link href="/blog/personal-trainer-business-plan" className="text-violet-600 hover:underline">
              Personal Trainer Business Plan
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
