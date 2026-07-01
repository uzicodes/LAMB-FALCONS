"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle } from "lucide-react";

const MEMBERS = [
    { name: "UTSHO HEAVEN CHOWDHURY", number: "8", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "PROTTOY KHALKO", number: "7", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "POLLOB LINKON ROY", number: "21", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "ARONNO BLESS MONDAL", number: "8", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "PREETOM BARMON", number: "10", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "THANGSRIK J CHAMBUGONG", number: "23", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "UTSASH ANINDO CHOWDHURY", number: "14", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "JESON GOURAB DAS", number: "4", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "JEVIARS MIKHA DAS", number: "5", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "PAUL MARTIN", number: "5", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "PAPON KHALKO", number: "2", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "SHAHIN ALOM", number: "1", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "NAIM SHEIKH", number: "13", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "BOPON ROY", number: "12", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "MOSHI MARANDY", number: "9", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
    { name: "ANDREW SAMUEL HEMBROM", number: "15", facebook: "#", instagram: "#", email: "mailto:contact@example.com" },
];

export default function MembersSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [showRecruitmentPopup, setShowRecruitmentPopup] = useState(false);

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
            <div className="relative py-8 md:py-12">
                <div ref={headerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 data-animate className="text-5xl sm:text-6xl md:text-7xl font-black tracking-wider leading-[0.9] mb-6 font-tanker">
                        <span className="text-white">Meet The </span>{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Squad
                        </span>
                    </h2>
                    <p data-animate className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        The players who make LAMB FALCONS the
                        powerhouse it is. Every member brings something unique to the table.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="relative py-6 md:py-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.03),transparent_60%)]" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {MEMBERS.map((member) => (
                            <div
                                key={member.name}
                                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-500 font-satoshi"
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
                                    <div className="mb-1 text-center">
                                        <h3 className="text-base font-bold text-[#AD7D0C] leading-tight font-satoshi">
                                            {member.name}
                                        </h3>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[10px] text-gray-600 uppercase tracking-widest w-1/3">2020</span>
                                        <div className="flex items-center gap-3 w-1/3 justify-center">
                                            {/* Facebook */}
                                            <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            {/* Instagram */}
                                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </a>
                                            {/* Mail */}
                                            <a href={member.email} className="text-gray-500 hover:text-green-400 transition-colors duration-300">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <span className="text-xl font-black text-white/[0.15] leading-none w-1/3 text-right">
                                            {member.number}
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
                            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-green-400/50 mb-6">
                                Open Recruitment
                            </span>
                            <h2 className="text-2xl md:text-4xl font-black tracking-wider text-red-500/70 mb-4 font-tanker">
                                Think You&apos;ve Got What It Takes?
                            </h2>
                            <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
                                We&apos;re always looking for dedicated individuals who want to
                                compete, grow, and be part of something special.
                            </p>
                            <button
                                type="button"
                                onClick={() => setShowRecruitmentPopup(true)}
                                className="inline-flex px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recruitment Popup */}
            <AnimatePresence>
                {showRecruitmentPopup && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowRecruitmentPopup(false)}
                            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl pointer-events-auto">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />
                                <div className="absolute top-4 right-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowRecruitmentPopup(false)}
                                        className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                                        <AlertCircle className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-satoshi tracking-wide">
                                        Recruitment Closed
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        Thank you for your interest in joining the <span className="text-blue-400 font-semibold">LAMB FALCONS</span>.
                                        We aren&apos;t currently accepting new applications at this moment, but we&apos;re always headhunting for top-tier talent.
                                        Keep training, keep pushing, and stay tuned to our website for when we reopen our gates.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setShowRecruitmentPopup(false)}
                                        className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold uppercase tracking-[0.2em] text-xs rounded-xl transition-all duration-300"
                                    >
                                        Understood
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
