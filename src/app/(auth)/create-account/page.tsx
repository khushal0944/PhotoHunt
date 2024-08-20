"use client";
import Input from "@/components/components/input";
import React, { useRef, useState } from "react";
import sendVerificationEmail from "@/utils/sendVerificationEmail";
import checkCredentials from "@/utils/checkCredentials";
import verificationOTP from "@/utils/verificationOTP";
import { useRouter } from "next/navigation";
import OtpInputWithValidation from "@/components/otpWithValidation";

function Page() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyOTP, setVerifyOTP] = useState<boolean>(false);
	const otpRef = useRef<string>();

	const router = useRouter();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
        if(!userName || userName.trim() === "" || typeof userName !== "string") return
        if(!email || email.trim() === "" || typeof email !== "string" || !email.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)) return
        if(!password || password.trim() === "" || typeof password !== "string" || password.length < 8) return
		otpRef.current = verificationOTP();
		const checked = checkCredentials(userName, email, password);
		if (!checked) return;
		const result = await sendVerificationEmail(userName, email, otpRef.current);
        if(result?.status === 422){
            alert(result?.text)
            setVerifyOTP(true);
        }
	}

	function navigateLogIn() {
		router.push("/login");
	}

	return (
		<>
			<div
				id="container"
				className="max-h-screen w-full flex bg-[#0D1117] justify-center items-center"
			>
				{!verifyOTP && (
					<form
						onSubmit={(e) => handleSubmit(e)}
						className="w-1/2 min-w-fit flex items-center justify-center flex-col p-10"
					>
						<h1 className="text-4xl text-white mb-5">
							Create an Account
						</h1>
						<div className="shadow-2xl p-5 flex flex-col border-[#292E35] border-2 gap-y-5 rounded-xl bg-[#161B22]">
							<Input
								value={userName}
                                label="Name"
								type="text"
								inputChange={(e) => setUserName(e.target.value)}
								className={`inputBar`}
								placeHolder="Enter Username"
							/>
							<Input
                                label="Email"
								value={email}
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
                            <button
                                type="submit"
                                className="bg-green-700 hover:bg-green-500 w-full h-10 text-xl text-white rounded-full uppercase"
                            >
                                Sign Up
                            </button>
						</div>
						<div
							id="buttons"
							className="mt-5 border-2 text-gray-300 border-[#292E35] bg-[#161B22] rounded-xl p-5"
						>
                            Already have an account? 
							<button
								type="button"
								onClick={navigateLogIn}
								className="ml-2 text-blue-500 hover:underline"
							>
								Log In
							</button>
						</div>
					</form>
				)}
				{verifyOTP && (
					<OtpInputWithValidation
						correctOTP={otpRef.current!}
						onValidOTP={() => router.push("/")}
					/>
				)}
			</div>
		</>
	);
}

export default Page;
