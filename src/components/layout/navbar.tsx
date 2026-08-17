"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { LazyMotion, domMax, m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { useAuth } from "@clerk/nextjs";

const ProfileAvatar = dynamic(() => import("./profile-avatar"), {
	ssr: false,
	loading: () => <div className="w-8 h-8 rounded-full bg-[#f8f4e8]/10 animate-pulse" />,
});

const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const { isLoaded: isAuthLoaded, isSignedIn } = useAuth();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");
	const isHomePage = pathname === "/";

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	// Scroll to section when landing on homepage from another page navigation
	useEffect(() => {
		if (isHomePage) {
			const sectionId = sessionStorage.getItem("scrollToSection");
			if (sectionId) {
				sessionStorage.removeItem("scrollToSection");
				// Small delay to ensure sections are rendered
				const timerId = setTimeout(() => {
					const element = document.getElementById(sectionId);
					if (element) {
						const offset = 80;
						const elementPosition = element.getBoundingClientRect().top + window.scrollY;
						window.scrollTo({
							top: elementPosition - offset,
							behavior: "smooth",
						});
					}
				}, 300);
				return () => clearTimeout(timerId);
			}
		}
	}, [isHomePage]);

	// Detect which section is currently in view (only on homepage)
	useEffect(() => {
		if (!isHomePage) {
			setActiveSection("");
			return;
		}

		const handleScroll = () => {
			const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
			let current = "";

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 150 && rect.bottom >= 150) {
						current = `#${sectionId}`;
					}
				}
			}

			setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Run once on mount
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHomePage]);

	// Handle smooth scroll on nav link click
	const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const sectionId = href.replace("#", "");

		if (!isHomePage) {
			// Navigate to homepage without hash — pass section via sessionStorage
			sessionStorage.setItem("scrollToSection", sectionId);
			router.push(`/`);
			setIsMobileMenuOpen(false);
			return;
		}

		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80; // Account for navbar height
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: "smooth",
			});
			// Keep URL clean without hash
			window.history.replaceState(null, "", "/");
		}
		setIsMobileMenuOpen(false);
	}, [isHomePage, router]);

	return (
        <LazyMotion features={domMax}>
            {/* Main Navbar */}
            <m.nav
				className="fixed top-4 inset-x-0 mx-auto z-50 w-fit max-w-[98%] md:max-w-[95%]"
			>
				<div className="relative flex items-center justify-between px-3 md:px-2 py-1.5 md:py-2 bg-gradient-to-b from-[#0a2a1f]/90 to-[#061a13]/80 backdrop-blur-2xl rounded-full border border-[#d2e823]/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-[#d2e823]/5 w-full mx-auto">
					{/* Modern internal gradient glow */}
					<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d2e823]/5 via-transparent to-[#d2e823]/5 pointer-events-none" />
					<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f8f4e8]/20 to-transparent opacity-50" />
					<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d2e823]/20 to-transparent opacity-50" />

					{/* Logo Area */}
					<Link href="/" className="relative flex items-center gap-1.5 group">
						<div className="relative w-10 h-10 -my-1 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
							<Image
								src={BRAND.logo}
								alt="Lamb Falcons Logo"
								width={40}
								height={40}
								className="object-cover w-full h-full"
								priority
							/>
						</div>
						<span className="text-lg md:text-2xl font-bold tracking-wider font-tanker leading-none">
							<span className="text-[#d2e823]">LAMB FALCONS</span>
						</span>
					</Link>

					{/* Navigation Links (Visible on Mobile & Desktop) + Join Button (Desktop only) */}
					<div className="flex items-center gap-1 ml-8 md:ml-20">
						{NAV_LINKS.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => handleNavClick(e, link.href)}
								className={`relative group ${link.name === "About Us" ? "hidden md:block" : ""}`}
							>
								<m.div
									className="px-1.5 py-1 md:px-2 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#f8f4e8]/70 transition-colors duration-200 group-hover:text-[#f8f4e8] font-space-grotesk"
									whileHover="hover"
								>
									{/* Glowing background on hover */}
									<m.span
										className="absolute inset-0 rounded-full bg-[#d2e823]/20 opacity-0"
										variants={{
											hover: {
												opacity: 1,
												boxShadow: "0 0 20px 2px rgba(210, 232, 35, 0.3)",
											},
										}}
										transition={{ duration: 0.2 }}
									/>
									<span className={`relative z-10 ${activeSection === link.href ? "text-[#f8f4e8]" : ""}`}>
										{link.name}
									</span>
									{activeSection === link.href && (
										<m.div
											layoutId="activeTab"
											className="absolute bottom-0 md:bottom-0.5 left-1/4 w-1/2 h-0.5 bg-[#FB4500] rounded-full shadow-[0_0_8px_rgba(251,69,0,0.8)]"
											transition={{ type: "spring", stiffness: 300, damping: 30 }}
										/>
									)}
								</m.div>
							</a>
						))}

						{/* Auth Buttons - Hidden on Mobile, Visible on Desktop */}
						<div className="hidden md:flex ml-2 items-center">
							{!isAuthLoaded ? (
								/* Subtle skeleton placeholder while auth loads */
								(<div className="w-8 h-8 rounded-full bg-[#f8f4e8]/10 animate-pulse" />)
							) : isSignedIn ? (
								<ProfileAvatar />
							) : (
								<Link
									href="/login"
									className="inline-flex items-center px-5 py-1.5 bg-[#f8f4e8]/5 backdrop-blur-md border border-[#f8f4e8]/10 hover:bg-[#f8f4e8]/10 hover:border-[#d2e823]/30 text-[#f8f4e8] text-[10px] md:text-[11px] font-bold uppercase tracking-widest font-space-grotesk rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(210,232,35,0.4)] group overflow-hidden relative"
								>
									<span className="relative z-10">Join</span>
									<div className="absolute inset-0 bg-gradient-to-r from-[#d2e823]/20 to-[#d2e823]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								</Link>
							)}
						</div>
					</div>

					{/* Mobile Menu Toggle - Hidden on Desktop */}
					<div className="flex items-center gap-3 md:hidden">

						{/* Mobile Menu Toggle */}
						<button
							type="button"
							onClick={toggleMobileMenu}
							className="md:hidden relative p-2 text-[#f8f4e8]/70 hover:text-[#f8f4e8] transition-colors duration-200"
							aria-label="Toggle mobile menu"
						>
							<AnimatePresence mode="wait">
								{isMobileMenuOpen ? (
									<m.div
										key="close"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<X size={22} />
									</m.div>
								) : (
									<m.div
										key="menu"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<Menu size={22} />
									</m.div>
								)}
							</AnimatePresence>
						</button>
					</div>
				</div>
			</m.nav>
            {/* Mobile Menu */}
            <AnimatePresence>
				{isMobileMenuOpen && (
					<m.div
						initial={{ opacity: 0, y: -20, x: "-50%" }}
						animate={{ opacity: 1, y: 0, x: "-50%" }}
						exit={{ opacity: 0, y: -20, x: "-50%" }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="fixed top-20 left-1/2 z-40 w-[90%] max-w-md md:hidden"
					>
						<div className="bg-[#0a2a1f]/95 backdrop-blur-xl rounded-2xl border border-[#d2e823]/10 shadow-xl shadow-[#d2e823]/10 overflow-hidden">
							<div className="flex flex-col p-4 gap-1">
								{/* About Us Link (Mobile Only) */}
								<m.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.05 }}
								>
									<a
										href="#about"
										onClick={(e) => { handleNavClick(e, "#about"); setIsMobileMenuOpen(false); }}
										className="flex items-center justify-center px-10 py-3 text-[#f8f4e8]/70 hover:text-[#f8f4e8] text-sm font-semibold uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-[#f8f4e8]/5"
									>
										About Us
									</a>
								</m.div>

								{/* Join / Profile */}
								<m.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 }}
									className="pt-1"
								>
									{isSignedIn ? (
										<div
											role="button"
											tabIndex={0}
											aria-label="Profile navigation"
											onClick={() => setIsMobileMenuOpen(false)}
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ") {
													setIsMobileMenuOpen(false);
												}
											}}
											className="flex items-center justify-center cursor-pointer"
										>
											<ProfileAvatar />
										</div>
									) : (
										<Link
											href="/login"
											onClick={() => setIsMobileMenuOpen(false)}
											className="flex items-center justify-center px-10 py-3 bg-gradient-to-r from-[#0e3527]/50 to-[#0a2a1f]/50 backdrop-blur-md border border-[#d2e823]/30 hover:from-[#0e3527]/70 hover:to-[#0a2a1f]/70 hover:border-[#d2e823]/50 text-[#f8f4e8] text-[11px] font-bold uppercase tracking-widest font-space-grotesk rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(210,232,35,0.1)] hover:shadow-[0_0_20px_rgba(210,232,35,0.4)] group overflow-hidden relative w-fit mx-auto"
										>
											<span className="relative z-10">Join Now</span>
											<div className="absolute inset-0 bg-gradient-to-r from-[#d2e823]/20 to-[#d2e823]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										</Link>
									)}
								</m.div>
							</div>
						</div>
					</m.div>
				)}
			</AnimatePresence>
            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
				{isMobileMenuOpen && (
					<m.div
						role="button"
						tabIndex={0}
						aria-label="Close mobile menu backdrop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden cursor-pointer"
						onClick={() => setIsMobileMenuOpen(false)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === "Escape" || e.key === " ") {
								setIsMobileMenuOpen(false);
							}
						}}
					/>
				)}
			</AnimatePresence>
        </LazyMotion>
    );
};

export default Navbar;
