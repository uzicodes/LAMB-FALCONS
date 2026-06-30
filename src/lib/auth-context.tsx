"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserProfile {
    name: string;
    email: string;
    phone: string;
    avatar: string;
    joinedDate: string;
    role: string;
}

interface AuthContextType {
    user: UserProfile | null;
    isLoggedIn: boolean;
    login: (email: string) => void;
    logout: () => void;
    updateProfile: (data: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_USER: UserProfile = {
    name: "Falcon Member",
    email: "",
    phone: "+880 1700-000000",
    avatar: "/falcons_logo.png",
    joinedDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" }),
    role: "Member",
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);

    // Hydrate from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("lamb_falcons_user:v1");
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch {
                localStorage.removeItem("lamb_falcons_user:v1");
            }
        }
    }, []);

    const login = (email: string) => {
        const newUser: UserProfile = {
            ...DEFAULT_USER,
            email,
            name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        };
        setUser(newUser);
        localStorage.setItem("lamb_falcons_user:v1", JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("lamb_falcons_user:v1");
    };

    const updateProfile = (data: Partial<UserProfile>) => {
        if (!user) return;
        const updated = { ...user, ...data };
        setUser(updated);
        localStorage.setItem("lamb_falcons_user:v1", JSON.stringify(updated));
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
