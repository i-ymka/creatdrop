import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { deleteProduct } from "../product-actions";
import UploadProductForm from "./UploadProductForm";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default async function ProductsPage() {
  const { userId } = await auth();
  if (!userId) return null;

  const profile = await db.profile.findUnique({
    where: { userId },
    include: {
      products: {
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { sales: true } } },
      },
    },
  });

  if (!profile?.username) {
    return (
      <div className="max-w-lg mx-auto py-24 text-center">
        <p className="text-zinc-500 font-bold">
          Set up your profile first before adding products.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Products</h1>
          <p className="text-zinc-500 mt-2 text-lg font-medium">
            Upload digital files your audience can purchase and download instantly.
          </p>
        </div>
        <a
          href={`/@${profile.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-50 text-violet-600 font-bold hover:bg-violet-100 transition-all group shadow-sm border border-violet-100"
        >
          View public profile
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* Upload form */}
      <section className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
        <h2 className="text-2xl font-black text-zinc-900 mb-6 tracking-tight">Add new product</h2>
        <UploadProductForm />
      </section>

      {/* Product list */}
      <section className="space-y-4">
        <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
          Your products{" "}
          <span className="text-zinc-400 font-medium text-lg">({profile.products.length})</span>
        </h2>

        {profile.products.length === 0 ? (
          <div className="text-center py-16 rounded-[2.5rem] bg-zinc-50 border-2 border-dashed border-zinc-200">
            <p className="text-lg text-zinc-400 font-bold">No products yet — upload your first one above.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {profile.products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-6 rounded-2xl bg-white border-2 border-zinc-100 hover:border-violet-200 transition-all shadow-sm"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-black text-zinc-900 text-lg truncate">{product.title}</p>
                    <span className="shrink-0 px-3 py-1 bg-violet-50 text-violet-700 text-sm font-black rounded-full">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  {product.description && (
                    <p className="text-zinc-500 text-sm mt-1 truncate">{product.description}</p>
                  )}
                  <p className="text-zinc-400 text-xs font-bold mt-1.5">
                    {product.fileName} &middot; {formatBytes(product.fileSize)} &middot;{" "}
                    {product._count.sales} sale{product._count.sales !== 1 ? "s" : ""}
                  </p>
                </div>
                <form
                  action={async () => {
                    "use server";
                    await deleteProduct(product.id);
                  }}
                  className="ml-4 shrink-0"
                >
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-sm font-bold text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all"
                  >
                    Delete
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
