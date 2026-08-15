"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SPONSORS = [
  "APEX Sports",
  "VeloTech",
  "NovaDrink",
  "UrbanKit",
  "SkyNet Media",
  "ProField",
  "EliteGear",
  "Zenith Labs",
];

export default function Sponsors() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth / 2;
      gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#f8f4e8] mb-4">
            Proudly Supported By
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-[#f8f4e8] font-tanker">
            Our Partners
          </h2>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#061a13] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#061a13] to-transparent" />

        <div ref={trackRef} className="flex items-center gap-12 w-max">
          {[...SPONSORS, ...SPONSORS].map((sponsor, i) => (
            <div
              key={`${sponsor}-${i >= SPONSORS.length ? "copy" : "orig"}`}
              className="flex-shrink-0 px-8 py-5 rounded-xl border border-[#f8f4e8]/5 bg-[#f8f4e8]/[0.02] hover:bg-[#f8f4e8]/[0.05] hover:border-[#f8f4e8]/10 transition-all duration-300"
            >
              <span className="text-lg md:text-xl font-bold tracking-wider text-[#f8f4e8]/40 hover:text-[#f8f4e8]/70 transition-colors duration-300 whitespace-nowrap">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
