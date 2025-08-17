"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const carouselImages = [
	{
		src: "/robotics-workshop.png",
		alt: "Team working on autonomous robot",
		title: "Autonomous Navigation Project",
		description: "Building intelligent robots with advanced navigation systems",
	},
	{
		src: "/robot-competition-arena.png",
		alt: "Robotic arm assembly",
		title: "Competition Arena",
		description: "Testing our robots in competitive environments",
	},
	{
		src: "/3d-printing-lab-robotics.png",
		alt: "3D printing lab",
		title: "3D Printing & Fabrication",
		description: "Creating custom parts and prototypes for our robots",
	},
	{
		src: "/coding-robots-session.png",
		alt: "Coding session",
		title: "Programming & AI Development",
		description: "Developing intelligent algorithms and control systems",
	},
	{
		src: "/placeholder-brpgs.png",
		alt: "Robotics workshop",
		title: "Collaborative Innovation",
		description: "Working together to push the boundaries of robotics",
	},
];

export function PhotoCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (!isAutoPlaying || isHovered) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, isHovered]);

	const goToPrevious = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + carouselImages.length) % carouselImages.length
		);
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	const toggleAutoPlay = () => {
		setIsAutoPlaying(!isAutoPlaying);
	};

	return (
		<section className="py-20 bg-muted">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 animate-slide-in-up">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Our Projects & Activities
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Explore our latest robotics projects, competitions, and
						collaborative innovations
					</p>
				</div>

				<div className="relative max-w-4xl mx-auto">
					<div
						className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						>
							{carouselImages.map((image, index) => (
								<div
									key={index}
									className="w-full flex-shrink-0 relative group"
								>
									<Image
										src={image.src || "/placeholder.svg"}
										alt={image.alt}
										width={800}
										height={600}
										className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end transition-opacity duration-300 group-hover:from-primary/90">
										<div className="p-6 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
											<h3 className="text-xl font-semibold text-primary-foreground mb-2">
												{image.title}
											</h3>
											<p className="text-primary-foreground/90 text-sm">
												{image.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>

						<Button
							variant="ghost"
							size="icon"
							className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:scale-110"
							onClick={goToPrevious}
						>
							<ChevronLeft className="w-6 h-6" />
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:scale-110"
							onClick={goToNext}
						>
							<ChevronRight className="w-6 h-6" />
						</Button>

						<Button
							variant="ghost"
							size="icon"
							className="absolute top-4 right-4 bg-primary/20 hover:bg-primary/40 text-primary-foreground backdrop-blur-sm transition-all duration-200"
							onClick={toggleAutoPlay}
						>
							{isAutoPlaying ? (
								<Pause className="w-4 h-4" />
							) : (
								<Play className="w-4 h-4" />
							)}
						</Button>
					</div>

					<div className="flex justify-center space-x-3 mt-6">
						{carouselImages.map((_, index) => (
							<button
								key={index}
								className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
									index === currentIndex
										? "bg-accent scale-125 shadow-lg shadow-accent/50"
										: "bg-muted-foreground/30 hover:bg-muted-foreground/60"
								}`}
								onClick={() => goToSlide(index)}
							/>
						))}
					</div>

					<div className="mt-4 w-full bg-muted-foreground/20 rounded-full h-1 overflow-hidden">
						<div
							className="h-full bg-accent transition-all duration-300 rounded-full"
							style={{
								width: `${((currentIndex + 1) / carouselImages.length) * 100}%`,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
