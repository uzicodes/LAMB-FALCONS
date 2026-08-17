"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/heroslides1.webp')] bg-cover bg-center bg-no-repeat blur-[0.7px] scale-[1.02]" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center min-h-screen pt-32">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h1
            ref={headingRef}
            className="opacity-0 text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-[#f8f4e8] leading-none tracking-wider font-winky-milky"
            style={{ marginTop: '-30px' }}
          >
            MORE THAN A CLUB
          </h1>
        </div>
      </div>
    </section>
  );
}

