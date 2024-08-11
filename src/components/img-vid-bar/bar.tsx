"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BarItemsType {
    name: string,
    path: string
}

function Bar() {
    const pathName = usePathname()
    const isActive = (path: string) => path === pathName
    const barItems: BarItemsType[] = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Videos",
            path: "/videos"
        },
    ]
	return (
		<>
            <ul className="flex items-center justify-center mt-7 ">
                {
                    barItems && barItems.map((singleItem) => <Link href={singleItem.path} className={`${isActive(singleItem.path) ? "bg-[#000000a1] hover:bg-[#272626e1] text-white": "text-gray-200 hover:text-gray-50"} h-12 flex justify-center items-center rounded-3xl font-bold w-28`} key={singleItem.name}>
                        {singleItem.name}
                    </Link>)
                }
            </ul>
		</>
	);
}

export default Bar;
