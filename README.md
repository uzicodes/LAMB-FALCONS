<div align="center">
  <img src="./public/falcons_logo.png" alt="LAMB FALCONS Logo" width="130" />

  # LAMB FALCONS — CLUB PORTAL

  <p>A modern, high-performance web platform built for the <b>LAMB FALCONS</b> club. The portal delivers a sleek, customized user experience featuring authentication, user management, and event-ready layouts—powered entirely by Next.js and Clerk without requiring a standalone database.</p>
</div>

---

## 🚀 Features

* **Modern Next.js 14 App Router:** Built with React Server Components, Server Actions, and dynamic layout routing.
* **Complete Authentication Suite:** Seamless sign-in, sign-up, session handling, and forgot-password flows powered by Clerk.
* **Zero-Database User Management:** Member attributes, phone numbers, and profile avatars managed directly via Clerk metadata (`publicMetadata` and `unsafeMetadata`).
* **Custom Dark Aesthetic:** Bespoke UI styled with Tailwind CSS and Framer Motion adhering strictly to the club's black and blue visual identity.
* **Branded Transactional Emails:** Fully customized HTML/`<re-html>` email templates for OTP verification and membership invitations.
* **Performance-Optimized:** High Lighthouse score optimization with Next.js Image component (`next/image`), local/optimized fonts, and minimal layout shifts.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Authentication & Identity:** [Clerk](https://clerk.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── SplashScreen.tsx
├── middleware.ts
└── public/
    ├── falcons-logo.png
    ├── heroslides1.JPG
    └── fonts/
```

---

## ⚙️ Getting Started

### Prerequisites

* **Node.js:** 18.17+ or later
* **Package Manager:** `npm`, `pnpm`, or `yarn`
* **Clerk Account:** A free [Clerk](https://clerk.com/) account

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/lamb-falcons.git
cd lamb-falcons
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add your Clerk credentials:

```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Custom Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔒 Route Protection & Middleware

Protected routes and authentication states are guarded at the edge using Clerk's middleware helper in `src/middleware.ts`:

```typescript
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/members(.*)",
  "/profile(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

---

## 📬 Email Customization (Clerk)

The application utilizes customized Clerk `<re-html>` templates for transactional emails:

* **OTP Verification:** Modern dark theme highlighting the 6-digit verification code in electric blue (`#2563eb`).
* **Member Invitation:** Branded invitation template allowing administrators to invite club members directly with expiring access links.

To apply these, paste the template markup into the **Customization > Emails** section of your Clerk Dashboard.

---

## 🚀 Deployment

The fastest way to deploy the application is using the [Vercel Platform](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Configure the environment variables (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, etc.).
4. Click **Deploy**.


