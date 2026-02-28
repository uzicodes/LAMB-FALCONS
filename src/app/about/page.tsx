"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VALUES = [
  {
    icon: "⚡",
    title: "Relentless Drive",
    description:
      "We push limits every day. Mediocrity isn't in our vocabulary — only excellence.",
  },
  {
    icon: "🤝",
    title: "Brotherhood",
    description:
      "More than teammates. We're a family that stands together through every challenge.",
  },
  {
    icon: "🏆",
    title: "Winning Culture",
    description:
      "14 trophies and counting. Our mentality is built to compete at the highest level.",
  },
  {
    icon: "🌍",
    title: "Community First",
    description:
      "We invest in our community through outreach programs, youth academies, and local events.",
  },
];

const TIMELINE = [
  { year: "2019", event: "Club founded by a group of 12 passionate footballers" },
  { year: "2020", event: "First regional tournament win — unbeaten season" },
  { year: "2021", event: "Youth Academy launched with 40+ trainees enrolled" },
  { year: "2022", event: "Falcon Arena inaugurated as permanent home ground" },
  { year: "2023", event: "Back-to-back championship titles secured" },
  { year: "2024", event: "Membership crosses 200 — largest in the region" },
  { year: "2025", event: "International friendly tour across 3 countries" },
];

const STAFF = [
  { name: "Coach Henrique Silva", role: "Head Coach", since: "2020" },
  { name: "Amara Johnson", role: "Assistant Coach", since: "2021" },
  { name: "Dr. Elena Voss", role: "Sports Physiotherapist", since: "2022" },
  { name: "Rashid Al-Farsi", role: "Performance Analyst", since: "2023" },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const staffRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroChildren = heroRef.current?.querySelectorAll("[data-animate]");
      if (heroChildren) {
        gsap.fromTo(
          heroChildren,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out", delay: 0.2 }
        );
      }

      // Values cards
      const valueCards = valuesRef.current?.children;
      if (valueCards) {
        gsap.fromTo(
          valueCards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Timeline items
      const timelineItems = timelineRef.current?.querySelectorAll("[data-timeline]");
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Staff cards
      const staffCards = staffRef.current?.children;
      if (staffCards) {
        gsap.fromTo(
          staffCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: staffRef.current,
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
    <main className="bg-black text-white">
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNTAnIGhlaWdodD0nMjUwJz48ZmlsdGVyIGlkPSdub2lzZScgeD0nMCcgeT0nMCc+PGZlVHVyYnVsZW5jZSB0eXBlPSdmcmFjdGFsTm9pc2UnIGJhc2VGcmVxdWVuY3k9JzAuNjUnIG51bU9jdGF2ZXM9JzMnIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWx0ZXI9J3VybCgjbm9pc2UpJyBvcGFjaXR5PScxJy8+PC9zdmc+')]" />

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute left-[90%] top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div data-animate className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium tracking-widest uppercase text-gray-300">
              Our Story
            </span>
          </div>
          <h1 data-animate className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            <span className="text-white">About</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Lamb Falcons
            </span>
          </h1>
          <p data-animate className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
            What started as a small group of 12 passionate footballers in 2019 has
            grown into the region&apos;s most dominant force — a club built on
            grit, brotherhood, and an unrelenting will to win.
          </p>
          <div data-animate className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="uppercase tracking-widest">Est. 2019</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="uppercase tracking-widest">200+ Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/5 p-10 md:p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10" />
              <span className="relative inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
                Our Mission
              </span>
              <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-4">
                Redefining What a Club Can Be
              </h3>
              <p className="relative text-gray-400 leading-relaxed">
                To create a world-class football community that develops talent at
                every level, fosters deep bonds between members, and competes with
                relentless intensity — while giving back to the community that
                fuels us.
              </p>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/5 p-10 md:p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/10" />
              <span className="relative inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
                Our Vision
              </span>
              <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-4">
                The Standard for Modern Football
              </h3>
              <p className="relative text-gray-400 leading-relaxed">
                To be recognised as the gold standard in community-driven football
                — a club that proves you don&apos;t need a century of history to
                build a legacy. Just hunger, discipline, and unity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.04),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Core Values
            </h2>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative block text-3xl mb-4">{v.icon}</span>
                <h3 className="relative text-lg font-bold text-white mb-2">
                  {v.title}
                </h3>
                <p className="relative text-sm text-gray-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
              Milestones
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Our Journey
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] md:left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent" />

            <div className="space-y-8">
              {TIMELINE.map((item) => (
                <div
                  key={item.year}
                  data-timeline
                  className="relative flex items-start gap-6 md:gap-8 group"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-11 md:w-14 h-11 md:h-14 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:border-blue-500/40 transition-colors duration-300">
                    <span className="text-[10px] md:text-xs font-bold text-blue-400">
                      {item.year}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="pt-2 md:pt-3">
                    <p className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Staff ── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.04),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 mb-4">
              Behind the Scenes
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
              Coaching Staff
            </h2>
          </div>

          <div ref={staffRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STAFF.map((person) => (
              <div
                key={person.name}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 overflow-hidden transition-all duration-500"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Avatar placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-gray-900 to-gray-950 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-white/[0.04]">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {person.name}
                  </h3>
                  <p className="text-xs text-blue-400/70 uppercase tracking-[0.15em] font-semibold mt-0.5">
                    {person.role}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Since {person.since}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-20" />
    </main>
  );
}
