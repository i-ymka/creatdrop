"use client";

import { useState } from "react";

const CREATDROP_MONTHLY = 29;
const PADDLE_RATE = 0.05;
const GUMROAD_RATE = 0.1;

function fmtMonthly(n: number): string {
  return "$" + n.toFixed(2);
}

function fmtAnnual(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function CompareCalculator() {
  const [salesStr, setSalesStr] = useState("");

  const parsed = parseFloat(salesStr.replace(/[,$]/g, ""));
  const sales = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  const hasInput = Number.isFinite(parsed) && parsed > 0;

  const gumroadFee = sales * GUMROAD_RATE;
  const creatdropCost = CREATDROP_MONTHLY + sales * PADDLE_RATE;
  const diff = gumroadFee - creatdropCost;
  const creatdropWins = diff > 0;

  return (
    <div className="not-prose rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      {/* Break-even callout */}
      <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="text-sm font-semibold text-amber-900">
          $580/month is the break-even point. Below that, Gumroad costs you less.
        </p>
      </div>

      {/* Monthly sales input */}
      <div className="mb-4">
        <label
          htmlFor="compare-sales"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Monthly sales (USD)
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            $
          </span>
          <input
            id="compare-sales"
            inputMode="decimal"
            type="text"
            placeholder="1000"
            value={salesStr}
            onChange={(e) => setSalesStr(e.target.value)}
            className="w-full rounded-xl border border-slate-300 py-3 pl-8 pr-4 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          />
        </div>
      </div>

      {/* Anchor buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        {([300, 580, 1000, 5000] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setSalesStr(String(v))}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
          >
            ${v.toLocaleString("en-US")}/mo
          </button>
        ))}
      </div>

      {/* Output block */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 text-sm">
        {!hasInput ? (
          <p className="text-slate-500">
            Enter your monthly sales above to see the comparison.
          </p>
        ) : (
          <div>
            <p className="mb-3 font-medium text-slate-700">
              At ${sales.toLocaleString("en-US")}/month in sales:
            </p>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Gumroad (10% fee):</span>
                <span className="font-semibold text-slate-800">
                  {fmtMonthly(gumroadFee)}/month
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Creatdrop ($29 + 5%):</span>
                <span className="font-semibold text-slate-800">{fmtMonthly(creatdropCost)}/month</span>
              </div>
            </div>
            <div className="mt-4 border-t border-slate-200 pt-4">
              {creatdropWins ? (
                <p className="font-semibold text-emerald-700">
                  → You save {fmtMonthly(diff)}/month (
                  {fmtAnnual(diff * 12)}/year) on Creatdrop.
                </p>
              ) : diff === 0 ? (
                <p className="font-semibold text-amber-700">
                  → Break-even. Both platforms cost the same at this revenue.
                </p>
              ) : (
                <p className="text-slate-700">
                  → Stay on Gumroad — you would pay{" "}
                  {fmtMonthly(creatdropCost - gumroadFee)} more/month on
                  Creatdrop.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
