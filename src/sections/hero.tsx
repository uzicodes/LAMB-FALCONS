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
        badgeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 1.2 },
          "-=0.4"
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

      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -80,
        opacity: 0,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video/image placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
        {/* Animated gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-blue-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNTAnIGhlaWdodD0nMjUwJz48ZmlsdGVyIGlkPSdub2lzZScgeD0nMCcgeT0nMCc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuNjUnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbm9pc2UpJyBvcGFjaXR5PScxJy8+PC9zdmc+')]" />

      {/* Dark overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/40" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute left-[90%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div ref={badgeRef} className="opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-gray-300">
              Season 2025–26 is Live
            </span>
          </div>
        </div>

        <h1
          ref={headingRef}
          className="opacity-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-6"
        >
          <span className="block text-white">LAMB</span>
          <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            FALCONS
          </span>
        </h1>

        <p
          ref={subRef}
          className="opacity-0 text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Built on grit. Fueled by passion. <br className="hidden sm:block" />
          Dominating since day one.
        </p>

        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* Quick stats ticker */}
        <div
          ref={statsRowRef}
          className="opacity-0 mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "14", label: "Trophies" },
            { value: "200+", label: "Members" },
            { value: "2019", label: "Founded" },
            { value: "#1", label: "Regional Rank" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
