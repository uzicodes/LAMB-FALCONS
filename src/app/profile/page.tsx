"use client";

import { useUser, useClerk, SignedIn, RedirectToSignIn, SignedOut } from "@clerk/nextjs";
import { useRef, useReducer } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileDetails } from "@/components/profile/profile-details";
import { ProfileActions } from "@/components/profile/profile-actions";
import { DeleteAccountModal } from "@/components/profile/delete-account-modal";

const initialProfileState = {
    isEditing: false,
    editForm: { fullName: "", phoneNumber: "" },
    uploadingImage: false,
    showDeleteModal: false,
    deleteConfirmText: "",
    deleting: false,
    deleteError: "",
};

type ProfileState = typeof initialProfileState;
type ProfileAction = Partial<ProfileState>;

function profileReducer(state: ProfileState, action: ProfileAction): ProfileState {
    return { ...state, ...action };
}

const ProfileContent = () => {
    const { user, isLoaded } = useUser();
    const { signOut } = useClerk();
    const [state, dispatch] = useReducer(profileReducer, initialProfileState);
    const {
        isEditing,
        editForm,
        uploadingImage,
        showDeleteModal,
        deleteConfirmText,
        deleting,
        deleteError,
    } = state;
    const fileInputRef = useRef<HTMLInputElement>(null);

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
        ? new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
        : "—";
    const phoneNumber = (user.unsafeMetadata as { phoneNumber?: string })?.phoneNumber || "—";

    const handleEditStart = () => {
        const currentPhone = (user.unsafeMetadata as { phoneNumber?: string })?.phoneNumber || "";
        dispatch({
            editForm: {
                fullName: (user.firstName && user.lastName) ? `${user.firstName} ${user.lastName}` : (user.firstName || user.lastName || ""),
                phoneNumber: currentPhone,
            },
            isEditing: true,
        });
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
            dispatch({ isEditing: false });
        } catch (err) {
            console.error("Failed to update profile:", err);
        }
    };

    const handleSignOut = () => signOut({ redirectUrl: "/" });

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        dispatch({ uploadingImage: true });
        try {
            await user.setProfileImage({ file });
        } catch (err) {
            console.error("Failed to upload profile image:", err);
        } finally {
            dispatch({ uploadingImage: false });
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleRemoveImage = async () => {
        dispatch({ uploadingImage: true });
        try {
            await user.setProfileImage({ file: null });
        } catch (err) {
            console.error("Failed to remove profile image:", err);
        } finally {
            dispatch({ uploadingImage: false });
        }
    };

    const handleConfirmDelete = async () => {
        if (deleteConfirmText !== "DELETE") {
            dispatch({ deleteError: "Please type DELETE exactly to confirm." });
            return;
        }
        dispatch({ deleting: true, deleteError: "" });
        try {
            const res = await fetch("/api/delete-account", { method: "DELETE" });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to delete account");
            }
            window.location.href = "/";
        } catch (err: unknown) {
            const error = err as Error;
            console.error("Failed to delete account:", error);
            dispatch({
                deleteError: error.message || "Failed to delete account. Please try again.",
                deleting: false,
            });
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className="relative min-h-screen bg-zinc-950 pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-zinc-950/80 z-10" />
                    <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-10" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-20 max-w-2xl mx-auto">
                    <ProfileHeader
                        displayName={displayName}
                        avatar={avatar}
                        joinedDate={joinedDate}
                        uploadingImage={uploadingImage}
                        hasImage={user.hasImage}
                        fileInputRef={fileInputRef}
                        onImageUpload={handleImageUpload}
                        onRemoveImage={handleRemoveImage}
                    />

                    <ProfileDetails
                        displayName={displayName}
                        email={email}
                        phoneNumber={phoneNumber}
                        joinedDate={joinedDate}
                        isEditing={isEditing}
                        editForm={editForm}
                        onEditChange={(field, value) => dispatch({ editForm: { ...editForm, [field]: value } })}
                        onEditStart={handleEditStart}
                        onSave={handleSave}
                    />

                    <ProfileActions
                        onSignOut={handleSignOut}
                        onDeleteClick={() => dispatch({ showDeleteModal: true, deleteConfirmText: "", deleteError: "" })}
                    />

                    {isEditing && (
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-4 text-center"
                        >
                            <button
                                type="button"
                                onClick={() => dispatch({ isEditing: false })}
                                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2"
                            >
                                Cancel editing
                            </button>
                        </m.div>
                    )}
                </div>

                <DeleteAccountModal
                    isOpen={showDeleteModal}
                    deleting={deleting}
                    deleteError={deleteError}
                    deleteConfirmText={deleteConfirmText}
                    onClose={() => dispatch({ showDeleteModal: false })}
                    onConfirmTextChange={(text) => dispatch({ deleteConfirmText: text })}
                    onConfirmDelete={handleConfirmDelete}
                />
            </section>
        </LazyMotion>
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
