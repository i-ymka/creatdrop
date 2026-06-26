import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Creatdrop",
  description: "Creatdrop Refund Policy",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-100 px-6 py-4">
        <Link href="/" className="text-zinc-900 font-semibold text-lg">
          Creatdrop
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Refund Policy</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: April 2026</p>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">Subscription Refunds</h2>
            <p>We offer a <strong>14-day money-back guarantee</strong> on your first subscription payment. If you are not satisfied with Creatdrop within the first 14 days, contact us at support@creatdrop.com for a full refund — no questions asked.</p>
            <p className="mt-3">After the 14-day window, subscription fees are non-refundable. You may cancel your subscription at any time to prevent future charges; your access will continue until the end of the current billing period.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">Digital Product Purchases</h2>
            <p>Because digital products are delivered immediately upon purchase, all sales of digital products through creator storefronts are final. Refunds for digital product purchases are at the sole discretion of the creator who sold them.</p>
            <p className="mt-3">If you believe you were charged in error, contact us at support@creatdrop.com and we will investigate.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">How to Request a Refund</h2>
            <p>To request a refund, email support@creatdrop.com with:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your account email address</li>
              <li>The date of the charge</li>
              <li>The reason for your refund request</li>
            </ul>
            <p className="mt-3">We will respond within 2 business days. Approved refunds are processed within 5–10 business days depending on your payment method.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">Contact</h2>
            <p>For refund-related questions, contact us at support@creatdrop.com.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
