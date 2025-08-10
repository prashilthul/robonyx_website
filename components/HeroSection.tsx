import { forwardRef, useImperativeHandle, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = forwardRef((_, ref) => {
	const heroRef = useRef<HTMLHeadingElement>(null);

	useImperativeHandle(ref, () => ({
		animate: () => {
			const tl = gsap.timeline();

			tl.fromTo(
				heroRef.current,
				{ scale: 4, opacity: 0 },
				{ scale: 1, opacity: 0.1, duration: 1.8, ease: "power3.out" }
			);

			tl.fromTo(
				heroRef.current,
				{ opacity: 0.1 },
				{ opacity: 1, duration: 0.8, ease: "power3.out" },
				"-=0.5"
			);

			return tl;
		},
		// }
		// gsap.fromTo(
		// 	heroRef.current,
		// 	{ scale: 4, opacity: 0 },
		// 	{ scale: 1, opacity: 0.1, duration: 1.2, ease: "power3.out" }
		// ),
	}));

	return (
		<section className="flex items-center justify-center h-screen bg-black text-white">
			<h1
				ref={heroRef}
				className="text-6xl md:text-8xl lg:text-[10rem] font-semibold text-center font-pacifico "
			>
				CRAFTING BOLD & MEMORABLE WEBSITES
			</h1>
		</section>
	);
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
