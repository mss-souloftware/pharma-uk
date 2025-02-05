import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const CustomerReviews = () => {
  // Array of 5 stars for rating display
  const stars = Array(5).fill(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center gap-8 p-8">
          {/* Left side - Image Section */}
          <div className="w-full md:w-1/2 relative md:order-1">
            <div className="relative transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/about/clientReviews.svg"
                alt="Customer Reviews Illustration"
                className="w-full h-auto rounded-lg"
                height={200}
                width={200}
              />
              
              {/* Floating elements animation */}
              <div className="absolute top-0 right-0 animate-bounce delay-100">
                <div className="w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 animate-bounce delay-300">
                <div className="w-6 h-6 bg-hoverUnderlineColor rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-1/2 right-1/4 animate-bounce delay-500">
                <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content Section */}
          <div className="w-full md:w-1/2 space-y-4 md:order-2">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-wider" style={{lineHeight: "53px"}}>
              Customer Reviews
            </h2>
            
            <p className="text-lg md:text-base md:leading-relaxed" style={{lineHeight: '44.6px'}}>
              Our customers trust us to deliver top-quality service. Read 
              more reviews on Google and TrustPilot!
            </p>

            {/* Reviews Count with Animation */}
            <div className="transform transition-all duration-500 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-hoverUnderlineColor">
                243,0094+
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-4">
                {stars.map((_, index) => (
                  <Star 
                    key={index}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-hoverUnderlineColor text-white px-8 py-3 rounded-full 
                             font-semibold transform transition-all duration-300 
                             hover:bg-hoverUnderlineColor hover:scale-105 hover:shadow-lg
                             focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;