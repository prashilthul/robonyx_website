"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		// Reset form
		setFormData({ name: "", email: "", message: "" });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-20 bg-primary">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16 animate-slide-in-up">
					<h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
						Get In Touch
					</h2>
					<p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
						Ready to join our robotics and electronics community? Have questions about our
						projects? We&apos;d love to hear from you!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<Card className="animate-fade-in-scale">
						<CardHeader>
							<CardTitle className="text-2xl text-foreground">
								Send us a message
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<Input
										name="name"
										placeholder="Your Name"
										value={formData.name}
										onChange={handleChange}
										required
										className="border-border focus:border-accent focus:ring-accent"
									/>
								</div>
								<div>
									<Input
										name="email"
										type="email"
										placeholder="Your Email"
										value={formData.email}
										onChange={handleChange}
										required
										className="border-border focus:border-accent focus:ring-accent"
									/>
								</div>
								<div>
									<Textarea
										name="message"
										placeholder="Your Message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="border-border focus:border-accent focus:ring-accent resize-none"
									/>
								</div>
								<Button
									type="submit"
									className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-200 hover:scale-105 group"
								>
									Send Message
									<Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</Button>
							</form>
						</CardContent>
					</Card>

					<div
						className="space-y-8 animate-fade-in-scale"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
									<Mail className="w-6 h-6 text-accent" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-primary-foreground mb-1">
										Email
									</h3>
									<p className="text-primary-foreground/80">
										robonyx@university.edu
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
									<MapPin className="w-6 h-6 text-accent" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-primary-foreground mb-1">
										Location
									</h3>
									<p className="text-primary-foreground/80">
										Acad Building, Room idk
										<br />
										iiit nr Campus
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
									<Phone className="w-6 h-6 text-accent" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-primary-foreground mb-1">
										Phone
									</h3>
									<p className="text-primary-foreground/80">+91 34092749279</p>
								</div>
							</div>
						</div>

						<Card className="bg-accent/10 border-accent/30">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-primary-foreground mb-4">
									Meeting Times
								</h3>
								<div className="space-y-2 text-primary-foreground/80">
									<p>
										<strong>General Meetings:</strong> Wednesdays 6:00 PM
									</p>
									<p>
										<strong>Workshop Sessions:</strong> Saturdays 2:00 PM
									</p>
									<p>
										<strong>Competition Prep:</strong> Fridays 4:00 PM
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
