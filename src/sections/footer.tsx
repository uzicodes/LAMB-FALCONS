"use client";

import Link from "next/link";

const FOOTER_LINKS = {
  Club: [
    { name: "About Us", href: "/about" },
    { name: "Members", href: "/members" },
    { name: "History", href: "/about" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-black tracking-tight mb-4">
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
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
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
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Lamb Falcons FC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
