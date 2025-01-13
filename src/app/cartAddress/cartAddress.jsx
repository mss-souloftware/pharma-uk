"use client";
import React from "react";

const CartAddress = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-20 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white">
        Contact <span className="text-hoverUnderlineColor">Us</span>
      </h2>
      <p className="mb-8 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
      </p>
      <form action="#" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block mb-4 text-lg font-medium text-gray-600 dark:text-gray-300">
            Your Name
          </label>
          <input type="text" id="name" className="block w-full p-3 text-base r ounded-lg bg-gray-50 border-gray-300 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter Your Name" required />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block mb-4 text-lg font-medium text-gray-600 dark:text-gray-300">
            Your Email
          </label>
          <input type="email" id="email" className="block w-full p-3 text-base rounded-lg bg-gray-50 border-gray-300 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter Your Email" required />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block mb-4 text-lg font-medium text-gray-600 dark:text-gray-300">
            Phone   
          </label>
          <input type="tel" id="phone" className="block w-full p-3 text-base rounded-lg bg-gray-50 border-gray-300 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter Your Phone Number" required />
        </div>

        {/* Home Address Input */}
        <div>
          <label htmlFor="address" className="block mb-4 text-lg font-medium text-gray-600 dark:text-gray-300">
            Home Address
          </label>
          <input type="text" id="address" className="block w-full p-3 text-base rounded-lg bg-gray-50 border-gray-300 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Enter Your Home Address" required />
        </div>

        {/* Message Textarea */}
        <div className="lg:col-span-2">
          <label htmlFor="message" className="block mb-4 text-lg font-medium text-gray-600 dark:text-gray-400">
            Send message <span className="text-sm text-gray-400">(Optional)</span>
          </label>
          <textarea id="message" rows="6" className="block w-full p-3 text-base rounded-lg bg-gray-50 border-gray-300 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Leave a comment..." />
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2">
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700">
            Send message
          </button>    
        </div>

        {/* Terms Checkbox */}
        <div className="lg:col-span-2 flex items-center mt-8">
          <input type="checkbox" id="terms" className="w-7 h-7 text-primary-600 bg-gray-100 rounded focus:ring-0 focus:outline-none dark:bg-gray-700" required />
          <label htmlFor="terms" className="ml-2 text-lg font-medium text-gray-500 dark:text-gray-300">
            I agree to the terms and conditions outlined in the <a href="#" className="text-hoverUnderlineColor font-semibold hover:underline">Privacy Policy</a>.
          </label>
        </div>
      </form>
    </section>
  );
};

export default CartAddress;
