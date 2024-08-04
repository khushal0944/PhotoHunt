"use client";
import React, { useState } from "react";
import Select from "../components/select";

interface MainSectionType {
	title: string;
	titleClassName?: string;
}

function TitleSection({ title, titleClassName }: MainSectionType) {
	const [selectVal, setSelectVal] = useState("Trending");
	const option = ["Trending", "New"];

    

	return (
		<>
			<div
				id="titleBar"
				className={`text-gray-700 max-w-full flex items-center justify-between px-5 ${titleClassName}`}
			>
				<h1 className=" text-3xl title-bar">{title}</h1>
				<Select
					options={option}
					defaultSelect={selectVal}
					changeFunction={(val) => setSelectVal(val)}
					className="border-[1px] p-2 rounded-lg text-lg outline-none cursor-pointer hover:border-black duration-150 hover:duration-150"
				/>
			</div>
		</>
	);
}

export default TitleSection;
