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
                    barItems && barItems.map((singleItem) => <Link href={singleItem.path} className={`${isActive(singleItem.path) ? "bg-black hover:bg-[#000000e1] text-white": "hover:text-[#4b4848]"} h-12 flex justify-center items-center rounded-3xl font-bold w-28`} key={singleItem.name}>
                        {singleItem.name}
                    </Link>)
                }
            </ul>
		</>
	);
}

export default Bar;
