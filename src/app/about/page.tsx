import React from "react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-white">About</span>{" "}
                    <span className="text-blue-500">Us</span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-gray-400 text-lg leading-relaxed">
                    <div className="space-y-6">
                        <p>
                            Lamb Falcons is more than just a club; it's a brotherhood dedicated to
                            excellence, teamwork, and community. Founded with a vision to unite
                            passionate individuals, we strive to make a positive impact both on
                            and off the field.
                        </p>
                        <p>
                            Our mission is to foster a spirit of camaraderie and sportsmanship,
                            providing a platform for members to grow, compete, and succeed together.
                        </p>
                    </div>
                    <div className="h-full min-h-[300px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                        <span className="text-gray-600">Club History / Image</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
