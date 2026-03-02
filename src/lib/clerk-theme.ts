import type { Appearance } from "@clerk/types";

/**
 * Shared Clerk appearance configuration for SignIn & SignUp components.
 * Black & Blue theme matching the LAMB FALCONS brand.
 */
export const clerkAppearance: Appearance = {
  variables: {
    colorPrimary: "#2563eb",           // blue-600
    colorBackground: "#18181b",        // zinc-900
    colorInputBackground: "#09090b",   // zinc-950
    colorInputText: "#ffffff",
    colorText: "#ffffff",
    colorTextSecondary: "#a1a1aa",     // zinc-400
    colorDanger: "#ef4444",            // red-500
    colorSuccess: "#22c55e",           // green-500
    borderRadius: "0.75rem",
    fontFamily: "var(--font-inter), Satoshi, sans-serif",
  },
  elements: {
    // Root card
    rootBox: "mx-auto w-full",
    card: "bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-2xl rounded-2xl",

    // Header
    headerTitle: "text-white text-2xl font-bold tracking-tight",
    headerSubtitle: "text-zinc-400 text-sm",

    // Social / OAuth buttons
    socialButtonsBlockButton:
      "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-all duration-200 rounded-lg",
    socialButtonsBlockButtonText: "text-zinc-300 font-medium",

    // Divider
    dividerLine: "bg-zinc-700",
    dividerText: "text-zinc-500 text-xs uppercase tracking-widest",

    // Form fields
    formFieldLabel: "text-zinc-300 text-xs font-medium",
    formFieldInput:
      "bg-zinc-950/50 border border-zinc-700 text-white rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-zinc-600 transition-all",
    formFieldInputShowPasswordButton: "text-zinc-500 hover:text-zinc-300",

    // Primary action button
    formButtonPrimary:
      "bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-200 active:scale-[0.98]",

    // Footer links
    footerActionLink: "text-blue-400 hover:text-blue-300 font-semibold transition-colors",
    footerActionText: "text-zinc-400 text-xs",

    // Extras
    identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
    formFieldAction: "text-blue-400 hover:text-blue-300 text-xs",
    formResendCodeLink: "text-blue-400 hover:text-blue-300 text-xs",

    // User button (navbar avatar)
    userButtonAvatarBox: "w-8 h-8 ring-2 ring-blue-500/30",
    userButtonPopoverCard: "bg-zinc-900 border border-zinc-800 shadow-2xl",
    userButtonPopoverActionButton: "text-zinc-300 hover:text-white hover:bg-zinc-800",
    userButtonPopoverActionButtonText: "text-zinc-300",
    userButtonPopoverFooter: "border-zinc-800",
  },
};
