import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Ryuei-Ryu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Ryuei-ryu expertise. Creatdrop gives instructors the tools to sell Chinese-rooted Okinawan kata programmes, close-range applications, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Ryuei-Ryu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Ryuei-ryu expertise. Creatdrop gives instructors the tools to sell Chinese-rooted Okinawan kata programmes, close-range applications, and school licences to a global audience.",
  },
}

export default function RyueiryuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Ryuei-Ryu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Ryuei-Ryu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Ryuei-ryu is one of the rarest and most directly Chinese-rooted Okinawan karate lineages. The
            system was brought to Okinawa by Norisato Nakaima following his studies in Fujian province under
            the Chinese master Ru Ru Ko in the 1860s — the same teacher whose influence appears in the
            Goju-ryu lineage through Higashionna Kanryo. Ryuei-ryu remained a family secret within the
            Nakaima family for generations, not taught publicly until Kenko Nakaima began instruction in the
            1960s and the art was formally opened to outside students. This means it preserves an
            exceptionally direct transmission of nineteenth-century Fujian martial arts in a form that most
            other Okinawan systems have filtered through subsequent Japanese modifications.
          </p>
          <p>
            The kata library — Niseishi, Heiku, Paiku, Paiho, Paichu, Anan — contains forms that appear in
            variations across multiple Okinawan systems but are performed in Ryuei-ryu in versions closer to
            their Fujian Chinese originals. This makes the art uniquely interesting for practitioners
            researching the Chinese roots of karate, and for martial arts historians seeking to understand
            transmission pathways. The Anan kata in particular has attracted significant attention from
            researchers and is one of the most studied forms across the broader karate world.
          </p>
          <p>
            Creatdrop gives Ryuei-ryu instructors the tools to monetise what is genuinely rare knowledge.
            The global karate community has enormous appetite for authentic Okinawan and Chinese-rooted
            content, and qualified Ryuei-ryu teachers are extremely scarce. If you have verified lineage
            instruction in this system, online programmes are one of the highest-leverage ways to make that
            knowledge accessible and commercially viable.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Ryuei-Ryu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Anan Kata Deep-Dive</td>
                  <td className="px-6 py-4">$77 – $137</td>
                  <td className="px-6 py-4">Ryuei-ryu's most researched form</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Chinese Roots Masterclass</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Fujian transmission and Ru Ru Ko lineage</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Core Kata Series</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Niseishi, Heiku, Paiku with bunkai</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Close-Range Application Programme</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Fujian-style close combat applications</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Kata and History Bundle</td>
                  <td className="px-6 py-4">$197 – $297</td>
                  <td className="px-6 py-4">Full library with historical context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Ryuei-Ryu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Karate Historians and Researchers</h3>
              <p className="text-sm text-slate-600">
                Academic and independent researchers studying Chinese-to-Okinawan transmission pathways.
                Ryuei-ryu preserves material they cannot access anywhere else in the karate world.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Goju-Ryu and Naha-Te Practitioners</h3>
              <p className="text-sm text-slate-600">
                Practitioners who share the Ru Ru Ko lineage through different transmission lines. Ryuei-ryu
                versions of shared kata offer directly comparable Chinese source material.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Rare Okinawan Arts Collectors</h3>
              <p className="text-sm text-slate-600">
                Martial arts enthusiasts who specifically seek instruction in uncommon lineages. Scarcity
                of qualified Ryuei-ryu instruction globally makes this a premium-priced programme opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Ryuei-Ryu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with scarcity and lineage", "There are extremely few qualified Ryuei-ryu instructors globally. Your lineage verification is your primary marketing asset — communicate it clearly and early in all content."],
              ["Start with the Anan kata", "Anan is the most searched Ryuei-ryu kata and the best entry point for new buyers. A flagship Anan deep-dive course acquires your most interested prospects efficiently."],
              ["Publish and position as rare knowledge", "Upload to Creatdrop and price to reflect genuine scarcity. This is not a commodity karate course — set prices accordingly and attract serious practitioners."],
              ["Target the Goju-ryu and research communities", "The Ru Ru Ko connection gives you a natural bridge audience. Promote to Goju-ryu practitioners as \"the other side of your lineage\" — a powerful hook for that large community."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Ryuei-Ryu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Okinawan Karate Documentary Content</h3>
              <p className="text-sm text-slate-600">
                The Nakaima family secret history — a 19th-century Fujian transmission kept private for
                generations — is compelling documentary content that drives organic reach far beyond the core
                Ryuei-ryu community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Goju-Ryu Association Networks</h3>
              <p className="text-sm text-slate-600">
                The shared Ru Ru Ko lineage makes Goju-ryu practitioner communities natural prospects.
                Reaching them through association newsletters and senior instructor endorsements converts well.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Martial Arts History Podcasts</h3>
              <p className="text-sm text-slate-600">
                The Ryuei-ryu story — secret family art, Chinese master, 19th-century Okinawa, public
                emergence — is ideal long-form podcast content that drives discovery and purchase intent.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Academic and Research Channels</h3>
              <p className="text-sm text-slate-600">
                Martial arts academic journals, research blogs, and university martial arts programmes have
                audiences specifically interested in rare transmission lineages and their Chinese sources.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Ryuei-Ryu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Chinese Close-Range Mechanics</h3>
              <p className="text-sm text-slate-600">
                Ryuei-ryu preserves Fujian fighting principles with direct close-range entry mechanics.
                The footwork and body positioning draw from Chinese rather than Japanised Okinawan
                conventions, requiring adjustment for practitioners trained in other systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Unique Kata Movement Vocabulary</h3>
              <p className="text-sm text-slate-600">
                The system's kata contain movement sequences that do not appear in other Okinawan styles.
                Building muscle memory for Ryuei-ryu-specific techniques requires dedicated solo and
                partner drilling without reference to more common karate forms.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Bunkai Application Complexity</h3>
              <p className="text-sm text-slate-600">
                The Fujian-rooted bunkai in Ryuei-ryu tends toward simultaneous attack-defence responses
                with precise vital-point targeting. Developing these applications to functional standard
                requires sustained partner practice over an extended period.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Ryuei-Ryu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your rare Nakaima lineage knowledge into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Goju-Ryu Fitness Programs Online", "/blog/sell-masters-goju-ryu-fitness-programs-online"],
              ["Sell Masters Chito-Ryu Fitness Programs Online", "/blog/sell-masters-chito-ryu-fitness-programs-online"],
              ["Sell Masters Uechi-Ryu Fitness Programs Online", "/blog/sell-masters-uechi-ryu-fitness-programs-online"],
              ["Sell Masters Karate Fitness Programs Online", "/blog/sell-masters-karate-fitness-programs-online"],
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
