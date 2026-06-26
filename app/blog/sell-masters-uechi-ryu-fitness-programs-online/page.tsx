import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Uechi-Ryu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Uechi-ryu expertise. Creatdrop gives instructors the tools to sell kata-based conditioning programmes, Pangainoon seminars, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Uechi-Ryu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Uechi-ryu expertise. Creatdrop gives instructors the tools to sell kata-based conditioning programmes, Pangainoon seminars, and school licences to a global audience.",
  },
}

export default function UechiRyuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Uechi-Ryu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Uechi-Ryu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Uechi-ryu is one of the most direct transmissions of Chinese fighting arts into Okinawan karate.
            Kanbun Uechi left Okinawa in 1897 to study in Fujian province, spending a decade mastering
            Pangainoon — a Fujian system that translates roughly as "half-hard, half-soft." He returned with a
            curriculum built around three foundational kata — Sanchin, Seisan, and Sanseiryu — each encoding
            the Chinese biomechanical principles he had absorbed. The style remained almost hidden until his son
            Kanei formalised instruction in the 1940s, giving it the Uechi-ryu name.
          </p>
          <p>
            What distinguishes the system for modern fitness consumers is its conditioning methodology. Uechi-ryu
            practitioners are famous for iron-body training: partners strike each other progressively harder over
            months and years, hardening the torso, forearms, and shins. Spear-hand thrusts to vital points and
            knee-strike entries from very close range demand explosive hip mechanics and total-body tension
            control. This is conditioning content that stands completely apart from anything mainstream fitness
            platforms offer, giving instructors a legitimate blue-ocean niche online.
          </p>
          <p>
            The global karate community numbers in the tens of millions, yet Uechi-ryu remains a specialist
            tradition with a passionate subculture. Practitioners actively seek quality instruction because
            senior teachers are geographically concentrated in Okinawa, Hawaii, and the northeastern United
            States. Creatdrop lets you reach that dispersed audience with kata breakdowns, conditioning
            protocols, and iron-body progression plans sold on your terms — no dojo rent, no travel, no
            intermediaries.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Uechi-Ryu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Sanchin Kata Deep-Dive</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Breathing, tension, bunkai</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Iron-Body Conditioning Series</td>
                  <td className="px-6 py-4">$97 – $147</td>
                  <td className="px-6 py-4">Progressive toughening protocols</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Full Three-Kata Programme</td>
                  <td className="px-6 py-4">$147 – $197</td>
                  <td className="px-6 py-4">Sanchin, Seisan, Sanseiryu</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Pangainoon Chinese Roots Seminar</td>
                  <td className="px-6 py-4">$77 – $127</td>
                  <td className="px-6 py-4">Fujian origins masterclass</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Spear-Hand &amp; Close-Range Module</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Nukite, knee entries, vital-point targeting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Uechi-Ryu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Traditional Karate Practitioners</h3>
              <p className="text-sm text-slate-600">
                Dedicated karateka exploring Okinawan systems beyond Shotokan or Goju-ryu. They value authentic
                lineage, technical rigour, and Chinese martial heritage.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Combat-Sport Athletes</h3>
              <p className="text-sm text-slate-600">
                MMA fighters and grapplers drawn to the iron-body conditioning and close-range striking. The
                progressive toughening methodology supplements modern training camps.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Martial Arts Historians</h3>
              <p className="text-sm text-slate-600">
                Enthusiasts studying Chinese-to-Okinawan transmission pathways. Pangainoon content provides
                direct access to a documented chapter of karate history.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Uechi-Ryu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Define your core curriculum", "Choose a focus: kata breakdown series, iron-body conditioning, bunkai application, or Pangainoon historical deep-dive. Clear positioning converts better than general karate content."],
              ["Film your flagship content", "Sanchin kata is the entry point every buyer expects. Record multiple angles, slow-motion, and partner demonstrations of the breathing and tension methodology."],
              ["Price and publish", "Upload to Creatdrop, set your pricing tiers, and activate your instructor storefront. Creatdrop handles checkout, delivery, and revenue collection globally."],
              ["Grow with community features", "Use live Q&A sessions, private practice groups, and email sequences to convert one-time buyers into annual school-licence holders."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Uechi-Ryu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Kata Demonstrations</h3>
              <p className="text-sm text-slate-600">
                Full public Sanchin or Seisan demonstrations drive organic search traffic. Karate-specific
                searches are highly intent-driven and convert well to paid programmes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Karate Forums and Facebook Groups</h3>
              <p className="text-sm text-slate-600">
                Communities like Karate Forums, r/karate, and Uechi-ryu-specific Facebook groups are populated
                with self-directed learners who buy premium content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Instagram Iron-Body Clips</h3>
              <p className="text-sm text-slate-600">
                Short videos of progressive iron-body conditioning generate high engagement. The striking
                visualness of hardening training is share-worthy content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Podcast Appearances</h3>
              <p className="text-sm text-slate-600">
                Martial arts podcasts focused on Okinawan karate or traditional Chinese systems give you access
                to concentrated, qualified audiences already interested in lineage-based content.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Uechi-Ryu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Iron-Body Progressive Conditioning</h3>
              <p className="text-sm text-slate-600">
                Systematic desensitisation through graduated partner strikes to the torso, forearms, and shins.
                Requires months of consistent practice before advanced-level conditioning is safe to pursue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Sanchin Structural Tension</h3>
              <p className="text-sm text-slate-600">
                The root kata demands simultaneous full-body muscular contraction coordinated with diaphragmatic
                breathing — a neurological skill that develops over years of dedicated practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Spear-Hand and Knee-Strike Mechanics</h3>
              <p className="text-sm text-slate-600">
                Close-range techniques require finger toughening, hip-explosion training, and precise timing
                drills. These are distinct from mainstream karate skills and warrant standalone instructional
                modules.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Uechi-Ryu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Pangainoon lineage into a global online programme — no platform fees,
            no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Goju-Ryu Fitness Programs Online", "/blog/sell-masters-goju-ryu-fitness-programs-online"],
              ["Sell Masters Shotokan Fitness Programs Online", "/blog/sell-masters-shotokan-fitness-programs-online"],
              ["Sell Masters Wuzuquan Fitness Programs Online", "/blog/sell-masters-wuzuquan-fitness-programs-online"],
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
