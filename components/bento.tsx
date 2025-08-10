// src/components/BentoTransformer.jsx
"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BentoTransformer = () => {
	const containerRef = useRef(null);
	const verticalRef1 = useRef(null);
	const horizontalRef1 = useRef(null);
	const horizontalRef2 = useRef(null);
	const verticalRef2 = useRef(null);
	const smallVerticalRef1 = useRef(null);
	const smallVerticalRef2 = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const vertical1 = verticalRef1.current;
		const vertical2 = verticalRef2.current;
		const horizontal1 = horizontalRef1.current;
		const horizontal2 = horizontalRef2.current;
		const smallVertical1 = smallVerticalRef1.current;
		const smallVertical2 = smallVerticalRef2.current;
		const text = textRef.current;

		if (
			!container ||
			!vertical1 ||
			!vertical2 ||
			!horizontal1 ||
			!horizontal2 ||
			!smallVertical1 ||
			!smallVertical2
		) {
			console.log("Not all refs are available, skipping animation.");
			return;
		}

		gsap.set([vertical1, vertical2], { xPercent: 0 });
		gsap.set([horizontal1, horizontal2], { opacity: 0 });
		gsap.set([smallVertical1, smallVertical2], {
			opacity: 0,
			y: "0%",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "center 95%",
				end: "top 20%",
				scrub: 1,
				// markers: true,
			},
		});

		tl.to(
			vertical1,
			{
				xPercent: -175,
				ease: "power1.out",
			},
			0
		)
			.to(
				vertical2,
				{
					xPercent: 175,
					ease: "power1.out",
				},
				"<"
			)
			.to(
				[horizontal1, horizontal2],
				{
					opacity: 1,
					ease: "power1.in",
					stagger: 0.2,
				},
				"-=0.2"
			)
			.to(
				vertical1,
				{
					scaleY: 0.75,
					transformOrigin: "top",
					ease: "power1.in",
				},
				"<"
			)
			.to(
				vertical2,
				{
					scaleY: 0.75,
					transformOrigin: "bottom",
					ease: "power1.in",
				},
				"<"
			)
			.to(
				smallVertical2,
				{
					yPercent: "+=100",
					ease: "power1.in",
					opacity: 1,
				},
				"<"
			)
			.to(
				smallVertical1,
				{
					yPercent: "-=100",
					ease: "power1.in",
					opacity: 1,
				},
				"<"
			);

		// This does work nicely for a  cleanup function
		return () => {
			tl.kill();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section className="min-h-screen p-8 flex items-center justify-center bg-gray-950">
			<div
				ref={containerRef}
				className="relative w-full max-w-5xl h-[80vh] flex flex-row gap-4 justify-between"
			>
				<div
					ref={verticalRef1}
					className="left-[25%] absolute w-[35%] h-full bg-gray-900 rounded-3xl z-[3]"
				></div>
				<div
					ref={smallVerticalRef1}
					className="-left-[36%] top-[100%] absolute w-[35%] h-[23%] bg-gray-400 rounded-3xl z-[3]"
				>
					<Image
						src="/workshop1.jpg"
						alt="Manas"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div
					ref={verticalRef2}
					className="right-[25%] absolute w-[35%] h-full bg-gray-900 rounded-3xl z-[3]"
				></div>
				<div
					ref={smallVerticalRef2}
					className="-right-[36%] -top-[23%] absolute w-[35%] h-[23%] bg-gray-400 rounded-3xl z-[3]"
				>
					<Image
						src="/workshop4.jpg"
						alt="Manas"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				<div className="relative w-full h-full flex flex-col gap-4">
					<div
						ref={horizontalRef1}
						className="flex-1 h-full w-full rounded-3xl bg-emerald-600 z-[2]"
					></div>
					<div
						ref={horizontalRef2}
						className="flex-1 h-full w-full rounded-3xl bg-emerald-600 z-[2]"
					></div>
				</div>
			</div>
		</section>
	);
};

export default BentoTransformer;
