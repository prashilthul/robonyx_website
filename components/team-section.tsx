"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Wrench, Brain } from "lucide-react";
//just make the the teammembers  array bigger

const teamMembers = [
	{
		name: "Ishaan Singh",
		role: "Head",
		specialization: "Edge computing & computer vision",
		image: "/ishaan_mog.jpg?height=300&width=300",
		github: "https://www.github.com/sim-daas",
		linkedin: "https://www.linkedin.com/in/i-a7b715324/",
		email: "ishaan24101@iiitnr.edu.in",
		icon: Brain,
	},
	{
		name: "Jayant Yadav",
		role: "Vise Head",
		specialization: "Embedded System & CPU Architecture",
		image: "/jayant_pfp.png?height=300&width=300",
		github: "https://github.com/Darkops-cpu",
		linkedin: "https://www.linkedin.com/in/jayant-yadav-47701a312/",
		email: "jayant24101@iiitnr.edu.in",
		icon: Code,
	},
	{
		name: "Prashil Thul",
		role: "Web Developer",
		specialization: "Ros2 & Gazebo simulation",
		image: "/prash_vector.jpg?height=300&width=300",
		github: "https://github.com/prashilthul",
		linkedin: "https://www.linkedin.com/in/prashil-thul-9424a9211/",
		email: "prashil24101@iiitnr.edu.in",
		icon: Wrench,
	},
	{
		name: "Bind Vinod",
		role: "Core Member",
		specialization: "Sensors & Actuators",
		image: "/binod.jpg?height=300&width=300",
		github: "#",
		linkedin:
			"https://www.linkedin.com/in/vinod-bind-8a7a6b32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		email: "bind24101@iiitnr.edu.in",
		icon: Brain,
	},
	{
		name: "Rohan Maheswari",
		role: "Core Member",
		specialization: "Design & Prototyping",
		image: "/default.png?height=300&width=300",
		github: "#",
		linkedin:
			"https://www.linkedin.com/in/rohan-maheshwari-65b03632a?trk=contact-info",
		email: "rohan24101@iiitnr.edu.in",
		icon: Code,
	},
	{
		name: "Shreyash Rai",
		role: "Core Member",
		specialization: "CAD and Design",
		image: "/Shreya_rai.jpg?height=300&width=300",
		github: "https://www.github.com/ItsMat78",
		linkedin: "https://www.linkedin.com/in/shreyash-rai-3aa123251/",
		email: "shreyash24101@iiitnr.edu.in",
		icon: Wrench,
	},
	{
		name: "Shourya Vaid Jain",
		role: "Core Member",
		specialization: "IoT",
		image: "/default.png?height=300&width=300",
		github: "#",
		linkedin:
			"https://www.linkedin.com/in/shourya-vaidhya-jain-80a576329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		email: "shourya24101@iiitnr.edu.in",
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
						and electronics.
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
											// href={member.email}
											href={`mailto:${member.email}`}
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
