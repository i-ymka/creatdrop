import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Kyudo Fitness Programs Online | Creatdrop",
  description:
    "Reach masters kyudo practitioners aged 35–75+ competing in All Japan Kyudo Federation championships and IKYF World Championships across Japan, Europe, and North America. Sell shoulder and postural conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Kyudo Fitness Programs Online | Creatdrop",
    description:
      "Reach masters kyudo practitioners aged 35–75+ competing in All Japan Kyudo Federation championships and IKYF World Championships across Japan, Europe, and North America. Sell shoulder and postural conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersKyudoFitnessPage() {
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
              Sell Masters Kyudo Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Kyudo Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Kyudo — the Japanese way of the bow — is one of the most demanding precision martial
            arts in the world, requiring extreme physical and mental stillness to execute the
            ceremonial draw and release with consistency across competition and grading examinations.
            The All Japan Kyudo Federation (ANKF) governs domestic competition and dan-grading
            in Japan with millions of registered practitioners, while the International Kyudo
            Federation (IKYF) holds World Championships that draw competitors from Europe,
            North America, and Asia. Kyudo is explicitly practised as a lifelong discipline —
            the ANKF structure includes dan-grade examinations and competition divisions that
            allow practitioners to compete well into their 70s, and the cultural framing of
            kyudo as a spiritual practice rather than a sport means that practitioners typically
            continue training far longer than athletes in other martial arts.
          </p>
          <p>
            The physical demands of kyudo are poorly understood outside specialist circles and
            almost entirely ignored by generic fitness content. The yugamae (drawing posture)
            requires precise shoulder external rotation with the draw arm and maintained shoulder
            depression with the push arm — a bilateral shoulder position that accumulates
            rotator cuff stress and posterior capsule restriction over years of practice in
            any practitioner who does not actively manage this asymmetry. The nobiai
            (expansion through the draw) requires thoracic extension mobility that deteriorates
            without targeted maintenance in practitioners over 40. The seiza (formal kneeling)
            position used in ceremonial kyudo requires hip flexor length and ankle dorsiflexion
            that are particularly prone to restriction as practitioners age. A conditioning
            program addressing these three specific demands — draw-arm shoulder resilience,
            thoracic extension for nobiai, and seiza hip and ankle preparation — fills a gap
            that every practitioner manages but currently has no specialist resource to guide
            them through.
          </p>
          <p>
            Kyudo conditioning content in English is essentially nonexistent. Japanese-language
            content addressing the physical demands of long-term kyudo practice is sparse and
            framed almost entirely in traditional rather than sports science terms. Creatdrop
            gives you the platform to fill this gap across multiple languages, reaching the
            global kyudo community through ANKF and IKYF channels, the university and corporate
            kyudo clubs that form the backbone of the Japanese community, and the European and
            North American kyudo associations that have no conditioning resources for their
            practitioners at all.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Kyudo Programs
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
                  <td className="px-4 py-3 text-slate-600">Shoulder rotator cuff protocol + seiza hip and ankle mobility routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$47</td>
                  <td className="px-4 py-3 text-slate-600">Full practice conditioning plan + thoracic mobility videos + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Shinsa Prep</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                  <td className="px-4 py-3 text-slate-600">10-week grading examination block + postural alignment programme</td>
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
                  <td className="px-4 py-3 font-medium text-slate-800">Dojo Licence</td>
                  <td className="px-4 py-3 text-slate-600">$177</td>
                  <td className="px-4 py-3 text-slate-600">Up to 15 dojo members, sensei dashboard, group resources</td>
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
              <h3 className="mb-2 font-semibold text-slate-800">Japanese Dan-Grade Practitioners</h3>
              <p className="text-sm text-slate-600">
                Japan has millions of kyudo practitioners registered with the ANKF across
                university clubs, corporate dojo, and community practice halls. Dan-grade
                practitioners who train regularly and prepare for shinsa (grading examinations)
                and taikai (competition) are the core masters market — serious practitioners
                who understand the physical demands of long-term practice and are motivated
                to maintain their bodies for continued participation. Japanese-language content
                reaches this community through Niconico, YouTube, and dojo network channels.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">European IKYF Competitors</h3>
              <p className="text-sm text-slate-600">
                European kyudo associations — particularly in Germany, France, the Netherlands,
                and Scandinavia — maintain active practitioner communities that compete in IKYF
                World Championships and European-level shinsa events. European practitioners
                tend to have taken up kyudo as adults and continue training with high commitment
                into their 50s and 60s. English-language conditioning content reaches this
                entire market without localisation and addresses practitioners who have essentially
                no specialist resources available.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">North American & Pacific Practitioners</h3>
              <p className="text-sm text-slate-600">
                The United States, Canada, Australia, and New Zealand have established kyudo
                associations with affiliated dojo in major cities. These communities skew older
                — many practitioners began training in Japan and continue in their home countries
                — and have professional incomes with essentially no access to conditioning
                resources specific to their practice. A program launched in English immediately
                becomes the only specialist resource for this market.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Kyudo Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Design around draw-arm shoulder, thoracic extension, and seiza demands",
                body: "The yugamae draw position creates a specific bilateral shoulder stress pattern — external rotation demand on the draw arm and depression/protraction demand on the push arm — that accumulates into rotator cuff tendinopathy and posterior capsule restriction in older practitioners. The nobiai expansion requires thoracic extension that restricts with desk-worker posture common in the professional demographics that practise kyudo. Seiza creates hip flexor and ankle stress that worsens without active management. Name each of these using the correct Japanese kyudo vocabulary — yugamae, nobiai, seiza, zanshin — to immediately signal genuine expertise to the community.",
              },
              {
                n: "2",
                title: "Reach ANKF prefecture federations through shinsa calendar communications",
                body: "The ANKF structure flows through prefecture federations that organise shinsa events, taikai, and training seminars for all registered practitioners in each prefecture. Prefecture secretaries communicate with dojo members through regular newsletters tied to the shinsa calendar. A conditioning guide offered to prefecture secretaries as a resource for practitioners preparing for dan examinations — framed around maintaining physical quality for shinsa performance — reaches every registered practitioner in a prefecture through a single relationship. Three or four prefecture relationships generate national organic reach through the close interpersonal networks of Japanese kyudo culture.",
              },
              {
                n: "3",
                title: "Create Japanese and English content targeting shinsa preparation searches",
                body: "Kyudo content on YouTube and Niconico is dominated by technique and ceremonial footage. Conditioning content addressing the physical preparation for shinsa — shoulder resilience for sustained yugamae, thoracic mobility for nobiai quality, seiza preparation for formal ceremonies — is essentially absent in both languages. Videos framed around kyudo-specific conditioning and grading examination preparation rank immediately for uncontested searches and reach both the Japanese domestic market and international practitioners who follow Japanese kyudo content for technique study.",
              },
              {
                n: "4",
                title: "Target the IKYF World Championship cycle for international reach",
                body: "IKYF World Championships gather the international kyudo community every two years and generate significant engagement among practitioners in every participating country. A free conditioning guide distributed through IKYF channels before a World Championship — covering the shoulder, thoracic, and seiza demands of international-level kyudo — reaches every national federation and their coaching staffs simultaneously. This pre-championship window is the highest-engagement moment in the international kyudo calendar and the most efficient time to establish your program as the global conditioning resource for masters practitioners.",
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
              <h3 className="mb-2 font-semibold text-slate-800">ANKF Prefecture Networks</h3>
              <p className="text-sm text-slate-600">
                ANKF prefecture federations communicate with every registered dojo member
                through shinsa calendars, taikai announcements, and training seminars. A
                conditioning resource endorsed or distributed by prefecture kyudo organisations
                carries the institutional credibility that matters deeply in Japanese martial
                arts culture. Sensei who integrate your program into their pre-shinsa
                preparation recommendations generate subscriptions through the peer networks
                of Japanese dojo where personal recommendations from respected teachers
                are the primary information channel.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Niconico & Japanese YouTube</h3>
              <p className="text-sm text-slate-600">
                Japanese kyudo content on Niconico and YouTube covers technique, shinsa
                ceremony, and competition but contains essentially nothing on conditioning
                for long-term practice. Videos targeting the specific physical challenges
                of senior kyudo practitioners — using correct Japanese terminology and framed
                around extending the quality of practice into advanced age — fill an obvious
                gap and reach the largest kyudo community in the world through the platforms
                they already use for content consumption.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">European Kyudo Associations</h3>
              <p className="text-sm text-slate-600">
                European kyudo associations maintain contact directories and publish newsletters
                to their practitioner memberships. Germany, France, and the Netherlands have
                the largest European communities and their federation newsletters reach every
                active practitioner. A conditioning resource offered to European kyudo
                associations as a member benefit immediately becomes the only specialist
                resource for European practitioners and creates credibility that spreads
                through the closely-networked European kyudo community.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">IKYF World Championship Network</h3>
              <p className="text-sm text-slate-600">
                IKYF communicates with member federations ahead of World Championships held
                every two years. A pre-championship conditioning guide distributed via IKYF
                channels reaches every national federation simultaneously — including the
                smaller national associations in Asia, South America, and Africa that have
                no conditioning resources for their kyudo practitioners at all. IKYF-distributed
                content carries the highest credibility signal in international kyudo and
                generates the broadest possible initial reach from a single distribution.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Kyudo Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first to launch. Recurring revenue from millions
            of kyudo practitioners across Japan, Europe, and North America — a community that
            trains for life and has no specialist conditioning resource in any language.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-kendo-fitness-programs-online",
                title: "Sell Masters Kendo Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-archery-fitness-programs-online",
                title: "Sell Masters Archery Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-judo-fitness-programs-online",
                title: "Sell Masters Judo Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-karate-fitness-programs-online",
                title: "Sell Masters Karate Fitness Programs Online",
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
