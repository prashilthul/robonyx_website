// MainNavbar.tsx
import { gsap } from "gsap";
import { useRef, useImperativeHandle, forwardRef } from "react";
interface MainNavbarProps {
	className?: string;
}
const MainNavbar = forwardRef<
	{ animate: () => gsap.core.Timeline },
	MainNavbarProps
>(({ className }, ref) => {
	const linksRef = useRef<(HTMLLIElement | null)[]>([]);
	const logoRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	// const linksRef = useRef<(HTMLLIElement | null)[]>([]);
	// const logoRef = useRef<HTMLDivElement>(null);
	// const contactRef = useRef<HTMLDivElement>(null);

	// Expose the refs to parent for animation timeline creation new stuff
	useImperativeHandle(ref, () => ({
		animate: () => {
			const tl = gsap.timeline();

			gsap.set([logoRef.current, contactRef.current], {
				opacity: 0,
			});
			gsap.set(logoRef.current, { x: -80 });
			gsap.set(contactRef.current, { x: 80 });
			gsap.set(linksRef.current, { y: -20, opacity: 0 });

			tl.to(
				[logoRef.current, contactRef.current],
				{
					opacity: 1,
					x: 0,
					duration: 0.3,
					ease: "power3.out",
				},
				0
			);

			tl.to(linksRef.current, {
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: "power3.out",
				stagger: 0.35,
			});

			return tl;
		},
	}));
	const navItems = ["Home", "About", "Works"];
	return (
		<nav className="fixed top-0 w-full bg-var(--color-bg) bg-opacity-90 backdrop-blur-md text-var(--color-text) py-4 z-50">
			<div className="w-full mx-auto flex relative items-center h-16 px-4">
				<div ref={logoRef} className="text-2xl font-bold absolute left-[10%]">
					LOGO
				</div>
				<ul className="flex space-x-24 mx-auto">
					{navItems.map((item, i) => (
						<li
							key={item}
							ref={(el) => {
								if (el) linksRef.current[i] = el;
							}}
							className={`text-xl font-semibold cursor-pointer hover:underline ${className}`}
						>
							{item}
						</li>
					))}
				</ul>
				<div
					ref={contactRef}
					className="text-2xl font-bold absolute right-[10%]"
				>
					Contact
				</div>
			</div>
		</nav>
	);
});

export default MainNavbar;
