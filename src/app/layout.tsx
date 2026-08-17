import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/layout/navbar";
import SmoothScrollProvider from "../components/providers/smooth-scroll";
import { clerkAppearance } from "@/lib/clerk-theme";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const tanker = localFont({
  src: "../../public/fonts/Tanker.otf",
  variable: "--font-tanker",
  display: "swap",
});

const winkyMilky = localFont({
  src: "../../public/fonts/Winky Milky.ttf",
  variable: "--font-winky-milky",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LAMB FALCONS",
  description: "Official Club Website",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${tanker.variable} ${winkyMilky.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ClerkProvider appearance={clerkAppearance}>
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}