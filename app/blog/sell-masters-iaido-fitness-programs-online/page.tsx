import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Iaido Fitness Programs Online | Creatdrop",
  description:
    "Reach masters iaido practitioners aged 40–80+ competing in ZNKR and AJKF All Japan Iaido Championships across Japan, Europe, and North America. Sell draw-hand shoulder and seiza conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Iaido Fitness Programs Online | Creatdrop",
    description:
      "Reach masters iaido practitioners aged 40–80+ competing in ZNKR and AJKF All Japan Iaido Championships across Japan, Europe, and North America. Sell draw-hand shoulder and seiza conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersIaidoFitnessPage() {
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
              Sell Masters Iaido Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Iaido Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Iaido — the Japanese sword art of drawing, cutting, and resheathing — is practised
            as a lifelong meditative discipline governed in Japan by the All Japan Kendo
            Federation (AJKF) and the Zen Nippon Kendo Renmei (ZNKR), which holds the All
            Japan Iaido Championships and organises the national grading examination structure.
            Internationally, the European Kendo Federation and national kendo federations
            in the USA, Canada, Australia, and across Europe include iaido within their
            federation structures, and the European Iaido Championship draws competitors from
            across the continent annually. Iaido is explicitly practised as a lifelong
            discipline — dan examinations extend through the highest grades to practitioners
            in their 70s, 80s, and beyond — and the practice is dominated by adult and senior
            practitioners in a way that makes the masters demographic the standard rather
            than a niche segment.
          </p>
          <p>
            The physical demands of iaido practice are distinctive and poorly served by generic
            fitness content. The noto (resheathing) and the nukitsuke (initial drawing cut)
            require precise wrist supination and shoulder internal rotation coordination on
            the draw side that accumulates into rotator cuff stress and posterior capsule
            restriction in practitioners who do not manage this bilateral asymmetry. The
            seiza (formal kneeling) position — used for the majority of iaido kata — creates
            ankle dorsiflexion and hip flexor demands that restrict without targeted maintenance
            as practitioners age, often limiting the depth and stability of seiza performance
            in grading examinations. The kesagiri (diagonal cut) and the furikaburi (overhead
            raise) create thoracic extension and rotator cuff demands that require active
            maintenance to preserve the full range of motion that high-dan examination
            evaluators assess. These three physical patterns — draw-side shoulder resilience,
            seiza ankle and hip preparation, and thoracic extension for overhead cuts — are
            the conditioning needs every senior iaidoka manages but currently has no specialist
            resource to address.
          </p>
          <p>
            Iaido conditioning content in English is essentially nonexistent. Japanese-language
            content addressing the physical demands of long-term iaido practice is similarly
            absent, typically subsumed into broader kendo or budo conditioning discussions
            that do not address the weapon-specific movement patterns of iaido. The global
            iaido community — which overlaps substantially with the kendo community — has
            no specialist conditioning resource and represents a market that can be reached
            through the same federation channels as kyudo and kendo. Creatdrop gives you
            the platform to fill this gap.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Iaido Programs
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
                  <td className="px-4 py-3 text-slate-600">Draw-side shoulder protocol + seiza ankle and hip mobility routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$47</td>
                  <td className="px-4 py-3 text-slate-600">Full practice conditioning plan + kata-specific mobility videos + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Shinsa Prep</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                  <td className="px-4 py-3 text-slate-600">10-week dan examination block + thoracic extension for overhead cuts</td>
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
              <h3 className="mb-2 font-semibold text-slate-800">Japanese AJKF Practitioners</h3>
              <p className="text-sm text-slate-600">
                Japan has the largest iaido community in the world through the AJKF and ZNKR
                structures. Dan-grade practitioners who train in community dojo and prepare for
                shinsa examinations are the core market — serious practitioners across all adult
                age groups whose physical longevity is a direct concern for grading performance.
                Japanese-language content reaches this community through the same channels as
                kendo — Niconico, YouTube, and dojo network communications.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">European Iaido Competitors</h3>
              <p className="text-sm text-slate-600">
                European kendo federations include iaido as a co-practised discipline, and the
                European Iaido Championship attracts competitors from across the continent.
                European iaidoka typically co-practise with kendo and have high commitment to
                dan examination preparation. English-language conditioning content reaches this
                entire market through the European Kendo Federation and national federation
                channels that already serve the kendo and iaido communities together.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">North American Budo Practitioners</h3>
              <p className="text-sm text-slate-600">
                The United States and Canada have established iaido communities within the
                All United States Kendo Federation and Canadian Kendo Federation structures.
                American and Canadian iaidoka tend to be professionals aged 40–65 with high
                commitment to their budo practice and no access to conditioning resources
                specific to sword art demands. This market has the highest disposable income
                per practitioner of any iaido community and essentially no specialist
                conditioning resource available.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Iaido Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Design around nukitsuke shoulder, seiza ankle, and furikaburi thoracic demands",
                body: "Iaido conditioning addresses three demands that generic fitness programs miss entirely. The nukitsuke (initial drawing cut) creates draw-side shoulder internal rotation and wrist supination stress that accumulates differently from kyudo or kendo. The seiza position — used for the majority of ZNKR Seitei Gata and classical Koryu kata — requires ankle dorsiflexion and hip flexor length that restricts with age in exactly the positions that examination evaluators assess most critically. The furikaburi (overhead sword raise) requires thoracic extension and shoulder elevation range that degrades without specific maintenance. Name each using correct ZNKR vocabulary.",
              },
              {
                n: "2",
                title: "Bundle with kendo federation channels for combined reach",
                body: "Because iaido is administered within kendo federation structures at both national and international level, reaching the kendo federation network simultaneously reaches the iaido community. Prefecture-level kendo federations that organise shinsa examinations for both kendo and iaido dan grades are the primary distribution channel for Japanese practitioners. In Europe and North America, the same national kendo federation newsletters and websites serve both communities. A single federation relationship generates dual reach across the kendo and iaido practitioner bases simultaneously.",
              },
              {
                n: "3",
                title: "Create shinsa preparation content targeting grading examination searches",
                body: "Iaido YouTube content is dominated by kata demonstrations and shinsa footage. Conditioning content framed around physical preparation for dan examinations — specifically the seiza quality, overhead cut range, and draw-side shoulder resilience that evaluators assess — addresses the highest-intent search moment in the iaido practitioner cycle. Videos framed around \"preparing your body for ZNKR Seitei shinsa\" and \"seiza flexibility for iaido over 50\" rank immediately for low-competition searches and attract the most motivated practitioners at peak investment readiness.",
              },
              {
                n: "4",
                title: "Target the European Iaido Championship and AJKF shinsa cycles",
                body: "The European Iaido Championship and AJKF All Japan Iaido Championships generate the highest engagement in their respective communities annually. A conditioning guide released before each event — timed to the preparation window when practitioners are actively investing in their physical readiness — reaches the most competitive segment of the international iaido community at peak engagement. The AJKF and European Kendo Federation distributing pre-championship conditioning guides to registered participants is a high-credibility channel that generates adoption through institutional endorsement.",
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
              <h3 className="mb-2 font-semibold text-slate-800">AJKF & Kendo Federation Networks</h3>
              <p className="text-sm text-slate-600">
                AJKF administers both kendo and iaido within the same federation structure,
                and reaching the AJKF prefecture network distributes conditioning content
                to both communities simultaneously. European and North American kendo
                federations similarly cover iaido. A single federation outreach to kendo
                and iaido-combined structures generates dual community reach — the most
                efficient distribution model for Japanese budo conditioning content.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Niconico & YouTube in Japanese & English</h3>
              <p className="text-sm text-slate-600">
                Iaido YouTube in both languages contains essentially no conditioning content.
                Videos targeting the specific physical demands of long-term iaido practice —
                using correct ZNKR vocabulary and framed around grading examination quality —
                fill a complete gap in the content landscape. The iaido practitioner who
                searches for "seiza preparation for iaido" or "shoulder care for Japanese
                sword arts" finds nothing relevant — a first-mover advantage waiting to be claimed.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Kendo World & Budo International Media</h3>
              <p className="text-sm text-slate-600">
                Kendo World magazine and Budo International cover the Japanese budo arts including
                iaido for a global practitioner readership. A guest article on conditioning for
                senior iaido practitioners — framed around maintaining the physical qualities
                that ZNKR shinsa evaluators assess — reaches the most engaged international
                budo community with editorial credibility that sustains authority far beyond
                the initial publication.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">European Iaido Championship Network</h3>
              <p className="text-sm text-slate-600">
                The European Kendo Federation&apos;s iaido championship structure reaches every
                national federation in Europe ahead of annual championship events. A pre-championship
                conditioning resource offered through European Kendo Federation channels reaches
                the entire European competitive iaido community in a single distribution —
                the most concentrated audience of dedicated iaido practitioners outside Japan
                available through any single channel.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Iaido Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first to launch. Recurring revenue from the
            global iaido community — Japanese, European, and North American practitioners
            who practise for life and have no specialist conditioning resource for the
            specific physical demands of sword art practice in any language.
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
                href: "/blog/sell-masters-kyudo-fitness-programs-online",
                title: "Sell Masters Kyudo Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-aikido-fitness-programs-online",
                title: "Sell Masters Aikido Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-judo-fitness-programs-online",
                title: "Sell Masters Judo Fitness Programs Online",
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
