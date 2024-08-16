## BabaAI Content Generator

BabaAI is a comprehensive full-stack AI content generator platform that leverages Gemini AI to create content based on your prompts.

## Resources :

- [Shadcn UI Library](https://shadcn.com/)

```
npx shadcn-ui@latest init
```

- [Clerk Quick Start](https://dashboard.clerk.com/apps/app_2kj4ymyMoGX88lbk46s0ASnAw4f/instances/ins_2kj4yr1dISUnEjOp63qyOQOeAgB)

- [Clerk Documentation](https://clerk.com/docs/references/nextjs/custom-signup-signin-pages)

```
npm install @clerk/nextjs
```

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
```
