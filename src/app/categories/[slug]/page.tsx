"use client";
import React from "react";
import { useParams } from "next/navigation";
import ImageBox from "@/components/mainBoxes/imageBox/ImageBox";
import { useDispatch } from "react-redux";
import { changeQuery } from "@/store/query-store/querySlice";

function page() {
	const { slug } = useParams<{ slug: string }>();
    const dispatch = useDispatch()

    dispatch(changeQuery(slug))

	return (
		<>
			<div className="text-5xl text-center my-10 text-white">{slug}</div>
			<ImageBox />
		</>
	);
}

export default page;
