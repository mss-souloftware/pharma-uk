"use client";
import api from '@/config/axios';
import Link from 'next/link';
import React, { useState } from 'react';

const SignupPage = () => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null); 

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
        const response = await api.post('/users/auth/signup', { name, email, password }); 
        const data = response.data;
      
      if (response.status !== 200) {
        throw new Error(data.message || 'Signup failed');
      }

      alert('Signup successful!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:border dark:bg-gray-800 dark:border-gray-700 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Create an Account</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
          Sign up to get started and enjoy our services
        </p>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form className="space-y-4 mt-6" onSubmit={handleSignup}>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white "
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white "
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required  
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white "
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-start">
            <input id="terms" type="checkbox" className="w-4 h-4 border rounded " required />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              I accept the <Link href="#" className="text-hoverUnderlineColor hover:underline dark:text-blue-400">Terms and Conditions</Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-hoverUnderlineColor text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="text-hoverUnderlineColor hover:underline dark:text-blue-400">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
