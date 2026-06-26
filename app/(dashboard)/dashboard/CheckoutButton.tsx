"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { track } from "@vercel/analytics";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { startCheckout } from "./actions";

export function CheckoutButton() {
  const paddleRef = useRef<Paddle | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (!token) {
      setError("paddle_token_missing");
      return;
    }
    initializePaddle({ token, environment: "production" })
      .then((paddle) => {
        if (paddle) {
          paddleRef.current = paddle;
          setReady(true);
        } else {
          setError("paddle_init_returned_null");
        }
      })
      .catch((e) => {
        console.error("[CheckoutButton] Paddle init failed", e);
        setError("paddle_init_failed");
      });
  }, []);

  const onClick = () => {
    if (!ready || !paddleRef.current) return;
    track("checkout_initiated");
    startTransition(async () => {
      const res = await startCheckout();
      if (!res.ok) {
        setError(res.error);
        return;
      }
      paddleRef.current!.Checkout.open({ transactionId: res.transactionId });
    });
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={onClick}
        disabled={!ready || isPending}
        className="px-10 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 transition-all shadow-xl shadow-violet-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Opening…" : "Upgrade to Pro — $29/month"}
      </button>
      {error && (
        <span className="text-xs text-red-600 font-medium">Checkout error: {error}</span>
      )}
    </div>
  );
}
