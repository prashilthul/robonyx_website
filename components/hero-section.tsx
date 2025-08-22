// quote to add "The future runs on code, and we’re writing it."

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WordListSwap from "./ui/wordlist-swap";
import { LayoutGroup, motion } from "framer-motion";

export function HeroSection() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section
			id="home"
			className="min-h-screen bg-black relative overflow-hidden"
		>
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="w-full h-full object-cover "
				>
					<source src="/simple_background.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 bg-black/60" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10 flex">
				<div className="flex items-center min-h-[80vh] ">
					<div
						className={`space-y-6 md:space-y-8 max-w-2xl ${
							isVisible ? "animate-slide-in-up" : "opacity-0"
						}`}
					>
						<div className="space-y-6 md:space-y-8 max-w-2xl">
							<h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
								Bringing metal to life
							</h1>

							<LayoutGroup>
								<motion.p
									className="flex flex-wrap items-center whitespace-pre text-xl sm:text-2xl md:text-3xl font-medium text-white"
									layout={true}
								>
									<motion.span
										className="pt-0.5 sm:pt-1 md:pt-2"
										layout={true}
										transition={{ type: "spring", damping: 30, stiffness: 400 }}
									>
										We build with{" "}
									</motion.span>

									<WordListSwap
										texts={[
											"code.",
											"automation.",
											"intelligent machines.",
											"open-source innovation.",
										]}
										mainClassName="text-white px-2 sm:px-2 md:px-3 bg-emerald-500/80 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
										staggerFrom="last"
										initial={{ y: "100%" }}
										animate={{ y: 0 }}
										exit={{ y: "-120%" }}
										staggerDuration={0.025}
										splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
										transition={{ type: "spring", damping: 30, stiffness: 400 }}
										rotationInterval={2000}
									/>
								</motion.p>
							</LayoutGroup>

							{/* Supporting Text */}
							<p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
								Join our robotics and electronics club and help shape what&#39;s next.
								We turn bold ideas into real-world impact.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<Button
								size="lg"
								className="bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 group w-full sm:w-auto"
							>
								Join Our Club
								<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent w-full sm:w-auto"
							>
								View Projects
							</Button>
						</div>
					</div>

					<div className="hidden md:flex flex-1 justify-center items-center">
						{/* <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-lg overflow-hidden border-2 border-emerald-400/30"> */}
						{/* <div className="relative w-96 h-96 lg:w-156 lg:h-104 rounded-lg overflow-hidden border-2 border-emerald-400/30"> */}
						{/* <div className="relative w-96 h-96 lg:w-156 lg:h-104 rounded-lg overflow-hidden border-2 border-emerald-400/30 md:ml-8">
							<video
								autoPlay
								muted
								loop
								playsInline
								className="w-full h-full object-cover z-[10]"
							>
								<source src="/smalllvid.mp4" type="video/mp4" />
							</video>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-4 left-4 right-4">
								<p className="text-white text-sm font-medium">
									Some random text
								</p>
								<p className="text-emerald-400 text-xs">another random text</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
