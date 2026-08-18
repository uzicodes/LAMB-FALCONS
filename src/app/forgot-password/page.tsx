"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useReducer } from "react";
import { useSignIn } from "@clerk/nextjs/legacy";

const initialState = {
    loading: false,
    error: "",
    successfulCreation: false,
    code: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
    email: "",
};

type State = typeof initialState;
type Action = Partial<State>;

function reducer(state: State, action: Action): State {
    return { ...state, ...action };
}

const ForgotPassword = () => {
    const router = useRouter();
    const { signIn, isLoaded, setActive } = useSignIn();

    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        loading,
        error,
        successfulCreation,
        code,
        password,
        confirmPassword,
        showPassword,
        showConfirmPassword,
        email,
    } = state;

    // Send reset code to email
    const handleSendCode = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isLoaded) return;

        if (!email || (email.match(/@/g) || []).length !== 1) {
            dispatch({ error: "Please enter a valid email address." });
            return;
        }

        dispatch({ loading: true, error: "" });

        try {
            await signIn.create({
                strategy: "reset_password_email_code",
                identifier: email,
            });
            dispatch({ successfulCreation: true });
        } catch (err: unknown) {
            const clerkError = err as { errors?: { message: string }[] };
            dispatch({ error: clerkError.errors?.[0]?.message || "Failed to send reset code. Please try again." });
        } finally {
            dispatch({ loading: false });
        }
    };

    // Reset password with code
    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isLoaded) return;

        if (password !== confirmPassword) {
            dispatch({ error: "Passwords do not match." });
            return;
        }

        if (password.length < 6 || password.length > 30) {
            dispatch({ error: "Password must be between 6 and 30 characters." });
            return;
        }

        dispatch({ loading: true, error: "" });

        try {
            const result = await signIn.attemptFirstFactor({
                strategy: "reset_password_email_code",
                code,
                password,
            });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/profile");
            }
        } catch (err: unknown) {
            const clerkError = err as { errors?: { message: string }[] };
            dispatch({ error: clerkError.errors?.[0]?.message || "Failed to reset password. Please try again." });
        } finally {
            dispatch({ loading: false });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#061a13] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#061a13]/70 z-10" />
                <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-25" />
            </div>
            <div className="relative z-20 w-full max-w-sm bg-[#0a2a1f]/80 backdrop-blur-md border border-[#15442f] rounded-2xl shadow-2xl overflow-hidden pb-4">

                <div className="px-6 pt-4 pb-2 text-center">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                        <Image
                            src="/falcons_logo.png"
                            alt="Lamb Falcons Logo"
                            fill
                            sizes="48px"
                            className="object-contain drop-shadow-[0_0_10px_rgba(210,232,35,0.5)]"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-[#e8e0c8] tracking-tight">
                        {successfulCreation ? "Reset Password" : "Forgot Password"}
                    </h2>
                    <p className="text-[11px] text-[#f8f4e8]/60 mt-1">
                        {successfulCreation
                            ? "Enter the code sent to your email and your new password"
                            : "Enter your email to receive a password reset code"}
                    </p>
                </div>

                {error && (
                    <div className="mx-5 mb-2 px-3 py-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg">
                        {error}
                    </div>
                )}

                {!successfulCreation ? (
                    // Email form
                    (<form onSubmit={handleSendCode} className="px-5 pb-2 space-y-3">
                        <div>
                            <label htmlFor="forgot-email" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Email Address</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Mail className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input
                                    id="forgot-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => dispatch({ email: e.target.value })}
                                    className="block w-full py-2 pl-8 pr-3 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="pt-2">
                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full py-2 text-sm font-bold text-black bg-[#d2e823] rounded-lg hover:bg-[#e0f040] focus:outline-none focus:ring-2 focus:ring-[#d2e823]/50 transition-all shadow-[0_0_15px_rgba(210,232,35,0.3)] hover:shadow-[0_0_20px_rgba(210,232,35,0.5)] transform active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? "Sending Code..." : "Send Reset Code"}
                            </button>
                        </div>
                        <div className="text-center">
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-1 text-xs text-[#f8f4e8]/60 hover:text-[#e0f040] transition-colors"
                            >
                                <ArrowLeft className="w-3 h-3" />
                                Back to Login
                            </Link>
                        </div>
                    </form>)
                ) : (
                    // Code + New Password form
                    (<form onSubmit={handleResetPassword} className="px-5 pb-2 space-y-1.5">
                        {/* Verification Code */}
                        <div>
                            <label htmlFor="forgot-code" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Verification Code</label>
                            <div className="mt-0.5">
                                <input
                                    id="forgot-code"
                                    value={code}
                                    onChange={(e) => dispatch({ code: e.target.value })}
                                    className="block w-full py-2 px-3 text-center text-base tracking-[0.5em] font-mono text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                    placeholder="000000"
                                    required
                                />
                            </div>
                        </div>
                        {/* New Password */}
                        <div>
                            <label htmlFor="forgot-new-password" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">New Password</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Lock className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input
                                    id="forgot-new-password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => dispatch({ password: e.target.value })}
                                    minLength={6}
                                    maxLength={30}
                                    className="block w-full py-2 pl-8 pr-10 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    onClick={() => dispatch({ showPassword: !showPassword })}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#f8f4e8]/40 hover:text-[#f8f4e8]/80 transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                            <p className="text-[9px] text-[#f8f4e8]/40 ml-1 mt-0.5">
                                Min 6 characters, Max 30 characters
                            </p>
                        </div>
                        {/* Confirm New Password */}
                        <div>
                            <label htmlFor="forgot-confirm-password" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Confirm New Password</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Lock className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input
                                    id="forgot-confirm-password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => dispatch({ confirmPassword: e.target.value })}
                                    minLength={6}
                                    maxLength={30}
                                    className="block w-full py-2 pl-8 pr-10 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                    onClick={() => dispatch({ showConfirmPassword: !showConfirmPassword })}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#f8f4e8]/40 hover:text-[#f8f4e8]/80 transition-colors focus:outline-none"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                </button>
                            </div>
                        </div>
                        <div className="pt-5">
                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full py-2 text-sm font-bold text-black bg-[#d2e823] rounded-lg hover:bg-[#e0f040] focus:outline-none focus:ring-2 focus:ring-[#d2e823]/50 transition-all shadow-[0_0_15px_rgba(210,232,35,0.3)] hover:shadow-[0_0_20px_rgba(210,232,35,0.5)] transform active:scale-[0.98] disabled:opacity-50"
                            >
                                {loading ? "Resetting..." : "Reset Password"}
                            </button>
                        </div>
                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => {
                                    dispatch({
                                        successfulCreation: false,
                                        error: "",
                                        code: "",
                                        password: "",
                                        confirmPassword: "",
                                    });
                                }}
                                className="inline-flex items-center gap-1 text-xs text-[#f8f4e8]/60 hover:text-[#e0f040] transition-colors"
                            >
                                <ArrowLeft className="w-3 h-3" />
                                Use a different email
                            </button>
                        </div>
                    </form>)
                )}
            </div>
        </section>
    );
};

export default ForgotPassword;
