"use client";
import React, { useEffect, useState } from "react";
import CompleteBtn from "./completeBtn";
import { motion } from "framer-motion";
import StepNavigation from "../stepsNavigation/page";

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
    <section className=" text-black container mx-auto w-full py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <StepNavigation/>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  mb-6">
          Medical Assessment
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          Complete this online consultation to help us supply you with the most suitable treatment.
        </p>

        {faqData.map((section, sectionIndex) => (
          <motion.div 
            key={sectionIndex} 
            className="mb-12 p-6 rounded-xl shadow-lg hover:shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-hoverUnderlineColor mb-4 text-center">
              {section.section}
            </h3>
            <div className="grid gap-6">
              {section.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="  p-4 rounded-lg ">
                  <h6 className="text-sm font-medium mb-3">{question.question}</h6>
                  <div className="flex space-x-4">
                    <button
                      className={`py-2 px-6 text-xs rounded-lg transition-all duration-300 ${
                        answers[`${sectionIndex}-${questionIndex}`] === "Yes" ? "bg-green-700 text-white" : "bg-gray-600 text-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
                      onClick={() => handleAnswer(sectionIndex, questionIndex, "Yes")}
                    >
                      Yes
                    </button>
                    <button
                      className={`py-2 px-6 text-xs rounded-lg transition-all duration-300 ${
                        answers[`${sectionIndex}-${questionIndex}`] === "No" ? "bg-hoverUnderlineColor text-white" : "bg-gray-600 text-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor focus:ring-opacity-50`}
                      onClick={() => handleAnswer(sectionIndex, questionIndex, "No")}
                    >
                      No
                    </button>
                  </div>
                  {answers[`${sectionIndex}-${questionIndex}`] === "No" && (
                    <p className="text-red-400 text-sm mt-3">Warning: You have selected &quot;No&quot; for this question.</p>
                  )}
                  <p className="text-gray-400 text-xs mt-2">
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
            className="py-4 xl:px-5 sm:py-4 xl:py-6 md:px-6 md:py-5 lg:py-5 sm:w-[20%] w-[30vw] sm:h-[4vh] h-[4vh] md:w-[20%] md:h-[3vh] lg:h-[4vh] lg:w-[12rem] sm:text-base text-xs bg-hoverUnderlineColor text-white font-normal rounded-lg shadow-lg transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] duration-300 flex items-center justify-center"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Consult;
