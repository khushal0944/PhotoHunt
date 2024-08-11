"use client"
import React, { useRef, useEffect, useState, KeyboardEvent, ChangeEvent } from "react";

interface OtpInputWithValidationProps {
    numberOfDigits?: number;
    correctOTP: string;
    onValidOTP?: () => void;
}

const OtpInputWithValidation: React.FC<OtpInputWithValidationProps> = ({ 
    numberOfDigits = 6, 
    correctOTP,
    onValidOTP 
}) => {
    const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(""));
    const [otpError, setOtpError] = useState<string | null>(null);
    const otpBoxReference = useRef<(HTMLInputElement | null)[]>([]);

    function handleChange(value: string, index: number): void {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);

        if (value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1]?.focus();
        }
    }

    function handleBackspaceAndEnter(e: KeyboardEvent<HTMLInputElement>, index: number): void {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            otpBoxReference.current[index - 1]?.focus();
        }
        if (e.key === "Enter" && e.currentTarget.value && index < numberOfDigits - 1) {
            otpBoxReference.current[index + 1]?.focus();
        }
    }

    useEffect(() => {
        const currentOTP = otp.join("");
        if (currentOTP.length === numberOfDigits) {
            if (currentOTP === correctOTP) {
                setOtpError(null);
                onValidOTP?.();
            } else {
                setOtpError("❌ Wrong OTP. Please check again.");
            }
        } else {
            setOtpError(null);
        }
    }, [otp, correctOTP, numberOfDigits, onValidOTP]);

    return (
        <div className="shadow-2xl w-1/2 bg-[#9d90903b] max-h-fit min-h-4/5 min-w-fit p-10 flex gap-5 items-center flex-col">
            <p className="text-5xl text-center font-medium text-white mt-12">
                OTP Input With Validation
            </p>
            <p className="text-base text-white mt-4 bg-[#323232] p-4 rounded-md">
                Enter the {numberOfDigits}-digit OTP. The input will validate automatically.
            </p>

            <p className="text-base text-white mt-6 mb-4">
                One Time Password (OTP)
            </p>

            <div className="flex items-center gap-4">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        value={digit}
                        maxLength={1}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, index)}
                        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => handleBackspaceAndEnter(e, index)}
                        ref={(el: any) => otpBoxReference.current[index] = el}
                        className={`border text-xl w-10 text-center h-auto text-white p-3 rounded-md bg-black focus:border-2 focus:outline-none appearance-none`}
                    />
                ))}
            </div>

            <p
                className={`text-lg text-white mt-4 ${
                    otpError ? "error-show" : ""
                }`}
            >
                {otpError}
            </p>
        </div>
    );
}

export default OtpInputWithValidation;