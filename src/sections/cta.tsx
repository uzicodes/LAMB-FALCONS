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
            trigger: sectionRef.current, // Use section as trigger for reliability
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
          className="relative rounded-3xl border border-[#d2e823]/40 bg-[#061a13] p-6 md:p-10 text-center overflow-hidden"
        >
          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#d2e823] mb-4">
              Be Part of Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-[#f8f4e8] mb-4 font-tanker">
              Ready to Fly?
            </h2>
            <p className="text-base md:text-lg text-[#f8f4e8]/50 max-w-xl mx-auto mb-6 leading-relaxed">
              Whether you&apos;re a player, a supporter, or someone who wants to
              be part of something bigger — there&apos;s a place for you here !
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/register"
                className="group relative px-8 py-3 border border-[#f8f4e8]/20 text-[#d2e823] font-bold text-sm uppercase tracking-widest rounded-none overflow-hidden transition-all duration-500 hover:border-[#d2e823]/50 hover:shadow-[0_0_30px_rgba(210,232,35,0.2)]"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0a2a1f]">
                  BE A FALCON !
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d2e823] to-[#e0f040] -translate-x-[102%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
