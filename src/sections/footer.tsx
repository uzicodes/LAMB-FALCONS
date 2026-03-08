"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

const FOOTER_LINKS = {
  Club: [
    { name: "About Us", href: "/about" },
    { name: "Members", href: "/members" },
    { name: "Latest", href: "/news" },
  ],
  Resources: [
    { name: "Jersey Shop", href: "/jersey" },
    { name: "Register", href: "/register" },
    { name: "Contact", href: "/about" },
  ],
  Social: [
    { name: "Instagram", href: "#" },
    { name: "Twitter / X", href: "#" },
    { name: "YouTube", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
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
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-green-500 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">DEVELOPER  </span>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/uzicodes"
                target="_blank"
                className="text-gray-600 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </Link>
              <Link
                href="https://www.utshochowdhury.me"
                className="text-gray-600 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/utsho-heaven-chowdhury"
                target="_blank"
                className="text-gray-600 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Link>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            LAMB FALCONS  © All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
