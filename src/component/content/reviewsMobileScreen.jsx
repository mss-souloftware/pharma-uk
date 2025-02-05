import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';

const ReviewsMobileScreen = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4 lg:py-16 lg:px-6 text-center">
          <Typography
                  variant="h2"
                  color="blue-gray"
                  className=" lg:text-4xl md:text-3xl sm:text-2xl xl:text-5xl text-center mb-8 xl:mb-16 text-hoverUnderlineColor text-xl "
                >  Real Stories, Real Impact 
                </Typography>
        <blockquote className="mb-6">
          <p className="text-base font-medium text-gray-900 dark:text-white">
            Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.
          </p>
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center justify-center space-x-3 mt-6">
          {/* Profile Picture */}
           
          {/* Client Details */}
          <div className="flex items-center divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">
              Michael Gough
            </div>
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMobileScreen;
