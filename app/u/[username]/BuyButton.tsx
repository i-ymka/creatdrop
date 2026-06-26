"use client";

import { useState } from "react";

export default function BuyButton({ productId, price }: { productId: string; price: number }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Checkout is temporarily unavailable. Please try again in a moment.");
        setLoading(false);
      }
    } catch {
      setError("Checkout is temporarily unavailable. Please try again in a moment.");
      setLoading(false);
    }
  }

  const priceLabel = `$${(price / 100).toFixed(2)}`;

  return (
    <div className="mt-4 space-y-2">
      <button
        onClick={handleBuy}
        disabled={loading}
        className="w-full py-3.5 rounded-2xl bg-violet-600 text-white font-black text-sm hover:bg-violet-700 disabled:opacity-60 transition-all shadow-lg shadow-violet-200/60 active:scale-95 flex items-center justify-center gap-2"
      >
        {loading ? (
          "Redirecting to checkout…"
        ) : (
          <>
            <span>Get instant access</span>
            <span className="opacity-70">·</span>
            <span>{priceLabel}</span>
          </>
        )}
      </button>
      {error ? (
        <p className="text-xs text-red-500 font-medium text-center">{error}</p>
      ) : (
        <p className="text-xs text-zinc-400 font-medium text-center flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Secure checkout · Instant digital delivery
        </p>
      )}
    </div>
  );
}
