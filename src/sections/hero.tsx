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

        {/* Heading */}
        <div className="flex flex-col items-center justify-center">
          <h1
            ref={headingRef}
              className="opacity-0 text-4xl sm:text-4xl md:text-5xl lg:text-8xl text-white leading-none tracking-wider"
              style={{ fontFamily: "'Winky Milky', sans-serif", marginTop: '-30px' }}
          >
            MORE THAN A CLUB
          </h1>
        </div>
      </div>
    </section>
  );
}
