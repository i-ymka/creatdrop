"use client";

import { useState } from "react";

export function PromoCodeForm({ onSuccess }: { onSuccess?: () => void }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const res = await fetch("/api/promo/redeem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();

    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? "Failed to redeem code");
    } else {
      setSuccess(
        `${data.foundingCreator ? "🌟 Welcome, Founding Creator! " : ""}PRO activated for ${data.monthsGranted} months.`
      );
      setCode("");
      onSuccess?.();
    }
  }

  return (
    <div className="space-y-3">
      <h3 className="text-base font-black text-zinc-900">Have a promo code?</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="FOUNDING5"
          maxLength={32}
          required
          className="flex-1 bg-zinc-50 border-2 border-transparent rounded-2xl px-4 py-3 text-base font-bold uppercase tracking-widest focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
        />
        <button
          type="submit"
          disabled={loading || !code.trim()}
          className="px-6 py-3 rounded-2xl bg-violet-600 text-white font-black hover:bg-violet-700 disabled:opacity-50 transition-all"
        >
          {loading ? "…" : "Apply"}
        </button>
      </form>
      {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
      {success && <p className="text-green-600 text-sm font-bold">{success}</p>}
    </div>
  );
}
