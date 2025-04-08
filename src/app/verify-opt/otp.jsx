"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import api from "@/config/axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const Otp = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    try {
      const response = await api.post("/users/auth/verify-otp", { email, otp: enteredOtp });
      const data = response.data;

      if (response.status === 200) {
        const token = data.data.token;
        localStorage.setItem("authToken", token);
        console.log(token)
        
        toast.success(`${data.message}, redirecting...`, {
          autoClose: 1000,
          onClose: () => {
            router.push(`/newPassword`);
          },
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Verification failed");
    }
  };

  const resendOtpHandler = async  () => {
    try {
      const response = await api.post("/users/auth/resend-otp", { email });
      const data = response.data;

      if (response.status === 200) {        
        toast.success(`${data.message} otp: ${data.data.otp}`, {
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Verification failed");
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <h2 className="font-semibold text-3xl">Email Verification</h2>
            <p className="text-sm font-medium text-gray-400">
              We have sent a code to your email {email}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-16">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  className="w-16 h-16 text-center border rounded-xl text-lg bg-white focus:bg-gray-50 outline-none"
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full py-5 bg-hoverUnderlineColor text-white rounded-xl shadow-sm"
            >
              Verify Account
            </button>
          </form>

          <div className="text-sm text-center text-gray-500">
            <p>
              Didn&apos;t receive code?{" "}
              <a className="text-blue-500 cursor-pointer" onClick={resendOtpHandler}>Resend</a>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Otp;
