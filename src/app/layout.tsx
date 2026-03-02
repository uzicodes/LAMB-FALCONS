import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/layout/navbar";
import SmoothScrollProvider from "../components/providers/smooth-scroll";
import { clerkAppearance } from "@/lib/clerk-theme";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en">
        <head>
          <link
            href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={`${inter.variable} font-satoshi`}>
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}