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
    // Infinite marquee (not scroll-triggered)
    const track = trackRef.current;
    if (track) {
      const totalWidth = track.scrollWidth / 2;
      gsap.to(track, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      gsap.killTweensOf(trackRef.current);
    };
  }, []);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-green-500 mb-4">
            Proudly Supported By
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-white font-tanker">
            Our Partners
          </h2>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent" />

        <div ref={trackRef} className="flex items-center gap-12 w-max">
          {[...SPONSORS, ...SPONSORS].map((sponsor, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 py-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <span className="text-lg md:text-xl font-bold tracking-wider text-gray-500 hover:text-gray-300 transition-colors duration-300 whitespace-nowrap">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
