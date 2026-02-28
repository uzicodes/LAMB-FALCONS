"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Internal glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />

          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-6">
              Be Part of It
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
              Ready to Fly?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re a player, a supporter, or someone who wants to
              be part of something bigger — there&apos;s a place for you at Lamb
              Falcons.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="group relative px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] overflow-hidden"
              >
                <span className="relative z-10">Become a Member</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/jersey"
                className="px-10 py-4 border border-white/15 text-white font-semibold text-sm uppercase tracking-widest rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Shop Jerseys
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
