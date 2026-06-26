import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Kenjutsu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Kenjutsu expertise. Creatdrop gives instructors the tools to sell classical swordsmanship programmes, kata transmission series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Kenjutsu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Kenjutsu expertise. Creatdrop gives instructors the tools to sell classical swordsmanship programmes, kata transmission series, and school licences to a global audience.",
  },
}

export default function KenjutsuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Kenjutsu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Kenjutsu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Kenjutsu — the classical Japanese art of the sword — encompasses the surviving koryu
            (old-school) traditions that preceded the sportive modernisation of Kendo. Where Kendo
            developed shinai competition and standardised protective equipment, kenjutsu schools
            preserved the kata-based transmission systems of specific historical lineages: Tenshin
            Shoden Katori Shinto-ryu (considered Japan's oldest surviving martial school), Kashima
            Shinto-ryu, Yagyu Shinkage-ryu, Itto-ryu, and dozens of other traditions. These schools
            contain sword drawing, paired kata, two-sword techniques, and in many cases teachings on
            spear, naginata, and other classical weapons as integrated curriculum.
          </p>
          <p>
            The online market for kenjutsu instruction is substantial and underserved. The global
            Kendo community — estimated at eight million practitioners in more than sixty countries —
            represents a natural buyer base with strong interest in the classical traditions from which
            their sport derived. Iaido practitioners, Japanese sword collectors, and historical European
            martial arts (HEMA) practitioners investigating Japanese sword methodology contribute
            additional buyer pools. The visual aesthetics of classical paired kata with bokken or
            shinken creates content that performs strongly on YouTube, Instagram, and martial arts
            video platforms.
          </p>
          <p>
            Creatdrop gives qualified kenjutsu instructors the infrastructure to reach this dispersed
            global audience. The rarity of qualified instruction outside Japan, the historical depth
            of koryu lineages, and the crossover demand from Kendo, Iaido, and Japanese martial culture
            enthusiasts all support premium programme pricing and a loyal subscriber base.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Kenjutsu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Kenjutsu Foundations Series</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Grip, posture, footwork, and basic cutting mechanics</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Paired Kata Curriculum</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Tachi/uchidachi paired forms with principle analysis</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Sword Drawing and Noto Programme</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Draw, cut, and resheath mechanics and applications</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Kenjutsu vs Kendo Comparison Course</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Classical tradition vs modern sport technical analysis</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$197 / year</td>
                  <td className="px-6 py-4">White-label for dojo and koryu programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Lineage Curriculum</td>
                  <td className="px-6 py-4">$247 – $397</td>
                  <td className="px-6 py-4">Full kata series with historical context and application</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Kenjutsu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Kendo Practitioners</h3>
              <p className="text-sm text-slate-600">
                The eight-million-strong global Kendo community with deep curiosity about the
                classical koryu traditions from which their sport derived. "Kenjutsu: what
                Kendo came from" is a perennially compelling hook in Japanese martial arts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Iaido Practitioners</h3>
              <p className="text-sm text-slate-600">
                Iaido students — who practise solo sword drawing as a formal discipline — have
                natural crossover interest in the paired kata and martial application context
                that kenjutsu provides for their solo forms.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">HEMA and Historical Sword Community</h3>
              <p className="text-sm text-slate-600">
                Historical European martial arts practitioners and Japanese sword culture
                enthusiasts worldwide. The academic depth of koryu lineages, their documented
                history, and the aesthetic of classical paired training attracts this community.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Kenjutsu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the koryu lineage story", "Your school's historical transmission — its founding, its evolution, the teachers who carried it — is your most powerful differentiator. The Kendo community is acutely aware that their sport simplified something deeper. Show them what that something is."],
              ["Film paired kata with principle commentary", "Paired kenjutsu kata contain tactical principles invisible to the untrained eye. Film the forms, then provide principle-level commentary: what the tachi is testing, why the uchidachi moves as they do, what the exchange is actually teaching. This is premium content the Kendo community cannot access elsewhere."],
              ["Publish and target Kendo federation networks", "Upload to Creatdrop and reach Kendo federations and clubs across Europe, North America, and Oceania. The All Japan Kendo Federation's affiliated national organisations span sixty countries — each is a distribution channel for classical Japanese sword content."],
              ["Position the scarcity of qualified instruction", "Qualified kenjutsu instruction outside Japan is genuinely rare. Frame your programme accordingly: \"Most Kendo practitioners will never train in a koryu dojo.\" That scarcity positions your content as the accessible alternative to something that would otherwise require relocation to Japan."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Kenjutsu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Kendo YouTube and Community Platforms</h3>
              <p className="text-sm text-slate-600">
                The global Kendo YouTube community — with substantial audiences on channels
                covering training, tournament analysis, and budo culture — is the highest-reach
                discovery pathway for kenjutsu content in the English-speaking world.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Koryu and Budo Academic Forums</h3>
              <p className="text-sm text-slate-600">
                E-Budo, Sword Arts Network, and koryu-specific Facebook groups bring together
                the most motivated buyers — practitioners with existing interest in classical
                Japanese martial arts and purchase intent for authentic lineage content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Japanese Sword Culture Publications</h3>
              <p className="text-sm text-slate-600">
                Collectors and enthusiasts of nihonto (Japanese swords) form a large community
                with adjacent interest in the martial traditions that gave those swords their
                context. Token Bijutsu and sword collector communities are receptive distribution channels.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">HEMA and Historical Martial Arts Networks</h3>
              <p className="text-sm text-slate-600">
                The growing HEMA community investigates sword arts across cultures. Japanese
                kenjutsu content positioned as comparative study — alongside longsword and
                rapier traditions — accesses this large and intellectually engaged audience.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Kenjutsu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Precision Cutting Mechanics</h3>
              <p className="text-sm text-slate-600">
                Classical kenjutsu cutting requires precise alignment of body, arms, and weapon
                for effective tameshigiri or kata application. Developing structurally correct
                cuts across multiple angles demands sustained repetitive training that challenges
                shoulder, wrist, and core conditioning distinctly from conventional exercise.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Paired Kata Timing and Distance</h3>
              <p className="text-sm text-slate-600">
                Kenjutsu paired kata require developing precise ma-ai (combative distance) and
                hyoshi (timing) with a partner — skills that cannot be developed from solo
                practice alone and require sustained partner drilling to internalise safely
                and effectively.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Long-Term Posture and Stance Development</h3>
              <p className="text-sm text-slate-600">
                The classical kamae (fighting postures) of kenjutsu require specific hip, knee,
                and ankle flexibility that develops over years of practice. Lower body conditioning
                specific to the sword arts' distinctive stances is a prerequisite for advanced
                paired kata work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Kenjutsu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your classical swordsmanship lineage into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Kendo Fitness Programs Online", "/blog/sell-masters-kendo-fitness-programs-online"],
              ["Sell Masters Iaido Fitness Programs Online", "/blog/sell-masters-iaido-fitness-programs-online"],
              ["Sell Masters Naginata Fitness Programs Online", "/blog/sell-masters-naginata-fitness-programs-online"],
              ["Sell Masters Kobudo Fitness Programs Online", "/blog/sell-masters-kobudo-fitness-programs-online"],
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
