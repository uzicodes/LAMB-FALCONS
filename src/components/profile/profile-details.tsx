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
            className="mt-4 bg-[#0a2a1f]/70 backdrop-blur-xl border border-[#15442f] rounded-2xl overflow-hidden shadow-2xl"
        >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#15442f]">
                <h2 className="text-sm font-bold text-[#f8f4e8] uppercase tracking-wider">
                    Profile Details
                </h2>
                <button
                    type="button"
                    onClick={() => {
                        if (isEditing) onSave();
                        else onEditStart();
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 bg-[#0e3527] text-[#f8f4e8]/80 hover:text-[#f8f4e8] hover:bg-[#15442f] border border-[#15442f]"
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

            <div className="divide-y divide-[#15442f]/50">
                {/* Full Name */}
                <div className="flex items-center gap-4 px-6 py-4">
                    <div className="flex-shrink-0 p-2 bg-[#d2e823]/5 rounded-lg">
                        <User className="w-4 h-4 text-[#d2e823]" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <label htmlFor="edit-fullname" className="block text-[10px] text-[#f8f4e8]/40 uppercase tracking-wider">Full Name</label>
                        {isEditing ? (
                            <input
                                id="edit-fullname"
                                type="text"
                                value={editForm.fullName}
                                onChange={(e) => onEditChange("fullName", e.target.value)}
                                className="mt-0.5 w-full bg-[#0e3527]/50 border border-[#15442f] rounded-lg px-3 py-1.5 text-sm text-[#f8f4e8] focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all"
                            />
                        ) : (
                            <p className="text-sm text-[#f8f4e8] font-medium truncate">{displayName}</p>
                        )}
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 px-6 py-4">
                    <div className="flex-shrink-0 p-2 bg-[#d2e823]/10 rounded-lg">
                        <Mail className="w-4 h-4 text-[#d2e823]" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-[#f8f4e8]/40 uppercase tracking-wider">Email Address</p>
                        <p className="text-sm text-[#f8f4e8] font-medium truncate">{email}</p>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-4 px-6 py-4">
                    <div className="flex-shrink-0 p-2 bg-purple-500/10 rounded-lg">
                        <Phone className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <label htmlFor="edit-phone" className="block text-[10px] text-[#f8f4e8]/40 uppercase tracking-wider">Phone Number</label>
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
                                className="mt-0.5 w-full bg-[#0e3527]/50 border border-[#15442f] rounded-lg px-3 py-1.5 text-sm text-[#f8f4e8] focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all"
                                placeholder="Enter your phone number"
                            />
                        ) : (
                            <p className="text-sm text-[#f8f4e8] font-medium truncate">{phoneNumber}</p>
                        )}
                    </div>
                </div>

                {/* Joined */}
                <div className="flex items-center gap-4 px-6 py-4">
                    <div className="flex-shrink-0 p-2 bg-rose-500/10 rounded-lg">
                        <CalendarDays className="w-4 h-4 text-rose-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-[#f8f4e8]/40 uppercase tracking-wider">Member Since</p>
                        <p className="text-sm text-[#f8f4e8] font-medium">{joinedDate}</p>
                    </div>
                </div>
            </div>
        </m.div>
    );
}
