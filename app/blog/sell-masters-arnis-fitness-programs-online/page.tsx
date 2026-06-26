import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Arnis Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Arnis expertise. Creatdrop gives instructors the tools to sell Filipino stick and blade programmes, empty-hand sinawali training, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Arnis Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Arnis expertise. Creatdrop gives instructors the tools to sell Filipino stick and blade programmes, empty-hand sinawali training, and school licences to a global audience.",
  },
}

export default function ArnisPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Arnis Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Arnis Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Arnis — also called Eskrima or Kali — is the national martial art and sport of the
            Philippines, officially designated by Republic Act 9850 in 2009. The system encompasses
            single stick, double stick (sinawali), sword and dagger (espada y daga), knife, and
            empty-hand applications within a unified framework where weapon and empty-hand techniques
            follow the same structural logic. This weapons-to-empty-hand integration — the principle
            that the same striking angles, footwork patterns, and entry techniques apply whether armed
            or unarmed — is Arnis's most distinctive and commercially compelling characteristic.
          </p>
          <p>
            Arnis occupies a unique position in the global martial arts market as both the Philippine
            national martial art (with strong diaspora community identity across North America,
            Europe, and the Middle East) and the weapons component of choice for mixed martial arts
            and military combatives systems. The Dog Brothers, Marc Denny's full-contact rattan
            sparring community, introduced Arnis-derived weapons fighting to the MMA world in the
            1990s. The Inosanto lineage — Dan Inosanto studied under various Arnis and Kali masters
            and integrated their teachings into his JKD curriculum — embedded Filipino martial arts
            into the global MMA and self-defence training community. That community is now enormous,
            widely distributed, and actively purchases instructional content.
          </p>
          <p>
            For online instructors, Arnis offers exceptional filming versatility: sinawali double-stick
            patterns are visually striking and demonstrable at any speed, the weapons-to-empty-hand
            bridge creates natural multi-product curriculum architecture, and the diaspora community
            provides a concentrated buyer pool with strong cultural purchase motivation. Creatdrop
            lets you reach that audience globally — from the Filipino diaspora to MMA coaches
            integrating weapons training into their curriculum.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Arnis Programme Pricing</h2>
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
                  <td className="px-6 py-4">Sinawali Double-Stick Foundation</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Core weaving patterns from basic to advanced</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Single Stick Striking System</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">12-angle system with defences and counter-attacks</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Weapons-to-Empty-Hand Programme</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">The FMA principle bridge from armed to unarmed</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Espada y Daga Sword and Knife Course</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Two-weapon coordination and application</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$197 / year</td>
                  <td className="px-6 py-4">White-label for FMA and combatives programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Arnis Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full weapons, empty-hand, and sparring methodology</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Arnis Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Filipino Diaspora</h3>
              <p className="text-sm text-slate-600">
                The global Filipino diaspora — over ten million people in the United States,
                the Middle East, Europe, and Oceania — carries strong cultural identity with
                the national martial art. Access to qualified Arnis instruction from within
                the lineage carries deep purchase motivation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">MMA and JKD Community</h3>
              <p className="text-sm text-slate-600">
                The Inosanto-lineage JKD community and MMA coaches integrating Filipino martial
                arts weapons training into combatives curriculum. This is a large, globally
                distributed community with strong purchase intent for FMA instructional content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Military and Law Enforcement</h3>
              <p className="text-sm text-slate-600">
                Military combatives programmes and law enforcement defensive tactics instructors
                who incorporate FMA stick and knife methodology. The practical weapons-defence
                applications have direct professional training relevance.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Arnis Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with sinawali as the visual hook", "Double-stick sinawali patterns are among the most visually striking content in all martial arts — rapid, symmetrical, rhythmic, and immediately compelling to non-practitioners. Film clean sinawali at both training and performance speed as your free marketing content."],
              ["Build the weapons-to-empty-hand bridge explicitly", "The principle that Arnis striking angles, footwork, and defences transfer directly from stick to knife to empty hand is the system's highest-value selling point. Demonstrate the same technique with a stick, then a knife, then bare hands in the same video — this is your programme's core differentiator."],
              ["Publish and target the diaspora and FMA networks", "Upload to Creatdrop and reach Filipino community associations, FMA clubs globally, and the Inosanto-lineage JKD network. The Escrima Concepts International and World Eskrima Kali Arnis Federation networks provide direct access to qualified buyer communities."],
              ["Position as the weapons complement to any empty-hand system", "Every martial artist who practises a striking or grappling system is a potential weapons-training buyer. Market Arnis stick fundamentals as the weapons complement to BJJ, MMA, boxing, or Muay Thai training — a genuinely different stimulus that enhances overall martial awareness."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Arnis Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">FMA YouTube and Podcast Community</h3>
              <p className="text-sm text-slate-600">
                Filipino martial arts YouTube channels have dedicated global audiences.
                Channels covering Arnis, Eskrima, and Kali consistently generate strong
                engagement from both FMA practitioners and MMA athletes investigating
                weapons training methodology.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Filipino Community Organisations</h3>
              <p className="text-sm text-slate-600">
                Filipino community associations, cultural centres, and diaspora networks in
                the United States, Canada, Australia, and the Gulf States provide direct
                access to the community with the strongest cultural purchase motivation.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">JKD and MMA Coaching Networks</h3>
              <p className="text-sm text-slate-600">
                The Inosanto Academy lineage, Dog Brothers, and MMA gym networks that have
                integrated FMA into their curriculum are natural distribution channels.
                Instructor-to-instructor marketing in this community drives high-value
                school licence sales.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Self-Defence and Combatives Platforms</h3>
              <p className="text-sm text-slate-600">
                Weapons-defence and combatives blogs, podcasts, and social media communities
                are receptive to FMA stick and knife content. Practical self-defence buyers
                have high purchase intent and respond well to the real-world application
                framing of Arnis methodology.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Arnis Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Bilateral Coordination and Ambidexterity</h3>
              <p className="text-sm text-slate-600">
                Sinawali double-stick training develops bilateral coordination and ambidextrous
                striking capability that most martial arts systems do not address. The neural
                adaptation required for independent left-right limb coordination is a unique
                physical development demand of Arnis training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Stick Impact Conditioning</h3>
              <p className="text-sm text-slate-600">
                Progressively harder contact training with rattan sticks — beginning with
                light padded contact and advancing to full sparring — requires forearm and
                hand conditioning development specific to impact weapons training. This is
                distinct from empty-hand conditioning requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Footwork and Angle Development</h3>
              <p className="text-sm text-slate-600">
                Arnis footwork emphasises lateral and diagonal movement to control weapons
                angles — a different footwork vocabulary from linear striking arts or wrestling.
                Developing clean angle-based footwork under live partner pressure requires
                dedicated drilling distinct from other martial arts conditioning.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Arnis Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Filipino martial arts expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Escrima Fitness Programs Online", "/blog/sell-masters-escrima-fitness-programs-online"],
              ["Sell Masters Pencak Silat Fitness Programs Online", "/blog/sell-masters-pencak-silat-fitness-programs-online"],
              ["Sell Masters Silambam Fitness Programs Online", "/blog/sell-masters-silambam-fitness-programs-online"],
              ["Sell Masters Kenjutsu Fitness Programs Online", "/blog/sell-masters-kenjutsu-fitness-programs-online"],
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
