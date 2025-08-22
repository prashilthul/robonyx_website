"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (href: string, isExternal: boolean) => {
		if (isExternal) {
			router.push(href);
		} else {
			if (window.location.pathname !== "/") {
				router.push("/" + href);
			} else {
				const element = document.querySelector(href);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}
		}
		setIsMobileMenuOpen(false);
	};

	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		{ href: "#team", label: "Team" },
		{ href: "/resources", label: "Resources", isExternal: true },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-primary/95 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link
							href="/"
							className="text-xl font-bold text-primary-foreground font-mono hover:text-accent transition-colors"
						>
							Robonyx (comET)
						</Link>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{navLinks.map((link) => (
								<button
									key={link.href}
									onClick={() =>
										handleNavClick(link.href, link.isExternal || false)
									}
									className="text-primary-foreground hover:text-accent transition-colors duration-200 px-3 py-2 text-sm font-medium cursor-pointer"
								>
									{link.label}
								</button>
							))}
						</div>
					</div>

					<div className="hidden md:block">
						<Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:scale-105">
							Join Us
						</Button>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-primary-foreground hover:text-accent transition-colors duration-200"
						>
							{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{isMobileMenuOpen && (
					<div className="md:hidden animate-slide-in-up">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-md rounded-lg mt-2">
							{navLinks.map((link) => (
								<button
									key={link.href}
									onClick={() =>
										handleNavClick(link.href, link.isExternal || false)
									}
									className="text-primary-foreground hover:text-accent block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
								>
									{link.label}
								</button>
							))}
							<div className="px-3 py-2">
								<Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
									Join Us
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
