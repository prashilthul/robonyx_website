import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Code, Wrench, Brain } from "lucide-react";

const cardsData = [
	{
		id: 1,
		title: "Sentry Turrent",
		subtitle: "By: Ishaan Singh",
		description: "This project creates an intelligent, autonomous sentry gun system that uses computer vision and machine learning to detect, track, and aim at faces or objects in real-time. The system calculates the position of detected targets and sends precise angle commands to a servo-based pan/tilt mechanism, allowing it to aim a laser pointer, nerf gun, or airsoft gun at the target with high accuracy.",
		image: "/sentry_eugene_011.webp",
		github: "https://github.com/sim-daas/sentry-turret",
	},
	{
		id: 2,
		title: "Traffic Analysis",
		subtitle: "By: Ishaan Singh",
		description: "This project implements a comprehensive traffic analytics system using NVIDIA DeepStream for optimized inference, ROS2 for modularity, and PyQt6 for visualization. The system analyzes traffic patterns, vehicle crossings, lane occupation, and vehicle-type compliance with designated lanes.",
		image: "/TRAFFIC.jpg",
		github: "https://github.com/sim-daas/traffic-analytics",
	},
	{
		id: 3,
		title: "CNC Pen Plotter",
		subtitle: "By: Shreyash Rai",
		description: "This project involves creating a CNC pen plotter that can draw images and patterns with high precision.",
		image: "/CNC_pen_plotter.jpg",
	},
	{
		id: 4,
		title: "Arduino based robotic car, Basic RC plane & quad-copter.",
		subtitle: "By: Bind Vinod",
		description: "These projects are created using various sensors (like ultrasonic, gyroscope, and infrared) and actuators (motors, servos, and ESCs) commonly used in electronics. Most of the builds are powered by Arduino, a beginner-friendly microcontroller that is easy to program and integrate. Arduino allows quick prototyping with simple coding and wide hardware support. Each project whether a drone, RC plane, robotic car, or smart glass – applies basic principles of electronics, control systems, and automation. Components are connected, coded, and tested to achieve desired functions like movement, obstacle detection, or flight control. These small-scale prototypes provide hands-on learning and build a strong foundation for advanced embedded system projects in the future.",
		image: "/RC_plane.jpg",
	},
	{
		id: 5,
		title: "Water pollution monitoring IOT boat",
		subtitle: "By: Shourya and Shreyash",
		description: "The IoT-based water pollution monitoring boat is a low-cost, mobile system that floats on water and continuously measures key water quality parameters such as pH, turbidity, temperature, dissolved oxygen, and total dissolved solids using appropriate sensors. An ESP32 microcontroller is used as the central controller because of its built-in WiFi and processing power, which allows it to collect sensor readings and transmit them in real time to cloud platforms like Blynk, ThingSpeak, or Firebase for storage, visualization, and alerts. The boat is powered by rechargeable Li-ion batteries (optionally supported by solar panels) and uses DC motors with propellers, controlled through a motor driver, for navigation. The electronic components are kept in a waterproof casing while sensors are placed in contact with water for accurate readings. Users can monitor live data through a mobile app or web dashboard, receiving alerts when pollution levels exceed safe limits. The system can be further enhanced with GPS for location tracking, AI for pollution prediction, and autonomous navigation, making it useful for rivers, lakes, industrial wastewater monitoring, and environmental research.",
		image: "/workshop2.jpg",
	},
	{
		id: 6,
		title: "16 Bit CPU",
		subtitle: "By: Jayant Yadav",
		description: "This project creates a 16-bit CPU architecture using Verilog, focusing on basic ALU operations, memory management, and instruction decoding. The guide followed for this project is NAND2TETRIS, the simulations were done is iVerilog and GTKWave",
		image: "/cpu_placeholder.png",
		github: "https://github.com/Darkops-cpu/CPU_BUILD",
	},
	{
		id: 7,
		title: "PCB Designs",
		subtitle: "By: Jayant Yadav",
		description: "This project creates PCB designs for various electronic circuits and systems, focusing on best practices for layout, routing, and component placement. The designs are created using EasyEDA and KiCad and are intended for both educational purposes and practical applications.",
		image: "/pcb_placeholder.jpg",
		github: "https://github.com/Darkops-cpu/PCB_designs",
	},
];

export default function ProjectsSection() {
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

	useEffect(() => {
		if (selectedId !== null) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [selectedId]);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setSelectedId(null);
		}
	};

	return (
		<section className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center p-10">
			<div className="w-full max-w-7xl flex justify-between items-center mb-10 px-4 sm:px-0">
				<h1 className="text-4xl font-bold text-white tracking-wide">
					Projects
				</h1>
				<a
					href="https://github.com/prashilthul"
					target="_blank"
					rel="noopener noreferrer"
					className="text-emerald-500 border border-emerald-500 px-5 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition"
				>
					View All Projects
				</a>
			</div>

			<div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl w-full">
				{cardsData.map((card) => (
					<motion.div
						key={card.id}
						ref={(el) => {
							cardRefs.current[card.id] = el;
						}}
						className="cursor-pointer rounded-3xl shadow-lg overflow-hidden bg-gradient-to-tr from-gray-800 via-gray-900 to-black text-white flex flex-col w-full h-80"
						onClick={() => setSelectedId(card.id)}
						layoutId={`card-${card.id}`}
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", stiffness: 300, damping: 20 }}
						style={{
							position: "relative",
							zIndex: selectedId === card.id ? 100 : "auto",
						}}
					>
						<div className="relative w-full h-44">
							<Image
								src={card.image}
								alt={card.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 25vw"
							/>
						</div>
						<div className="p-5 flex flex-col flex-grow">
							<h3 className="text-xl font-semibold flex items-center gap-2">
								{card.title}
								{card.github && (
									<a href={card.github} target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-400 hover:text-emerald-500">
										<Github size={20} />
									</a>
								)}
							</h3>
							<p className="text-emerald-400 italic">{card.subtitle}</p>
						</div>
					</motion.div>
				))}

				<AnimatePresence>
					{selectedId !== null && (
						<motion.div
							key="expanded"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={handleOverlayClick}
							className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-6"
						>
							<motion.div
								layoutId={`card-${selectedId}`}
								initial={{ scale: 0.8 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0.8 }}
								transition={{ type: "spring", stiffness: 300, damping: 30 }}
								className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl overflow-hidden text-white max-w-3xl w-full max-h-[90vh] flex flex-col relative"
							>
								{(() => {
									const card = cardsData.find((c) => c.id === selectedId);
									if (!card) return null;
									return (
										<>
											<div className="relative w-full h-64">
												<Image
													src={card.image}
													alt={card.title}
													fill
													className="object-cover"
													sizes="(max-width: 768px) 100vw, 50vw"
												/>
											</div>
											<div className="p-8 flex flex-col overflow-auto">
												<h2 className="text-4xl font-bold mb-3 flex items-center gap-3">
													{card.title}
													{card.github && (
														<a href={card.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500">
															<Github size={28} />
														</a>
													)}
												</h2>
												<p className="text-emerald-500 italic mb-5">
													{card.subtitle}
												</p>
												<p className="text-gray-300 text-lg">
													{card.description}
												</p>
											</div>
										</>
									);
								})()}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
