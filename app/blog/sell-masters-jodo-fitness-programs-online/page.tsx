import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Jodo Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Jodo expertise. Creatdrop gives instructors the tools to sell Shindo Muso-ryu staff programmes, seitei jodo curricula, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Jodo Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Jodo expertise. Creatdrop gives instructors the tools to sell Shindo Muso-ryu staff programmes, seitei jodo curricula, and school licences to a global audience.",
  },
}

export default function JodoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Jodo Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Jodo Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Jodo — the way of the short staff — is a classical Japanese weapon art centred on the
            jo, a hardwood staff approximately 128 centimetres in length. The principal transmission
            is Shindo Muso-ryu, founded by Muso Gonnosuke in the early seventeenth century following
            his encounter with Miyamoto Musashi. The legend of Gonnosuke developing the jo specifically
            to defeat Musashi's ni-to (two-sword) technique is the founding narrative of the tradition
            and remains one of the most compelling origin stories in Japanese martial arts. Shindo
            Muso-ryu Jodo spread through police training in Fukuoka Prefecture and into the broader
            Japanese martial arts community, eventually becoming one of the arts regulated by the All
            Japan Kendo Federation under the seitei jodo curriculum.
          </p>
          <p>
            The All Japan Kendo Federation's seitei jodo programme — twelve standardised kata drawn
            from the Shindo Muso-ryu curriculum — created a formalised examination and grading
            structure that is now practised in Kendo federations worldwide. The global Kendo
            community, with its established infrastructure of dojos, federations, and competitive
            events in over sixty countries, is a natural buyer pool for Jodo instructional content.
            Many Kendo practitioners add Jodo to their Japanese martial arts study, and the seitei
            curriculum provides a clear structured learning pathway suited to online programme design.
          </p>
          <p>
            For online instructors, Jodo's clarity of structure — a defined kata curriculum with
            established grading sequences, examinations, and technical requirements — creates an
            exceptionally well-defined product architecture. Creatdrop lets you sell to the global
            Kendo federation network, Iaido practitioners adding weapons study, and the broader
            classical Japanese martial arts audience seeking high-quality jo instruction.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Jodo Programme Pricing</h2>
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
                  <td className="px-6 py-4">Jo Fundamentals and Kamae</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Basic grips, postures, and striking mechanics</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Seitei Jodo Kata Series (1–6)</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">First six ZNKR seitei kata with examination guidance</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Seitei Jodo Kata Series (7–12)</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Advanced seitei kata with principle analysis</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Shindo Muso-ryu Classical Curriculum</td>
                  <td className="px-6 py-4">$127 – $197</td>
                  <td className="px-6 py-4">Koryu kata beyond the seitei selection</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for Kendo federation and dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Jodo Examination Preparation</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full seitei curriculum with grading preparation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Jodo Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Kendo Federation Practitioners</h3>
              <p className="text-sm text-slate-600">
                Kendoka adding Jodo to their Japanese martial arts study through their federation's
                seitei programme. This is the highest-volume buyer pool — Kendo federation
                membership in sixty-plus countries provides direct access to the most motivated
                purchasers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Iaido Practitioners</h3>
              <p className="text-sm text-slate-600">
                Iaidoka who practise both sword and staff arts through Kendo federation grading
                structures. Many Iaido practitioners pursue concurrent Jodo study, creating
                natural crossover demand for qualified jo instruction.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Classical Japanese Arts Students</h3>
              <p className="text-sm text-slate-600">
                Koryu practitioners and Japanese martial arts students adding staff training
                to their weapons curriculum. The Shindo Muso-ryu lineage's historical depth
                and the Musashi connection attract the classical arts community specifically.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Jodo Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the Musashi origin story", "Muso Gonnosuke developing the jo specifically to defeat Miyamoto Musashi — the most famous swordsman in Japanese history — is one of the most compelling founding narratives in classical Japanese martial arts. Use it as your primary hook into the Japanese martial arts audience."],
              ["Structure around seitei examination preparation", "The ZNKR seitei jodo curriculum gives you a natural product architecture: foundations, kata 1–6, kata 7–12, and grading preparation. Students with upcoming examinations have strong purchase urgency. Position your programme explicitly for examination preparation."],
              ["Publish and target Kendo federation networks", "Upload to Creatdrop and reach Kendo federation clubs and practitioners through national federation newsletters, jodo seminars, and the active international Kendo community. The seitei connection gives you direct access to the organised federation distribution channel."],
              ["Film with a sword partner to demonstrate the paired kata", "Jodo kata involve both jo and sword (tachi). Film every kata with a qualified partner demonstrating the sword role — the paired nature of the forms is essential context and creates visually rich content that distinguishes serious instruction from solo demonstrations."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Jodo Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Kendo Federation Communications</h3>
              <p className="text-sm text-slate-600">
                National Kendo federation newsletters, club communications, and seminar
                announcements are the highest-concentration distribution channels for
                seitei jodo content. These communities have established infrastructure
                and motivated practitioners with examination preparation needs.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Iaido and Koryu Online Communities</h3>
              <p className="text-sm text-slate-600">
                E-Budo, Iaido-specific Facebook groups, and classical Japanese arts online
                communities provide direct access to the crossover audience of Iaidoka and
                koryu practitioners with adjacent interest in staff arts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Japanese Martial History Podcasts</h3>
              <p className="text-sm text-slate-600">
                The Miyamoto Musashi connection makes Jodo content unusually accessible on
                martial history podcasts and Japanese culture channels. Musashi remains one
                of the most searched figures in Japanese martial arts — and Jodo is the art
                that claims to have defeated him.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Weapons Arts YouTube Community</h3>
              <p className="text-sm text-slate-600">
                Jo and staff arts content performs well on YouTube channels covering classical
                Japanese weapons, budo, and martial arts. The staff's visual range and the
                paired kata format create compelling footage that attracts organic discovery.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Jodo Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Grip Strength and Staff Control</h3>
              <p className="text-sm text-slate-600">
                Precise jo handling across thrusting, striking, blocking, and sweeping techniques
                demands specific grip and forearm strength development. The varied hand positions
                and transitions across seitei kata create a distinct conditioning demand from
                sword or empty-hand training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Footwork and Stepping Under Pressure</h3>
              <p className="text-sm text-slate-600">
                Jodo footwork involves large stepping patterns coordinated with staff technique —
                developing the timing to step, block, and counter within the paired kata sequence
                requires sustained repetitive partner drilling across all twelve seitei forms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Bilateral Striking Mechanics</h3>
              <p className="text-sm text-slate-600">
                Jo techniques require both leading and trailing hand to perform full-power strikes
                and thrusts from both sides of the body. Developing balanced bilateral power and
                the structural alignment for effective staff strikes is a specific conditioning
                requirement distinct from single-weapon arts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Jodo Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your classical staff arts expertise into a global online programme —
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
              ["Sell Masters Kenjutsu Fitness Programs Online", "/blog/sell-masters-kenjutsu-fitness-programs-online"],
              ["Sell Masters Naginata Fitness Programs Online", "/blog/sell-masters-naginata-fitness-programs-online"],
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
