import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Lathi Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Lathi expertise. Creatdrop gives instructors the tools to sell Indian staff fighting programmes, Bengali martial arts series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Lathi Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Lathi expertise. Creatdrop gives instructors the tools to sell Indian staff fighting programmes, Bengali martial arts series, and school licences to a global audience.",
  },
}

export default function LathiPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Lathi Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Lathi Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Lathi — the bamboo staff of the Indian subcontinent — is one of the oldest and
            most widely practised weapons traditions in South Asia, with documented use
            spanning thousands of years across Bengal, Punjab, Rajasthan, Maharashtra, and
            the broader subcontinent. The lathi is typically a six-foot bamboo staff,
            sometimes iron-capped, and the fighting system built around it encompasses
            strikes, deflections, disarms, and close-range transitions that reflect both
            its battlefield origins and its sustained use as a civilian self-defence and
            law enforcement tool. The tradition has two distinct but overlapping streams:
            the regional martial arts traditions (particularly Lathi Khela in Bengal, the
            Rajasthani and Punjabi staff traditions associated with Gatka and Kushti
            culture) and the institutionalised police lathi training that spread across
            the subcontinent under both Mughal and British administration.
          </p>
          <p>
            Lathi Khela — the Bengali staff-fighting tradition — is the best-documented
            regional form, with a rich cultural presence in West Bengal and Bangladesh.
            It has been performed at festivals, Durga Puja celebrations, and village
            gatherings as both martial art and cultural expression for centuries, and
            retains a practitioner community in the Bengali diaspora that carries the
            tradition into the global South Asian community. The Punjabi lathi tradition
            intersects significantly with Gatka — the Sikh martial art — and shares
            a practitioner base and weapon vocabulary with that tradition. The southern
            Indian staff traditions — particularly the long staff (muzha) in Kalaripayattu
            and the Silambam stick of Tamil Nadu — represent related but distinct
            anatomical weapons traditions with crossover student populations.
          </p>
          <p>
            For online instructors, Lathi offers the combination of a genuinely ancient
            and widely distributed Indian weapon tradition, a practitioner base spanning
            multiple South Asian regional communities, and a crossover audience in the
            global staff-fighting, HEMA, and South Asian martial arts research communities.
            Creatdrop lets qualified Lathi masters bring this tradition to the Bengali
            diaspora, the Indian martial arts community, and the international weapons
            arts audience that has never had access to qualified instruction in this art.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Lathi Programme Pricing</h2>
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
                  <td className="px-6 py-4">Lathi Foundation Programme</td>
                  <td className="px-6 py-4">$57 – $97</td>
                  <td className="px-6 py-4">Basic grip, stance, striking, and deflection patterns</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Lathi Khela Bengali Tradition Series</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Regional Bengali staff-fighting forms and culture</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Advanced Combat Application Programme</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Disarms, close-range transitions, and sparring methods</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Traditional Lathi Forms</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Classical solo and paired kata with application</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$147 / year</td>
                  <td className="px-6 py-4">White-label for South Asian martial arts programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Lathi Curriculum</td>
                  <td className="px-6 py-4">$167 – $247</td>
                  <td className="px-6 py-4">Full foundation, forms, combat, and cultural context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Lathi Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Bengali Diaspora</h3>
              <p className="text-sm text-slate-600">
                Bengali communities in the United Kingdom, the United States, Canada,
                and Australia with cultural ties to Lathi Khela as a defining element
                of Bengali martial and festival culture. Lathi performance at Durga Puja
                and village celebrations is a deeply embedded cultural memory for this
                community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Martial Arts Community</h3>
              <p className="text-sm text-slate-600">
                The growing Indian martial arts community investigating indigenous regional
                traditions alongside nationally promoted arts. Practitioners of Gatka,
                Kalaripayattu, and Silambam represent the natural crossover discovery
                audience for Lathi as the subcontinent's most widely distributed staff
                tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Staff Arts and HEMA Community</h3>
              <p className="text-sm text-slate-600">
                International practitioners of staff arts — bo-jutsu, quarterstaff,
                and European longsword communities investigating non-European weapons
                systems — represent a technically engaged discovery audience for Lathi
                as a sophisticated South Asian staff tradition with a distinct technical
                vocabulary.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Lathi Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the Lathi Khela cultural narrative", "Lathi Khela is one of the oldest continuously practised martial traditions in Bengal — performed at Durga Puja, village fairs, and cultural festivals for centuries. \"The staff art of Bengal, practised for over a thousand years at the heart of South Asian festival culture\" frames Lathi as cultural heritage rather than simply a weapon system, and opens the diaspora market."],
              ["Position the police and battlefield lineage as premium context", "The lathi's role in both Mughal imperial administration and British colonial policing — and its ongoing use in Indian law enforcement — is a distinctive historical positioning that no other South Asian weapon shares. This dual civilian-institutional history makes Lathi content compelling for the history-of-martial-arts community as well as the practitioner community."],
              ["Publish and target Bengali cultural and Indian martial arts networks", "Upload to Creatdrop and reach Bengali cultural associations in the UK, US, and Australia; the Durga Puja community media; and Indian martial arts platforms covering Gatka, Kalaripayattu, and Silambam. The Khelo India programme's growing institutional support for indigenous martial traditions provides additional discovery channels."],
              ["Connect to the global staff arts community", "The HEMA and bo-jutsu communities investigating non-European weapons systems are an engaged international audience that actively seeks content on underrepresented staff traditions. Comparative content positioning Lathi alongside Japanese bo-jutsu and European quarterstaff performs strongly in this intellectually engaged community."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Lathi Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Bengali Cultural Media and Diaspora Platforms</h3>
              <p className="text-sm text-slate-600">
                Bengali community publications and cultural associations in the UK, US,
                Canada, and Australia — particularly those organising Durga Puja events —
                provide direct access to the community with the strongest cultural purchase
                motivation for Lathi content. Lathi Khela demonstration is a culturally
                embedded element of Bengali festival practice.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Martial Arts Platforms</h3>
              <p className="text-sm text-slate-600">
                YouTube channels and online communities covering South Asian martial arts —
                Gatka, Kalaripayattu, Silambam, and Kushti — are natural discovery channels
                for Lathi as the subcontinent's most widely distributed staff tradition.
                The Khelo India programme's national reach provides institutional support
                for Indian martial heritage content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">HEMA and Staff Arts Community</h3>
              <p className="text-sm text-slate-600">
                The Historical European Martial Arts community and the international
                bo-jutsu and quarterstaff practitioner communities are receptive to Lathi
                content as a non-European staff tradition with comparable technical depth.
                Comparative staff-arts content performs strongly in this technically
                engaged international community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">South Asian Heritage Tourism Platforms</h3>
              <p className="text-sm text-slate-600">
                Platforms covering Indian cultural heritage, traditional arts, and South
                Asian cultural tourism reach an educated audience with interest in regional
                martial traditions. Lathi content performs well as cultural discovery
                alongside coverage of classical Indian arts, crafts, and festival traditions.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Lathi Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Staff Handling and Rotation Mechanics</h3>
              <p className="text-sm text-slate-600">
                Lathi fighting requires developing the ability to rotate and transfer
                the six-foot staff rapidly between striking, deflection, and close-range
                grip positions. The hand transitions and rotational mechanics specific
                to Lathi training demand significant forearm and wrist conditioning
                that differs from shorter weapon systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Deflection Sensitivity and Timing</h3>
              <p className="text-sm text-slate-600">
                Effective Lathi defence centres on reading incoming strikes and executing
                deflections with precise timing and contact angle — a sensitivity that
                develops through specific partner drilling with live staffs. The physical
                confidence required to deflect rather than block a full-force staff
                strike is a conditioning goal specific to this tradition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Footwork and Range Management</h3>
              <p className="text-sm text-slate-600">
                Managing the effective range of a six-foot staff against an armed opponent
                requires specific footwork patterns and distance awareness distinct from
                shorter weapon or empty-hand arts. The footwork conditioning in Lathi
                training develops rapid lateral and circular movement designed to control
                the staff's effective striking arc.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Lathi Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your South Asian staff expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Gatka Fitness Programs Online", "/blog/sell-masters-gatka-fitness-programs-online"],
              ["Sell Masters Kalaripayattu Fitness Programs Online", "/blog/sell-masters-kalaripayattu-fitness-programs-online"],
              ["Sell Masters Silambam Fitness Programs Online", "/blog/sell-masters-silambam-fitness-programs-online"],
              ["Sell Masters Varma Kalai Fitness Programs Online", "/blog/sell-masters-varma-kalai-fitness-programs-online"],
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
