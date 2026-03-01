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
];

const MERCH = [
    { name: "Training Tracksuit", price: "$120", category: "Apparel" },
    { name: "Falcon Beanie", price: "$28", category: "Accessories" },
    { name: "Match Day Scarf", price: "$22", category: "Accessories" },
    { name: "Training Shorts", price: "$35", category: "Apparel" },
    { name: "Goalkeeper Gloves", price: "$45", category: "Equipment" },
    { name: "Falcon Backpack", price: "$55", category: "Accessories" },
];

export default function JerseySection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const jerseyGridRef = useRef<HTMLDivElement>(null);
    const merchGridRef = useRef<HTMLDivElement>(null);

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

            // Merch grid
            const merchCards = merchGridRef.current?.children;
            if (merchCards) {
                gsap.fromTo(
                    merchCards,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
                        scrollTrigger: {
                            trigger: merchGridRef.current,
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
            <div className="relative py-24 md:py-32">
                <div ref={headerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div data-animate className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-medium tracking-widest uppercase text-gray-300">
                            2025/26 Collection
                        </span>
                    </div>
                    <h2 data-animate className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
                        <span className="text-white">Official</span>{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Kit Shop
                        </span>
                    </h2>
                    <p data-animate className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Represent the Falcons. Premium quality kits and merchandise designed
                        for matchday, training, and everyday wear.
                    </p>
                </div>
            </div>

            {/* Jersey Showcase */}
            <div className="relative py-24 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
                            Match Kits
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                            Season Jerseys
                        </h2>
                    </div>

                    <div ref={jerseyGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {JERSEYS.map((jersey) => (
                            <div
                                key={jersey.name}
                                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-500"
                            >
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className={`w-full aspect-[3/4] bg-gradient-to-br ${jersey.accent} relative`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-950" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="w-32 h-40 rounded-t-3xl border-2 border-white/[0.06] relative">
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-3 rounded-b-lg border-b-2 border-x-2 border-white/[0.06]" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <span className="text-4xl font-black text-white/[0.06]">LF</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border ${jersey.badgeColor}`}>
                                            {jersey.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {jersey.name}
                                        </h3>
                                        <span className="text-lg font-black text-white">{jersey.price}</span>
                                    </div>
                                    <p className="text-xs text-blue-400/60 uppercase tracking-[0.15em] font-semibold mb-3">
                                        {jersey.colors}
                                    </p>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-5">
                                        {jersey.description}
                                    </p>
                                    <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 uppercase tracking-widest">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Size Guide Banner */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 md:p-12 overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                    Not sure about your size?
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Use our interactive size guide to find the perfect fit before ordering.
                                </p>
                            </div>
                            <button className="shrink-0 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 uppercase tracking-widest">
                                Size Guide →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Merchandise Grid */}
            <div className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.04),transparent_60%)]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
                            Gear Up
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                            Merchandise
                        </h2>
                    </div>
                    <div ref={merchGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {MERCH.map((item) => (
                            <div
                                key={item.name}
                                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500 cursor-pointer"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 mb-5 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center">
                                            <div className="w-7 h-7 rounded-full border border-white/5" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                                <div className="relative">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600 mb-1 block">
                                        {item.category}
                                    </span>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {item.name}
                                        </h3>
                                        <span className="text-sm font-bold text-white">{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="relative py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                        Members Get 15% Off
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Join the Falcons family and unlock exclusive discounts on all kits and merchandise.
                    </p>
                    <Link
                        href="/register"
                        className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                    >
                        Become a Member
                    </Link>
                </div>
            </div>
        </section>
    );
}
