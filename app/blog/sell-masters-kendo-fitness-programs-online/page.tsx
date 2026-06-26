import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Kendo Fitness Programs Online | Creatdrop",
  description:
    "Reach masters kendo practitioners aged 35–70+ competing in All Japan Kendo Federation championships and IKF World Championships across Japan, Korea, and Europe. Sell wrist and shoulder conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Kendo Fitness Programs Online | Creatdrop",
    description:
      "Reach masters kendo practitioners aged 35–70+ competing in All Japan Kendo Federation championships and IKF World Championships across Japan, Korea, and Europe. Sell wrist and shoulder conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersKendoFitnessPage() {
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
              Sell Masters Kendo Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Kendo Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Kendo is a Japanese martial art of sword fighting practised with bamboo shinai and
            protective armour, governed in Japan by the All Japan Kendo Federation (AJKF) and
            internationally by the International Kendo Federation (IKF). The IKF World Kendo
            Championships, held every three years, attract competitors from over 60 countries,
            and the AJKF domestic structure includes formal dan-grade divisions that allow
            practitioners to compete well into their 60s and 70s against peers of similar rank
            and age. Kendo is unusual among martial arts in that it is genuinely practised by
            people of all ages as a lifelong pursuit — the concept of keiko (training) as a
            continuous lifelong practice is central to kendo culture, and masters divisions
            that attract serious competitors aged 35 to 70+ are a natural expression of this
            philosophy rather than a niche afterthought.
          </p>
          <p>
            The physical demands of kendo for masters practitioners are specific and poorly served
            by generic fitness content. The shinai strike — executed from a raised two-handed grip
            position — requires sustained shoulder external rotation strength and wrist extensor
            endurance across thousands of repetitions in a single practice session. The fumikomi
            (stamp step) that accompanies each strike creates repetitive impact load on the
            dominant ankle and knee. The sonkyo (crouching bow) performed at the beginning and
            end of each match demands hip flexor length and knee flexion capacity that deteriorates
            without targeted maintenance in practitioners aged 40 and older. A program built around
            these three specific demands — shoulder and wrist resilience, fumikomi impact
            preparation, and hip and knee mobility for sonkyo — addresses exactly the conditioning
            needs that every experienced kendoka manages but currently has no specialist resource
            to guide them through.
          </p>
          <p>
            Japan has the largest kendo community in the world with millions of registered
            practitioners, the vast majority of whom are adults training in community dojo.
            Korea has the second-largest community, followed by the United States, Brazil, and
            European nations. English-language kendo conditioning content is sparse and generic.
            Japanese-language conditioning content for kendo is somewhat more available but
            almost nothing targets masters practitioners specifically with sports science framing.
            Creatdrop gives you the platform to fill this gap across multiple languages and
            reach the global kendo community through federation channels, dojo networks, and
            the international kendo media that serves this already-digitally-active community.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Kendo Programs
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
                  <td className="px-4 py-3 text-slate-600">Wrist and shoulder prehab protocol + sonkyo hip mobility routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$47</td>
                  <td className="px-4 py-3 text-slate-600">Full keiko conditioning plan + video breakdowns + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Taikai Prep</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                  <td className="px-4 py-3 text-slate-600">10-week tournament block + fumikomi impact preparation guide</td>
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
                Japan has millions of kendo practitioners across community dojo, school clubs,
                and police and corporate kendo programmes. Adult dan-grade practitioners aged
                35–70+ who train multiple times per week and compete in age-division taikai
                (tournaments) are the primary masters segment. Japanese-language content with
                sports science framing around kendo-specific conditioning reaches this enormous
                domestic market through Niconico, Japanese YouTube, and dojo network channels.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Korean & Asian IKF Competitors</h3>
              <p className="text-sm text-slate-600">
                Korea (kumdo) has the second-largest kendo infrastructure globally, with a
                professional and amateur competitive structure that feeds into IKF World
                Championships. Taiwan, Hong Kong, and Singapore also maintain substantial
                kendo communities with active adult participation. English-language conditioning
                programs reach these markets effectively given the high English proficiency in
                Korean and Singaporean kendo communities.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Western Dojo Members</h3>
              <p className="text-sm text-slate-600">
                The United States, Brazil, France, Germany, Australia, and the UK all have
                established kendo federations with hundreds of affiliated dojo. Western kendo
                practitioners tend to be professionals aged 30–60 who began training in
                university or through martial arts crossover and continue as a lifelong practice.
                These English-speaking practitioners have disposable income and almost no access
                to specialist conditioning resources that understand kendo specifically.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Kendo Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Design around men-strike, sonkyo, and fumikomi demands",
                body: "Every kendo strike — men (head), kote (wrist), dou (body), tsuki (thrust) — is executed from a two-handed overhead grip with wrist snap at impact. The men strike requires shoulder external rotation strength and wrist extensor endurance that accumulates into tendinopathy in older practitioners who do not manage training volume carefully. The fumikomi creates ankle and tibial stress with every strike. Sonkyo demands hip and knee flexion under load. Name each of these in your program description using the correct Japanese terminology — this immediately signals genuine kendo expertise.",
              },
              {
                n: "2",
                title: "Reach dojo sensei through AJKF and national federation networks",
                body: "Kendo dojo are organised hierarchically through prefecture-level federations affiliated with the AJKF. Prefecture federations communicate with affiliated dojo regularly through newsletters and taikai announcements. A pitch to prefecture federation secretaries offering a free conditioning resource for dan-grade practitioners in their age-division competitions reaches every dojo in the prefecture simultaneously. Sensei who adopt your program for their adult students become advocates who recommend it to neighbouring dojo through the close interpersonal networks of Japanese kendo culture.",
              },
              {
                n: "3",
                title: "Create Japanese and English conditioning content for Niconico and YouTube",
                body: "Kendo YouTube in English covers technique and philosophy but contains almost nothing on conditioning for masters practitioners. Japanese Niconico and YouTube kendo content is larger but similarly absent on sports science conditioning for older kendoka. Videos using correct Japanese kendo vocabulary — fumikomi impact care, sonkyo hip preparation, wrist flexor-extensor balance for shinai strikes — rank immediately and build authority in both language markets simultaneously from a single content investment.",
              },
              {
                n: "4",
                title: "Target the global kendo community around IKF World Championship cycles",
                body: "The IKF World Kendo Championships, held every three years, mobilise the entire international kendo community around preparation, travel, and post-event analysis. A free masters conditioning guide distributed through IKF channels in the months before a World Championship reaches every national federation and their coaching staffs globally. This pre-championship window is the single highest-engagement moment in the international kendo calendar and the most efficient time to establish your program as the global conditioning resource for masters competitors.",
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
              <h3 className="mb-2 font-semibold text-slate-800">Kendo World Magazine & Online Media</h3>
              <p className="text-sm text-slate-600">
                Kendo World is the primary English-language kendo publication, covering
                international competition, philosophy, and technique with a global subscriber
                base of serious practitioners. A guest article on masters conditioning — framed
                around the physical demands of lifelong keiko — reaches the most engaged segment
                of the international English-speaking kendo community and carries editorial
                credibility that social media posts cannot replicate.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Niconico & Japanese YouTube</h3>
              <p className="text-sm text-slate-600">
                Japanese kendo content on Niconico and domestic YouTube is extensive but focused
                almost entirely on technique and tournament footage. Conditioning content targeting
                older kendoka — using correct terminology and framed around maintaining keiko
                quality into advanced age — fills an obvious gap and reaches the largest kendo
                community in the world through the platforms they already use daily for kendo
                content consumption.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Reddit r/kendo & Global Online Forums</h3>
              <p className="text-sm text-slate-600">
                The r/kendo subreddit and Kendo-related Facebook groups have active international
                memberships spanning every country with a kendo community. These online spaces
                are where Western kendoka ask questions, share resources, and discuss training.
                Regular contributions of genuinely useful conditioning advice — framed with
                correct kendo vocabulary and genuine understanding of the practice — build
                authority that converts community members into subscribers through the organic
                trust dynamics of specialist online communities.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">IKF & National Federation Channels</h3>
              <p className="text-sm text-slate-600">
                The IKF and national kendo federations in the USA (All United States Kendo
                Federation), UK (British Kendo Association), and other major markets publish
                newsletters and social media updates reaching all registered members. A
                conditioning resource endorsed or shared by a national federation carries
                significant credibility in kendo culture where institutional affiliation matters,
                and reaches every competitive practitioner in that country through a single
                federation communication.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Kendo Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first to launch. Recurring revenue from millions
            of kendo practitioners across Japan, Korea, and the global dojo network — a community
            that values lifelong practice and has no specialist conditioning resource yet.
          </p>
          <WaitlistForm />
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/blog/sell-masters-judo-fitness-programs-online",
                title: "Sell Masters Judo Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-karate-fitness-programs-online",
                title: "Sell Masters Karate Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-fencing-fitness-programs-online",
                title: "Sell Masters Fencing Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-archery-fitness-programs-online",
                title: "Sell Masters Archery Fitness Programs Online",
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
