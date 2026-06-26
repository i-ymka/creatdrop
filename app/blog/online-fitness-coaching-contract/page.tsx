import type { Metadata } from "next"
import Link from "next/link"
import { WaitlistForm } from "@/components/WaitlistForm"
import { BlogArticleSchema } from "@/components/BlogArticleSchema"

export const metadata: Metadata = {
  title: "Online Fitness Coaching Contract: What to Include (+ Free Template Guide) | Creatdrop",
  description:
    "Protect yourself and your clients with a solid coaching agreement. Here\u2019s exactly what clauses every online fitness coach needs \u2014 and what to avoid.",
  alternates: {
    canonical: "https://creatdrop.com/blog/online-fitness-coaching-contract",
  },
  openGraph: {
    title: "Online Fitness Coaching Contract: What to Include (+ Free Template Guide) | Creatdrop",
    description:
      "Protect yourself and your clients with a solid coaching agreement. Here\u2019s exactly what clauses every online fitness coach needs \u2014 and what to avoid.",
    url: "https://creatdrop.com/blog/online-fitness-coaching-contract",
    siteName: "Creatdrop",
    type: "article",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Online Fitness Coaching Contract: What to Include (+ Free Template Guide) | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Fitness Coaching Contract: What to Include (+ Free Template Guide) | Creatdrop",
    description:
      "Protect yourself and your clients with a solid coaching agreement. Here\u2019s exactly what clauses every online fitness coach needs \u2014 and what to avoid.",
  },
}

