"use client";
import Input from "@/components/components/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	function navigateCreateAccount() {
			router.push("/create-account");
	}

	return (
		<>
			<div
				id="container"
				className="max-h-screen w-full flex bg-[#0D1117] justify-center items-center"
			>
				<form
					onSubmit={(e) => handleSubmit(e)}
					className="w-1/2 min-w-fit flex items-center justify-center flex-col p-10"
				>
					<h1 className="text-4xl text-white mb-5">
						Login
					</h1>
                    <div className="shadow-2xl p-5 flex flex-col border-[#292E35] border-2 gap-y-5 rounded-xl bg-[#161B22]">
					<Input
						value={email}
                        label="Email"
						type="email"
						inputChange={(e) => setEmail(e.target.value)}
						className="inputBar "
						placeHolder="Enter Email"
                        />
					<Input
						value={password}
						label="Password"
						type="password"
						inputChange={(e) => setPassword(e.target.value)}
						className="inputBar "
						placeHolder="Enter Password"
                        />
                    <Link href={"/"} className="text-center text-white"><button className="hover:underline">Forgot Password</button></Link>
						<button
							type="submit"
							className="bg-green-700 hover:bg-green-500 w-full h-10 text-xl text-white rounded-full uppercase"
                            >
							Login
						</button>
                                </div>
                        <div className="mt-5 border-2 text-gray-300 border-[#292E35] bg-[#161B22] rounded-xl p-5">
                        Don&apos;t have an Account?
						<button
							type="button"
							onClick={navigateCreateAccount}
							className="ml-2 text-blue-500 hover:underline"
						>
							Sign up
						</button>
                        </div>
				</form>
			</div>
		</>
	);
}

export default Page;
