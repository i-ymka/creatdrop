import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creatdrop.com"),
  title: "Creatdrop — Give for free. Charge for access.",
  description:
    "Sell coaching programs & memberships online. $29/mo flat — 0% Creatdrop commission — standard payment processing applies.",
  keywords: [
    "sell workout programs online",
    "Gumroad alternative fitness creators",
    "sell fitness plans no transaction fees",
    "sell fitness plans online",
    "fitness creator platform",
  ],
  openGraph: {
    title: "Creatdrop — Give for free. Charge for access.",
    description:
      "Sell coaching programs & memberships online. $29/mo flat — 0% Creatdrop commission — standard payment processing applies.",
    url: "https://creatdrop.com",
    siteName: "Creatdrop",
    type: "website",
    images: [
      {
        url: "https://creatdrop.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "Creatdrop — Give for free. Charge for access.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatdrop — Give for free. Charge for access.",
    description:
      "Sell coaching programs & memberships online. $29/mo flat — 0% Creatdrop commission — standard payment processing applies.",
    images: ["https://creatdrop.com/icon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={{
        signIn: {
          start: {
            title: "Sign in to Creatdrop",
            subtitle: "Welcome back! Please sign in to continue",
          },
        },
        signUp: {
          start: {
            title: "Create your Creatdrop account",
            subtitle: "Welcome! Please fill in the details to get started",
          },
        },
      }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WEYQ7D2QE9"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEYQ7D2QE9');
          `}</Script>
          {children}
          <Analytics />
          <footer className="border-t border-zinc-100 bg-white py-5">
            <nav className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              <a href="/terms" className="hover:text-violet-600 transition-colors">Terms</a>
              <a href="/privacy" className="hover:text-violet-600 transition-colors">Privacy</a>
              <a href="/refund" className="hover:text-violet-600 transition-colors">Refund</a>
              <a href="/payouts" className="hover:text-violet-600 transition-colors">Payouts</a>
              <a href="mailto:hello@creatdrop.com" className="hover:text-violet-600 transition-colors">Contact</a>
            </nav>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
