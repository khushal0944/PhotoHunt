import { PhotosType } from "./ImageBox";

export const splitArrayToColumns = (
	arr: PhotosType[],
	numColumns: number = 3
): PhotosType[][] => {
	// Initialize columns
	const result: PhotosType[][] = Array.from({ length: numColumns }, () => []);

	// Initialize array of heights for each column
	const heights: number[] = new Array(numColumns).fill(0);

	arr.forEach((item: PhotosType) => {
		// Find the column with the lowest height
		const lowestColumnIndex = heights.indexOf(Math.min(...heights));

		// Add the item to the column with the lowest height
		result[lowestColumnIndex].push(item);

		// Update the height of the column
		heights[lowestColumnIndex] += item.height / item.width; // Use aspect ratio instead of raw height
	});

	return result;
};
