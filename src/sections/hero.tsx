"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.2 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )

        .fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          statsRowRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        );

      // Parallax on scroll
      gsap.to(overlayRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0.9,
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/heroslides1.JPG')] bg-cover bg-center bg-no-repeat blur-[0.7px] scale-[1.02]" />
      </div>

      {/* Dark overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/40" />


      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center min-h-screen pt-32">

        {/* Heading — positioned independently */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1
            ref={headingRef}
            className="opacity-0 text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white leading-none tracking-wider -mt-48 md:-mt-64"
            style={{ fontFamily: "'Winky Milky', sans-serif" }}
          >
            MORE THAN A CLUB
          </h1>
        </div>

        {/* Subtext — positioned independently */}
        <p
          ref={subRef}
          className="opacity-0 text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8"
        >
          Built on grit. Fueled by passion. 
          Dominating since day one.
        </p>

        {/* Bottom group — pushed to bottom */}
        <div className="pb-10 md:pb-16">
          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/register"
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] overflow-hidden"
            >
              <span className="relative z-10">Join the Squad</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-white/15 text-white font-semibold text-sm uppercase tracking-widest rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>

          <div ref={badgeRef} className="opacity-0 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-gray-300">
                Season 2025–26 
              </span>
            </div>
          </div>

          {/* Quick stats ticker */}
          <div
            ref={statsRowRef}
            className="opacity-0 mt-12 md:mt-4 flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {[
              { value: "30+", label: "Members" },
              { value: "2020", label: "Founded" },
              { value: "# 1", label: "Regional Rank" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-yellow-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
