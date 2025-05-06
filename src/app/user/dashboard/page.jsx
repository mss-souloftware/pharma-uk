"use client"
import { useState } from 'react';

export default function ProfilePage() {
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [referralDiscounts, setReferralDiscounts] = useState(0);
  const [promotions, setPromotions] = useState(2); // example number
  const [orders, setOrders] = useState([]);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div>
                <h2 className="font-semibold text-xl text-[#212121]">M Sufyan Shaikh</h2>
                <p className="text-sm text-gray-500">Good Morning, M Sufyan</p>
              </div>
            </div>
            <div className="mt-6">
              <ul className="space-y-4">
                <li><a href="#" className="text-lg text-[#212121] hover:text-[#C62638]">Dashboard</a></li>
                <li><a href="#" className="text-lg text-[#212121] hover:text-[#C62638]">Account Details</a></li>
                <li><a href="#" className="text-lg text-[#212121] hover:text-[#C62638]">Orders</a></li>
                <li><a href="#" className="text-lg text-[#212121] hover:text-[#C62638]">Cards</a></li>
                <li><a href="#" className="text-lg text-[#212121] hover:text-[#C62638]">Notifications</a></li>
                <li><a href="#" className="text-lg text-[#212121] hover:text-[#C62638]">Login & Security</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-semibold text-[#212121]">Good Morning, M Sufyan</h2>
                <div className="mt-4 flex space-x-6">
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-[#212121]">Promotions</h3>
                    <span className="ml-2 bg-[#C62638] text-white rounded-full px-3 py-1">{promotions} New</span>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-[#212121]">Referral Discounts</h3>
                    <span className="ml-2 bg-[#C62638] text-white rounded-full px-3 py-1">{referralDiscounts}</span>
                  </div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-[#212121]">Loyalty Points</h3>
                    <span className="ml-2 bg-[#C62638] text-white rounded-full px-3 py-1">{loyaltyPoints}</span>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#C62638] text-white px-4 py-2 rounded-lg hover:bg-[#C62638]">View All</button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#212121]">Latest Order</h3>
              <p className="text-gray-500 mt-2">No orders have been placed yet.</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#212121]">Latest Promotion</h3>
              <div className="bg-[#f0f0f0] p-6 mt-4 rounded-lg">
                <p className="text-lg font-medium text-[#212121]">M Sufyan, Get 10% OFF for You and Your Friends!</p>
                <p className="mt-2 text-gray-600">You can now earn rewards by referring your friends and family to Pharmacal! Each person you refer will get a 10% discount to use on their first order - and when their order is dispatched, you'll get 10% OFF your next order too!</p>
                <button className="bg-[#C62638] text-white px-4 py-2 mt-4 rounded-lg hover:bg-[#C62638]">Start Earning</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
