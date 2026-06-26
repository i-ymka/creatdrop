import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Shinty Fitness Programs Online | Creatdrop",
  description:
    "Reach masters shinty players aged 30–55+ competing in Camanachd Association veterans grades across the Scottish Highlands and Scottish diaspora. Sell shoulder health and running conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Shinty Fitness Programs Online | Creatdrop",
    description:
      "Reach masters shinty players aged 30–55+ competing in Camanachd Association veterans grades across the Scottish Highlands and Scottish diaspora. Sell shoulder health and running conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersShintyfFitnessPage() {
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
              Sell Masters Shinty Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Shinty Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Shinty is one of Scotland&apos;s oldest field sports — a full-contact stick-and-ball
            game administered by the Camanachd Association that commands fierce loyalty in the
            Scottish Highlands, particularly in Argyll, Lochaber, Inverness-shire, and Skye.
            Unlike hurling, its Irish cousin with which it shares ancient roots, shinty allows
            overhead striking of the ball and full physical contact with opponents, making it one
            of the most physically demanding amateur sports played at a club level anywhere in
            the British Isles. Veterans and masters grades for players aged 35 and older exist
            within the Camanachd Association structure, and the Scottish diaspora — in cities
            like Glasgow, Edinburgh, London, and in North American and Antipodean communities —
            maintains shinty clubs that field veterans teams in local competitions.
          </p>
          <p>
            The conditioning demands of shinty are substantial and distinct. The caman (stick)
            is used for both ground-level and overhead striking, requiring shoulder mobility and
            rotator cuff resilience across a wider arc than hurling demands. The overhead strike
            in shinty is legally permitted and commonly used, adding a further dimension of
            shoulder stress that accumulates over a playing career of 20 or more years. Hamstring
            and hip flexor health for repeated high-intensity running on often uneven Highland
            pitches, wrist and forearm conditioning for sustained caman grip and impact, and
            cervical spine health from physical contact are all specific concerns for masters
            shinty players. A conditioning program that addresses these demands in the language
            of shinty — referencing the caman, the hail, and the specific physical challenges
            of Highland pitch conditions — will immediately establish credibility in a community
            that values cultural specificity highly.
          </p>
          <p>
            The shinty community is small, geographically concentrated, and deeply connected.
            Word travels fast through Camanachd Association club networks, Highland games circuits,
            and the diaspora organisations that keep shinty alive outside Scotland. Creatdrop
            gives you the platform to turn specialist knowledge of this unique sport into a
            subscription income from players who have waited decades for a conditioning coach
            who actually understands what they play. The audience may be niche, but the loyalty
            and word-of-mouth potential within a tight-knit Highland sporting community is
            exceptionally high.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Shinty Programs
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
                  <td className="px-4 py-3 text-slate-600">$27</td>
                  <td className="px-4 py-3 text-slate-600">Shoulder prehab protocol + hamstring and calf routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$47</td>
                  <td className="px-4 py-3 text-slate-600">Full season conditioning plan + video drills + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Championship Prep</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                  <td className="px-4 py-3 text-slate-600">10-week Camanachd Cup prep block + contact sport recovery guide</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Annual Starter</td>
                  <td className="px-4 py-3 text-slate-600">$270</td>
                  <td className="px-4 py-3 text-slate-600">Two months free, full year access to Starter content</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Annual Core</td>
                  <td className="px-4 py-3 text-slate-600">$470</td>
                  <td className="px-4 py-3 text-slate-600">Two months free, full year access to Core content</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Club Licence</td>
                  <td className="px-4 py-3 text-slate-600">$157</td>
                  <td className="px-4 py-3 text-slate-600">Up to 15 club members, coach dashboard, group resources</td>
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
              <h3 className="mb-2 font-semibold text-slate-800">Highland Club Veterans Players</h3>
              <p className="text-sm text-slate-600">
                Camanachd Association clubs in Lochaber, Inverness, Argyll, Skye, and Sutherland
                field veterans teams in regional competitions. Players aged 35–55+ who have
                played shinty since youth and continue competing at club level are the primary
                target. These athletes are deeply committed to their sport, physically active,
                and have no access to conditioning coaches who understand shinty&apos;s specific
                demands.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Scottish Diaspora Shinty Clubs</h3>
              <p className="text-sm text-slate-600">
                Shinty clubs operate in Glasgow, Edinburgh, London, and in North American and
                Australian cities with significant Scottish diaspora populations. These clubs
                field players who grew up playing shinty in the Highlands and continue the sport
                abroad. Geographically isolated from Highland coaching infrastructure, they are
                the strongest candidates for a digital subscription program that delivers
                specialist conditioning regardless of location.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Shinty-Hurling Crossover Players</h3>
              <p className="text-sm text-slate-600">
                International shinty-hurling rules matches between Scotland and Ireland are played
                annually, and players from both sports sometimes compete in both codes. Conditioning
                content that explicitly bridges the two sports — noting the additional overhead
                strike demands in shinty versus hurling — reaches the hurling conditioning audience
                while differentiating your shinty expertise, effectively doubling your organic
                reach within the Celtic stick-sport community.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Shinty Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Design around the overhead strike and contact demands",
                body: "Shinty&apos;s permitted overhead caman strike creates rotator cuff and AC joint loading that hurling conditioning programs do not address — this is your primary differentiator. Build your foundation block around overhead shoulder stability, wrist extensor endurance for sustained caman grip, and hamstring resilience for the sprint-contact-sprint demands of Highland pitch play. Name the caman, the overhead hail, and the uneven Highland pitch surface explicitly in your program language — this sport-specific vocabulary converts shinty players immediately.",
              },
              {
                n: "2",
                title: "Contact Camanachd Association clubs through their published directories",
                body: "The Camanachd Association publishes affiliated club contact information and communicates with clubs through newsletters and the annual Camanachd Cup cycle. A direct email to veterans committee contacts in five or six clubs — offering a free 30-day trial in exchange for a club newsletter mention — generates targeted leads through the most trusted communication channel in the sport. A single Highland club endorsement cascades through the tightly connected community quickly.",
              },
              {
                n: "3",
                title: "Engage Shinty Media and the Oban Times",
                body: "The Oban Times is the primary print and digital media outlet for Highland sport including shinty. Shinty Media (shintymedia.co.uk) covers the sport online. A guest article about veterans player conditioning — framed around keeping Highland club stalwarts on the pitch into their 40s and 50s — reaches the full engaged shinty readership and establishes your authority as the conditioning resource for the sport before you promote your subscription program directly.",
              },
              {
                n: "4",
                title: "Bridge to the hurling audience for organic growth",
                body: "The annual shinty-hurling international series creates a natural content bridge between both sports. A post or video about the conditioning differences between the two sports — what shinty players need that hurling programs miss — reaches the larger hurling conditioning audience while showcasing your shinty expertise. This cross-sport content converts shinty-curious hurling players and attracts dual-code athletes from both communities to your program simultaneously.",
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
              <h3 className="mb-2 font-semibold text-slate-800">Shinty Media & Oban Times</h3>
              <p className="text-sm text-slate-600">
                Shinty Media (shintymedia.co.uk) and the Oban Times are the two primary editorial
                outlets covering the sport. Both welcome contributed content from coaches and
                sports professionals with credible expertise. A feature on masters shinty
                conditioning — with a reference to your Creatdrop program — reaches every
                engaged shinty follower in Scotland and the diaspora through the sport&apos;s
                own media channels.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Camanachd Association Social Media</h3>
              <p className="text-sm text-slate-600">
                The Camanachd Association and its affiliated clubs maintain active Facebook,
                Instagram, and Twitter presences that collectively reach every competitive
                shinty player in Scotland. A tagged collaboration post or a shared conditioning
                resource from the Association&apos;s own channels carries the implicit endorsement
                of the governing body — the highest-value signal in a sport where institutional
                credibility matters enormously.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">YouTube — Total Content Vacuum</h3>
              <p className="text-sm text-slate-600">
                Shinty conditioning content on YouTube does not exist in any meaningful form.
                A video titled &quot;Shinty fitness for veterans players&quot; or &quot;shoulder
                health for shinty&quot; will rank immediately for zero-competition searches and
                remain the definitive reference for any shinty player who searches for conditioning
                help. This channel requires only production effort to own permanently.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Highland Games & Cultural Events</h3>
              <p className="text-sm text-slate-600">
                Highland games events across Scotland and in diaspora communities attract shinty
                players and enthusiasts as a culturally adjacent audience. Exhibiting or presenting
                at a Highland games — even a short demonstration of shinty-specific conditioning
                exercises — creates in-person credibility with the exact community you want to
                reach, and the tight social bonds of Highland culture mean that personal
                recommendations from this context spread rapidly through club networks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Shinty Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first when we open. Recurring revenue from one of
            Scotland&apos;s most loyal sporting communities — and a global diaspora that keeps
            the caman alive far from the Highlands.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-hurling-fitness-programs-online",
                title: "Sell Masters Hurling Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-gaelic-games-fitness-programs-online",
                title: "Sell Masters Gaelic Games Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-lacrosse-fitness-programs-online",
                title: "Sell Masters Lacrosse Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-cricket-fitness-programs-online",
                title: "Sell Masters Cricket Fitness Programs Online",
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
