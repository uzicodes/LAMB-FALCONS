"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Show } from "@clerk/nextjs";

gsap.registerPlugin(ScrollTrigger);

const handleShopJersey = (e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.getElementById("jersey");
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 95%",
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
      className="relative pt-10 md:pt-12 pb-20 md:pb-28 overflow-hidden"
    >

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={formRef}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 md:p-10 text-center overflow-hidden"
        >
          {/* Internal glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />

          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-green-400/50 mb-4">
              Be Part of Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-red-500/70 mb-4 font-tanker">
              Ready to Fly?
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
              Whether you&apos;re a player, a supporter, or someone who wants to
              be part of something bigger — there&apos;s a place for you here !
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/register"
                className="group relative px-8 py-3 border border-white/20 text-blue-400 font-bold text-sm uppercase tracking-widest rounded-none overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  BE A FALCON !
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
