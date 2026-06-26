"use client";

import { useActionState } from "react";
import { saveProfile, SaveProfileState } from "./actions";

interface Props {
  name: string;
  username: string;
  bio: string | null;
}

export function ProfileForm({ name, username, bio }: Props) {
  const [state, formAction, pending] = useActionState<SaveProfileState, FormData>(
    saveProfile,
    null
  );

  return (
    <form action={formAction} className="space-y-6">
      {state?.success && (
        <div className="px-4 py-3 rounded-2xl bg-green-50 border border-green-200 text-green-700 text-sm font-bold">
          Profile saved!
        </div>
      )}
      {state?.error && (
        <div className="px-4 py-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
          {state.error}
        </div>
      )}

      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-black text-zinc-400 uppercase tracking-widest"
        >
          Display name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={name}
          placeholder="Alex Chen"
          className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="username"
          className="block text-sm font-black text-zinc-400 uppercase tracking-widest"
        >
          Username
        </label>
        <div className="relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 font-bold text-lg">@</span>
          <input
            id="username"
            name="username"
            type="text"
            required
            defaultValue={username}
            placeholder="alexchen"
            pattern="[a-z0-9_\-]{3,30}"
            className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl pl-10 pr-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="bio"
          className="block text-sm font-black text-zinc-400 uppercase tracking-widest"
        >
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={3}
          defaultValue={bio ?? ""}
          placeholder="Tell your audience who you are..."
          className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full px-8 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Saving…" : "Save changes"}
      </button>
    </form>
  );
}
