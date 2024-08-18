import { PhotosType, VideosType } from "@/utils/types";

export const splitArrayToColumns = <T extends PhotosType | VideosType>(
	arr: T[],
	numColumns: number = 3
): T[][] => {
	const result: T[][] = Array.from({ length: numColumns }, () => []);
	const heights: number[] = new Array(numColumns).fill(0);

	arr.forEach((item: T) => {
		const lowestColumnIndex = heights.indexOf(Math.min(...heights));
		result[lowestColumnIndex].push(item);
		heights[lowestColumnIndex] += item.height / item.width;
	});

	return result;
};
