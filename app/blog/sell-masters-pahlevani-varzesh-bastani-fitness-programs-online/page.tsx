import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Pahlevani and Varzesh-e Bastani Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Pahlevani expertise. Creatdrop gives instructors the tools to sell Iranian ancient athletic programmes, zurkhaneh training systems, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Pahlevani and Varzesh-e Bastani Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Pahlevani expertise. Creatdrop gives instructors the tools to sell Iranian ancient athletic programmes, zurkhaneh training systems, and school licences to a global audience.",
  },
}

export default function PahlevaniPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Pahlevani and Varzesh-e Bastani Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Pahlevani and Varzesh-e Bastani Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Pahlevani and Varzesh-e Bastani — the ancient Iranian system of athletics and martial
            arts — is one of the oldest organised physical training traditions in human history,
            with roots extending back over three thousand years to pre-Islamic Persian warrior
            culture. The tradition is practised in the zurkhaneh (house of strength), a circular
            pit arena where practitioners perform ritualised exercises to the accompaniment of
            percussion and recitation of Persian poetry. UNESCO recognised Pahlevani and Varzesh-e
            Bastani on the Representative List of the Intangible Cultural Heritage of Humanity in
            2010, acknowledging its unique combination of athletic training, spiritual practice,
            and cultural transmission.
          </p>
          <p>
            The exercise system includes the use of distinctive wooden implements — the sang (heavy
            wooden shields used like parallel dumbbells), the meels (wooden clubs swung in circular
            patterns), the kabadeh (iron bow), and the takhteh shena (plank for pushup variations)
            — in a sequence that develops extraordinary upper-body strength, shoulder mobility,
            and structural conditioning. The meels in particular — wooden clubs ranging from a few
            kilograms to over fifty kilograms, swung overhead in rhythmic circular patterns — have
            attracted worldwide attention as a functional strength training methodology with direct
            applications to combat sports, gymnastics, and functional fitness. Indian clubs and
            Persian meels have experienced a global revival within the kettlebell and functional
            training communities.
          </p>
          <p>
            For online instructors, the zurkhaneh tradition offers a combination of functional
            strength training content that bridges the ancient and the modern — the meel club
            swinging methodology alone represents premium instructional content for the global
            functional fitness community. Creatdrop lets qualified Pahlevani instructors reach
            both the Iranian diaspora and the global strength and fitness community interested
            in Persian club training methodology.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Pahlevani Programme Pricing</h2>
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
                  <td className="px-6 py-4">Persian Meel Club Swinging Foundation</td>
                  <td className="px-6 py-4">$67 – $127</td>
                  <td className="px-6 py-4">Progressive club technique from light to heavy</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Zurkhaneh Exercise System Programme</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Full sang, meel, kabadeh, and takhteh shena system</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Shoulder and Upper-Body Strength Course</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Pahlevani methodology for modern strength athletes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Pahlevani Cultural Heritage Programme</td>
                  <td className="px-6 py-4">$57 – $97</td>
                  <td className="px-6 py-4">History, poetry, and spiritual dimension of the zurkhaneh</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for strength and cultural heritage programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Zurkhaneh Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full implement training, conditioning, and cultural context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Pahlevani Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Iranian and Persian Diaspora</h3>
              <p className="text-sm text-slate-600">
                Iranian communities in North America, Europe, and Australia with cultural ties
                to the zurkhaneh tradition. Pahlevani carries deep national and spiritual
                significance — UNESCO heritage recognition reinforces its cultural value for
                diaspora buyers seeking authentic connection to Persian tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Functional Strength and Club Training Community</h3>
              <p className="text-sm text-slate-600">
                The global revival of Indian clubs and Persian meels within the kettlebell,
                functional fitness, and mobility communities. Practitioners already using light
                clubs seek advanced technique and heavier implement methodology — the
                zurkhaneh tradition is the source system they are searching for.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Ancient Athletics and Cultural Heritage Enthusiasts</h3>
              <p className="text-sm text-slate-600">
                Practitioners interested in traditional and ancestral physical culture worldwide.
                Pahlevani's UNESCO recognition, its three-thousand-year history, and its
                combination of athleticism and Persian classical culture attract an educated
                audience with premium purchase intent.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Pahlevani Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with meel club swinging as the crossover hook", "Persian meel clubs are already generating viral content in the functional fitness community. Film heavy meel club swinging as your entry marketing content — it is visually extraordinary and immediately comprehensible to anyone in the strength and conditioning world as a serious training tool."],
              ["Position the UNESCO heritage story prominently", "UNESCO intangible cultural heritage status is a powerful marketing asset that most martial arts cannot claim. Lead with it. The combination of the oldest organised athletic tradition in the world and UNESCO recognition commands premium positioning and media interest."],
              ["Publish with dual positioning", "Upload to Creatdrop and position the same curriculum as both an Iranian cultural heritage programme AND a functional strength methodology for modern athletes. Two audiences, one curriculum — the zurkhaneh implements bridge both markets naturally."],
              ["Target the club and mace training community directly", "The Indian club and steel mace training community on YouTube and Instagram is already buying implement training content. Position Persian meels as the source tradition for this community — more complex, heavier, and more culturally rich than the modern revival products they currently use."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Pahlevani Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Iranian Diaspora Media</h3>
              <p className="text-sm text-slate-600">
                Iranian cultural publications, diaspora community platforms, and Persian-language
                media in North America and Europe provide direct access to the community with
                the strongest cultural motivation for Pahlevani content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Functional Fitness and Mobility Channels</h3>
              <p className="text-sm text-slate-600">
                Kettlebell, steel club, Indian club, and functional movement YouTube channels
                and Instagram accounts are the highest-reach discovery channels for the
                club-swinging community seeking advanced technique and heavier implements.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Strength Sport and Ancient Athletics Podcasts</h3>
              <p className="text-sm text-slate-600">
                Podcasts covering physical culture history, ancient athletics, and strength
                training methodology are receptive to the Pahlevani story — the world's
                oldest organised athletic system with a living practice is a compelling
                guest topic.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">UNESCO Heritage Cultural Communities</h3>
              <p className="text-sm text-slate-600">
                Cultural heritage preservation networks and UNESCO intangible heritage
                communities provide academic and cultural distribution for Pahlevani content
                beyond the martial arts and fitness markets — reaching an educated audience
                with premium purchase intent.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Pahlevani Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Progressive Heavy Implement Loading</h3>
              <p className="text-sm text-slate-600">
                The meel club tradition progresses from light clubs to implements of thirty,
                fifty, or even seventy kilograms swung overhead — a progressive loading
                methodology that demands patient, structured development of shoulder, upper
                back, and rotational strength over months and years of practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Rhythmic Coordination Under Load</h3>
              <p className="text-sm text-slate-600">
                Zurkhaneh exercises are performed to percussion rhythm — developing the ability
                to maintain clean rhythmic technique as implement weight increases is a neural
                coordination demand distinct from conventional strength training. The musical
                timing creates specific concentration and body awareness requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Shoulder Mobility and Structural Integrity</h3>
              <p className="text-sm text-slate-600">
                Meel club swinging requires exceptional shoulder mobility in overhead and
                behind-the-back positions. The combination of heavy loading and extreme range
                of motion demands a specific preparatory mobility and structural conditioning
                programme before heavy implement work can begin safely.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Pahlevani Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your zurkhaneh expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Zurkhaneh Fitness Programs Online", "/blog/sell-masters-zurkhaneh-fitness-programs-online"],
              ["Sell Masters Pehlwani Fitness Programs Online", "/blog/sell-masters-pehlwani-fitness-programs-online"],
              ["Sell Masters Kalaripayattu Fitness Programs Online", "/blog/sell-masters-kalaripayattu-fitness-programs-online"],
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
