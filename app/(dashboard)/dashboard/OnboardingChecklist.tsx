"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  hasProduct: boolean;
  hasSale: boolean;
  username: string;
  daysSinceCreation: number;
};

const STORAGE_KEY = "creatdrop_onboarding_dismissed";

const STEPS = [
  {
    id: "upload",
    label: "Upload your first product",
    cta: "Upload now →",
    href: "/dashboard/products",
    external: false,
  },
  {
    id: "price",
    label: "Set your price",
    cta: "Set price →",
    href: "/dashboard/products",
    external: false,
  },
  {
    id: "share",
    label: "Share your storefront link",
    cta: "View storefront →",
    external: true,
  },
  {
    id: "sale",
    label: "Make your first sale",
    cta: "View storefront →",
    external: true,
  },
];

export function OnboardingChecklist({ hasProduct, hasSale, username, daysSinceCreation }: Props) {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDismissed = localStorage.getItem(STORAGE_KEY) === "true";
    setDismissed(isDismissed);
  }, []);

  if (!mounted || dismissed || daysSinceCreation >= 7) return null;

  const storefrontHref = `/@${username}`;

  const steps = STEPS.map((step) => {
    let done = false;
    if (step.id === "upload" || step.id === "price") done = hasProduct;
    if (step.id === "sale") done = hasSale;
    const href = step.external ? storefrontHref : step.href!;
    return { ...step, done, href };
  });

  const doneCount = steps.filter((s) => s.done).length;
  const allDone = doneCount === steps.length;
  const progressPct = Math.round((doneCount / steps.length) * 100);

  function handleDismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    setDismissed(true);
  }

  return (
    <section className="bg-white border-2 border-violet-100 rounded-[2.5rem] p-8 shadow-sm">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
            Get to your first sale
          </h2>
          <p className="text-zinc-400 text-sm font-bold mt-1">
            {doneCount}/{steps.length} complete
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="text-zinc-300 hover:text-zinc-500 transition-colors p-1 -mr-1 -mt-1"
          aria-label="Dismiss checklist"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-zinc-100 rounded-full h-1.5 mb-6">
        <div
          className="bg-violet-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="space-y-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${
              step.done
                ? "bg-violet-50 border-violet-100"
                : "bg-zinc-50 border-zinc-100"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  step.done ? "bg-violet-500" : "border-2 border-zinc-300 bg-white"
                }`}
              >
                {step.done && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span
                className={`font-bold text-sm truncate ${
                  step.done ? "text-violet-600 line-through" : "text-zinc-700"
                }`}
              >
                {step.label}
              </span>
            </div>
            {!step.done && (
              step.external ? (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 shrink-0 text-xs font-black text-violet-600 hover:text-violet-800 transition-colors"
                >
                  {step.cta}
                </a>
              ) : (
                <Link
                  href={step.href}
                  className="ml-4 shrink-0 text-xs font-black text-violet-600 hover:text-violet-800 transition-colors"
                >
                  {step.cta}
                </Link>
              )
            )}
          </div>
        ))}
      </div>

      {allDone && (
        <div className="mt-6 text-center space-y-3">
          <p className="text-violet-700 font-black text-lg">You made your first sale!</p>
          <button
            onClick={handleDismiss}
            className="px-6 py-2.5 bg-violet-600 text-white font-black rounded-full text-sm hover:bg-violet-700 transition-all shadow-md hover:shadow-violet-200 active:scale-95"
          >
            Dismiss checklist
          </button>
        </div>
      )}
    </section>
  );
}
