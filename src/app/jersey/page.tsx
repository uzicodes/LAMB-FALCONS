import React from "react";

export default function JerseyPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-white">Official</span>{" "}
                    <span className="text-blue-500">Jersey</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mb-12">
                    Wear the pride. Check out our official team kits and merchandise.
                    (Content coming soon)
                </p>

                <div className="w-full h-96 bg-gradient-to-br from-blue-900/20 to-black rounded-3xl border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
                    <span className="text-2xl text-blue-400 font-semibold z-10">Jersey Showcase Area</span>
                </div>
            </div>
        </main>
    );
}
