import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Muay Boran Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Muay Boran expertise. Creatdrop gives instructors the tools to sell ancient Thai boxing programmes, Mae Mai techniques, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Muay Boran Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Muay Boran expertise. Creatdrop gives instructors the tools to sell ancient Thai boxing programmes, Mae Mai techniques, and school licences to a global audience.",
  },
}

export default function MuayBoranPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Muay Boran Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Muay Boran Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Muay Boran — "ancient boxing" — is the collective term for the traditional Thai martial arts that
            preceded the development of modern Muay Thai in the early twentieth century. While contemporary
            Muay Thai is a defined sport with standardised rules and a gloved boxing format, Muay Boran
            encompasses the broader historical techniques that existed before those constraints: head strikes,
            ground techniques, joint locks, throws, and a wider application of elbow and knee attacks than
            the modern sport permits. Styles such as Muay Chaiya, Muay Lopburi, Muay Korat, and Muay
            Thasao preserved regional fighting traditions that the modernisation process partially suppressed.
          </p>
          <p>
            The global Muay Thai community numbers in the tens of millions, and within it there is a
            passionate subset of practitioners actively seeking historical depth beyond what the modern sport
            curriculum offers. The Mae Mai (mother techniques) and Luk Mai (minor techniques) — the classical
            form system of traditional Thai fighting — represent an organised technical curriculum that maps
            well to online instruction. The Wai Kru Ram Muay ritual, distinct regional styles, and the
            connection to Thai royal court martial traditions all provide content that differentiates Muay
            Boran programmes from the saturated modern Muay Thai instruction market.
          </p>
          <p>
            Creatdrop lets Muay Boran instructors reach the Muay Thai community globally with content those
            practitioners cannot find from their local gym coach. The 73 Mae Mai and Luk Mai techniques, the
            historical context, and the regional style variations constitute a deep curriculum that can
            support multiple product tiers. If you are a qualified Muay Boran teacher, the audience for your
            knowledge is already there — and growing.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Muay Boran Programme Pricing</h2>
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
                  <td className="px-6 py-4">Mae Mai Mother Techniques Course</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">15 classical Mae Mai with applications</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Muay Chaiya Regional Style</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Southern Thai defensive guard system</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Wai Kru Ram Muay Masterclass</td>
                  <td className="px-6 py-4">$47 – $87</td>
                  <td className="px-6 py-4">Ritual movement forms and spiritual context</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Full Luk Mai and Mae Mai Bundle</td>
                  <td className="px-6 py-4">$147 – $247</td>
                  <td className="px-6 py-4">Complete 73-technique classical system</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$197 / year</td>
                  <td className="px-6 py-4">White-label for gym programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Historical Thai Boxing Seminar</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Regional styles, royal court tradition, modernisation history</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Muay Boran Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Advanced Muay Thai Practitioners</h3>
              <p className="text-sm text-slate-600">
                Experienced Muay Thai athletes and coaches seeking historical depth and banned techniques.
                The Mae Mai system is the most organised access point into classical Thai fighting for
                this large, motivated audience.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Traditional Martial Arts Community</h3>
              <p className="text-sm text-slate-600">
                Practitioners of other traditional systems drawn to Muay Boran's cultural depth, spiritual
                elements, and historical continuity with pre-modern Southeast Asian military tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Thai Cultural Community</h3>
              <p className="text-sm text-slate-600">
                Thai diaspora communities globally seeking connection to traditional cultural martial arts
                beyond what modern sport Muay Thai gym culture provides.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Muay Boran Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Position as the \"missing Muay Thai\"", "Marketing to the Muay Thai community as techniques that existed before the modern sport was codified is a proven hook. Every serious Muay Thai practitioner is curious about what their art looked like before gloves and rules."],
              ["Lead with Muay Chaiya or Mae Mai", "Muay Chaiya is the most recognised regional style internationally. The Mae Mai system provides the most structured curriculum entry point. Either makes a strong first product that positions the rest of your library."],
              ["Publish on Creatdrop and price for depth", "Upload your programme and set pricing that reflects the genuine rarity of qualified Muay Boran instruction outside Thailand. Creatdrop handles global payments and digital delivery."],
              ["Target Muay Thai gym networks", "Partner with Muay Thai gym owners for referral arrangements. A Muay Boran supplement programme generates recurring revenue for both the gym (as a school-licence affiliate) and you as the creator."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Muay Boran Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Comparison Videos</h3>
              <p className="text-sm text-slate-600">
                "Muay Boran vs Modern Muay Thai" videos drive enormous organic traffic from the massive
                Muay Thai training community. Comparison content is the highest-performing discovery format
                for traditional martial arts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Muay Thai Community Platforms</h3>
              <p className="text-sm text-slate-600">
                Muay Thai subreddits, Nak Muay Nation, Muay Thai Scholar, and active Facebook groups
                for Muay Thai practitioners are populated with buyers who actively seek historical depth.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Southeast Asian Martial Arts Podcasts</h3>
              <p className="text-sm text-slate-600">
                Podcasts covering traditional Southeast Asian fighting arts reach a qualified, purchase-intent
                audience that values lineage and historical authenticity over modern sport performance.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Thai Community and Tourism Channels</h3>
              <p className="text-sm text-slate-600">
                Thai cultural organisations, temple networks, and Thailand tourism content creators reach
                audiences with pre-existing affinity for Thai traditional arts and higher conversion rates.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Muay Boran Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Classical Guard Positions</h3>
              <p className="text-sm text-slate-600">
                Muay Boran guards — particularly the Muay Chaiya defensive posture with elbows dropped and
                forearms facing out — are biomechanically distinct from modern Muay Thai positioning. Re-grooving
                these stances requires dedicated drilling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Grappling and Ground Techniques</h3>
              <p className="text-sm text-slate-600">
                The broader Muay Boran repertoire includes throws, joint locks, and ground fighting absent
                from modern sport. Developing these skills requires grappling conditioning supplementary
                to the striking practice most Muay Thai practitioners already have.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Ritual Movement Practice</h3>
              <p className="text-sm text-slate-600">
                The Wai Kru Ram Muay demands memorisation of stylised movement sequences with precise
                spatial orientation. This is a performance skill requiring patient repetition separate from
                the combat technique curriculum.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Muay Boran Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your ancient Thai boxing expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Muay Thai Fitness Programs Online", "/blog/sell-masters-muay-thai-fitness-programs-online"],
              ["Sell Masters Laamb Fitness Programs Online", "/blog/sell-masters-laamb-fitness-programs-online"],
              ["Sell Masters Lethwei Fitness Programs Online", "/blog/sell-masters-lethwei-fitness-programs-online"],
              ["Sell Masters Pradal Serey Fitness Programs Online", "/blog/sell-masters-pradal-serey-fitness-programs-online"],
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
