"use client";
import React, { useEffect, useState } from "react";
import Select from "../components/select";
import ImageBox from "../mainBoxes/imageBox/ImageBox";
import { useDispatch, useSelector } from "react-redux";
import { StateFromReducersMapObject } from "@reduxjs/toolkit";
import { changeQuery } from "@/store/query-store/querySlice";

interface MainSectionType {
	title: string;
	titleClassName?: string;
}

function TitleSection({ title, titleClassName }: MainSectionType) {
    const queryStore = useSelector((state: any) => state.queryStore.query)
	const [selectVal, setSelectVal] = useState(queryStore);
	const option = ["Trending", "New"];
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeQuery(selectVal))
    },[selectVal])

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
			{/* <ImageBox queryName={selectVal}/> */}
		</>
	);
}

export default TitleSection;
