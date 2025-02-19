"use client";
import React, { useState } from 'react';
import api from '@/config/axios'; // Import the configured Axios instance
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify styles
import Link from 'next/link';

const ForgotPassword = ({ setForgotPassword }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post('/users/auth/forgot-password', { email });

            if (response.status === 200) {
                // Show success toast
                toast.success('Password reset link sent to your email');
                setForgotPassword(false); // Hide forgot password form after success
            }
        } catch (err) {
            // Show error toast
            toast.error(err.response?.data?.message || 'Something went wrong');         
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md dark:border dark:bg-gray-800 dark:border-gray-700 p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                Forgot Your Password
            </h1>

            <form className="space-y-4 mt-4" onSubmit={handleResetPassword}>
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <input
                        type="email"
                        className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white "
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white bg-hoverUnderlineColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    disabled={loading}
                >
                    {loading ? 'Sending email...' : 'Send Reset Link'}
                </button>

                <p
                    onClick={() => setForgotPassword(false)}
                    className="text-sm font-medium text-hoverUnderlineColor hover:underline text-center cursor-pointer"
                >
                    Back to Login
                </p>
                <Link href='/newPassword'>
                    Resert password
                </Link>
            </form>
        </div>
    );
};

export default ForgotPassword;
