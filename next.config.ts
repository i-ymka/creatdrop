import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        // Google favicon service used for platform icons on profile pages
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/ogify",
        destination: "https://ogzap.com",
        permanent: true,
      },
      {
        source: "/ogify/:path*",
        destination: "https://ogzap.com",
        permanent: true,
      },
      {
        source: "/waitlist-builder",
        destination: "https://waitrocket.com",
        permanent: true,
      },
      {
        source: "/waitlist-builder/:path*",
        destination: "https://waitrocket.com",
        permanent: true,
      },
      {
        source: "/dashboard/waitlists",
        destination: "https://waitrocket.com",
        permanent: true,
      },
      {
        source: "/dashboard/waitlists/:path*",
        destination: "https://waitrocket.com",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        // /@username → /u/username (@ prefix in app/ is reserved for parallel routes)
        source: "/@:username",
        destination: "/u/:username",
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // Suppress source map upload logs during build unless in CI
  silent: !process.env.CI,

  // Upload source maps only when SENTRY_AUTH_TOKEN is set (i.e., in Vercel)
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});
