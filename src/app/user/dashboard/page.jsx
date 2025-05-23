"use client";

import { useState } from "react";
import { useDashboard } from "./Userprofile";

export default function UserDashboard() {
  const { user, orders, error, loading } = useDashboard();
  const [activeTab, setActiveTab] = useState("dashboard");

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div>
            <h1 className="text-center font-bold text-[25px]">Welcome, {user?.data.name}</h1>
            <div className="flex justify-between items-center py-5">
              <p><strong>Email:</strong> {user?.data.email}</p>
              <p><strong>Role:</strong> {user?.data.role}</p>
              
            </div>
            <h2 className="text-xl font-semibold mb-3 flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 512 512" fill=""><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/></svg>Your Orders</h2>
            <ul>
              {Array.isArray(orders) && orders.length > 0 ? (
                orders.map((order) => (
                  <li key={order._id} className="text-center">
                    Order #{order._id} - {order.status} - {order.total} USD
                  </li>
                ))
              ) : (
                <li className="text-center font-normal text-[20px]">No orders found.</li>
              )}
            </ul>
          </div>
        );
      case "account":
        return <p className="text-center">Account details section (add more fields here)</p>;
      case "orders":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-3 flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 512 512" fill=""><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/></svg>Your Orders</h2>
            <ul>
              {Array.isArray(orders) && orders.length > 0 ? (
                orders.map((order) => (
                  <li key={order._id} className="text-center">
                    Order #{order._id} - {order.status} - {order.total} USD
                  </li>
                ))
              ) : (
                <li className="text-center font-normal text-[20px]">No orders found.</li>
              )}
            </ul>
          </div>
        );
      case "security":
        return <p className="text-center">Login & Security settings (e.g., password change, 2FA)</p>;
      default:
        return null;
    }
  };

  return (
    <div className="py-10">
      <div className="flex w-[80%] justify-between m-auto gap-6">
        {/* Left Sidebar */}
        <div className="border px-2 py-5 w-[30%] flex flex-col items-center">
          <div className="p-5 border rounded-full w-[55%] h-[150px]">
            <img
              src="/logouserdahboard.jpg"
              alt="Dashboard"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-center text-[16px] text-gray-600 font-bold my-4">
            Welcome, {user?.data.name}
          </h1>
          <div className="border-t py-5 w-full flex ">
            <div className="text-gray-700 font-semibold flex flex-col gap-7 text-center">
              <button onClick={() => setActiveTab("dashboard")} className={activeTab === "dashboard" ? "text-white bg-[#30BFAC] p-2 font-bold  flex justify-center items-center flex-row gap-2 " : "flex justify-center items-center flex-row gap-2 p-2 font-bold" }>
                <div  className="flex justify-center items-center flex-row "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 17 19" fill="none"><path d="M8.49969 1.05347C4.18485 1.05347 0.679688 4.76481 0.679688 9.33347C0.679688 13.9021 4.18485 17.6135 8.49969 17.6135C12.8145 17.6135 16.3197 13.9021 16.3197 9.33347C16.3197 4.76481 12.8145 1.05347 8.49969 1.05347ZM8.49969 1.77347C12.447 1.77347 15.6397 5.15393 15.6397 9.33347C15.6397 13.513 12.447 16.8935 8.49969 16.8935C7.77765 16.8935 7.08111 16.779 6.42449 16.5686C6.71698 16.0509 7.09458 15.3108 7.24461 14.6997C7.33373 14.3374 7.70016 12.8596 7.70016 12.8596C7.93829 13.341 8.63408 13.7484 9.37492 13.7484C11.5794 13.7484 13.1687 11.6017 13.1687 8.93409C13.1687 6.37662 11.1977 4.46362 8.66172 4.46362C5.50661 4.46362 3.83199 6.70576 3.83199 9.14714C3.83199 10.2825 4.40232 11.6959 5.31551 12.146C5.45383 12.2141 5.52811 12.1846 5.55988 12.0426C5.58434 11.9348 5.7077 11.4095 5.76309 11.1651C5.7808 11.0871 5.77222 11.0197 5.71262 10.9429C5.41038 10.5547 5.16809 9.84171 5.16809 9.17667C5.16809 7.4694 6.38878 5.81714 8.46848 5.81714C10.2642 5.81714 11.5218 7.1133 11.5218 8.96644C11.5218 11.0601 10.5234 12.5109 9.22418 12.5109C8.50668 12.5109 7.96941 11.8824 8.14176 11.1117C8.34841 10.1918 8.74738 9.19917 8.74738 8.53472C8.74738 7.94052 8.44622 7.44487 7.82234 7.44487C7.08881 7.44487 6.49953 8.24787 6.49953 9.32433C6.49953 10.0093 6.71867 10.4732 6.71867 10.4732C6.71867 10.4732 5.99407 13.717 5.86137 14.3207C5.72838 14.924 5.764 15.7366 5.81887 16.3415C3.20287 15.2204 1.35969 12.5084 1.35969 9.33347C1.35969 5.15393 4.55235 1.77347 8.49969 1.77347Z" fill="currentColor"/></svg></div>Dashboard
              </button>
              <button onClick={() => setActiveTab("account")} className={activeTab === "account" ? "text-white  fill-white bg-[#30BFAC] p-2 font-bold  flex justify-center items-center flex-row gap-2" : "flex justify-center items-center flex-row gap-2 p-2 font-bold"}>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 512 512" fill=""><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg></div>Account Details
              </button>
              <button onClick={() => setActiveTab("orders")} className={activeTab === "orders" ? "text-white  fill-white bg-[#30BFAC] p-2 font-bold  flex justify-center items-center flex-row gap-2" : "flex justify-center items-center flex-row gap-2 p-2 font-bold"}>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 512 512" fill=""><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/></svg></div>Orders
              </button>
              <button onClick={() => setActiveTab("security")} className={activeTab === "security" ? "text-white  fill-white bg-[#30BFAC] p-2 font-bold  flex justify-center items-center flex-row gap-2" : "flex justify-center items-center flex-row gap-2 p-2 font-bold"}>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 448 512" fill=""><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg></div>Login & Security
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="border px-6 py-5 w-[70%]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
