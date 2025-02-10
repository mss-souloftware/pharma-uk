"use client";
import { useState } from "react";
import StepNavigation from "../stepsNavigation/page"; // Step Navigation Import

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <>
    <div className="mt-10">
        <StepNavigation />
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
  

      {/* Payment Form */}
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Secure Payment
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor"
              maxLength="16"
              required
            />
          </div>

          {/* Expiry & CVV */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor"
                maxLength="5"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                CVV
              </label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="•••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor"
                maxLength="3"
                required
              />
            </div>
          </div>

          {/* Card Holder Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor"
              required
            />
          </div>

          {/* Payment Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-hoverUnderlineColor text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Payment;
