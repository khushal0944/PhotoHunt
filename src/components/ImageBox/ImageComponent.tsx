import Image from "next/image";
import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { ImagePropsType } from "@/utils/types";

const ImageComponent = forwardRef<HTMLImageElement, ImagePropsType>(
	(props: ImagePropsType, ref: ForwardedRef<HTMLImageElement>) => {
		const [loadingStage, setLoadingStage] = useState<"Blur" | "Hd">("Blur");
		const [isHovered, setIsHovered] = useState<boolean>(false);
		const {
			srcBlur,
			srcHd,
			alt,
			height,
			width,
			className,
			photographer,
			avg_color,
		} = props;
		useEffect(() => {
			const blurImage = new window.Image();
			blurImage.src = srcBlur;
			blurImage.onload = () => {
				setLoadingStage("Hd");
			};
		}, [srcBlur, srcHd]);

		function handleImageClick() {}

		function handleDownload() {
			fetch(srcHd)
				.then((res) => res.blob())
				.then((blob) => {
					const url = window.URL.createObjectURL(blob);
					const link = document.createElement("a");
					link.href = url;
					link.download = `${alt || "image"}.jpg`;
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
					window.URL.revokeObjectURL(url);
				})
				.catch((error) => console.log(error));
		}

		return (
			<div
				style={{ position: "relative" }}
				ref={ref}
				onMouseOver={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={handleImageClick}
			>
				{isHovered && (
					<div className="absolute w-full h-full bg-[#0000005e] cursor-pointer z-30 p-2">
						<button className="rounded-full bg-white w-10 h-10 float-right ml-2 cursor-auto hover:bg-[#e4e2e2]">
							<i className="text-xl ri-heart-line"></i>
						</button>
						<button className="rounded-full bg-white w-10 h-10 float-right cursor-auto hover:bg-[#e4e2e2]">
							<i className="text-xl ri-save-2-line"></i>
						</button>
						<div
							id="bottom"
							className=" absolute bottom-5 left-5 flex items-center gap-x-2"
						>
							<div
								className="rounded-full bg-white w-10 h-10 flex items-center justify-center font-bold"
								style={{ backgroundColor: avg_color }}
							>
								{photographer.charAt(0).toUpperCase()}
							</div>
							<div className="text-white text-lg">
								{photographer}
							</div>
						</div>
						<button
							className={`absolute bottom-5 bg-green-600 transition hover:bg-[#154315bf] p-4 h-10 text-white rounded-xl right-5 flex items-center justify-center gap-x-2 text-lg`}
							onClick={handleDownload}
						>
							<i className="ri-download-2-line"></i>Download
						</button>
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
