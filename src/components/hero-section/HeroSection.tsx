"use client"
import React, { useEffect, useRef } from "react";
import Search from "../header/search";
import Link from "next/link";

interface MediaType {
    type: "image" | "video"
}

function HeroSection({type} : MediaType) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Error attempting to play video: ", error);
        });
      }
    }, []);
	return (
		<>
			<main className="h-[500px] relative">
                {
                    type === "image" ? 
            			<div id="background" className=" absolute -z-10 w-full h-full"></div>
                        : <video 
                        ref={videoRef}
                        src="/heroVideo.mp4" 
                        muted={true}
                        playsInline 
                        loop 
                        className="absolute inset-0 w-full h-full object-cover -z-10"
                        />
                }
				<section className=" bg-cover bg-center flex gap-10 h-full justify-center bg-[#000000a8] items-center flex-col">
					<h1 className="text-4xl text-small font-medium text-center text-[#ffffff]">Welcome to Photo hunt !</h1>
					<Search className="w-[600px] main-search"/>
					<div className=" text-white flex items-center w-48 justify-evenly">
						<Link href="https://www.instagram.com/itsss_khushal/" target="_blank" className="hover:rotate-12 hover:scale-110 duration-200">
                        <i className="ri-instagram-line text-5xl "></i>
						</Link>
						<Link href="https://www.linkedin.com/in/khushal0944" target="_blank" className="hover:rotate-12 hover:scale-110 duration-200">
                        <i className="ri-linkedin-box-line text-5xl "></i>
						</Link> 
						<Link href="https://github.com/khushal0944" target="_blank" className="hover:rotate-12 hover:scale-110 duration-200">
                        <i className="ri-github-fill text-5xl"></i>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}

export default HeroSection;
