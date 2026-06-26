import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Creatdrop",
  description: "Creatdrop Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-100 px-6 py-4">
        <Link href="/" className="text-zinc-900 font-semibold text-lg">
          Creatdrop
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-zinc-500 mb-10">Last updated: April 2026</p>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700">
          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Creatdrop (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">2. Description of Service</h2>
            <p>Creatdrop is a platform that enables creators to sell digital products (workout plans, guides, courses, and similar content) to their audience. We charge a flat monthly subscription fee and do not take a percentage of your sales.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">3. Account Registration</h2>
            <p>You must create an account to use Creatdrop. You are responsible for maintaining the security of your account and all activity that occurs under it. You must be at least 18 years old to use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Sell illegal, fraudulent, or harmful content</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">5. Payments and Billing</h2>
            <p>Creatdrop charges a flat subscription fee of $29/month, billed through Paddle. Payments are processed securely by Paddle, our merchant of record. You are responsible for all taxes applicable to your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">6. Intellectual Property</h2>
            <p>You retain all rights to the content you upload and sell through Creatdrop. By using the Service, you grant Creatdrop a limited license to display and deliver your content to your customers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">7. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate these Terms. You may cancel your account at any time from your dashboard.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">8. Limitation of Liability</h2>
            <p>Creatdrop is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">9. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 mb-3">10. Contact</h2>
            <p>For questions about these Terms, contact us at support@creatdrop.com.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
