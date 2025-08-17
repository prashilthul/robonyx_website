"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
	const [progress, setProgress] = useState(0);
	const [isComplete, setIsComplete] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					setIsComplete(true);
					clearInterval(interval);
					return 100;
				}
				return prev + 2;
			});
		}, 50);

		return () => {
			clearInterval(interval);
		};
	}, []);

	if (isComplete) return null;

	return (
		<div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
			<div className="text-center space-y-8">
				<div className="relative">
					<div className="flex justify-center mb-6">
						<svg
							width="300"
							height="200"
							viewBox="0 0 300 200"
							className="text-emerald-400"
						>
							<rect
								x="50"
								y="50"
								width="200"
								height="100"
								rx="4"
								fill="#1a1a1a"
								stroke="currentColor"
								strokeWidth="2"
							/>

							<rect
								x="70"
								y="70"
								width="160"
								height="60"
								rx="2"
								fill="#0a0a0a"
								stroke="currentColor"
								strokeWidth="1"
							/>

							<rect
								x="80"
								y="80"
								width="30"
								height="15"
								rx="1"
								fill={progress > 20 ? "#10b981" : "#374151"}
								className={progress > 20 ? "animate-pulse" : ""}
							/>
							<rect
								x="120"
								y="80"
								width="30"
								height="15"
								rx="1"
								fill={progress > 40 ? "#10b981" : "#374151"}
								className={progress > 40 ? "animate-pulse" : ""}
							/>
							<rect
								x="160"
								y="80"
								width="30"
								height="15"
								rx="1"
								fill={progress > 60 ? "#10b981" : "#374151"}
								className={progress > 60 ? "animate-pulse" : ""}
							/>
							<rect
								x="200"
								y="80"
								width="30"
								height="15"
								rx="1"
								fill={progress > 80 ? "#10b981" : "#374151"}
								className={progress > 80 ? "animate-pulse" : ""}
							/>

							<rect
								x="80"
								y="105"
								width="70"
								height="10"
								rx="1"
								fill={progress > 30 ? "#059669" : "#374151"}
								className={progress > 30 ? "animate-pulse" : ""}
							/>
							<rect
								x="160"
								y="105"
								width="70"
								height="10"
								rx="1"
								fill={progress > 50 ? "#059669" : "#374151"}
								className={progress > 50 ? "animate-pulse" : ""}
							/>

							<rect
								x="100"
								y="120"
								width="100"
								height="8"
								rx="1"
								fill={progress > 70 ? "#047857" : "#374151"}
								className={progress > 70 ? "animate-pulse" : ""}
							/>

							{Array.from({ length: 20 }, (_, i) => (
								<rect
									key={`top-${i}`}
									x={60 + i * 9}
									y="45"
									width="2"
									height="5"
									fill="currentColor"
								/>
							))}

							{Array.from({ length: 20 }, (_, i) => (
								<rect
									key={`bottom-${i}`}
									x={60 + i * 9}
									y="150"
									width="2"
									height="5"
									fill="currentColor"
								/>
							))}

							{Array.from({ length: 10 }, (_, i) => (
								<rect
									key={`left-${i}`}
									x="45"
									y={60 + i * 8}
									width="5"
									height="2"
									fill="currentColor"
								/>
							))}

							{Array.from({ length: 10 }, (_, i) => (
								<rect
									key={`right-${i}`}
									x="250"
									y={60 + i * 8}
									width="5"
									height="2"
									fill="currentColor"
								/>
							))}

							{Array.from({ length: 8 }, (_, row) =>
								Array.from({ length: 16 }, (_, col) => (
									<circle
										key={`transistor-${row}-${col}`}
										cx={75 + col * 10}
										cy={75 + row * 7}
										r="0.5"
										fill={progress > row * col * 2 ? "#10b981" : "#374151"}
									/>
								))
							)}

							<rect
								x="55"
								y="55"
								width="190"
								height="90"
								rx="3"
								fill="none"
								stroke="#6b7280"
								strokeWidth="1"
								strokeDasharray="2,2"
							/>

							<text
								x="150"
								y="40"
								textAnchor="middle"
								fill="currentColor"
								fontSize="8"
								fontFamily="monospace"
							>
								ROBONYX-X1
							</text>
						</svg>
					</div>

					<h1 className="text-6xl font-bold text-white mb-2 tracking-wider">
						<span className="text-emerald-400">R</span>
						<span className="text-white">O</span>
						<span className="text-emerald-400">B</span>
						<span className="text-white">O</span>
						<span className="text-emerald-400">N</span>
						<span className="text-white">Y</span>
						<span className="text-emerald-400">X</span>
					</h1>

					<p className="text-emerald-400 text-lg">Robotics Club</p>
				</div>

				<div className="space-y-4">
					<p className="text-gray-400 text-sm">
						Initializing Microprocessor Cores...
					</p>

					<div className="w-80 h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
						<div
							className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-all duration-300 ease-out shadow-lg shadow-emerald-400/50"
							style={{ width: `${progress}%` }}
						></div>
					</div>

					<p className="text-gray-400 text-sm">{progress}%</p>
				</div>
			</div>
		</div>
	);
}
