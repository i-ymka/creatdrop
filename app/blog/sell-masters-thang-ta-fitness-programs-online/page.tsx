import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Thang-Ta Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Thang-Ta expertise. Creatdrop gives instructors the tools to sell Manipuri sword and spear programmes, Huyen Langlon combat training, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Thang-Ta Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Thang-Ta expertise. Creatdrop gives instructors the tools to sell Manipuri sword and spear programmes, Huyen Langlon combat training, and school licences to a global audience.",
  },
}

export default function ThangTaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Thang-Ta Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Thang-Ta Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Thang-Ta — meaning "sword and spear" — is the traditional martial art of the Meitei
            people of Manipur, a state in northeastern India on the border with Myanmar. The full
            system is known as Huyen Langlon, which encompasses both Thang-Ta (the weapons
            component, using sword, spear, and shield) and Sarit Sarak (the empty-hand combat
            component). The art was suppressed by British colonial authorities in 1891 after the
            Anglo-Manipur War and practised secretly for decades, surviving underground before
            being revived and formally recognised in the post-independence period. Thang-Ta is
            now performed at state ceremonies, cultural festivals, and competitions, and is
            increasingly promoted by the Indian government as part of the national martial
            heritage promotion programme alongside other regional arts.
          </p>
          <p>
            The sword work of Thang-Ta — performed with a distinctive curved blade — involves
            dynamic circular cutting patterns, defensive checks, and footwork that combines
            aesthetic performance elements with functional combat application. The inclusion of
            spear, shield, and dagger within the curriculum creates a multi-weapon art of
            considerable breadth. The art's connection to Manipuri cultural identity is profound:
            Manipur, a small state with a rich cultural tradition in dance, music, and martial
            arts, has produced remarkable practitioners whose work has attracted attention from
            both Indian martial arts researchers and the international weapons arts community.
          </p>
          <p>
            For online instructors, Thang-Ta occupies a genuinely rare position — a serious
            weapons art from an underrepresented region with documented history, living practice,
            and growing institutional support. Creatdrop lets qualified Thang-Ta masters reach
            the Indian martial arts community, the Meitei diaspora, and the international
            weapons arts audience that has never had access to qualified instruction in this
            tradition.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Thang-Ta Programme Pricing</h2>
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
                  <td className="px-6 py-4">Sword Foundation Programme</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Grip, cutting patterns, and basic sword forms</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Spear and Shield Techniques</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Spear footwork, thrusting, and shield integration</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Sarit Sarak Empty-Hand Programme</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Unarmed Huyen Langlon combat techniques</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Traditional Manipuri Combat Forms</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Classical kata with cultural context and applications</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for Indian martial arts programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Huyen Langlon Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full weapons and empty-hand system with cultural context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Thang-Ta Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Martial Arts Community</h3>
              <p className="text-sm text-slate-600">
                The growing Indian martial arts community investigating indigenous regional
                traditions alongside the nationally promoted arts. The Indian government's
                Khelo India programme and Indian martial heritage promotion create institutional
                support and mainstream awareness for Thang-Ta nationally.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Meitei and Northeast Indian Diaspora</h3>
              <p className="text-sm text-slate-600">
                Manipuri and broader Northeast Indian communities in major Indian cities,
                Southeast Asia, and the diaspora in North America and Europe with cultural
                ties to Manipuri identity and heritage. Thang-Ta carries profound cultural
                significance for this community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Weapons Arts Enthusiasts</h3>
              <p className="text-sm text-slate-600">
                International practitioners of weapons arts — HEMA, Arnis, Kenjutsu,
                and Asian weapon systems — seeking genuinely rare content. Qualified
                Thang-Ta instruction is almost entirely unavailable outside Manipur,
                creating genuine scarcity value for this audience.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Thang-Ta Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the colonial suppression and revival story", "Thang-Ta was banned by British colonial authorities and survived underground for decades before revival — a narrative that resonates powerfully with diaspora and heritage audiences. \"The martial art banned by the British Empire\" is among the most compelling opening lines available in Indian martial arts."],
              ["Film the sword work with the full visual aesthetic", "Thang-Ta sword performance — the curved blade, the dynamic circular patterns, the traditional dress — is visually extraordinary. Short demonstration clips perform strongly on social media and YouTube, driving organic discovery from audiences who have never encountered this tradition."],
              ["Publish and target Indian martial arts platforms", "Upload to Creatdrop and reach the growing Indian martial arts community through regional associations, the Khelo India programme networks, and Indian martial heritage promotion channels. Northeast India's martial traditions are receiving increased national institutional support."],
              ["Position the scarcity explicitly", "Qualified Thang-Ta instruction is nearly inaccessible outside Manipur. Position your programme as providing access to something that would otherwise require travelling to one of India's most remote states. The scarcity is real and commands premium pricing."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Thang-Ta Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Martial Arts Platforms</h3>
              <p className="text-sm text-slate-600">
                The growing online community of Indian martial arts practitioners and
                enthusiasts — covering Kalaripayattu, Gatka, Silambam, and regional arts —
                is a natural discovery channel for Thang-Ta content as an underrepresented
                Northeast Indian tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Manipuri Cultural Media</h3>
              <p className="text-sm text-slate-600">
                Manipuri cultural associations, the Sangai Festival media, and Northeast
                Indian diaspora platforms provide direct access to the community with the
                strongest cultural purchase motivation for Thang-Ta content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Asian Weapons Arts Community</h3>
              <p className="text-sm text-slate-600">
                YouTube channels and forums covering Southeast Asian and South Asian weapons
                arts — Arnis, Krabi-Krabong, and Silambam practitioners — are receptive
                to Thang-Ta content as a rare South Asian sword and spear tradition with
                comparable technical depth.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Indian Heritage Tourism and Culture Platforms</h3>
              <p className="text-sm text-slate-600">
                Platforms covering Indian cultural heritage, traditional arts, and regional
                culture reach an educated audience with interest in India's diverse martial
                traditions beyond Kalaripayattu and Kushti. Thang-Ta content performs well
                as cultural discovery content in this community.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Thang-Ta Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Circular Cutting Mechanics</h3>
              <p className="text-sm text-slate-600">
                Thang-Ta sword work involves large circular cutting patterns that require
                coordinated shoulder, arm, and wrist mechanics across a full range of motion.
                Developing both the power and control for these patterns demands specific
                shoulder and upper-body conditioning distinct from linear striking arts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Multi-Weapon Coordination</h3>
              <p className="text-sm text-slate-600">
                The Huyen Langlon curriculum requires developing distinct motor patterns for
                sword, spear, shield, and dagger. Each weapon creates different physical
                coordination demands and requires separate conditioning sequences across
                the full curriculum.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Performance and Combat Integration</h3>
              <p className="text-sm text-slate-600">
                Thang-Ta forms combine performance elements with combat application — developing
                the ability to execute forms with both aesthetic quality and functional power
                requires a conditioning balance between the controlled aesthetics of
                performance and the explosive demands of combat application.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Thang-Ta Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Manipuri martial arts expertise into a global online programme —
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
              ["Sell Masters Silambam Fitness Programs Online", "/blog/sell-masters-silambam-fitness-programs-online"],
              ["Sell Masters Krabi-Krabong Fitness Programs Online", "/blog/sell-masters-krabi-krabong-fitness-programs-online"],
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
