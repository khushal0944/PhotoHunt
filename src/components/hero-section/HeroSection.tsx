import React from "react";
import Search from "../header/search";
import Link from "next/link";

function HeroSection() {
	return (
		<>
			<main className="h-[500px] relative">
				<div id="background" className=" absolute -z-10 w-full h-full"></div>
				<section className=" bg-cover bg-center flex gap-10 h-full justify-center bg-[#00000088] items-center flex-col">
					<h1 className="text-4xl text-small font-medium text-center text-[#ffffff]">Welcome to PhotoDekho!</h1>
					<Search className="w-[600px] main-search"/>
					<div className=" text-white flex items-center w-48 justify-evenly">
						<Link href="https://www.instagram.com/itsss_khushal/" target="_blank" className="hover:scale-110 duration-200">
                        <i className="ri-instagram-line text-5xl "></i>
						</Link>
						<Link href="https://www.linkedin.com/in/khushal0944" target="_blank" className="hover:scale-110 duration-200">
                        <i className="ri-linkedin-box-line text-5xl "></i>
						</Link> 
						<Link href="https://github.com/khushal0944" target="_blank" className="hover:scale-110 duration-200">
                        <i className="ri-github-fill text-5xl"></i>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}

export default HeroSection;
