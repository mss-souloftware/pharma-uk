"use client";
import React, { useEffect, useState } from "react";
import CompleteBtn from "./completeBtn";
import { motion } from "framer-motion";

const Consult = () => {
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const res = await fetch("/consultaionData.json");
        if (!res.ok) {
          throw new Error("Failed to fetch FAQ data");
        }
        const data = await res.json();

        if (Array.isArray(data.consultation)) {
          setFaqData(data.consultation);
          setLoading(false);
        } else {
          throw new Error("Consultation data is not an array or is missing the 'consultation' key");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  const handleAnswer = (sectionIndex, questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`${sectionIndex}-${questionIndex}`]: answer,
    }));
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 font-semibold">Error: {error}</div>;
  }

  return (
    <section className="bg-gray-900 text-white container mx-auto w-full py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Medical Assessment
        </h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          Complete this online consultation to help us supply you with the most suitable treatment.
        </p>

        {faqData.map((section, sectionIndex) => (
          <motion.div 
            key={sectionIndex} 
            className="mb-12 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-hoverUnderlineColor mb-4 text-center">
              {section.section}
            </h3>
            <div className="grid gap-6">
              {section.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <h4 className="text-lg font-medium mb-3">{question.question}</h4>
                  <div className="flex space-x-4">
                    <button
                      className={`py-2 px-6 rounded-lg transition-all duration-300 ${
                        answers[`${sectionIndex}-${questionIndex}`] === "Yes" ? "bg-hoverUnderlineColor text-white" : "bg-gray-600 text-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
                      onClick={() => handleAnswer(sectionIndex, questionIndex, "Yes")}
                    >
                      Yes
                    </button>
                    <button
                      className={`py-2 px-6 rounded-lg transition-all duration-300 ${
                        answers[`${sectionIndex}-${questionIndex}`] === "No" ? "bg-red-500 text-white" : "bg-gray-600 text-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
                      onClick={() => handleAnswer(sectionIndex, questionIndex, "No")}
                    >
                      No
                    </button>
                  </div>
                  {answers[`${sectionIndex}-${questionIndex}`] === "No" && (
                    <p className="text-red-400 text-sm mt-3">Warning: You have selected &quot;No&quot; for this question.</p>
                  )}
                  <p className="text-gray-400 text-sm mt-2">
                    Answer: {answers[`${sectionIndex}-${questionIndex}`] || "Not answered yet"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <CompleteBtn
            hrefLink="/treatments"
            className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg bg-red-500 hover:bg-red-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Consult;
