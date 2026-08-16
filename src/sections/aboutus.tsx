"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
    {
        title: "Relentless Drive",
        description: "We push limits every day. Mediocrity isn't in our vocabulary ",
    },
    {
        title: "Brotherhood",
        description: "A family that stands together through every challenge.",
    },
    {
        title: "Winning Culture",
        description: "Our mentality is built to compete at the highest level.",
    },
    {
        title: "Community First",
        description: "We invest in our community through local events.",
    },
];

const TIMELINE = [
    { year: "2020", event: "Club founded by a group of passionate athletes" },
    { year: "2020", event: "First regional tournament win — unbeaten season" },
    { year: "2021", event: "Youth Academy launched with 40+ trainees enrolled" },
    { year: "2022", event: "Falcon Arena inaugurated as permanent home ground" },
    { year: "2023", event: "Back-to-back championship titles secured" },
    { year: "2024", event: "Membership crosses 200 — largest in the region" },
    { year: "2025", event: "International friendly tour across 3 countries" },
];

export default function AboutUsSection() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical progress line as user scrolls through timeline
            if (progressRef.current && timelineRef.current) {
                gsap.fromTo(
                    progressRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: "top 80%",
                            end: "bottom 25%",
                            scrub: 2.5,
                        },
                    }
                );
            }

            // Animate the glowing tip dot to follow the progress line
            if (glowRef.current && timelineRef.current) {
                gsap.fromTo(
                    glowRef.current,
                    { top: "0%" },
                    {
                        top: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: "top 80%",
                            end: "bottom 25%",
                            scrub: 2.5,
                        },
                    }
                );
            }

            // Animate each timeline card: slide in from alternating sides
            nodeRefs.current.forEach((node, index) => {
                if (!node) return;

                const isLeft = index % 2 === 0;
                // On mobile, always slide from the right
                const mm = gsap.matchMedia();

                mm.add("(min-width: 768px)", () => {
                    gsap.fromTo(
                        node,
                        {
                            opacity: 0,
                            x: isLeft ? -80 : 80,
                            scale: 0.9,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 0.7,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: node,
                                start: "top 90%",
                                end: "top 60%",
                                scrub: 0.5,
                            },
                        }
                    );
                });

                mm.add("(max-width: 767px)", () => {
                    gsap.fromTo(
                        node,
                        {
                            opacity: 0,
                            x: 40,
                            scale: 0.92,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            duration: 0.7,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: node,
                                start: "top 90%",
                                end: "top 70%",
                                scrub: 0.5,
                            },
                        }
                    );
                });
            });
        }, timelineRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="relative overflow-hidden">
            {/* Header */}
            <div className="relative pt-12 md:pt-16 pb-4 md:pb-6">
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f8f4e8]/10 bg-[#f8f4e8]/5 backdrop-blur-sm mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#d2e823] animate-pulse" />
                        <span className="text-xs font-medium tracking-widest uppercase text-[#f8f4e8]/80">
                            Our Story
                        </span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider leading-[0.9] mb-3 font-tanker">
                        <span className="text-[#f8f4e8]">About</span>{" "}
                        <span className="text-[#d2e823]">Lamb Falcons</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[#f8f4e8]/50 max-w-2xl mx-auto leading-relaxed mb-4">
                        What started as a small group of passionate sportsman in 2020 has
                        grown into the region&apos;s most dominant force — a club built on
                        grit, brotherhood, and an unrelenting will to win.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-large text-[#f8f4e8]/40">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-px bg-gradient-to-r from-[#d2e823] to-transparent" />
                            <span className="uppercase tracking-widest">Est. 2020</span>
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#d2e823]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission / Vision */}
            <div className="relative pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <div className="relative rounded-2xl bg-gradient-to-br from-[#0a2a1f] to-[#061a13] border border-[#f8f4e8]/5 p-10 md:p-12 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#f8f4e8]/10" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#f8f4e8]/10" />
                            <span className="relative inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#d2e823] mb-4">
                                Our Mission
                            </span>
                            <h3 className="relative text-2xl md:text-3xl font-bold tracking-wide text-[#f8f4e8] mb-4 font-tanker">
                                Redefining What a Club Can Be
                            </h3>
                            <p className="relative text-[#f8f4e8]/50 leading-relaxed">
                                To create a community that develops talent at
                                every level, fosters deep bonds between members, and competes with
                                relentless intensity while giving back to the community that
                                fuels us.
                            </p>
                        </div>
                        <div className="relative rounded-2xl bg-gradient-to-br from-[#0a2a1f] to-[#061a13] border border-[#f8f4e8]/5 p-10 md:p-12 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#f8f4e8]/10" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#f8f4e8]/10" />
                            <span className="relative inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[#d2e823] mb-4">
                                Our Vision
                            </span>
                            <h3 className="relative text-2xl md:text-3xl font-bold tracking-wide text-[#f8f4e8] mb-4 font-tanker">
                                Standard for Modern Sports
                            </h3>
                            <p className="relative text-[#f8f4e8]/50 leading-relaxed">
                                To be recognised as the gold standard in community-driven sports a club that proves you don&apos;t need a century of history to
                                build a legacy. Just hunger, discipline, and unity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="relative pt-0 pb-12 md:pb-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {VALUES.map((v) => (
                            <div
                                key={v.title}
                                className="group relative p-7 rounded-2xl bg-[#f8f4e8]/[0.02] border border-[#f8f4e8]/5 hover:border-[#f8f4e8]/15 transition-all duration-500 text-center"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="relative text-lg font-semibold text-[#f8f4e8] tracking-wide uppercase mb-2 font-space-grotesk">
                                    {v.title}
                                </h3>
                                <p className="relative text-sm text-[#f8f4e8]/40 leading-relaxed">
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vertical Sticky-Stacking Timeline */}
            <div className="relative py-16 md:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-4xl sm:text-5xl font-black tracking-wider text-[#d2e823] font-tanker">
                            Our Journey
                        </h2>
                    </div>

                    {/* Timeline container */}
                    <div ref={timelineRef} className="relative">
                        {/* Central vertical line — background track */}
                        <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-[#f8f4e8]/8" />

                        {/* Animated progress fill */}
                        <div
                            ref={progressRef}
                            className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d2e823] via-[#d2e823]/70 to-[#d2e823]/30 origin-top"
                        />

                        {/* Glowing comet tip that travels with the progress line */}
                        <div
                            ref={glowRef}
                            className="absolute left-[15px] md:left-1/2 pointer-events-none z-20"
                            style={{ top: "0%", transform: "translate(-50%, -50%)" }}
                        >
                            {/* Comet tail — upward fading trail */}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-[6px] w-[3px] h-10 bg-gradient-to-t from-[#d2e823]/60 via-[#d2e823]/20 to-transparent rounded-full blur-[1px]" />
                            {/* Outer ambient glow */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#d2e823]/15 blur-lg" />
                            {/* Mid glow ring */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#d2e823]/25 blur-md" />
                            {/* Core comet head — slightly elongated downward */}
                            <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[10px] rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] bg-[#d2e823] shadow-[0_0_6px_rgba(210,232,35,0.9),0_0_14px_rgba(210,232,35,0.5),0_2px_20px_rgba(210,232,35,0.3)]" />
                        </div>

                        {/* Timeline nodes — each node is sticky so the next one overlaps it */}
                        {TIMELINE.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            // Each sticky card gets a slightly higher top offset so they stack
                            const stickyTop = 100 + index * 24;

                            return (
                                <div
                                    key={`${item.year}-${index}`}
                                    ref={(el) => { nodeRefs.current[index] = el; }}
                                    className="sticky mb-24 md:mb-36"
                                    style={{ top: `${stickyTop}px`, zIndex: index + 1 }}
                                >
                                    {/* ── MOBILE LAYOUT (always right of line) ── */}
                                    <div className="md:hidden flex items-start gap-5 w-full pl-0">
                                        {/* Circle node on the line */}
                                        <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#d2e823]/50 bg-[#061a13] flex items-center justify-center shadow-[0_0_12px_rgba(210,232,35,0.25)]">
                                            <span className="text-[8px] font-bold text-[#d2e823]">
                                                {item.year}
                                            </span>
                                        </div>
                                        {/* Card */}
                                        <div className="flex-1 group relative p-5 rounded-xl bg-[#0a2a1f] border border-[#f8f4e8]/5 hover:border-[#d2e823]/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="relative block text-[10px] font-bold tracking-[0.2em] uppercase text-[#d2e823] mb-1.5">
                                                {item.year}
                                            </span>
                                            <p className="relative text-sm text-[#f8f4e8]/70 group-hover:text-[#f8f4e8] transition-colors duration-300 leading-relaxed">
                                                {item.event}
                                            </p>
                                        </div>
                                    </div>

                                    {/* ── DESKTOP LAYOUT ── */}
                                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-10 w-full items-center">
                                        {/* Left content area */}
                                        <div>
                                            {isLeft ? (
                                                <div className="group relative p-6 rounded-xl bg-[#0a2a1f] border border-[#f8f4e8]/5 hover:border-[#d2e823]/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ml-auto max-w-sm text-right">
                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <span className="relative block text-[10px] font-bold tracking-[0.2em] uppercase text-[#d2e823] mb-1.5">
                                                        {item.year}
                                                    </span>
                                                    <p className="relative text-sm text-[#f8f4e8]/70 group-hover:text-[#f8f4e8] transition-colors duration-300 leading-relaxed">
                                                        {item.event}
                                                    </p>
                                                </div>
                                            ) : (
                                                <div />
                                            )}
                                        </div>

                                        {/* Center circle node */}
                                        <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#d2e823]/50 bg-[#061a13] flex items-center justify-center shadow-[0_0_20px_rgba(210,232,35,0.3)]">
                                            <span className="text-xs font-bold text-[#d2e823]">
                                                {item.year}
                                            </span>
                                        </div>

                                        {/* Right content area */}
                                        <div>
                                            {!isLeft ? (
                                                <div className="group relative p-6 rounded-xl bg-[#0a2a1f] border border-[#f8f4e8]/5 hover:border-[#d2e823]/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)] mr-auto max-w-sm text-left">
                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <span className="relative block text-[10px] font-bold tracking-[0.2em] uppercase text-[#d2e823] mb-1.5">
                                                        {item.year}
                                                    </span>
                                                    <p className="relative text-sm text-[#f8f4e8]/70 group-hover:text-[#f8f4e8] transition-colors duration-300 leading-relaxed">
                                                        {item.event}
                                                    </p>
                                                </div>
                                            ) : (
                                                <div />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Spacer at bottom to allow last card to unstick cleanly but not create a huge gap */}
                        <div className="h-8 md:h-12" />
                    </div>
                </div>
            </div>
        </section>
    );
}
