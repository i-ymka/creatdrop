import { db } from "@/lib/db";
import Link from "next/link";

export const revalidate = 300; // revalidate every 5 minutes

export default async function FoundingCreatorsPage() {
  const founders = await db.profile.findMany({
    where: { foundingCreator: true },
    orderBy: { createdAt: "asc" },
    select: {
      username: true,
      name: true,
      bio: true,
      createdAt: true,
      products: {
        select: { id: true, title: true, price: true },
        orderBy: { createdAt: "asc" },
        take: 3,
      },
    },
    take: 5,
  });

  const spotsLeft = Math.max(0, 5 - founders.length);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 to-violet-800 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Founding Creator Program
          </div>
          <h1 className="text-5xl font-black tracking-tight leading-tight">
            The first 5 creators<br />who believed
          </h1>
          <p className="text-violet-200 text-xl font-medium max-w-xl mx-auto">
            These fitness coaches were among the first to switch to a platform that actually respects their revenue.
            They get 3 months PRO free — and a permanent spot on this page.
          </p>
          {spotsLeft > 0 && (
            <div className="inline-flex flex-col items-center gap-3">
              <p className="text-yellow-300 font-black text-lg">
                {spotsLeft} founding creator spot{spotsLeft !== 1 ? "s" : ""} remaining
              </p>
              <Link
                href="/#pricing"
                className="px-8 py-4 bg-white text-violet-700 font-black text-lg rounded-full hover:bg-yellow-300 hover:text-violet-900 transition-all shadow-xl"
              >
                Claim your founding creator spot →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Founders list */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        {founders.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <p className="text-6xl">🏆</p>
            <h2 className="text-2xl font-black text-zinc-900">No founding creators yet</h2>
            <p className="text-zinc-500 text-lg">
              Be the first — get 3 months PRO free and a permanent spot on this page.
            </p>
            <Link
              href="/"
              className="inline-block mt-4 px-8 py-4 bg-violet-600 text-white font-black text-lg rounded-full hover:bg-violet-700 transition-all"
            >
              Get started free →
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
              Founding creators ({founders.length}/5)
            </h2>
            <div className="space-y-6">
              {founders.map((creator, i) => (
                <div
                  key={creator.username}
                  className="group relative bg-white border-2 border-zinc-100 rounded-[2rem] p-8 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 transition-all"
                >
                  {/* Rank badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center font-black text-sm shadow-lg">
                    #{i + 1}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-black text-zinc-900">{creator.name}</h3>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-widest rounded-full border border-yellow-200">
                          ⭐ Founding Creator
                        </span>
                      </div>
                      <p className="text-violet-600 font-bold">@{creator.username}</p>
                      {creator.bio && (
                        <p className="text-zinc-500 font-medium text-sm leading-relaxed max-w-md">
                          {creator.bio}
                        </p>
                      )}
                    </div>
                    <Link
                      href={`/@${creator.username}`}
                      className="shrink-0 px-5 py-3 rounded-full bg-violet-50 text-violet-600 font-bold text-sm hover:bg-violet-100 transition-all border border-violet-100 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600"
                    >
                      View profile →
                    </Link>
                  </div>

                  {creator.products.length > 0 && (
                    <div className="mt-6 pt-6 border-t-2 border-zinc-50">
                      <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-3">Products</p>
                      <div className="flex flex-wrap gap-2">
                        {creator.products.map((product) => (
                          <div
                            key={product.id}
                            className="px-4 py-2 bg-zinc-50 rounded-xl text-sm font-bold text-zinc-700 flex items-center gap-2"
                          >
                            <span>{product.title}</span>
                            <span className="text-violet-600">${(product.price / 100).toFixed(0)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {spotsLeft > 0 && (
              <div className="text-center pt-8">
                <div className="bg-violet-50 rounded-[2rem] p-10 border border-violet-100 space-y-4">
                  <p className="text-3xl font-black text-zinc-900">
                    {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} left
                  </p>
                  <p className="text-zinc-500 font-medium text-lg max-w-md mx-auto">
                    Get 3 months PRO free and join the founding creators. No subscription needed until your trial ends.
                  </p>
                  <Link
                    href="/"
                    className="inline-block px-8 py-4 bg-violet-600 text-white font-black text-lg rounded-full hover:bg-violet-700 transition-all shadow-lg"
                  >
                    Claim founding creator spot →
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* Social proof strip */}
      <section className="bg-zinc-50 border-t border-zinc-100 py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-black text-zinc-900 text-lg">Creatdrop</p>
            <p className="text-zinc-500 font-medium">$29/mo flat. 0% Creatdrop commission. Standard payment processing applies.</p>
          </div>
          <Link
            href="/sign-up"
            className="shrink-0 px-6 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-all"
          >
            Start free trial →
          </Link>
        </div>
      </section>
    </main>
  );
}