export default function OnlineFitnessCoachingContract() {
  return (
    <main className="min-h-screen bg-white">
      <BlogArticleSchema
        title="Online Fitness Coaching Contract: What to Include (+ Free Template Guide)"
        description="Protect yourself and your clients with a solid coaching agreement. Here's exactly what clauses every online fitness coach needs — and what to avoid."
        url="https://creatdrop.com/blog/online-fitness-coaching-contract"
        datePublished="2026-04-24"
      />

      {/* Nav */}
      <header className="border-b border-slate-100 px-6 py-4">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-lg font-semibold text-violet-600 hover:text-violet-700"
          >
            Creatdrop
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-slate-700">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">Legal &amp; Business</span>
        </nav>

        {/* Category label */}
        <span className="mb-4 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
          Legal &amp; Business
        </span>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          Online Fitness Coaching Contract: What to Include (+ Free Template Guide)
        </h1>

        <p className="mb-10 text-base text-slate-500">
          10 min read &mdash; Published April 2026
        </p>

        <div className="space-y-6 text-[17px] leading-relaxed text-slate-700">
          <p className="mb-4 text-slate-700 leading-relaxed">
            A coaching contract is not bureaucracy. It is the document that stands between you and
            a chargeback dispute at week eight, a client who claims your program caused an injury,
            or a scope creep situation where one program quietly became unlimited daily messaging.
            Every online fitness coach who works with clients directly needs one. And even coaches
            who only sell digital products need a Terms of Sale that covers the same ground.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            This guide walks through every clause a fitness coaching contract should contain, explains
            what each one actually protects you from, covers the difference between a coaching contract
            and Terms of Sale, and flags the mistakes coaches make most often when drafting their own.
          </p>

          {/* Section 1 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Why Every Online Coach Needs a Contract
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Operating without a contract does not mean nothing bad will happen. It means that when
            something does happen, you have no documented agreement to refer to. Courts and payment
            processors make decisions based on written records. Without one, the outcome defaults
            to whoever tells the more convincing story.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Here are the four situations where the absence of a contract causes the most damage:
          </p>
          <ul className="mb-4 space-y-3 pl-0">
            <li className="flex gap-3">
              <span className="mt-1 flex h-2 w-2 shrink-0 items-center justify-center">
                <span className="block h-2 w-2 rounded-full bg-violet-400" />
              </span>
              <span>
                <strong className="text-slate-800">Refund demand after 8 weeks.</strong> A client
                completes most of the program, does not see the results they expected, and files a
                chargeback or demands a full refund. Without a written refund policy they agreed to,
                your payment processor will typically side with the client.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-2 w-2 shrink-0 items-center justify-center">
                <span className="block h-2 w-2 rounded-full bg-violet-400" />
              </span>
              <span>
                <strong className="text-slate-800">Injury claim.</strong> A client follows a program,
                does not disclose a pre-existing condition, gets hurt, and attributes the injury to
                your instructions. A liability waiver and medical disclaimer in your contract
                significantly limit your exposure. No contract means no documented acknowledgment
                of risk on their part.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-2 w-2 shrink-0 items-center justify-center">
                <span className="block h-2 w-2 rounded-full bg-violet-400" />
              </span>
              <span>
                <strong className="text-slate-800">Client ghosts after two sessions.</strong> You have
                delivered two of twelve coaching calls, they stop responding, and now you want to keep
                the payment for work already done. If your contract specifies what happens when a client
                terminates early, you have a basis for that position. Without it, the conversation
                becomes a dispute.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-2 w-2 shrink-0 items-center justify-center">
                <span className="block h-2 w-2 rounded-full bg-violet-400" />
              </span>
              <span>
                <strong className="text-slate-800">Scope creep.</strong> What started as a 12-week
                program with two check-in calls per month has become daily WhatsApp messages, meal
                plan revisions every week, and a request to review their gym programming. A contract
                that specifies exactly what is included gives you a documented boundary to point to.
              </span>
            </li>
          </ul>
          <p className="mb-4 text-slate-700 leading-relaxed">
            If you only sell digital products and do not offer 1:1 coaching, a coaching contract is
            not required. What covers you instead is a Terms of Sale on your product page, which
            handles refund policy, intellectual property, and the no-resale clause. The principles
            are the same — the format is different.
          </p>

          {/* Section 2 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            The 10 Clauses Every Fitness Coaching Contract Needs
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            A fitness coaching contract differs from a generic freelancer agreement in several important
            ways. Generic templates omit the medical disclaimer and liability waiver, which are the
            two clauses most specific to fitness work and the two that carry the highest risk if
            missing. Use a fitness-specific template or ensure these ten clauses are present.
          </p>

          <div className="space-y-6">
            {/* 1 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-800">Parties</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Full legal names and contact information for both the coach and the client. This
                  sounds obvious but generic templates often use placeholder business names instead of
                  the legal names that would appear in a court filing. Include email addresses and,
                  for clients, a mailing address. The contract is only enforceable if it correctly
                  identifies who entered into it.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-800">Scope of Services</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  A precise description of exactly what is included and, critically, what is not. Vague
                  language like &ldquo;coaching support&rdquo; is the primary cause of scope creep. Be
                  specific: &ldquo;12 workout programs delivered as PDF documents, two 30-minute video
                  check-in calls per month via Zoom, response to messages within 48 hours on business
                  days. Nutritional advice, meal planning, and supplement recommendations are not
                  included in this agreement.&rdquo; The more specific the scope, the less room for
                  disagreement later.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-800">Duration and Start Date</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  A specific start date, an end date, and any renewal terms. &ldquo;12 weeks beginning
                  on [date], ending on [date]. This agreement does not automatically renew. Continuation
                  of services requires a new agreement.&rdquo; This prevents ambiguity about whether
                  coaching obligations continue after the stated period ends. If you offer month-to-month
                  arrangements, specify the notice period required to end the agreement.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="font-semibold text-slate-800">Payment Terms</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  The total amount, the payment schedule, the due date for each installment, any late
                  fees, and what happens if a payment fails. &ldquo;Total fee: $600. Paid as three
                  installments of $200 on [dates]. Payments more than 5 days late incur a $25 late fee.
                  If payment fails after two attempts, services are paused until the outstanding balance
                  is settled.&rdquo; Specify whether you require payment before services begin or accept
                  payment upon completion of each phase.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="font-semibold text-slate-800">Refund Policy</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  State your refund position explicitly. Options include no refund after the agreement
                  is signed and services have begun, a pro-rata refund based on services not yet
                  delivered, or a full refund within a specific window before any work is delivered.
                  Whatever your policy is, write it plainly. A clear refund clause is your primary
                  defense against a chargeback dispute. Payment processors require merchants to have
                  a documented policy; vague or absent policies are treated as no policy, which favors
                  the buyer.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                6
              </span>
              <div>
                <p className="font-semibold text-slate-800">Health and Medical Disclaimer</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  The client confirms that they have no medical conditions, injuries, or physical
                  limitations that would prevent safe participation in the program, or that they have
                  disclosed all relevant conditions. Include explicit language that the coach is not a
                  licensed physician and that the services do not constitute medical advice. Recommend
                  — in the contract text — that the client consult a physician before beginning. This
                  clause shifts the responsibility for accurate health disclosure to the client.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                7
              </span>
              <div>
                <p className="font-semibold text-slate-800">Liability Waiver</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  The client acknowledges that exercise carries inherent risk and agrees not to hold
                  the coach liable for injury resulting from participation in the program, subject to
                  the limitations described in the next section. This clause needs to be written clearly
                  and should not be buried in a wall of text. Some contracts use bold text or a
                  separate signature line specifically for the liability waiver to ensure the client
                  has actively acknowledged it.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                8
              </span>
              <div>
                <p className="font-semibold text-slate-800">Intellectual Property</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  All workout programs, templates, documents, and materials created by the coach remain
                  the coach&apos;s intellectual property. The client receives a personal, non-transferable
                  license to use them. The client may not reproduce, distribute, share, resell, or
                  create derivative works from any materials provided under this agreement. This clause
                  is especially important for coaches who deliver PDF programs, video content, or
                  templated spreadsheets that could easily be forwarded or resold.
                </p>
              </div>
            </div>

            {/* 9 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                9
              </span>
              <div>
                <p className="font-semibold text-slate-800">Confidentiality</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  The coach will not share the client&apos;s personal information, progress data, photos,
                  measurements, or health information without explicit written consent. If you wish to
                  use client progress photos as testimonials or marketing material, include a separate
                  consent provision here with an opt-in checkbox — do not make it a blanket assumption.
                  Clients have a reasonable expectation of privacy regarding their health data, and
                  documenting your confidentiality obligations builds trust.
                </p>
              </div>
            </div>

            {/* 10 */}
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                10
              </span>
              <div>
                <p className="font-semibold text-slate-800">Termination Clause</p>
                <p className="mt-1 text-slate-700 leading-relaxed">
                  Either party may terminate this agreement with written notice of a specified number
                  of days (7 or 14 is standard). Specify exactly what happens to payments already made:
                  does the client receive a pro-rata refund for sessions not yet delivered, or is payment
                  for the current billing period retained in full? Also address coach-initiated
                  termination — if a client is abusive, non-communicative, or acts in bad faith, you
                  need the right to end the engagement without owing a refund.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Contract vs Terms of Sale for Digital Products
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Not all fitness coaches offer 1:1 services. If you sell PDFs, video programs, or
            downloadable templates without any ongoing coaching relationship, a full coaching contract
            is not the right tool. Here is when each document type applies:
          </p>

          <div className="mb-6 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    Type
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    When to use
                  </th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-700">
                    What it covers
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-800">
                    Coaching contract
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    1:1 or group coaching with ongoing sessions
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Services, duration, payment schedule, liability, IP, termination
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-3 font-medium text-slate-800">
                    Terms of Sale
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    One-time digital product purchase (PDF, video, template)
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Refund policy, IP ownership, no-resale restriction
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-medium text-slate-800">
                    Terms of Service
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Membership platform or ongoing subscription
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    Acceptable use, account rules, content access, cancellation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4 text-slate-700 leading-relaxed">
            If your business model is exclusively digital product sales — no calls, no messaging, no
            personalization — then Terms of Sale on your product page is sufficient protection. The
            key clauses to include are your refund policy, the IP ownership statement, and the
            prohibition on resale or redistribution. Creatdrop lets you add custom terms at checkout,
            so buyers must acknowledge the terms before completing their purchase.
          </p>

          {/* Section 4 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Common Mistakes in Fitness Contracts
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Most coaches who do have a contract still have a flawed one. These are the most common
            problems found in fitness coaching agreements:
          </p>

          <ul className="mb-4 space-y-3">
            <li className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                !
              </span>
              <span className="text-slate-700">
                <strong className="text-slate-800">Using a generic freelancer template.</strong> Templates
                designed for web designers, writers, or consultants do not include fitness-specific clauses.
                The medical disclaimer and liability waiver are almost always absent. These are the two
                clauses that carry the most unique legal weight in a fitness context.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                !
              </span>
              <span className="text-slate-700">
                <strong className="text-slate-800">No medical disclaimer.</strong> This is the single
                highest-risk omission. If a client with an undisclosed condition is injured and there is
                no documentation that they confirmed their fitness to participate, the coach&apos;s
                exposure is significantly higher. The disclaimer does not guarantee protection, but its
                absence removes a critical layer of it.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                !
              </span>
              <span className="text-slate-700">
                <strong className="text-slate-800">Vague scope language.</strong> Phrases like
                &ldquo;ongoing coaching support,&rdquo; &ldquo;program guidance,&rdquo; or &ldquo;regular
                check-ins&rdquo; have no fixed meaning. Every element of your service should be
                quantified: number of programs, call frequency and duration, response time commitment,
                and explicit list of what is not included.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                !
              </span>
              <span className="text-slate-700">
                <strong className="text-slate-800">No IP clause.</strong> Without it, a client who
                shares your workout program with 50 friends has not clearly violated any written
                agreement. An IP clause makes the prohibition explicit and gives you a documented basis
                for enforcement.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                !
              </span>
              <span className="text-slate-700">
                <strong className="text-slate-800">Missing refund terms.</strong> No refund policy is
                not the same as a no-refund policy. If your contract does not address refunds, a
                client&apos;s chargeback dispute is more likely to succeed because the payment processor
                has no documented policy to reference.
              </span>
            </li>
            <li className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                !
              </span>
              <span className="text-slate-700">
                <strong className="text-slate-800">No governing law clause.</strong> Online coaching
                crosses state and country lines. Your contract should specify which jurisdiction&apos;s
                laws govern the agreement and where any disputes would be handled. Without this, a
                dispute between a coach in Texas and a client in Australia has no clear legal framework.
              </span>
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            How to Get a Client to Sign
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            A contract that exists but is never signed is not a contract. The practical challenge for
            online coaches is collecting a legally valid signature remotely without creating friction
            that delays the start of coaching. Here is the workflow that works:
          </p>
          <ul className="mb-4 space-y-2 pl-6 list-disc">
            <li className="text-slate-700 leading-relaxed">
              <strong className="text-slate-800">Use DocuSign or HelloSign.</strong> Both have free
              tiers that cover a reasonable volume of contracts. The client receives a link by email,
              reviews the document, and signs electronically. The signed document is stored in both
              parties&apos; accounts with a timestamp and audit trail. Electronic signatures are legally
              valid in virtually every jurisdiction.
            </li>
            <li className="text-slate-700 leading-relaxed">
              <strong className="text-slate-800">Attach the contract to the first invoice.</strong>{" "}
              Send the contract and the invoice together. The client signs the contract and pays the
              invoice in the same step. This removes the awkward gap between &ldquo;we agreed on the
              details&rdquo; and &ldquo;please also sign this document I forgot to send.&rdquo;
            </li>
            <li className="text-slate-700 leading-relaxed">
              <strong className="text-slate-800">Do not begin coaching until the contract is signed.</strong>{" "}
              Starting before signature puts you in the position of having delivered services with no
              agreement in place. It also signals that the contract is optional, which undermines its
              standing if a dispute arises later.
            </li>
            <li className="text-slate-700 leading-relaxed">
              <strong className="text-slate-800">Keep a digital copy organized by client.</strong>{" "}
              Create a folder in Google Drive (or equivalent) for each client. Store the signed
              contract, any intake forms, and correspondence there. If a dispute arises months later,
              you need to be able to produce the document quickly.
            </li>
            <li className="text-slate-700 leading-relaxed">
              <strong className="text-slate-800">For digital products, use a checkout checkbox.</strong>{" "}
              If you sell programs rather than coaching sessions, a checkbox at checkout that reads
              &ldquo;I agree to the Terms of Sale&rdquo; with a link to your terms document serves the
              same function as a signature for that transaction. Creatdrop supports this natively —
              buyers must check the box before completing their purchase, and the agreement is logged
              with the order.
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            What a Liability Waiver Actually Protects You From
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            This is the clause coaches misunderstand most often. A liability waiver does not make you
            immune to legal action. It does not protect you from your own negligence. What it does is
            shift responsibility for risks that are inherent to exercise — risks the client voluntarily
            assumes by choosing to participate.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The legal distinction is between <strong className="text-slate-800">assumed risk</strong>{" "}
            and <strong className="text-slate-800">negligence</strong>:
          </p>
          <ul className="mb-4 space-y-3 pl-6 list-disc">
            <li className="text-slate-700 leading-relaxed">
              <strong className="text-slate-800">Assumed risk (waiver helps).</strong> A client ignores
              your written instruction to use a lighter weight during a movement pattern they are not
              yet strong enough for, loads the bar beyond their capacity, and injures their knee. The
              client chose to disregard specific coaching guidance. A well-drafted waiver significantly
              limits your liability in this scenario because the risk was inherent to the activity and
              the client acted against your advice.
            </li>
            <li className="text-slate-700 leading-relaxed">
              <strong className="text-slate-800">Negligence (waiver does not help).</strong> You provide
              a client with recklessly dangerous programming — loading that exceeds any reasonable
              standard of care for their stated fitness level — and they are injured following your
              instructions exactly. A liability waiver cannot protect you from the consequences of your
              own professional negligence. Courts will not enforce a waiver that attempts to release
              a party from liability for gross negligence or intentional harm.
            </li>
          </ul>
          <p className="mb-4 text-slate-700 leading-relaxed">
            The practical implication: write programs that reflect a reasonable standard of care for
            your client&apos;s fitness level, include clear form cues and progression guidelines, and
            your liability waiver provides meaningful protection. The waiver and the quality of your
            coaching work together — the waiver is not a substitute for competent programming.
          </p>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Always include a specific recommendation in the contract that the client consult a
            physician before beginning the program. This language, combined with the health disclosure
            clause, establishes that you took reasonable steps to screen for contraindications. It
            does not guarantee protection, but it demonstrates professional diligence.
          </p>
        </div>

        {/* CTA Section */}
        <section className="mt-16 rounded-2xl bg-violet-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-slate-900">Protect Your Business From Day One</h2>
          <p className="mb-6 text-slate-600">
            Creatdrop lets you add custom Terms of Sale to every product — so you are covered before
            the first download.
          </p>
          <WaitlistForm source="blog-online-fitness-coaching-contract" />
        </section>

        {/* Related articles */}
        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Keep reading
          </p>
          <div className="space-y-3">
            <Link
              href="/blog/how-to-price-fitness-programs"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                How to Price Fitness Programs: The Coach&apos;s Complete Guide &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Stop guessing what to charge. Data-driven pricing benchmarks for fitness digital products.
              </p>
            </Link>
            <Link
              href="/blog/online-personal-training-packages"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                Online Personal Training Packages: How to Structure and Price Them &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Package structures that sell, with pricing tiers and what to include at each level.
              </p>
            </Link>
            <Link
              href="/blog/sell-personal-training-online"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                How to Sell Personal Training Online: The Complete Playbook &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                From setting up your first product to landing consistent clients online.
              </p>
            </Link>
            <Link
              href="/blog/fitness-coach-pricing"
              className="group block rounded-xl border border-slate-200 p-5 hover:border-violet-200 hover:bg-violet-50 transition-colors"
            >
              <p className="font-semibold text-slate-800 group-hover:text-violet-700">
                Fitness Coach Pricing: What to Charge for Every Service Type &rarr;
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Market rate data for 1:1 coaching, group programs, digital products, and memberships.
              </p>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
