"use client";

import Image from "next/image";

const PARTNERS = [
  {
    name: "Designex",
    src: "/designex.webp",
  },
  {
    name: "LAMB",
    src: "/lamb.webp",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#d2e823] mb-4">
            Proudly Supported By
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-[#e8e0c8] font-tanker">
            Our Partners
          </h2>
        </div>

        {/* Static Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-14 pt-4 md:pt-8 pb-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex items-center justify-center p-8 sm:p-10 md:p-12 rounded-3xl border border-[#d2e823]/40 bg-[#061a13] hover:border-[#d2e823]/70 hover:shadow-[0_0_35px_rgba(210,232,35,0.15)] transition-all duration-500 w-full max-w-sm sm:max-w-md md:max-w-lg h-52 sm:h-64 md:h-72"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={450}
                  height={200}
                  className="max-h-28 sm:max-h-36 md:max-h-44 w-auto max-w-[240px] sm:max-w-[320px] md:max-w-[380px] object-contain filter brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
