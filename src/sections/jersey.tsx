"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const JERSEYS = [
    {
        name: "FALCONS THIRD 2025/26",
        price: "600 TK",
        tag: "Latest",
        colors: "Royal Blue / White",
        accent: "from-[#d2e823]/20 to-[#0a2a1f]/20",
        badgeColor: "bg-[#d2e823]/10 border-[#d2e823]/20 text-[#d2e823]",
    },
    {
        name: "EXODUS HOME 2024/25",
        price: "600 TK",
        tag: "Exclusive",
        colors: "Stealth Black / Gold",
        accent: "from-[#d2e823]/10 to-[#0a2a1f]/20",
        badgeColor: "bg-[#d2e823]/10 border-[#d2e823]/20 text-[#d2e823]",
    },
    {
        name: "EXODUS AWAY 2024/25",
        price: "550 TK",
        tag: "Partnered",
        colors: "Arctic White / Cyan",
        accent: "from-[#f8f4e8]/5 to-[#0a2a1f]/20",
        badgeColor: "bg-[#f8f4e8]/10 border-[#f8f4e8]/20 text-[#f8f4e8]/70",
    },
    {
        name: "FALCONS AWAY 2022/23",
        price: "450 TK",
        tag: "2nd Kit",
        colors: "Graphite / Lime",
        accent: "from-[#d2e823]/10 to-[#0a2a1f]/20",
        badgeColor: "bg-[#d2e823]/10 border-[#d2e823]/20 text-[#d2e823]",
    },
    {
        name: "FALCONS HOME 2020/21",
        price: "650 TK",
        tag: "Debut",
        colors: "Crimson / Navy",
        accent: "from-[#f8f4e8]/5 to-[#0a2a1f]/20",
        badgeColor: "bg-[#f8f4e8]/10 border-[#f8f4e8]/20 text-[#f8f4e8]/70",
    },
];


export default function JerseySection() {
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
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Jersey cards
            const jerseyCards = jerseyGridRef.current?.children;
            if (jerseyCards) {
                gsap.fromTo(
                    jerseyCards,
                    { opacity: 0, y: 70, scale: 0.95 },
                    {
                        opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
                        scrollTrigger: {
                            trigger: jerseyGridRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }


        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="jersey" className="relative overflow-hidden">
            {/* Header */}
            <div className="relative py-12 md:py-16">
                <div ref={headerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div data-animate className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f8f4e8]/10 bg-[#f8f4e8]/5 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#d2e823] animate-pulse" />
                        <span className="text-xs font-medium tracking-widest uppercase text-[#f8f4e8]">
                            Our Collections
                        </span>
                    </div>
                    <h2 data-animate className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider leading-[0.9] mb-4 font-tanker text-[#f8f4e8]">
                        Official Merchandise
                    </h2>
                    <p data-animate className="text-lg sm:text-xl text-[#f8f4e8]/50 max-w-2xl mx-auto leading-relaxed">
                        Representing with Premium Quality Kits & Merchandise
                    </p>
                </div>
            </div>

            {/* Jersey Showcase */}
            <div className="relative py-8 md:py-12 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={jerseyGridRef} className="flex flex-wrap justify-center gap-4 lg:gap-3">
                        {JERSEYS.map((jersey) => {
                            const nameParts = jersey.name.split(" ");
                            const year = nameParts.pop();
                            const mainName = nameParts.join(" ");
                            
                            return (
                                <div
                                    key={jersey.name}
                                    className="group relative rounded-2xl bg-[#f8f4e8]/[0.02] border border-[#f8f4e8]/5 hover:border-[#f8f4e8]/15 overflow-hidden transition-all duration-500 w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-12px)]"
                                >
                                    <div className={`w-full aspect-[4/5] bg-gradient-to-br ${jersey.accent} relative overflow-hidden flex flex-col items-center justify-center`}>
                                        <div className="w-18 h-26 rounded-t-3xl border-2 border-[#f8f4e8]/[0.06] flex items-center justify-center">
                                            <span className="text-2xl font-black text-[#f8f4e8]/[0.06]">LF</span>
                                        </div>
                                        <span className={`absolute top-2.5 left-2.5 inline-block text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border ${jersey.badgeColor}`}>
                                            {jersey.tag}
                                        </span>
                                    </div>
                                    <div className="p-3.5 text-center flex flex-col items-center">
                                        <h3 className="text-sm font-bold text-[#FB4500] tracking-wide group-hover:text-[#d2e823] transition-colors duration-300 line-clamp-1 font-space-grotesk">
                                            {mainName}
                                        </h3>
                                        <span className="text-xs font-semibold text-[#d2e823] tracking-wide mt-0.5 mb-1 font-space-grotesk">{jersey.price}</span>
                                        <p className="text-[10px] text-[#f8f4e8]/40 uppercase tracking-[0.1em] font-semibold mb-2">
                                            {jersey.colors}
                                        </p>
                                        <p className="text-sm font-bold text-[#f8f4e8]/50 mb-3">
                                            {year}
                                        </p>
                                        <button type="button" className="w-full py-2 rounded-xl bg-[#f8f4e8]/5 border border-[#f8f4e8]/10 text-[9px] font-semibold text-[#f8f4e8] hover:bg-[#f8f4e8]/10 hover:border-[#d2e823]/30 hover:shadow-[0_0_20px_rgba(210,232,35,0.15)] transition-all duration-300 uppercase tracking-widest">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="relative py-12 overflow-hidden">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[#f8f4e8]/50 mb-8 max-w-lg mx-auto">
                        Join the Falcons family & unlock exclusive discounts on all merchandise.
                    </p>
                </div>
            </div>
        </section >
    );
}
