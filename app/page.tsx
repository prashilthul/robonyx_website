import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center w-full">
			<HeroSection />
			<AboutSection />
			<FeaturesSection />
			<TeamSection />
			<EventsSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import TargetCursor from "@/components/ui/cursor";
import HeroSection from "../components/HeroSection";
import MainNavbar from "../components/MainNav";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Bento from "@/components/bento";
import { TimelineSection } from "@/components/Timelinesection";
import { ImageScroll } from "@/components/Imagescroll";
export default function BlockchainClubLanding() {
	const heroRef = useRef<{ animate: () => gsap.core.Tween }>(null);
	const navRef = useRef<{ animate: () => gsap.core.Timeline }>(null);

	useEffect(() => {
		const master = gsap.timeline();

		if (heroRef.current && navRef.current) {
			master.add(heroRef.current.animate());
			master.add(navRef.current.animate(), "-=0.8");
		}
	}, []);

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			<TargetCursor spinDuration={2} hideDefaultCursor={true} />

			<MainNavbar ref={navRef} className="cursor-target" />
			<HeroSection ref={heroRef} />
			<AboutSection />
			<FeaturesSection />
			<Bento />
			<TimelineSection />

			<ImageScroll />
			<ContactSection title="Meet Our Team" />
		</div>
	);
}
