"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

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
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="splash"
                        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* ── Ambient glow behind the logo ── */}
                        <motion.div
                            className="absolute w-72 h-72 rounded-full bg-blue-600/20 blur-[100px]"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* ── Center Content ── */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center"
                        >
                            {/* ── Pulsing ring ── */}
                            <motion.div
                                className="relative flex items-center justify-center w-44 h-44 rounded-full border-2 border-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.5),0_0_60px_rgba(59,130,246,0.25)]"
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)",
                                        "0 0 40px rgba(59,130,246,0.7), 0 0 80px rgba(59,130,246,0.35)",
                                        "0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)",
                                    ],
                                    scale: [1, 1.04, 1],
                                }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {/* ── Logo ── */}
                                <div>
                                    <Image
                                        src="/falcons_logo.png"
                                        alt="Falcons Logo"
                                        width={120}
                                        height={120}
                                        className="object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* ── Loading bar ── */}
                            <div className="mt-10 w-48 h-1 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>

                            {/* ── Bottom text ── */}
                            <p className="mt-6 text-sm font-tanker tracking-[0.3em] uppercase text-blue-400/70">
                                LAMB FALCONS
                            </p>
                        </motion.div>


                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page content is always rendered underneath so images start loading */}
            {children}
        </>
    );
}
