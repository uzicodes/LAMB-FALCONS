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
        accent: "from-blue-600/20 to-blue-900/20",
        badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    },
    {
        name: "EXODUS HOME 2024/25",
        price: "600 TK",
        tag: "Exclusive",
        colors: "Stealth Black / Gold",
        accent: "from-yellow-600/10 to-gray-900/20",
        badgeColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    },
    {
        name: "EXODUS AWAY 2024/25",
        price: "550 TK",
        tag: "Partnered",
        colors: "Arctic White / Cyan",
        accent: "from-cyan-500/10 to-gray-900/20",
        badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    },
    {
        name: "FALCONS AWAY 2022/23",
        price: "450 TK",
        tag: "2nd Kit",
        colors: "Graphite / Lime",
        accent: "from-lime-500/10 to-gray-900/20",
        badgeColor: "bg-lime-500/10 border-lime-500/20 text-lime-400",
    },
    {
        name: "FALCONS HOME 2020/21",
        price: "650 TK",
        tag: "Debut",
        colors: "Crimson / Navy",
        accent: "from-red-600/10 to-gray-900/20",
        badgeColor: "bg-red-500/10 border-red-500/20 text-red-400",
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
                    <div data-animate className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-medium tracking-widest uppercase text-gray-300">
                            Our Collections
                        </span>
                    </div>
                    <h2 data-animate className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider leading-[0.9] mb-4 font-tanker">
                        <span className="text-white">Official Merchandise</span>{" "}
                    </h2>
                    <p data-animate className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                                    className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-500 w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-12px)]"
                                >
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className={`w-full aspect-[4/5] bg-gradient-to-br ${jersey.accent} relative`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-950" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <div className="w-18 h-26 rounded-t-3xl border-2 border-white/[0.06] relative">
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-2 rounded-b-lg border-b-2 border-x-2 border-white/[0.06]" />
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                    <span className="text-2xl font-black text-white/[0.06]">LF</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute top-2.5 left-2.5">
                                            <span className={`inline-block text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border ${jersey.badgeColor}`}>
                                                {jersey.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-3.5 text-center flex flex-col items-center">
                                        <div className="flex flex-col items-center mb-1.5">
                                            <h3 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors duration-300 line-clamp-1">
                                                {mainName}
                                            </h3>
                                            <span className="text-xs font-black text-orange-400 mt-0.5">{jersey.price}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.1em] font-semibold mb-2">
                                            {jersey.colors}
                                        </p>
                                        <p className="text-sm font-bold text-gray-400 mb-3">
                                            {year}
                                        </p>
                                        <button type="button" className="w-full py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-semibold text-white hover:bg-white/10 hover:border-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300 uppercase tracking-widest">
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
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Join the Falcons family & unlock exclusive discounts on all merchandise.
                    </p>
                </div>
            </div>
        </section >
    );
}
