"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, Youtube, BookOpen } from "lucide-react";

interface ResourceNode {
	id: string;
	title: string;
	type: "youtube" | "github" | "documentation";
	url: string;
	description: string;
	x: number;
	y: number;
	connections: string[];
}

const resources: ResourceNode[] = [
	{
		id: "arduino-basics",
		title: "Arduino Fundamentals",
		type: "youtube",
		url: "https://youtube.com/watch?v=example",
		description: "Learn the basics of Arduino programming",
		x: 200,
		y: 150,
		connections: ["robot-control", "sensors-guide"],
	},
	{
		id: "robot-control",
		title: "Robot Control Systems",
		type: "github",
		url: "https://github.com/robotics-club/control-systems",
		description: "Open source robot control algorithms",
		x: 400,
		y: 100,
		connections: ["arduino-basics", "ai-integration"],
	},
	{
		id: "sensors-guide",
		title: "Sensor Integration",
		type: "documentation",
		url: "https://docs.example.com/sensors",
		description: "Complete guide to robotics sensors",
		x: 150,
		y: 300,
		connections: ["arduino-basics", "computer-vision"],
	},
	{
		id: "ai-integration",
		title: "AI in Robotics",
		type: "youtube",
		url: "https://youtube.com/watch?v=ai-example",
		description: "Integrating AI with robotic systems",
		x: 600,
		y: 200,
		connections: ["robot-control", "computer-vision"],
	},
	{
		id: "computer-vision",
		title: "Computer Vision",
		type: "github",
		url: "https://github.com/robotics-club/vision",
		description: "Computer vision for robotics applications",
		x: 350,
		y: 350,
		connections: ["sensors-guide", "ai-integration"],
	},
];

export function ResourcesSection() {
	const [selectedNode, setSelectedNode] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const getIcon = (type: string) => {
		switch (type) {
			case "youtube":
				return <Youtube className="w-4 h-4" />;
			case "github":
				return <Github className="w-4 h-4" />;
			case "documentation":
				return <BookOpen className="w-4 h-4" />;
			default:
				return <ExternalLink className="w-4 h-4" />;
		}
	};

	const getTypeColor = (type: string) => {
		switch (type) {
			case "youtube":
				return "border-red-500 bg-red-500/10 text-red-400";
			case "github":
				return "border-accent bg-accent/10 text-accent";
			case "documentation":
				return "border-blue-500 bg-blue-500/10 text-blue-400";
			default:
				return "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground";
		}
	};

	return (
		<section id="resources" className="py-20 bg-secondary/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`text-center mb-16 ${
						isVisible ? "animate-slide-in-up" : "opacity-0"
					}`}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
						Knowledge <span className="text-accent">Resources</span>
					</h2>
					<p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
						Explore our interconnected learning resources. Click on nodes to
						discover connections and dive deeper into robotics knowledge.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					<div
						className={`relative ${
							isVisible ? "animate-fade-in-scale" : "opacity-0"
						}`}
						style={{ animationDelay: "0.2s" }}
					>
						<div className="bg-primary/50 rounded-2xl border border-accent/20 p-8 min-h-[500px] relative overflow-hidden">
							<h3 className="text-xl font-semibold text-primary-foreground mb-6 text-center">
								Interactive Knowledge Graph
							</h3>

							<svg
								className="absolute inset-0 w-full h-full pointer-events-none"
								style={{ zIndex: 1 }}
							>
								{resources.map((node) =>
									node.connections.map((connectionId) => {
										const connectedNode = resources.find(
											(r) => r.id === connectionId
										);
										if (!connectedNode) return null;

										return (
											<line
												key={`${node.id}-${connectionId}`}
												x1={node.x}
												y1={node.y}
												x2={connectedNode.x}
												y2={connectedNode.y}
												stroke="rgb(16 185 129 / 0.3)"
												strokeWidth="2"
												className={
													selectedNode === node.id ||
													selectedNode === connectionId
														? "opacity-100"
														: "opacity-30"
												}
											/>
										);
									})
								)}
							</svg>

							{resources.map((resource, index) => (
								<div
									key={resource.id}
									className={`absolute cursor-pointer transition-all duration-300 hover:scale-110 ${
										selectedNode === resource.id ? "scale-110 z-10" : "z-5"
									}`}
									style={{
										left: resource.x,
										top: resource.y,
										animationDelay: `${index * 0.1}s`,
									}}
									onClick={() =>
										setSelectedNode(
											selectedNode === resource.id ? null : resource.id
										)
									}
								>
									<div
										className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getTypeColor(
											resource.type
										)} animate-float`}
									>
										{getIcon(resource.type)}
									</div>
									<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary-foreground/60 whitespace-nowrap">
										{resource.title}
									</div>
								</div>
							))}
						</div>
					</div>

					<div
						className={`space-y-6 ${
							isVisible ? "animate-slide-in-right" : "opacity-0"
						}`}
						style={{ animationDelay: "0.4s" }}
					>
						{selectedNode ? (
							<Card className="bg-primary/30 border-accent/20">
								<CardHeader>
									<CardTitle className="flex items-center gap-2 text-primary-foreground">
										{getIcon(
											resources.find((r) => r.id === selectedNode)?.type || ""
										)}
										{resources.find((r) => r.id === selectedNode)?.title}
									</CardTitle>
									<CardDescription className="text-primary-foreground/70">
										{resources.find((r) => r.id === selectedNode)?.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button
										className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
										onClick={() =>
											window.open(
												resources.find((r) => r.id === selectedNode)?.url,
												"_blank"
											)
										}
									>
										<ExternalLink className="w-4 h-4 mr-2" />
										Open Resource
									</Button>
								</CardContent>
							</Card>
						) : (
							<Card className="bg-primary/30 border-accent/20">
								<CardHeader>
									<CardTitle className="text-primary-foreground">
										Select a Resource
									</CardTitle>
									<CardDescription className="text-primary-foreground/70">
										Click on any node in the knowledge graph to explore our
										learning resources and see how they connect to each other.
									</CardDescription>
								</CardHeader>
							</Card>
						)}

						<div className="grid grid-cols-1 gap-4">
							<Card className="bg-red-500/10 border-red-500/20">
								<CardContent className="p-4">
									<div className="flex items-center gap-2 text-red-400">
										<Youtube className="w-5 h-5" />
										<span className="font-medium">Video Tutorials</span>
									</div>
									<p className="text-sm text-primary-foreground/60 mt-1">
										Step-by-step video guides and demonstrations
									</p>
								</CardContent>
							</Card>

							<Card className="bg-accent/10 border-accent/20">
								<CardContent className="p-4">
									<div className="flex items-center gap-2 text-accent">
										<Github className="w-5 h-5" />
										<span className="font-medium">Code Repositories</span>
									</div>
									<p className="text-sm text-primary-foreground/60 mt-1">
										Open source projects and code examples
									</p>
								</CardContent>
							</Card>

							<Card className="bg-blue-500/10 border-blue-500/20">
								<CardContent className="p-4">
									<div className="flex items-center gap-2 text-blue-400">
										<BookOpen className="w-5 h-5" />
										<span className="font-medium">Documentation</span>
									</div>
									<p className="text-sm text-primary-foreground/60 mt-1">
										Comprehensive guides and technical documentation
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
