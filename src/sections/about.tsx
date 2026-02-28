"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "200+", label: "Active Members", suffix: "" },
  { value: "14", label: "Championship Titles", suffix: "" },
  { value: "96%", label: "Win Rate (Home)", suffix: "" },
  { value: "6", label: "Years of Legacy", suffix: "" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
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
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text block
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats cards stagger
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            More Than a Club
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Text side */}
          <div ref={textRef}>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
              Lamb Falcons was founded with a clear mission — to create a
              community-driven club that pushes boundaries on and off the field.
              What started as a small group of passionate players has grown into a
              powerhouse in the regional circuit.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              Our philosophy is simple: develop talent, foster unity, and compete
              with relentless intensity. We don&apos;t just play — we set the
              standard.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-sm text-gray-500 uppercase tracking-widest">
                Est. 2019
              </span>
            </div>
          </div>

          {/* Visual side — abstract card */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-8xl md:text-9xl font-black text-white/5">
                    LF
                  </p>
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-600 mt-4">
                    Lamb Falcons
                  </p>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10" />
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="relative text-3xl md:text-4xl font-black text-white mb-2">
                {stat.value}
              </p>
              <p className="relative text-xs md:text-sm text-gray-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
