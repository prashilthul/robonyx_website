import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marque";
import Image from "next/image";

const reviews = [
	{
		name: "Prash",

		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "/workshop1.jpg",
	},
	{
		name: "Manas",

		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "/workshop2.jpg",
	},
	{
		name: "Fahmin",

		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "/workshop3.jpg",
	},
	{
		name: "Ishan",

		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "/workshop4.jpg",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	body,
}: {
	img: string;
	name: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative  w-[500px]  h-[400px] cursor-pointer overflow-hidden rounded-xl border p-4",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className="flex flex-row items-center gap-2 ">
				<div className="flex flex-col w-full items-center ">
					<figcaption className="text-3xl text-center font-medium dark:text-white">
						{name}
					</figcaption>
				</div>
			</div>
			<blockquote className="mt-2 text-4sm text-center ">{body}</blockquote>

			<Image
				src={img}
				alt={name}
				width={500}
				height={400}
				className="absolute inset-0 object-cover w-full h-full"
			/>
		</figure>
	);
};

export function ImageScroll() {
	return (
		<div className="relative flex w-full flex-col items-center py-32 justify-center overflow-hidden h-full">
			<Marquee pauseOnHover={false} className="[--duration:3s] gap-7 ">
				{firstRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee>

			{/* <Marquee reverse pauseOnHover={false} className="[--duration:3s] gap-7">
				{secondRow.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</Marquee> */}
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
		</div>
	);
}
