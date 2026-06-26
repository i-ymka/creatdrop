import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Isshin-Ryu Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Isshin-ryu expertise. Creatdrop gives instructors the tools to sell vertical-fist conditioning programmes, kata series, and school licences to a global audience — especially the large US military community.",
  openGraph: {
    title: "Sell Masters Isshin-Ryu Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Isshin-ryu expertise. Creatdrop gives instructors the tools to sell vertical-fist conditioning programmes, kata series, and school licences to a global audience — especially the large US military community.",
  },
}

export default function IsshinryuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Isshin-Ryu Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Isshin-Ryu Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Isshin-ryu was founded on Okinawa in 1956 by Tatsuo Shimabuku, who synthesised elements from
            Shorin-ryu under Chotoku Kyan and Chojun Miyagi's Goju-ryu into a unified system he described
            as "one heart way." Its most recognisable technical signature is the vertical punch — the fist
            is held with the thumb on top and the elbow down, positioning the forearm as a natural blocking
            surface on retraction. Shimabuku also standardised a relatively compact kata curriculum of fifteen
            forms, making the full system more learnable than many longer-established Okinawan lineages.
          </p>
          <p>
            Isshin-ryu has an unusually large American following, and the reason is historical: US Marines
            stationed on Okinawa in the late 1950s and 1960s trained directly under Shimabuku and brought the
            art back to bases and communities across the United States. Harold Long, Don Nagle, Steve
            Armstrong, and other Marine veterans built the American Isshin-ryu network that remains active
            today. This military diaspora history gives the system a distinctively patriotic community identity
            and a concentration of practitioners in military towns and veterans' communities — an online
            audience with above-average disposable income and loyalty to their martial tradition.
          </p>
          <p>
            Creatdrop lets Isshin-ryu instructors reach that community nationally and globally. The vertical
            punch mechanics, the kobudo weapons curriculum Shimabuku integrated, and the system's synthetic
            history spanning both major Okinawan lineages all make for distinctive programme content that
            practitioner communities actively seek and will pay premium prices to access from qualified
            instructors.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Isshin-Ryu Programme Pricing</h2>
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
                  <td className="px-6 py-4">Vertical Punch Mechanics Course</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Signature technique deep-dive</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">15-Kata Complete Curriculum</td>
                  <td className="px-6 py-4">$147 – $247</td>
                  <td className="px-6 py-4">Full kata library with bunkai</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Kobudo Weapons Integration</td>
                  <td className="px-6 py-4">$97 – $167</td>
                  <td className="px-6 py-4">Bo, sai, and tuifa series</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Shorin/Goju-ryu Synthesis Masterclass</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">How Shimabuku unified both lineages</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$167 / year</td>
                  <td className="px-6 py-4">White-label for dojo programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Founder's History Seminar</td>
                  <td className="px-6 py-4">$47 – $87</td>
                  <td className="px-6 py-4">Shimabuku, Marine legacy, American diaspora</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Isshin-Ryu Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">US Military and Veterans Community</h3>
              <p className="text-sm text-slate-600">
                The historical Marine connection creates a loyal, concentrated buyer community in military
                towns and veterans' networks. Isshin-ryu identity is a point of pride for this segment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">American Okinawan Karate Clubs</h3>
              <p className="text-sm text-slate-600">
                Isshin-ryu dojos across the United States represent a dense network of clubs seeking
                supplementary instructional content for their students. Annual school licences are a natural
                fit for this segment.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Kobudo Practitioners</h3>
              <p className="text-sm text-slate-600">
                Martial artists seeking Okinawan weapons instruction. Shimabuku's integrated kobudo curriculum
                attracts practitioners from other karate systems who want to add weapons training.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Isshin-Ryu Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the vertical punch story", "Shimabuku's biomechanical reasoning for the vertical fist is a compelling hook — a specific technical claim with a real mechanical rationale. It converts curious karateka from other styles into buyers."],
              ["Film empty-hand and weapons content", "Isshin-ryu's kobudo integration is a genuine selling point. Pair your empty-hand kata courses with a weapons series to create a second revenue stream from the same audience."],
              ["Publish and reach the US Isshin-ryu network", "Upload to Creatdrop and target the extensive American Isshin-ryu association network — national and regional newsletters, club Facebook groups, and veterans' martial arts communities."],
              ["Build a legacy narrative", "The Marine Corps origin story, the Okinawan master, the American diaspora — this is compelling content for podcasts, YouTube documentaries, and long-form articles that drive organic traffic."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Isshin-Ryu Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">American Isshin-Ryu Association Channels</h3>
              <p className="text-sm text-slate-600">
                National and regional Isshin-ryu organisations maintain newsletters, websites, and event
                calendars that reach the concentrated American Isshin-ryu community directly.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Military Martial Arts Communities</h3>
              <p className="text-sm text-slate-600">
                Facebook groups and forums for military veterans interested in martial arts are populated by
                Isshin-ryu practitioners who learned the art during service. High-trust communities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">YouTube Technique Comparison Videos</h3>
              <p className="text-sm text-slate-600">
                Videos comparing the Isshin-ryu vertical punch to the horizontal Shotokan punch attract
                organic search traffic from karateka curious about the technical debate.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Okinawan Karate Podcast Circuit</h3>
              <p className="text-sm text-slate-600">
                Podcasts focused on Okinawan martial arts history reach listeners already interested in
                Isshin-ryu's unique synthesis and Marine diaspora narrative — strong conversion candidates.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Isshin-Ryu Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Vertical Punch Muscle Memory</h3>
              <p className="text-sm text-slate-600">
                Re-grooving punch mechanics from the horizontal snap-punch standard requires dedicated
                drilling. The vertical fist position engages different forearm muscles and alters the
                mechanics of blocking and striking simultaneously.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Kobudo Weapons Conditioning</h3>
              <p className="text-sm text-slate-600">
                Bo, sai, and tuifa training develops specific grip strength, wrist control, and spatial
                awareness requirements entirely separate from empty-hand conditioning. A genuine second
                athleticism track within a single system.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Compact Kata Execution</h3>
              <p className="text-sm text-slate-600">
                Isshin-ryu kata tend toward economical, close-range technique. Developing explosive power
                in compact positions requires specific hip-rotation and core-activation drills different
                from the longer-range striking emphasis in harder-style systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Isshin-Ryu Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Shimabuku lineage knowledge into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Shorin-Ryu Fitness Programs Online", "/blog/sell-masters-shorin-ryu-fitness-programs-online"],
              ["Sell Masters Uechi-Ryu Fitness Programs Online", "/blog/sell-masters-uechi-ryu-fitness-programs-online"],
              ["Sell Masters Karate Fitness Programs Online", "/blog/sell-masters-karate-fitness-programs-online"],
              ["Sell Masters Goju-Ryu Fitness Programs Online", "/blog/sell-masters-goju-ryu-fitness-programs-online"],
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
