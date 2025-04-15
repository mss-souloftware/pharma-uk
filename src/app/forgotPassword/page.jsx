"use client";
import React, { useState } from "react";
import api from "@/config/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      const response = await api.post("/users/auth/forgot-password", { email });
      const data = response.data;

      if (response.status === 200) {
        toast.success(`${data.message}, redirecting...` || "dd", {
          autoClose: 1000,
          onClose: () => {
            router.push(`/verify-opt?email=${email}`);
          },
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Forgot Your Password
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
          Enter your email to reset your password
        </p>
        <div className="space-y-5">
          <div>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white "
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            onClick={handleResetPassword}
            className="w-full bg-hoverUnderlineColor text-white font-semibold rounded-lg text-lg py-3"
            disabled={loading}
          >
            {loading ? "Sending email..." : "Send OTP"}
          </button>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <Link href='/login'>
            <button type="button" className="hover:text-hoverUnderlineColor">
              Back to Login
            </button>
            </Link>
            <Link
              href="/newPassword"
              className="hover:text-hoverUnderlineColor "
            >
              Reset Password
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ForgotPassword;
