"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ChevronRight, LogOut, Trash2 } from "lucide-react";

interface ProfileActionsProps {
    onSignOut: () => void;
    onDeleteClick: () => void;
}

export function ProfileActions({ onSignOut, onDeleteClick }: ProfileActionsProps) {
    return (
        <>
            {/* Quick Actions Card */}
            <m.div
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
                        type="button"
                        onClick={onSignOut}
                        className="flex items-center gap-2 w-full px-6 py-3.5 hover:bg-red-500/5 transition-colors group"
                    >
                        <LogOut className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-red-400 group-hover:text-red-300 font-medium transition-colors">
                            Sign Out
                        </span>
                    </button>
                </div>
            </m.div>

            {/* Danger Zone */}
            <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 bg-zinc-900/70 backdrop-blur-xl border border-red-900/30 rounded-2xl overflow-hidden shadow-2xl"
            >
                <div className="px-6 py-4 border-b border-red-900/20">
                    <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider">
                        Delete Account
                    </h2>
                </div>
                <div className="px-6 py-4">
                    <p className="text-xs text-zinc-400 mb-3">
                        Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <button
                        type="button"
                        onClick={onDeleteClick}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 text-red-400 text-sm font-semibold rounded-lg hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-300 transition-all"
                    >
                        <Trash2 className="w-4 h-4" />
                        Delete Account
                    </button>
                </div>
            </m.div>
        </>
    );
}
