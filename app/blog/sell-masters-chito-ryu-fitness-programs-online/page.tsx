import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Chito-Ryu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Chito-ryu expertise. Creatdrop gives instructors the tools to sell biomechanical conditioning programmes, kata series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Chito-Ryu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Chito-ryu expertise. Creatdrop gives instructors the tools to sell biomechanical conditioning programmes, kata series, and school licences to a global audience.",
  },
}

export default function ChitoryuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Chito-Ryu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Chito-Ryu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Chito-ryu was founded by Tsuyoshi Chitose — born Chinen Gua — who trained in Okinawa under
            Aragaki Seisho, Higashionna Kanryo, and Anko Itosu before emigrating to mainland Japan and
            establishing his school in 1946. Chitose was a medical doctor, and the distinguishing feature of
            Chito-ryu is its systematic application of anatomical and physiological knowledge to the design
            of technique. Stance geometry, joint alignment, and muscular engagement are explained not merely
            through traditional transmission but through biomechanical reasoning — making the system one of
            the most intellectually rigorous Okinawan lineages for instructors who want to explain the "why"
            behind each movement.
          </p>
          <p>
            The style is particularly strong in Canada, where Mamoru Yamamoto — one of Chitose's senior
            students — built an extensive national network, and in Japan, where the Chito-ryu organisation
            remains active. The global community is smaller than Shotokan or Kyokushin but deeply committed,
            and senior Canadian practitioners in particular have limited access to high-level Okinawan
            instruction on demand. An online programme from a qualified Chito-ryu instructor fills a genuine
            gap in this market.
          </p>
          <p>
            Creatdrop lets you package Chitose's medical biomechanics approach into modules that practitioners
            worldwide can access. The scientific framework of Chito-ryu is a unique marketing angle in the
            martial arts online space — "karate explained through anatomy" is compelling content for both
            traditional practitioners and the broader evidence-based fitness audience.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Chito-Ryu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Biomechanics of Karate Technique</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Chitose's medical approach explained</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Chito-Ryu Kata Series</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Core kata with anatomical commentary</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Stance and Footwork Foundation</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Joint alignment and weight distribution</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Okinawan Roots Masterclass</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Aragaki/Higashionna/Itosu lineage context</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Curriculum Bundle</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full kata library with biomechanical analysis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Chito-Ryu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Canadian Chito-Ryu Practitioners</h3>
              <p className="text-sm text-slate-600">
                A large national network of Canadian dojos with limited access to senior Japanese instruction.
                Willing buyers for quality online curriculum from qualified lineage instructors.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Evidence-Based Fitness Community</h3>
              <p className="text-sm text-slate-600">
                Fitness practitioners who respond to scientific reasoning over tradition alone. Chitose's
                medical biomechanics framework is a compelling differentiator in this growing segment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Cross-Training Karateka</h3>
              <p className="text-sm text-slate-600">
                Practitioners of Shotokan, Goju-ryu, and other systems seeking deeper movement analysis.
                The Chito-ryu anatomical framework offers insights applicable across karate styles.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Chito-Ryu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the biomechanics angle", "Chitose's medical doctorate is your unique hook. \"Karate designed by a doctor\" differentiates your content from every other traditional karate course on the market."],
              ["Film with anatomical reference", "Use diagrams, anatomical overlays, or joint-angle commentary to reinforce the scientific framing. This production value investment significantly increases perceived programme quality."],
              ["Publish and target Canada specifically", "The Canadian Chito-ryu network is the strongest English-language community outside Japan. Upload to Creatdrop and reach them through national association channels and club newsletters."],
              ["Cross-market to the broader karate audience", "Every karateka benefits from better biomechanical understanding. Position modules as \"how a karate doctor thinks about movement\" to attract practitioners from all systems."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Chito-Ryu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Canadian Martial Arts Media</h3>
              <p className="text-sm text-slate-600">
                Canadian karate publications, national federation newsletters, and dojo association channels
                reach the concentrated Canadian Chito-ryu community with high relevance and trust.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Biomechanics Content</h3>
              <p className="text-sm text-slate-600">
                "Why your karate technique works (or doesn't)" — style-agnostic biomechanics videos rank
                broadly and attract karateka across systems who become buyers for deeper Chito-ryu content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Sports Science Podcast Circuit</h3>
              <p className="text-sm text-slate-600">
                Sports science and movement quality podcasts reach an audience that genuinely values the
                evidence-based framing of Chito-ryu technique — a distinctly different audience from
                traditional martial arts channels.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Okinawan Karate Forums</h3>
              <p className="text-sm text-slate-600">
                Traditional martial arts communities and Okinawan karate forums value Chito-ryu's deep
                lineage connections — Aragaki, Higashionna, and Itosu represent three of the most
                important names in karate history.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Chito-Ryu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Postural Alignment Precision</h3>
              <p className="text-sm text-slate-600">
                Chitose's biomechanical approach demands correct skeletal alignment in every technique.
                Developing proprioceptive awareness of joint positions requires patient, deliberate drilling
                that is qualitatively different from power or speed training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Hip and Torso Rotation Mechanics</h3>
              <p className="text-sm text-slate-600">
                The rotational power generation in Chito-ryu is derived from specific hip and spinal
                mechanics explained through anatomical reasoning. Developing this requires both technical
                understanding and sustained kinesthetic practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Integrated Kata Execution</h3>
              <p className="text-sm text-slate-600">
                Performing Chito-ryu kata with correct biomechanical principles simultaneously demands
                memorisation, coordination, and conscious movement quality — a three-way challenge that
                develops over years of consistent practice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Chito-Ryu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Chitose lineage knowledge into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Shorin-Ryu Fitness Programs Online", "/blog/sell-masters-shorin-ryu-fitness-programs-online"],
              ["Sell Masters Ryuei-Ryu Fitness Programs Online", "/blog/sell-masters-ryuei-ryu-fitness-programs-online"],
              ["Sell Masters Goju-Ryu Fitness Programs Online", "/blog/sell-masters-goju-ryu-fitness-programs-online"],
              ["Sell Masters Karate Fitness Programs Online", "/blog/sell-masters-karate-fitness-programs-online"],
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
