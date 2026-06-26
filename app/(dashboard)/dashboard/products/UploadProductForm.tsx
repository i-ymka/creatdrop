"use client";

import { useActionState, useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import { uploadProduct, UploadProductState } from "../product-actions";

export default function UploadProductForm() {
  const [state, formAction, pending] = useActionState<UploadProductState, FormData>(
    uploadProduct,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      track("product_uploaded");
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-5" encType="multipart/form-data">
      {state?.success && (
        <div className="px-4 py-3 rounded-2xl bg-green-50 border border-green-200 text-green-700 text-sm font-bold">
          Product uploaded successfully!
        </div>
      )}
      {state?.error && (
        <div className="px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
          {state.error}
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-sm font-black text-zinc-400 uppercase tracking-widest">
          Product name
        </label>
        <input
          name="title"
          type="text"
          required
          placeholder="e.g. Lightroom Preset Pack"
          className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-black text-zinc-400 uppercase tracking-widest">
          Description <span className="normal-case font-medium">(optional)</span>
        </label>
        <textarea
          name="description"
          rows={3}
          placeholder="What's included in this product?"
          className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-400 uppercase tracking-widest">
            Price (USD)
          </label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">$</span>
            <input
              name="price"
              type="number"
              step="0.01"
              min="0.50"
              required
              placeholder="9.99"
              className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl pl-9 pr-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-black text-zinc-400 uppercase tracking-widest">
            File
          </label>
          <input
            name="file"
            type="file"
            required
            accept=".pdf,.zip,.jpg,.jpeg,.png,.gif,.webp"
            className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-3 text-sm font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-violet-100 file:text-violet-700 hover:file:bg-violet-200"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Uploading…" : "Upload product"}
      </button>
    </form>
  );
}
