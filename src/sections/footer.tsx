"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Globe, Linkedin, ArrowUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const FOOTER_LINKS = {
  Club: [
    { name: "About Us", href: "#about" },
    { name: "Members", href: "#members" },
    { name: "Latest", href: "#news" },
  ],
  Resources: [
    { name: "Jersey Shop", href: "#jersey" },
    { name: "Register", href: "/register" },
    { name: "Contact", href: "#about" },
  ],
  Social: [
    { name: "Instagram", href: "#" },
    { name: "Twitter / X", href: "#" },
    { name: "YouTube", href: "#" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <footer className="relative mt-10 md:mt-20 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl px-6 sm:px-8 lg:px-16 py-2 md:py-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-black tracking-wider mb-4 flex items-center gap-2 font-tanker">
              <Image
                src="/falcons_logo.png"
                alt="Lamb Falcons Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-white">LAMB</span>{" "}
              <span className="text-blue-400">FALCONS</span>
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Built on grit. Fueled by passion. The official home of Lamb
              Falcons Football Club.
            </p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-gray-500">
                Season 2025–26 Active
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleFooterClick(e, link.href)}
                        className="text-sm text-gray-500 hover:text-green-500 transition-colors duration-200 cursor-pointer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-green-500 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">DEVELOPER  </span>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/uzicodes"
                target="_blank"
                className="text-gray-600 hover:text-green-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </Link>
              <Link
                href="https://www.utshochowdhury.me"
                className="text-gray-600 hover:text-green-500 transition-colors"
                aria-label="Website"
              >
                <Globe size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/utsho-heaven-chowdhury"
                target="_blank"
                className="text-gray-600 hover:text-green-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-gray-500">
              LAMB FALCONS  © All rights reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/30 hover:border-white transition-all duration-300 bg-transparent"
              aria-label="Scroll to top"
            >
              <ArrowUp
                size={18}
                className="text-white animate-bounce"
                style={{ animationDuration: "2s" }}
              />
            </button>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
