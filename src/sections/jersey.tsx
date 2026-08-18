"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shirt, ShoppingBag } from "lucide-react";
import Link from "next/link";

const JERSEYS = [
    {
        name: "FALCONS THIRD 2025/26",
        price: "600 TK",
        tag: "Latest",
    },
    {
        name: "EXODUS HOME 2024/25",
        price: "600 TK",
        tag: "Exclusive",
    },
    {
        name: "EXODUS AWAY 2024/25",
        price: "550 TK",
        tag: "Partnered",
    },
    {
        name: "FALCONS AWAY 2022/23",
        price: "450 TK",
        tag: "2nd Kit",
    },
    {
        name: "FALCONS HOME 2020/21",
        price: "650 TK",
        tag: "Debut",
    },
];

export default function JerseySection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const jerseyGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Header entrance
            const headerChildren = headerRef.current?.querySelectorAll("[data-animate]");
            if (headerChildren) {
                gsap.fromTo(
                    headerChildren,
                    { opacity: 0, y: 25 },
                    {
                        opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power3.out",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 92%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Jersey cards ultra-snappy entrance
            const jerseyCards = jerseyGridRef.current?.children;
            if (jerseyCards) {
                gsap.fromTo(
                    jerseyCards,
                    { opacity: 0, y: 20, scale: 0.98 },
                    {
                        opacity: 1, y: 0, scale: 1, duration: 0.35, stagger: 0.035, ease: "power3.out",
                        scrollTrigger: {
                            trigger: jerseyGridRef.current,
                            start: "top 95%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="jersey" className="relative overflow-hidden [perspective:1000px]">
            {/* Header */}
            <div className="relative pt-16 md:pt-24 pb-4 md:pb-6">
                <div ref={headerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div data-animate className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f8f4e8]/10 bg-[#f8f4e8]/5 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#d2e823] animate-pulse" />
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#f8f4e8]">
                            Our Collections
                        </span>
                    </div>
                    
                    <h2 data-animate className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider text-[#e8e0c8] font-tanker leading-none mb-6">
                        Official Merchandise
                    </h2>
                    
                    <p data-animate className="text-lg sm:text-xl text-[#f8f4e8]/60 max-w-2xl mx-auto leading-relaxed font-space-grotesk">
                        Represent the Falcons with our premium quality kits and exclusive club merchandise.
                    </p>
                </div>
            </div>

            {/* Jersey Showcase */}
            <div className="relative pt-4 pb-12 md:pb-16 overflow-hidden">
                <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={jerseyGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                    {JERSEYS.map((jersey) => {
                        const nameParts = jersey.name.split(" ");
                        const year = nameParts.pop();
                        const mainName = nameParts.join(" ");
                        
                        return (
                            <div
                                key={jersey.name}
                                className="group relative rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-500 hover:-translate-y-2 group-hover:shadow-[0_0_40px_-10px_rgba(210,232,35,0.25)]"
                            >
                                {/* Image / Visual representation */}
                                <div className="w-full aspect-[4/5] bg-gradient-to-b from-zinc-800 via-zinc-900 to-black relative overflow-hidden flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-700 ease-out">
                                    
                                    {/* Glassmorphic overlay for depth */}
                                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                    
                                    <Shirt className="w-32 h-32 text-white/90 drop-shadow-2xl z-0 transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
                                    
                                    {/* Badge */}
                                    <span className="absolute top-4 left-4 z-20 inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md bg-[#d2e823]/10 border-[#d2e823]/20 text-[#d2e823]">
                                        {jersey.tag}
                                    </span>
                                    
                                    {/* Overlay action button */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        <button type="button" className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wide text-xs shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                                            <ShoppingBag className="w-4 h-4" />
                                            Pre-order
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Info details */}
                                <div className="p-5 flex flex-col items-center text-center relative bg-zinc-950/80">
                                    <span className="text-[9px] font-semibold text-[#f8f4e8]/40 tracking-[0.2em] uppercase mb-1 font-space-grotesk">
                                        {year}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#FB4500] font-tanker tracking-wider leading-tight mb-1.5">
                                        {mainName}
                                    </h3>
                                    <span className="text-sm sm:text-base font-bold text-[#d2e823] tracking-wide font-space-grotesk">
                                        {jersey.price}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                </div>
            </div>

            {/* CTA */}
            <div className="relative py-12 overflow-hidden">
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-zinc-900 to-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                    <h3 className="text-3xl md:text-4xl font-tanker text-white mb-4 z-10">BECOME A MEMBER, GET 15% OFF</h3>
                    <p className="text-zinc-400 mb-8 max-w-lg z-10 font-space-grotesk text-sm md:text-base">
                        Join the Falcons family and unlock exclusive discounts on all merchandise, early access to new drops, and more.
                    </p>
                    <Link href="/register" className="z-10 relative px-8 py-4 bg-[#d2e823] text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(210,232,35,0.3)]">
                        Join the Club
                    </Link>
                </div>
                </div>
            </div>
        </section>
    );
}
