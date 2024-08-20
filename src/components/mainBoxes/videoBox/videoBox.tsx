"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { splitArrayToColumns } from "../splitArray";
import ImageComponent from "../imageBox/ImageComponent";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { VideosType } from "@/utils/types";
import { useSelector } from "react-redux";

function ImageBox() {
    const queryName: string = useSelector((state: any) => state.queryStore.query)
	const [videos, setVideos] = useState<VideosType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [columns, setColumns] = useState<VideosType[][]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number | null>(null);
	const [fetchMore, setFetchMore] = useState<boolean>(false);
    const [query, setQuery] = useState<string>(queryName)
    const [totalColumns, setTotalColumns] = useState<number>(3)

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
						const response = await axios.get("/api/get-images", {
							params: { page: nextPage, query },
						});
						setVideos((prev) => [...prev, ...response.data.data]);
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

    useEffect(()=> {
        console.log("query", query)
        setQuery(queryName)
        setPage(1); 
    },[queryName])

	useEffect(() => {
		const fetchAPI = async () => {
			setLoading(true);
			try {
				const response = await axios
					.get("/api/get-videos", {
						params: {
							page,
                            query
						},
					})
					.then((res) => res.data);
                    console.log(response)
				setVideos(response.data);
				setTotalPages(response.totalPages);
                setPage(1);
			} catch (error) {
				console.error("Error fetching images:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchAPI();
	}, [query]);

	useEffect(() => {
		if (videos.length > 0) {
			setColumns(splitArrayToColumns(videos, totalColumns));
		}
	}, [videos]);

	if (loading)
		return (
            <Loader className="mb-5"/>
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
								className="relative overflow-hidden rounded-lg"
							>
								{/* <VideoComponent
									srcBlur={photo.src.tiny}
									srcHd={photo.src.large2x}
									alt={photo.alt}
									width={photo.width}
									height={photo.height}
                                    avg_color={photo.avg_color}
                                    photographer={photo.photographer}
                                    photographer_id={photo.photographer_id}
									ref={
										(index + 1) === column.length &&
										columnIndex + 1  === columns.length
											? lastImageRef
											: null
									}
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/> */}
							</div>
						))}
					</div>
				))}
			</div>
			{fetchMore && <Loader className="mb-5"/>}
		</>
	);
}
export default ImageBox;