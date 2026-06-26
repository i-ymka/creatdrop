import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function SalesPage() {
  const { userId } = await auth();
  if (!userId) return null;

  const profile = await db.profile.findUnique({
    where: { userId },
    include: {
      products: {
        include: {
          sales: {
            orderBy: { createdAt: "desc" },
          },
        },
      },
    },
  });

  if (!profile) return null;

  const allSales = profile.products
    .flatMap((p) => p.sales.map((s) => ({ ...s, productTitle: p.title })))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const totalRevenue = allSales.reduce((sum, s) => sum + s.amountPaid, 0);
  const totalSales = allSales.length;

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Sales</h1>
          <p className="text-zinc-500 mt-2 text-lg font-medium">
            Your revenue and purchase history.
          </p>
        </div>
        {profile.username && (
          <a
            href={`/@${profile.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-50 text-violet-600 font-bold hover:bg-violet-100 transition-all group shadow-sm border border-violet-100"
          >
            View public profile
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border-2 border-zinc-100 rounded-[2rem] p-8 shadow-sm">
          <p className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-2">Total revenue</p>
          <p className="text-4xl font-black text-zinc-900">{formatPrice(totalRevenue)}</p>
        </div>
        <div className="bg-white border-2 border-zinc-100 rounded-[2rem] p-8 shadow-sm">
          <p className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-2">Total sales</p>
          <p className="text-4xl font-black text-zinc-900">{totalSales}</p>
        </div>
      </div>

      {/* Sales table */}
      <section className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
        <h2 className="text-2xl font-black text-zinc-900 mb-6 tracking-tight">Recent sales</h2>

        {allSales.length === 0 ? (
          <div className="text-center py-16 rounded-[2rem] bg-zinc-50 border-2 border-dashed border-zinc-200">
            <p className="text-lg text-zinc-400 font-bold">No sales yet — share your profile to start selling.</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-50">
            {allSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between py-4 gap-4">
                <div className="min-w-0 flex-1">
                  <p className="font-black text-zinc-900 truncate">{sale.productTitle}</p>
                  <p className="text-zinc-400 text-sm font-medium truncate">{sale.buyerEmail}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-black text-zinc-900">{formatPrice(sale.amountPaid)}</p>
                  <p className="text-zinc-400 text-xs font-medium">{formatDate(sale.createdAt)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
