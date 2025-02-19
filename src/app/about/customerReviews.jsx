import React from 'react';
import { Star } from 'lucide-react';

const CustomerReviews = () => {
  const stars = Array(5).fill(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 md:p-8">
          {/* Left side - Image Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative transform transition-transform duration-500 hover:scale-105">
              <img
                 src="/about/clientReviews.svg"
                alt="Customer Reviews Illustration"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating elements */}
              <div className="absolute top-0 right-0 animate-bounce">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-400 rounded-full opacity-60"></div>
              </div>
              <div className="absolute bottom-0 left-0 animate-bounce delay-300">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-1/2 right-1/4 animate-bounce delay-500">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content Section */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Customer Reviews
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-gray-600">
              Our customers trust us to deliver top-quality service. Read 
              more reviews on Google and TrustPilot!
            </p>

            {/* Reviews Count */}
            <div className="transform transition-all duration-500 hover:scale-105">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">
                243,094+
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-4 justify-center md:justify-start">
                {stars.map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-hoverUnderlineColor text-white font-medium rounded-lg shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-700 w-full md:w-auto">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;