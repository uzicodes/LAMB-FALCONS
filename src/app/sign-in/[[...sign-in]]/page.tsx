import dynamic from "next/dynamic";
import { clerkAppearance } from "@/lib/clerk-theme";
import Image from "next/image";

const SignIn = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignIn), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[400px] h-[480px] rounded-2xl bg-[#0a2a1f]/60 backdrop-blur-md border border-[#d2e823]/20 animate-pulse flex items-center justify-center">
      <span className="text-[#f8f4e8]/40 text-sm font-medium">Loading Sign In...</span>
    </div>
  ),
});

export default function SignInPage() {
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

        {/* Clerk SignIn component */}
        <SignIn
          appearance={clerkAppearance}
          forceRedirectUrl="/profile"
        />
      </div>
    </section>
  );
}
