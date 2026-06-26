import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { setupProfile, addLink, deleteLink } from "./actions";
import { ProfileForm } from "./ProfileForm";
import { PayoutEmailForm } from "./PayoutEmailForm";
import { CheckoutButton } from "./CheckoutButton";
import { OnboardingChecklist } from "./OnboardingChecklist";
import { PromoCodeForm } from "./PromoCodeForm";

type Props = {
  searchParams: Promise<{ checkout_error?: string }>;
};

export default async function DashboardPage({ searchParams }: Props) {
  const { userId } = await auth();
  if (!userId) return null;

  const checkoutError = (await searchParams)?.checkout_error === "1";

  const profile = await db.profile.findUnique({
    where: { userId },
    include: { links: { orderBy: { order: "asc" } } },
  });

  const linkCount = profile?.links.length ?? 0;
  // PRO is active if plan is PRO and either no expiry or expiry is in the future
  const isProUser = profile?.plan === "PRO" &&
    (!profile.proExpiresAt || new Date(profile.proExpiresAt) > new Date());
  const atFreeLimit = !isProUser && linkCount >= 5;

  const TRIAL_DAYS = 14;
  const ONBOARDING_DAYS = 7;
  const daysSinceCreation = profile?.createdAt
    ? Math.floor((Date.now() - new Date(profile.createdAt).getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const trialDaysRemaining = !isProUser ? Math.max(0, TRIAL_DAYS - daysSinceCreation) : 0;

  const showOnboarding = !!profile?.username && daysSinceCreation < ONBOARDING_DAYS;
  const [productCount, saleCount] = profile?.username
    ? await Promise.all([
        db.product.count({ where: { profileId: profile.id } }),
        showOnboarding
          ? db.sale.count({ where: { product: { profileId: profile.id } } })
          : Promise.resolve(0),
      ])
    : [0, 0];

  const showPayoutWarning =
    !!profile?.username && productCount > 0 && profile.payoutEmail === null;

  if (!profile?.username) {
    return (
      <div className="max-w-lg mx-auto py-24 text-center space-y-8">
        <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight mb-3">Set up your free page</h1>
          <p className="text-zinc-500 text-lg font-medium">
            Choose a username to claim your public link page at <span className="font-bold text-zinc-700">creatdrop.com/@you</span>
          </p>
        </div>
        <form action={setupProfile} className="space-y-4 text-left bg-white border-2 border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-black text-zinc-400 uppercase tracking-widest">
              Display name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoFocus
              placeholder="Your name"
              className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-black text-zinc-400 uppercase tracking-widest">
              Choose your username
            </label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 font-bold text-lg">@</span>
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="yourname"
                pattern="[a-z0-9_\-]{3,30}"
                title="3-30 lowercase letters, numbers, _ or -"
                className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl pl-10 pr-5 py-3 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200 active:scale-95"
          >
            Claim my free page
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10">
      {checkoutError && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-900 rounded-2xl px-5 py-4"
        >
          <p className="font-bold text-sm sm:text-base">
            We couldn&apos;t start your Pro checkout. This one&apos;s on us — please try again in a moment.
          </p>
          <p className="text-sm font-medium mt-1 text-red-800">
            If it keeps happening, email{" "}
            <a href="mailto:support@creatdrop.com" className="underline">
              support@creatdrop.com
            </a>{" "}
            and we&apos;ll sort it out.
          </p>
        </div>
      )}

      {showPayoutWarning && (
        <div
          role="alert"
          className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <p className="font-bold text-sm sm:text-base">
            Set your PayPal email so we can pay you when you make sales.
          </p>
          <a
            href="#payout-email-form"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-900 text-amber-50 font-bold text-sm hover:bg-amber-800 transition-all whitespace-nowrap"
          >
            Add payout email →
          </a>
        </div>
      )}

      <section className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
            Payout email (PayPal)
          </h2>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mt-1">
            Where we send your sales
          </p>
        </div>
        <PayoutEmailForm payoutEmail={profile?.payoutEmail ?? null} />
      </section>

      {showOnboarding && (
        <OnboardingChecklist
          hasProduct={productCount > 0}
          hasSale={saleCount > 0}
          username={profile!.username}
          daysSinceCreation={daysSinceCreation}
        />
      )}

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight transition-all">Your link page</h1>
          <p className="text-zinc-500 mt-2 text-lg font-medium">
            {profile?.username
              ? `creatdrop.com/@${profile.username}`
              : "Set up your profile to get your public link"}
          </p>
        </div>
        {profile?.username && (
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-10">
          {/* Links */}
          <section className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">   
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-black text-zinc-900 tracking-tight">Your links</h2>
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mt-1">
                  {linkCount} {!isProUser ? "/ 5" : ""} active
                </p>
              </div>
              {isProUser ? (
                <div className="flex flex-col items-end gap-1">
                  <div className="px-4 py-1.5 bg-violet-100 text-violet-700 text-xs font-black uppercase tracking-widest rounded-full">
                    PRO
                  </div>
                  {profile?.foundingCreator && (
                    <span className="text-xs font-black text-yellow-600 uppercase tracking-widest">
                      ⭐ Founding Creator
                    </span>
                  )}
                  {profile?.proExpiresAt && (
                    <span className="text-xs font-bold text-zinc-400">
                      Until {new Date(profile.proExpiresAt).toLocaleDateString()}
                    </span>
                  )}
                  <a
                    href="https://buyer.paddle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-400 underline hover:text-zinc-600 mt-1"
                  >
                    Manage subscription
                  </a>
                </div>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <div className="px-4 py-1.5 bg-zinc-100 text-zinc-500 text-xs font-black uppercase tracking-widest rounded-full">
                    Free plan
                  </div>
                  {trialDaysRemaining > 0 && (
                    <span className="text-xs font-bold text-amber-600">
                      {trialDaysRemaining} day{trialDaysRemaining !== 1 ? "s" : ""} remaining
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Existing links */}
            <div className="space-y-3 mb-10">
              {profile?.links.map((link) => (
                <div
                  key={link.id}
                  className="group flex items-center justify-between p-5 rounded-2xl bg-zinc-50 border-2 border-transparent hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300"
                >
                  <div className="min-w-0">
                    <p className="font-bold text-zinc-800 text-lg truncate">    
                      {link.title}
                    </p>
                    <p className="text-sm text-zinc-400 font-medium truncate">{link.url}</p>  
                  </div>
                  <form
                    action={async () => {
                      "use server";
                      await deleteLink(link.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl text-sm font-bold text-zinc-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              ))}
              {linkCount === 0 && (
                <div className="text-center py-12 px-6 rounded-3xl bg-zinc-50 border-2 border-dashed border-zinc-200">
                  <p className="text-lg text-zinc-400 font-bold">
                    No links yet — add your first one!
                  </p>
                </div>
              )}
            </div>

            {/* Add link form */}
            {!atFreeLimit ? (
              <form action={addLink} className="space-y-4 border-t-2 border-zinc-50 pt-8">
                <h3 className="text-lg font-black text-zinc-900">Add new link</h3> 
                <div className="grid gap-4">
                  <input
                    name="title"
                    type="text"
                    required
                    placeholder="Label (e.g. My Website)"
                    className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-4 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
                  />
                  <input
                    name="url"
                    type="text"
                    required
                    placeholder="e.g. iymka.com or https://example.com"
                    className="w-full bg-zinc-50 border-2 border-transparent rounded-2xl px-5 py-4 text-base font-bold focus:bg-white focus:border-violet-400 focus:outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-violet-600 text-white font-black text-lg hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200 active:scale-95"
                >
                  Add link
                </button>
              </form>
            ) : (
              <div className="border-t-2 border-zinc-50 pt-8 space-y-6">
                <div className="bg-violet-50 rounded-[2rem] p-8 border border-violet-100 shadow-inner text-center">
                  <p className="text-lg text-violet-900 font-bold mb-4 leading-tight">
                    You&apos;ve reached the free limit. <br />Upgrade to add unlimited links!
                  </p>
                  <CheckoutButton />
                </div>
                <div className="bg-zinc-50 rounded-[2rem] p-6 border border-zinc-100">
                  <PromoCodeForm />
                </div>
              </div>
            )}
          </section>
        </div>

        <div className="lg:col-span-2 space-y-10">
          {/* Profile form */}
          <section className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-8 shadow-sm sticky top-24">
            <h2 className="text-2xl font-black text-zinc-900 mb-6 tracking-tight">Profile info</h2>
            <ProfileForm
              name={profile?.name ?? ""}
              username={profile?.username ?? ""}
              bio={profile?.bio ?? null}
            />
          </section>

          {/* Promo code — show for non-PRO users who haven't hit the limit yet */}
          {!isProUser && !atFreeLimit && (
            <section className="bg-white border-2 border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
              <PromoCodeForm />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
