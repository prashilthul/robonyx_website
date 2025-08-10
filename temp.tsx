// useEffect(() => {
// 	const tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: containerRef.current,
// 			start: "top 80%",
// 			end: "top 20%",
// 			// toggleActions: "play none none none",
// 			// markers: true,
// 		},
// 	});

// 	gsap.set(linksRef.current, { y: -20, opacity: 0 });

// 	tl.to(linksRef.current, {
// 		y: 0,
// 		opacity: 1,
// 		stagger: { each: 0.1, from: "center" },
// 		duration: 0.5,
// 		ease: "power3.out",
// 	});

// 	return () => {
// 		tl.kill();
// 	};
// }, []);
