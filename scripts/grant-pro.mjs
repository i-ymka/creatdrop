#!/usr/bin/env node
/**
 * Manually grant PRO to a creator by username.
 *
 * Usage:
 *   DATABASE_URL="..." node scripts/grant-pro.mjs --username janecoach --months 3 --founding-creator
 *   DATABASE_URL="..." node scripts/grant-pro.mjs --username johnpt    --months 1
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

const username = (getArg("username") ?? "").toLowerCase().trim();
const months = parseInt(getArg("months") ?? "3", 10);
const foundingCreator = args.includes("--founding-creator");

if (!username) {
  console.error("❌  --username is required");
  console.error("   Example: node scripts/grant-pro.mjs --username janecoach --months 3 --founding-creator");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

const profiles = await sql`SELECT id, name, username, plan, "foundingCreator" FROM "Profile" WHERE username = ${username} LIMIT 1`;
if (profiles.length === 0) {
  console.error(`❌  No profile found for username: @${username}`);
  process.exit(1);
}

const profile = profiles[0];
const proExpiresAt = new Date();
proExpiresAt.setMonth(proExpiresAt.getMonth() + months);

const setFounding = foundingCreator || profile.foundingCreator;

await sql`
  UPDATE "Profile"
  SET plan = 'PRO',
      "proExpiresAt" = ${proExpiresAt.toISOString()},
      "foundingCreator" = ${setFounding},
      "updatedAt" = NOW()
  WHERE id = ${profile.id}
`;

console.log(`\n✅  PRO granted to @${username}!\n`);
console.log(`  Name:              ${profile.name}`);
console.log(`  Months granted:    ${months}`);
console.log(`  PRO expires:       ${proExpiresAt.toLocaleDateString()}`);
console.log(`  Founding creator:  ${setFounding}`);
console.log(`  Profile:           creatdrop.com/@${username}\n`);
