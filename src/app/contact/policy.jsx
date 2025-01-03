import React from 'react';

const Policy = () => {
  return (
    <div className="container mx-auto px-4 my-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-hoverUnderlineColor mb-8">
          Our Policies
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Here you can find the most important information regarding our policies and services.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Policy Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl lg:text-3xl xl:text-3xl md:text-2xl font-extrabold mb-4 text-hoverUnderlineColor">
            Policy
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Our policy ensures that all your data is handled securely and in accordance with legal requirements. We aim to provide the best services while safeguarding your privacy.
          </p>
        </div>

        {/* Privacy Assurance Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl lg:text-3xl xl:text-3xl md:text-2xl font-extrabold mb-4 text-hoverUnderlineColor">
            Privacy Assurance
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            We guarantee that your personal information will be kept safe and used only for the intended purposes. Your privacy is our priority.
          </p>
        </div>

        {/* Complaints Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl lg:text-3xl xl:text-3xl md:text-2xl font-extrabold mb-4 text-hoverUnderlineColor">
            Complaints
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            If you have any complaints or concerns, please reach out to us. We are committed to resolving issues in a timely and efficient manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
