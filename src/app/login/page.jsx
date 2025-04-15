"use client";
import api from '@/config/axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
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

      if (response.status === 200) {
        // ✅ Save user info in local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userEmail', email);

        toast.success("Login successful! Redirecting...");
        
        setTimeout(() => {
          router.push('/'); // ✅ Redirect to home page
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Email or Password is incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h1>
        
        <form className="space-y-4 mt-6" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
          
          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-2 text-gray-500">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          
          <button type="submit" className="w-full bg-hoverUnderlineColor text-white p-2 rounded" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          <button onClick={() => router.push('/forgotPassword ')} className="text-hoverUnderlineColor">Forgot Password?</button>
        </p> 
        
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account? <Link href="/signUp" className="text-hoverUnderlineColor">Sign Up</Link>
        </p>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </section>
  );
};

export default LoginPage;