import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function WaitlistBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-200">
        <div className="flex items-center gap-6">
          <Link href="/waitlist-builder" className="text-xl font-bold tracking-tight text-violet-700">
            Waitlist Builder
          </Link>
        </div>
        <UserButton />
      </header>
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10">
        {children}
      </main>
    </div>
  );
}
