"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { splitArrayToColumns } from "./splitArray";
import ImageComponent from "./ImageComponent";
import axios from "axios";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import { PhotosType } from "@/utils/types";

function ImageBox() {
	const [images, setImages] = useState<PhotosType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [columns, setColumns] = useState<PhotosType[][]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number | null>(null);
	const [fetchMore, setFetchMore] = useState<boolean>(false);
    const search = useSelector((state: any) => state.search.search)
    const [query, setQuery] = useState<string>(search)

    useEffect(() => {
        setQuery(search)
    },[search])

	const observer = useRef<IntersectionObserver>();

	const lastImageRef = useCallback(
		(last: HTMLElement | null) => {
			if (loading || fetchMore) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver(async (entries) => {
				if (
					entries[0].isIntersecting &&
					totalPages &&
					page < totalPages &&
					!fetchMore
				) {
					setFetchMore(true);
					try {
						const nextPage = page + 1;
						const response = await axios.get("api/getImage", {
							params: { page: nextPage },
						});
						setImages((prev) => [...prev, ...response.data.data]);
						setPage(nextPage);
					} catch (error) {
						console.error("Error fetching more images:", error);
					} finally {
						setFetchMore(false);
					}
				}
			});
			if (last) observer.current.observe(last);
		},
		[loading, totalPages, page, fetchMore]
	);

	useEffect(() => {
		const fetchAPI = async () => {
			setLoading(true);
			try {
				const response = await axios
					.get("api/getImage", {
						params: {
							page,
						},
					})
					.then((res) => res.data);
				setImages(response.data);
				setTotalPages(response.totalPages);
			} catch (error) {
				console.error("Error fetching images:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchAPI();
	}, []);

	useEffect(() => {
		if (images.length > 0) {
			setColumns(splitArrayToColumns(images, 3));
		}
	}, [images]);

	if (loading)
		return (
            <Loader />
		);

	return (
		<>
			<div className="flex gap-4 p-4">
				{columns.map((column, columnIndex) => (
					<div
						key={columnIndex}
						className="flex flex-col gap-4 flex-1"
					>
						{column.map((photo, index) => (
							<div
								key={photo.id}
								className="relative group overflow-hidden rounded-lg"
							>
								<ImageComponent
									srcBlur={photo.src.tiny}
									srcHd={photo.src.large2x}
									alt={photo.alt}
									width={photo.width}
									height={photo.height}
									ref={
										index + 1 === column.length &&
										columnIndex + 1 === columns.length
											? lastImageRef
											: null
									}
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
						))}
					</div>
				))}
			</div>
			{fetchMore && <Loader />}
		</>
	);
}

export default ImageBox;
