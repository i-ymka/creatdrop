import { NextResponse } from "next/server";
import { getSupabaseAdmin, STORAGE_BUCKET } from "@/lib/supabase";

// Keeps the free-tier Supabase project awake. The project pauses after ~7 days
// of inactivity, which silently breaks file delivery (signed download URLs).
// A daily Vercel cron hits this route, which makes one real Storage API call to
// the project — that resets the inactivity timer.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { error } = await getSupabaseAdmin()
      .storage.from(STORAGE_BUCKET)
      .list("", { limit: 1 });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
    }
    return NextResponse.json({ ok: true, pinged: STORAGE_BUCKET });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "unknown" },
      { status: 502 },
    );
  }
}
