"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import api from '@/config/axios'; // Import the configured Axios instance
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify styles
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import React Icons for show/hide icon
import ForgotPassword from '@/app/forgotPassword/page'; // Import ForgotPassword component

const Page = () => {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [errorMessage, setErrorMessage] = useState(''); // State for error message
    const [forgotPassword, setForgotPassword] = useState(false); // State to toggle forgot password view

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(''); // Clear previous error message

        try {
            const response = await api.post('/users/auth/login', { email, password });

            if (response.status === 200) {
                // Show success toast
                toast.success('User Login successfully');
                localStorage.setItem('token', response.data.token);
            }
        } catch (err) {
            // Show error toast and set error message
            toast.error(err.response?.data?.message || 'Email or Password is incorrect');
            setErrorMessage('Email or Password is incorrect'); 
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    const handleForgotPassword = () => {
        setForgotPassword(true); 
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:bg-gray-800 dark:border-gray-700 p-6">
                {forgotPassword ? (
                     
                    <ForgotPassword setForgotPassword={setForgotPassword} />
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                            Login to Your Account
                        </h1>

                        <form className="space-y-4 mt-4" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"} 
                                    className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />} 
                                </button>

                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-hoverUnderlineColor focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                Don't have an account? <Link href="/signUp" className="font-medium text-hoverUnderlineColor hover:underline">Sign up</Link>
                            </p>

                            <p
                                onClick={handleForgotPassword}
                                className="text-sm font-medium text-hoverUnderlineColor hover:underline text-center cursor-pointer"
                            >
                                Forgot Password?
                            </p>
                        </form>
                    </>
                )}
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </section>
    );
};

export default Page;
