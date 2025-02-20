<div align="center">
<img src="./assets/chatbot.png" width="100px">

## BabaAI Content Generator

![Next.js](https://img.shields.io/badge/Next.js-11.1.2-000000?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-2.2.19-38B2AC?style=for-the-badge&logo=tailwind-css)
![Clerk](https://img.shields.io/badge/Clerk-1.0.0-000000?style=for-the-badge&logo=clerk)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-1.0.0-000000?style=for-the-badge&logo=gemini-ai)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-1.0.0-000000?style=for-the-badge&logo=shadcn-ui)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-1.0.0-000000?style=for-the-badge&logo=lucide-icons)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.4-336791?style=for-the-badge&logo=postgresql)
![DizzleORM](https://img.shields.io/badge/DizzleORM-1.0.0-000000?style=for-the-badge&logo=dizzleorm)
![Neon](https://img.shields.io/badge/Neon-1.0.0-000000?style=for-the-badge&logo=neon)

<img src="./assets/1 (2).png" width="90%">

</div>

## ✨ Description :

BabaAI Content Generator is a Next.js application that uses Gemini AI to generate content for the user. The user can generate content by providing a title and a description. The user can also view the generated content in the dashboard.

## 🪶 Features :

- **Clerk Authentication and Authorization**
  ![](<./assets/1%20(1).png>)

- **Baba AI Dashboard Page**
  ![](<./assets/1%20(2).png>)

- **Content Generation Page**
  ![](<./assets/1%20(3).png>)

- **Generatining a blog post content using AI**
  ![](<./assets/1%20(4).png>)

- **History Page**
  ![](<./assets/1%20(5).png>)

- **Payment and billing Section**
  ![](<./assets/1%20(6).png>)

## ⛵ Resources :

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
