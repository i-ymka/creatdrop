import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Quoits Fitness Programs Online | Creatdrop",
  description:
    "Reach masters quoits players aged 45–80+ competing in World Quoits Association and British regional circuits. Sell shoulder health and throwing mechanics programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Quoits Fitness Programs Online | Creatdrop",
    description:
      "Reach masters quoits players aged 45–80+ competing in World Quoits Association and British regional circuits. Sell shoulder health and throwing mechanics programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersQuoitsFitnessPage() {
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
              Sell Masters Quoits Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Quoits Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Quoits has a longer competitive history in Britain and Australia than almost any other
            target-throwing sport, and its masters circuit is very much alive. The World Quoits
            Association runs international competitions attracting players from the UK, Australia,
            Canada, and South Africa, while the Northern England regional leagues — particularly
            in County Durham, Northumberland, and Yorkshire — maintain their own championship
            circuits that draw dedicated players well into their 70s. Unlike horseshoes or petanque,
            quoits uses a heavier metal ring on a much shorter pitch, demanding a precise throwing
            arc that places repeating rotational load on the shoulder and wrist with every delivery.
            Masters players who compete regularly accumulate that stress over decades.
          </p>
          <p>
            The fitness opportunity is narrow enough to own completely. A coach who understands
            quoits-specific mechanics — the underarm throw, the board pin, the wrist-supination
            that controls ring landing — and builds a program around rotator cuff resilience, wrist
            mobility, and hip stability for the delivery stance can offer something genuinely novel.
            Currently there is almost no sports-specific conditioning content for quoits players
            anywhere online. That absence is your market entry: you become the default resource simply
            by being first with credible, targeted material. And because masters quoits players tend
            to compete within tight regional league structures, word-of-mouth through a single league
            secretary or club officer can cascade your program to dozens of paying members quickly.
          </p>
          <p>
            Creatdrop provides the platform infrastructure that makes this viable without requiring
            technical setup or large upfront investment. You create your programs, set subscription
            pricing, and receive recurring monthly revenue from players who stay subscribed for the
            competitive season and beyond. The masters quoits community may be small globally, but
            it is remarkably concentrated in defined geographic and online communities — county
            league websites, Facebook groups, and club newsletters — where a single well-placed
            partnership or editorial feature can generate a committed subscriber base that sustains
            a meaningful side income or full coaching practice.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Quoits Programs
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
                  <td className="px-4 py-3 text-slate-600">Shoulder prehab protocol + wrist mobility routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$37</td>
                  <td className="px-4 py-3 text-slate-600">Full seasonal training plan + video technique cues + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Competition Prep</td>
                  <td className="px-4 py-3 text-slate-600">$57</td>
                  <td className="px-4 py-3 text-slate-600">10-week pre-championship block + injury-prevention checklist</td>
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
                  <td className="px-4 py-3 font-medium text-slate-800">League Licence</td>
                  <td className="px-4 py-3 text-slate-600">$147</td>
                  <td className="px-4 py-3 text-slate-600">Up to 12 league members, secretary dashboard, group resources</td>
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
              <h3 className="mb-2 font-semibold text-slate-800">Northern England League Players</h3>
              <p className="text-sm text-slate-600">
                County Durham, Northumberland, and Yorkshire host the densest concentration of
                competitive quoits in the world. Players aged 45–80+ compete in weekly league
                fixtures from spring through autumn. These athletes are deeply committed to their
                sport and respond well to conditioning programs framed around staying healthy for
                the full season rather than general fitness goals.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Australian & Canadian Masters</h3>
              <p className="text-sm text-slate-600">
                Australia and Canada maintain quoits traditions through regional associations
                and club networks. WQA international competitors from these countries tend to be
                older adult athletes (50–75+) who travel to championships specifically and maintain
                structured training between events. Digital program delivery suits this dispersed
                audience perfectly — they cannot access local specialist coaching.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Adjacent Throwing Sport Crossover</h3>
              <p className="text-sm text-slate-600">
                Masters horseshoes, petanque, and bocce players share similar shoulder and wrist
                demands with quoits and regularly seek conditioning resources. A program framed
                around &quot;overhead and underarm throwing sport shoulder health&quot; naturally
                attracts all four communities while your quoits-specific content differentiates
                you within the quoits league networks.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Quoits Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Design around the quoits delivery arc",
                body: "The standard quoits underarm throw requires internal shoulder rotation, wrist supination through release, and hip lateral shift as weight transfers. Build your foundational program unit around maintaining this biomechanical chain through a full season of weekly competition. Rotator cuff endurance, wrist flexor-extensor balance, and hip abductor strength are the three pillars. Name these explicitly in your program descriptions — players who recognise their sport&apos;s demands will convert immediately.",
              },
              {
                n: "2",
                title: "Reach county league secretaries directly",
                body: "Northern England quoits leagues are administered by elected secretaries who communicate weekly with all members. A single email to a league secretary offering a 30-day free trial for league members in exchange for a mention in the next circular reaches more targeted prospects than months of social media content. Identify three or four leagues in Durham and Northumberland and make direct contact before the season starts.",
              },
              {
                n: "3",
                title: "Publish the only quoits conditioning content on YouTube",
                body: "Search YouTube for \"quoits fitness\" or \"quoits conditioning\" and you will find essentially nothing. Three to four short videos — shoulder warm-up for quoits, wrist mobility drill, hip flexibility for delivery, season-end recovery routine — will rank for these uncontested searches within weeks. Each video links to your Creatdrop subscription page. This is the lowest-competition content gap in any target sport category.",
              },
              {
                n: "4",
                title: "Partner with quoits equipment retailers",
                body: "A small number of UK retailers supply quoits sets and pitch boards to clubs and individuals. These retailers email their customer lists regularly and are often open to editorial partnerships — a conditioning resource email in exchange for mentioning your program to their buyers. Customers purchasing new equipment are motivated beginners and returning competitors, both of whom are excellent subscription prospects.",
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
              <h3 className="mb-2 font-semibold text-slate-800">County League Websites & Newsletters</h3>
              <p className="text-sm text-slate-600">
                Durham Quoits Association, Northumberland Quoits Association, and their Yorkshire
                counterparts maintain active websites and distribute results and news to members
                weekly. A sponsored mention in a league newsletter or a guest post about injury
                prevention for quoits players on a league website reaches exactly the competitive
                adults who are most likely to subscribe to your program.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">World Quoits Association Channels</h3>
              <p className="text-sm text-slate-600">
                The WQA communicates with member federations ahead of international championships.
                Positioning yourself as the conditioning resource for masters competitors attending
                World Championships — even just a free warm-up guide distributed via WQA channels —
                establishes credibility across multiple national federations simultaneously and
                reaches the most dedicated international competitors.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Facebook Groups for Traditional Sports</h3>
              <p className="text-sm text-slate-600">
                Facebook groups for quoits, horseshoes, petanque, and traditional British outdoor
                sports include several thousand members across overlapping communities. Regular
                contribution of free tips — shoulder stretches before a league match, recovery
                advice after a long competition day — builds authority before you promote your
                subscription program, and the crossover with adjacent throwing sports multiplies
                your organic reach.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">YouTube — Uncontested Niche Search</h3>
              <p className="text-sm text-slate-600">
                Quoits conditioning content on YouTube is essentially zero. Any video targeting
                the keyword &quot;quoits training&quot; or &quot;quoits fitness&quot; will rank
                immediately with no competition. A series of four to six short videos covering
                shoulder health, wrist mobility, and match-day preparation is achievable in a
                single filming day and creates a permanent organic acquisition channel that runs
                without ongoing advertising spend.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Quoits Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first to launch when we open. Recurring revenue from
            the most underserved throwing sport community in the UK and beyond.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-horseshoes-fitness-programs-online",
                title: "Sell Masters Horseshoes Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-petanque-fitness-programs-online",
                title: "Sell Masters Petanque Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-bocce-fitness-programs-online",
                title: "Sell Masters Bocce Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-lawn-bowls-fitness-programs-online",
                title: "Sell Masters Lawn Bowls Fitness Programs Online",
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
