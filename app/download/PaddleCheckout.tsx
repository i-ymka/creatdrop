"use client";

import { useEffect } from "react";
import { initializePaddle } from "@paddle/paddle-js";

/**
 * Opens a Paddle checkout overlay for a pending transaction.
 * Also polls every 4s for webhook confirmation (by reloading the page).
 * Once the webhook fires and paddleTransactionId is set server-side,
 * the page reload will show the download button instead of this component.
 */
export default function PaddleCheckout({ transactionId }: { transactionId: string }) {
  // Poll for webhook confirmation
  useEffect(() => {
    const timer = setInterval(() => {
      window.location.reload();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Open Paddle overlay
  useEffect(() => {
    const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (!clientToken || !transactionId) return;

    const env = (process.env.NEXT_PUBLIC_PADDLE_ENV ?? "sandbox") as "sandbox" | "production";

    initializePaddle({ environment: env, token: clientToken }).then((paddle) => {
      if (!paddle) return;
      paddle.Checkout.open({ transactionId });
    });
  }, [transactionId]);

  return null;
}
