import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Yiquan Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Yiquan expertise. Creatdrop gives instructors the tools to sell standing pole meditation programmes, mind-intent power development, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Yiquan Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Yiquan expertise. Creatdrop gives instructors the tools to sell standing pole meditation programmes, mind-intent power development, and school licences to a global audience.",
  },
}

export default function YiquanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Yiquan Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Yiquan Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Yiquan — Mind-Intent Boxing — was founded by Wang Xiangzhai in the 1920s after he had trained
            extensively in Xingyiquan under Guo Yunshen and subsequently studied widely across Chinese
            martial traditions. Dissatisfied with the emphasis on external form over underlying principle,
            Wang stripped the martial art back to its functional core: zhan zhuang (standing pole
            meditation), shi li (force testing through slow movement), and moca bu (friction stepping).
            He eliminated kata and set forms entirely, focusing training on developing genuine whole-body
            power — what he called zheng li or "mass power" — through direct physical experience rather
            than choreographed patterns.
          </p>
          <p>
            Yiquan became influential not only within Chinese martial arts but also in Chinese health
            culture, where the standing meditation practice was adopted broadly for its therapeutic
            benefits. The standing practice is backed by growing sports science research on isometric
            training, proprioception development, and musculoskeletal health — giving Yiquan an unusually
            direct bridge to the evidence-based fitness community. Wang Xiangzhai's most famous student,
            Yao Zongxun, systematised the transmission that most contemporary lineages trace back to.
          </p>
          <p>
            For online instructors, Yiquan offers one of the most accessible-to-film but deeply meaningful
            programme structures in Chinese martial arts: a progression from basic standing postures
            through increasingly subtle force development and partner testing work. The absence of complex
            kata removes a major filming complexity. Creatdrop lets you sell this system to the global
            internal arts community, the health and wellbeing audience drawn to standing meditation, and
            the combat sports community investigating whole-body power development.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Yiquan Programme Pricing</h2>
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
                  <td className="px-6 py-4">Zhan Zhuang Foundation Programme</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Core standing postures with progressive development</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Shi Li Force Testing Series</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Slow-motion force development and testing</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Whole-Body Power Development Course</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Zheng li mass power cultivation and application</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Tui Shou Partner Testing Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Two-person force testing and sensitivity development</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for internal arts and health programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Yiquan Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full standing, movement, and combat application system</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Yiquan Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Chinese Internal Arts Practitioners</h3>
              <p className="text-sm text-slate-600">
                Taijiquan, Xingyiquan, and Baguazhang practitioners seeking deeper understanding of
                internal power development. Yiquan's direct, principle-focused methodology is highly
                valued in this community for clarifying what other systems only hint at.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Health and Longevity Seekers</h3>
              <p className="text-sm text-slate-600">
                The therapeutic standing meditation community drawn to Yiquan's health benefits.
                This is a substantially larger market than the combat arts audience and responds to
                messaging around stress relief, posture, and structural health.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Evidence-Based Power Athletes</h3>
              <p className="text-sm text-slate-600">
                Athletes and coaches investigating isometric training, proprioceptive development, and
                whole-body force production. The sports science alignment of Yiquan standing practice
                makes it accessible and compelling to performance-focused buyers.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Yiquan Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with standing meditation accessibility", "Zhan zhuang is simple to begin but profound to master — a combination that makes for exceptionally clear introductory content. Anyone can start standing. The depth keeps them buying."],
              ["Film the progression clearly", "Document the visible physical changes across weeks and months of standing practice — the relaxation deepening, the structural alignment improving. Testimonial-style progression content converts strongly in this community."],
              ["Publish with dual positioning", "Upload to Creatdrop and position the same curriculum as both a martial power development system AND a therapeutic standing meditation practice. Two audiences, one programme, double the reach."],
              ["Bridge to the wellness market", "The standing meditation community is far larger than the martial arts community. Use the scientific framing — isometric training, proprioception, musculoskeletal health — to reach wellness buyers who would never search for \"kung fu.\""],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Yiquan Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Internal Arts YouTube Community</h3>
              <p className="text-sm text-slate-600">
                Channels covering Taijiquan, Xingyiquan, and Chinese internal power development reach
                an audience already primed for Yiquan content. Side-by-side comparison with other
                standing practices drives strong engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Mindfulness and Meditation Platforms</h3>
              <p className="text-sm text-slate-600">
                Positioning zhan zhuang as standing meditation on mindfulness platforms and podcasts
                accesses a community orders of magnitude larger than martial arts. The entry point
                is accessible; the martial depth keeps advanced buyers engaged.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Sports Science and Strength Podcasts</h3>
              <p className="text-sm text-slate-600">
                Discussing the isometric training research alignment of Yiquan standing practice on
                sports science podcasts reaches performance athletes and coaches with genuine interest
                in novel strength development methodologies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Xingyiquan Networks</h3>
              <p className="text-sm text-slate-600">
                Wang Xiangzhai's Xingyiquan lineage makes Xingyiquan community channels a natural
                discovery pathway. The historical connection is authentic and the technical relationship
                is direct — a credible bridge to the existing Xingyiquan buyer community.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Yiquan Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Extended Static Holding</h3>
              <p className="text-sm text-slate-600">
                Standing postures held for progressively longer durations — beginning with minutes and
                building to sustained practice — develop deep structural strength and postural awareness
                through a demanding isometric challenge distinct from conventional training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Neurological Sensitivity Development</h3>
              <p className="text-sm text-slate-600">
                The shi li force testing practice develops proprioceptive sensitivity that practitioners
                describe as increasingly fine-grained awareness of force vectors and structural alignment.
                This is a neurological training adaptation that takes months to become consciously
                perceptible.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Whole-Body Integration Under Partner Resistance</h3>
              <p className="text-sm text-slate-600">
                Tui shou partner testing requires applying the whole-body connected power developed
                through solo practice against genuine resistance. The transfer from solo development to
                partner application is the most challenging phase of Yiquan training.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Yiquan Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your mind-intent boxing expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Xingyiquan Fitness Programs Online", "/blog/sell-masters-xingyiquan-fitness-programs-online"],
              ["Sell Masters Xinyi Liuhe Quan Fitness Programs Online", "/blog/sell-masters-xinyi-liuhe-quan-fitness-programs-online"],
              ["Sell Masters Baguazhang Fitness Programs Online", "/blog/sell-masters-baguazhang-fitness-programs-online"],
              ["Sell Masters Tai Chi Fitness Programs Online", "/blog/sell-masters-tai-chi-fitness-programs-online"],
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
