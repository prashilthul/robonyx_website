import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";

import ScrollReveal from "./ui/scrolltest";
import CircleIconWithText from "./ui/badge";

import solution from "@/public/Solution.json";
import analytics from "@/public/analytics.json";
import reseller from "@/public/Reseller.json";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const FeaturesSection: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
	const textRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.set(iconsRef.current, {
			opacity: 0,
			y: 100,
		});

		ScrollTrigger.create({
			trigger: containerRef.current,
			start: "top top",
			end: "bottom bottom",
			onEnter: () => (document.body.style.overflow = "hidden"),
			onLeave: () => (document.body.style.overflow = "auto"),
			onEnterBack: () => (document.body.style.overflow = "hidden"),
			onLeaveBack: () => (document.body.style.overflow = "auto"),
			scrub: true,
			markers: false,
		});
		const totalIcons = 3;
		const radius = 125;

		iconsRef.current.forEach((icon, index) => {
			const angle = (index / totalIcons) * 2 * Math.PI;
			const x = radius * Math.cos(angle);
			const y = radius * Math.sin(angle);

			gsap.fromTo(
				icon,
				{
					opacity: 0,
					y: 100,
				},
				{
					opacity: 1,
					x: x,
					y: y,
					stagger: 0.2,
					duration: 0.7,
					ease: "power3.out",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 45%",
						end: "top -15%",
						toggleActions: "play reverse play reverse",
						markers: false,
					},
				}
			);
		});

		return () => {
			gsap.killTweensOf(iconsRef.current); // Cleaning up animation when the component unmounts
		};
	}, []);
	useEffect(() => {
		if (textRef.current) {
			const split = new SplitText(textRef.current, { type: "lines" });

			gsap.fromTo(
				split.lines,

				{
					opacity: 0,
					y: 100,
				},
				{
					opacity: 1,
					y: 0,
					stagger: 0.25,
					duration: 0.7,
					ease: "power3.out",
					scrollTrigger: {
						trigger: textRef.current,
						start: "top 80%",
						end: "top 25%",
						toggleActions: "play reverse play none",
						// markers: true,
					},
				}
			);

			return () => {
				split.revert();
			};
		}
	}, []);

	return (
		<section className="pb-32 relative h-screen">
			<div
				ref={containerRef}
				className="w-screen  h-[90vh] flex relative lg:flex-row sm:flex-col items-center"
			>
				<div className="w-[55%] flex items-start justify-center flex-wrap sm:pb-72">
					<div
						style={{ position: "absolute" }}
						ref={(el) => {
							iconsRef.current[0] = el;
						}}
						className="icon-container flex items-center justify-center m-5"
					>
						<CircleIconWithText
							icon={
								<Lottie
									animationData={solution}
									loop={true}
									style={{ width: 120, height: 120 }}
								/>
							}
							text=""
						/>
					</div>
					<div
						style={{ position: "absolute" }}
						ref={(el) => {
							iconsRef.current[1] = el;
						}}
						className="icon-container flex items-center justify-center m-5"
					>
						<CircleIconWithText
							icon={
								<Lottie
									animationData={reseller}
									loop={true}
									style={{ width: 120, height: 120 }}
								/>
							}
							text=""
						/>
					</div>
					<div
						style={{ position: "absolute" }}
						ref={(el) => {
							iconsRef.current[2] = el;
						}}
						className="icon-container flex items-center justify-center m-5"
					>
						<CircleIconWithText
							icon={
								<Lottie
									animationData={analytics}
									loop={true}
									style={{ width: 120, height: 120 }}
								/>
							}
							text=""
						/>
					</div>
				</div>
				<div
					ref={textRef}
					className="w-[50%] flex items-center justify-center pr-9 text-5xl tracking-wide leading-26"
				>
					This club will probably be the best club evev idont know what to say
					about this club its amagon
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
