"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '@/config/axios';
const SignupPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    // ✅ Password Match Validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(`/users/auth/signup`, { name, email, password });

      if (response.status === 201) {
        // ✅ Save user info in local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);

        toast.success("Signup successful! Redirecting...");
        
        setTimeout(() => {
          router.push('/'); // ✅ Redirect to home page
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800 p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h1>
        
        <form className="space-y-4 mt-6" onSubmit={handleSignup}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded" />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full p-2 border rounded" />
          
          <button type="submit" className="w-full bg-[#1AB8A3] text-white p-2 rounded" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Already have an account? <Link href="/login" className="text-[#1AB8A3]
           ">Login</Link>
        </p>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </section>
  );
};

export default SignupPage;
