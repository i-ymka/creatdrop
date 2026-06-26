import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Tongbei Quan Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Tongbei Quan expertise. Creatdrop gives instructors the tools to sell long-range Chinese boxing programmes, swinging arm conditioning series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Tongbei Quan Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Tongbei Quan expertise. Creatdrop gives instructors the tools to sell long-range Chinese boxing programmes, swinging arm conditioning series, and school licences to a global audience.",
  },
}

export default function TongbeiQuanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Tongbei Quan Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Tongbei Quan Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Tongbei Quan — "Through-the-Back Boxing" — is a Northern Chinese martial art renowned for its
            exceptionally long-range palm strikes, whipping swinging arm movements, and the generation of
            full-body connected power transmitted from the back through relaxed, flexible arms. Unlike
            systems that emphasise muscular tension in striking, Tongbei Quan develops power through spinal
            mechanics, shoulder looseness, and sequential body wave transmission — a biomechanical model
            that has attracted growing interest from the evidence-based movement and martial arts community.
            The striking range and power generation methodology is genuinely distinctive within Chinese
            martial arts.
          </p>
          <p>
            There are several main Tongbei Quan lineages — Bai Yuan (White Ape), Qi Sheng, Wuxing, and Shou
            Dao — each with distinct technical emphases but sharing the core swinging-arm power development
            model. The White Ape (Bai Yuan) lineage is most widely known internationally and has the
            strongest online presence. The system's influence extends into weapons training, with a
            distinctive approach to staff and sabre use that emphasises the same whipping, through-body
            power mechanics as the empty-hand forms.
          </p>
          <p>
            Creatdrop lets Tongbei Quan instructors reach the global Chinese kung fu community — which
            numbers in the millions across all traditions — with content that practitioners outside China
            rarely have access to in qualified form. The distinctive movement quality of Tongbei Quan, its
            weapons curriculum, and its biomechanical principles for long-range power generation all make
            for compelling programme content across multiple price tiers.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Tongbei Quan Programme Pricing</h2>
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
                  <td className="px-6 py-4">Swinging Arm Power Foundation</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Core through-back power development</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Bai Yuan White Ape Forms Series</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Main lineage forms with application</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Long-Range Palm Strike Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Mechanics and application of Tongbei palms</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Tongbei Weapons Curriculum</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Staff and sabre with through-body power</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for kung fu programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Lineage Bundle</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full empty-hand and weapons curriculum</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Tongbei Quan Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Northern Kung Fu Practitioners</h3>
              <p className="text-sm text-slate-600">
                Practitioners of Changquan, Bajiquan, Xingyiquan, and other Northern Chinese systems
                seeking exposure to Tongbei's distinctive power generation model and its influence on
                the broader Northern kung fu tradition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Evidence-Based Movement Athletes</h3>
              <p className="text-sm text-slate-600">
                Athletes interested in relaxed power generation and sequential body wave mechanics.
                Tongbei Quan's biomechanical model is directly applicable to striking sports and general
                athletic power development.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Chinese Weapons Enthusiasts</h3>
              <p className="text-sm text-slate-600">
                Martial artists seeking quality weapons instruction in Northern Chinese long weapons.
                Tongbei staff and sabre programmes represent a product line extension with significant
                existing buyer demand.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Tongbei Quan Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the power generation story", "\"Power generated through the back and transmitted through relaxed arms\" is a distinctive mechanical claim that immediately separates Tongbei Quan from every other striking system online. Start there."],
              ["Film slow-motion power demonstrations", "The whipping, sequential quality of Tongbei striking is best understood through slow-motion video. Invest in high-quality filming that makes the biomechanical principles visible."],
              ["Publish empty-hand and weapons separately", "Film and sell empty-hand and weapons programmes as separate products. Buyers interested in forms may not want weapons; weapons buyers may not know the empty-hand curriculum. Two audiences, one filming investment."],
              ["Cross-market to the broader Northern kung fu community", "Changquan, Bajiquan, and Xingyiquan practitioners are all natural buyers for Tongbei content. Position your programme as a technical enrichment for the Northern Chinese arts community broadly."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Tongbei Quan Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Chinese Kung Fu YouTube Channels</h3>
              <p className="text-sm text-slate-600">
                Channels focused on traditional Northern Chinese kung fu reach an audience already
                familiar with the style landscape and actively seeking new instructional content from
                qualified teachers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Martial Arts Biomechanics Community</h3>
              <p className="text-sm text-slate-600">
                The growing evidence-based martial arts community — practitioners focused on efficient
                power generation and movement science — responds strongly to Tongbei Quan's relaxed
                sequential-transmission model.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Wushu and Traditional Kung Fu Forums</h3>
              <p className="text-sm text-slate-600">
                Dedicated Chinese martial arts forums and communities reach self-directed learners who
                actively seek supplementary technical instruction from qualified lineage teachers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Weapons Martial Arts Channels</h3>
              <p className="text-sm text-slate-600">
                YouTube channels and social media accounts focused on Chinese weapons performance have
                large audiences with specific interest in Northern staff and sabre techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Tongbei Quan Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Shoulder and Arm Relaxation Under Power</h3>
              <p className="text-sm text-slate-600">
                Tongbei Quan demands the paradoxical ability to generate explosive striking power while
                maintaining relaxed shoulder and arm musculature. Developing this coordination requires
                counter-intuitive retraining of habitual tension patterns.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Spinal Wave Mechanics</h3>
              <p className="text-sm text-slate-600">
                The sequential power transmission from the back through the arms requires thoracic
                mobility and spinal wave coordination that most practitioners have never systematically
                developed. This is a lengthy developmental process requiring patient, progressive drilling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Long-Range Footwork</h3>
              <p className="text-sm text-slate-600">
                Tongbei Quan's long-range fighting emphasis demands covering footwork patterns and
                distance management skills distinct from shorter-range Chinese systems. The footwork
                is integral to the power generation mechanics and requires simultaneous development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Tongbei Quan Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your through-back boxing expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Xinyi Liuhe Quan Fitness Programs Online", "/blog/sell-masters-xinyi-liuhe-quan-fitness-programs-online"],
              ["Sell Masters Bajiquan Fitness Programs Online", "/blog/sell-masters-bajiquan-fitness-programs-online"],
              ["Sell Masters Changquan Fitness Programs Online", "/blog/sell-masters-changquan-fitness-programs-online"],
              ["Sell Masters Xingyiquan Fitness Programs Online", "/blog/sell-masters-xingyiquan-fitness-programs-online"],
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
