"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";

const Navbar = () => {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	return (
		<>
			{/* Main Navbar */}
			<motion.nav
				className="fixed top-4 inset-x-0 mx-auto z-50 w-fit max-w-[95%]"
			>
				<div className="relative flex items-center justify-between px-6 py-2.5 bg-black/70 backdrop-blur-xl rounded-full border border-white/10 shadow-lg shadow-blue-500/5">
					{/* Subtle blue glow effect */}
					<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none" />

					{/* Logo Area */}
					<Link href="/" className="relative flex items-center gap-2.5 group">
						<div className="relative w-8 h-8 overflow-hidden rounded-full">
							<Image
								src={BRAND.logo}
								alt="Lamb Falcons Logo"
								fill
								className="object-cover"
								priority
							/>
						</div>
						<span className="text-base font-bold tracking-wide">
							<span className="text-white">LAMB</span>{" "}
							<span className="text-blue-400">FALCONS</span>
						</span>
					</Link>

					{/* Desktop Navigation Links + Join Button */}
					<div className="hidden md:flex items-center gap-1 ml-8">
						{NAV_LINKS.map((link) => (
							<Link key={link.name} href={link.href} className="relative group">
								<motion.div
									className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-colors duration-200 group-hover:text-white"
									whileHover="hover"
								>
									{/* Glowing background on hover */}
									<motion.span
										className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0"
										variants={{
											hover: {
												opacity: 1,
												boxShadow: "0 0 20px 2px rgba(59, 130, 246, 0.3)",
											},
										}}
										transition={{ duration: 0.2 }}
									/>
									<span className={`relative z-10 ${pathname === link.href ? "text-white" : ""}`}>
										{link.name}
									</span>
									{pathname === link.href && (
										<motion.div
											layoutId="activeTab"
											className="absolute bottom-1.5 left-1/4 w-1/2 h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
											transition={{ type: "spring", stiffness: 300, damping: 30 }}
										/>
									)}
								</motion.div>
							</Link>
						))}

						{/* Join Button  */}
						<Link
							href="/join"
							className="ml-2 inline-flex items-center px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
						>
							Join
						</Link>
					</div>

					{/* Mobile Menu Toggle - Hidden on Desktop */}
					<div className="flex items-center gap-3 md:hidden">

						{/* Mobile Menu Toggle */}
						<button
							onClick={toggleMobileMenu}
							className="md:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
							aria-label="Toggle mobile menu"
						>
							<AnimatePresence mode="wait">
								{isMobileMenuOpen ? (
									<motion.div
										key="close"
										initial={{ rotate: -90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: 90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<X size={22} />
									</motion.div>
								) : (
									<motion.div
										key="menu"
										initial={{ rotate: 90, opacity: 0 }}
										animate={{ rotate: 0, opacity: 1 }}
										exit={{ rotate: -90, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<Menu size={22} />
									</motion.div>
								)}
							</AnimatePresence>
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md md:hidden"
					>
						<div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl shadow-blue-500/10 overflow-hidden">
							<div className="flex flex-col p-4 gap-1">
								{NAV_LINKS.map((link, index) => (
									<motion.div
										key={link.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.05 + 0.1 }}
									>
										<Link
											href={link.href}
											onClick={() => setIsMobileMenuOpen(false)}
											className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 rounded-xl transition-all duration-200 font-medium"
										>
											{link.name}
										</Link>
									</motion.div>
								))}

								{/* Mobile Join Button */}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: NAV_LINKS.length * 0.05 + 0.15 }}
									className="mt-2 pt-2 border-t border-white/10"
								>
									<Link
										href="/join"
										onClick={() => setIsMobileMenuOpen(false)}
										className="flex items-center justify-center px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200"
									>
										Join Now
									</Link>
								</motion.div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Mobile Menu Backdrop */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
						onClick={() => setIsMobileMenuOpen(false)}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
