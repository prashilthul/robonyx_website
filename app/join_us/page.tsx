import React from "react";

export default function JoinUs() {
	return (
		<div
			style={{
				minHeight: "60vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
				borderRadius: "1rem",
				boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
				margin: "2rem auto",
				maxWidth: "500px",
				padding: "2rem",
			}}
		>
			<h1
				style={{
					fontSize: "2.5rem",
					fontWeight: 700,
					color: "#1e293b",
					marginBottom: "1rem",
					fontFamily: "monospace",
				}}
			>
				Join Us
			</h1>
			<p
				style={{
					fontSize: "1.2rem",
					color: "#475569",
					textAlign: "center",
					marginBottom: "2rem",
				}}
			>
				We are not accepting invitations as of now.
				<br />
				Please check back later or follow us for updates!
			</p>
			<span
				style={{
					fontSize: "3rem",
					color: "#e11d48",
				}}
			>
				🚫
			</span>
		</div>
	);
}
