import Image from "next/image";
import React, { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { ImagePropsType } from "@/utils/types";

const ImageComponent = forwardRef<HTMLImageElement, ImagePropsType>(
	(props: ImagePropsType, ref: ForwardedRef<HTMLImageElement>) => {
		const [loadingStage, setLoadingStage] = useState<"Blur" | "Hd">("Blur");

		const { srcBlur, srcHd, alt, height, width, className } = props;

		useEffect(() => {
			const blurImage = new window.Image();
			blurImage.src = srcBlur;
			blurImage.onload = () => {
				setLoadingStage("Hd");
			};
		}, [srcBlur, srcHd]);

		return (
			<div style={{ position: "relative" }} ref={ref}>
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
