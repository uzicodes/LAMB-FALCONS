"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NEWS = [
  {
    date: "Feb 26, 2026",
    tag: "Match Report",
    title: "Falcons Dominate Phoenix SC in Commanding 3-1 Victory",
    excerpt:
      "A stellar performance from Marcus Reid sealed a comfortable win for the Falcons at home.",
  },
  {
    date: "Feb 20, 2026",
    tag: "Transfer",
    title: "New Signing: Kofi Asante Joins from Continental League",
    excerpt:
      "The explosive winger brings pace and flair to the Falcons' attacking line-up.",
  },
  {
    date: "Feb 14, 2026",
    tag: "Club News",
    title: "Falcon Arena Expansion Plans Announced",
    excerpt:
      "The club reveals its ambitious plans to increase stadium capacity by 5,000 seats ahead of next season.",
  },
];

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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
      className="relative py-32 md:py-40 overflow-hidden bg-black"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
            Latest
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Club News
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {NEWS.map((article, i) => (
            <article
              key={i}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image placeholder */}
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-white/5" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-400 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-600">{article.date}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
