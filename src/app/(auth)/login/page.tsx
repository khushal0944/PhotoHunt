"use client";
import Input from "@/components/components/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function page() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	function navigateSignIn() {
			router.push("/signin");
	}

	return (
		<>
			<div
				id="container"
				className="gradient h-screen w-full flex justify-center items-center"
			>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className="shadow-2xl w-1/2 bg-[#9d90903b] max-h-fit min-h-4/5 min-w-fit p-10 flex gap-5 items-center flex-col"
				>
					<h1 className="text-5xl underline text-purple-900 font-bold mt-10 mb-10">
						Login
					</h1>
					<Input
						value={email}
						type="email"
						inputChange={(e) => setEmail(e.target.value)}
						className="inputBar "
						placeHolder="Enter Email"
					/>
					<Input
						value={password}
						type="password"
						inputChange={(e) => setPassword(e.target.value)}
						className="inputBar "
						placeHolder="Enter Password"
					/>
                    <Link href={"/"} className=""><button className="hover:underline">Forgot Password</button></Link>
						<button
							type="submit"
							className="bg-gray-800 shadow-inner w-4/5 h-10 text-xl hover:bg-gray-950 text-white rounded-full uppercase"
						>
							Login
						</button>
                        <div>
                        Don't have an Account?
						<button
							type="button"
							onClick={navigateSignIn}
							className="ml-1 text-white hover:underline hover:text-gray-200"
						>
							Sign up
						</button>
                        </div>
				</form>
			</div>
		</>
	);
}

export default page;
