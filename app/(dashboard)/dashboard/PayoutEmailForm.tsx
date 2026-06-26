"use client";

import { useActionState } from "react";
import { savePayoutEmail, SavePayoutEmailState } from "./actions";

interface Props {
  payoutEmail: string | null;
}

export function PayoutEmailForm({ payoutEmail }: Props) {
  const [state, formAction, pending] = useActionState<SavePayoutEmailState, FormData>(
    savePayoutEmail,
    null
  );

  return (
    <form action={formAction} className="space-y-4" id="payout-email-form">
      {state?.success && (
        <div className="px-4 py-3 rounded-2xl bg-green-50 border border-green-200 text-green-700 text-sm font-bold">
          Payout email saved!
        </div>
      )}
      {state?.error && (
        <div className="px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
          {state.error}
        </div>
      )}

      <div className="space-y-2">
        <label
          htmlFor="payoutEmail"
          className="block text-sm font-black text-zinc-400 uppercase tracking-widest"
        >
          Payout email (PayPal)
        </label>
        <p className="text-sm text-zinc-500 font-medium">
          This is the PayPal address we will send your sales to. Make sure it
          matches an active PayPal account.
        </p>
        <input
          id="payoutEmail"
          name="payoutEmail"
          type="email"
          required
          defaultValue={payoutEmail ?? ""}
          placeholder="you@paypal.com"
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Saving…" : "Save payout email"}
      </button>
    </form>
  );
}
