"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/navbar";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Node {
	id: string;
	label: string;
	x: number;
	y: number;
	vx: number;
	vy: number;
	connections: string[];
	radius: number;
	mass: number;
	notes: string;
}

interface Connection {
	from: string;
	to: string;
	strength: number;
}

export default function GraphPage() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number | null>(null);
	const [hoveredNode, setHoveredNode] = useState<string | null>(null);
	const [selectedNode, setSelectedNode] = useState<string | null>(null);
	const [nodes, setNodes] = useState<Node[]>([]);
	const [connections, setConnections] = useState<Connection[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const [dragNode, setDragNode] = useState<string | null>(null);
	const [showSidebar, setShowSidebar] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [expandedResource, setExpandedResource] = useState<string | null>(null);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		const nodeData = [
			{
				id: "ai",
				label: "Artificial Intelligence",
				connections: ["ml", "sensors", "control", "vision"],
				radius: 35,
				notes:
					"AI forms the brain of our robotics systems. We explore neural networks, decision-making algorithms, and autonomous behavior patterns. Our research focuses on creating robots that can adapt to new environments and learn from experience.",
			},
			{
				id: "sensors",
				label: "Sensors",
				connections: ["ai", "mechanics", "control", "vision"],
				radius: 30,
				notes:
					"Sensors are the eyes and ears of robots. We work with LiDAR, ultrasonic sensors, IMUs, and environmental sensors. Understanding sensor fusion and data processing is crucial for creating aware robotic systems.",
			},
			{
				id: "mechanics",
				label: "Mechanics",
				connections: ["sensors", "control", "automation", "actuators"],
				radius: 32,
				notes:
					"The physical foundation of robotics. We study kinematics, dynamics, material science, and structural design. From 3D printing custom parts to understanding gear ratios and joint mechanisms.",
			},
			{
				id: "control",
				label: "Control Systems",
				connections: ["ai", "sensors", "mechanics", "ml", "navigation"],
				radius: 34,
				notes:
					"Control systems bridge the gap between planning and action. We implement PID controllers, state machines, and feedback loops. This includes motor control, system stability, and real-time response optimization.",
			},
			{
				id: "ml",
				label: "Machine Learning",
				connections: ["ai", "control", "vision", "data"],
				radius: 33,
				notes:
					"Machine learning enables robots to improve over time. We implement reinforcement learning, supervised learning for object recognition, and unsupervised learning for pattern discovery in robotic applications.",
			},
			{
				id: "vision",
				label: "Computer Vision",
				connections: ["ml", "sensors", "navigation", "ai"],
				radius: 31,
				notes:
					"Computer vision allows robots to see and understand their environment. We work with OpenCV, object detection, SLAM algorithms, and real-time image processing for navigation and manipulation tasks.",
			},
			{
				id: "navigation",
				label: "Navigation",
				connections: ["vision", "control", "mapping", "sensors"],
				radius: 30,
				notes:
					"Navigation systems enable autonomous movement. We implement path planning algorithms, obstacle avoidance, GPS integration, and indoor positioning systems for various robotic platforms.",
			},
			{
				id: "mapping",
				label: "Mapping",
				connections: ["navigation", "sensors", "data"],
				radius: 28,
				notes:
					"Mapping creates spatial understanding for robots. We work with SLAM (Simultaneous Localization and Mapping), occupancy grids, and 3D environment reconstruction using various sensor modalities.",
			},
			{
				id: "automation",
				label: "Automation",
				connections: ["mechanics", "control", "actuators"],
				radius: 29,
				notes:
					"Automation focuses on creating self-operating systems. We design workflows, implement industrial automation principles, and create systems that can operate with minimal human intervention.",
			},
			{
				id: "actuators",
				label: "Actuators",
				connections: ["mechanics", "automation", "control"],
				radius: 27,
				notes:
					"Actuators are the muscles of robots. We work with servo motors, stepper motors, pneumatic systems, and hydraulic actuators. Understanding torque, speed, and precision control is essential.",
			},
			{
				id: "data",
				label: "Data Processing",
				connections: ["ml", "mapping", "ai"],
				radius: 30,
				notes:
					"Data processing handles the massive amounts of information robots generate. We implement real-time data pipelines, sensor fusion algorithms, and efficient data storage and retrieval systems.",
			},
			{
				id: "communication",
				label: "Communication",
				connections: ["control", "data"],
				radius: 26,
				notes:
					"Communication enables robots to work together and with humans. We implement wireless protocols, robot-to-robot communication, human-robot interfaces, and remote monitoring systems.",
			},
		];

		const canvas = canvasRef.current;
		if (!canvas) return;

		const centerX = canvas.width / 2;
		const centerY = canvas.height / 2;
		const radius = Math.min(canvas.width, canvas.height) * 0.25;

		const initialNodes: Node[] = nodeData.map((node, index) => {
			const angle = (index / nodeData.length) * 2 * Math.PI;
			return {
				...node,
				x: centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * 150,
				y: centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * 150,
				vx: 0,
				vy: 0,
				mass: node.radius / 10,
			};
		});

		const initialConnections: Connection[] = [];
		nodeData.forEach((node) => {
			node.connections.forEach((connectionId) => {
				if (
					!initialConnections.some(
						(c) =>
							(c.from === node.id && c.to === connectionId) ||
							(c.from === connectionId && c.to === node.id)
					)
				) {
					const strength =
						(node.radius +
							(nodeData.find((n) => n.id === connectionId)?.radius || 15)) /
						40;
					initialConnections.push({
						from: node.id,
						to: connectionId,
						strength,
					});
				}
			});
		});

		setNodes(initialNodes);
		setConnections(initialConnections);
	}, []);

	const updatePhysics = useCallback(
		(nodes: Node[], canvas: HTMLCanvasElement) => {
			const damping = 0.85;
			const repulsionStrength = 8000;
			const attractionStrength = 0.02;
			const centerForce = 0.0005;

			return nodes.map((node) => {
				if (dragNode === node.id) return node; // Don't apply physics to dragged node

				let fx = 0,
					fy = 0;

				// Repulsion from other nodes (stronger)
				nodes.forEach((other) => {
					if (other.id !== node.id) {
						const dx = node.x - other.x;
						const dy = node.y - other.y;
						const distance = Math.sqrt(dx * dx + dy * dy);
						if (distance > 0 && distance < 300) {
							const force = repulsionStrength / (distance * distance);
							fx += (dx / distance) * force;
							fy += (dy / distance) * force;
						}
					}
				});

				// Attraction to connected nodes
				node.connections.forEach((connId) => {
					const connected = nodes.find((n) => n.id === connId);
					if (connected) {
						const dx = connected.x - node.x;
						const dy = connected.y - node.y;
						const distance = Math.sqrt(dx * dx + dy * dy);
						const idealDistance = 120 + (node.radius + connected.radius);
						const force = (distance - idealDistance) * attractionStrength;
						if (distance > 0) {
							fx += (dx / distance) * force;
							fy += (dy / distance) * force;
						}
					}
				});

				// Center attraction (weaker)
				const centerX = canvas.width / 2;
				const centerY = canvas.height / 2;
				const dx = centerX - node.x;
				const dy = centerY - node.y;
				fx += dx * centerForce;
				fy += dy * centerForce;

				// Update velocity and position
				node.vx = (node.vx + fx / node.mass) * damping;
				node.vy = (node.vy + fy / node.mass) * damping;

				// Boundary constraints with padding
				const padding = node.radius + 20;
				const newX = Math.max(
					padding,
					Math.min(canvas.width - padding, node.x + node.vx)
				);
				const newY = Math.max(
					padding,
					Math.min(canvas.height - padding, node.y + node.vy)
				);

				return {
					...node,
					x: newX,
					y: newY,
				};
			});
		},
		[dragNode]
	);

	const render = useCallback(
		(
			ctx: CanvasRenderingContext2D,
			nodes: Node[],
			connections: Connection[]
		) => {
			const gradient = ctx.createRadialGradient(
				ctx.canvas.width / 2,
				ctx.canvas.height / 2,
				0,
				ctx.canvas.width / 2,
				ctx.canvas.height / 2,
				Math.max(ctx.canvas.width, ctx.canvas.height) / 2
			);
			gradient.addColorStop(0, "#000000");
			gradient.addColorStop(1, "#111111");
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			connections.forEach((conn) => {
				const fromNode = nodes.find((n) => n.id === conn.from);
				const toNode = nodes.find((n) => n.id === conn.to);

				if (fromNode && toNode) {
					const isHighlighted =
						hoveredNode &&
						(fromNode.id === hoveredNode || toNode.id === hoveredNode);
					const isSelected =
						selectedNode &&
						(fromNode.id === selectedNode || toNode.id === selectedNode);

					ctx.strokeStyle = isSelected
						? "#ffffff"
						: isHighlighted
						? "#cccccc"
						: "#555555";
					ctx.lineWidth = isSelected ? 4 : isHighlighted ? 3 : 2;
					ctx.globalAlpha = isSelected ? 1 : isHighlighted ? 0.9 : 0.7;

					if (isHighlighted || isSelected) {
						ctx.shadowColor = "#ffffff";
						ctx.shadowBlur = isSelected ? 10 : 5;
					} else {
						ctx.shadowBlur = 0;
					}

					ctx.beginPath();
					ctx.moveTo(fromNode.x, fromNode.y);
					ctx.lineTo(toNode.x, toNode.y);
					ctx.stroke();
				}
			});

			ctx.shadowBlur = 0;
			ctx.globalAlpha = 1;

			nodes.forEach((node) => {
				const isHovered = node.id === hoveredNode;
				const isSelected = node.id === selectedNode;
				const isConnected =
					hoveredNode && node.connections.includes(hoveredNode);

				if (isSelected || isHovered) {
					ctx.beginPath();
					ctx.arc(node.x, node.y, node.radius + 8, 0, 2 * Math.PI);
					ctx.fillStyle = isSelected
						? "rgba(255,255,255,0.2)"
						: "rgba(255,255,255,0.1)";
					ctx.fill();
				}

				ctx.beginPath();
				ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);

				if (isSelected) {
					ctx.fillStyle = "#ffffff";
				} else if (isHovered) {
					ctx.fillStyle = "#eeeeee";
				} else if (isConnected) {
					ctx.fillStyle = "#aaaaaa";
				} else {
					ctx.fillStyle = "#666666";
				}

				ctx.fill();

				ctx.strokeStyle = "#ffffff";
				ctx.lineWidth = isSelected ? 3 : isHovered ? 2 : 1;
				ctx.stroke();

				ctx.fillStyle = isSelected || isHovered ? "#000000" : "#ffffff";
				ctx.font = `${
					isSelected ? "12px" : isHovered ? "11px" : "10px"
				} var(--font-orbitron), monospace`;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";

				if (!isSelected && !isHovered) {
					ctx.shadowColor = "#000000";
					ctx.shadowBlur = 3;
					ctx.shadowOffsetX = 1;
					ctx.shadowOffsetY = 1;
				}

				ctx.fillText(node.label, node.x, node.y);
				ctx.shadowBlur = 0;
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
			});
		},
		[hoveredNode, selectedNode]
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const animate = () => {
			setNodes((prevNodes) => {
				const updatedNodes = updatePhysics(prevNodes, canvas);
				render(ctx, updatedNodes, connections);
				return updatedNodes;
			});

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [connections, updatePhysics, render]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const getMousePos = (event: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			return {
				x: event.clientX - rect.left,
				y: event.clientY - rect.top,
			};
		};

		const handleMouseMove = (event: MouseEvent) => {
			const mousePos = getMousePos(event);

			if (isDragging && dragNode) {
				setNodes((prevNodes) =>
					prevNodes.map((node) =>
						node.id === dragNode
							? { ...node, x: mousePos.x, y: mousePos.y, vx: 0, vy: 0 }
							: node
					)
				);
				return;
			}

			let foundNode: string | null = null;
			nodes.forEach((node) => {
				const distance = Math.sqrt(
					(mousePos.x - node.x) ** 2 + (mousePos.y - node.y) ** 2
				);
				if (distance < node.radius + 5) {
					foundNode = node.id;
				}
			});

			setHoveredNode(foundNode);
			canvas.style.cursor = foundNode ? "pointer" : "default";
		};

		const handleMouseDown = (event: MouseEvent) => {
			const mousePos = getMousePos(event);

			let foundNode: string | null = null;
			nodes.forEach((node) => {
				const distance = Math.sqrt(
					(mousePos.x - node.x) ** 2 + (mousePos.y - node.y) ** 2
				);
				if (distance < node.radius + 5) {
					foundNode = node.id;
				}
			});

			if (foundNode) {
				setIsDragging(true);
				setDragNode(foundNode);
				setSelectedNode(foundNode);
				setShowSidebar(true);
			} else {
				setSelectedNode(null);
				setShowSidebar(false);
			}
		};

		const handleMouseUp = () => {
			setIsDragging(false);
			setDragNode(null);
		};

		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mousedown", handleMouseDown);
		canvas.addEventListener("mouseup", handleMouseUp);

		return () => {
			canvas.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("mousedown", handleMouseDown);
			canvas.removeEventListener("mouseup", handleMouseUp);
		};
	}, [nodes, isDragging, dragNode]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const resizeCanvas = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = window.devicePixelRatio || 1;

			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;

			const ctx = canvas.getContext("2d");
			if (ctx) {
				ctx.scale(dpr, dpr);
			}

			canvas.style.width = rect.width + "px";
			canvas.style.height = rect.height + "px";
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		return () => window.removeEventListener("resize", resizeCanvas);
	}, []);

	const MobileResources = () => (
		<div className="p-4 space-y-4">
			<div className="text-center mb-6">
				<h1 className="text-2xl font-bold text-emerald-400 mb-2">
					Robonyx Resources
				</h1>
				<p className="text-gray-300 text-sm">
					Explore our robotics technologies and research areas
				</p>
			</div>

			<div className="space-y-3">
				{nodes.map((node) => (
					<div
						key={node.id}
						className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden"
					>
						<button
							onClick={() =>
								setExpandedResource(
									expandedResource === node.id ? null : node.id
								)
							}
							className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
						>
							<div>
								<h3 className="font-semibold text-white">{node.label}</h3>
								<p className="text-sm text-gray-400 mt-1">
									Connected to {node.connections.length} technologies
								</p>
							</div>
							{expandedResource === node.id ? (
								<ChevronUp className="w-5 h-5 text-emerald-400" />
							) : (
								<ChevronDown className="w-5 h-5 text-emerald-400" />
							)}
						</button>

						<div
							className={`transition-all duration-300 ease-in-out overflow-hidden ${
								expandedResource === node.id
									? "max-h-96 opacity-100"
									: "max-h-0 opacity-0"
							}`}
						>
							<div className="p-4 border-t border-gray-700 bg-gray-900/30">
								<p className="text-gray-300 text-sm leading-relaxed mb-4">
									{node.notes}
								</p>

								<div>
									<h4 className="text-sm font-semibold text-emerald-400 mb-2">
										Related Technologies
									</h4>
									<div className="flex flex-wrap gap-2">
										{node.connections.map((connId) => {
											const connectedNode = nodes.find((n) => n.id === connId);
											return (
												<button
													key={connId}
													onClick={() => setExpandedResource(connId)}
													className="px-2 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 rounded text-xs text-emerald-300 transition-colors"
												>
													{connectedNode?.label}
												</button>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			<Navbar />

			{isMobile ? (
				<div className="pt-16">
					<MobileResources />
				</div>
			) : (
				<div className="fixed inset-0 pt-16">
					<canvas
						ref={canvasRef}
						className="block w-full h-full"
						style={{
							background: "transparent",
							display: "block",
						}}
					/>

					<div className="absolute top-20 right-4 z-10 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-xs">
						<h1
							className="text-xl font-bold mb-2 tracking-wider text-emerald-400"
							style={{ fontFamily: "var(--font-orbitron)" }}
						>
							Robonyx Knowledge Graph
						</h1>
						<p className="text-sm text-gray-300 mb-3">
							Interactive visualization of our core technologies and their
							interconnections.
						</p>
						<div className="text-xs text-gray-500 space-y-1">
							<p>• Hover: Highlight connections</p>
							<p>• Click: View notes</p>
							<p>• Drag: Reposition nodes</p>
						</div>
					</div>

					{showSidebar && selectedNode && (
						<div className="absolute top-20 left-4 bottom-4 w-80 bg-black/95 backdrop-blur-sm border border-white/20 rounded-lg p-6 overflow-y-auto z-20">
							<div className="flex items-center justify-between mb-4">
								<h2
									className="text-xl font-bold text-white"
									style={{ fontFamily: "var(--font-orbitron)" }}
								>
									{nodes.find((n) => n.id === selectedNode)?.label}
								</h2>
								<button
									onClick={() => setShowSidebar(false)}
									className="text-gray-400 hover:text-white transition-colors"
								>
									✕
								</button>
							</div>

							<div className="space-y-4">
								<div>
									<h3 className="text-sm font-semibold text-emerald-400 mb-2">
										Notes
									</h3>
									<p className="text-gray-300 text-sm leading-relaxed">
										{nodes.find((n) => n.id === selectedNode)?.notes}
									</p>
								</div>

								<div>
									<h3 className="text-sm font-semibold text-emerald-400 mb-2">
										Connected Technologies
									</h3>
									<div className="flex flex-wrap gap-2">
										{nodes
											.find((n) => n.id === selectedNode)
											?.connections.map((id) => {
												const connectedNode = nodes.find((n) => n.id === id);
												return (
													<button
														key={id}
														onClick={() => setSelectedNode(id)}
														className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-xs text-gray-300 hover:text-white transition-colors"
													>
														{connectedNode?.label}
													</button>
												);
											})}
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
