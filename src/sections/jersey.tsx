"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const JERSEYS = [
    {
        name: "Home Kit 2025/26",
        price: "$89",
        tag: "Bestseller",
        colors: "Royal Blue / White",
        description:
            "The iconic Falcon blue. Engineered with breathable Dri-Motion fabric for peak performance.",
        accent: "from-blue-600/20 to-blue-900/20",
        badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    },
    {
        name: "Away Kit 2025/26",
        price: "$89",
        tag: "New",
        colors: "Stealth Black / Gold",
        description:
            "Sleek black with gold accents. Built for the road. Designed to intimidate.",
        accent: "from-yellow-600/10 to-gray-900/20",
        badgeColor: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    },
    {
        name: "Third Kit 2025/26",
        price: "$85",
        tag: "Limited",
        colors: "Arctic White / Cyan",
        description:
            "Clean. Minimal. The third kit features a bold monochrome palette with cyan detail work.",
        accent: "from-cyan-500/10 to-gray-900/20",
        badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    },
    {
        name: "Training Kit 2025/26",
        price: "$69",
        tag: "Essential",
        colors: "Graphite / Lime",
        description:
            "Built for the grind. Lightweight construction with moisture-wicking technology.",
        accent: "from-lime-500/10 to-gray-900/20",
        badgeColor: "bg-lime-500/10 border-lime-500/20 text-lime-400",
    },
    {
        name: "Retro Kit 2025/26",
        price: "$95",
        tag: "Exclusive",
        colors: "Crimson / Navy",
        description:
            "A tribute to the legacy. Classic design meets modern performance fabric.",
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
                    <h2 data-animate className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                        <span className="text-white">Official</span>{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Kit Shop
                        </span>
                    </h2>
                    <p data-animate className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Representing the Falcons with premium quality kits & merchandise
                    </p>
                </div>
            </div>

            {/* Jersey Showcase */}
            <div className="relative py-8 md:py-12 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={jerseyGridRef} className="flex flex-wrap justify-center gap-4 lg:gap-3">
                        {JERSEYS.map((jersey) => (
                            <div
                                key={jersey.name}
                                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-500 w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(20%-12px)]"
                            >
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute top-2.5 left-2.5">
                                        <span className={`inline-block text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border ${jersey.badgeColor}`}>
                                            {jersey.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-3.5 text-center flex flex-col items-center">
                                    <div className="flex flex-col items-center mb-1.5">
                                        <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                                            {jersey.name}
                                        </h3>
                                        <span className="text-xs font-black text-blue-400 mt-0.5">{jersey.price}</span>
                                    </div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.1em] font-semibold mb-2">
                                        {jersey.colors}
                                    </p>
                                    <p className="text-[11px] text-gray-400 leading-tight mb-3 line-clamp-2">
                                        {jersey.description}
                                    </p>
                                    <button className="w-full py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-semibold text-white hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 uppercase tracking-widest">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
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
        </section>
    );
}
