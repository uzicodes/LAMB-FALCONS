"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MEMBERS = [
    { name: "Marcus Reid", position: "Forward", number: "9", joined: "2020", status: "Captain" },
    { name: "Kofi Asante", position: "Forward", number: "7", joined: "2025", status: "Active" },
    { name: "Liam Chen", position: "Forward", number: "11", joined: "2023", status: "Active" },
    { name: "Jaylen Okafor", position: "Midfielder", number: "8", joined: "2021", status: "Vice-Captain" },
    { name: "Dmitri Volkov", position: "Midfielder", number: "10", joined: "2022", status: "Active" },
    { name: "Tomás Rivera", position: "Midfielder", number: "6", joined: "2023", status: "Active" },
    { name: "Arjun Patel", position: "Midfielder", number: "14", joined: "2024", status: "Active" },
    { name: "Carlos Mendes", position: "Defender", number: "4", joined: "2020", status: "Active" },
    { name: "Kwame Boateng", position: "Defender", number: "5", joined: "2021", status: "Active" },
    { name: "Noah Jansen", position: "Defender", number: "3", joined: "2022", status: "Active" },
    { name: "Ryu Tanaka", position: "Defender", number: "2", joined: "2024", status: "Active" },
    { name: "Ethan Brooks", position: "Goalkeeper", number: "1", joined: "2020", status: "Active" },
    { name: "Mateo Ruiz", position: "Goalkeeper", number: "13", joined: "2023", status: "Active" },
    { name: "Coach Henrique Silva", position: "Staff", number: "—", joined: "2020", status: "Head Coach" },
    { name: "Amara Johnson", position: "Staff", number: "—", joined: "2021", status: "Assistant Coach" },
    { name: "Dr. Elena Voss", position: "Staff", number: "—", joined: "2022", status: "Physiotherapist" },
];

export default function MembersSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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

        const cards = gridRef.current?.children;
        if (cards && cards.length > 0) {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 30, scale: 0.96 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "power3.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, []);

    return (
        <section id="members" className="relative overflow-hidden">
            {/* Header */}
            <div className="relative py-24 md:py-32">
                <div ref={headerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-animate className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
                        <span className="text-white">Our</span>{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Members
                        </span>
                    </h2>
                    <p data-animate className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
                        The players, coaches, and staff who make Lamb Falcons the
                        powerhouse it is. Every member brings something unique to the table.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.03),transparent_60%)]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {MEMBERS.map((member) => (
                            <div
                                key={member.name}
                                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-500"
                            >
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-5xl md:text-6xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500">
                                            {member.number}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-1">
                                        <div>
                                            <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-xs text-blue-400/60 uppercase tracking-[0.15em] font-semibold mt-0.5">
                                                {member.position}
                                            </p>
                                        </div>
                                        <span className="text-2xl font-black text-white/[0.06] leading-none">
                                            {member.number}
                                        </span>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/5">
                                        <span className="text-[10px] text-gray-600">
                                            Since {member.joined}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Join CTA */}
            <div className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-10 md:p-16 text-center overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />
                        <div className="relative z-10">
                            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-6">
                                Open Recruitment
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
                                Think You&apos;ve Got What It Takes?
                            </h2>
                            <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
                                We&apos;re always looking for dedicated individuals who want to
                                compete, grow, and be part of something special.
                            </p>
                            <a
                                href="/register"
                                className="inline-flex px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
