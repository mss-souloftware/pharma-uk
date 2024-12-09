"use client"; // This marks the file as a client-side component
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa"; // For loading spinner

const Content = () => {
  // State to store dynamic data
  const [rating, setRating] = useState(4.8);
  const [clients, setClients] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);
  const [clientRetention, setClientRetention] = useState(0);

  const [loading, setLoading] = useState(true); // Track loading state

  // Simulating a fetch from backend API (e.g., using fetch/axios)
  useEffect(() => {
    // Replace this with an actual API call
    setTimeout(() => {
      setClients(500);
      setAverageRating(4.8);
      setPositiveFeedback(96);
      setClientRetention(100);
      setRating(4.8);
      setLoading(false); // Stop loading after data is set
    }, 2000); // Simulate an API response delay
  }, []);

  return (
    <div className="w-full px-4 py-8 md:px-8 bg-secondary text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Text Content */}
        <motion.div
  className="flex flex-col space-y-6" // Add space between child elements
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2 className="text-3xl font-bold mb-4">Client Satisfaction</h2>
  <p className="text-lg leading-relaxed">
    At ,i<span className="text-hoverUnderlineColor">feel</span>shy, we take immense pride in prioritizing our clients' satisfaction. Our
    mission is to deliver exceptional service and foster lasting relationships. We focus not only on meeting but exceeding the
    expectations of every client that interacts with us. Our commitment to client satisfaction drives everything we do, and we
    continually evolve to enhance our offerings and services.
  </p>
  <p className="text-lg leading-relaxed">
    Our dedicated team works tirelessly behind the scenes to ensure that each interaction is personalized and impactful. From the
    moment you first reach out to us to the completion of your service, we aim to make every touchpoint a positive experience. We
    believe in constant improvement, seeking feedback, and utilizing it to refine our processes for a better overall experience.
  </p>
  <p className="text-lg leading-relaxed">
    The satisfaction of our clients is a testament to our passion for delivering high-quality service. With an average rating of
    {rating}, and a client retention rate of {clientRetention}%, we are proud to see the positive results of our hard work and
    dedication. At ,i<span className="text-hoverUnderlineColor">feel</span>shy, your satisfaction is our success.
  </p>
</motion.div>


        {/* Right Section: Rating & Client Stats */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Satisfaction Rating</h3>
          
          {/* Rating Display */}
          <div className="flex justify-between mb-4">
            <motion.span
              className="text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <FaSpinner className="animate-spin text-white text-3xl" />
                </div>
              ) : (
                rating.toFixed(1) + " / 5"
              )}
            </motion.span>
          </div>

          {/* Client Satisfaction Stats Section in Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Happy Clients */}
            <motion.div
              className="text-center p-6 bg-cardBg rounded-lg shadow-lg transition-all duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.h5
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <FaSpinner className="animate-spin text-white text-3xl" />
                  </div>
                ) : (
                  clients + "+"
                )}
              </motion.h5>
              <p className="text-lg">Happy Clients</p>
            </motion.div>

            {/* Average Rating */}
            <motion.div
              className="text-center p-6 bg-cardBg rounded-lg shadow-lg transition-all duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <motion.h5
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <FaSpinner className="animate-spin text-white text-3xl" />
                  </div>
                ) : (
                  averageRating
                )}
              </motion.h5>
              <p className="text-lg">Average Rating</p>
            </motion.div>

            {/* Positive Feedback */}
            <motion.div
              className="text-center p-6 bg-cardBg rounded-lg shadow-lg transition-all duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <motion.h5
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <FaSpinner className="animate-spin text-white text-3xl" />
                  </div>
                ) : (
                  positiveFeedback + "%"
                )}
              </motion.h5>
              <p className="text-lg">Positive Feedback</p>
            </motion.div>

            {/* Client Retention */}
            <motion.div
              className="text-center p-6 bg-cardBg rounded-lg shadow-lg transition-all duration-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <motion.h5
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <FaSpinner className="animate-spin text-white text-3xl" />
                  </div>
                ) : (
                  clientRetention + "%"
                )}
              </motion.h5>
              <p className="text-lg">Client Retention</p>
            </motion.div>
          </div>

          {/* Website Overview Section */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-2">Website Overview</h4>
            <p className="text-lg">
              Our website is designed to offer the best user experience, making it easier than ever for our clients to access health-related services, products, and information. With user-friendly navigation and high-quality resources, our platform empowers clients to make informed decisions about their wellness journey.
            </p>
            <p className="text-lg">
              We continuously update our site to provide the most relevant content, tools, and services to meet the needs of our diverse clientele. Whether you're here for educational materials or health products, you can expect a seamless and efficient experience every time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
