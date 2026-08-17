"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "30+", label: "Active Members", suffix: "" },
  { value: "2020", label: "Established", suffix: "" },
  { value: "6 +", label: "years of Legacy", suffix: "" },

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
      className="relative py-12 md:py-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#FB4500] mb-4">
            Who Are We
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-wider text-[#d2e823] font-tanker">
            LAMB FALCONS
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24 mt-16 md:mt-24">
          {/* Text side */}
          <div ref={textRef}>
            <p className="text-lg md:text-xl text-[#f8f4e8]/60 leading-relaxed mb-6">
              LAMB Falcons was founded with a clear mission to create a
              community-driven club that pushes boundaries on and off the field.
              What started as a small group of passionate players has grown into a
              powerhouse in the regional circuit.
            </p>
            <p className="text-lg md:text-xl text-[#f8f4e8]/60 leading-relaxed mb-8">
              Our philosophy is simple: develop talent, foster unity & compete
              with relentless intensity. We don&apos;t just play we set the
              standard. Join us on this journey as we continue to soar higher, break records & make history together. Falcons isn&apos;t just a club, it&apos;s a legacy in the making.
            </p>

            {/* Inline Stats */}
            <div
              ref={cardsRef}
              className="flex flex-wrap gap-3"
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative px-4 py-3 rounded-xl bg-[#f8f4e8]/[0.02] border border-[#f8f4e8]/5 hover:border-[#f8f4e8]/10 transition-all duration-500 hover:bg-[#f8f4e8]/[0.04]"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative text-lg font-black text-[#d2e823]">
                    {stat.value}
                  </p>
                  <p className="relative text-[10px] text-[#d2e823]/70 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side — abstract card */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#0a2a1f] to-[#061a13] border border-[#f8f4e8]/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d2e823]/10 via-transparent to-[#d2e823]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-8xl md:text-9xl font-black text-[#f8f4e8]/5">
                    LF
                  </p>
                  <p className="text-sm uppercase tracking-[0.4em] text-[#f8f4e8]/30 mt-4">
                    Lamb Falcons
                  </p>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#f8f4e8]/10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#f8f4e8]/10" />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
