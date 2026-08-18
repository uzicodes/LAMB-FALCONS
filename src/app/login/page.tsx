"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs/legacy";

const Login = () => {
    const router = useRouter();
    const { signIn, isLoaded, setActive } = useSignIn();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isLoaded) return;

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || (email.match(/@/g) || []).length !== 1) {
            setError("Email must contain exactly one '@' symbol.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const result = await signIn.create({
                identifier: email,
                password,
            });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/profile");
            }
        } catch (err: unknown) {
            const clerkError = err as { errors?: { message: string }[] };
            setError(clerkError.errors?.[0]?.message || "Invalid email or password.");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            await signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/profile",
            });
        } catch (err) {
            console.error("Google sign-in error:", err);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-[#061a13] overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#061a13]/70 z-10" />
                <div className="absolute inset-0 bg-[url('/register.jpg')] bg-cover bg-center opacity-25" />
            </div>

            <div className="relative z-20 w-full max-w-sm bg-[#0a2a1f]/80 backdrop-blur-md border border-[#15442f] rounded-2xl shadow-2xl overflow-hidden">

                <div className="px-6 pt-6 pb-4 text-center">
                    <div className="relative w-14 h-14 mx-auto mb-2">
                        <Image
                            src="/falcons_logo.png"
                            alt="Lamb Falcons Logo"
                            fill
                            sizes="56px"
                            className="object-contain drop-shadow-[0_0_10px_rgba(210,232,35,0.5)]"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-[#e8e0c8] tracking-tight">
                        Welcome Back
                    </h2>
                    <p className="text-xs text-[#f8f4e8]/60 mt-2">
                        Enter your credentials to access your account
                    </p>
                </div>

                <form onSubmit={handleLogin} className="px-6 pb-6 space-y-3">

                    {error && (
                        <div className="px-3 py-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="space-y-1">
                        <label htmlFor="login-email" className="text-xs font-medium text-[#f8f4e8]/80 ml-1">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Mail className="w-3.5 h-3.5 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                            </div>
                            <input
                                id="login-email"
                                type="email"
                                name="email"
                                className="block w-full py-2 pl-9 pr-3 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="login-password" className="text-xs font-medium text-[#f8f4e8]/80 ml-1">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Lock className="w-3.5 h-3.5 text-[#f8f4e8]/40 group-focus-within:text-[#d2e823] transition-colors" />
                            </div>
                            <input
                                id="login-password"
                                type="password"
                                name="password"
                                className="block w-full py-2 pl-9 pr-3 text-sm text-[#f8f4e8] bg-[#061a13]/50 border border-[#15442f] rounded-lg focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] focus:outline-none transition-all placeholder-[#f8f4e8]/30"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="text-right">
                            <Link
                                href="/forgot-password"
                                className="text-[10px] text-[#f8f4e8]/60 hover:text-[#e0f040] transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>

                    </div>

                    <div id="clerk-captcha"></div>
                    <button type="submit" disabled={loading} className="w-full py-2 text-sm font-bold text-black bg-[#d2e823] rounded-lg hover:bg-[#e0f040] focus:outline-none focus:ring-2 focus:ring-[#d2e823]/50 transition-all shadow-[0_0_15px_rgba(210,232,35,0.3)] hover:shadow-[0_0_20px_rgba(210,232,35,0.5)] transform active:scale-[0.98] disabled:opacity-50">
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                    <div className="relative flex items-center py-1">
                        <div className="flex-grow border-t border-[#15442f]"></div>
                        <span className="flex-shrink mx-3 text-[10px] text-[#f8f4e8]/40 uppercase tracking-widest">Or continue with</span>
                        <div className="flex-grow border-t border-[#15442f]"></div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center w-1/2 mx-auto py-2 text-sm font-medium text-[#f8f4e8]/80 bg-[#0e3527] border border-[#15442f] rounded-lg hover:bg-[#15442f] hover:text-[#f8f4e8] transition-all duration-200"
                    >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                    </button>

                    <div className="text-center pt-2">
                        <p className="text-xs text-[#f8f4e8]/60">
                            Not a member?{" "}
                            <Link
                                href="/register"
                                className="text-[#d2e823] hover:text-[#e0f040] font-bold hover:underline transition-colors"
                            >
                                Register Now !
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;

