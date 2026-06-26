import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Wado-Ryu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Wado-ryu expertise. Creatdrop gives instructors the tools to sell evasive-body movement programmes, ohyo kumite series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Wado-Ryu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Wado-ryu expertise. Creatdrop gives instructors the tools to sell evasive-body movement programmes, ohyo kumite series, and school licences to a global audience.",
  },
}

export default function WadoryuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Wado-Ryu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Wado-Ryu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Wado-ryu is the only major karate system with deep roots in both Okinawan karate and Japanese
            jujutsu. Hironori Otsuka trained under Gichin Funakoshi and simultaneously held a senior rank in
            Shindo Yoshin-ryu jujutsu, and in 1934 he synthesised the two traditions into Wado-ryu — the
            "Way of Peace." The hallmark of the system is tai sabaki: evasive whole-body movement that
            redirects attacks rather than meeting force with force. This produces a distinctively fluid and
            economical fighting style that contrasts sharply with harder-line karate schools.
          </p>
          <p>
            Wado-ryu is one of the four major karate styles recognised by the World Karate Federation and
            served as one of the karate disciplines at the Tokyo 2020 Olympics. Its global community spans
            Europe — where the Wado-ryu diaspora is particularly strong in the United Kingdom — as well as
            Japan, the United States, and South-East Asia. The ohyo kumite series (fifteen paired pre-arranged
            sparring sequences) and ipponme through juhonme forms provide structured content that maps
            directly to an online curriculum with natural progression checkpoints.
          </p>
          <p>
            The fitness community increasingly values movement quality over muscular force, and Wado-ryu's
            emphasis on natural posture, hip rotation, and evasive positioning addresses exactly that market.
            Creatdrop lets you package those principles into programmes that practitioners worldwide can
            purchase, study, and apply — whether they are refining competition kata, developing practical
            kumite skills, or simply exploring more sophisticated movement for general fitness.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Wado-Ryu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Tai Sabaki Body Evasion Course</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Core evasion and redirection mechanics</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Ohyo Kumite Complete Series</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">All 15 pre-arranged paired sequences</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Pinan Kata Breakdown Programme</td>
                  <td className="px-6 py-4">$97 – $147</td>
                  <td className="px-6 py-4">Wado-ryu versions with bunkai</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Jujutsu Roots Masterclass</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Shindo Yoshin-ryu influence and locks</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Competition Kata Prep Bundle</td>
                  <td className="px-6 py-4">$147 – $247</td>
                  <td className="px-6 py-4">WKF-standard kata with judge criteria</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Wado-Ryu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Competition Karateka</h3>
              <p className="text-sm text-slate-600">
                Athletes preparing for WKF tournaments who need Wado-ryu specific kata coaching and kumite
                strategy. Olympic exposure has expanded this segment significantly since Tokyo 2020.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Movement-Quality Practitioners</h3>
              <p className="text-sm text-slate-600">
                Martial artists from other systems drawn to Wado-ryu's fluid body mechanics. Tai sabaki
                principles attract practitioners of aikido, wing chun, and other evasion-based arts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">UK and European Karate Clubs</h3>
              <p className="text-sm text-slate-600">
                Wado-ryu has an exceptionally strong presence in British karate. Clubs seeking supplementary
                online curriculum for their students are natural annual school-licence purchasers.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Wado-Ryu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Define your lead topic", "Tai sabaki body evasion is the unique Wado-ryu signature and the strongest differentiator for your marketing. Build your flagship product around it and upsell into kata or kumite depth."],
              ["Film with paired context", "Wado-ryu technique cannot be fully understood without partner application. Record each principle against a training partner to show practical context, not just solo performance."],
              ["Publish and price globally", "Upload to Creatdrop, set your pricing tiers, and activate your storefront. Creatdrop handles all payment processing, digital delivery, and regional tax compliance."],
              ["Target the UK karate circuit", "British and European Wado-ryu communities are active online buyers. Engage with Wado-ryu associations, club newsletters, and federation channels to reach them directly."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Wado-Ryu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Tai Sabaki Analysis</h3>
              <p className="text-sm text-slate-600">
                Slow-motion demonstrations of evasive body mechanics perform strongly on YouTube. The visually
                distinctive Wado-ryu movement style is immediately recognisable and shareable.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">WKF and National Federation Channels</h3>
              <p className="text-sm text-slate-600">
                World Karate Federation events and national association newsletters reach competition-focused
                practitioners exactly when they are looking for technical coaching resources.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Karate Reddit and Facebook Groups</h3>
              <p className="text-sm text-slate-600">
                r/karate, Wado-ryu specific Facebook groups, and traditional martial arts communities provide
                direct access to practitioners actively seeking supplementary training resources.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Martial Arts Podcast Guest Slots</h3>
              <p className="text-sm text-slate-600">
                Discussing the jujutsu-karate synthesis on budō podcasts positions you as a unique voice with
                authentic historical knowledge — credibility that converts to course sales.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Wado-Ryu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Tai Sabaki Coordination</h3>
              <p className="text-sm text-slate-600">
                Effective body evasion requires whole-body timing — the simultaneous movement of feet, hips,
                and upper body to exit attack lines. This is a coordination skill that takes months of
                partner drilling to internalise reliably.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Natural Posture Under Pressure</h3>
              <p className="text-sm text-slate-600">
                Wado-ryu insists on natural, upright body posture rather than deep stances. Maintaining
                relaxed skeletal alignment during fast exchanges is a subtle but demanding postural
                conditioning requirement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Jujutsu Lock and Throw Integration</h3>
              <p className="text-sm text-slate-600">
                Practitioners must develop basic grappling competence alongside striking skills. Ohyo kumite
                sequences include joint-lock and throw exits that require separate drilling from kata and
                kumite practice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Wado-Ryu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your tai sabaki and ohyo kumite expertise into a global online programme
            — no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Shotokan Fitness Programs Online", "/blog/sell-masters-shotokan-fitness-programs-online"],
              ["Sell Masters Shorinji Kempo Fitness Programs Online", "/blog/sell-masters-shorinji-kempo-fitness-programs-online"],
              ["Sell Masters Karate Fitness Programs Online", "/blog/sell-masters-karate-fitness-programs-online"],
              ["Sell Masters Goju-Ryu Fitness Programs Online", "/blog/sell-masters-goju-ryu-fitness-programs-online"],
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
