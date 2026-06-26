import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Xinyi Liuhe Quan Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Xinyi Liuhe Quan expertise. Creatdrop gives instructors the tools to sell Chinese Muslim martial arts programmes, six harmonies conditioning series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Xinyi Liuhe Quan Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Xinyi Liuhe Quan expertise. Creatdrop gives instructors the tools to sell Chinese Muslim martial arts programmes, six harmonies conditioning series, and school licences to a global audience.",
  },
}

export default function XinyiLiuheQuanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Xinyi Liuhe Quan Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Xinyi Liuhe Quan Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Xinyi Liuhe Quan — Heart-Mind Six Harmonies Boxing — is one of the oldest documented Chinese
            internal martial arts, with lineage records reaching back to the early Qing dynasty and the
            legendary figure Ji Jike (Ji Longfeng). The system has been preserved almost exclusively within
            Chinese Muslim (Hui) communities, particularly in Henan province and the Luoyang area, giving it
            an exceptionally rare cultural identity within Chinese martial arts: a synthesis of Taoist
            fighting principles with Islamic ethical frameworks that has produced one of the most practically
            powerful internal systems in existence. The ten animal shapes — bear, eagle, hawk, swallow,
            horse, rooster, snake, tiger, dragon, and sparrow hawk — encode explosive combat applications
            through vivid natural metaphors.
          </p>
          <p>
            The relationship between Xinyi Liuhe Quan and Xingyiquan is one of the most debated in Chinese
            martial arts scholarship. Many historians believe Xingyiquan derived from or shares a root system
            with Xinyi Liuhe, making the Henan style an important touchstone for the far more widely
            practised Xingyiquan community. This creates a natural crossover market: Xingyiquan practitioners
            worldwide have direct scholarly and practical interest in Xinyi Liuhe Quan's older technical
            vocabulary.
          </p>
          <p>
            Creatdrop lets you reach both the dedicated Chinese internal arts community and the broader Hui
            martial arts diaspora in Southeast Asia and globally. The scarcity of qualified Xinyi Liuhe
            instruction in non-Chinese-speaking countries makes online instruction from a lineage-verified
            teacher an exceptionally high-value proposition. This is not content that can be found anywhere
            else in English.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Xinyi Liuhe Quan Programme Pricing</h2>
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
                  <td className="px-6 py-4">Ten Animal Shapes Foundation</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">All ten shapes with application principles</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Six Harmonies Theory Masterclass</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Internal/external coordination system</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Bear and Eagle Power Development</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Core power generation animals</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Xinyi-Xingyiquan Comparison Seminar</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Historical relationship and technical comparison</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$197 / year</td>
                  <td className="px-6 py-4">White-label for internal arts programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Henan Lineage Curriculum</td>
                  <td className="px-6 py-4">$247 – $397</td>
                  <td className="px-6 py-4">Full traditional transmission with historical context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Xinyi Liuhe Quan Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Xingyiquan Practitioners</h3>
              <p className="text-sm text-slate-600">
                A large existing community with direct lineage interest in Xinyi Liuhe Quan's older
                technical vocabulary. Comparison content between the two systems drives high engagement
                and purchase intent in this segment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Chinese Internal Arts Community</h3>
              <p className="text-sm text-slate-600">
                Practitioners of Taijiquan, Baguazhang, and Xingyiquan who seek exposure to rarer
                traditions within the internal arts spectrum. Xinyi Liuhe Quan's position as a root
                system makes it attractive for deep practitioners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Hui Cultural Communities</h3>
              <p className="text-sm text-slate-600">
                Chinese Muslim diaspora communities in Malaysia, Indonesia, Central Asia, and the
                Middle East with cultural interest in Hui martial arts heritage. An underserved online
                audience with high cultural motivation.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Xinyi Liuhe Quan Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the Xingyiquan connection", "The academic debate about Xinyi Liuhe Quan as the older parent system of Xingyiquan gives you an immediate hook for the large Xingyiquan community. Lead with this connection in all marketing."],
              ["Film the ten animal shapes completely", "The animal shape curriculum is the unique technical vocabulary that distinguishes Xinyi Liuhe Quan. Film each shape with power application demonstrations to show the combat logic behind the movements."],
              ["Publish and price at the rare-knowledge tier", "Upload to Creatdrop and set pricing that reflects genuine scarcity. This is advanced Chinese internal arts instruction from a lineage that is difficult to access even in China — price accordingly."],
              ["Target the internal arts scholarly community", "Chinese martial arts research blogs, internal arts podcasts, and academic forums focused on traditional Chinese fighting systems reach precisely the practitioners most likely to purchase."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Xinyi Liuhe Quan Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Internal Arts YouTube Channels</h3>
              <p className="text-sm text-slate-600">
                Chinese internal martial arts YouTube channels have dedicated audiences that follow rare
                content closely. Animal shape demonstrations from a verified Henan lineage will attract
                significant attention from the internal arts community globally.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Xingyiquan Association Networks</h3>
              <p className="text-sm text-slate-600">
                National and international Xingyiquan organisations and their newsletters reach
                practitioners with the highest motivation to engage with Xinyi Liuhe Quan content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Chinese Martial Arts Research Community</h3>
              <p className="text-sm text-slate-600">
                Academic and independent researchers studying Chinese martial arts history are highly
                engaged with lineage-authenticated Xinyi Liuhe Quan content and will share widely
                within their networks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Muslim Martial Arts Networks</h3>
              <p className="text-sm text-slate-600">
                Islamic martial arts organisations and Hui community associations globally are receptive
                to content that honours the Chinese Muslim martial heritage embedded in Xinyi Liuhe Quan.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Xinyi Liuhe Quan Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Six Harmonies Coordination</h3>
              <p className="text-sm text-slate-600">
                The six harmonies — shoulder with hip, elbow with knee, hand with foot; heart with intent,
                intent with qi, qi with force — demand total-body movement integration that takes years
                of patient drilling to develop to a functional standard.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Animal Shape Power Expression</h3>
              <p className="text-sm text-slate-600">
                Each animal shape encodes a specific power quality: bear"s sinking weight, eagle"s
                diving strike, tiger's leaping attack. Embodying these qualities physically rather than
                merely imitating the external shape is the core developmental challenge of the system.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Zhan Zhuang Standing Practice</h3>
              <p className="text-sm text-slate-600">
                Like other Chinese internal systems, Xinyi Liuhe Quan develops root and structural
                strength through static standing meditation postures. Regular practice is physically
                demanding in ways distinct from dynamic movement training.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Xinyi Liuhe Quan Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Henan lineage knowledge into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Xingyiquan Fitness Programs Online", "/blog/sell-masters-xingyiquan-fitness-programs-online"],
              ["Sell Masters Baguazhang Fitness Programs Online", "/blog/sell-masters-baguazhang-fitness-programs-online"],
              ["Sell Masters Tongbei Quan Fitness Programs Online", "/blog/sell-masters-tongbei-quan-fitness-programs-online"],
              ["Sell Masters Bajiquan Fitness Programs Online", "/blog/sell-masters-bajiquan-fitness-programs-online"],
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
