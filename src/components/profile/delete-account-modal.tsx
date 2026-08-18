"use client";

import { m, AnimatePresence } from "framer-motion";
import { AlertTriangle, Loader2 } from "lucide-react";

interface DeleteAccountModalProps {
    isOpen: boolean;
    deleting: boolean;
    deleteError: string;
    deleteConfirmText: string;
    onClose: () => void;
    onConfirmTextChange: (text: string) => void;
    onConfirmDelete: () => void;
}

export function DeleteAccountModal({
    isOpen,
    deleting,
    deleteError,
    deleteConfirmText,
    onClose,
    onConfirmTextChange,
    onConfirmDelete,
}: DeleteAccountModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        onClick={() => !deleting && onClose()}
                    />
                    <m.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    >
                        <div className="w-full max-w-sm bg-[#0a2a1f] border border-[#15442f] rounded-2xl shadow-2xl overflow-hidden">
                            <div className="px-6 pt-6 pb-4 text-center">
                                <div className="w-12 h-12 mx-auto mb-3 bg-red-500/10 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-lg font-bold text-[#e8e0c8]">
                                    Delete Your Account?
                                </h3>
                                <p className="text-xs text-[#f8f4e8]/60 mt-2 leading-relaxed">
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
                                    <label htmlFor="delete-confirm-input" className="text-[11px] font-medium text-[#f8f4e8]/60 block mb-1">
                                        Type <span className="text-red-400 font-bold">DELETE</span> to confirm
                                    </label>
                                    <input
                                        id="delete-confirm-input"
                                        type="text"
                                        value={deleteConfirmText}
                                        onChange={(e) => onConfirmTextChange(e.target.value)}
                                        disabled={deleting}
                                        className="w-full px-3 py-2 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                        placeholder="Type DELETE here"
                                    />
                                </div>

                                <div className="flex gap-3 pt-1">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        disabled={deleting}
                                        className="flex-1 py-2 text-sm font-semibold text-[#f8f4e8]/80 bg-[#0e3527] border border-[#15442f] rounded-lg hover:bg-[#15442f] hover:text-[#f8f4e8] transition-all disabled:opacity-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={onConfirmDelete}
                                        disabled={deleting || deleteConfirmText !== "DELETE"}
                                        className="flex-1 py-2 text-sm font-bold text-[#f8f4e8] bg-red-600 rounded-lg hover:bg-red-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
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
                    </m.div>
                </>
            )}
        </AnimatePresence>
    );
}
