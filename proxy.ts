import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import type { NextRequest } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/ogify/dashboard(.*)"]);


const _middleware = clerkMiddleware(async (auth, request: NextRequest) => {
  if (isProtectedRoute(request)) {
    // Clerk v7 `auth.protect()` rewrites to 404 for signed-out users by
    // default. Redirect to /sign-in instead so the dashboard URL is reachable.
    const { userId, redirectToSignIn } = await auth();
    if (!userId) {
      return redirectToSignIn({ returnBackUrl: request.url });
    }
  }
});

export const proxy = _middleware;

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
