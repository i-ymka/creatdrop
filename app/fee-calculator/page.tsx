import type { Metadata } from "next";
import Link from "next/link";
import { FeeCalculator } from "@/components/FeeCalculator";

export const metadata: Metadata = {
  title: "Creator Platform Fee Calculator — What Percentage Fees Really Cost | Creatdrop",
  description:
    "See what a year of platform fees actually costs you. Enter your monthly sales and current platform (Gumroad, Beacons, Stan) and compare against a flat $29/mo, 0% model.",
  alternates: {
    canonical: "https://creatdrop.com/fee-calculator",
  },
  openGraph: {
    title:
      "Creator Platform Fee Calculator — What Percentage Fees Really Cost | Creatdrop",
    description:
      "See what a year of platform fees actually costs you. Enter your monthly sales and current platform and compare against a flat $29/mo, 0% model.",
    url: "https://creatdrop.com/fee-calculator",
    siteName: "Creatdrop",
    type: "website",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Creator Platform Fee Calculator | Creatdrop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Creator Platform Fee Calculator — What Percentage Fees Really Cost | Creatdrop",
    description:
      "See what a year of platform fees actually costs you. Compare percentage fees against a flat $29/mo, 0% model.",
  },
};

export default function FeeCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
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

      <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          What does a year of platform fees actually cost you?
        </h1>
        <p className="mb-8 text-base text-slate-600">
          A percentage cut is invisible because it is taken off the top of every
          sale, not billed to you. Put your numbers in and see the 12-month
          difference between a percentage platform and a flat $29/month, 0% model.
        </p>

        <FeeCalculator />

        <div className="mt-8 text-[15px] leading-relaxed text-slate-700">
          <p>
            The honest read: a percentage with no monthly fee is genuinely
            cheaper while you are small. The flat model only wins once you cross
            roughly $300/month in sales. Below that line the percentage
            platforms are the cheaper choice. The point is what happens after
            you cross it, because the percentage does not stop. It scales with
            you, in the wrong direction.
          </p>
          <p className="mt-4">
            Want the full breakdown and the breakeven math?{" "}
            <Link
              href="/blog/creator-platform-fee-math"
              className="font-medium text-violet-600 hover:underline"
            >
              Read the analysis
            </Link>
            .
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-violet-50 border border-violet-100 px-8 py-10 text-center">
          <p className="mb-2 text-lg font-semibold text-slate-900">
            Try Creatdrop free
          </p>
          <p className="mb-6 text-slate-600">
            Free to start — upload a product and get a checkout link in minutes.
          </p>
          <a
            href="https://creatdrop.com/sign-up"
            className="inline-block rounded-xl bg-violet-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-violet-700 transition-colors"
          >
            Start for free — no credit card required
          </a>
        </div>
      </div>
    </main>
  );
}
