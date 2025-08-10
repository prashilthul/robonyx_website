"use client";

import React, { useRef } from "react";
// import {
// 	DraggableCardBody,
// 	DraggableCardContainer,
// } from "@/components/ui/card2";
import Image from "next/image";
import TiltedCard from "./ui/card2";

interface ContactSectionProps {
	title?: string;
}
const people = [
	{
		id: "1",
		altText: "prash",
		captionText: "Prashil",
		imageSrc: "/aigenprash.jpg",
		size: "scale-125",
		classes:
			"relative rounded-md border-4 border-purple-600 bg-purple-300 shadow-[0_0_8px_2px_rgba(139,92,246,0.7)] hover:shadow-[0_0_16px_4px_rgba(139,92,246,1)] transition-shadow duration-500",
	},
	{
		id: "2",
		altText: "Fahmin",
		captionText: "Fahmin",
		imageSrc: "/fahmin.jpg",
		size: "scale-135",
		classes:
			"relative rounded-md border-4 border-yellow-400 bg-yellow-300 shadow-[0_0_10px_2px_rgba(252,211,77,0.8)] hover:shadow-[0_0_20px_4px_rgba(252,211,77,1)] transition-shadow duration-500",
	},
	{
		id: "3",
		altText: "Manas",
		captionText: "Manas",
		imageSrc: "/manas.jpg",
		size: "scale-115",
		classes:
			"relative rounded-md border-4 border-blue-500 bg-blue-300 shadow-[0_0_10px_2px_rgba(59,130,246,0.8)] hover:shadow-[0_0_20px_4px_rgba(59,130,246,1)] transition-shadow duration-500",
	},
];

export default function ContactSection({
	title = "Meet Our Team",
}: ContactSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<section className="py-22 bg-neutral-950 h-screen">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8 pb-10 text-white">
					{title}
				</h2>
				<div className="flex grid-cols-3 gap-24 justify-center items-center">
					{people.map((person) => (
						<TiltedCard
							key={person.id}
							imageSrc={person.imageSrc}
							altText={person.altText}
							captionText={person.captionText}
							containerHeight="300px"
							containerWidth="300px"
							imageHeight="300px"
							imageWidth="300px"
							rotateAmplitude={12}
							scaleOnHover={1.2}
							showMobileWarning={false}
							showTooltip={true}
							displayOverlayContent={false} // ganda dikh rha
							overlayContent={
								<p className="tilted-card-demo-text">{person.captionText}</p>
							}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
