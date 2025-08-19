"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
	{ href: "https://github.com/", icon: <FaGithub /> },
	{ href: "https://twitter.com/", icon: <FaXTwitter /> },
	{ href: "https://linkedin.com/in/", icon: <FaLinkedin /> },
	{ href: "https://youtube.com/c/", icon: <FaYoutube /> },
];

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "#about" },
	{ name: "Team", href: "#team" },
	{ name: "Contact", href: "#contact" },
	{ name: "Resources", href: "/resources" },
];

const Footer = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.footer
			className="relative overflow-hidden bg-zinc-950 text-zinc-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.2 }}
		>
			<div
				className={`absolute inset-0 transition-all duration-1000 ease-in-out z-0`}
				style={{
					background: isHovered
						? "linear-gradient(135deg, #1f2937, #111827, #0c4a6e)"
						: "linear-gradient(45deg, #0c0a09, #18181b, #0c0a09)",
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			/>

			<div
				className="absolute inset-0 z-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]"
				style={{ backgroundPosition: "0% 0%" }}
			></div>

			<div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="flex flex-col items-center md:items-start text-center md:text-left">
					<Link href="/" className="mb-4">
						<motion.div
							initial={{ scale: 0.9, opacity: 0.8 }}
							animate={{ scale: 1, opacity: 1 }}
							whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Image
								src="/logo-primary.svg"
								alt="Primary Logo"
								width={120}
								height={40}
								className="filter grayscale transition-all duration-300"
							/>
						</motion.div>
					</Link>
					<p className="text-sm max-w-sm mb-6 text-zinc-500">
						&quot;The future runs on code, and we&apos;re writing it.&quot;
					</p>

					<div className="flex space-x-4">
						{socialLinks.map((link, index) => (
							<motion.a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-zinc-500 hover:text-zinc-100 transition-colors duration-300 relative"
								whileHover={{ scale: 1.2, y: -5 }}
								whileTap={{ scale: 0.9 }}
							>
								{link.icon}
							</motion.a>
						))}
					</div>
				</div>

				<div className="flex flex-col items-center md:items-start text-center md:text-left">
					<h3 className="text-lg font-semibold text-zinc-200 mb-4">
						Quick Links
					</h3>
					<ul className="space-y-2">
						{navLinks.map((link, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Link
									href={link.href}
									className="text-sm hover:text-zinc-100 transition-colors duration-300 relative group"
								>
									{link.name}
									<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-200 transition-all duration-300 group-hover:w-full" />
								</Link>
							</motion.li>
						))}
					</ul>
				</div>

				<div className="flex flex-col items-center md:items-start text-center md:text-left">
					<h3 className="text-lg font-semibold text-zinc-200 mb-4">
						Proudly Powered By
					</h3>
					<Link
						href="https://sac.iiitnr.ac.in/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<motion.div
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Image
								src="/sac_logo.png"
								alt="Secondary Logo"
								width={100}
								height={100}
								className="opacity-100 transition-opacity duration-300"
							/>
						</motion.div>
					</Link>
					<p className="text-sm mt-4 text-zinc-500">
						Building with the best tools in the business.
					</p>
				</div>
			</div>

			<div className="relative z-10 mt-8 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500">
				<p>&copy; {new Date().getFullYear()} Robonyx. All Rights Reserved.</p>
			</div>
		</motion.footer>
	);
};

export default Footer;
