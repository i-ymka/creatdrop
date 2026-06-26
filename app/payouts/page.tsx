import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creator payouts — Creatdrop",
  description:
    "How Creatdrop pays creators. 0% platform commission — standard payment processing applies. Paid weekly via PayPal.",
};

export default function PayoutsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100 px-6 py-4">
        <Link href="/" className="text-slate-900 font-semibold text-lg">
          Creatdrop
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          Creator payouts
        </h1>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10">
          Creatdrop takes 0% platform commission on your sales. Standard Paddle payment processing fees apply. Paid out to you via PayPal.
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            How it works
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-relaxed">
            <li>Buyer pays via Paddle on your storefront.</li>
            <li>Funds land in our processing account.</li>
            <li>
              Every week, we manually transfer the full sale amount to your
              PayPal email.
            </li>
            <li>
              You see the payout reflected in your settings (we mark it{" "}
              <code className="px-1.5 py-0.5 rounded bg-slate-100 text-sm font-mono text-slate-900">
                paidOutAt
              </code>{" "}
              on the sale).
            </li>
          </ol>
        </section>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 mb-10">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-slate-900">
              Payouts are processed weekly via PayPal.
            </strong>{" "}
            Automated payouts are on the roadmap — see our changelog for
            shipping date.
          </p>
        </div>

        <Link
          href="/dashboard#payout-email-form"
          className="inline-flex items-center justify-center rounded-lg bg-violet-600 hover:bg-violet-700 active:bg-violet-700 text-white font-semibold px-6 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
        >
          Set your payout email
        </Link>
      </main>
    </div>
  );
}
