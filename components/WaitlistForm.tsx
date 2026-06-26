"use client";

import { useState } from "react";

export function WaitlistForm({ source = "landing" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-black text-zinc-900">You&apos;re in!</p>
        <p className="text-zinc-500 font-medium text-sm">First tips are on their way.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 px-5 py-4 rounded-full border-2 border-zinc-200 text-zinc-900 font-semibold placeholder:text-zinc-400 focus:outline-none focus:border-violet-400 transition-colors disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 rounded-full bg-violet-600 text-white font-black hover:bg-violet-700 transition-all shadow-lg shadow-violet-200/50 active:scale-95 disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Sending…" : "Send me the tips"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-center text-sm font-semibold text-red-500">{errorMsg}</p>
      )}
    </form>
  );
}
