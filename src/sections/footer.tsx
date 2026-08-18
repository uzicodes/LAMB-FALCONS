"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, ArrowUp, ArrowUpRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const FOOTER_LINKS = {
  Navigation: [
    { name: "About Us", href: "#about" },
    { name: "Squad Members", href: "#members" },
    { name: "Club News", href: "#news" },
    { name: "Match Gallery", href: "#gallery" },
  ],
  Resources: [
    { name: "Official Jerseys", href: "#jersey" },
    { name: "Join Falcons", href: "/register" },
    { name: "Partner Brands", href: "#sponsors" },
    { name: "Player Login", href: "/login" },
  ],
  Social: [
    { name: "Instagram", href: "https://instagram.com", external: true },
    { name: "Twitter / X", href: "https://x.com", external: true },
    { name: "YouTube", href: "https://youtube.com", external: true },
    { name: "Facebook", href: "https://facebook.com", external: true },
  ],
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleFooterClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;

      e.preventDefault();
      const sectionId = href.replace("#", "");

      if (!isHomePage) {
        sessionStorage.setItem("scrollToSection", sectionId);
        router.push("/");
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
        window.history.replaceState(null, "", "/");
      }
    },
    [isHomePage, router]
  );

  return (
    <footer className="relative mt-8 md:mt-16 pt-4 pb-2 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main modern card */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] bg-[#061a13] border border-[#d2e823]/40 p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden">
          {/* Upper Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-6 md:pb-8 border-b border-[#d2e823]/20">
            {/* Brand column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-2xl bg-[#0e3527] border border-[#d2e823]/20 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(210,232,35,0.15)]">
                    <Image
                      src="/falcons_logo.png"
                      alt="Lamb Falcons Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-wider leading-none font-tanker text-[#e8e0c8]">
                      LAMB FALCONS
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#d2e823]/70 font-semibold mt-0.5">
                      Sports Club
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#f8f4e8]/60 leading-relaxed max-w-sm mb-4">
                  Built on relentless grit, brotherhood, and a culture of winning. The official home of LAMB Falcons FC.
                </p>
              </div>

              {/* Status pill & quick CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061a13] border border-[#d2e823]/30 shadow-inner">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d2e823] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d2e823]" />
                  </span>
                  <span className="text-xs font-medium text-[#f8f4e8]/70">
                    Season 2025–26
                  </span>
                </div>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#d2e823] text-[#0a2a1f] text-xs font-bold uppercase tracking-wider hover:bg-[#e0f040] transition-all duration-300 shadow-[0_0_15px_rgba(210,232,35,0.3)] hover:shadow-[0_0_25px_rgba(210,232,35,0.5)]"
                >
                  Join Us
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Links Columns (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
              {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                <div key={category} className="flex flex-col">
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#FB4500] mb-3.5">
                    {category}
                  </h4>
                  <ul className="space-y-2.5">
                    {links.map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith("#") ? (
                          <a
                            href={link.href}
                            onClick={(e) => handleFooterClick(e, link.href)}
                            className="group inline-flex items-center gap-1.5 text-sm text-[#f8f4e8]/50 hover:text-[#f8f4e8] transition-colors duration-200 cursor-pointer"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#d2e823]/40 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-200" />
                            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                              {link.name}
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="group inline-flex items-center gap-1.5 text-sm text-[#f8f4e8]/50 hover:text-[#f8f4e8] transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#d2e823]/40 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-200" />
                            <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                              {link.name}
                            </span>
                            {link.external && (
                              <ArrowUpRight size={12} className="opacity-40 group-hover:opacity-100 group-hover:text-[#d2e823] transition-all" />
                            )}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Lower utility bar */}
          <div className="pt-5 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f8f4e8]/40">
            {/* Developer Credits */}
            <div className="flex items-center gap-4">
              <span className="font-semibold tracking-wider text-[#f8f4e8]/50 uppercase text-[10px]">
                Crafted by
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href="https://github.com/uzicodes"
                  target="_blank"
                  className="p-2 rounded-xl bg-[#061a13] border border-[#d2e823]/30 text-[#f8f4e8]/60 hover:text-[#d2e823] hover:border-[#d2e823]/60 transition-all duration-300 shadow-sm"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
                <Link
                  href="https://www.utshochowdhury.me"
                  target="_blank"
                  className="p-2 rounded-xl bg-[#061a13] border border-[#d2e823]/30 text-[#f8f4e8]/60 hover:text-[#d2e823] hover:border-[#d2e823]/60 transition-all duration-300 shadow-sm"
                  aria-label="Portfolio Website"
                >
                  <Globe size={14} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/utsho-heaven-chowdhury"
                  target="_blank"
                  className="p-2 rounded-xl bg-[#061a13] border border-[#d2e823]/30 text-[#f8f4e8]/60 hover:text-[#d2e823] hover:border-[#d2e823]/60 transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Copyright & Scroll To Top */}
            <div className="flex items-center gap-6">
              <p>
                © {new Date().getFullYear()} LAMB FALCONS. All rights reserved.
              </p>
              <button
                type="button"
                onClick={scrollToTop}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-[#061a13] border border-[#d2e823]/30 hover:border-[#d2e823] hover:bg-[#0e3527] transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(210,232,35,0.25)]"
                aria-label="Scroll to top"
              >
                <ArrowUp
                  size={16}
                  className="text-[#f8f4e8] group-hover:text-[#d2e823] group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── BIG DISPLAY TYPOGRAPHY UNDER FOOTER ── */}
        <div className="relative pt-8 md:pt-10 pb-2 text-center select-none pointer-events-none overflow-hidden">
          <h1
            className="text-[13vw] sm:text-[14vw] md:text-[14.5vw] lg:text-[15vw] font-black tracking-tight leading-none uppercase font-tanker bg-gradient-to-b from-[#f8f4e8]/25 via-[#d2e823]/15 to-transparent bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(210,232,35,0.05)] whitespace-nowrap"
          >
            LAMB FALCONS
          </h1>
          {/* Subtle bottom glow accent line */}

        </div>
      </div>
    </footer>
  );
}
