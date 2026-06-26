import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Pak Mei Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Pak Mei expertise. Creatdrop gives instructors the tools to sell White Eyebrow kung fu programmes, explosive short-range conditioning, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Pak Mei Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Pak Mei expertise. Creatdrop gives instructors the tools to sell White Eyebrow kung fu programmes, explosive short-range conditioning, and school licences to a global audience.",
  },
}

export default function PakMeiPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Pak Mei Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Pak Mei Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Pak Mei — White Eyebrow — is one of the five family systems of Southern Chinese kung fu that
            traces its legendary origins to the Shaolin Temple. Whether or not the mythological narrative is
            historical, the system is undeniably one of the most distinct Southern kung fu traditions: it
            combines explosive short-range power generation, distinctive body mechanics based on the
            "floating, sinking, swallowing, spitting" (fu, chum, tun, tou) energy principles, and close
            combat techniques that emphasise simultaneous attack and defence. The system is strongly
            associated with the Guangdong province martial arts community and has a particularly concentrated
            following in Hong Kong and the Cantonese diaspora.
          </p>
          <p>
            Pak Mei's distinctive sound — the sharp exhalation accompanying each strike — and its explosive,
            tight-spiral energy generation model make it visually arresting content. The system's reputation
            for combining internal body mechanics with external explosive application positions it within the
            "hard internal" category alongside Xingyiquan and Baji quan, attracting practitioners from both
            the Cantonese kung fu world and the broader internal arts community. Its five-animal forms, short
            bridge techniques, and intricate footwork patterns create a rich content library.
          </p>
          <p>
            Creatdrop gives Pak Mei instructors the tools to reach the Cantonese diaspora in North America,
            Australia, and the UK — communities with deep cultural ties to Guangdong martial traditions and
            limited access to qualified Pak Mei instruction outside major Chinese population centres. The
            system's combination of cultural authenticity, explosive technique, and documented lineage makes
            it a premium-tier programme offering.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Pak Mei Programme Pricing</h2>
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
                  <td className="px-6 py-4">Four Energy Principles Course</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Fu/chum/tun/tou body mechanics explained</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Core Forms Series</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Jik Bo, Sup Baat Mo Kiu, and senior forms</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Short Bridge Application Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Close-range striking and defence integration</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Five Animals in Pak Mei Masterclass</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Dragon, tiger, leopard, snake, crane expressions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for kung fu programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Curriculum Bundle</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full forms library with energy mechanics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Pak Mei Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Cantonese Diaspora Communities</h3>
              <p className="text-sm text-slate-600">
                Cantonese communities in North America, Australia, and the UK with cultural ties to
                Guangdong kung fu traditions. This audience has strong cultural motivation and limited
                access to qualified local instruction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Southern Kung Fu Practitioners</h3>
              <p className="text-sm text-slate-600">
                Practitioners of Hung Gar, Wing Chun, Choy Li Fut, and other Southern systems interested
                in exploring Pak Mei's distinctive short-bridge mechanics and explosive power generation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Hard Internal Arts Community</h3>
              <p className="text-sm text-slate-600">
                Practitioners of Bajiquan and Xingyiquan drawn to Pak Mei's internal body mechanics
                expressed through external explosive application — the "hard internal" power generation
                model that distinguishes it from both pure external and soft internal systems.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Pak Mei Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the energy principles", "The four Pak Mei energies — floating, sinking, swallowing, spitting — are the conceptual framework that makes the system distinctive. Starting there contextualises every technique that follows and demonstrates your depth."],
              ["Film the unique sonic signature", "The sharp exhalation sound of Pak Mei is immediately recognisable and distinctive. Record audio clearly to capture this characteristic that separates the system from all other kung fu styles visually and aurally."],
              ["Publish and target the Hong Kong and diaspora community", "Upload to Creatdrop and reach Cantonese martial arts organisations, Hong Kong community associations, and Southern kung fu club networks globally. Annual school licences are a natural fit for established kung fu schools."],
              ["Position against Wing Chun and Hung Gar", "Wing Chun practitioners are a large, online-active community with adjacent technical interests. Position your content as the explosive short-bridge complement to their system to capture a natural crossover audience."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Pak Mei Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Short Bridge Technique Videos</h3>
              <p className="text-sm text-slate-600">
                Slow-motion demonstrations of Pak Mei explosive technique with energy principles
                explained drive discovery from Southern kung fu practitioners worldwide. The distinctive
                visual signature of Pak Mei stands out clearly in feed-based discovery.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Cantonese Kung Fu Community Networks</h3>
              <p className="text-sm text-slate-600">
                Southern Chinese martial arts associations, Cantonese community newspapers, and kung fu
                school federation newsletters reach the concentrated Pak Mei buyer community directly.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Southern Kung Fu Forums</h3>
              <p className="text-sm text-slate-600">
                KungFuMagazine.com, Southern kung fu Facebook groups, and martial arts forums with
                Cantonese system focus provide access to self-directed learners actively seeking
                supplementary instruction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Internal Arts Podcast Circuit</h3>
              <p className="text-sm text-slate-600">
                Podcasts focused on Chinese internal arts and martial theory reach practitioners
                interested in Pak Mei's position at the intersection of internal mechanics and
                explosive external expression.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Pak Mei Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Explosive Short-Range Power</h3>
              <p className="text-sm text-slate-600">
                Pak Mei specialises in generating maximum striking force within very short distance through
                whole-body spiral mechanics. Developing this power requires specific conditioning of the
                torso rotation, shoulder mechanics, and coordinated exhalation that underpin each technique.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Four Energy Coordination</h3>
              <p className="text-sm text-slate-600">
                The fu-chum-tun-tou energy cycle demands seamless transition between expansion, compression,
                absorption, and release within single techniques. This multi-layered coordination takes
                years of dedicated practice to integrate at functional combat speed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Bridge Sensitivity Training</h3>
              <p className="text-sm text-slate-600">
                Like Wing Chun's chi sao, Pak Mei develops tactile sensitivity through bridge-arm contact
                drills. This sensitivity skill requires sustained partner practice and develops independently
                from the striking power that characterises the system externally.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Pak Mei Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your White Eyebrow lineage knowledge into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Wing Chun Fitness Programs Online", "/blog/sell-masters-wing-chun-fitness-programs-online"],
              ["Sell Masters Hung Gar Fitness Programs Online", "/blog/sell-masters-hung-gar-fitness-programs-online"],
              ["Sell Masters Bajiquan Fitness Programs Online", "/blog/sell-masters-bajiquan-fitness-programs-online"],
              ["Sell Masters Choy Li Fut Fitness Programs Online", "/blog/sell-masters-choy-li-fut-fitness-programs-online"],
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
