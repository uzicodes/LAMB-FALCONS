"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Phone,
    Shield,
    CalendarDays,
    LogOut,
    Pencil,
    Camera,
    ChevronRight,
    Trophy,
    Activity,
    Star,
} from "lucide-react";

const ProfilePage = () => {
    const { user, isLoggedIn, logout, updateProfile } = useAuth();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({ name: "", phone: "" });

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, [isLoggedIn, router]);

    useEffect(() => {
        if (user) {
            setEditForm({ name: user.name, phone: user.phone });
        }
    }, [user]);

    if (!isLoggedIn || !user) {
        return (
            <section className="min-h-screen bg-zinc-950 flex items-center justify-center">
                <div className="animate-pulse text-zinc-500 text-sm">Redirecting...</div>
            </section>
        );
    }

    const handleSave = () => {
        updateProfile({ name: editForm.name, phone: editForm.phone });
        setIsEditing(false);
    };

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const stats = [
        { label: "Matches", value: "0", icon: Trophy },
        { label: "Activity", value: "New", icon: Activity },
        { label: "Rating", value: "—", icon: Star },
    ];

    return (
        <section className="relative min-h-screen bg-zinc-950 pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-zinc-950/80 z-10" />
                <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-20 max-w-2xl mx-auto">
                {/* Profile Header Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Banner */}
                    <div className="relative h-32 bg-gradient-to-r from-emerald-900/40 via-zinc-900 to-emerald-900/40 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-20" />
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                    </div>

                    {/* Avatar + Name */}
                    <div className="px-6 -mt-14">
                        <div className="flex items-end gap-4">
                            <div className="relative group">
                                <div className="relative w-24 h-24 rounded-full border-4 border-zinc-900 bg-zinc-800 overflow-hidden shadow-lg ring-2 ring-emerald-500/30">
                                    <Image
                                        src={user.avatar}
                                        alt={user.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <button className="absolute bottom-0 right-0 p-1.5 bg-emerald-500 rounded-full text-black hover:bg-emerald-400 transition-colors shadow-lg opacity-0 group-hover:opacity-100">
                                    <Camera className="w-3 h-3" />
                                </button>
                            </div>
                            <div className="pb-2">
                                <h1 className="text-xl font-bold text-white">{user.name}</h1>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                                        {user.role}
                                    </span>
                                    <span className="text-[11px] text-zinc-500">
                                        Joined {user.joinedDate}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="px-6 py-5">
                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex flex-col items-center p-3 bg-zinc-800/50 rounded-xl border border-zinc-700/50"
                                >
                                    <stat.icon className="w-4 h-4 text-emerald-400 mb-1.5" />
                                    <span className="text-lg font-bold text-white">{stat.value}</span>
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Profile Details Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                            Profile Details
                        </h2>
                        <button
                            onClick={() => {
                                if (isEditing) handleSave();
                                else setIsEditing(true);
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200
                                bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 border border-zinc-700"
                        >
                            {isEditing ? (
                                <>Save Changes</>
                            ) : (
                                <>
                                    <Pencil className="w-3 h-3" />
                                    Edit
                                </>
                            )}
                        </button>
                    </div>

                    <div className="divide-y divide-zinc-800/50">
                        {/* Name */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-emerald-500/10 rounded-lg">
                                <User className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Full Name</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editForm.name}
                                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                        className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                    />
                                ) : (
                                    <p className="text-sm text-white font-medium truncate">{user.name}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg">
                                <Mail className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Email Address</p>
                                <p className="text-sm text-white font-medium truncate">{user.email}</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-violet-500/10 rounded-lg">
                                <Phone className="w-4 h-4 text-violet-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Phone Number</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editForm.phone}
                                        onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                                        className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                    />
                                ) : (
                                    <p className="text-sm text-white font-medium truncate">{user.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* Role */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-amber-500/10 rounded-lg">
                                <Shield className="w-4 h-4 text-amber-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Role</p>
                                <p className="text-sm text-white font-medium">{user.role}</p>
                            </div>
                        </div>

                        {/* Joined */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-rose-500/10 rounded-lg">
                                <CalendarDays className="w-4 h-4 text-rose-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Member Since</p>
                                <p className="text-sm text-white font-medium">{user.joinedDate}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Actions Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="px-6 py-4 border-b border-zinc-800">
                        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                            Quick Actions
                        </h2>
                    </div>

                    <div className="divide-y divide-zinc-800/50">
                        <Link
                            href="/"
                            className="flex items-center justify-between px-6 py-3.5 hover:bg-zinc-800/30 transition-colors group"
                        >
                            <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                                Back to Home
                            </span>
                            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full px-6 py-3.5 hover:bg-red-500/5 transition-colors group"
                        >
                            <LogOut className="w-4 h-4 text-red-400" />
                            <span className="text-sm text-red-400 group-hover:text-red-300 font-medium transition-colors">
                                Sign Out
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Cancel Edit */}
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 text-center"
                    >
                        <button
                            onClick={() => {
                                setIsEditing(false);
                                if (user) setEditForm({ name: user.name, phone: user.phone });
                            }}
                            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2"
                        >
                            Cancel editing
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProfilePage;
