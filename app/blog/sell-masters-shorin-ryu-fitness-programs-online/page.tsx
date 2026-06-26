import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Shorin-Ryu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Shorin-ryu expertise. Creatdrop gives instructors the tools to sell kata-based conditioning programmes, Okinawan kata seminars, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Shorin-Ryu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Shorin-ryu expertise. Creatdrop gives instructors the tools to sell kata-based conditioning programmes, Okinawan kata seminars, and school licences to a global audience.",
  },
}

export default function ShorinryuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Shorin-Ryu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Shorin-Ryu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Shorin-ryu is one of the two primary lineages of Okinawan karate alongside Naha-te, and it is
            arguably the most historically significant single tradition in the martial art's development.
            Sokon "Bushi" Matsumura — bodyguard to three Ryukyuan kings and student of Chinese martial arts
            masters — established the technical foundation in the nineteenth century. His legacy flows through
            Anko Itosu, who systematised the Pinan kata series that became foundational to virtually every
            major karate school worldwide. Chotoku Kyan and Choshin Chibana formalised distinct Shorin-ryu
            branches, and these lineages eventually produced both Shotokan and many of the Okinawan systems
            still practised today.
          </p>
          <p>
            For online instructors, Shorin-ryu offers a rich content landscape. The kata library is extensive
            and historically layered — Pinan/Heian, Naihanchi/Tekki, Passai/Bassai, Kusanku/Kanku — and each
            form carries bunkai applications that practitioners across all modern systems actively seek.
            Because Shorin-ryu is the ancestor of Shotokan, virtually every Shotokan practitioner has latent
            interest in the Okinawan origins of their own kata. That creates a massive secondary market
            beyond the core Shorin-ryu community.
          </p>
          <p>
            Creatdrop gives you the infrastructure to sell that content globally without dojo overhead. A
            Shorin-ryu instructor with deep bunkai knowledge is offering something that Shotokan, Wado-ryu,
            and Shito-ryu practitioners all have reasons to buy — an unusually wide total addressable market
            for a traditional martial art online programme.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Shorin-Ryu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Pinan Kata Okinawan Origins Course</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Itosu lineage with bunkai</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Naihanchi Deep-Dive Series</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Three Naihanchi kata with close-range applications</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Passai/Kusanku Advanced Programme</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Senior kata with multi-angle bunkai</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Matsumura Historical Masterclass</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Shorin-ryu roots and Chinese lineage</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Kata and Bunkai Library</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full Shorin-ryu curriculum with applications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Shorin-Ryu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Traditional Karate Practitioners</h3>
              <p className="text-sm text-slate-600">
                Shotokan, Wado-ryu, and Shito-ryu students interested in tracing their kata back to Okinawan
                origins. Bunkai from the source tradition is compelling content for this segment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Okinawan Karate Enthusiasts</h3>
              <p className="text-sm text-slate-600">
                A passionate global community specifically seeking authentic Okinawan content over mainland
                Japanese styles. Willing to pay premium prices for lineage-verified instruction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Self-Defence Focused Practitioners</h3>
              <p className="text-sm text-slate-600">
                Martial artists drawn to practical bunkai over sport competition. Shorin-ryu's Naihanchi-based
                close-range fighting principles attract this buyer segment strongly.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Shorin-Ryu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with bunkai depth", "The kata themselves are publicly visible. Your competitive advantage is authentic bunkai interpretation from an Okinawan lineage. Lead with applications, not just performance."],
              ["Film across multiple kata levels", "Record Pinan series for beginners, Naihanchi for intermediate buyers, and senior kata like Passai and Kusanku for advanced students. Three product tiers from one filming trip."],
              ["Publish and price for your lineage", "Upload to Creatdrop and set pricing that reflects the rarity of authentic Okinawan instruction. The global karate community will pay premium for genuine lineage content."],
              ["Target karate ancestry seekers", "Shotokan practitioners curious about Okinawan roots are a vast secondary audience. Market your programme explicitly as the source of the kata they already practise."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Shorin-Ryu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Bunkai Comparison Videos</h3>
              <p className="text-sm text-slate-600">
                Side-by-side comparisons of Okinawan Pinan versus Shotokan Heian drive enormous search traffic.
                Karate practitioners worldwide search these comparisons and convert well to paid courses.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Okinawan Karate Forums</h3>
              <p className="text-sm text-slate-600">
                Dedicated Okinawan karate communities, r/karate, and traditional budō forums are concentrated
                with self-directed learners actively seeking authentic instruction beyond local availability.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Instagram Kata Demonstrations</h3>
              <p className="text-sm text-slate-600">
                Clean, high-quality kata performance clips with visible technique differences from Japanese
                versions attract attention from the large Shotokan and competitive karate Instagram audience.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Martial Arts History Podcasts</h3>
              <p className="text-sm text-slate-600">
                The Matsumura lineage story — royal bodyguard, Chinese masters, Itosu's Pinan invention — is
                compelling narrative content for martial arts history podcasts with qualified listener bases.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Shorin-Ryu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">High Mobile Stances</h3>
              <p className="text-sm text-slate-600">
                Shorin-ryu employs higher, more natural stances than hard-style karate systems. This demands
                functional hip mobility and athletic footwork rather than deep static strength.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Naihanchi Close-Range Mechanics</h3>
              <p className="text-sm text-slate-600">
                The lateral-moving Naihanchi kata trains unique inside-fighting mechanics with rotational hip
                power on a narrow base. The body mechanics are distinct from all other kata systems and
                require dedicated drilling to internalise.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Bunkai Partner Application</h3>
              <p className="text-sm text-slate-600">
                Authentic Shorin-ryu training includes two-person kata application practice. Developing
                realistic bunkai requires a training partner and systematically differentiates this art from
                solo-performance kata systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Shorin-Ryu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Okinawan lineage knowledge into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Shotokan Fitness Programs Online", "/blog/sell-masters-shotokan-fitness-programs-online"],
              ["Sell Masters Isshin-Ryu Fitness Programs Online", "/blog/sell-masters-isshin-ryu-fitness-programs-online"],
              ["Sell Masters Goju-Ryu Fitness Programs Online", "/blog/sell-masters-goju-ryu-fitness-programs-online"],
              ["Sell Masters Karate Fitness Programs Online", "/blog/sell-masters-karate-fitness-programs-online"],
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
