// quote to add "The future runs on code, and we’re writing it."

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Target } from "lucide-react";

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
					className="w-full h-full object-cover opacity-50"
				>
					<source src="/smalllvid.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 bg-black/60" />
			</div>

			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10 flex justify-end">
				<div className="flex items-center min-h-[80vh] bor">
					<div
						className={`space-y-6 md:space-y-8 max-w-2xl ${
							isVisible ? "animate-slide-in-up" : "opacity-0"
						}`}
					>
						<div className="space-y-3 md:space-y-4">
							<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-right ">
								Where <span className="text-emerald-400">metal</span>
								<br />
								is brought
								<br />
								to <span className="text-emerald-400">life</span>.
							</h1>

							<p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed text-right">
								Join our college robotics club and explore the future of AI and
								automation. Build intelligent systems, program robotic
								solutions, and create innovative mechanical assemblies.
							</p>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
							<div className="flex items-center space-x-2 text-emerald-400">
								<Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
								<span className="text-white text-sm sm:text-base">
									Innovation
								</span>
							</div>
							<div className="flex items-center space-x-2 text-emerald-400">
								<Zap className="w-5 h-5 sm:w-6 sm:h-6" />
								<span className="text-white text-sm sm:text-base">
									Efficiency
								</span>
							</div>
							<div className="flex items-center space-x-2 text-emerald-400">
								<Target className="w-5 h-5 sm:w-6 sm:h-6" />
								<span className="text-white text-sm sm:text-base">
									Problem-solving
								</span>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
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
