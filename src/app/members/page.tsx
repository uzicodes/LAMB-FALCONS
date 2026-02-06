import React from "react";

export default function MembersPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-white">Our</span>{" "}
                    <span className="text-blue-500">Members</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mb-12">
                    Meet the dedicated individuals who make up the core of Lamb Falcons.
                    (Content coming soon)
                </p>

                {/* Placeholder Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="h-64 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors duration-300 flex items-center justify-center"
                        >
                            <span className="text-gray-600">Member Card {item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
