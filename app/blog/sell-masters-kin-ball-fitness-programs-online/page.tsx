import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Kin-Ball Fitness Programs Online | Creatdrop",
  description:
    "Reach masters kin-ball players aged 35–60+ competing in FIKB World Championships across Canada, Japan, and Belgium. Sell shoulder and hip conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Kin-Ball Fitness Programs Online | Creatdrop",
    description:
      "Reach masters kin-ball players aged 35–60+ competing in FIKB World Championships across Canada, Japan, and Belgium. Sell shoulder and hip conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersKinBallFitnessPage() {
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
              Sell Masters Kin-Ball Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Kin-Ball Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Kin-ball is one of the most unusual sports with a serious competitive structure. Invented
            in Canada in 1986 and now governed by the International Kin-Ball Federation (FIKB),
            it is played with a 1.2-metre diameter ball weighing 1 kilogram by three teams of four
            simultaneously on the same court. The FIKB runs World Championships that draw national
            teams from Canada, Japan, Belgium, Spain, and other member nations, and both schools
            and adult recreational leagues operate in over thirty countries. A masters category for
            players aged 35 and older has been growing steadily, particularly in Canada and Japan
            where the sport has deepest institutional roots and where adult recreational leagues
            feed naturally into masters competition.
          </p>
          <p>
            The physical demands of kin-ball are significant and specific. Because the ball is so
            large, all serves and hits require both arms fully extended overhead, demanding substantial
            shoulder stability and rotator cuff endurance. Defensive movements involve rapid lateral
            shuffling, diving, and floor-level recovery — placing significant demand on hip mobility,
            inner thigh resilience, and core stability under reactive load. Masters players who
            compete into their 40s and 50s without structured conditioning are particularly vulnerable
            to rotator cuff strains and hip flexor injuries from these repeated overhead and
            floor-to-standing transitions. A conditioning program built specifically for kin-ball
            movement patterns has essentially no competition anywhere online.
          </p>
          <p>
            Creatdrop gives kin-ball fitness coaches a direct-to-athlete subscription platform
            without the friction of building a custom membership site or managing payments manually.
            Because the global kin-ball community is relatively small and geographically concentrated,
            a targeted launch focused on Canadian and Japanese recreational league communities can
            generate a committed subscriber base of 50 to 100 paying members within the first season.
            At $37 per month, that represents a meaningful recurring income from a sport niche where
            you have no direct competition and every player is looking for conditioning resources
            that understand their specific sport.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Kin-Ball Programs
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
                  <td className="px-4 py-3 text-slate-600">Shoulder prehab protocol + hip mobility routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$47</td>
                  <td className="px-4 py-3 text-slate-600">Full in-season training plan + video breakdowns + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Competition Prep</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                  <td className="px-4 py-3 text-slate-600">10-week World Championships block + recovery protocol</td>
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
                  <td className="px-4 py-3 font-medium text-slate-800">Team Licence</td>
                  <td className="px-4 py-3 text-slate-600">$157</td>
                  <td className="px-4 py-3 text-slate-600">Up to 8 team members, coach access, group check-ins</td>
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
              <h3 className="mb-2 font-semibold text-slate-800">Canadian Adult League Players</h3>
              <p className="text-sm text-slate-600">
                Canada is the birthplace of kin-ball and maintains the largest adult recreational
                league structure outside of schools. Quebec and Ontario have established adult and
                masters leagues with players competing through their 40s and 50s. These athletes
                are the most likely early adopters for a kin-ball-specific conditioning subscription —
                they play seriously, understand training, and have the disposable income to invest.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Japanese Kin-Ball Community</h3>
              <p className="text-sm text-slate-600">
                Japan has the second-largest kin-ball infrastructure globally, with a national
                federation (Japan Kin-Ball Sport Federation) and active adult leagues alongside the
                school competition structure. Japanese adult players are enthusiastic about structured
                conditioning programs and highly likely to subscribe to sport-specific digital content
                from credentialed coaches. A Japanese-language landing page or subtitled videos
                expand this market substantially.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">European FIKB Competitors</h3>
              <p className="text-sm text-slate-600">
                Belgium, Spain, and Switzerland maintain national kin-ball federations that compete
                at FIKB World Championships. Masters-age players from these countries travel to
                international events and maintain year-round training schedules. English-language
                conditioning programs accessible via digital subscription are the easiest format
                for these dispersed European competitors to consume between national training camps.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Kin-Ball Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Design around overhead hitting and floor recovery",
                body: "The two movement patterns that create most injury risk in kin-ball are the bilateral overhead serve — requiring shoulder external rotation strength and scapular stability — and the floor-level dive-and-recover sequence — requiring hip adductor resilience and rapid hip flexion. Build your foundation block around these two demands explicitly. Include video demonstrations that use kin-ball footage to make the connection between exercise and sport movement immediately obvious to players.",
              },
              {
                n: "2",
                title: "Reach FIKB national federations before World Championships",
                body: "The FIKB publishes a calendar of World Championships and member federation contacts. Reaching out to national federation coaches and fitness directors three to four months before a World Championships cycle — offering a free conditioning resource for competing teams — establishes your name within the international kin-ball community before the highest-engagement competitive period. Even one national team that uses your material will generate organic referrals across the federation network.",
              },
              {
                n: "3",
                title: "Target Quebec and Ontario league administrators",
                body: "The Fédération de Kin-Ball du Québec and Ontario kin-ball associations are the most accessible entry points into the world&apos;s largest adult kin-ball player base. League administrators manage club communications and are actively looking for resources that support player health and retention. A single conversation with a league coordinator can result in your program being recommended to hundreds of adult players across multiple seasons.",
              },
              {
                n: "4",
                title: "Create YouTube content in the kin-ball conditioning vacuum",
                body: "Search for \"kin-ball fitness\" or \"kin-ball training\" on YouTube and you will find almost nothing targeting adult or masters players. A series of four to six videos — shoulder warm-up for kin-ball, hip mobility for court movement, core stability for overhead hitting — will immediately rank for these searches with no competition. Each video links back to your Creatdrop subscription, turning organic search traffic into a self-sustaining subscriber acquisition channel.",
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
              <h3 className="mb-2 font-semibold text-slate-800">FIKB & National Federation Newsletters</h3>
              <p className="text-sm text-slate-600">
                The International Kin-Ball Federation and national member federations publish
                newsletters and social media updates reaching all competitive players globally.
                A guest contribution about masters conditioning or injury prevention — positioned
                as supporting player longevity at the competitive level — reaches exactly the
                audience that is most motivated to subscribe to a sport-specific fitness program.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Facebook & Social Groups for Kin-Ball</h3>
              <p className="text-sm text-slate-600">
                Facebook groups for kin-ball players exist in Canada, Japan, Belgium, and other
                FIKB member countries. These communities are small enough that genuine contributions
                are noticed and shared widely, and large enough to generate meaningful subscriber
                leads. Regular posts demonstrating sport-specific conditioning knowledge — without
                immediately pitching the subscription — build the credibility that converts community
                members into paying subscribers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">YouTube — Zero-Competition Niche</h3>
              <p className="text-sm text-slate-600">
                Kin-ball conditioning content on YouTube is essentially absent. Any video that
                explicitly targets kin-ball players with sport-specific fitness content will rank
                immediately for low-competition searches like &quot;kin-ball training&quot; and
                &quot;kin-ball exercise.&quot; This organic channel costs only production time
                and creates a permanent acquisition engine that generates new subscribers
                continuously without paid advertising.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Adjacent Non-Contact Sport Communities</h3>
              <p className="text-sm text-slate-600">
                Volleyball and handball players — sports that share the overhead hitting and court
                movement demands of kin-ball — represent a large adjacent audience. Adults in these
                communities who discover kin-ball through crossover events or recreational leagues
                are already familiar with training for overhead sport and will engage with your
                content if you address the shared physical demands. Cross-posting in volleyball
                and handball masters communities multiplies your reach beyond the kin-ball core.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Kin-Ball Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first to launch. Recurring revenue from a global
            community with no dedicated conditioning content and thousands of adult players looking
            for exactly what you can offer.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-volleyball-fitness-programs-online",
                title: "Sell Masters Volleyball Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-handball-fitness-programs-online",
                title: "Sell Masters Handball Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-basketball-fitness-programs-online",
                title: "Sell Masters Basketball Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-badminton-fitness-programs-online",
                title: "Sell Masters Badminton Fitness Programs Online",
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
