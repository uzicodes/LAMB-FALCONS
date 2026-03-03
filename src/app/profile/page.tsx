"use client";

import { useUser, useClerk, SignedIn, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    Loader2,
    Trash2,
    AlertTriangle,
} from "lucide-react";

const ProfileContent = () => {
    const { user, isLoaded } = useUser();
    const { signOut } = useClerk();
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({ fullName: "", phoneNumber: "" });
    const [uploadingImage, setUploadingImage] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteConfirmText, setDeleteConfirmText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState("");

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
    const phoneNumber = (user.unsafeMetadata as { phoneNumber?: string })?.phoneNumber || "—";

    const handleEditStart = () => {
        const currentPhone = (user.unsafeMetadata as { phoneNumber?: string })?.phoneNumber || "";
        setEditForm({
            fullName: (user.firstName && user.lastName) ? `${user.firstName} ${user.lastName}` : (user.firstName || user.lastName || ""),
            phoneNumber: currentPhone,
        });
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            const nameParts = editForm.fullName.trim().split(/\s+/);
            const firstName = nameParts[0] || "";
            const lastName = nameParts.slice(1).join(" ") || "";

            await user.update({
                firstName,
                lastName,
                unsafeMetadata: {
                    ...user.unsafeMetadata,
                    phoneNumber: editForm.phoneNumber,
                },
            });
            setIsEditing(false);
        } catch (err) {
            console.error("Failed to update profile:", err);
        }
    };

    const handleSignOut = () => signOut({ redirectUrl: "/" });

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingImage(true);
        try {
            await user.setProfileImage({ file });
        } catch (err) {
            console.error("Failed to upload profile image:", err);
        } finally {
            setUploadingImage(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleRemoveImage = async () => {
        setUploadingImage(true);
        try {
            await user.setProfileImage({ file: null });
        } catch (err) {
            console.error("Failed to remove profile image:", err);
        } finally {
            setUploadingImage(false);
        }
    };

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
                    <div className="relative h-48 bg-zinc-900 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-50 transition-transform duration-700 hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
                    </div>

                    {/* Avatar + Name */}
                    <div className="relative z-10 px-6 -mt-16">
                        <div className="flex items-end gap-4">
                            <div className="relative group">
                                <div className="relative w-28 h-28 rounded-full border-4 border-zinc-950 bg-zinc-800 overflow-hidden shadow-2xl ring-2 ring-blue-500/20">
                                    <Image
                                        src={avatar}
                                        alt={displayName}
                                        fill
                                        className="object-cover"
                                    />
                                    {uploadingImage && (
                                        <div className="absolute inset-0 bg-zinc-900/70 flex items-center justify-center">
                                            <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                                        </div>
                                    )}
                                </div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/png, image/jpeg, image/gif, image/webp"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={uploadingImage}
                                    className="absolute bottom-1 right-1 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-all shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 disabled:opacity-50"
                                >
                                    <Camera className="w-3.5 h-3.5" />
                                </button>
                                {user.hasImage && (
                                    <button
                                        onClick={handleRemoveImage}
                                        disabled={uploadingImage}
                                        className="absolute bottom-1 left-1 p-2 bg-red-600 rounded-full text-white hover:bg-red-500 transition-all shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 disabled:opacity-50"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                            <div className="pb-3">
                                <h1 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
                                    {displayName}
                                </h1>
                                <div className="flex items-center gap-2.5 mt-1">
                                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full backdrop-blur-md">
                                        Member
                                    </span>
                                    <span className="text-[11px] text-zinc-400 font-medium">
                                        Joined {joinedDate}
                                    </span>
                                </div>
                            </div>
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
                        {/* Full Name */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-green-500/5 rounded-lg">
                                <User className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Full Name</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={editForm.fullName}
                                        onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                                        className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                    />
                                ) : (
                                    <p className="text-sm text-white font-medium truncate">{displayName}</p>
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

                        {/* Phone Number */}
                        <div className="flex items-center gap-4 px-6 py-4">
                            <div className="flex-shrink-0 p-2 bg-purple-500/10 rounded-lg">
                                <Phone className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Phone Number</p>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={editForm.phoneNumber}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/[^0-9]/g, '');
                                            setEditForm({ ...editForm, phoneNumber: val });
                                        }}
                                        maxLength={15}
                                        className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                        placeholder="Enter your phone number"
                                    />
                                ) : (
                                    <p className="text-sm text-white font-medium truncate">{phoneNumber}</p>
                                )}
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

                {/* Danger Zone */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-4 bg-zinc-900/70 backdrop-blur-xl border border-red-900/30 rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="px-6 py-4 border-b border-red-900/20">
                        <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider">
                            Danger Zone
                        </h2>
                    </div>
                    <div className="px-6 py-4">
                        <p className="text-xs text-zinc-400 mb-3">
                            Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <button
                            onClick={() => {
                                setShowDeleteModal(true);
                                setDeleteConfirmText("");
                                setDeleteError("");
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 text-red-400 text-sm font-semibold rounded-lg hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-300 transition-all"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete Account
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

            {/* Delete Account Confirmation Modal */}
            <AnimatePresence>
                {showDeleteModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                            onClick={() => !deleting && setShowDeleteModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        >
                            <div className="w-full max-w-sm bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden">
                                <div className="px-6 pt-6 pb-4 text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 bg-red-500/10 rounded-full flex items-center justify-center">
                                        <AlertTriangle className="w-6 h-6 text-red-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        Delete Your Account?
                                    </h3>
                                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                                        This will permanently delete your account, profile picture, and all associated data from our system. This action <span className="text-red-400 font-semibold">cannot be undone</span>.
                                    </p>
                                </div>

                                <div className="px-6 pb-6 space-y-3">
                                    {deleteError && (
                                        <div className="px-3 py-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg">
                                            {deleteError}
                                        </div>
                                    )}

                                    <div>
                                        <label className="text-[11px] font-medium text-zinc-400 block mb-1">
                                            Type <span className="text-red-400 font-bold">DELETE</span> to confirm
                                        </label>
                                        <input
                                            type="text"
                                            value={deleteConfirmText}
                                            onChange={(e) => setDeleteConfirmText(e.target.value)}
                                            disabled={deleting}
                                            className="w-full px-3 py-2 text-sm text-white bg-zinc-950/50 border border-zinc-700 rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all placeholder-zinc-600"
                                            placeholder="Type DELETE here"
                                            autoFocus
                                        />
                                    </div>

                                    <div className="flex gap-3 pt-1">
                                        <button
                                            onClick={() => setShowDeleteModal(false)}
                                            disabled={deleting}
                                            className="flex-1 py-2 text-sm font-semibold text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-lg hover:bg-zinc-700 hover:text-white transition-all disabled:opacity-50"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={async () => {
                                                if (deleteConfirmText !== "DELETE") {
                                                    setDeleteError("Please type DELETE exactly to confirm.");
                                                    return;
                                                }
                                                setDeleting(true);
                                                setDeleteError("");
                                                try {
                                                    const res = await fetch("/api/delete-account", {
                                                        method: "DELETE",
                                                    });
                                                    if (!res.ok) {
                                                        const data = await res.json();
                                                        throw new Error(data.error || "Failed to delete account");
                                                    }
                                                    window.location.href = "/";
                                                } catch (err: unknown) {
                                                    const error = err as Error;
                                                    console.error("Failed to delete account:", error);
                                                    setDeleteError(error.message || "Failed to delete account. Please try again.");
                                                    setDeleting(false);
                                                }
                                            }}
                                            disabled={deleting || deleteConfirmText !== "DELETE"}
                                            className="flex-1 py-2 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                                        >
                                            {deleting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                                    Deleting...
                                                </span>
                                            ) : (
                                                "Delete Forever"
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
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
