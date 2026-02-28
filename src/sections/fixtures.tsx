"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FIXTURES = [
  {
    date: "Mar 05",
    home: "Lamb Falcons",
    away: "Thunder FC",
    score: null,
    venue: "Falcon Arena",
    type: "upcoming",
  },
  {
    date: "Mar 12",
    home: "Lamb Falcons",
    away: "Storm United",
    score: null,
    venue: "Falcon Arena",
    type: "upcoming",
  },
  {
    date: "Feb 22",
    home: "Lamb Falcons",
    away: "Phoenix SC",
    score: "3 – 1",
    venue: "Falcon Arena",
    type: "result",
  },
  {
    date: "Feb 15",
    home: "Nighthawks FC",
    away: "Lamb Falcons",
    score: "0 – 2",
    venue: "Nighthawk Stadium",
    type: "result",
  },
  {
    date: "Feb 08",
    home: "Lamb Falcons",
    away: "Blaze City",
    score: "4 – 0",
    venue: "Falcon Arena",
    type: "result",
  },
];

export default function Fixtures() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      const rows = listRef.current?.children;
      if (rows) {
        gsap.fromTo(
          rows,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
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
      className="relative py-32 md:py-40 overflow-hidden bg-black"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
            Matchday
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Fixtures & Results
          </h2>
        </div>

        <div ref={listRef} className="space-y-3">
          {FIXTURES.map((match, i) => (
            <div
              key={i}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 justify-between p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Upcoming indicator */}
              {match.type === "upcoming" && (
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
              )}

              {/* Date */}
              <div className="w-20 shrink-0">
                <span className="text-sm font-semibold text-gray-400">
                  {match.date}
                </span>
              </div>

              {/* Matchup */}
              <div className="flex-1 flex items-center gap-3">
                <span
                  className={`text-sm md:text-base font-semibold ${
                    match.home === "Lamb Falcons"
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {match.home}
                </span>
                <span className="text-xs text-gray-600 uppercase tracking-wider">
                  vs
                </span>
                <span
                  className={`text-sm md:text-base font-semibold ${
                    match.away === "Lamb Falcons"
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {match.away}
                </span>
              </div>

              {/* Score / Status */}
              <div className="flex items-center gap-4">
                {match.score ? (
                  <span className="text-sm font-bold text-white tracking-wider">
                    {match.score}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                      Upcoming
                    </span>
                  </span>
                )}
              </div>

              {/* Venue */}
              <div className="w-36 text-right hidden md:block">
                <span className="text-xs text-gray-600">{match.venue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
