import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Judo Ne-Waza Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Judo ne-waza expertise. Creatdrop gives instructors the tools to sell groundwork programmes, Kosen judo newaza systems, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Judo Ne-Waza Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Judo ne-waza expertise. Creatdrop gives instructors the tools to sell groundwork programmes, Kosen judo newaza systems, and school licences to a global audience.",
  },
}

export default function JudoNeWazaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Judo Ne-Waza Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Judo Ne-Waza Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Ne-waza — the groundwork dimension of Judo — encompasses osae-komi-waza (holding techniques),
            shime-waza (strangulation techniques), and kansetsu-waza (joint-locking techniques, restricted
            to elbow locks in IJF competition). While the standing throwing game (tachi-waza) attracts most
            of Judo's public attention, the ground game represents an equally developed technical system
            with roots extending back to Jigoro Kano's direct study of classical jujutsu schools. The
            Kosen Judo tradition — practised in Japanese high school and university leagues where
            competitors can initiate ne-waza directly from standing — produced some of the most sophisticated
            groundwork methodology in any grappling art, with competitors regularly working for submissions
            from the earliest moments of a match.
          </p>
          <p>
            The historical link between Judo ne-waza and Brazilian Jiu-Jitsu is the sport's most compelling
            marketing narrative. Mitsuyo Maeda, a student of Jigoro Kano who competed in catch wrestling
            and no-holds-barred contests across Europe and the Americas, transmitted his Judo groundwork
            knowledge to the Gracie family in Brazil in the 1920s. That transmission became the foundation
            of Brazilian Jiu-Jitsu — and the tens of millions of BJJ practitioners worldwide constitute a
            built-in audience with a direct ancestral interest in Judo ne-waza. Senior Judoka who
            understand the Kosen tradition, the classical shime-waza catalogue, and the tachi-waza-to-ne-waza
            transition mechanics are producing content the BJJ community actively seeks.
          </p>
          <p>
            For online instructors, Judo ne-waza offers a rich and globally relevant content library.
            The technical depth of osae-komi transitions, the classical stranglehold catalogue (including
            techniques restricted in sport BJJ), and the distinctly Judo approach to transitions from
            throws directly into pinning or submission positions create content that complements and
            enriches BJJ, MMA, and submission grappling training. Creatdrop lets you reach that global
            audience with premium programmes positioned at the intersection of tradition and competitive
            application.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Judo Ne-Waza Programme Pricing</h2>
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
                  <td className="px-6 py-4">Osae-Komi Pinning System</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Classical holding techniques and transitions</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Shime-Waza Strangulation Programme</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Classical chokes including restricted sport techniques</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Tachi-Waza to Ne-Waza Transitions</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Following throws directly into ground control</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Kosen Judo Newaza System</td>
                  <td className="px-6 py-4">$127 – $197</td>
                  <td className="px-6 py-4">High school/university tradition ne-waza methodology</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$197 / year</td>
                  <td className="px-6 py-4">White-label for Judo dojo and grappling programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Ne-Waza Curriculum</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full groundwork system from pins through submissions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Judo Ne-Waza Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">BJJ Practitioners</h3>
              <p className="text-sm text-slate-600">
                The global BJJ community with a direct ancestral lineage through Mitsuyo Maeda.
                Tens of millions of practitioners worldwide with strong purchase intent for
                Judo groundwork content that illuminates their own system's origins.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Competitive Judoka</h3>
              <p className="text-sm text-slate-600">
                Tournament competitors seeking to improve ne-waza conversion rates and
                transition mechanics. The tachi-waza-to-ne-waza gap is one of the most
                commonly cited weaknesses in competitive Judo training programmes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">MMA and Submission Grapplers</h3>
              <p className="text-sm text-slate-600">
                Fighters and grapplers seeking the classical Judo stranglehold and pinning
                catalogue as a supplement to their BJJ base. Judo shime-waza includes
                techniques rarely covered in sport BJJ curriculum.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Judo Ne-Waza Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the BJJ origin story", "Mitsuyo Maeda → Carlos Gracie → Brazilian Jiu-Jitsu is the most compelling origin story in combat sports. Position your ne-waza programme as returning to the Judo source that spawned the world's largest grappling sport."],
              ["Demonstrate the tachi-waza transition advantage", "The seamless entry from a throw directly into a pin or submission is Judo's distinctive ne-waza contribution. Film throw-to-submission sequences that BJJ practitioners cannot achieve from guard-pull starts — this is your highest-impact content hook."],
              ["Publish and target the Kosen and competition networks", "Upload to Creatdrop and reach Judo federations, competition clubs, and the dedicated Kosen Judo online community globally. The competition Judo community is large, internationally connected, and actively seeking ne-waza improvement resources."],
              ["Position the classical shime-waza as premium content", "The classical strangulation catalogue — including techniques restricted or rarely taught in sport BJJ — carries genuine scarcity value. The classical techniques your BJJ students have never seen are your premium differentiation within the grappling market."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Judo Ne-Waza Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">BJJ YouTube and Podcast Circuit</h3>
              <p className="text-sm text-slate-600">
                The global BJJ media ecosystem — YouTube channels, podcasts, and publications —
                regularly features Judo-origin content. The Maeda-Gracie connection is perennially
                popular and creates a natural distribution pathway for ne-waza programmes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Judo Federation Networks</h3>
              <p className="text-sm text-slate-600">
                National and international Judo federation newsletters, coach education programmes,
                and club networks provide direct access to the competition Judo community. IJF-affiliated
                clubs are concentrated in Europe, Japan, and the Americas.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Submission Grappling Platforms</h3>
              <p className="text-sm text-slate-600">
                ADCC-style and submission grappling communities — including r/bjj, grappling
                podcasts, and tournament circuit networks — are receptive to Judo ne-waza content
                that expands the technical vocabulary beyond the standard BJJ catalogue.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">MMA Coaching Community</h3>
              <p className="text-sm text-slate-600">
                Mixed martial arts coaches increasingly integrate Judo-specific ne-waza into
                fighter preparation. The tachi-waza-to-ne-waza transition package has direct
                application in cage-side game-planning and generates strong purchase intent.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Judo Ne-Waza Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Ground Mobility and Hip Escape Conditioning</h3>
              <p className="text-sm text-slate-600">
                Effective ne-waza requires well-developed hip escape (shrimping), bridging, and
                turnover mechanics developed through specific mat conditioning drills. The positional
                strength for maintaining osae-komi pressure differs substantially from standing
                Judo conditioning requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Transition Speed Under Competitive Pressure</h3>
              <p className="text-sm text-slate-600">
                The 3–5 second window after a throw — before the opponent recovers posture — requires
                explosive transition mechanics developed through repetitive uchikomi-style ground entry
                drills. This time-sensitive conversion is the most athletically demanding aspect of
                competition ne-waza.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Strangulation Defence and Application Safety</h3>
              <p className="text-sm text-slate-600">
                Training shime-waza requires careful partner safety protocols — both the physiological
                tolerance development for receiving neck pressure and the technical precision to apply
                strangleholds safely at training intensity. Developing safe application consistency
                is a prerequisite for advanced shime-waza curriculum.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Judo Ne-Waza Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Judo groundwork expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Judo Fitness Programs Online", "/blog/sell-masters-judo-fitness-programs-online"],
              ["Sell Masters BJJ Fitness Programs Online", "/blog/sell-masters-bjj-fitness-programs-online"],
              ["Sell Masters Sambo Fitness Programs Online", "/blog/sell-masters-sambo-fitness-programs-online"],
              ["Sell Masters Daito-Ryu Aiki-Jujutsu Fitness Programs Online", "/blog/sell-masters-daito-ryu-aiki-jujutsu-fitness-programs-online"],
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
