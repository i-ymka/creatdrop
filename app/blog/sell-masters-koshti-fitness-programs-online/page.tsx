import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Koshti Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Koshti expertise. Creatdrop gives instructors the tools to sell Iranian belt wrestling programmes, oil wrestling techniques, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Koshti Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Koshti expertise. Creatdrop gives instructors the tools to sell Iranian belt wrestling programmes, oil wrestling techniques, and school licences to a global audience.",
  },
}

export default function KoshtiPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Koshti Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Koshti Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Koshti is the traditional Iranian wrestling tradition, one of the oldest continuously
            practised wrestling systems in the world. The term encompasses several related
            disciplines: Koshti Pahlavani (the free-style wrestling component of the zurkhaneh
            tradition), Koshti Ghoshtangiri (oil wrestling practised with the body lubricated
            with oil, similar to Turkish yağlı güreş), and the modern sport of Koshti which
            has produced Iranian Olympic wrestlers of extraordinary calibre. Iran has been
            one of the most consistently dominant nations in both freestyle and Greco-Roman
            wrestling at the Olympics and World Championships for decades, drawing on a
            national wrestling culture with ancient roots in the pahlevani tradition.
          </p>
          <p>
            Iranian freestyle wrestling has a distinctive technical character — aggressive forward
            pressure, leg attacks from unconventional positions, and the ability to score from
            seemingly disadvantageous situations — that reflects the influence of traditional
            koshti methodology on the Olympic sport. Senior Iranian wrestlers who understand
            both the traditional koshti foundation and the technical innovations of the Iranian
            Olympic programme carry knowledge that the international wrestling community actively
            seeks. Iran's Greco-Roman wrestlers have similarly developed distinctive regional
            techniques — particularly upper-body throwing and tie-up mechanics — that offer
            valuable supplemental content for competitive wrestlers globally.
          </p>
          <p>
            For online instructors, Koshti offers two distinct markets: the Iranian diaspora
            community with cultural interest in their national wrestling heritage, and the
            international wrestling community seeking access to Iranian technical innovation
            and the traditional foundations of one of wrestling's most successful modern nations.
            Creatdrop lets qualified Koshti practitioners reach both audiences with premium
            programmes positioned at the intersection of tradition and competitive excellence.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Koshti Programme Pricing</h2>
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
                  <td className="px-6 py-4">Iranian Wrestling Foundation Programme</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Stance, tie-ups, and Iranian wrestling fundamentals</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Iranian Leg Attack System</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Distinctive Iranian low single, drag-behind, and heel attacks</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Koshti Ghoshtangiri Oil Wrestling Programme</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Traditional lubricated wrestling technique methodology</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Iranian Olympic Freestyle Techniques</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">World championship-level technique analysis</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$197 / year</td>
                  <td className="px-6 py-4">White-label for wrestling and combat sports programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Koshti Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Traditional and competitive Iranian wrestling system</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Koshti Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Iranian and Persian Diaspora</h3>
              <p className="text-sm text-slate-600">
                Iranian communities worldwide with cultural pride in their nation's wrestling
                heritage and Olympic success. Koshti carries national significance — Iran's
                Olympic wrestling dominance gives the tradition credibility and visibility
                well beyond the diaspora community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Competitive Freestyle Wrestlers</h3>
              <p className="text-sm text-slate-600">
                Olympic and college wrestlers seeking access to Iranian technical innovations —
                particularly the distinctive leg attack angles and defending postures that
                Iranian wrestlers have developed. Iran's sustained Olympic success makes
                their methodology highly valued in the competitive wrestling community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">MMA and Grappling Athletes</h3>
              <p className="text-sm text-slate-600">
                Mixed martial artists and submission grapplers seeking wrestling methodology
                developed by one of the world's most wrestling-rich nations. Iranian wrestling
                takedown mechanics have direct MMA application and growing influence in
                the combat sports community.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Koshti Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with Iran's Olympic wrestling legacy", "Iran is one of the most consistently dominant Olympic wrestling nations in history. That achievement is your most powerful credential with the international wrestling community. Lead with it: \"Wrestling methodology from the nation that has dominated Olympic freestyle wrestling for decades.\""],
              ["Demonstrate the distinctive Iranian leg attack system", "Iranian wrestlers are known for leg attacks from positions and angles that Western wrestling coaches rarely teach. Film detailed breakdowns of these Iranian-specific attacks — this is genuinely novel content for the American and European wrestling community."],
              ["Publish and target wrestling federation networks", "Upload to Creatdrop and reach wrestling coaches and athletes through national wrestling federation networks, collegiate wrestling programmes, and the international wrestling community active on platforms like FloWrestling and TrackWrestling."],
              ["Position the traditional-to-modern bridge", "The connection between ancient koshti tradition and Iran's modern Olympic success is a compelling narrative. Position your programme at that intersection — ancient wisdom refined through Olympic competition into the world's most effective wrestling system."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Koshti Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Wrestling Media Platforms</h3>
              <p className="text-sm text-slate-600">
                FloWrestling, TrackWrestling, and intermat reach the competitive wrestling
                community directly. Iranian wrestling technical content performs strongly in
                this market — particularly leg attack breakdowns and tie-up mechanics from
                Iran's championship-winning programmes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Iranian Diaspora Community Media</h3>
              <p className="text-sm text-slate-600">
                Iranian cultural media, diaspora publications, and community platforms
                in North America, Europe, and the Gulf States provide access to the
                community with strong cultural purchase motivation for Iranian wrestling
                heritage content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Collegiate Wrestling Networks</h3>
              <p className="text-sm text-slate-600">
                American collegiate wrestling coaches and programmes seeking technical edge
                represent a premium buyer segment. The reputation of Iranian freestyle
                wrestling at the Olympic level gives Koshti content credibility in this
                demanding, results-focused community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">MMA and Grappling Coaching Community</h3>
              <p className="text-sm text-slate-600">
                MMA coaches and submission grappling gyms integrating wrestling into their
                curriculum seek the best available takedown methodology. Iranian wrestling's
                Olympic credentials give it immediate credibility in the combat sports
                coaching market.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Koshti Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Aggressive Forward Pressure Development</h3>
              <p className="text-sm text-slate-600">
                Iranian freestyle wrestling is characterised by relentless forward pressure —
                developing the leg drive, core tension, and mental commitment to maintain
                pressure against high-level resistance is the primary physical conditioning
                challenge of the Iranian wrestling system.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Extreme Position Leg Attack Mechanics</h3>
              <p className="text-sm text-slate-600">
                Iranian wrestlers attack legs from positions of apparent disadvantage — from
                bottom, from far away, and from angles that require unusual hip and spine
                flexibility. Developing the mobility and structural strength for these
                attacks requires targeted conditioning beyond standard wrestling preparation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Oil Wrestling Skin and Balance Adaptation</h3>
              <p className="text-sm text-slate-600">
                Traditional oil wrestling (Koshti Ghoshtangiri) requires developing grip
                and control technique that functions when the opponent's body is lubricated.
                The physical and technical adaptations required for effective oil wrestling
                are distinct from conventional wrestling conditioning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Koshti Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Iranian wrestling expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Pahlevani and Varzesh-e Bastani Fitness Programs Online", "/blog/sell-masters-pahlevani-varzesh-bastani-fitness-programs-online"],
              ["Sell Masters Freestyle Wrestling Fitness Programs Online", "/blog/sell-masters-freestyle-wrestling-fitness-programs-online"],
              ["Sell Masters Greco-Roman Wrestling Fitness Programs Online", "/blog/sell-masters-greco-roman-wrestling-fitness-programs-online"],
              ["Sell Masters Pehlwani Fitness Programs Online", "/blog/sell-masters-pehlwani-fitness-programs-online"],
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
