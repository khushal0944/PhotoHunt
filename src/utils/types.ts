export interface PhotosType {
	id: number;
	width: number;
	height: number;
	url: string;
	photographer: string;
	photographer_url: string;
	photographer_id: number;
	avg_color: string;
	src: {
		original: string;
		large2x: string;
		large: string;
		medium: string;
		small: string;
		portrait: string;
		landscape: string;
		tiny: string;
	};
	alt: string;
}

export interface ImagePropsType {
	srcBlur: string;
	srcHd: string;
	height: number ;
	width: number ;
	alt: string;
	className?: string;
	photographer_id: number;
    photographer: string;
    avg_color: string
}