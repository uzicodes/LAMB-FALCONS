import type { Appearance } from "@clerk/types";


export const clerkAppearance: Appearance = {
  variables: {
    colorPrimary: "#d2e823",           // accent lime
    colorBackground: "#0a2a1f",        // falcon dark
    colorInputBackground: "#061a13",   // falcon deep dark
    colorInputText: "#f8f4e8",
    colorText: "#f8f4e8",
    colorTextSecondary: "#f8f4e899",   // cream muted
    colorDanger: "#ef4444",            // red-500
    colorSuccess: "#d2e823",           // accent
    borderRadius: "0.75rem",
    fontFamily: "var(--font-inter), Satoshi, sans-serif",
  },
  elements: {
    // Root card
    rootBox: "mx-auto w-full",
    card: "bg-[#0a2a1f]/80 backdrop-blur-xl border border-[#15442f] shadow-2xl rounded-2xl",

    // Header
    headerTitle: "text-[#f8f4e8] text-2xl font-bold tracking-tight",
    headerSubtitle: "text-[#f8f4e8]/60 text-sm",

    // Social / OAuth buttons
    socialButtonsBlockButton:
      "bg-[#0e3527] border border-[#15442f] text-[#f8f4e8]/80 hover:bg-[#15442f] hover:text-[#f8f4e8] transition-all duration-200 rounded-lg",
    socialButtonsBlockButtonText: "text-[#f8f4e8]/80 font-medium",

    // Divider
    dividerLine: "bg-[#15442f]",
    dividerText: "text-[#f8f4e8]/40 text-xs uppercase tracking-widest",

    // Form fields
    formFieldLabel: "text-[#f8f4e8]/80 text-xs font-medium",
    formFieldInput:
      "bg-[#061a13]/50 border border-[#15442f] text-[#f8f4e8] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] placeholder-[#f8f4e8]/30 transition-all",
    formFieldInputShowPasswordButton: "text-[#f8f4e8]/40 hover:text-[#f8f4e8]/70",

    // Primary action button
    formButtonPrimary:
      "bg-[#d2e823] hover:bg-[#e0f040] text-[#0a2a1f] font-bold rounded-lg shadow-[0_0_15px_rgba(210,232,35,0.3)] hover:shadow-[0_0_20px_rgba(210,232,35,0.5)] transition-all duration-200 active:scale-[0.98]",

    // Footer links
    footerActionLink: "text-[#d2e823] hover:text-[#e0f040] font-semibold transition-colors",
    footerActionText: "text-[#f8f4e8]/50 text-xs",

    // Extras
    identityPreviewEditButton: "text-[#d2e823] hover:text-[#e0f040]",
    formFieldAction: "text-[#d2e823] hover:text-[#e0f040] text-xs",
    formResendCodeLink: "text-[#d2e823] hover:text-[#e0f040] text-xs",

    // User button (navbar avatar)
    userButtonAvatarBox: "w-8 h-8 ring-2 ring-[#d2e823]/30",
    userButtonPopoverCard: "bg-[#0a2a1f] border border-[#15442f] shadow-2xl",
    userButtonPopoverActionButton: "text-[#f8f4e8]/80 hover:text-[#f8f4e8] hover:bg-[#0e3527]",
    userButtonPopoverActionButtonText: "text-[#f8f4e8]/80",
    userButtonPopoverFooter: "border-[#15442f]",
  },
};
