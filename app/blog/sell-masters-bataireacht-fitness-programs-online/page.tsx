import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Bataireacht Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Bataireacht expertise. Creatdrop gives instructors the tools to sell Irish stick fighting programmes, shillelagh combat training, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Bataireacht Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Bataireacht expertise. Creatdrop gives instructors the tools to sell Irish stick fighting programmes, shillelagh combat training, and school licences to a global audience.",
  },
}

export default function BataireachtPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Bataireacht Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Bataireacht Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Bataireacht — Irish stick fighting — is the traditional combat art of the shillelagh,
            the distinctive knotted Irish blackthorn walking stick that became both a practical
            weapon and a cultural symbol of Irish identity. The art nearly disappeared during
            the nineteenth and twentieth centuries as the conditions that sustained it — rural
            Irish faction fights, the diaspora contexts in which Irish communities defended
            themselves, and the transmission within specific families and regions — gave way to
            urbanisation and cultural assimilation. The twentieth-century revival, led by researchers
            like Glen Doyle who reconstructed the system from historical accounts, police records,
            and the few surviving practitioners, produced a documented curriculum of guards,
            strikes, and defensive patterns specific to the shillelagh's distinctive weight
            distribution and the Irish fighting context.
          </p>
          <p>
            The Irish diaspora — over seventy million people worldwide claim Irish descent,
            predominantly in the United States, Australia, Canada, and the United Kingdom —
            represents the largest ethnic diaspora relative to source population of any nation.
            That diaspora carries extraordinary cultural investment in Irish heritage,
            demonstrated by the global scale of St. Patrick's Day celebrations, Irish language
            revival movements, and the sustained commercial success of Irish cultural products
            worldwide. Bataireacht sits at the intersection of Irish martial heritage and the
            broader Celtic cultural identity that resonates across this enormous community.
          </p>
          <p>
            For online instructors, Bataireacht combines the Irish diaspora cultural marketing
            hook with genuine martial arts technical content and the historical reconstruction
            narrative that the HEMA community finds compelling. Creatdrop lets qualified
            Bataireacht instructors reach the Irish diaspora, the Celtic cultural community,
            and the HEMA practitioners investigating Celtic weapon traditions worldwide.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Bataireacht Programme Pricing</h2>
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
                  <td className="px-6 py-4">Shillelagh Foundation Programme</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Grip, guards, and basic striking mechanics</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Core Striking and Parrying System</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Attack and defence patterns with footwork</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Historical Reconstruction Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Sources, methodology, and historical context</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Irish Faction Fighting Cultural Context</td>
                  <td className="px-6 py-4">$47 – $87</td>
                  <td className="px-6 py-4">History, cultural significance, and diaspora tradition</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$147 / year</td>
                  <td className="px-6 py-4">White-label for Celtic heritage and HEMA programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Bataireacht Curriculum</td>
                  <td className="px-6 py-4">$167 – $247</td>
                  <td className="px-6 py-4">Full technique with historical context and applications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Bataireacht Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Irish Diaspora</h3>
              <p className="text-sm text-slate-600">
                The seventy-million-strong global Irish diaspora with cultural investment in
                Irish heritage. Bataireacht — the martial art of the shillelagh — has
                authentic connection to Irish cultural identity that resonates powerfully
                with diaspora communities from Boston to Melbourne.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">HEMA and Historical Martial Arts Community</h3>
              <p className="text-sm text-slate-600">
                The Historical European Martial Arts community investigating Celtic and
                British weapon traditions. Bataireacht's historical reconstruction
                methodology and documented sources make it credible within the academically
                oriented HEMA community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Celtic Cultural Heritage Enthusiasts</h3>
              <p className="text-sm text-slate-600">
                Irish language learners, Celtic music practitioners, and broader Celtic
                cultural heritage enthusiasts who seek embodied connection to Irish
                tradition beyond language and music. The martial arts dimension of Celtic
                culture is underexplored and commercially underserved.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Bataireacht Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the shillelagh cultural identity hook", "The shillelagh is one of the most globally recognised symbols of Irish culture. Every person who has attended a St. Patrick's Day parade has seen one carried as a prop. Position Bataireacht as the martial art behind that cultural symbol — \"What the shillelagh was actually for.\""],
              ["Film the historical reconstruction narrative", "The story of how Bataireacht was reconstructed from historical sources — police records, surviving accounts, the few remaining practitioners — is a compelling intellectual story that resonates with the HEMA community and the wider historical martial arts audience."],
              ["Publish and target Irish cultural organisations", "Upload to Creatdrop and reach Irish cultural societies (Gaelic League, Irish dance organisations, GAA clubs), Celtic cultural media, and Irish diaspora community platforms globally. The cultural heritage angle drives strong organic sharing within Irish communities."],
              ["Connect to the HEMA community explicitly", "The HEMA community is an active online audience that purchases instructional content for European weapon traditions. Position Bataireacht as the Irish contribution to the Celtic martial arts HEMA canon — alongside Cornish wrestling, backhold, and other Celtic weapon traditions."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Bataireacht Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Irish Cultural Organisations Worldwide</h3>
              <p className="text-sm text-slate-600">
                Gaelic League chapters, GAA clubs, Irish cultural societies, and diaspora
                community media across North America, Australia, and the UK provide direct
                access to the community with the strongest purchase motivation for Irish
                martial heritage content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">HEMA Community Platforms</h3>
              <p className="text-sm text-slate-600">
                HEMA Alliance events, HEMA YouTube channels, and historical martial arts
                forums are receptive to Bataireacht content as an underrepresented Celtic
                weapon tradition within the European martial arts canon. The historical
                reconstruction methodology gives it academic credibility.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Celtic Music and Culture Festivals</h3>
              <p className="text-sm text-slate-600">
                Celtic Connections, Milwaukee Irish Fest, and similar cultural festivals
                draw enormous diaspora audiences with cultural heritage purchase motivation.
                Live demonstration at these events drives programme awareness to a highly
                motivated audience.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Irish History and Heritage Podcasts</h3>
              <p className="text-sm text-slate-600">
                Irish history podcasts and heritage media reach the intellectually engaged
                diaspora audience with interest in Irish material culture and history.
                The faction fighting history and shillelagh's social context make for
                compelling podcast content.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Bataireacht Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Shillelagh Weight Distribution Mechanics</h3>
              <p className="text-sm text-slate-600">
                The shillelagh's distinctive knotted head creates an end-weighted implement
                with different handling mechanics than a uniform staff or cane. Developing
                control of the shillelagh's weight distribution — particularly in the circular
                guard movements and strike deflections — requires specific wrist and forearm
                conditioning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Guard and Evasion Footwork</h3>
              <p className="text-sm text-slate-600">
                Bataireacht footwork emphasises the ability to close, disengage, and circle
                around a stick-armed opponent in a way that exploits the weapon's reach
                advantage. Developing the footwork patterns for stick-range engagement
                requires sustained partner drilling with full-length weapons.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Impact Resistance and Contact Training</h3>
              <p className="text-sm text-slate-600">
                Progressing to realistic Bataireacht partner training requires developing
                forearm and body conditioning for stick impacts through padded and then
                graduated contact work. The historical context included unprotected
                stick fighting — modern training requires systematic conditioning protocols.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Bataireacht Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Irish stick fighting expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Arnis Fitness Programs Online", "/blog/sell-masters-arnis-fitness-programs-online"],
              ["Sell Masters Escrima Fitness Programs Online", "/blog/sell-masters-escrima-fitness-programs-online"],
              ["Sell Masters Kenjutsu Fitness Programs Online", "/blog/sell-masters-kenjutsu-fitness-programs-online"],
              ["Sell Masters Gouren Fitness Programs Online", "/blog/sell-masters-gouren-fitness-programs-online"],
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
