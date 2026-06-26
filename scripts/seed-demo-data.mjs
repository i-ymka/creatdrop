/**
 * Seed demo products and sales data for local development
 * Run: DATABASE_URL="..." node scripts/seed-demo-data.mjs
 */

import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function main() {
  // 1. Find ymka's profile
  const profiles = await sql`SELECT id, username, "userId" FROM "Profile" WHERE username = 'ymka' LIMIT 1`;

  if (profiles.length === 0) {
    console.log("Profile 'ymka' not found. Listing all profiles:");
    const all = await sql`SELECT id, username FROM "Profile" LIMIT 10`;
    console.log(all);
    process.exit(1);
  }

  const profile = profiles[0];
  console.log(`Found profile: ${profile.username} (id: ${profile.id})`);

  // 2. Check existing products to avoid duplicates
  const existing = await sql`SELECT id, title FROM "Product" WHERE "profileId" = ${profile.id}`;
  if (existing.length > 0) {
    console.log("Products already exist:", existing.map(p => p.title));
    console.log("Clearing existing demo products and sales...");
    // Delete sales first (FK constraint)
    for (const p of existing) {
      await sql`DELETE FROM "Sale" WHERE "productId" = ${p.id}`;
    }
    await sql`DELETE FROM "Product" WHERE "profileId" = ${profile.id}`;
    console.log("Cleared.");
  }

  // 3. Insert 4 realistic digital products
  const products = [
    {
      title: "Lightroom Mobile Presets Pack — Moody Film",
      description: "12 hand-crafted Lightroom presets for that cinematic, moody film look. Works on mobile and desktop. Includes installation guide.",
      price: 1299, // $12.99
      fileKey: "https://blob.vercel-storage.com/demo/presets-moody-film.zip",
      fileName: "presets-moody-film.zip",
      fileSize: 2048000,
    },
    {
      title: "Notion Content Calendar Template 2026",
      description: "Plan and schedule your content across all platforms with this premium Notion template. Includes social media tracker, idea vault, and analytics dashboard.",
      price: 1900, // $19.00
      fileKey: "https://blob.vercel-storage.com/demo/notion-content-calendar.pdf",
      fileName: "notion-content-calendar.pdf",
      fileSize: 512000,
    },
    {
      title: "YouTube Thumbnail Design Guide",
      description: "The complete guide to creating high-CTR YouTube thumbnails. 47 pages, 30+ real examples, Figma template included.",
      price: 2499, // $24.99
      fileKey: "https://blob.vercel-storage.com/demo/youtube-thumbnail-guide.pdf",
      fileName: "youtube-thumbnail-guide.pdf",
      fileSize: 8192000,
    },
    {
      title: "Instagram Growth Checklist (Free Edition)",
      description: "The 30-point checklist I used to grow from 0 to 10k followers in 6 months. Completely free — no catch.",
      price: 0, // free
      fileKey: "https://blob.vercel-storage.com/demo/instagram-checklist-free.pdf",
      fileName: "instagram-checklist-free.pdf",
      fileSize: 256000,
    },
  ];

  const insertedProducts = [];
  for (const p of products) {
    const result = await sql`
      INSERT INTO "Product" (id, "profileId", title, description, price, "fileKey", "fileName", "fileSize", "createdAt", "updatedAt")
      VALUES (
        gen_random_uuid(),
        ${profile.id},
        ${p.title},
        ${p.description},
        ${p.price},
        ${p.fileKey},
        ${p.fileName},
        ${p.fileSize},
        NOW(),
        NOW()
      )
      RETURNING id, title, price
    `;
    insertedProducts.push(result[0]);
    console.log(`  + Product: ${result[0].title} ($${result[0].price / 100})`);
  }

  // 4. Insert 9 realistic sales spread over past 30 days
  const saleData = [
    // Presets pack sales (most popular)
    { productIdx: 0, buyerEmail: "sarah.photo@gmail.com", amountPaid: 1299, daysAgo: 2 },
    { productIdx: 0, buyerEmail: "travel_marc@outlook.com", amountPaid: 1299, daysAgo: 7 },
    { productIdx: 0, buyerEmail: "julia_creative@icloud.com", amountPaid: 1299, daysAgo: 14 },
    // Notion template sales
    { productIdx: 1, buyerEmail: "daniel.nguyen@gmail.com", amountPaid: 1900, daysAgo: 3 },
    { productIdx: 1, buyerEmail: "marketingbyanna@yahoo.com", amountPaid: 1900, daysAgo: 10 },
    // Thumbnail guide sales
    { productIdx: 2, buyerEmail: "mikeyoutube@gmail.com", amountPaid: 2499, daysAgo: 1 },
    { productIdx: 2, buyerEmail: "create.daily@proton.me", amountPaid: 2499, daysAgo: 5 },
    { productIdx: 2, buyerEmail: "vlogger_kim@gmail.com", amountPaid: 2499, daysAgo: 19 },
    // Free checklist "sale" (amount = 0)
    { productIdx: 3, buyerEmail: "newcreator_2026@gmail.com", amountPaid: 0, daysAgo: 6 },
  ];

  console.log("\nInserting sales...");
  for (const sale of saleData) {
    const product = insertedProducts[sale.productIdx];
    const createdAt = new Date(Date.now() - sale.daysAgo * 24 * 60 * 60 * 1000);
    await sql`
      INSERT INTO "Sale" (id, "productId", "buyerEmail", "amountPaid", "paddleTransactionId", "downloadToken", "createdAt")
      VALUES (
        gen_random_uuid(),
        ${product.id},
        ${sale.buyerEmail},
        ${sale.amountPaid},
        ${'paddle_txn_demo_' + Math.random().toString(36).slice(2, 18)},
        gen_random_uuid(),
        ${createdAt.toISOString()}
      )
    `;
    console.log(`  + Sale: ${product.title.slice(0, 30)}... -> ${sale.buyerEmail} ($${sale.amountPaid / 100})`);
  }

  // 5. Summary
  const totalRevenue = saleData.reduce((sum, s) => sum + s.amountPaid, 0);
  console.log(`\n✓ Done!`);
  console.log(`  ${insertedProducts.length} products created`);
  console.log(`  ${saleData.length} sales inserted`);
  console.log(`  Total demo revenue: $${(totalRevenue / 100).toFixed(2)}`);
}

main().catch(err => {
  console.error("Seed failed:", err);
  process.exit(1);
});
