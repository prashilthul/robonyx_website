import { Github, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-gray-900 border-t border-gray-700">
			<div className="w-full mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-5 items-center gap-8">
					<div className="flex justify-center md:justify-start">
						<Image
							src="/robonyx.svg"
							alt="Robonyx Logo"
							width={300}
							height={300}
							className="transition-opacity duration-300 "
						/>
					</div>

					<div className="md:col-span-3 flex flex-col items-center md:flex-row justify-between md:items-start gap-20 text-center md:text-left w-full md:px-48">
						<div>
							<h3 className="font-semibold text-white text-2xl mb-4 tracking-wide">
								Navigation
							</h3>
							<div className="flex flex-col space-y-3 text-xl text-gray-300">
								<a href="/" className="hover:text-white">
									Home
								</a>
								<a href="#about" className="hover:text-white">
									About
								</a>
								<a href="#team" className="hover:text-white">
									Team
								</a>
								<a href="/resources" className="hover:text-white">
									Resources
								</a>
							</div>
						</div>

						<div>
							<h3 className="font-semibold text-white text-2xl mb-4 tracking-wide">
								Connect
							</h3>
							<div className="flex flex-col space-y-3 text-xl text-gray-300">
								<a
									href="https://github.com"
									className="flex items-center gap-2 hover:text-white"
								>
									<Github className="w-6 h-6" />
									<span>GitHub</span>
								</a>
								<a
									href="https://twitter.com"
									className="flex items-center gap-2 hover:text-white"
								>
									<Twitter className="w-6 h-6" />
									<span>Twitter</span>
								</a>
								<a
									href="https://instagram.com"
									className="flex items-center gap-2 hover:text-white"
								>
									<Instagram className="w-6 h-6" />
									<span>Instagram</span>
								</a>
							</div>
						</div>
					</div>

					<div className="flex justify-center md:justify-end">
						<Image
							src="/sac_logo.png"
							alt="SAC Logo"
							width={250}
							height={250}
							className="transition-opacity duration-300"
						/>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-gray-300 text-sm">
						© {new Date().getFullYear()} Robonyx. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
