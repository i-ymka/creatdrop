import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Rink Hockey Fitness Programs Online | Creatdrop",
  description:
    "Reach masters rink hockey players aged 35–60+ competing in FIRS World Roller Hockey Championships on quad skates across Portugal, Spain, and Argentina. Sell hip and ankle conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Rink Hockey Fitness Programs Online | Creatdrop",
    description:
      "Reach masters rink hockey players aged 35–60+ competing in FIRS World Roller Hockey Championships on quad skates across Portugal, Spain, and Argentina. Sell hip and ankle conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersRinkHockeyFitnessPage() {
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
              Sell Masters Rink Hockey Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Rink Hockey Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Rink hockey — played on quad skates rather than inline blades — is a distinct sport
            from both inline hockey and ice hockey, with its own World Championship structure under
            the Fédération Internationale de Roller Sports (FIRS, now World Skate). Portugal,
            Spain, Argentina, and Italy are the dominant nations, and the sport commands a
            passionate following in these countries comparable to ice hockey&apos;s cultural status
            in Canada. Masters divisions for players aged 35 and older operate within national
            federation circuits in Portugal and Spain, and international masters events attract
            players well into their 50s and 60s. These are athletes who have spent decades on
            quad skates and understand competitive commitment deeply — the kind of person who
            invests in coaching resources that address their specific needs.
          </p>
          <p>
            The biomechanics of rink hockey on quad skates create a conditioning profile that differs
            meaningfully from inline skating. The wider quad skate chassis demands greater hip
            abductor engagement for lateral stability, and the lower centre of gravity required
            for rink hockey skating posture places sustained load on hip flexors and lumbar extensors.
            Ankle mobility demands also differ from inline skating given the more rigid quad boot
            construction. Masters players who return to competitive rink hockey after gaps in their
            30s and 40s, or who have played continuously and accumulated decades of asymmetric
            loading from stick-side movement patterns, are particularly vulnerable to hip and
            lower back issues that targeted conditioning can address and prevent.
          </p>
          <p>
            This is a community with genuine coaching demand and almost no digital content serving
            it. English-language rink hockey fitness resources are essentially nonexistent. Portuguese
            and Spanish language content is slightly less sparse, but sport-specific conditioning
            programs targeting masters players on quad skates do not exist in any language. Creatdrop
            gives you the platform to change that — build a subscription program, price it appropriately
            for a committed adult athlete audience, and distribute it through the federation and
            club networks that already reach every serious rink hockey player in Portugal, Spain,
            and Argentina.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Rink Hockey Programs
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
                  <td className="px-4 py-3 text-slate-600">Hip abductor protocol + ankle mobility routine for quad skates</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$47</td>
                  <td className="px-4 py-3 text-slate-600">Full season conditioning plan + video breakdowns + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Competition Prep</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                  <td className="px-4 py-3 text-slate-600">10-week tournament block + on-skate power development guide</td>
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
                  <td className="px-4 py-3 text-slate-600">$167</td>
                  <td className="px-4 py-3 text-slate-600">Up to 10 club members, coach dashboard, group check-ins</td>
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
              <h3 className="mb-2 font-semibold text-slate-800">Portuguese & Spanish Masters Leagues</h3>
              <p className="text-sm text-slate-600">
                Portugal and Spain have the deepest rink hockey cultures globally, with professional
                leagues alongside robust masters and veteran circuits. Players aged 35–60+ compete
                in regional leagues and national veterans championships. Portuguese-language content
                reaches this primary market directly; Spanish serves the Iberian and Latin American
                audience simultaneously.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Argentine & South American Veterans</h3>
              <p className="text-sm text-slate-600">
                Argentina has a large and passionate rink hockey community with strong club
                infrastructure and a historical tradition of producing world-class players.
                Argentine masters competitors are highly motivated athletes who continue playing
                competitively well into their 50s. Spanish-language program variants or subtitled
                video content reach this market through the same channels as the Iberian audience.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Returning Players After Career Gaps</h3>
              <p className="text-sm text-slate-600">
                A significant segment of masters rink hockey competitors are players who competed
                seriously in their teens and 20s, stepped away for career and family, and return
                to competitive skating in their 40s. These athletes have sport knowledge but
                deconditioned bodies — a profile that creates high motivation for targeted
                conditioning programs that bridge the gap between their competitive history and
                current physical capacity.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Rink Hockey Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Design around quad skate biomechanics specifically",
                body: "The critical differentiator for your program is quad-skate specificity. Hip abductors stabilise the wider quad chassis; ankle dorsiflexion within a rigid boot is more limited than inline skating; the lower skating posture in rink hockey demands greater lumbar endurance than recreational quad skating. Name these differences explicitly in your program structure and marketing copy. Players who have searched unsuccessfully for rink-hockey-specific conditioning will immediately recognise that you understand their sport.",
              },
              {
                n: "2",
                title: "Reach Portuguese and Spanish federation channels",
                body: "The Federação de Patinagem de Portugal (FPP) and Real Federación Española de Patinaje (RFEP) both administer rink hockey at national level and communicate regularly with clubs and registered players. A pitch to federation communications officers offering a free conditioning resource for masters competitors — ideally a short PDF guide in Portuguese and Spanish — opens the door to newsletter mentions that reach thousands of registered players.",
              },
              {
                n: "3",
                title: "Partner with rink hockey equipment retailers and clubs",
                body: "A small ecosystem of specialist rink hockey equipment retailers operates in Portugal, Spain, and Argentina, supplying clubs and individual players with quad skates, sticks, and protective gear. These retailers email their customer bases regularly and are open to content partnerships. A sponsored editorial email about masters conditioning reaches buyers who are actively investing in their sport performance — exactly your target subscriber profile.",
              },
              {
                n: "4",
                title: "Create Portuguese and Spanish language content",
                body: "While English-language rink hockey conditioning content is absent, Portuguese and Spanish content is only marginally better. A series of conditioning videos dubbed or subtitled in Portuguese and Spanish — covering hip mobility for quad skating, lower back endurance for rink hockey posture, and ankle strength for masters players — will outperform any existing content and position you as the definitive resource across all three primary markets simultaneously.",
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
              <h3 className="mb-2 font-semibold text-slate-800">Hoquei em Patins Media (Portugal)</h3>
              <p className="text-sm text-slate-600">
                Portuguese rink hockey has dedicated media coverage through hoqueipatins.com,
                Zerozero.pt, and regional sports outlets. Fitness and conditioning content
                contributed to these platforms — particularly framed around veteran and masters
                players extending their careers — reaches the most engaged segment of the
                Portuguese rink hockey community. Portuguese-language content here is essential,
                not optional.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Instagram & YouTube — Spanish & Portuguese</h3>
              <p className="text-sm text-slate-600">
                Rink hockey clubs and federations in Portugal, Spain, and Argentina maintain
                active Instagram and YouTube presences. Collaboration with club-affiliated
                accounts — even a simple guest video or tagged post — reaches established
                community audiences. Your content only needs to be better than the zero dedicated
                conditioning resources currently available to immediately become the reference in
                these communities.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">World Skate Masters Events</h3>
              <p className="text-sm text-slate-600">
                World Skate (formerly FIRS) organises international masters competitions that
                draw veteran rink hockey players from all member nations. Pre-tournament conditioning
                guides distributed through World Skate event communications — even as a free
                download requiring email registration — build your list with the most competitive
                and motivated masters players globally, who are the highest-conversion prospects
                for ongoing subscriptions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Rink Hockey Club WhatsApp & Telegram Groups</h3>
              <p className="text-sm text-slate-600">
                Rink hockey club communication in Portugal and Spain runs heavily through WhatsApp
                group chats and increasingly Telegram channels. A single club captain or team
                manager who shares your content in their club group reaches every active player
                immediately. This peer-distribution channel requires only one good relationship
                per club and scales exponentially through the tight-knit national league communities.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Rink Hockey Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first to launch. Recurring revenue from the most
            passionate quad-skate hockey community in the world — with no conditioning competitor
            in sight.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-ice-hockey-fitness-programs-online",
                title: "Sell Masters Ice Hockey Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-inline-hockey-fitness-programs-online",
                title: "Sell Masters Inline Hockey Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-roller-hockey-fitness-programs-online",
                title: "Sell Masters Roller Hockey Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-speed-skating-fitness-programs-online",
                title: "Sell Masters Speed Skating Fitness Programs Online",
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
