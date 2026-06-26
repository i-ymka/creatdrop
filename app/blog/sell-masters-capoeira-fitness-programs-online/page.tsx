import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"

export const metadata: Metadata = {
  title: "How to Sell Masters Capoeira Fitness Programs Online | Creatdrop",
  description:
    "Reach masters capoeira practitioners aged 35–65+ competing in CBCC and ICA World Championships across Brazil, Portugal, and Europe. Sell flexibility and hip conditioning programs online with recurring revenue.",
  openGraph: {
    title: "How to Sell Masters Capoeira Fitness Programs Online | Creatdrop",
    description:
      "Reach masters capoeira practitioners aged 35–65+ competing in CBCC and ICA World Championships across Brazil, Portugal, and Europe. Sell flexibility and hip conditioning programs online with recurring revenue.",
    type: "article",
  },
}

export default function SellMastersCapoeiraFitnessPage() {
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
              Sell Masters Capoeira Fitness Programs Online
            </li>
          </ol>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
          How to Sell Masters Capoeira Fitness Programs Online
        </h1>

        {/* Intro */}
        <div className="prose prose-slate mb-10 max-w-none">
          <p>
            Capoeira is a Brazilian martial art and cultural practice that combines acrobatic
            movement, music, and combat in a form unique in the world of physical disciplines.
            Governed internationally through bodies including the Confederação Brasileira de
            Capoeira (CBCC) and the International Capoeira Association, the art has global
            reach with established communities across Brazil, Portugal, Germany, France, the
            United Kingdom, the United States, and Japan. Masters practitioners — capoeiristas
            aged 35 and older who continue to train and compete or perform in capoeira rodas —
            represent a significant and growing segment of the global community. Many began
            training in childhood or their early 20s and have accumulated two or three decades
            of movement practice that has shaped their bodies in specific ways.
          </p>
          <p>
            The conditioning challenges for masters capoeira practitioners are well-defined and
            underserved. The ginga — the foundational swaying movement of capoeira — places
            sustained lateral demand on hip abductors and inner thigh musculature. Acrobatic
            elements like the au (cartwheel) and macaco (back handspring) require shoulder
            stability and wrist loading that accumulates significantly over decades of training.
            The low-grappling au and negativa positions demand lumbar flexibility and hip flexor
            length that decline naturally with age without targeted maintenance. And the high-kick
            techniques — meia lua de frente, armada, queixada — require hip flexor and hamstring
            resilience for practitioners who are no longer in their teens. A conditioning program
            built around maintaining capoeira movement quality and preventing the specific injuries
            that end training careers prematurely is exactly what this community needs and currently
            lacks from any specialist source.
          </p>
          <p>
            The capoeira community has a strong online presence and is accustomed to consuming
            digital content — there are thousands of capoeira YouTube channels, Instagram accounts,
            and Facebook groups globally. But almost none of this content addresses the specific
            conditioning needs of masters practitioners managing aging bodies that need to maintain
            the physical demands of the art. Creatdrop gives you the platform to fill this gap
            with a subscription program that reaches the global capoeira community through its
            existing digital infrastructure — a community already online, already searching,
            and already willing to pay for expert guidance that understands their practice deeply.
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Suggested Pricing for Masters Capoeira Programs
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
                  <td className="px-4 py-3 text-slate-600">Hip flexibility protocol + shoulder and wrist prehab routine</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Core</td>
                  <td className="px-4 py-3 text-slate-600">$47</td>
                  <td className="px-4 py-3 text-slate-600">Full training longevity plan + movement maintenance videos + Q&amp;A</td>
                </tr>
                <tr className="border-b border-slate-100 bg-white">
                  <td className="px-4 py-3 font-medium text-slate-800">Competition Prep</td>
                  <td className="px-4 py-3 text-slate-600">$67</td>
                  <td className="px-4 py-3 text-slate-600">10-week roda and competition conditioning block + recovery guide</td>
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
                  <td className="px-4 py-3 font-medium text-slate-800">Academy Licence</td>
                  <td className="px-4 py-3 text-slate-600">$177</td>
                  <td className="px-4 py-3 text-slate-600">Up to 15 adult practitioners, mestre dashboard, group resources</td>
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
              <h3 className="mb-2 font-semibold text-slate-800">Brazilian Masters Capoeiristas</h3>
              <p className="text-sm text-slate-600">
                Brazil has the largest and most diverse capoeira community globally, with groups
                across every state representing both capoeira angola and capoeira regional traditions.
                Masters practitioners aged 35–65+ who train actively in Brazilian academies are
                highly motivated to maintain their physical quality and extend their training
                careers. Portuguese-language content framed around training longevity resonates
                deeply in a community where lifelong practice is a cultural value.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">European Capoeira Communities</h3>
              <p className="text-sm text-slate-600">
                Germany, France, the UK, Portugal, and Spain host large capoeira communities with
                established academies and annual batizados and troca de cordas (graduation events).
                European masters practitioners are typically professionals aged 35–55 with disposable
                income who began training in university and have maintained their practice for
                decades. English-language digital programs are well-received in these communities
                where Brazilian Portuguese fluency is limited.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">USA & North American Practitioners</h3>
              <p className="text-sm text-slate-600">
                The United States has a substantial capoeira community centred around major cities —
                New York, Los Angeles, San Francisco, Chicago, and Miami — with Brazilian immigrant
                mestres leading academies that include significant adult and masters enrollment.
                American capoeiristas are the most digitally engaged segment and have the highest
                per-capita willingness to purchase subscription conditioning programs from instructors
                who demonstrate deep capoeira knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            4 Steps to Launch Your Masters Capoeira Program
          </h2>
          <div className="space-y-4">
            {[
              {
                n: "1",
                title: "Frame the program around training longevity and jogo quality",
                body: "The aspiration of every serious capoeirista is to play a beautiful, flowing game in the roda into their 50s and 60s — the way that mestres like Pastinha played until very old age. Frame your program around maintaining the physical qualities that make the jogo possible at masters age: hip mobility for the ginga and au, shoulder stability for the bananeira (handstand), hamstring length for high kicks, and wrist resilience for floor work. This aspirational framing converts immediately in a community where longevity in practice is a deeply held cultural value.",
              },
              {
                n: "2",
                title: "Reach mestres and professores through global group networks",
                body: "Capoeira is organised globally through affiliated groups — Abadá-Capoeira, Capoeira Brasil, Cordão de Ouro, Grupo Senzala, and hundreds of others — each with a hierarchical structure connecting mestres worldwide through annual events, batizados, and digital communication. A single well-regarded mestre who recommends your program within their group network reaches hundreds or thousands of adult practitioners across multiple countries. Building relationships with two or three influential mestres is worth more than months of social media posting.",
              },
              {
                n: "3",
                title: "Create YouTube content using capoeira-specific vocabulary",
                body: "YouTube has thousands of capoeira technique videos but almost nothing addressing conditioning for masters practitioners specifically. Videos titled around capoeira-specific terms — \"ginga mobility for masters\", \"au shoulder strength\", \"meia lua de frente hip flexibility\" — will rank immediately for searches that capoeiristas are already making. Using the correct Portuguese capoeira vocabulary signals genuine expertise to a community that immediately rejects content that does not understand the art&apos;s language and culture.",
              },
              {
                n: "4",
                title: "Leverage batizado and troca de cordas events",
                body: "Annual graduation events — batizados and trocas de cordas — are the most important cultural gatherings in capoeira, drawing practitioners from multiple academies and cities to a single event. A presentation or workshop on masters conditioning at a well-attended batizado reaches hundreds of your exact target audience in a single day, with the social amplification of event photos and videos shared across capoeira community networks globally.",
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
              <h3 className="mb-2 font-semibold text-slate-800">YouTube — Capoeira-Specific Conditioning</h3>
              <p className="text-sm text-slate-600">
                Capoeira YouTube is large but entirely focused on technique instruction and
                cultural content. Conditioning videos explicitly targeting masters practitioners —
                using correct capoeira vocabulary and movement references — fill an obvious gap
                and rank for searches that experienced capoeiristas are already making. A series
                of six to eight videos covering the major physical maintenance needs of masters
                practitioners creates a permanent acquisition channel in every country where
                capoeira is practised.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Global Capoeira Group Networks</h3>
              <p className="text-sm text-slate-600">
                Major international capoeira groups — Abadá-Capoeira, Capoeira Brasil, Grupo
                Senzala — each have thousands of members across dozens of countries connected
                through group WhatsApp networks, annual events, and social media pages. A
                recommendation from a respected mestre within one of these networks spreads to
                every affiliated academy globally within days. This peer-trust channel is the
                most powerful distribution mechanism in capoeira and requires only genuine
                expertise and two or three key relationships to activate.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Instagram — Capoeira Community</h3>
              <p className="text-sm text-slate-600">
                Capoeira Instagram is extremely active globally, with hundreds of accounts from
                mestres, academies, and practitioners sharing movement videos, event photos, and
                cultural content. Regular posts demonstrating capoeira-specific conditioning
                exercises — a hip mobility flow for the ginga, a shoulder stability drill for
                the bananeira — build authority within this visually-driven community and drive
                traffic to your Creatdrop subscription from every country in the capoeira world
                simultaneously.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold text-slate-800">Batizado Events & Workshops</h3>
              <p className="text-sm text-slate-600">
                Batizado events at major academies in Brazil, Europe, and the USA attract hundreds
                of practitioners from multiple groups and cities. A 90-minute masters conditioning
                workshop at a well-attended event — particularly one that hosts significant adult
                enrollment — reaches your exact target audience in person, generates video content
                for social sharing, and creates the personal relationships with mestres and
                professores that drive organic group-network recommendations for months afterward.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 rounded-2xl bg-violet-50 p-8">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">
            Start Selling Masters Capoeira Programs Today
          </h2>
          <p className="mb-6 text-slate-600">
            Join the Creatdrop waitlist and be first to launch. Recurring revenue from a global
            community that already consumes digital content voraciously — and has never had a
            conditioning specialist who truly understands the art.
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
                href: "/blog/sell-masters-wrestling-fitness-programs-online",
                title: "Sell Masters Wrestling Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-taekwondo-fitness-programs-online",
                title: "Sell Masters Taekwondo Fitness Programs Online",
              },
              {
                href: "/blog/sell-masters-sumo-fitness-programs-online",
                title: "Sell Masters Sumo Fitness Programs Online",
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
