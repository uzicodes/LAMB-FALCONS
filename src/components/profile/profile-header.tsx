"use client";

import Image from "next/image";
import { RefObject, ChangeEvent } from "react";
import { m } from "framer-motion";
import { Camera, Trash2, Loader2 } from "lucide-react";

interface ProfileHeaderProps {
    displayName: string;
    avatar: string;
    joinedDate: string;
    uploadingImage: boolean;
    hasImage?: boolean;
    fileInputRef: RefObject<HTMLInputElement>;
    onImageUpload: (e: ChangeEvent<HTMLInputElement>) => void;
    onRemoveImage: () => void;
}

export function ProfileHeader({
    displayName,
    avatar,
    joinedDate,
    uploadingImage,
    hasImage,
    fileInputRef,
    onImageUpload,
    onRemoveImage,
}: ProfileHeaderProps) {
    return (
        <m.div
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
                                sizes="112px"
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
                            onChange={onImageUpload}
                            className="hidden"
                        />
                        <button
                            type="button"
                            aria-label="Upload profile photo"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={uploadingImage}
                            className="absolute bottom-1 right-1 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-all shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 disabled:opacity-50"
                        >
                            <Camera className="w-3.5 h-3.5" />
                        </button>
                        {hasImage && (
                            <button
                                type="button"
                                aria-label="Remove profile photo"
                                onClick={onRemoveImage}
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
        </m.div>
    );
}
