"use client";
import { Phone, User, Mail, Lock, CheckCircle2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useReducer, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useSignUp } from "@clerk/nextjs/legacy";

const initialState = {
    verifying: false,
    code: "",
    loading: false,
    showPassword: false,
    showConfirmPassword: false,
    password: "",
    confirmPassword: "",
    error: "",
};

type State = typeof initialState;
type Action = Partial<State>;

function reducer(state: State, action: Action): State {
    return { ...state, ...action };
}

const Register = () => {
    const router = useRouter();
    const { signUp, isLoaded, setActive } = useSignUp();

    const [state, dispatch] = useReducer(reducer, initialState);
    const {
        verifying,
        code,
        loading,
        showPassword,
        showConfirmPassword,
        password,
        confirmPassword,
        error,
    } = state;
    const phoneNumberRef = useRef("");


    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isLoaded) return;

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const phone = formData.get("phoneNumber") as string;

        phoneNumberRef.current = phone;

        if (!email || (email.match(/@/g) || []).length !== 1) {
            dispatch({ error: "Email must contain exactly one '@' symbol." });
            return;
        }

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
            const nameParts = name.trim().split(/\s+/);
            const firstName = nameParts[0] || "";
            const lastName = nameParts.slice(1).join(" ") || "";

            await signUp.create({
                emailAddress: email,
                password,
                firstName,
                lastName,
                unsafeMetadata: {
                    phoneNumber: phone,
                },
            });

            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            dispatch({ verifying: true });
        } catch (err: unknown) {
            const clerkError = err as { errors?: { message: string }[] };
            dispatch({ error: clerkError.errors?.[0]?.message || "Registration failed. Please try again." });
        } finally {
            dispatch({ loading: false });
        }
    };

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded || !code.trim()) return;
        dispatch({ loading: true, error: "" });

        try {
            const result = await signUp.attemptEmailAddressVerification({ code });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/profile");
            }
        } catch (err: unknown) {
            const clerkError = err as { errors?: { message: string }[] };
            dispatch({ error: clerkError.errors?.[0]?.message || "Invalid verification code." });
        } finally {
            dispatch({ loading: false });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#061a13] overflow-hidden">
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
                    <h2 className="text-xl font-bold text-[#f8f4e8] tracking-tight">
                        {verifying ? "Verify Email" : "Create Account"}
                    </h2>
                    <p className="text-[11px] text-[#f8f4e8]/60 mt-1">
                        {verifying ? "Enter the code sent to your email" : "Join the Falcons community today !"}
                    </p>
                </div>

                {error && (
                    <div className="mx-5 mb-2 px-3 py-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg">
                        {error}
                    </div>
                )}

                {verifying ? (
                    <form onSubmit={handleVerify} className="px-6 pb-2 space-y-3">
                        <div className="space-y-1">
                            <label htmlFor="register-code" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Verification Code</label>
                            <input
                                id="register-code"
                                value={code}
                                onChange={(e) => dispatch({ code: e.target.value })}
                                className="block w-full py-2 px-3 text-center text-base tracking-[0.5em] font-mono text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all"
                                placeholder="000000"
                            />
                        </div>
                        <button type="submit" disabled={loading} className="w-full py-2 text-sm font-bold text-black bg-[#d2e823] rounded-lg hover:bg-[#e0f040] transition-all disabled:opacity-50">
                            {loading ? "Verifying..." : "Verify & Login"}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleRegister} className="px-5 pb-2 space-y-1.5">
                        {/* Name */}
                        <div>
                            <label htmlFor="register-name" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Full Name</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <User className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input id="register-name" type="text" name="name" className="block w-full py-2 pl-8 pr-3 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30" placeholder="Enter your full name" required />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="register-email" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Email</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Mail className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input id="register-email" type="email" name="email" className="block w-full py-2 pl-8 pr-3 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30" placeholder="name@example.com" required />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="register-phone" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Phone Number</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Phone className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input
                                    id="register-phone"
                                    type="tel"
                                    name="phoneNumber"
                                    maxLength={15}
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                                    }}
                                    className="block w-full py-2 pl-8 pr-3 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="register-password" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Password</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Lock className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input
                                    id="register-password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={(e) => dispatch({ password: e.target.value })}
                                    minLength={6}
                                    maxLength={30}
                                    className="block w-full py-2 pl-8 pr-16 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                    placeholder="••••••••"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-1.5 gap-1">
                                    <button
                                        type="button"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        onClick={() => dispatch({ showPassword: !showPassword })}
                                        className="p-1 text-[#f8f4e8]/40 hover:text-[#f8f4e8]/80 transition-colors focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                    </button>
                                    {password && confirmPassword && password === confirmPassword && (
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d2e823] animate-in zoom-in duration-300 mr-1.5" />
                                    )}
                                </div>
                            </div>
                            <p className="text-[9px] text-[#f8f4e8]/40 ml-1 mt-0.5">
                                Min 6 characters, Max 30 characters
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="register-confirm-password" className="text-[11px] font-medium text-[#f8f4e8]/80 ml-1">Confirm Password</label>
                            <div className="relative group mt-0.5">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Lock className="w-3 h-3 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                                </div>
                                <input
                                    id="register-confirm-password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => dispatch({ confirmPassword: e.target.value })}
                                    minLength={6}
                                    maxLength={30}
                                    className="block w-full py-2 pl-8 pr-16 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                    placeholder="••••••••"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-1.5 gap-1">
                                    <button
                                        type="button"
                                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                        onClick={() => dispatch({ showConfirmPassword: !showConfirmPassword })}
                                        className="p-1 text-[#f8f4e8]/40 hover:text-[#f8f4e8]/80 transition-colors focus:outline-none"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                    </button>
                                    {password && confirmPassword && password === confirmPassword && (
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d2e823] animate-in zoom-in duration-300 mr-1.5" />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="pt-5">
                            <div id="clerk-captcha"></div>
                            <button disabled={loading} type="submit" className="w-full py-2 text-sm font-bold text-black bg-[#d2e823] rounded-lg hover:bg-[#e0f040] focus:outline-none focus:ring-2 focus:ring-[#d2e823]/50 transition-all shadow-[0_0_15px_rgba(210,232,35,0.3)] hover:shadow-[0_0_20px_rgba(210,232,35,0.5)] transform active:scale-[0.98] disabled:opacity-50">
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-xs text-[#f8f4e8]/60">
                                Already have an account?{" "}
                                <Link href="/login" className="text-[#d2e823] hover:text-[#e0f040] font-bold hover:underline transition-colors">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Register;

