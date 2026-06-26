import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Chidaoba Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Chidaoba expertise. Creatdrop gives instructors the tools to sell Georgian folk wrestling programmes, jacket-grip throwing systems, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Chidaoba Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Chidaoba expertise. Creatdrop gives instructors the tools to sell Georgian folk wrestling programmes, jacket-grip throwing systems, and school licences to a global audience.",
  },
}

export default function ChidaobaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Chidaoba Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Chidaoba Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Chidaoba is the traditional folk wrestling of Georgia — a small nation in the South
            Caucasus with an outsized sporting culture and a wrestling tradition of extraordinary
            depth and antiquity. Practiced at national festivals and religious celebrations, Chidaoba
            competitors wear a special wrestling jacket and grip their opponent's jacket exclusively
            throughout the bout. A throw that causes the opponent to touch the ground from the waist
            upward scores, and the scoring structure rewards aggressive throwing with clean back
            contact. The Georgian wrestling tradition has documented history reaching back over
            a thousand years and remains a living national practice supported by federation
            competition at every level.
          </p>
          <p>
            Georgia's wrestling culture is remarkable in that it has produced world-class athletes
            in multiple wrestling disciplines simultaneously. Georgian wrestlers have won Olympic
            medals in freestyle and Greco-Roman wrestling, world championships in judo (Georgia
            has produced multiple world-class judoka), and maintained the indigenous Chidaoba
            tradition alongside international disciplines. This multi-discipline wrestling culture
            creates practitioners with extraordinary technical sophistication who carry knowledge
            applicable across jacket wrestling, freestyle, and grappling sports. The Georgian
            diaspora in Russia, Europe, and the United States represents a community with strong
            cultural identity investment in Chidaoba.
          </p>
          <p>
            For online instructors, Chidaoba offers a technically sophisticated jacket-wrestling
            system with direct crossover to Judo and sambo, a compelling national cultural narrative,
            and an underserved global market. Creatdrop lets qualified Chidaoba instructors reach
            the Georgian diaspora and the international jacket-wrestling community with premium
            programmes positioned at the intersection of traditional and competitive wrestling.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Chidaoba Programme Pricing</h2>
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
                  <td className="px-6 py-4">Chidaoba Foundation Programme</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Jacket grip, stance, and core throwing entries</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Hip Throw and Leg Sweep Series</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Core Georgian throwing techniques with applications</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Chidaoba to Judo Bridge Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Technical crossover between Georgian and Olympic styles</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Georgian Wrestling Competition Preparation</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Strategy, conditioning, and bout management</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for wrestling and grappling programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Chidaoba Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full throwing, defence, and competition preparation system</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Chidaoba Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Georgian Diaspora</h3>
              <p className="text-sm text-slate-600">
                Georgian communities in Russia, Europe, and North America with strong cultural
                identity ties to Georgia's national wrestling tradition. Chidaoba carries deep
                national significance — access to qualified instruction from within the tradition
                resonates powerfully with diaspora buyers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Judo and Sambo Cross-Trainers</h3>
              <p className="text-sm text-slate-600">
                Jacket wrestling practitioners seeking Georgian throwing methodology as
                supplemental study. The technical overlap between Chidaoba, Judo, and sambo
                creates natural crossover demand from practitioners of all three systems.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Caucasian Wrestling Community</h3>
              <p className="text-sm text-slate-600">
                Practitioners of Armenian, Azerbaijani, and other Caucasian wrestling traditions
                with adjacent interest in Georgian techniques. The South Caucasus wrestling
                ecosystem shares technical traditions and creates cross-tradition discovery.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Chidaoba Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with Georgia's wrestling culture story", "Georgia produces world-class wrestlers across Olympic freestyle, Greco-Roman, and Judo simultaneously — while maintaining a living indigenous tradition. That athletic culture is your most powerful framing: Chidaoba is where Georgia's wrestling excellence begins."],
              ["Position the Judo and sambo bridge explicitly", "Many buyers will already practice Judo or sambo. Show explicitly how Chidaoba throwing mechanics complement and extend jacket-wrestling knowledge. Side-by-side comparisons of Chidaoba and Judo versions of the same throw create high-engagement educational content."],
              ["Publish and target Georgian and Caucasian networks", "Upload to Creatdrop and reach Georgian cultural associations, Caucasian wrestling communities, and the sambo and Judo communities that overlap with Georgian wrestling methodology globally."],
              ["Use the festival and national celebration context", "Chidaoba at Georgian festivals — the traditional wrestling fields, the dressed competitors, the communal celebration — creates visually distinctive content that stands out in the grappling instructional market and drives sharing within the diaspora community."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Chidaoba Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Georgian Community Media</h3>
              <p className="text-sm text-slate-600">
                Georgian diaspora publications, cultural associations, and community media
                in Russia, Germany, and North America provide direct access to the community
                with the strongest cultural purchase motivation for Chidaoba content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Judo Federation Networks</h3>
              <p className="text-sm text-slate-600">
                The global Judo community — given Georgia's world-class Judo heritage — is a
                natural distribution channel for Chidaoba content. Georgian Judo champions
                and the Georgian Judo Federation's network provide institutional reach into
                the international Judo community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Sambo Community Channels</h3>
              <p className="text-sm text-slate-600">
                Sambo practitioners — particularly the Russian and Eastern European community
                with natural geographic proximity to Georgian martial traditions — are a
                receptive audience for Chidaoba jacket-wrestling methodology.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Traditional Wrestling YouTube Community</h3>
              <p className="text-sm text-slate-600">
                Channels covering Caucasian, Central Asian, and traditional wrestling styles
                are a growing online community receptive to Chidaoba content as one of the
                technically richest and most culturally significant traditional wrestling
                traditions in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Chidaoba Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Jacket-Grip Throwing Power</h3>
              <p className="text-sm text-slate-600">
                Chidaoba's jacket grip enables powerful hip-loading throws requiring explosive
                hip extension coordinated with arm and back mechanics. Developing throwing
                power from the jacket grip demands specific upper-back, hip, and leg strength
                training distinct from free-grip wrestling conditioning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Back-Contact Scoring Awareness</h3>
              <p className="text-sm text-slate-600">
                The scoring emphasis on back contact — versus Judo"s ippon criteria or wrestling"s
                pin — creates specific throw-selection and completion habits. Developing throws
                that achieve the back-contact score reliably requires training attention to
                completion mechanics beyond the entry and hip-drive phase.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Explosive Entry Speed</h3>
              <p className="text-sm text-slate-600">
                Georgian wrestling emphasises explosive entry speed — the ability to close from
                gripping distance to throw position faster than the opponent can respond.
                Developing this entry speed under live competitive pressure is the primary
                athletic adaptation required for competitive Chidaoba performance.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Chidaoba Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Georgian wrestling expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Sambo Fitness Programs Online", "/blog/sell-masters-sambo-fitness-programs-online"],
              ["Sell Masters Judo Fitness Programs Online", "/blog/sell-masters-judo-fitness-programs-online"],
              ["Sell Masters Kurash Fitness Programs Online", "/blog/sell-masters-kurash-fitness-programs-online"],
              ["Sell Masters Mongolian Wrestling Fitness Programs Online", "/blog/sell-masters-mongolian-wrestling-fitness-programs-online"],
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
