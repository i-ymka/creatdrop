import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Carpet Bowls Fitness Programs Online | Creatdrop",
  description:
    "Reach masters carpet bowls players aged 55–85+ competing in BCGBA and regional indoor circuits. Sell back health and delivery conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Carpet Bowls Fitness Programs Online | Creatdrop",
    description:
      "Reach masters carpet bowls players aged 55–85+ competing in BCGBA and regional indoor circuits. Sell back health and delivery conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersCarpetBowlsFitnessPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-slate-100 bg-slate-50 px-4 py-3">
        <div className="mx-auto max-w-4xl">
          <ol className="flex flex-wrap gap-1 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-violet-600">
                Home
              </Link>
            </li>
            <li className="before:mx-1 before:content-['/']">
              <Link href="/blog" className="hover:text-violet-600">
                Blog
              </Link>
            </li>
            <li className="before:mx-1 before:content-['/'] text-slate-800 font-medium">
              Sell Masters Carpet Bowls Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Carpet Bowls Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Carpet bowls occupies a significant but almost invisible corner of the UK indoor sport
            landscape. Played on a specially woven carpet rather than grass or an outdoor surface,
            the game is administered nationally by the British Carpet Bowls Association (BCGBA)
            and maintains an active competitive structure through thousands of clubs based in village
            halls, sports centres, and social clubs across England, Wales, and Scotland. The typical
            competitive player is aged 55 to 85, competes weekly in league fixtures through autumn
            and winter, and has often played continuously for two or three decades. This demographic
            is highly engaged with their sport, has disposable income, and is acutely aware of the
            back, hip, and knee demands that accumulate over years of the characteristic carpet
            bowls delivery crouch.
          </p>
          <p>
            The physical challenge is specific and consistent across all skill levels. Every carpet
            bowls delivery requires the player to lower into a partial squat or forward lunge,
            extend the arm in a controlled pendulum swing, and release the wood at ankle height
            while maintaining balance. Repeated over a two-hour match with multiple ends, this
            movement pattern places significant cumulative load on lumbar extensors, hip flexors,
            and knee extensors — particularly for players who have not maintained supplementary
            conditioning as they age. A fitness program built around exactly these demands, framed
            in the language of staying competitive and injury-free in carpet bowls specifically,
            will resonate immediately with a community that has almost no dedicated sports science
            support available to them.
          </p>
          <p>
            Creatdrop lets you turn that specialist knowledge into a recurring revenue stream without
            the complexity of building a full coaching business from scratch. Upload your program,
            set your subscription price, and earn monthly income from players who subscribe to stay
            fit for their league season. The carpet bowls community is geographically concentrated
            in England and Scotland, easy to reach through BCGBA club directories and county
            association newsletters, and culturally predisposed to support coaches who understand
            their sport deeply. You do not need a large social media following — you need a direct
            connection to two or three county associations, and word of mouth handles the rest.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Carpet Bowls Programs
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Tier</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">Price / Month</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">What&apos;s Included</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Starter</td>
                  <td className="px-4 py-3 text-slate-600">$19</td>
                  <td className="px-4 py-3 text-slate-600">Back and hip mobility protocol + delivery warm-up routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$37</td>
                  <td className="px-4 py-3 text-slate-600">Full seasonal conditioning plan + video tutorials + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Competition Prep</td>
                  <td className="px-4 py-3 text-slate-600">$57</td>
                  <td className="px-4 py-3 text-slate-600">8-week pre-championship block + match-day recovery guide</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Annual Starter</td>
                  <td className="px-4 py-3 text-slate-600">$190</td>
                  <td className="px-4 py-3 text-slate-600">Two months free, full year access to Starter content</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Annual Core</td>
                  <td className="px-4 py-3 text-slate-600">$370</td>
                  <td className="px-4 py-3 text-slate-600">Two months free, full year access to Core content</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Club Licence</td>
                  <td className="px-4 py-3 text-slate-600">$127</td>
                  <td className="px-4 py-3 text-slate-600">Up to 12 club members, club captain dashboard, group resources</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market Segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who You&apos;re Reaching</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">BCGBA League Competitors</h3>
              <p className="text-sm text-slate-600">
                The British Carpet Bowls Association organises county and national championships
                drawing players from hundreds of affiliated clubs. Competitors aged 55–80+ play
                through an October-to-April indoor season and often combine carpet bowls with
                outdoor bowls in summer. These athletes are physically active and motivated but
                have essentially zero access to sport-specific conditioning advice.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Retirement Home & Leisure Centre Players</h3>
              <p className="text-sm text-slate-600">
                Carpet bowls is one of the most widely played recreational sports in UK retirement
                communities and local authority leisure centres. Activity coordinators who supervise
                these sessions are institutional buyers: a single licence covering a facility&apos;s
                carpet bowls participants is an easy sell to a coordinator whose job is to keep
                residents active and injury-free. This B2B channel requires minimal marketing effort.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Outdoor Bowls Crossover</h3>
              <p className="text-sm text-slate-600">
                A significant proportion of carpet bowls players also compete in outdoor lawn bowls
                during the summer season. These dual-sport players are already searching for
                conditioning content for their outdoor game and will immediately recognise the value
                of a program that addresses the shared delivery mechanics and joint demands across
                both formats. Targeting lawn bowls communities brings carpet bowls subscribers as
                a natural adjacent conversion.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Carpet Bowls Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Build around the delivery crouch and lumbar load",
                body: "The carpet bowls delivery places the spine in sustained forward flexion at end range while the arm extends forward — a posture that accumulates strain across a full match for players without adequate posterior chain strength and hip mobility. Design your foundation block around lumbar extensor endurance, hip flexor length, and knee stability for the delivery lunge. Name these outcomes explicitly in your program description and marketing copy.",
              },
              {
                n: "2",
                title: "Contact BCGBA county associations directly",
                body: "The BCGBA website lists county associations across England, Wales, and Scotland. Each association administers multiple clubs and communicates regularly with members via email newsletters and AGM circulars. A brief letter to three or four county secretaries offering a free 30-day trial for members in exchange for a mention in the next communication generates targeted leads within weeks at zero advertising cost.",
              },
              {
                n: "3",
                title: "Pitch to leisure centre activity coordinators",
                body: "Local authority leisure centres and retirement housing providers employ activity coordinators specifically tasked with keeping residents active. A short pitch positioning your program as a safety and wellbeing resource — framed around fall prevention and joint health rather than athletic performance — aligns perfectly with coordinator objectives and procurement budgets. A single facility licence at £100–150 per year is easily justified as a wellbeing service cost.",
              },
              {
                n: "4",
                title: "Create the definitive carpet bowls warm-up video",
                body: "Search YouTube for \"carpet bowls warm up\" or \"carpet bowls fitness\" and you will find nothing useful. A single well-produced 8-minute warm-up video specifically for carpet bowls players — mentioning the delivery crouch, hip flexor stretch, and wrist loosening — will rank immediately for these uncontested searches and serve as the top-of-funnel entry point to your subscription program for years.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {step.n}
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-slate-800">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marketing Channels */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Marketing Channels That Work</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">BCGBA Club Network</h3>
              <p className="text-sm text-slate-600">
                The BCGBA publishes affiliated club directories and county association contacts
                publicly. Direct outreach to county secretaries and club officers is the highest-ROI
                channel for reaching carpet bowls competitors. These administrators communicate
                regularly with their members and are typically welcoming of resources that help
                keep players healthy and participating longer — which directly benefits club
                membership retention.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Facebook Groups for Indoor Bowls</h3>
              <p className="text-sm text-slate-600">
                UK indoor bowls and carpet bowls Facebook groups have active memberships in the
                thousands. Players share match results, club news, and tips in these communities.
                Contributing genuinely useful conditioning advice — a hip stretch video, a post about
                managing lower back stiffness after a long match — builds credibility before you
                mention your subscription program, and the organic reach within tight-knit bowls
                communities is high.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Bowls International Magazine</h3>
              <p className="text-sm text-slate-600">
                Bowls International covers both outdoor and indoor bowls formats including carpet
                bowls. The magazine accepts editorial contributions and fitness-related content
                from credentialed coaches. A single feature article about injury prevention for
                carpet bowls players — with a reference to your Creatdrop subscription program —
                reaches a highly qualified readership of committed older adult bowls enthusiasts
                across the UK.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Local Authority Sport & Wellbeing Teams</h3>
              <p className="text-sm text-slate-600">
                UK local authorities employ sport and active ageing coordinators who manage
                programmes across leisure centres and community facilities. These teams actively
                seek wellbeing resources for older adult participants. Positioning your program
                as a digital supplement to existing carpet bowls sessions — something participants
                can do at home between weekly club meetings — gives coordinators a simple add-on
                to offer residents without requiring budget for in-person coaching.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Carpet Bowls Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be among the first creators to launch when we open.
            Recurring revenue from one of the UK&apos;s most loyal and underserved sport communities.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-lawn-bowls-fitness-programs-online",
                title: "Sell Masters Lawn Bowls Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-indoor-bowls-fitness-programs-online",
                title: "Sell Masters Indoor Bowls Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-shuffleboard-fitness-programs-online",
                title: "Sell Masters Shuffleboard Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-bocce-fitness-programs-online",
                title: "Sell Masters Bocce Fitness Programs Online",
              },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group block rounded-2xl border border-slate-200 p-6 hover:border-violet-200 hover:bg-violet-50 transition-colors"
              >
                <span className="font-medium text-slate-800 group-hover:text-violet-700">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
