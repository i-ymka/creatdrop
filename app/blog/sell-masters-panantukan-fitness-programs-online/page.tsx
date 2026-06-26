import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Panantukan Fitness Programs Online in 2026",
  description:
    "Turn your Panantukan expertise into recurring revenue. Creatdrop helps Filipino boxing masters sell online programmes, memberships, and digital courses to a global FMA and striking arts audience.",
}

export default function SellMastersPanantukanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-violet-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-violet-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-700">Sell Masters Panantukan Fitness Programs Online</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Panantukan Fitness Programs Online in 2026
        </h1>

        {/* Intro */}
        <div className="mb-10 space-y-5 text-lg text-slate-700">
          <p>
            Panantukan — also called Filipino dirty boxing or Suntukan — is the empty-hand striking
            component of the Filipino Martial Arts system, specifically focused on punching,
            elbowing, shoulder-butting, headbutting, and biomechanical disruption in the close and
            medium ranges. Unlike sport boxing, Panantukan incorporates structural destructions
            (decomposing the opponent&apos;s attacking limbs), gunting (elbow-scissors to the bicep
            and forearm), and flowing combinations that transition seamlessly between punching, elbow
            strikes, and takedown setups. The system treats the empty hand as derived from weapons
            mechanics — the same angles and flowing structure of the stick and blade translated
            into open-hand and closed-fist striking — giving it a tactical depth that pure boxing
            systems do not possess. It has been cross-trained by professional MMA fighters, military
            combatives instructors, and boxing coaches seeking sophisticated trapping and close-range
            entry methods beyond the Jeet Kune Do curriculum through which many Western practitioners
            first encountered the system.
          </p>
          <p>
            The global striking arts community represents one of the largest potential audiences
            for Filipino martial content. Boxers, kickboxers, Muay Thai practitioners, and MMA
            athletes all encounter the limitations of sport-rules striking systems and actively seek
            supplementary content that extends their close-range capability. Panantukan&apos;s gunting
            destructions and seamless elbow integration represent exactly this kind of sophisticated
            close-range extension — and the content gap online is significant. While Escrima and
            stick-based FMA have reasonable representation on YouTube, Panantukan empty-hand
            content from qualified masters is extremely sparse. The Filipino diaspora adds a further
            culturally motivated layer: over 10 million Overseas Filipino Workers and diaspora
            members who carry pride in FMA as national heritage and often cannot access qualified
            instruction locally.
          </p>
          <p>
            Creatdrop provides the infrastructure for Panantukan masters to convert this underserved
            demand into structured online income. This guide covers pricing strategy, content
            architecture, audience development, and the physical considerations that make Panantukan
            programming compelling and commercially viable.
          </p>
        </div>

        {/* Pricing table */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Recommended Pricing for Panantukan Digital Programmes
        </h2>
        <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-violet-600 text-white">
                <th className="p-4 text-left font-semibold">Product Type</th>
                <th className="p-4 text-left font-semibold">Format</th>
                <th className="p-4 text-left font-semibold">Suggested Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-4 font-medium text-slate-900">Panantukan Foundations</td>
                <td className="p-4 text-slate-600">Video course, 8–10 hours</td>
                <td className="p-4 font-semibold text-violet-700">$97–$147</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-900">Gunting & Destructions System</td>
                <td className="p-4 text-slate-600">Focused tactical module</td>
                <td className="p-4 font-semibold text-violet-700">$127–$177</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-medium text-slate-900">Monthly School Membership</td>
                <td className="p-4 text-slate-600">Live classes + archive access</td>
                <td className="p-4 font-semibold text-violet-700">$47–$77/month</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-900">Annual School Licence</td>
                <td className="p-4 text-slate-600">Full curriculum + coaching calls</td>
                <td className="p-4 font-semibold text-violet-700">$167/year</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-medium text-slate-900">Private Online Coaching</td>
                <td className="p-4 text-slate-600">1-on-1 sessions via video</td>
                <td className="p-4 font-semibold text-violet-700">$90–$150/session</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-900">Complete FMA Empty-Hand Bundle</td>
                <td className="p-4 text-slate-600">Panantukan + dumog + certification</td>
                <td className="p-4 font-semibold text-violet-700">$297–$497</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Market segments */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Three Audiences Ready to Pay for Panantukan Content
        </h2>
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 font-semibold text-slate-900">Striking Arts Cross-Trainers</h3>
            <p className="text-sm text-slate-600">
              Boxers, kickboxers, Muay Thai athletes, and MMA fighters seeking to extend their
              close-range striking capability beyond sport-rules systems. Panantukan&apos;s gunting
              destructions and elbow integration provide exactly the kind of tactical depth
              this audience is actively searching for online.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 font-semibold text-slate-900">JKD & FMA Practitioners</h3>
            <p className="text-sm text-slate-600">
              Jeet Kune Do practitioners who first encountered Panantukan through the Bruce
              Lee/Dan Inosanto curriculum are a large, educated, and motivated segment. Many
              have trained JKD for years and are specifically seeking deeper Panantukan content
              from Filipino lineage holders beyond what JKD curricula include.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 font-semibold text-slate-900">Filipino Diaspora Community</h3>
            <p className="text-sm text-slate-600">
              Over 10 million Overseas Filipino Workers and diaspora members worldwide carry
              cultural pride in FMA. Panantukan — as the empty-hand expression of the same
              Filipino warrior heritage as Escrima and Kali — attracts diaspora families
              seeking culturally grounded martial content for themselves and their children.
            </p>
          </div>
        </div>

        {/* Steps */}
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          4 Steps to Launch Your Panantukan Programme on Creatdrop
        </h2>
        <div className="mb-10 space-y-4">
          {[
            {
              n: "1",
              title: "Lead with the weapons-derived structure",
              body: "Your first module should explain how Panantukan angles and entries derive from stick and blade mechanics — this is the insight that converts sport boxers and FMA stick students simultaneously. Demonstrating one gunting application against a jab makes the principle immediately concrete.",
            },
            {
              n: "2",
              title: "Structure around the three ranges",
              body: "Largo (long), medio (medium), and corto (close) range each contain distinct Panantukan entries and destructions. Organising your curriculum around range transitions — not just technique collections — gives students a coherent tactical framework they can immediately apply.",
            },
            {
              n: "3",
              title: "Build a cross-trainer module for the boxing/MMA audience",
              body: "A specifically titled module — \"Add Panantukan to Your Boxing/MMA Game\" — converts the striking arts cross-training market directly. This audience is large, financially invested in training, and specifically motivated by the tactical extension Panantukan provides.",
            },
            {
              n: "4",
              title: "Use Creatdrop to manage every business function",
              body: "Creatdrop handles payment, video hosting, membership access, and student progress tracking. You focus exclusively on recording and teaching; the platform manages the recurring subscription, the access controls, and the payment infrastructure between you and your global students.",
            },
          ].map((step) => (
            <div key={step.n} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                {step.n}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing channels */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Best Marketing Channels for Panantukan Masters
        </h2>
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 font-semibold text-slate-900">MMA & Boxing YouTube</h3>
            <p className="text-sm text-slate-600">
              Short-form demonstrations of gunting destructions against common boxing combinations
              perform exceptionally well in MMA and boxing YouTube communities. A single 3-minute
              clip showing a gunting on a jab regularly drives thousands of profile visits and
              direct programme enquiries from serious striking practitioners.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 font-semibold text-slate-900">JKD & FMA Communities</h3>
            <p className="text-sm text-slate-600">
              JKD Facebook groups, FMA subreddits, and dedicated Inosanto Method communities
              contain tens of thousands of practitioners who already know and respect Panantukan.
              Contributing deep knowledge to these communities — explaining lineage differences,
              demonstrating applications — builds direct enrolment from the most motivated buyers.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 font-semibold text-slate-900">Podcast Guest Appearances</h3>
            <p className="text-sm text-slate-600">
              Martial arts and self-defence podcasts specifically seek out FMA practitioners.
              A 60-minute interview explaining Panantukan&apos;s weapon-derived striking logic and
              demonstrating applications reaches an audience already primed to purchase quality
              online instruction.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-2 font-semibold text-slate-900">Filipino Diaspora Social Networks</h3>
            <p className="text-sm text-slate-600">
              Filipino community Facebook groups, WhatsApp networks, and OFW associations across
              North America, the Gulf, and Europe reach the culturally motivated diaspora segment.
              Heritage messaging — &quot;the empty-hand expression of our national martial art&quot;
              — converts strongly in these communities.
            </p>
          </div>
        </div>

        {/* Physical demands */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Physical Demands Your Programme Should Address
        </h2>
        <div className="mb-10 space-y-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="mb-1 font-semibold text-slate-900">Elbow & Bicep from Gunting Mechanics</h3>
            <p className="text-sm text-slate-600">
              The gunting scissors action applies sudden compressive force to the bicep and forearm
              of both practitioner and training partner. Elbow joint preparation — tricep tendon
              and medial collateral ligament conditioning — and bicep flexibility work should begin
              before gunting drilling at speed to protect both parties during partner practice.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="mb-1 font-semibold text-slate-900">Shoulder & Chest from Rapid Combination Training</h3>
            <p className="text-sm text-slate-600">
              Panantukan&apos;s flowing combinations — integrating punches, elbows, shoulder bumps,
              and trapping in rapid sequence — demand shoulder internal and external rotation
              endurance that sport boxers often lack. Rotator cuff conditioning and posterior
              shoulder mobility work before high-volume combination drilling prevents the shoulder
              overuse injuries common in the first training month.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <h3 className="mb-1 font-semibold text-slate-900">Hip & Lower Body from Footwork Transitions</h3>
            <p className="text-sm text-slate-600">
              Panantukan&apos;s rapid range transitions — entering from largo to corto in a single
              step while maintaining punching structure — demand hip flexor mobility and hip
              adductor stability under dynamic load. A hip mobility prerequisite module prevents
              the lower-back compensation that occurs when students rush range transitions before
              their mobility base supports them.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-violet-600 p-8 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold">
            Ready to Share Panantukan with a Global Audience?
          </h2>
          <p className="mb-6 text-violet-100">
            Join Creatdrop and turn your Filipino boxing expertise into a global online school.
            No technical setup. No payment infrastructure to build. Just your knowledge and a
            platform designed for masters who want to teach without limits.
          </p>
          <WaitlistForm />
        </div>

        {/* Related articles */}
        <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              href: "/blog/sell-masters-escrima-fitness-programs-online",
              title: "Sell Masters Escrima Fitness Programs Online",
            },
            {
              href: "/blog/sell-masters-pekiti-tirsia-kali-fitness-programs-online",
              title: "Sell Masters Pekiti-Tirsia Kali Fitness Programs Online",
            },
            {
              href: "/blog/sell-masters-wing-chun-fitness-programs-online",
              title: "Sell Masters Wing Chun Fitness Programs Online",
            },
            {
              href: "/blog/sell-masters-chin-na-fitness-programs-online",
              title: "Sell Masters Chin Na Fitness Programs Online",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-slate-200 p-4 text-sm font-medium text-violet-700 hover:border-violet-300 hover:bg-violet-50 transition-colors"
            >
              {link.title} →
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
