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
    isEditing?: boolean;
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
    isEditing,
}: ProfileHeaderProps) {
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-48 sm:h-52 bg-[#0a2a1f]/70 backdrop-blur-xl border border-[#15442f] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-end"
        >
            {/* Banner Background across full card */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-50 transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a13] via-[#061a13]/60 to-transparent" />
                <div className="absolute inset-0 bg-[#d2e823]/5 mix-blend-overlay" />
            </div>

            {/* Avatar + Name */}
            <div className="relative z-10 px-6 pb-5">
                <div className="flex items-end gap-4">
                    <div className="relative">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-zinc-950 bg-[#0e3527] overflow-hidden shadow-2xl ring-2 ring-[#d2e823]/20">
                            <Image
                                src={avatar}
                                alt={displayName}
                                fill
                                sizes="112px"
                                className="object-cover"
                            />
                            {uploadingImage && (
                                <div className="absolute inset-0 bg-[#0a2a1f]/70 flex items-center justify-center">
                                    <Loader2 className="w-6 h-6 text-[#d2e823] animate-spin" />
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
                        {isEditing && (
                            <>
                                <button
                                    type="button"
                                    aria-label="Upload profile photo"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={uploadingImage}
                                    className="absolute bottom-1 right-1 p-2 bg-[#d2e823] rounded-full text-[#0a2a1f] hover:bg-[#e0f040] transition-all shadow-lg hover:scale-110 disabled:opacity-50"
                                >
                                    <Camera className="w-3.5 h-3.5" />
                                </button>
                                {hasImage && (
                                    <button
                                        type="button"
                                        aria-label="Remove profile photo"
                                        onClick={onRemoveImage}
                                        disabled={uploadingImage}
                                        className="absolute bottom-1 left-1 p-2 bg-red-600 rounded-full text-[#f8f4e8] hover:bg-red-500 transition-all shadow-lg hover:scale-110 disabled:opacity-50"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                    <div className="pb-3">
                        <h1 className="text-2xl font-black text-[#FB4500] tracking-tight drop-shadow-md">
                            {displayName}
                        </h1>
                        <div className="flex items-center gap-2.5 mt-1">
                            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#d2e823]/20 text-[#d2e823] border border-[#d2e823]/30 rounded-full backdrop-blur-md">
                                Member
                            </span>
                            <span className="text-[11px] text-[#f8f4e8]/60 font-medium">
                                Joined {joinedDate}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    );
}
