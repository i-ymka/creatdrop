import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { OGifyDashboardClient } from "./OGifyDashboardClient";

export const metadata: Metadata = {
  title: "OGify Dashboard",
  description: "Configure your OGify branding and grab your embed snippet.",
};

type OGifyConfig = {
  customerKey: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: "Inter" | "Geist" | "system-ui";
  plan: "FREE" | "PRO";
  imagesServed?: number;
};

async function fetchConfig(token: string): Promise<OGifyConfig | null> {
  try {
    const origin = process.env.NEXT_PUBLIC_APP_URL ?? "https://creatdrop.com";
    const res = await fetch(`${origin}/api/ogify/config`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function OGifyDashboardPage() {
  const { userId, getToken } = await auth();
  if (!userId) redirect("/sign-in?redirect_url=/ogify/dashboard");

  const token = await getToken();
  const config = token ? await fetchConfig(token) : null;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-200">
        <div className="flex items-center gap-6">
          <Link href="/ogify" className="text-xl font-black tracking-tight text-violet-700">
            OGify
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/ogify/docs"
            className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Docs
          </Link>
          <UserButton />
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10">
        <OGifyDashboardClient initialConfig={config} />
      </main>
    </div>
  );
}
