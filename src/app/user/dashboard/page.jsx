"use client";

import { useDashboard } from "./Userprofile";
import {dashoboardImage} from "../download.png"
export default function UserDashboard() {
  const { user, orders, error, loading } = useDashboard();

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log("user" , user)

  return (
    <div>
      <div className="flex w-[50%] justify-between px-5 py-10 m-auto ">
        <div className="border px-2 py-5 w-[33%] flex justify-center flex-col " >

     
     <div className="p-5 border rounded-full w-[55%] m-auto h-[150px]">
     <img src='/download.png' alt="Dashboard" className="w-full h-full object-cover rounded-full" />

     </div>
     <h1 className="text-center text-[16px]  text-grey font-bold my-4" >Welcome, {user?.data.name}</h1>
     
      <div className="border bt-1 py-5 w-full flex items-center justify-center">
      <div  className=" text-gray font-bold flex  flex-col gap-5 ">
       <h2 className="text-[#888]" >Dashboard</h2> 
       <h2 className="text-[#888]" >Account Details</h2> 
       <h2 className="text-[#888]" >Orders</h2> 
       <h2 className="text-[#888]" > Login & Security</h2> 
      
      </div>

      </div>
        </div>

      <div className="border px-6 py-5 w-[65%]">
        <h1  className="text-center font-bold text-[25px]" >Welcome, {user?.data.name}</h1>
        <div className="flex justify-between items-center py-5">
         <p><strong>Email:</strong> {user?.data.email}</p>
      <p><strong>Role:</strong> {user?.data.role}</p>
      </div>
        <h2>Your Orders</h2>
      <ul>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order) => (
            <li key={order._id} className="text-center" >
              Order #{order._id} - {order.status} - {order.total} USD
            </li>
          ))
        ) : (
          <li   className="text-center font-normal text-[20px]">No orders found.</li>
        )}
      </ul>
      </div>
      </div>
    </div>
  );
}
