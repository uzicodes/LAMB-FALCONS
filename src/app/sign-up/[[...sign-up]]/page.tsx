"use client";

import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-theme";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#061a13] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#061a13]/70 z-10" />
        <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d2e823]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-20 w-full max-w-md flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-14 h-14 mb-4">
          <Image
            src="/falcons_logo.png"
            alt="Lamb Falcons Logo"
            fill
            sizes="56px"
            className="object-contain drop-shadow-[0_0_12px_rgba(210,232,35,0.5)]"
          />
        </div>

        {/* Clerk SignUp component */}
        <SignUp
          appearance={clerkAppearance}
          forceRedirectUrl="/profile"
        />
      </div>
    </section>
  );
}
