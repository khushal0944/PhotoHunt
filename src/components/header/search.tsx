"use client"
import { changeQuery } from "@/store/query-store/querySlice";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function Search({ className = ""}) {
    const [searchInput, setSearchInput] = useState<string>("")
    const dispatch = useDispatch()

    function handleSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(searchInput.trim() === "") return;
        dispatch(changeQuery(searchInput))
        // setSearchInput("")
    }

    return (
		<form className={`flex ${className}`} onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				className="p-3 text-lg text-black rounded-l outline-none flex-1"
				placeholder="Search wallpapers..."
                value={searchInput}
                onInput={(e: any) => setSearchInput(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-yellow-400 hover:bg-yellow-500 text-xl font-bold rounded-r w-16"
			>
				<i className="ri-search-line text-white"></i>
			</button>
		</form>
	);
}
