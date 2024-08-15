"use client";
import React, { useState } from "react";
import Select from "../components/select";
import ImageBox from "../ImageBox/ImageBox";

interface MainSectionType {
	title: string;
	titleClassName?: string;
}

function TitleSection({ title, titleClassName }: MainSectionType) {
	const [selectVal, setSelectVal] = useState("Trending");
	const option = ["Trending", "New"];
    console.log(selectVal)

	return (
		<>
			<div
				id="titleBar"
				className={`text-gray-300 max-w-full flex items-center justify-between px-5 ${titleClassName}`}
			>
				<h1 className=" text-3xl title-bar">{selectVal} {title}</h1>
				<Select
					options={option}
					defaultSelect={selectVal}
					changeFunction={(val) => setSelectVal(val)}
					className="p-2 rounded-lg bg-gray-800 hover:bg-gray-900 border-2 border-[#fffa] hover:border-[#fff] text-lg outline-none cursor-pointer  text-[#fff] duration-150 hover:duration-150"
				/>
			</div>
			<ImageBox queryName={selectVal}/>
		</>
	);
}

export default TitleSection;
