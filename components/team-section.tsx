"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Wrench, Brain } from "lucide-react";
//just make the the teammembers  array bigger

const teamMembers = [
	{
		name: "Ishan Singh",
		role: "Club Head",
		specialization: "Computer Vision and ROS2",
		image: "/placeholder.svg?height=300&width=300",
		github: "#",
		linkedin: "#",
		email: "#",
		icon: Brain,
	},
	{
		name: "Jayant Yadav",
		role: "Club Vise Head",
		specialization: "Embedded System and Verilog",
		image: "/placeholder.svg?height=300&width=300",
		github: "#",
		linkedin: "#",
		email: "#",
		icon: Code,
	},
	{
		name: "Shourya",
		role: "Core",
		specialization: "Embedded systems",
		image: "/shourya.png",
		github: "#",
		linkedin: "#",
		email: "#",
		icon: Wrench,
	},
	{
		name: "Vinod Bind",
		role: "Core",
		specialization: "FGPA",
		image: "/vinod_bind.jpg",
		github: "#",
		linkedin: "#",
		email: "#",
		icon: Brain,
	},
	{
		name: "Shreya Rai",
		role: "Core",
		specialization: "Embedded System",
		image: "/Shreya_rai.jpg",
		github: "#",
		linkedin: "#",
		email: "#",
		icon: Code,
	},
	{
		name: "Prashil Thul2",
		role: "Web Developer",
		specialization: "idk bruh",
		image: "/placeholder.svg?height=300&width=300",
		github: "#",
		linkedin: "#",
		email: "#",
		icon: Wrench,
	},
];

export function TeamSection() {
	return (
		<section className="py-24 bg-black" id="team">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						Meet Our <span className="text-emerald-400">Team</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Passionate engineers and innovators driving the future of robotics
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-400/10 group-hover:scale-105">
								<div className="absolute top-4 right-4 p-2 bg-emerald-400/10 rounded-lg">
									<member.icon className="w-5 h-5 text-emerald-400" />
								</div>

								<div className="text-center">
									<div className="relative mb-6 mx-auto w-24 h-24">
										<div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-400/30 group-hover:border-emerald-400 transition-colors duration-300">
											<Image
												src={member.image || "/placeholder.svg"}
												alt={member.name}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-full"
											/>
										</div>
										<div className="absolute inset-0 rounded-full bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
									</div>

									<div className="mb-6">
										<h3 className="text-xl font-bold text-white mb-1">
											{member.name}
										</h3>
										<p className="text-emerald-400 font-medium mb-2">
											{member.role}
										</p>
										<p className="text-sm text-gray-400">
											{member.specialization}
										</p>
									</div>

									<div className="flex justify-center space-x-3">
										<a
											href={member.github}
											className="p-3 bg-gray-800/50 hover:bg-emerald-400/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-emerald-400/50"
										>
											<Github className="w-4 h-4 text-gray-400 hover:text-emerald-400 transition-colors" />
										</a>
										<a
											href={member.linkedin}
											className="p-3 bg-gray-800/50 hover:bg-emerald-400/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-emerald-400/50"
										>
											<Linkedin className="w-4 h-4 text-gray-400 hover:text-emerald-400 transition-colors" />
										</a>
										<a
											href={member.email}
											className="p-3 bg-gray-800/50 hover:bg-emerald-400/20 rounded-lg transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-emerald-400/50"
										>
											<Mail className="w-4 h-4 text-gray-400 hover:text-emerald-400 transition-colors" />
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
