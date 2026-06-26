"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { track } from "@vercel/analytics";

const SIGNUP_TRACKED_KEY = "creatdrop_signup_tracked";
const SIGNUP_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export function SignupTracker() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (sessionStorage.getItem(SIGNUP_TRACKED_KEY)) return;

    const createdAt = user.createdAt ? new Date(user.createdAt).getTime() : null;
    if (createdAt && Date.now() - createdAt < SIGNUP_WINDOW_MS) {
      track("signup_complete");
      sessionStorage.setItem(SIGNUP_TRACKED_KEY, "1");
    }
  }, [isLoaded, user]);

  return null;
}
