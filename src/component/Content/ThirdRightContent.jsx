import React from 'react';

const ThirdRightContent = () => {
  return (
    <div className="w-full text-left sm:text-left">
        <img 
        src="/medicalTeam.png" 
        alt="Experienced Professional"
        className="w-8 sm:w-32 md:w-8 h-auto mx-auto sm:mx-0 " 
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-lg font-extrabold sm:m-7 text-center sm:text-left">Professional medical team</h1>
      <p className="text-base text-gray-600 font-medium text-center sm:text-left">
        Our system makes it easy for healthcare professionals to share and collaborate on patient care.
      </p>
    </div>
  );
};

export default ThirdRightContent;
