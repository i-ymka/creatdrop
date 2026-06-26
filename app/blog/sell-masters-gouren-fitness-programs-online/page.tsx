import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "Sell Masters Gouren Fitness Programs Online | Creatdrop",
  description:
    "Monetise your Gouren expertise. Creatdrop gives instructors the tools to sell Breton folk wrestling programmes, Celtic grappling series, and school licences to a global audience.",
  openGraph: {
    title: "Sell Masters Gouren Fitness Programs Online | Creatdrop",
    description:
      "Monetise your Gouren expertise. Creatdrop gives instructors the tools to sell Breton folk wrestling programmes, Celtic grappling series, and school licences to a global audience.",
  },
}

export default function GourenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 pt-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">Sell Masters Gouren Fitness Programs Online</span>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900">
          Sell Masters Gouren Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Gouren is the traditional folk wrestling of Brittany, a Celtic region of north-western
            France with a distinct language, culture, and sporting identity. The art is practised
            standing on grass, with competitors gripping each other by the jacket, and a fall
            (defined as three points of contact with the ground) ending the bout. Gouren is
            practised barefoot on grass, creating a distinctive aesthetic and physical demand
            profile that distinguishes it from mat-based wrestling arts. The governing body,
            the Fédération de Gouren, preserves the tradition through competitive events and
            links to the broader network of Celtic nations sports — the Celtic Wrestling Federation
            connects Gouren with Cornwall"s Cornish wrestling, Scotland"s backhold, Wales's
            collar-and-elbow, and Brittany within a shared Celtic sporting heritage.
          </p>
          <p>
            The Celtic diaspora dimension gives Gouren a marketing reach well beyond Brittany.
            The broader Celtic cultural identity — shared across Ireland, Scotland, Wales, Cornwall,
            Galicia, and the Breton community — creates an audience motivated by cultural heritage
            as much as martial arts interest. The Celtic Wrestling Federation's inter-Celtic
            competitions and the presence of Gouren at the Festival Interceltique de Lorient —
            one of the world's largest Celtic cultural gatherings, drawing hundreds of thousands
            of visitors annually — give the tradition substantial cultural visibility.
          </p>
          <p>
            For online instructors, Gouren occupies a genuinely rare position: a traditional European
            folk wrestling art with institutional support, a living competitive scene, and a cultural
            diaspora far exceeding its home region. Creatdrop lets qualified Gouren instructors reach
            the Celtic diaspora and the traditional wrestling community worldwide with premium
            programmes positioned at the intersection of cultural heritage and athletic practice.
          </p>
        </div>

        {/* Pricing table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Typical Gouren Programme Pricing</h2>
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
                  <td className="px-6 py-4">Gouren Foundation Programme</td>
                  <td className="px-6 py-4">$47 – $97</td>
                  <td className="px-6 py-4">Jacket grip, stance, balance, and basic throws</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Core Throwing Technique Series</td>
                  <td className="px-6 py-4">$67 – $117</td>
                  <td className="px-6 py-4">Hip, leg, and upper-body throws with entries</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Grass Wrestling Footwork Programme</td>
                  <td className="px-6 py-4">$57 – $107</td>
                  <td className="px-6 py-4">Barefoot grass surface balance and footwork</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Celtic Wrestling Comparison Course</td>
                  <td className="px-6 py-4">$57 – $97</td>
                  <td className="px-6 py-4">Gouren alongside Cornish, Scottish, and Welsh traditions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">Annual School Licence</td>
                  <td className="px-6 py-4">$147 / year</td>
                  <td className="px-6 py-4">White-label for Celtic cultural and wrestling programmes</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4">Complete Gouren Curriculum</td>
                  <td className="px-6 py-4">$167 – $247</td>
                  <td className="px-6 py-4">Full technique and competition preparation system</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Market segments */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Who Buys Gouren Programmes</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Celtic Diaspora</h3>
              <p className="text-sm text-slate-600">
                Breton, Irish, Scottish, Welsh, and Cornish diaspora communities worldwide
                with cultural interest in Celtic sporting traditions. The Festival Interceltique
                connection and pan-Celtic identity create a broad community far exceeding
                Brittany's geographic boundaries.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Traditional Wrestling Community</h3>
              <p className="text-sm text-slate-600">
                The international folk and traditional wrestling community investigating European
                wrestling traditions. Gouren is among the best-preserved and most institutionally
                supported Celtic wrestling arts, making it a natural focus for this growing
                global audience.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Outdoor and Functional Fitness Practitioners</h3>
              <p className="text-sm text-slate-600">
                The barefoot, grass-surface, jacket-grip format of Gouren appeals to the outdoor
                fitness and natural movement community seeking alternatives to gym-based training.
                The aesthetics of traditional outdoor wrestling perform well with this audience
                on social media.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">How to Launch Your Gouren Programme on Creatdrop</h2>
          <div className="space-y-4">
            {[
              ["Lead with the Celtic identity hook", "Gouren is not just a wrestling style — it is a living expression of Breton Celtic culture. For diaspora buyers, the cultural identity dimension may matter more than the technique. Lead with heritage, tradition, and the living competitive scene at the Festival Interceltique."],
              ["Film outdoors on grass in traditional attire", "The barefoot grass setting is visually distinctive and immediately communicates cultural authenticity. Outdoor filming with traditional wrestling attire creates content that stands out completely from gym-based martial arts instruction and drives organic social media sharing."],
              ["Publish and target Celtic cultural organisations", "Upload to Creatdrop and reach Celtic cultural associations, Irish and Breton diaspora networks, and the pan-Celtic sporting community. The Celtic Wrestling Federation provides direct institutional connections across six nations."],
              ["Connect to the broader folk wrestling movement", "The growing global interest in traditional and folk wrestling — including national champions from Turkey, Mongolia, and Switzerland — creates a receptive online community. Position Gouren as Europe's most culturally connected traditional wrestling art within this movement."],
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
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Best Marketing Channels for Gouren Instructors</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Celtic Cultural Media</h3>
              <p className="text-sm text-slate-600">
                Celtic cultural publications, podcasts, and community media across Brittany,
                Ireland, Scotland, Wales, and diaspora communities provide direct access to
                the community with the strongest cultural purchase motivation for Gouren content.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Festival Interceltique Channels</h3>
              <p className="text-sm text-slate-600">
                The Festival Interceltique de Lorient's media presence — including YouTube,
                social media, and press coverage — reaches hundreds of thousands of Celtic
                culture enthusiasts annually. Gouren content connected to festival events
                performs particularly strongly at festival season.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Traditional Wrestling Online Community</h3>
              <p className="text-sm text-slate-600">
                YouTube channels and forums covering Mongolian, Turkish, Swiss, and European
                folk wrestling traditions provide natural crossover discovery for Gouren
                content within the growing traditional wrestling enthusiast community.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 font-semibold text-slate-900">Outdoor and Natural Movement Platforms</h3>
              <p className="text-sm text-slate-600">
                The barefoot grass wrestling aesthetic connects Gouren to the natural movement,
                ancestral fitness, and outdoor training communities on Instagram and YouTube.
                This audience is substantially larger than the martial arts community and
                responds to the cultural heritage framing.
              </p>
            </div>
          </div>
        </section>

        {/* Physical demands */}
        <section className="mb-12 rounded-2xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Physical Demands of Gouren Training</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-slate-900">Barefoot Balance and Proprioception</h3>
              <p className="text-sm text-slate-600">
                Competing barefoot on grass develops a distinct proprioceptive sensitivity and
                foot-to-ground connection that shod athletes on mats do not develop. Barefoot
                grass training creates specific ankle stability and balance demands that translate
                into effective functional strength development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Jacket-Grip Throwing Mechanics</h3>
              <p className="text-sm text-slate-600">
                Gouren's jacket grip constrains throwing to leverage-based mechanics where hip
                position and whole-body coordination compensate for the fixed grip point. Developing
                effective throwing power within this constraint requires sustained partner drilling
                distinct from free-grip wrestling conditioning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Three-Point Fall Awareness</h3>
              <p className="text-sm text-slate-600">
                The Gouren scoring system (three points of body contact with the ground) creates
                specific defensive body awareness — knowing precisely how to break and redistribute
                contact to avoid a loss requires training attention different from pin-based or
                submission wrestling systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Start Selling Gouren Programmes Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join Creatdrop and turn your Breton folk wrestling expertise into a global online programme —
            no platform fees, no middlemen.
          </p>
          <WaitlistForm />
        </section>

        {/* Related articles */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Sell Masters Schwingen Fitness Programs Online", "/blog/sell-masters-schwingen-fitness-programs-online"],
              ["Sell Masters Glima Fitness Programs Online", "/blog/sell-masters-glima-fitness-programs-online"],
              ["Sell Masters Mongolian Wrestling Fitness Programs Online", "/blog/sell-masters-mongolian-wrestling-fitness-programs-online"],
              ["Sell Masters Greco-Roman Wrestling Fitness Programs Online", "/blog/sell-masters-greco-roman-wrestling-fitness-programs-online"],
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
