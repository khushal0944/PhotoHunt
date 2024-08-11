"use client";
import React from "react";
import { useParams } from "next/navigation";
import ImageBox from "@/components/ImageBox/ImageBox";

function page() {
	const { slug } = useParams<{ slug: string }>();
	return (
		<>
			<div className="text-5xl text-center my-10 text-white">{slug}</div>
			<ImageBox queryName={slug} />
		</>
	);
}

export default page;
