#!/usr/bin/env node
/**
 * Create a promo code that grants PRO subscription for N months.
 *
 * Usage:
 *   DATABASE_URL="..." node scripts/create-promo.mjs --code FOUNDING5 --months 3 --max-uses 5 --founding-creator
 *   DATABASE_URL="..." node scripts/create-promo.mjs --code SUMMER3M  --months 3 --max-uses 20
 *
 * Reads DATABASE_URL from env or .env.local automatically.
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { neon } from "@neondatabase/serverless";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local
try {
  const envPath = resolve(__dirname, "../.env.local");
  const lines = readFileSync(envPath, "utf8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).replace(/^"(.*)"$/, "$1").trim();
    if (key && !process.env[key]) process.env[key] = val;
  }
} catch {
  // no .env.local – rely on existing env
}

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("❌  DATABASE_URL is required");
  process.exit(1);
}

const args = process.argv.slice(2);
function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : null;
}

const code = (getArg("code") ?? "FOUNDING5").toUpperCase().trim();
const months = parseInt(getArg("months") ?? "3", 10);
const maxUses = parseInt(getArg("max-uses") ?? "5", 10);
const foundingCreator = args.includes("--founding-creator");
const expiresDays = getArg("expires-days") ? parseInt(getArg("expires-days"), 10) : null;

if (!code) { console.error("❌  --code is required"); process.exit(1); }

const sql = neon(DATABASE_URL);

const existing = await sql`SELECT id FROM "PromoCode" WHERE code = ${code} LIMIT 1`;
if (existing.length > 0) {
  console.error(`❌  Promo code "${code}" already exists.`);
  process.exit(1);
}

const id = crypto.randomUUID();
const expiresAt = expiresDays ? new Date(Date.now() + expiresDays * 864e5).toISOString() : null;

await sql`
  INSERT INTO "PromoCode" (id, code, "monthsGranted", "maxUses", "usedCount", "foundingCreator", "expiresAt", "createdAt")
  VALUES (${id}, ${code}, ${months}, ${maxUses}, 0, ${foundingCreator}, ${expiresAt}, NOW())
`;

console.log(`\n✅  Promo code created!\n`);
console.log(`  Code:              ${code}`);
console.log(`  Months granted:    ${months}`);
console.log(`  Max uses:          ${maxUses}`);
console.log(`  Founding creator:  ${foundingCreator}`);
console.log(`  Expires at:        ${expiresAt ?? "never"}`);
console.log(`\nShare this code with creators: ${code}\n`);
