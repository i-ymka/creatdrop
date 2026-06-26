import { db } from "@/lib/db";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace — Creatdrop",
  description: "Browse digital products from independent creators.",
};

export const dynamic = "force-dynamic";

export default async function MarketplacePage() {
  const products = await db.product.findMany({
    include: {
      profile: { select: { username: true, name: true } },
      sales: { where: { paddleTransactionId: { not: null } }, select: { id: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 60,
  });

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link href="/" className="text-zinc-400 text-sm hover:text-zinc-600 mb-6 inline-block">
            ← Creatdrop
          </Link>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight mb-3">Marketplace</h1>
          <p className="text-zinc-500 text-lg">Digital products from independent creators.</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-24 text-zinc-400">
            <p className="text-xl font-bold mb-2">No products yet</p>
            <p className="text-sm">Be the first to sell something.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const price = (product.price / 100).toFixed(2);
              const salesCount = product.sales.length;
              return (
                <Link
                  key={product.id}
                  href={`/@${product.profile.username}`}
                  className="group bg-white border-2 border-zinc-100 rounded-2xl p-6 hover:border-violet-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="font-bold text-zinc-900 text-lg leading-tight group-hover:text-violet-700 transition-colors">
                      {product.title}
                    </h2>
                    <span className="shrink-0 font-black text-violet-600 text-lg">
                      ${price}
                    </span>
                  </div>
                  {product.description && (
                    <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  )}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-100">
                    <span className="text-sm text-zinc-400">
                      by{" "}
                      <span className="font-semibold text-zinc-600">
                        {product.profile.name || `@${product.profile.username}`}
                      </span>
                    </span>
                    {salesCount > 0 && (
                      <span className="text-xs text-zinc-400">
                        {salesCount} sold
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
