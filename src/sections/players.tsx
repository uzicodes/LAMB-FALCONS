"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PLAYERS = [
  {
    name: "Marcus Reid",
    position: "Forward",
    number: "9",
    stats: "22 Goals",
  },
  {
    name: "Jaylen Okafor",
    position: "Midfielder",
    number: "8",
    stats: "14 Assists",
  },
  {
    name: "Carlos Mendes",
    position: "Defender",
    number: "4",
    stats: "98% Pass Rate",
  },
  {
    name: "Ethan Brooks",
    position: "Goalkeeper",
    number: "1",
    stats: "12 Clean Sheets",
  },
  {
    name: "Kofi Asante",
    position: "Winger",
    number: "7",
    stats: "18 Goals",
  },
  {
    name: "Dmitri Volkov",
    position: "Midfielder",
    number: "10",
    stats: "11 Assists",
  },
];

export default function Players() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
            Our Roster
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Meet the Squad
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {PLAYERS.map((player) => (
            <div
              key={player.name}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-500"
            >
              {/* Card top accent */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs text-blue-400 uppercase tracking-[0.2em] font-semibold mb-1">
                      {player.position}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {player.name}
                    </h3>
                  </div>
                  <span className="text-5xl md:text-6xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 leading-none">
                    {player.number}
                  </span>
                </div>

                {/* Player image placeholder */}
                <div className="w-full aspect-[3/2] rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-black text-white/[0.05]">
                      #{player.number}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Stats bar */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 font-medium">
                    {player.stats}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-500">Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
