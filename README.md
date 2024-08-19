<div align="center">

<img src="./assets/chatbot.png" width="100px">

## BabaAI Content Generator

BabaAI is a comprehensive full-stack AI content generator platform that leverages Gemini AI to create content based on your prompts.

![Next.js](https://img.shields.io/badge/Next.js-11.1.2-000000?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-2.2.19-38B2AC?style=for-the-badge&logo=tailwind-css)
![Clerk](https://img.shields.io/badge/Clerk-1.0.0-000000?style=for-the-badge&logo=clerk)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-1.0.0-000000?style=for-the-badge&logo=gemini-ai)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-1.0.0-000000?style=for-the-badge&logo=shadcn-ui)

</div>

## Features :

- Clerk Authentication and Authorization

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

- [Free Icon Template : Logoipsum](https://logoipsum.com/)
- [Lucide Icons : Beautiful & Consistent Icons](https://lucide.dev/)
```bash
npm install lucide-react
```
