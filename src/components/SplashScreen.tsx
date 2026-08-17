"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from "framer-motion";

export default function SplashScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        // If the page is already fully loaded 
        if (document.readyState === "complete") {
            // Small delay so the animation is still visible briefly
            const timeout = setTimeout(() => setIsLoading(false), 800);
            return () => clearTimeout(timeout);
        }

        // Otherwise wait for ALL resources (images, fonts, etc.) to finish
        const handleLoad = () => {
            // Minimum display time so the splash doesn't just flash
            setTimeout(() => setIsLoading(false), 800);
        };

        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <m.div
                        key="splash"
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#061a13] overflow-hidden"
                        exit={shouldReduceMotion ? { opacity: 0 } : { scale: 1.1, opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, ease: "easeInOut" }}
                    >
                        {/* Background subtle radial gradient */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d2e823]/5 via-[#061a13]/80 to-[#061a13] z-0" />
                        
                        {/* Ambient glow behind the logo */}
                        <m.div
                            className="absolute z-0 w-80 h-80 rounded-full bg-[#d2e823]/10 blur-[120px]"
                            animate={shouldReduceMotion ? { opacity: 0.5 } : { scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
                            transition={shouldReduceMotion ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Center Content */}
                        <m.div
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
                            className="relative z-10 flex flex-col items-center justify-center"
                        >
                            {/* Logo and Rings Container */}
                            <div className="relative flex items-center justify-center w-56 h-56">
                                
                                {/* Outer Dashed Ring - Spins Clockwise */}
                                <m.div 
                                    className="absolute inset-0 rounded-full border border-dashed border-[#d2e823]/30"
                                    animate={shouldReduceMotion ? {} : { rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Middle Thin Ring - Spins Counter-Clockwise */}
                                <m.div 
                                    className="absolute inset-2 rounded-full border border-[#d2e823]/20 border-t-[#d2e823]/80"
                                    animate={shouldReduceMotion ? {} : { rotate: -360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Inner Ring - Pulses */}
                                <m.div
                                    className="absolute inset-6 rounded-full border border-[#d2e823]/50 shadow-[0_0_15px_rgba(210,232,35,0.3)]"
                                    animate={shouldReduceMotion ? {} : { 
                                        scale: [1, 1.05, 1],
                                        boxShadow: [
                                            "0 0 15px rgba(210,232,35,0.3)",
                                            "0 0 30px rgba(210,232,35,0.6)",
                                            "0 0 15px rgba(210,232,35,0.3)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />

                                {/* The Logo */}
                                <m.div
                                    className="relative z-20"
                                    animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Image
                                        src="/falcons_logo.png"
                                        alt="Falcons Logo"
                                        width={110}
                                        height={110}
                                        className="object-contain drop-shadow-[0_0_20px_rgba(210,232,35,0.8)]"
                                        priority
                                    />
                                </m.div>
                            </div>

                            {/* Loading Indicator */}
                            <div className="mt-12 flex flex-col items-center gap-4">
                                {/* Sleek animated dots */}
                                <div className="flex gap-3">
                                    {[0, 1, 2].map((i) => (
                                        <m.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-[#d2e823]"
                                            animate={shouldReduceMotion ? {} : { 
                                                scale: [1, 1.5, 1],
                                                opacity: [0.3, 1, 0.3],
                                                y: [0, -4, 0]
                                            }}
                                            transition={{ 
                                                duration: 1, 
                                                repeat: Infinity, 
                                                delay: i * 0.2,
                                                ease: "easeInOut" 
                                            }}
                                        />
                                    ))}
                                </div>
                                
                                {/* Bottom text */}
                                <m.h1 
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.15em] leading-none uppercase font-tanker bg-gradient-to-b from-[#f8f4e8]/80 via-[#d2e823]/60 to-[#061a13] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(210,232,35,0.2)] whitespace-nowrap mt-6"
                                    animate={shouldReduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    LAMB FALCONS
                                </m.h1>
                            </div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
            {children}
        </LazyMotion>
    );
}
