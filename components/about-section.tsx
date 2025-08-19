"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Lightbulb, Rocket } from "lucide-react";
const features = [
	{
		icon: Users,
		title: "Collaborative Learning",
		description:
			"Work alongside passionate students from diverse engineering backgrounds to tackle complex robotics challenges.",
	},
	{
		icon: Trophy,
		title: "Competitions",
		description:
			"Participate in national and international robotics competitions, showcasing our innovative solutions.",
	},
	{
		icon: Lightbulb,
		title: "Innovation Hub",
		description:
			"Access cutting-edge equipment and resources to bring your most ambitious robotics ideas to life.",
	},
	{
		icon: Rocket,
		title: "Future Ready",
		description:
			"Develop skills in AI, machine learning, and autonomous systems that define the future of technology.",
	},
];

export function AboutSection() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("about");
		if (element) observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<section id="about" className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 ${
						isVisible ? "animate-slide-in-up" : "opacity-0"
					}`}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						About Robonyx Club
					</h2>
					<p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
						We are a passionate community of students dedicated to pushing the
						boundaries of robotics and automation. Our mission is to foster
						innovation, collaboration, and technical excellence in the field of
						robotics.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className={`border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
								isVisible ? "animate-fade-in-scale" : "opacity-0"
							}`}
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardContent className="p-6 text-center">
								<div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
									<feature.icon className="w-8 h-8 text-accent" />
								</div>
								<h3 className="text-xl font-semibold text-foreground mb-3">
									{feature.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<div
					className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${
						isVisible ? "animate-slide-in-up" : "opacity-0"
					}`}
					style={{ animationDelay: "0.5s" }}
				>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-accent mb-2">
							50+
						</div>
						<div className="text-muted-foreground">Active Members</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-accent mb-2">
							15+
						</div>
						<div className="text-muted-foreground">Projects Completed</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-accent mb-2">
							2
						</div>
						<div className="text-muted-foreground">Competition Wins</div>
					</div>
					<div className="text-center">
						<div className="text-3xl md:text-4xl font-bold text-accent mb-2">
							3
						</div>
						<div className="text-muted-foreground">Years Running</div>
					</div>
				</div>
			</div>
		</section>
	);
}
