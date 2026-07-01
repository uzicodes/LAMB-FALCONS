"use client";

import { m } from "framer-motion";
import { User, Mail, Phone, CalendarDays, Pencil } from "lucide-react";

interface ProfileDetailsProps {
    displayName: string;
    email: string;
    phoneNumber: string;
    joinedDate: string;
    isEditing: boolean;
    editForm: { fullName: string; phoneNumber: string };
    onEditChange: (field: "fullName" | "phoneNumber", value: string) => void;
    onEditStart: () => void;
    onSave: () => void;
}

export function ProfileDetails({
    displayName,
    email,
    phoneNumber,
    joinedDate,
    isEditing,
    editForm,
    onEditChange,
    onEditStart,
    onSave,
}: ProfileDetailsProps) {
    return (
        <m.div
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
                    type="button"
                    onClick={() => {
                        if (isEditing) onSave();
                        else onEditStart();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 border border-zinc-700"
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
                        <label htmlFor="edit-fullname" className="block text-[10px] text-zinc-500 uppercase tracking-wider">Full Name</label>
                        {isEditing ? (
                            <input
                                id="edit-fullname"
                                type="text"
                                value={editForm.fullName}
                                onChange={(e) => onEditChange("fullName", e.target.value)}
                                className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                            />
                        ) : (
                            <p className="text-sm text-[#AD7D0C] font-medium truncate">{displayName}</p>
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
                        <p className="text-sm text-[#AD7D0C] font-medium truncate">{email}</p>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-4 px-6 py-4">
                    <div className="flex-shrink-0 p-2 bg-purple-500/10 rounded-lg">
                        <Phone className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <label htmlFor="edit-phone" className="block text-[10px] text-zinc-500 uppercase tracking-wider">Phone Number</label>
                        {isEditing ? (
                            <input
                                id="edit-phone"
                                type="tel"
                                value={editForm.phoneNumber}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/[^0-9]/g, '');
                                    onEditChange("phoneNumber", val);
                                }}
                                maxLength={15}
                                className="mt-0.5 w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                placeholder="Enter your phone number"
                            />
                        ) : (
                            <p className="text-sm text-[#AD7D0C] font-medium truncate">{phoneNumber}</p>
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
                        <p className="text-sm text-[#AD7D0C] font-medium">{joinedDate}</p>
                    </div>
                </div>
            </div>
        </m.div>
    );
}
