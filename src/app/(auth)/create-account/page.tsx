"use client";
import Input from "@/components/components/input";
import React, { useEffect, useState } from "react";
import sendVerificationEmail from "@/utils/sendVerificationEmail";
import checkCredentials from "@/utils/checkCredentials";
import verificationOTP from "@/utils/verificationOTP";
import { useRouter } from "next/navigation";

function page() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const otp = verificationOTP();
		const checked = checkCredentials(userName, email, password);
		if (!checked) return;
		const result = sendVerificationEmail(userName, email, otp);
		console.log(result);
	}

	function navigateLogIn() {
			router.push("/login");
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
					<h1 className="text-5xl text-purple-900 underline font-bold mt-10 mb-10">
						Create Account
					</h1>
					<Input
						value={userName}
						type="text"
						inputChange={(e) => setUserName(e.target.value)}
						className={`inputBar`}
						placeHolder="Enter Username"
					/>
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
					<div
						id="buttons"
						className="w-4/5 flex justify-evenly blockElement mt-8"
					>
						<button
							type="submit"
							className="bg-gray-800 shadow-inner max-w-52 w-40 h-10 text-xl hover:bg-gray-950 text-white rounded-full uppercase"
						>
							Sign Up
						</button>
						<button
							type="button"
							onClick={navigateLogIn}
							className="bg-gray-200 max-w-52 h-10 w-40 text-xl rounded-full hover:bg-gray-300 uppercase"
						>
							Log In
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default page;
