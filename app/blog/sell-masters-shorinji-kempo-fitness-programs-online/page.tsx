import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Shorinji Kempo Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Shorinji Kempo expertise. Creatdrop gives instructors the tools to sell goho/juho technique programmes, embu paired kata, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Shorinji Kempo Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Shorinji Kempo expertise. Creatdrop gives instructors the tools to sell goho/juho technique programmes, embu paired kata, and school licences to a global audience.",
  },
}

export default function ShorinjikempoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Shorinji Kempo Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Shorinji Kempo Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Shorinji Kempo was founded in 1947 in Tadotsu, Japan, by So Doshin — a man who had studied
            Chinese martial arts in Manchuria during the war and returned with a vision of rebuilding
            Japanese society through martial training. The name references the Shaolin Temple (Shorinji is
            the Japanese reading of Shaolin), and the system synthesises striking (goho), joint locks and
            throws (juho), and resuscitation techniques (seiho) into a unified curriculum. Today the World
            Shorinji Kempo Organisation oversees around 1.4 million practitioners across 40 countries, with
            particularly strong presence in Japan, Germany, the United Kingdom, and Thailand.
          </p>
          <p>
            What gives Shorinji Kempo its unique commercial profile is the paired embu format. Practitioners
            train and compete in pairs — the cooperative choreography of goho and juho techniques performed
            in synchronised routines. This creates a natural content structure: instructors can sell solo
            technique libraries AND partner embu programmes that students practise with a training partner at
            home. The dual-curriculum model doubles the product line with almost no extra filming effort.
          </p>
          <p>
            Creatdrop removes every logistical obstacle between your knowledge and the global Shorinji Kempo
            community. Senior instructors based in Japan, Europe, or anywhere else can sell English-language
            breakdowns of goho atemi, juho kansetsuwaza, and embu curricula directly to practitioners who
            have limited access to qualified teachers. The market exists; the question is whether your
            programme is the one they find first.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Shorinji Kempo Programme Pricing</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-3 font-semibold">Product</th>
                  <th className="px-6 py-3 font-semibold">Price Range</th>
                  <th className="px-6 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4">Goho Atemi Foundation Course</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Striking mechanics and vital-point targets</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Juho Kansetsuwaza Series</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Joint locks, throws, and escapes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Embu Paired Kata Programme</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Competition-level embu routines</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Seiho Resuscitation Masterclass</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Pressure-point revival and bodywork</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Full Kyu-Grade Curriculum Bundle</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Complete white-to-black technical library</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Shorinji Kempo Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Active Practitioners</h3>
              <p className="text-sm text-slate-600">
                Students and mid-level kenshi seeking supplementary technique breakdowns and embu reference
                material beyond what their local branch can provide. A global and motivated buyer segment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Martial Arts Cross-Trainers</h3>
              <p className="text-sm text-slate-600">
                Judo, aikido, and karate practitioners drawn to Shorinji Kempo's unique combination of
                striking and joint-locking. The goho/juho synthesis is genuinely distinct from any single
                established system.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Dojo Owners</h3>
              <p className="text-sm text-slate-600">
                Instructors who want a licensed supplementary curriculum to extend their class offerings.
                The annual school licence model is a natural fit for dojo business models.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Shorinji Kempo Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Identify your content pillar", "Choose goho striking, juho grappling, embu performance, or seiho bodywork as your lead product. A clear niche makes marketing copy easy and conversions higher."],
              ["Film paired and solo demonstrations", "Shorinji Kempo demands partner work. Record both solo breakdowns and paired demonstrations to show the complete picture of each technique."],
              ["Launch and price strategically", "Upload to Creatdrop, set tiered pricing, and go live with your instructor page. The platform handles global payments, digital delivery, and VAT compliance."],
              ["Leverage the embu community", "Post embu performance clips on YouTube and Instagram. Competition embu attracts spectators who become students — and students who become buyers."],
            ].map(([title, body], i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marketing channels */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Shorinji Kempo Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Embu Demonstrations</h3>
              <p className="text-sm text-slate-600">
                Full embu routines and technique analysis videos rank for long-tail karate and martial arts
                searches. Quality video content is the highest-ROI acquisition channel for this audience.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">WSKO Community Channels</h3>
              <p className="text-sm text-slate-600">
                World Shorinji Kempo Organisation forums, national federation newsletters, and affiliated dojo
                networks are concentrated audiences with high purchase intent for quality instructional content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Instagram Technique Reels</h3>
              <p className="text-sm text-slate-600">
                Short goho atemi breakdowns and juho lock demonstrations perform well as Reels. The visually
                distinctive uniform and technique vocabulary make content instantly recognisable in feeds.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Budō Podcast Circuit</h3>
              <p className="text-sm text-slate-600">
                Japanese martial arts podcasts and channels covering traditional budō reach practitioners
                curious about Shorinji Kempo's philosophy and Chinese origins — strong candidates to buy.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Shorinji Kempo Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Goho/Juho Integration</h3>
              <p className="text-sm text-slate-600">
                Practitioners must develop fluency in both striking and grappling simultaneously. Training
                sessions alternate between atemi, kansetsuwaza, and ukemi — requiring broader athleticism than
                striking-only or grappling-only arts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Embu Synchronisation</h3>
              <p className="text-sm text-slate-600">
                Competitive embu demands timing precision between partners across complex multi-technique
                sequences. This is a performance skill that requires weeks of repetitive paired drilling
                distinct from functional self-defence application.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Kyusho Vital-Point Accuracy</h3>
              <p className="text-sm text-slate-600">
                Shorinji Kempo technique emphasises striking specific anatomical targets with precise angle and
                pressure. Developing this accuracy demands systematic drilling of body anatomy knowledge
                alongside motor skill practice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Shorinji Kempo Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your goho, juho, and embu expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Karate Fitness Programs Online", "/blog/sell-masters-karate-fitness-programs-online"],
              ["Sell Masters Wado-Ryu Fitness Programs Online", "/blog/sell-masters-wado-ryu-fitness-programs-online"],
              ["Sell Masters Kyokushin Fitness Programs Online", "/blog/sell-masters-kyokushin-fitness-programs-online"],
              ["Sell Masters Hapkido Fitness Programs Online", "/blog/sell-masters-hapkido-fitness-programs-online"],
            ].map(([title, href]) => (
              <Link
                key={href}
                href={href}
                className="group block rounded-2xl border border-slate-200 p-6 hover:border-violet-200 hover:bg-violet-50 transition-colors"
              >
                <span className="font-medium text-slate-900 group-hover:text-violet-700">{title}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
