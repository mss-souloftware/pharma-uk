  import React from 'react';
  import { Search, ShieldCheck, Package, Truck } from 'lucide-react';
import Image from 'next/image';

    const Hero = () => {
    return (
      <section className="relative h-[40rem ] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0    to-transparent z-10" />
          <Image
          height={400}
          width={400}
            src="/imagetextheer.svg" 
            alt="Pharmacy Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="max-w-3xl">
              {/* Hero Content */}
              <div className="space-y-8">
                {/* Main Text */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Welcome To Your <br></br> Trusted UK 
                  </h1>
                  <p className="text-black-900 text-lg sm:text-xl font-medium leading-[1.5]">
                    Discover why iFeelShy is the go-to choice for seamless <br></br>and convenient online pharmacy services. Shop with<br></br> confidence today!
                  </p>
                  <p className="text-black-900 text-lg sm:text-xl font-medium leading-[1.5]">
                  The Winner of the Feefo Platinum<br></br>
                  Trusted Service Award in 2025                
                    </p>
                </div>

                {/* Search Bar */}
                {/* <div className="relative max-w-xl">
                  <input
                    type="text"
                    placeholder="Search for medicines..."
                    className="w-full px-6 py-4 text-lg rounded-full border-2 border-gray-200 
                            bg-white/90 backdrop-blur-sm
                            focus:outline-none focus:border-[#30BFAC] focus:ring-2 focus:ring-red-200
                            transition-all duration-300 ease-in-out"
                  />
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2
                            bg-[#1AB8A3]  hover:bg-[#1AB8A3] text-white p-2 rounded-full
                            transition-colors duration-300"
                  >
                    <Search size={24} />
                  </button>
                </div> */}

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="group">
                    <div className="flex items-start gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl 
                                shadow-sm hover:shadow-md transition-all duration-300
                                border border-gray-100 hover:border-[#1AB8A3]">
                      <div className="shrink-0">
                        <div className="p-2 bg-[#1ab8b430] rounded-lg group-hover:bg-[#1ab8b430] transition-colors duration-300">
                          <ShieldCheck className="w-6 h-6 text-[#1AB8A3]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Fully Licensed</h3>
                        <p className="text-gray-600 text-sm">UK Registered Online Pharmacy</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl 
                                shadow-sm hover:shadow-md transition-all duration-300
                                border border-gray-100 hover:border-[#1AB8A3]">
                      <div className="shrink-0">
                        <div className="p-2 bg-[#1ab8b430] rounded-lg group-hover:bg-[#1ab8b430] transition-colors duration-300">
                          <Package className="w-6 h-6 text-[#1AB8A3]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Secure Packaging</h3>
                        <p className="text-gray-600 text-sm">Discreet and Private Delivery</p>
                      </div>
                    </div>
                  </div>

                  <div className="group sm:col-span-2">
                    <div className="flex items-start gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-xl 
                                shadow-sm hover:shadow-md transition-all duration-300
                                border border-gray-100 hover:border-[#1AB8A3]">
                      <div className="shrink-0">
                        <div className="p-2 bg-[#1ab8b430] rounded-lg group-hover:bg-[#1ab8b430] transition-colors duration-300">
                          <Truck className="w-6 h-6 text-[#1AB8A3]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Next-Day Delivery</h3>
                        <p className="text-gray-600 text-sm">Fast and Reliable Shipping Nationwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;