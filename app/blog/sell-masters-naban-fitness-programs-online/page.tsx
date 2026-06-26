import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Naban Fitness Programs Online in 2026",
  description:
    "Turn your Naban (Burmese wrestling) expertise into recurring digital income. Pricing strategies, platform options, and marketing tactics for Naban masters selling online fitness programs.",
}

export default function SellMastersNabanFitnessPrograms() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-slate-100 bg-slate-50 px-4 py-3">
        <div className="mx-auto max-w-4xl">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-violet-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="select-none">/</li>
            <li>
              <Link href="/blog" className="hover:text-violet-600 transition-colors">
                Blog
              </Link>
            </li>
            <li className="select-none">/</li>
            <li className="text-slate-900">Sell Masters Naban Fitness Programs Online</li>
          </ol>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900">
          How to Sell Masters Naban (Burmese Wrestling) Fitness Programs Online in 2026
        </h1>

        {/* Intro */}
        <div className="mb-10 space-y-5 text-lg text-slate-700">
          <p>
            Naban is Myanmar&apos;s traditional wrestling system — a comprehensive grappling art
            practised since at least the Bagan period (9th–13th centuries) and closely integrated
            with lethwei (Burmese bare-knuckle boxing) in the broader Myanmar martial culture.
            Unlike the pure throw-to-ground competitions of many traditional wrestling systems,
            Naban historically permitted all techniques except biting and eye gouging — throws,
            takedowns, sweeps, joint locks, and ground submissions were all valid means of securing
            victory. This makes Naban one of the most complete traditional grappling systems in
            Southeast Asia, with a technical vocabulary that overlaps substantially with catch
            wrestling and judo while maintaining distinctively Burmese throwing and ground
            control sequences.
          </p>
          <p>
            Outside Myanmar, Naban instruction is extraordinarily scarce. The Myanmar diaspora —
            concentrated in Thailand, Malaysia, Singapore, the United States (particularly California
            and New York), the United Kingdom, and Australia — maintains active cultural connections
            through religious communities (Buddhist temples serve as cultural centres), heritage
            associations, and social media networks. At the same time, the global lethwei community
            has grown substantially in the past decade, and practitioners of this ungloved striking
            art frequently seek complementary grappling instruction. Naban sits at the intersection
            of both communities and provides a unique technical system that neither Western grappling
            arts nor other Southeast Asian systems fully replicate.
          </p>
          <p>
            For a qualified Naban master, the combination of an underserved diaspora market,
            a curious lethwei crossover audience, and the global traditional wrestling research
            community creates unusually high demand relative to available supply. Creatdrop provides
            the platform to deliver structured Naban curricula to these audiences globally without
            any technical infrastructure investment.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Pricing Tiers for Online Naban Programs
          </h2>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-violet-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Product Tier</th>
                  <th className="px-6 py-4 text-left font-semibold">Format</th>
                  <th className="px-6 py-4 text-left font-semibold">Price Range</th>
                  <th className="px-6 py-4 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-slate-900">Naban Foundations</td>
                  <td className="px-6 py-4 text-slate-600">Free 3-video series</td>
                  <td className="px-6 py-4 text-slate-600">Free</td>
                  <td className="px-6 py-4 text-slate-600">Lead generation &amp; discovery</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Burmese Takedown System</td>
                  <td className="px-6 py-4 text-slate-600">4-week video course</td>
                  <td className="px-6 py-4 text-slate-600">$67–$97</td>
                  <td className="px-6 py-4 text-slate-600">Grapplers &amp; lethwei practitioners</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-slate-900">Complete Naban System</td>
                  <td className="px-6 py-4 text-slate-600">12-week programme</td>
                  <td className="px-6 py-4 text-slate-600">$127–$177</td>
                  <td className="px-6 py-4 text-slate-600">Competitive grapplers &amp; MMA athletes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Myanmar Arts Membership</td>
                  <td className="px-6 py-4 text-slate-600">Monthly membership + live Q&amp;A</td>
                  <td className="px-6 py-4 text-slate-600">$37–$57/mo</td>
                  <td className="px-6 py-4 text-slate-600">Serious practitioners &amp; coaches</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium text-slate-900">Club Licence</td>
                  <td className="px-6 py-4 text-slate-600">Full curriculum + instructor resources</td>
                  <td className="px-6 py-4 text-slate-600">$167</td>
                  <td className="px-6 py-4 text-slate-600">Myanmar diaspora clubs &amp; lethwei gyms</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">Private Coaching</td>
                  <td className="px-6 py-4 text-slate-600">1-on-1 video sessions (monthly)</td>
                  <td className="px-6 py-4 text-slate-600">$247–$397/mo</td>
                  <td className="px-6 py-4 text-slate-600">MMA coaches &amp; competitive grapplers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market Segments */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Three Primary Markets for Naban Programs
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-3 text-2xl">🇲🇲</div>
              <h3 className="mb-2 font-semibold text-slate-900">Myanmar Diaspora</h3>
              <p className="text-sm text-slate-600">
                Myanmar diaspora communities in Thailand, Malaysia, Singapore, the USA, the UK,
                and Australia are active and culturally connected — organised through Buddhist
                temples, cultural associations, and social media communities. Naban as a symbol
                of Myanmar martial heritage resonates with diaspora families seeking to preserve
                cultural identity in new home countries. Content delivered in Burmese alongside
                English signals authentic cultural authority. Diaspora youth programmes and
                community club initiatives represent the most efficient initial conversion path.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-3 text-2xl">🥊</div>
              <h3 className="mb-2 font-semibold text-slate-900">Lethwei &amp; Southeast Asian Martial Arts</h3>
              <p className="text-sm text-slate-600">
                The global lethwei community has grown rapidly since international promotion began
                around 2015. Lethwei practitioners — concentrated in Thailand, Myanmar diaspora
                communities, and an international following across the USA, Europe, and Japan —
                actively seek Naban as the complementary grappling system to lethwei striking.
                The traditional integration of Naban and lethwei in Myanmar martial culture makes
                this crossover natural: lethwei gyms internationally are the most receptive
                B2B channel for Naban Club Licences.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-3 text-2xl">🤼</div>
              <h3 className="mb-2 font-semibold text-slate-900">Southeast Asian Martial Arts Community</h3>
              <p className="text-sm text-slate-600">
                The broader Southeast Asian martial arts community — practitioners of pencak silat,
                muay boran, bokator, and pradal serey — treats Naban as a regional grappling
                tradition worth understanding alongside the striking systems. This community is
                active in online forums, YouTube channels, and regional martial arts events.
                English-language Naban instruction positions your programme within a growing
                regional martial arts preservation movement that consistently supports authentic
                traditional instructors with strong purchase intent.
              </p>
            </div>
          </div>
        </section>

        {/* Launch Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Four Steps to Launch Your Naban Program Online
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Build a Curriculum Covering Naban's Full Technical Range",
                body: "Naban's traditional breadth — throws, sweeps, leg trips, joint locks, and ground submissions — gives you more curriculum material than most traditional wrestling systems. Structure your programme in four phases: Foundation (stance, grip, balance disruption, safety falling), Takedowns (hip throws, leg trips, single and double leg entries), Ground Control (pinning sequences, escape routes, positional hierarchy), and Submissions (arm locks, leg locks, and the joint manipulation sequences that distinguish Naban from throw-only traditional wrestling). Include historical and cultural context segments in each phase to serve both the diaspora heritage audience and the technical grappling audience simultaneously.",
              },
              {
                step: "2",
                title: "Reach Myanmar Diaspora Through Buddhist Temple Networks",
                body: "Myanmar Buddhist temples function as community centres for diaspora populations, hosting cultural events, language classes, and heritage programming alongside religious services. Temple committees in major diaspora cities (Los Angeles, New York, London, Sydney, Bangkok) are actively seeking traditional cultural programming. Contact temple cultural committees with a Naban introduction package — a short video demonstration, a brief written history of the art, and a Club Licence offer for community youth programmes. This path to the diaspora audience is more direct than social media advertising and converts at significantly higher rates due to the existing trust infrastructure of religious community leadership.",
              },
              {
                step: "3",
                title: "Partner with Lethwei Gyms for Integrated Curriculum",
                body: "Several dozen lethwei gyms now operate outside Myanmar, particularly in Thailand, the USA, Europe, and Australia. These gyms are the natural home for Naban instruction and represent the most receptive B2B audience for Club Licences. Pitch directly to lethwei gym owners with a framing that resonates: \"Complete your fighters' Myanmar martial arts curriculum with authentic Naban grappling.\" Offer a complimentary 30-day trial of the full curriculum and provide marketing materials explaining the traditional integration of Naban and lethwei for gym owners to share with their student communities.",
              },
              {
                step: "4",
                title: "Produce Southeast Asian Martial Arts Comparative Content",
                body: "Comparative content — \"How Naban differs from catch wrestling\", \"Naban vs bokator: two Southeast Asian grappling systems\" — attracts audiences from multiple existing martial arts communities simultaneously. YouTube videos and Instagram reels positioning Naban within the regional context of Southeast Asian martial arts perform strongly with the pencak silat, muay boran, and bokator communities who are already engaged with traditional SE Asian martial arts content. Each comparative piece captures crossover traffic and builds authority within the regional martial arts research community.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-slate-200 p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                  {step}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marketing Channels */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Marketing Channels That Work for Naban Instructors
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube SE Asian Martial Arts Channel</h3>
              <p className="text-sm text-slate-600">
                English-language YouTube content on Naban is effectively nonexistent. A channel
                covering Naban technique, Myanmar martial culture, and Naban&apos;s relationship
                to lethwei captures near-zero-competition search traffic while building authority
                as the definitive English-language Naban resource. Documentary content covering
                traditional Naban competitions, the Bagan-era historical roots, and modern
                Myanmar wrestling practices generates strong engagement from the SE Asian martial
                arts enthusiast community globally.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 font-semibold text-slate-900">Lethwei &amp; Southeast Asian MA Podcasts</h3>
              <p className="text-sm text-slate-600">
                Lethwei-focused YouTube channels and podcasts (including Dave Leduc&apos;s
                lethwei promotion media and regional martial arts podcast networks) actively book
                guests covering Myanmar martial arts. An appearance framed around "the grappling
                system that completes lethwei" reaches the exact audience most likely to purchase
                a Naban Club Licence for their lethwei gym and generates ongoing referral traffic
                from the lethwei community&apos;s social media networks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 font-semibold text-slate-900">Myanmar Diaspora Social Media</h3>
              <p className="text-sm text-slate-600">
                Myanmar diaspora communities are active on Facebook, with country-specific groups
                (Myanmar in Thailand, Myanmar in the UK, Myanmar in the USA) maintaining large
                engaged memberships. Burmese-language content covering Naban history, traditional
                wrestling demonstrations, and programme announcements reaches these communities
                directly. Diaspora social media sharing behaviour for authentic cultural content
                is strong — a single well-received post can reach tens of thousands of diaspora
                members across multiple countries without paid promotion.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 font-semibold text-slate-900">MMA &amp; Grappling Community Cross-Promotion</h3>
              <p className="text-sm text-slate-600">
                The MMA and no-gi grappling community actively seeks non-standard technique systems.
                Naban&apos;s joint lock entries from standing and the leg-lock sequences that
                predate modern no-gi grappling are compelling for grapplers exploring the full
                historical range of submission wrestling. Partner with catch wrestling and submission
                grappling instructors for cross-promotional content — "What Burmese wrestling
                adds to your submission game" — that reaches a highly purchase-motivated audience
                beyond the SE Asian martial arts community.
              </p>
            </div>
          </div>
        </section>

        {/* Physical Demands */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Physical Demands Your Program Must Address
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="mb-2 font-semibold text-slate-900">
                Hip Explosive Entry &amp; Posterior Chain Loading
              </h3>
              <p className="text-sm text-slate-600">
                Naban hip throws and takedown entries require the same explosive hip-extension
                mechanics common to judo and wrestling — sudden level change followed by hip drive
                through the opponent. The posterior chain (glutes, hamstrings, spinal erectors)
                bears the primary load during these entries. Include a hip loading capacity block
                in weeks 1–3 (Romanian deadlifts, hip thrusts, Nordic hamstring curls) before
                introducing repetitive entry drilling, and provide explicit weekly volume guidelines
                to prevent gluteal tendinopathy accumulation in athletes new to explosive hip-loading.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="mb-2 font-semibold text-slate-900">
                Wrist &amp; Elbow Joint Lock Entry Safety
              </h3>
              <p className="text-sm text-slate-600">
                Naban&apos;s joint lock catalogue — applied from standing entries, clinch, and ground
                positions — places sudden hyperextension stress on the wrist and elbow when applied
                in live drilling before partners have developed reliable tap-out reflexes. This is
                the most common injury source for new Naban practitioners. Address it with explicit
                tap-out protocol instruction at programme start (three taps minimum, tap with any
                body part), progressive application speed (technique drilling at 30% speed before
                advancing to 70% resistance), and specific advice on wrist extensor conditioning
                to reduce injury risk on the receiving side of lock applications.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="mb-2 font-semibold text-slate-900">
                Knee &amp; Ankle Demands from Leg Lock Positions
              </h3>
              <p className="text-sm text-slate-600">
                Naban leg locks — particularly heel hooks and knee reaps applied from traditional
                Burmese ground sequences — place significant rotational stress on the knee medial
                collateral ligaments and the anterior cruciate ligament when applied without
                adequate control or before the recipient has developed the hip mobility to manage
                the position. Include a prerequisite hip mobility assessment (figure-four hip
                external rotation range) and provide explicit guidelines on leg lock application
                speed and resistance levels appropriate for each programme phase.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-600 p-8 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold">
            Ready to Share Naban with the World?
          </h2>
          <p className="mb-6 text-violet-100">
            Join Creatdrop and start selling your Naban expertise — Myanmar diaspora communities,
            lethwei practitioners, and Southeast Asian martial arts enthusiasts are waiting for
            authentic Burmese wrestling instruction.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-6 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-lethwei-fitness-programs-online",
                title: "Sell Masters Lethwei Fitness Programs Online",
                desc: "Monetise Myanmar's bare-knuckle boxing with structured online programmes for combat sports communities worldwide.",
              },
              {
                href: "/blog/sell-masters-bando-fitness-programs-online",
                title: "Sell Masters Bando Fitness Programs Online",
                desc: "Turn Myanmar's comprehensive animal-based combat system into a recurring digital income stream.",
              },
              {
                href: "/blog/sell-masters-bokator-fitness-programs-online",
                title: "Sell Masters Bokator Fitness Programs Online",
                desc: "Monetise Cambodia's ancient martial art with structured programmes for Southeast Asian heritage communities.",
              },
              {
                href: "/blog/sell-masters-pradal-serey-fitness-programs-online",
                title: "Sell Masters Pradal Serey Fitness Programs Online",
                desc: "Turn Cambodian kickboxing expertise into a digital fitness programme business for SE Asian martial arts communities.",
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group block rounded-2xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
              >
                <h3 className="mb-1 font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
