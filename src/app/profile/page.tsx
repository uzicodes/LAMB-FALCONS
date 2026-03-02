"use client";

import { useUser, useClerk, SignedIn, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
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

const ProfileContent = () => {
    const { user, isLoaded } = useUser();
    const { signOut } = useClerk();
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({ firstName: "", lastName: "" });

    if (!isLoaded) {
        return (
            <section className="min-h-screen bg-zinc-950 flex items-center justify-center">
                <div className="animate-pulse text-zinc-500 text-sm">Loading profile...</div>
            </section>
        );
    }

    if (!user) return null;

    const displayName = user.fullName || user.firstName || user.username || "Falcon Member";
    const email = user.primaryEmailAddress?.emailAddress || "—";
    const avatar = user.imageUrl || "/falcons_logo.png";
    const joinedDate = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })
        : "—";

    const handleEditStart = () => {
        setEditForm({ firstName: user.firstName || "", lastName: user.lastName || "" });
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            await user.update({
                firstName: editForm.firstName,
                lastName: editForm.lastName,
            });
            setIsEditing(false);
        } catch (err) {
            console.error("Failed to update profile:", err);
        }
    };

    const handleSignOut = () => signOut({ redirectUrl: "/" });

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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
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
                    <div className="relative h-32 bg-gradient-to-r from-blue-900/40 via-zinc-900 to-blue-900/40 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-20" />
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-900/70 to-transparent" />
                    </div>

                    {/* Avatar + Name */}
                    <div className="px-6 -mt-14">
                        <div className="flex items-end gap-4">
                            <div className="relative group">
                                <div className="relative w-24 h-24 rounded-full border-4 border-zinc-900 bg-zinc-800 overflow-hidden shadow-lg ring-2 ring-blue-500/30">
                                    <Image
                                        src={avatar}
                                        alt={displayName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors shadow-lg opacity-0 group-hover:opacity-100">
                                    <Camera className="w-3 h-3" />
                                </button>
                            </div>
                            <div className="pb-2">
                                <h1 className="text-xl font-bold text-white">{displayName}</h1>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                                        Member
                                    </span>
                                    <span className="text-[11px] text-zinc-500">
                                        Joined {joinedDate}
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
                                    <stat.icon className="w-4 h-4 text-blue-400 mb-1.5" />
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
                                else handleEditStart();
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
                        {/* First Name */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg">
                                <User className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">First Name</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editForm.firstName}
                                        onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                                        className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                                    />
                                ) : (
                                    <p className="text-sm text-white font-medium truncate">{user.firstName || "—"}</p>
                                )}
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg">
                                <User className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Last Name</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editForm.lastName}
                                        onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                                        className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
                                    />
                                ) : (
                                    <p className="text-sm text-white font-medium truncate">{user.lastName || "—"}</p>
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
                                <p className="text-sm text-white font-medium truncate">{email}</p>
                            </div>
                        </div>

                        {/* Role */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-amber-500/10 rounded-lg">
                                <Shield className="w-4 h-4 text-amber-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Role</p>
                                <p className="text-sm text-white font-medium">Member</p>
                            </div>
                        </div>

                        {/* Joined */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-rose-500/10 rounded-lg">
                                <CalendarDays className="w-4 h-4 text-rose-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Member Since</p>
                                <p className="text-sm text-white font-medium">{joinedDate}</p>
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
                            onClick={handleSignOut}
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
                            onClick={() => setIsEditing(false)}
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

const ProfilePage = () => {
    return (
        <>
            <SignedIn>
                <ProfileContent />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
};

export default ProfilePage;
