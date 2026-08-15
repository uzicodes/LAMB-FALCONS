import React from "react";

const VALUES = [
    {
        title: "Relentless Drive",
        description: "We push limits every day. Mediocrity isn't in our vocabulary ",
    },
    {
        title: "Brotherhood",
        description: "We're a family that stands together through every challenge.",
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
                        <span className="text-[#d2e823]">
                            Lamb Falcons
                        </span>
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
            <div className="relative py-12 md:py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black tracking-wider text-[#d2e823]/70 font-tanker">
                            Core Values
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {VALUES.map((v) => (
                            <div
                                key={v.title}
                                className="group relative p-7 rounded-2xl bg-[#f8f4e8]/[0.02] border border-[#f8f4e8]/5 hover:border-[#f8f4e8]/15 transition-all duration-500 text-center"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d2e823]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3 className="relative text-lg font-bold text-[#f8f4e8] mb-2">
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

            {/* Timeline */}
            <div className="relative py-12 md:py-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black tracking-wider text-[#d2e823]/70 font-tanker">
                            Our Journey
                        </h2>
                    </div>
                    <div className="relative overflow-x-auto pb-4 mt-16 md:mt-22">
                        <div className="flex items-start min-w-max px-4">
                            {TIMELINE.map((item, index) => (
                                <div
                                    key={`${item.year}-${index}`}
                                    className="relative flex flex-col items-center group"
                                    style={{ minWidth: "160px" }}
                                >
                                    {/* Connector line */}
                                    {index < TIMELINE.length - 1 && (
                                        <div className="absolute top-[22px] md:top-[28px] left-1/2 w-full h-px bg-gradient-to-r from-[#d2e823]/50 " />
                                    )}
                                    {/* Circle with year */}
                                    <div className="relative z-10 flex-shrink-0 w-11 md:w-14 h-11 md:h-14 rounded-full border border-[#f8f4e8]/10 bg-[#061a13] flex items-center justify-center group-hover:border-[#d2e823]/40 transition-colors duration-300">
                                        <span className="text-[10px] md:text-xs font-bold text-[#d2e823]">
                                            {item.year}
                                        </span>
                                    </div>
                                    {/* Event text */}
                                    <div className="mt-4 text-center max-w-[140px]">
                                        <p className="text-xs md:text-sm text-[#f8f4e8]/70 group-hover:text-[#f8f4e8] transition-colors duration-300 leading-relaxed">
                                            {item.event}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
