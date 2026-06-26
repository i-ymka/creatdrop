import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Mardani Khel Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Mardani Khel expertise. Creatdrop gives instructors the tools to sell Maratha sword and shield programmes, Pata gauntlet sword series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Mardani Khel Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Mardani Khel expertise. Creatdrop gives instructors the tools to sell Maratha sword and shield programmes, Pata gauntlet sword series, and school licences to a global audience.",
  },
}

export default function MardaniKhelPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Mardani Khel Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Mardani Khel Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Mardani Khel is the traditional weapons-based martial art of Maharashtra, rooted
            in the military culture of the Maratha Empire and closely associated with the
            warrior legacy of Chhatrapati Shivaji Maharaj, who systematised indigenous
            Maratha fighting methods for his guerrilla campaigns against Mughal forces in
            the seventeenth century. The art centres on the talwar (curved sword) and dhal
            (shield) as its primary weapon pairing, with a curriculum that extends to the
            lezim (flexible sword), pata (gauntlet sword — a uniquely Indian weapon in
            which the blade is mounted on an iron gauntlet), and the vitya (a weighted
            flexible weapon). This multi-weapon curriculum reflects the full range of
            Maratha military technology and gives qualified instructors a genuinely diverse
            weapons content library with strong scarcity value.
          </p>
          <p>
            The pata gauntlet sword is Mardani Khel's most distinctive weapon and its
            most marketable content asset. The pata encloses the hand in an armoured
            gauntlet from which a straight double-edged blade extends, requiring a
            fundamentally different grip and power generation methodology from conventional
            sword fighting — the blade is an extension of the forearm rather than a
            hand-held implement. Techniques using the pata involve rotating forearm strikes,
            thrusting patterns, and defensive forearm checks that have no direct parallel
            in any other weapon tradition. This uniqueness creates immediate visual
            distinctiveness in demonstration content and genuine technical novelty for
            the weapons arts community.
          </p>
          <p>
            For online instructors, Mardani Khel combines the powerful Maratha warrior
            cultural narrative, a technically distinctive multi-weapon curriculum anchored
            by the unique pata gauntlet sword, and access to the Maharashtrian diaspora
            and the broader Indian martial arts community. Creatdrop lets qualified Mardani
            Khel masters reach these audiences globally with premium programmes that bring
            one of India's most historically significant weapons traditions to practitioners
            who would otherwise have no access to it.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Mardani Khel Programme Pricing</h2>
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
                  <td className="px-6 py-4">Talwar and Dhal Foundation Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Core sword and shield techniques with footwork</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Pata Gauntlet Sword Masterclass</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">India's unique armoured gauntlet blade — rarest weapons content</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Lezim Flexible Sword Series</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Flexible blade dynamics and cutting methodology</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Traditional Maratha Combat Forms</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Classical kata with historical Maratha military context</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for Indian martial arts programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Mardani Khel Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full talwar, pata, lezim, and vitya system</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Mardani Khel Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Maharashtrian Diaspora</h3>
              <p className="text-sm text-slate-600">
                Maharashtrian communities in the United States, United Kingdom, and
                Australia with deep cultural connection to the Maratha legacy of
                Chhatrapati Shivaji Maharaj. Mardani Khel is inseparable from
                Maharashtrian identity and the Maratha warrior tradition that shaped
                the subcontinent's history.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Martial Arts Community</h3>
              <p className="text-sm text-slate-600">
                The growing Indian martial arts community investigating indigenous
                regional weapons traditions alongside nationally promoted arts.
                Practitioners of Kalaripayattu, Gatka, and Silambam are the natural
                crossover discovery audience for Mardani Khel as the Maratha Empire's
                premier weapons tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Weapons Arts Enthusiasts</h3>
              <p className="text-sm text-slate-600">
                International practitioners of weapons arts — HEMA, Kenjutsu, Arnis,
                and Asian weapons systems — seeking genuinely novel technical content.
                The pata gauntlet sword is found in no other tradition and represents
                a unique technical discovery for the international weapons arts community.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Mardani Khel Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the Shivaji and Maratha warrior narrative", "Mardani Khel is the martial art of Chhatrapati Shivaji Maharaj — the warrior king whose guerrilla campaigns halted the Mughal Empire and built the Maratha confederacy that dominated India for over a century. This is one of the most powerful cultural narratives in Indian history and creates immediate purchase motivation for the Maharashtrian diaspora and Indian history community."],
              ["Position the pata gauntlet sword as the flagship content", "The pata is the only weapon in the world where the blade is mounted on an armoured gauntlet — no other martial tradition has anything comparable. \"The only martial art using India's unique armoured gauntlet sword\" is a headline that immediately distinguishes Mardani Khel from every other weapons art and drives discovery from the international weapons community."],
              ["Publish and target Indian martial arts and Maharashtrian cultural networks", "Upload to Creatdrop and reach Maharashtrian cultural associations, the Indian martial arts research community, and platforms covering the Maratha legacy. The Khelo India programme's growing institutional support for indigenous weapons traditions provides additional national discovery channels."],
              ["Connect to the HEMA and comparative weapons arts community", "The Historical European Martial Arts community and the international weapons arts research audience actively seek content on non-European weapons traditions. Mardani Khel's unique weapon inventory — particularly the pata and lezim — provides compelling comparative material for this intellectually engaged global community."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Mardani Khel Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Maharashtrian Cultural Media and Associations</h3>
              <p className="text-sm text-slate-600">
                Maharashtrian cultural organisations and diaspora media in the US, UK,
                and Australia — particularly those celebrating the Maratha legacy during
                Shivaji Jayanti — provide direct access to the community with the strongest
                cultural purchase motivation for Mardani Khel content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Martial Arts Platforms</h3>
              <p className="text-sm text-slate-600">
                YouTube channels and online communities covering South Asian martial arts —
                Kalaripayattu, Gatka, Silambam, Thang-Ta, and regional weapons traditions —
                are natural discovery channels for Mardani Khel as the premier weapons
                tradition of the Maratha Empire and Maharashtra.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">HEMA and International Weapons Community</h3>
              <p className="text-sm text-slate-600">
                The Historical European Martial Arts community and international weapons
                arts practitioners investigating non-European sword traditions are receptive
                to Mardani Khel content. The pata gauntlet sword's uniqueness makes it
                compelling comparative material for this technically sophisticated audience.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian History and Heritage Platforms</h3>
              <p className="text-sm text-slate-600">
                Platforms covering Maratha history, the Shivaji legacy, and Indian
                military heritage reach an educated audience whose interest in the
                Maratha Empire creates strong purchase motivation for the martial
                art that defined Maratha military culture. History-first content
                performs particularly well for this audience.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Mardani Khel Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Sword and Shield Coordination</h3>
              <p className="text-sm text-slate-600">
                Simultaneous management of talwar and dhal requires developing distinct
                motor patterns for each hand across striking, cutting, and defensive
                functions. The coordination of offensive sword movement with active
                defensive shield positioning demands sustained bilateral drilling that
                takes considerable time to develop to practical competence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Pata Forearm Mechanics</h3>
              <p className="text-sm text-slate-600">
                The pata gauntlet sword requires developing power generation through
                forearm rotation and shoulder drive rather than wrist and grip control.
                The physical conditioning for effective pata use — forearm strength,
                rotational power, and the proprioceptive sense of blade angle without
                grip feedback — is entirely distinct from conventional sword training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Footwork and Distance Control</h3>
              <p className="text-sm text-slate-600">
                Mardani Khel footwork integrates rapid directional changes designed for
                the uneven terrain of Maratha guerrilla warfare. The agility, explosive
                lateral movement, and terrain-adaptive footwork patterns that characterise
                the tradition require specific lower-body conditioning that develops
                through progressive solo and partner drilling.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Mardani Khel Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Maratha weapons expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Kalaripayattu Fitness Programs Online", "/blog/sell-masters-kalaripayattu-fitness-programs-online"],
              ["Sell Masters Gatka Fitness Programs Online", "/blog/sell-masters-gatka-fitness-programs-online"],
              ["Sell Masters Thang-Ta Fitness Programs Online", "/blog/sell-masters-thang-ta-fitness-programs-online"],
              ["Sell Masters Lathi Fitness Programs Online", "/blog/sell-masters-lathi-fitness-programs-online"],
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
