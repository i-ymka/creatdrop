import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import type { Metadata } from "next";
import BuyButton from "./BuyButton";
import PlatformIcon from "./PlatformIcon";

type Props = {
  params: Promise<{ username: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const profile = await db.profile.findUnique({
    where: { username },
    include: { products: { take: 1, orderBy: { createdAt: "asc" } } },
  });

  if (!profile) return { title: "Profile not found — Creatdrop" };

  const title = `${profile.name} (@${username}) — Creatdrop`;
  const description = profile.bio
    ? `${profile.bio} — Buy digital products from ${profile.name} on Creatdrop.`
    : `Browse and buy digital products from ${profile.name} on Creatdrop.`;

  const ogImageUrl = `https://ogzap.com/og?title=${encodeURIComponent(profile.name)}&subtitle=${encodeURIComponent(`@${username} on Creatdrop`)}&domain=creatdrop.com`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      url: `https://creatdrop.com/@${username}`,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

/** Generic chain-link icon — used as fallback */
function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101
           m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

/** File type badge derived from filename extension */
function FileTypeBadge({ fileName }: { fileName: string }) {
  const ext = fileName.split(".").pop()?.toLowerCase() ?? "";
  const labelMap: Record<string, string> = {
    pdf: "PDF",
    zip: "ZIP",
    rar: "ZIP",
    jpg: "IMAGE",
    jpeg: "IMAGE",
    png: "IMAGE",
    gif: "IMAGE",
    webp: "IMAGE",
    mp4: "VIDEO",
    mov: "VIDEO",
    mp3: "AUDIO",
    wav: "AUDIO",
    epub: "EBOOK",
    docx: "DOC",
    doc: "DOC",
    xlsx: "SHEET",
  };
  const label = labelMap[ext] ?? "FILE";

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/20 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
      {label}
    </span>
  );
}

/**
 * Deterministic gradient cover for a product — chosen from 6 palettes
 * based on the first character code of the product id.
 */
function productGradient(productId: string): string {
  const palettes = [
    "from-violet-500 to-indigo-600",
    "from-rose-500 to-orange-500",
    "from-emerald-500 to-teal-600",
    "from-amber-400 to-yellow-500",
    "from-sky-500 to-blue-600",
    "from-pink-500 to-fuchsia-600",
  ];
  const idx = (productId.charCodeAt(0) + productId.charCodeAt(productId.length - 1)) % palettes.length;
  return palettes[idx];
}

/* ─── Page ─────────────────────────────────────────────────────── */
export default async function PublicProfilePage({ params }: Props) {
  const { username } = await params;

  const profile = await db.profile.findUnique({
    where: { username },
    include: {
      links: { orderBy: { order: "asc" } },
      products: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!profile) notFound();

  const initials = profile.name
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const avatarUrl = (profile as unknown as { avatarUrl?: string | null }).avatarUrl ?? null;

  return (
    <div className="min-h-dvh selection:bg-violet-100 selection:text-violet-900 relative">

      {/* ── Background ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-dvh flex flex-col items-center px-5 py-20 sm:py-28">
        <div className="w-full max-w-md mx-auto">

          {/* ─ Profile header ─ */}
          <div className="flex flex-col items-center mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700">

            {/* Avatar */}
            <div className="relative group mb-6">
              <div className="absolute -inset-2 bg-gradient-to-tr from-violet-500 to-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white p-1.5 ring-1 ring-zinc-200/80 shadow-2xl shadow-violet-100/60">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt={profile.name}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-black text-3xl shadow-inner">
                    {initials}
                  </div>
                )}
              </div>
            </div>

            {/* Name + username */}
            <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight text-center leading-tight">
              {profile.name}
            </h1>
            <p className="text-zinc-500 font-bold mt-1.5 text-base">@{profile.username}</p>

            {/* Bio */}
            {profile.bio && (
              <p className="text-zinc-600 mt-5 text-center text-base sm:text-lg leading-relaxed max-w-sm font-medium">
                {profile.bio}
              </p>
            )}

            {/* Pro badge */}
            {profile.plan === "PRO" && (
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 bg-violet-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-violet-300/40 ring-4 ring-violet-50">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Pro Member
              </div>
            )}
          </div>

          {/* ─ Links ─ */}
          <div className="space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            {profile.links.map((link, i) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full p-2 pr-6 rounded-[1.75rem] bg-white/90 backdrop-blur-sm border border-zinc-100/80 shadow-sm hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/60 hover:-translate-y-0.5 transition-all duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Icon box */}
                <div className="w-14 h-14 rounded-[1.25rem] bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-200 transition-all duration-300 overflow-hidden flex-shrink-0">
                  <PlatformIcon url={link.url} />
                </div>

                {/* Title */}
                <span className="flex-1 font-black text-zinc-800 text-base sm:text-lg leading-snug py-3">
                  {link.title}
                </span>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-violet-100 text-violet-600 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}

            {/* Empty state */}
            {profile.links.length === 0 && profile.products.length === 0 && (
              <div className="text-center py-20 px-8 rounded-[2.5rem] bg-white/70 backdrop-blur-sm border border-dashed border-zinc-200">
                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-5 text-zinc-300">
                  <LinkIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-zinc-900 mb-2">Nothing here yet</h3>
                <p className="text-zinc-500 font-medium">
                  Check back soon — {profile.name} is setting things up.
                </p>
              </div>
            )}
          </div>

          {/* ─ Products ─ */}
          {profile.products.length > 0 && (
            <div className="mt-10 space-y-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-zinc-200/80" />
                <h2 className="text-xs font-black text-zinc-400 uppercase tracking-widest shrink-0">
                  Digital products
                </h2>
                <div className="h-px flex-1 bg-zinc-200/80" />
              </div>

              {profile.products.map((product) => {
                const gradient = productGradient(product.id);
                return (
                  <div
                    key={product.id}
                    className="w-full rounded-[1.75rem] bg-white/90 backdrop-blur-sm border border-zinc-100/80 shadow-md hover:shadow-xl hover:shadow-violet-100/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                  >
                    {/* Cover art */}
                    <div className={`relative h-32 bg-gradient-to-br ${gradient} flex items-end p-4`}>
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                      {/* Large background icon */}
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20 text-white/15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 4h5v7h7v9H6V4z" />
                      </svg>
                      <FileTypeBadge fileName={product.fileName} />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h3 className="font-black text-zinc-900 text-base leading-snug flex-1">
                          {product.title}
                        </h3>
                        <span className="shrink-0 font-black text-2xl text-violet-700 leading-none tabular-nums">
                          ${(product.price / 100).toFixed(2)}
                        </span>
                      </div>
                      {product.description && (
                        <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      )}
                      <BuyButton productId={product.id} price={product.price} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ─ Branding footer ─ */}
          <div className="mt-16 text-center animate-in fade-in duration-700 delay-500">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-100 text-sm font-bold text-zinc-500 hover:border-violet-200 hover:text-violet-600 hover:shadow-lg hover:bg-white transition-all shadow-sm"
            >
              <div className="w-5 h-5 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-md flex items-center justify-center shadow-sm">
                <LinkIcon className="w-3 h-3 text-white" />
              </div>
              Create your own Creatdrop
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
