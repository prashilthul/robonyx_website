import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cardsData = [
	{
		id: 1,
		title: "Project 1",
		subtitle: "Project ",
		description: "I have no idea what I am doing right now",
		image: "/workshop2.jpg",
	},
	{
		id: 2,
		title: "Project 2",
		subtitle: "Project ",
		description: "Really nice project",
		image: "/workshop2.jpg",
	},
	{
		id: 3,
		title: "Project 3",
		subtitle: "Project ",
		description: "Really nice project",
		image: "/workshop2.jpg",
	},
	{
		id: 4,
		title: "Project 4",
		subtitle: "Project ",
		description: "Really nice project",
		image: "/workshop2.jpg",
	},
	{
		id: 5,
		title: "Project 5",
		subtitle: "Project ",
		description: "Really nice project",
		image: "/workshop2.jpg",
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
							<h3 className="text-xl font-semibold">{card.title}</h3>
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
												<h2 className="text-4xl font-bold mb-3">
													{card.title}
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
