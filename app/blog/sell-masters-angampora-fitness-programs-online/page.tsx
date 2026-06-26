import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Angampora Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Angampora expertise. Creatdrop gives instructors the tools to sell Sri Lankan traditional combat programmes, pressure point striking series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Angampora Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Angampora expertise. Creatdrop gives instructors the tools to sell Sri Lankan traditional combat programmes, pressure point striking series, and school licences to a global audience.",
  },
}

export default function AngamporaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Angampora Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Angampora Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Angampora is the traditional martial art of Sri Lanka, one of the oldest documented
            combat systems in South Asia, with references in the Mahavamsa chronicle extending
            back over two thousand years. The art encompasses anga (unarmed combat using strikes,
            locks, and grappling), illangam (weapons combat using sword, staff, and other
            traditional weapons), and a distinctive knowledge of marma — pressure points and
            vital targeting — that connects Angampora to the broader South and Southeast Asian
            tradition of anatomical combat knowledge. Like Thang-Ta, Angampora was suppressed
            by British colonial authorities who banned public practice in 1817 following its
            role in the Uva Wellassa rebellion, driving the tradition underground and into
            transmission within specific families for over a century.
          </p>
          <p>
            The revival of Angampora in the post-independence period has been supported by Sri
            Lankan cultural heritage organisations and the government's promotion of indigenous
            traditions. The art retains a ceremonial dimension — certain techniques and knowledge
            are transmitted within traditional padippuwa training halls with ritual elements —
            alongside its practical combat application. The weapons component includes the vel
            (javelin), pattawa (sword), and staff, creating a comprehensive multi-weapon
            curriculum with distinctive South Asian characteristics. The pressure point (marma)
            component has attracted particular interest from researchers comparing it with
            Chinese dim mak and Indian marma vidya traditions.
          </p>
          <p>
            For online instructors, Angampora combines the colonial suppression and revival
            narrative (one of the most compelling marketing stories in martial arts), a genuinely
            distinctive technical curriculum, and access to the Sri Lankan diaspora and the
            broader South Asian martial arts community. Creatdrop lets qualified Angampora
            instructors reach these audiences globally with premium programmes that bring this
            rare tradition to practitioners who would otherwise have no access to it.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Angampora Programme Pricing</h2>
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
                  <td className="px-6 py-4">Anga Foundation Programme</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Core unarmed strikes, locks, and grappling techniques</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Illangam Weapons Series</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Sword, staff, and traditional Sri Lankan weapons</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Marma Pressure Point Programme</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Sri Lankan vital point targeting and applications</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Traditional Combat Forms</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Classical kata with historical context and application</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for South Asian martial arts programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Angampora Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full unarmed, weapons, and marma system</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Angampora Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Sri Lankan Diaspora</h3>
              <p className="text-sm text-slate-600">
                Sri Lankan communities in the United Kingdom, Australia, Canada, and the
                Middle East with cultural ties to Sri Lankan heritage. Angampora carries
                deep national cultural significance as the indigenous martial tradition
                that resisted colonial suppression.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">South Asian Martial Arts Community</h3>
              <p className="text-sm text-slate-600">
                Practitioners of Kalaripayattu, Silambam, and other South Asian martial
                traditions investigating the breadth of the subcontinent's martial heritage.
                Angampora's pressure point (marma) component specifically attracts researchers
                comparing South Asian vital point traditions.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Rare Martial Arts Enthusiasts</h3>
              <p className="text-sm text-slate-600">
                The international community of practitioners seeking rare and underrepresented
                martial traditions. Angampora's two-thousand-year documented history, colonial
                suppression narrative, and near-complete inaccessibility outside Sri Lanka
                create genuine scarcity value for this highly motivated buyer segment.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Angampora Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the colonial suppression story", "Angampora was banned by the British in 1817 for its role in armed resistance and survived in secret transmission within specific families for over a century. \"The martial art that was banned for resisting the British Empire\" is one of the most powerful opening lines in any martial arts marketing context."],
              ["Position the marma knowledge as premium content", "The pressure point component of Angampora — Sri Lanka's equivalent of Chinese dim mak and Indian marma vidya — is the tradition's highest-value unique content. Frame this as premium knowledge that connects Sri Lankan tradition to the broader Asian anatomical combat science."],
              ["Publish and target Sri Lankan cultural networks", "Upload to Creatdrop and reach Sri Lankan cultural associations, diaspora community media, and the national Angampora revival organisations. Sri Lanka's growing cultural tourism and heritage promotion create institutional support channels."],
              ["Connect to the South Asian martial arts research community", "The South Asian martial arts research community — covering Kalaripayattu, Silambam, and the broader tradition — is an engaged online audience that actively seeks content on underrepresented arts. Angampora's documented antiquity and marma tradition make it highly relevant to this community."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Angampora Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Sri Lankan Diaspora Media</h3>
              <p className="text-sm text-slate-600">
                Sri Lankan community publications and diaspora media in the United Kingdom,
                Australia, and Canada provide direct access to the community with the
                strongest cultural purchase motivation for Angampora content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Subcontinent Martial Arts Platforms</h3>
              <p className="text-sm text-slate-600">
                YouTube channels and online communities covering South Asian martial arts —
                Kalaripayattu, Gatka, Silambam, and regional traditions — are natural
                discovery channels for Angampora as a closely related Sri Lankan tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Pressure Point and Dim Mak Community</h3>
              <p className="text-sm text-slate-600">
                The international community investigating anatomical combat knowledge —
                Chinese dim mak, Japanese atemi, Indian marma vidya — is receptive to
                Angampora's marma component as a Sri Lankan contribution to this
                comparative tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Rare Martial Arts Research Platforms</h3>
              <p className="text-sm text-slate-600">
                Channels dedicated to rare and endangered martial traditions — covering
                arts from Oceania, Central Asia, and other underrepresented regions —
                provide a global audience of highly motivated collectors of rare martial
                arts knowledge with premium purchase intent.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Angampora Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Grappling and Striking Integration</h3>
              <p className="text-sm text-slate-600">
                Angampora's anga component integrates striking, joint locking, and grappling
                within a unified combat system. Developing the physical coordination to
                transition between striking and grappling ranges — and to apply locks while
                continuing to strike — requires sustained partner drilling across both
                physical disciplines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Precise Anatomical Targeting</h3>
              <p className="text-sm text-slate-600">
                Marma pressure point application requires precise anatomical targeting
                developed through specific drilling methodologies. The combination of
                accuracy and force delivery required for effective vital point work demands
                conditioning distinct from general combat sports training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Traditional Training Posture Requirements</h3>
              <p className="text-sm text-slate-600">
                Angampora training includes specific foundational postures and stances
                developed through the padippuwa training methodology. The flexibility,
                lower-body strength, and postural requirements of these foundational
                positions are a prerequisite physical development for advanced technique work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Angampora Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Sri Lankan martial arts expertise into a global online programme —
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
              ["Sell Masters Silambam Fitness Programs Online", "/blog/sell-masters-silambam-fitness-programs-online"],
              ["Sell Masters Thang-Ta Fitness Programs Online", "/blog/sell-masters-thang-ta-fitness-programs-online"],
              ["Sell Masters Gatka Fitness Programs Online", "/blog/sell-masters-gatka-fitness-programs-online"],
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
