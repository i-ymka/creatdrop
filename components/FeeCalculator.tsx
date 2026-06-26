"use client";

import { useState } from "react";

// Fee constants
const CREATDROP_ANNUAL = 348; // $29 * 12
const GUMROAD_RATE = 0.1; // 10%, per-sale $0.50 intentionally not modeled
const BEACONS_RATE = 0.09; // 9% standard tier
const STAN_ANNUAL = 348; // $29 * 12, 0% fee
const REVENUE_CAP = 1_000_000;

type Platform = "Gumroad" | "Beacons" | "Stan" | "Something else / not selling yet";

const PLATFORMS: Platform[] = [
  "Gumroad",
  "Beacons",
  "Stan",
  "Something else / not selling yet",
];

const usd = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

// Copy label for the {platform} variable in the result sentences.
// Percentage platforms read by name; the "Something else / not selling yet"
// option is modeled on the 10% baseline, so it reads as the spec describes it.
function platformLabel(p: Platform): string {
  if (p === "Something else / not selling yet") return "a typical percentage platform";
  return p;
}

export function FeeCalculator() {
  const [revenueStr, setRevenueStr] = useState("");
  const [platform, setPlatform] = useState<Platform>("Gumroad");

  const parsed = parseFloat(revenueStr.replace(/,/g, ""));
  const clamped = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), REVENUE_CAP) : 0;
  const valid = clamped > 0;
  const atCap = Number.isFinite(parsed) && parsed >= REVENUE_CAP;

  const annualRevenue = clamped * 12;
  let currentAnnualCost = 0;
  if (platform === "Gumroad") currentAnnualCost = annualRevenue * GUMROAD_RATE;
  else if (platform === "Beacons") currentAnnualCost = annualRevenue * BEACONS_RATE;
  else if (platform === "Stan") currentAnnualCost = STAN_ANNUAL;
  else currentAnnualCost = annualRevenue * GUMROAD_RATE; // Something else → 10% baseline

  const creatdropAnnualCost = CREATDROP_ANNUAL;
  const savings = currentAnnualCost - creatdropAnnualCost;

  let result: React.ReactNode;
  if (!valid) {
    // Case D
    result = (
      <p className="text-slate-600">
        Enter your monthly sales above to see the 12-month difference.
      </p>
    );
  } else if (platform === "Stan") {
    // Case C
    result = (
      <p className="text-slate-700">
        Stan and Creatdrop are both $29/month with 0% sales fees, so on cost
        they are a tie at <strong className="text-slate-900">$348/year</strong>.
        This calculator will not pick a winner here. Choose on the product, not
        the fee.
      </p>
    );
  } else if (savings > 0) {
    // Case A
    result = (
      <p className="text-slate-700">
        At {usd(clamped)}/month you are paying about{" "}
        <strong className="text-red-600">{usd(currentAnnualCost)}/year</strong>{" "}
        in {platformLabel(platform)} fees. On Creatdrop that same year costs{" "}
        <strong className="text-slate-900">$348</strong> flat. You would keep
        about{" "}
        <strong className="text-emerald-700">
          {usd(savings)} more per year.
        </strong>
        {atCap ? " And it only gets bigger from here." : ""}
      </p>
    );
  } else {
    // Case B
    result = (
      <p className="text-slate-700">
        At {usd(clamped)}/month, {platformLabel(platform)}&apos;s percentage fee
        costs you about{" "}
        <strong className="text-slate-900">{usd(currentAnnualCost)}/year</strong>
        , which is actually less than Creatdrop&apos;s $348 flat. Below roughly
        $300/month in sales, a percentage platform is the cheaper choice. Worth
        checking back when you grow: above that point the flat fee wins, and the
        gap keeps widening.
      </p>
    );
  }

  return (
    <div className="not-prose rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fee-calc-revenue"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Your average monthly sales (USD)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              $
            </span>
            <input
              id="fee-calc-revenue"
              inputMode="decimal"
              type="text"
              placeholder="2,000"
              value={revenueStr}
              onChange={(e) => setRevenueStr(e.target.value)}
              className="w-full rounded-xl border border-slate-300 py-3 pl-8 pr-4 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="fee-calc-platform"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Where do you sell now?
          </label>
          <select
            id="fee-calc-platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value as Platform)}
            className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          >
            {PLATFORMS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-violet-50 px-5 py-5 text-[15px] leading-relaxed">
        {result}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Figures exclude payment processing (Stripe/PayPal, about 2.9% + $0.30/sale),
        which is similar on every platform. Gumroad&apos;s additional $0.50 per
        sale is not counted, so its real cost is slightly higher than shown.
      </p>
    </div>
  );
}
