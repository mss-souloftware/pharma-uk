  "use client";
  import React, { useState } from "react";
  import api from "@/config/axios";

  const Page = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (newPassword !== confirmPassword) {
        setError("Passwords don't match!");
        return;
      }
      
      setLoading(true);
      setError("");

      try {
        const authToken = localStorage.getItem("authToken"); 
        
        const response = await api.post("/users/auth/reset-password", {
          newPassword,
        }, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        const data = response.data;
        console.log(data.message);  
        if (data.success) {
          alert("Password reset successful!");
        } else {
          setError(data.message || "Something went wrong. Please try again later.");
        }
      } catch (err) {
        setError("Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Reset Your Password</h2>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-hoverUnderlineColor text-white font-semibold rounded-lg disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Processing..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Page;