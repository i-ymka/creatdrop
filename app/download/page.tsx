import { db } from "@/lib/db";
import Link from "next/link";
import PaddleCheckout from "./PaddleCheckout";

type Props = {
  searchParams: Promise<{ token?: string; _ptxn?: string }>;
};

export default async function DownloadPage({ searchParams }: Props) {
  const { token, _ptxn } = await searchParams;

  const sale = token
    ? await db.sale.findFirst({
        where: { downloadToken: token },
        include: { product: { include: { profile: { select: { username: true } } } } },
      })
    : null;

  // Token not found at all
  if (!sale) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-5">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-3xl font-black text-zinc-900">Download not found</h1>
          <p className="text-zinc-500 font-medium">
            This link is invalid or has expired. Check your email for your download link.
          </p>
          <Link href="/" className="inline-block px-8 py-4 rounded-full bg-violet-600 text-white font-black hover:bg-violet-700 transition-all">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  // Payment not yet confirmed — PaddleCheckout opens overlay and polls for webhook
  if (!sale.paddleTransactionId) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-5">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center mx-auto animate-pulse">
            <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-zinc-900">Confirming your payment…</h1>
          <p className="text-zinc-500 font-medium">This usually takes a few seconds.</p>
        </div>
        {/* Opens Paddle overlay and polls every 4s for webhook confirmation */}
        {_ptxn && <PaddleCheckout transactionId={_ptxn} />}
      </div>
    );
  }

  const downloadUrl = `/api/download/${sale.downloadToken}`;

  return (
    <div className="min-h-dvh flex items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 px-5">
      <div className="max-w-md w-full space-y-8">
        {/* Success card */}
        <div className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-10 shadow-sm text-center space-y-6">
          {/* Checkmark */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight">Payment confirmed!</h1>
            <p className="text-zinc-500 mt-2 font-medium">
              Thank you for purchasing <span className="font-bold text-zinc-700">{sale.product.title}</span>.
            </p>
          </div>

          <a
            href={downloadUrl}
            className="block w-full px-8 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200 active:scale-95"
          >
            Download your file
          </a>

          <p className="text-xs text-zinc-400 font-medium">
            Save this link — you can use it again if needed.
          </p>
        </div>

        {/* Built with Creatdrop */}
        <div className="text-center">
          <Link
            href="https://creatdrop.com/?utm_source=badge&utm_medium=checkout&utm_campaign=viral"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-100 text-sm font-bold text-zinc-500 hover:border-violet-200 hover:text-violet-600 hover:shadow-lg hover:bg-white transition-all shadow-sm"
          >
            <div className="w-5 h-5 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-md flex items-center justify-center shadow-sm">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101
                     m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            Built with Creatdrop
          </Link>
        </div>
      </div>
    </div>
  );
}
