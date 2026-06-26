import { createClient, SupabaseClient } from "@supabase/supabase-js";

export const STORAGE_BUCKET = "products";

// Lazy singleton — defer initialization to runtime so the build step never
// tries to call createClient with undefined env vars during page-data collection.
let _client: SupabaseClient | undefined;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_client) {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
    );
  }
  return _client;
}
