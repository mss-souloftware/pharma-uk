import React from 'react';
import './style/RightContent.css'

const FirstRightContent = () => {
  return (
    <div className="w-full text-left sm:text-left">
      {/* Image with responsive sizing and smaller dimensions */}
      <img 
        src="/experienced1.png" 
        alt="Experienced Professional"
        className="w-8 sm:w-32 md:w-8 h-auto mx-auto sm:mx-0" 
      />
      
      {/* Heading with responsive font size */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-lg font-extrabold sm:m-7 text-center sm:text-left">
        25+ years experience
      </h1>

      {/* Paragraph with responsive text size */}
      <p className="text-base sm:text-lg text-gray-600 font-medium text-center sm:text-left">
        Our system makes it easy for healthcare professionals to share and collaborate on patient care.
      </p>
    </div>
  );
};

export default FirstRightContent;
