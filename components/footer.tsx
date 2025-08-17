import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-secondary text-secondary-foreground py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<h3 className="text-xl font-bold font-mono">Robonyx</h3>
						<p className="text-secondary-foreground/80 text-sm leading-relaxed">
							Innovating tomorrow's technologies through collaborative robotics
							education and research.
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Quick Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#home"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Resources</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									Documentation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									Tutorials
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									Competition Rules
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-secondary-foreground/80 hover:text-accent transition-colors"
								>
									Safety Guidelines
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h4 className="font-semibold">Follow Us</h4>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-secondary-foreground/80 hover:text-accent transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-secondary-foreground/80 hover:text-accent transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-secondary-foreground/80 hover:text-accent transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-secondary-foreground/80 hover:text-accent transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
					<p className="text-secondary-foreground/60 text-sm">
						© 2025 Robonyx Club. All rights reserved. Built with passion for
						robotics.
					</p>
				</div>
			</div>
		</footer>
	);
}
