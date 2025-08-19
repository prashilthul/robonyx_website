"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PhotoCarousel } from "@/components/photo-carousel";
import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";
import Footer from "@/components/footer";
import ExpandableCardSection from "@/components/project-section";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<main className="min-h-screen">
			<Navbar />
			<HeroSection />
			<PhotoCarousel />
			<AboutSection />
			<ExpandableCardSection />
			<TeamSection />
			<Footer />
		</main>
	);
}
