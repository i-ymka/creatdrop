import { ImageResponse } from "next/og";
import { neon } from "@neondatabase/serverless";

export const runtime = "edge";

const DEFAULT_PRIMARY = "#7c3aed";
const DEFAULT_SECONDARY = "#1e293b";

type OgCustomerRow = {
  plan: string;
  logoUrl: string | null;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
};

async function fetchCustomer(customerKey: string): Promise<OgCustomerRow | null> {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  try {
    const sql = neon(url);
    const rows = await sql`
      SELECT plan, "logoUrl", "primaryColor", "secondaryColor", "fontFamily"
      FROM "OgCustomer"
      WHERE "customerKey" = ${customerKey}
      LIMIT 1
    `;
    if (rows.length === 0) return null;
    return rows[0] as OgCustomerRow;
  } catch {
    return null;
  }
}

async function incrementImagesServed(customerKey: string): Promise<void> {
  const url = process.env.DATABASE_URL;
  if (!url) return;
  try {
    const sql = neon(url);
    await sql`
      UPDATE "OgCustomer"
      SET "imagesServed" = "imagesServed" + 1
      WHERE "customerKey" = ${customerKey}
    `;
  } catch {
    // best-effort — never fail image delivery for a counter write
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const subtitle = searchParams.get("subtitle") ?? null;
  const customerKey = searchParams.get("customer") ?? null;

  if (!title) {
    return new Response("Missing required param: title", { status: 400 });
  }

  let customer: OgCustomerRow | null = null;
  if (customerKey) {
    [customer] = await Promise.all([
      fetchCustomer(customerKey),
      incrementImagesServed(customerKey),
    ]);
  }

  const primaryColor = customer?.primaryColor ?? DEFAULT_PRIMARY;
  const secondaryColor = customer?.secondaryColor ?? DEFAULT_SECONDARY;
  const logoUrl = customer?.logoUrl ?? null;
  const isPro = customer?.plan === "PRO";
  const showWatermark = !isPro;

  const jsx = (
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px 96px",
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        position: "relative",
      }}
    >
      {/* Logo top-right */}
      {logoUrl && (
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 64,
            display: "flex",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            alt="logo"
            width={80}
            height={80}
            style={{ objectFit: "contain", borderRadius: 12 }}
          />
        </div>
      )}

      {/* Title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.1,
          maxWidth: 900,
          letterSpacing: "-0.02em",
          display: "flex",
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 400,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 860,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          {subtitle}
        </div>
      )}

      {/* Watermark bottom-right — FREE plan or no customer */}
      {showWatermark && (
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            display: "flex",
          }}
        >
          Made with OGify
        </div>
      )}
    </div>
  );

  const img = new ImageResponse(jsx, { width: 1200, height: 630 });
  return new Response(img.body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, s-maxage=31536000, stale-while-revalidate=86400",
      // Vercel-specific header: ensures CDN respects the cache TTL
      "Vercel-CDN-Cache-Control": "public, max-age=31536000, stale-while-revalidate=86400",
    },
  });
}
