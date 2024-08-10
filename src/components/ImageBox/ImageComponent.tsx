import Image from "next/image";
import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { ImagePropsType } from "@/utils/types";

const ImageComponent = forwardRef<HTMLImageElement, ImagePropsType>(
	(props: ImagePropsType, ref: ForwardedRef<HTMLImageElement>) => {
		const [loadingStage, setLoadingStage] = useState<"Blur" | "Hd">("Blur");
		const [isHovered, setIsHovered] = useState<boolean>(false);

		const { srcBlur, srcHd, alt, height, width, className } = props;

		useEffect(() => {
			const blurImage = new window.Image();
			blurImage.src = srcBlur;
			blurImage.onload = () => {
				setLoadingStage("Hd");
			};
		}, [srcBlur, srcHd]);

		return (
			<div
				style={{ position: "relative" }}
				ref={ref}
				onMouseOver={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{isHovered && (
					<div className="absolute w-full h-full bg-[#0000002c] cursor-pointer z-30 p-2">
						<button className="rounded-full bg-white w-10 h-10 float-right ml-2 cursor-auto hover:bg-[#e4e2e2]"><i className="text-xl ri-heart-line"></i></button>
						<button className="rounded-full bg-white w-10 h-10 float-right cursor-auto hover:bg-[#e4e2e2]"><i className="text-xl ri-save-2-line"></i></button>
                        <div id="bottom" className=" absolute bottom-5 left-5 flex items-center gap-x-2">
						<div className="rounded-full bg-white w-10 h-10">x</div>
                        <div id="title" className="text-white text-lg">Author Name</div>
                        </div>
                        <div id="downloadbtn" className="absolute bottom-5 bg-green-700 hover:bg-[#216921c5] p-4 h-10 text-white rounded-xl right-5 flex items-center justify-center gap-x-2 text-lg"><i className="ri-download-2-line"></i>Download</div>
					</div>
				)}
				<Image
					src={loadingStage === "Blur" ? srcBlur : srcHd}
					className={`object-cover transition-all duration-300 ${className} ${
						loadingStage === "Hd" ? "filter-none" : "filter blur-sm"
					}`}
					height={height}
					width={width}
					alt={alt}
				/>
			</div>
		);
	}
);

export default ImageComponent;
