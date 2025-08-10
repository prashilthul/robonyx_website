import React, { ReactNode } from "react";

interface CircleIconWithTextProps {
	icon: ReactNode;
	text: string;
}

const CircleIconWithText: React.FC<CircleIconWithTextProps> = ({
	icon,
	text,
}) => {
	return (
		<div style={{ textAlign: "center", margin: "0 20px" }}>
			<div
				style={{
					width: 300,
					height: 300,
					borderRadius: "50%",
					border: "1px solid white",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "0 auto 10px auto",
				}}
			>
				{icon}
			</div>
			<div
				style={{ color: "white", fontFamily: "monospace", fontWeight: "bold" }}
			>
				{text}
			</div>
		</div>
	);
};

export default CircleIconWithText;
