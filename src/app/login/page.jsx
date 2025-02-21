"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import api from '@/config/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';     
import { useRouter } from 'next/navigation';

const Page = () => {
      const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 

    const handleLogin = async (e) => {  
        e.preventDefault();
        setLoading(true);
        try {
            const response = await api.post('/users/auth/login', { email, password });
            console.log(response.data.message); 
            if (response.status === 200) {
                toast.success('User Login successfully');
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userEmail', email);
                router.push('/');

            };
        } catch (err) {
            toast.error(err.response?.data?.message || 'Email or Password is incorrect');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center  dark:bg-gray-900 px-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
             
                        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Login</h1>
                            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">Access your account</p>
                        <form className="space-y-5" onSubmit={handleLogin}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white "
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white "
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-hoverUnderlineColor text-white font-semibold rounded-lg text-lg py-3"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...'   : 'Login'}
                            </button>
                            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                <Link href="/signUp" className="hover:text-hoverUnderlineColor">Sign up</Link>
                                <Link href="/forgotPassword" className="hover:text">Forgot password?</Link>
                            </div>
                        </form>
                   
            </div>
            <ToastContainer />
        </section>
    );
};

export default Page;