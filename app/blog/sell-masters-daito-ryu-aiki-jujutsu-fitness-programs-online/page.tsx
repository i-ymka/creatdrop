import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Daito-Ryu Aiki-Jujutsu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Daito-ryu Aiki-jujutsu expertise. Creatdrop gives instructors the tools to sell aiki joint-lock programmes, kokyu power series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Daito-Ryu Aiki-Jujutsu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Daito-ryu Aiki-jujutsu expertise. Creatdrop gives instructors the tools to sell aiki joint-lock programmes, kokyu power series, and school licences to a global audience.",
  },
}

export default function DaitoRyuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Daito-Ryu Aiki-Jujutsu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Daito-Ryu Aiki-Jujutsu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Daito-ryu Aiki-jujutsu is the martial system taught by Sokaku Takeda in the early twentieth
            century and acknowledged as the primary technical source from which Morihei Ueshiba developed
            Aikido. The system contains over 2,000 catalogued techniques across joint-locking, throwing,
            and atemi striking, organised into a formal transmission curriculum of increasingly sophisticated
            aiki principles. Where Aikido evolved toward a spiritual and philosophical emphasis, Daito-ryu
            retained a more explicitly martial focus, with techniques demonstrating aggressive application
            and precise anatomical targeting.
          </p>
          <p>
            The concept of aiki — harmonising with and redirecting an opponent's force structure — is at
            the heart of the system and has attracted deep investigation from researchers, practitioners,
            and biomechanics enthusiasts who find the principle both fascinating and elusive. Senior Daito-ryu
            practitioners like Kodo Horikawa and Yukiyoshi Sagawa developed their understanding of aiki to
            remarkable levels, and the small number of individuals who trained under them carry knowledge
            that the global Aikido, Judo, and grappling community actively seeks. Documentary footage of
            Sagawa's aiki demonstrations has circulated widely online and created a substantial audience
            primed to purchase instructional content.
          </p>
          <p>
            Creatdrop lets qualified Daito-ryu instructors reach that global audience. The system's
            historical significance as Aikido's source, its extensive technical catalogue, and the ongoing
            worldwide interest in aiki principles all support a premium-tier online programme with genuine
            scarcity value.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Daito-Ryu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Aiki Principles Foundation</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Core aiki concept with application framework</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Ikkajo Technique Series</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">First teaching level with all variations</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Kokyu Power Development Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Breath power and whole-body aiki conditioning</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Daito-ryu vs Aikido Comparison Seminar</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Source system vs. derived art technical analysis</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$197 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Hiden Mokuroku Curriculum</td>
                  <td className="px-6 py-4">$247 – $397</td>
                  <td className="px-6 py-4">Full first-level transmission with aiki principles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Daito-Ryu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Aikido Practitioners</h3>
              <p className="text-sm text-slate-600">
                The enormous global Aikido community seeking access to the source system their art
                derived from. "Daito-ryu: the art Aikido came from" is one of the most compelling hooks
                in Japanese martial arts content marketing.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Aiki Research Community</h3>
              <p className="text-sm text-slate-600">
                A dedicated international community investigating aiki principles across multiple
                traditions. Sagawa and Horikawa's demonstrations have created a highly motivated
                global audience for qualified Daito-ryu instruction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Grappling Cross-Trainers</h3>
              <p className="text-sm text-slate-600">
                Judoka, BJJ practitioners, and submission grapplers investigating joint-locking and
                off-balancing principles. Daito-ryu's extensive kansetsuwaza catalogue has direct
                application across grappling disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Daito-Ryu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the Aikido origin story", "\"The art Morihei Ueshiba mastered before creating Aikido\" is your most powerful hook into the largest Japanese martial arts audience. Every Aikido practitioner is curious about what Daito-ryu is and how it differs."],
              ["Demonstrate aiki principles clearly", "Film clear demonstrations of aiki principles — the off-balancing, the joint-structure manipulation, the kokyu applications — and contrast them with both conventional Judo and Aikido applications. Comparison content performs strongly."],
              ["Publish and target the Aikido network", "Upload to Creatdrop and reach Aikido organisations worldwide through federation newsletters, instructor networks, and national associations. The Aikido community is large, globally distributed, and online-active."],
              ["Position the aiki principle broadly", "The aiki research community transcends Japanese martial arts boundaries. Market the principles across internal arts disciplines — Chinese, Japanese, and Korean practitioners all have adjacent interest in aiki methodology."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Daito-Ryu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Aikido YouTube and Podcast Circuit</h3>
              <p className="text-sm text-slate-600">
                The global Aikido community maintains an active online presence with substantial
                YouTube audiences and podcast listenership. Daito-ryu content consistently attracts
                strong engagement from this community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Aiki Research Blogs and Forums</h3>
              <p className="text-sm text-slate-600">
                Dedicated aiki research communities — including Aikido Journal, AikiWeb, and various
                aiki-specific Facebook groups — are populated with highly motivated researchers and
                practitioners with strong purchase intent.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Japanese Martial Arts Podcast Circuit</h3>
              <p className="text-sm text-slate-600">
                Podcasts covering traditional Japanese budō and martial arts history have dedicated
                audiences who value lineage authenticity and technical depth — ideal prospects for
                a premium Daito-ryu programme.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Grappling Community Crossover</h3>
              <p className="text-sm text-slate-600">
                BJJ and Judo communities increasingly investigate joint-locking and off-balancing
                principles from Japanese traditions. Daito-ryu's kansetsuwaza depth attracts
                practitioners from these large communities.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Daito-Ryu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Precision Joint Manipulation</h3>
              <p className="text-sm text-slate-600">
                Daito-ryu's kansetsuwaza requires precise anatomical targeting with correct angle,
                pressure, and timing for each joint structure. Developing functional joint-lock
                application requires sustained partner drilling across hundreds of repetitions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Aiki Off-Balancing Development</h3>
              <p className="text-sm text-slate-600">
                The aiki principle — manipulating the opponent's balance structure before applying
                technique — is a sensitivity skill that develops only through partner practice and
                is difficult to conceptualise without physical experience of the phenomenon.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Ukemi Falling Practice</h3>
              <p className="text-sm text-slate-600">
                Safe practice of Daito-ryu throwing and projection techniques requires well-developed
                ukemi falling skills from both partners. Ukemi development is a prerequisite physical
                conditioning requirement before advanced technique work begins.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Daito-Ryu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your aiki-jujutsu lineage knowledge into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Aikido Fitness Programs Online", "/blog/sell-masters-aikido-fitness-programs-online"],
              ["Sell Masters Jujutsu Fitness Programs Online", "/blog/sell-masters-jujutsu-fitness-programs-online"],
              ["Sell Masters Judo Fitness Programs Online", "/blog/sell-masters-judo-fitness-programs-online"],
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
