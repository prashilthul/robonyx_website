"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "./ui/card";

const CARD_COUNT = 14;
const MAX_SCALE = 0.7;
const MIN_SCALE = 0.5;

interface AboutSectionProps {
	className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
	const linksRef = useRef<(HTMLDivElement | null)[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollcontainerRef = useRef<HTMLDivElement>(null);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const cards = Array.from({ length: CARD_COUNT });
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Create a seperate  ScrollTrigger instance and store it
		let scrollTriggerInstance: ScrollTrigger | null = null;

		if (scrollcontainerRef.current && containerRef.current) {
			scrollTriggerInstance = ScrollTrigger.create({
				trigger: containerRef.current,
				start: "top 30%",
				end: "bottom 60%",
				scrub: true,
				pin: true,
				toggleActions: "play reverse play reverse",
				onUpdate: (self) => {
					const scrollProgress = self.progress;

					if (scrollcontainerRef.current) {
						const scrollWidth = scrollcontainerRef.current.scrollWidth;
						const clientWidth = scrollcontainerRef.current.clientWidth;

						if (scrollWidth && clientWidth) {
							const maxScroll = scrollWidth - clientWidth;
							const scrollDistance = scrollProgress * maxScroll;
							scrollcontainerRef.current.scrollLeft = scrollDistance;
						}
					}
				},
			});
		}

		// Cleanup on component unmount does not work as expected
		return () => {
			if (scrollTriggerInstance) {
				scrollTriggerInstance.kill();
			}
		};
	}, []);

	return (
		<section
			className="flex justify-center items-start h-[80vh] overflow-hidden "
			ref={containerRef}
		>
			<div
				ref={scrollcontainerRef}
				className="flex w-full max-h-[48rem] overflow-hidden rounded-lg shadow-md"
				style={{
					display: "flex",
					flexDirection: "row",
				}}
			>
				<div className="flex w-full">
					{cards.map((_, index) => {
						const isHovered = hoveredIndex === index;
						const distance =
							hoveredIndex !== null ? Math.abs(index - hoveredIndex) : 0;

						let flexGrow = 1;

						if (hoveredIndex !== null) {
							if (isHovered) {
								flexGrow = MAX_SCALE;
							} else {
								const shrinkFactor = 1 / (distance + 1);
								flexGrow = shrinkFactor * MAX_SCALE;
								if (flexGrow < MIN_SCALE) flexGrow = MIN_SCALE;
							}
						}

						return (
							<div
								key={index}
								className={`transition-all duration-500 ease-in-out flex items-end ${className}`}
								ref={(el) => {
									linksRef.current[index] = el;
								}}
								style={{
									flex: flexGrow,
									minWidth: "450px", // Minimum width of the cards
									minHeight: "600px", // Prevent cards from shrinking too much
								}}
								// onMouseEnter={() => setHoveredIndex(index)}
								// onMouseLeave={() => setHoveredIndex(null)}
							>
								<div
									className="w-full h-full p-4 transition-all duration-500 ease-in-out"
									style={{
										height:
											hoveredIndex === null
												? "100%"
												: isHovered
												? "100%"
												: `${100 - distance * 7}%`,
									}}
								>
									<Card className="w-full h-full flex flex-col">
										<CardHeader>
											<CardTitle>Card {index + 1}</CardTitle>
											<CardDescription>
												Customizable card component.
											</CardDescription>
										</CardHeader>
										<CardContent className="flex-1">
											<p>You can put any content here.</p>
										</CardContent>
										<CardFooter>Footer</CardFooter>
									</Card>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
