"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";

type Plan = "FREE" | "PRO";

type OGifyConfig = {
  customerKey: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: "Inter" | "Geist" | "system-ui";
  plan: Plan;
  imagesServed?: number;
};

const DEFAULT_CONFIG: OGifyConfig = {
  customerKey: "",
  logoUrl: "",
  primaryColor: "#7c3aed",
  secondaryColor: "#ede9fe",
  fontFamily: "Geist",
  plan: "FREE",
};

const FONT_OPTIONS = ["Inter", "Geist", "system-ui"] as const;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-zinc-600 transition-colors flex-shrink-0"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function OGImagePreview({
  config,
  previewTitle,
}: {
  config: OGifyConfig;
  previewTitle: string;
}) {
  const params = new URLSearchParams({
    title: previewTitle,
    customer: config.customerKey || "demo",
  });
  const src = `/og?${params.toString()}`;

  return (
    <div
      className="relative rounded-xl overflow-hidden border border-zinc-200"
      style={{ aspectRatio: "1200/630" }}
    >
      {/* Simulated OG image using inline styles matching the config colors */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor})` }}
      >
        <div className="text-center px-8">
          {config.logoUrl && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={config.logoUrl}
              alt="Logo"
              className="h-10 w-auto mx-auto mb-4 object-contain"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          )}
          <p
            className="text-3xl font-black leading-tight mb-3"
            style={{
              color: "#ffffff",
              fontFamily: config.fontFamily === "system-ui" ? "system-ui" : config.fontFamily,
            }}
          >
            {previewTitle}
          </p>
          {config.plan === "FREE" && (
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/20 rounded-full">
              <span className="text-xs text-white/80 font-semibold">Made with OGify</span>
            </div>
          )}
          {config.plan === "PRO" && (
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/20 rounded-full">
              <span className="text-xs text-white/80 font-semibold">creatdrop.com</span>
            </div>
          )}
        </div>
      </div>
      {/* We show the simulated preview above instead of loading the real OG route */}
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 px-2 py-1 rounded-lg bg-black/30 text-white text-xs font-semibold hover:bg-black/50 transition-colors"
      >
        Open real URL ↗
      </a>
    </div>
  );
}

export function OGifyDashboardClient({ initialConfig }: { initialConfig: OGifyConfig | null }) {
  const [config, setConfig] = useState<OGifyConfig>(initialConfig ?? DEFAULT_CONFIG);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [upgrading, setUpgrading] = useState(false);
  const paddleRef = useRef<Paddle | null>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
    if (!token) return;
    const env = (process.env.NEXT_PUBLIC_PADDLE_ENV ?? "sandbox") as "sandbox" | "production";
    initializePaddle({ environment: env, token }).then((paddle) => {
      if (paddle) paddleRef.current = paddle;
    });
  }, []);

  const previewTitle = "Preview — Your Blog Post Title";

  const embedSnippet = config.customerKey
    ? `<meta property="og:image" content="https://creatdrop.com/og?title={{title}}&customer=${config.customerKey}" />`
    : `<meta property="og:image" content="https://creatdrop.com/og?title={{title}}&customer=YOUR_KEY" />`;

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/ogify/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleUpgrade() {
    setUpgrading(true);
    try {
      const res = await fetch("/api/ogify/checkout", { method: "POST" });
      if (res.ok) {
        const { checkoutUrl } = await res.json();
        if (checkoutUrl) {
          const txnId = checkoutUrl.split("/").pop();
          if (paddleRef.current && txnId) {
            paddleRef.current.Checkout.open({ transactionId: txnId });
          } else {
            window.location.href = checkoutUrl;
          }
        }
      }
    } finally {
      setUpgrading(false);
    }
  }

  function update<K extends keyof OGifyConfig>(key: K, value: OGifyConfig[K]) {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="space-y-10">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-zinc-900">OGify Dashboard</h1>
          <p className="text-sm text-zinc-500 mt-1">Configure your branding and grab your embed snippet.</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-black ${
            config.plan === "PRO"
              ? "bg-violet-100 text-violet-700"
              : "bg-zinc-100 text-zinc-600"
          }`}
        >
          {config.plan === "PRO" ? "Pro ✓" : "Free"}
        </span>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm">
          <p className="text-xs font-semibold text-zinc-500 mb-1">Images generated</p>
          <p className="text-2xl font-black text-zinc-900">
            {(config.imagesServed ?? 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm">
          <p className="text-xs font-semibold text-zinc-500 mb-1">Plan</p>
          <p className={`text-2xl font-black ${config.plan === "PRO" ? "text-violet-700" : "text-zinc-900"}`}>
            {config.plan === "PRO" ? "Pro" : "Free"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Config form */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-7 shadow-sm">
          <h2 className="text-lg font-black text-zinc-900 mb-6">Branding</h2>
          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1.5">
                Logo URL
              </label>
              <input
                type="url"
                placeholder="https://yourdomain.com/logo.png"
                value={config.logoUrl}
                onChange={(e) => update("logoUrl", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-1.5">
                  Primary color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={config.primaryColor}
                    onChange={(e) => update("primaryColor", e.target.value)}
                    className="w-10 h-10 rounded-lg border border-zinc-200 cursor-pointer p-0.5"
                  />
                  <input
                    type="text"
                    value={config.primaryColor}
                    onChange={(e) => update("primaryColor", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 text-sm font-mono text-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-1.5">
                  Secondary color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={config.secondaryColor}
                    onChange={(e) => update("secondaryColor", e.target.value)}
                    className="w-10 h-10 rounded-lg border border-zinc-200 cursor-pointer p-0.5"
                  />
                  <input
                    type="text"
                    value={config.secondaryColor}
                    onChange={(e) => update("secondaryColor", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 text-sm font-mono text-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-1.5">
                Font family
              </label>
              <select
                value={config.fontFamily}
                onChange={(e) => update("fontFamily", e.target.value as OGifyConfig["fontFamily"])}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
              >
                {FONT_OPTIONS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full py-3 rounded-xl bg-violet-600 text-white font-black text-sm hover:bg-violet-700 disabled:opacity-60 transition-all shadow-md shadow-violet-200 active:scale-95"
            >
              {saving ? "Saving…" : saved ? "Saved ✓" : "Save branding"}
            </button>
          </form>
        </div>

        {/* Live preview */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-zinc-200 p-7 shadow-sm">
            <h2 className="text-lg font-black text-zinc-900 mb-4">Live preview</h2>
            <OGImagePreview config={config} previewTitle={previewTitle} />
            <p className="text-xs text-zinc-400 mt-3">Updates as you change branding settings</p>
          </div>

          {/* Embed snippet */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-7 shadow-sm">
            <h2 className="text-lg font-black text-zinc-900 mb-3">Your embed snippet</h2>
            <p className="text-sm text-zinc-500 mb-4">
              Paste this tag in your site&apos;s{" "}
              <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-xs font-mono">&lt;head&gt;</code>.
            </p>
            <div className="relative bg-zinc-900 rounded-xl p-4 font-mono text-xs text-zinc-200 break-all">
              <div className="absolute top-3 right-3">
                <CopyButton text={embedSnippet} />
              </div>
              <pre className="whitespace-pre-wrap pr-16">{embedSnippet}</pre>
            </div>
            {!config.customerKey && (
              <p className="text-xs text-amber-600 mt-2 font-semibold">
                ⚠ Your customer key will appear here after your account is activated.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Upgrade CTA */}
      {config.plan === "FREE" && (
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-black text-violet-900 mb-1">Remove the watermark</h3>
            <p className="text-sm text-violet-700">
              Upgrade to Pro to remove the &quot;Made with OGify&quot; watermark and unlock custom branding.
            </p>
          </div>
          <button
            onClick={handleUpgrade}
            disabled={upgrading}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-violet-600 text-white font-black text-sm hover:bg-violet-700 disabled:opacity-60 transition-all shadow-md shadow-violet-200 active:scale-95 whitespace-nowrap"
          >
            {upgrading ? "Redirecting…" : "Remove watermark — $7/mo"}
          </button>
        </div>
      )}
    </div>
  );
}
