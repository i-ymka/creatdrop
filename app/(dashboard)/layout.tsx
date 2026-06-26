import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignupTracker } from "./dashboard/SignupTracker";

const NAV_LINKS = [
  { href: "/dashboard", label: "Links" },
  { href: "/dashboard/products", label: "Products" },
  { href: "/dashboard/sales", label: "Sales" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-200">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-violet-700">
            Creatdrop
          </Link>
          <nav className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-full text-sm font-bold text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <UserButton />
      </header>
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10">
        {children}
      </main>
      <SignupTracker />
    </div>
  );
}
