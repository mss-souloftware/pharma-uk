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
        if (!res.ok) throw new Error("Failed to fetch FAQ data");

        const data = await res.json();
        if (Array.isArray(data.consultation)) {
          setFaqData(data.consultation);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  const handleAnswer = (sectionIndex, questionIndex, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [`${sectionIndex}-${questionIndex}`]: answer,
    }));
  };

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500 font-semibold">Error: {error}</div>;

  return (
    <section className="container mx-auto w-full py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Step Navigation */}
      <div className="mb-10">
        <StepNavigation />
      </div>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Medical Assessment
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Complete this consultation to help us provide you with the most suitable treatment.
        </p>

        {faqData.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            className="mb-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-hoverUnderlineColor mb-4 text-center">
              {section.section}
            </h3>

            <div className="grid gap-6">
              {section.questions.map((question, questionIndex) => (
                <div key={questionIndex} className="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200">
                  <h6 className="text-sm font-medium text-gray-800 mb-3">{question.question}</h6>

                  <div className="flex space-x-4">
                    <button
                      className={`py-2 px-6 text-sm font-medium rounded-lg transition-all duration-300 ${
                        answers[`${sectionIndex}-${questionIndex}`] === "Yes"
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-800 hover:bg-green-500 hover:text-white"
                      }`}
                      onClick={() => handleAnswer(sectionIndex, questionIndex, "Yes")}
                    >
                      Yes
                    </button>

                    <button
                      className={`py-2 px-6 text-sm font-medium rounded-lg transition-all duration-300 ${
                        answers[`${sectionIndex}-${questionIndex}`] === "No"
                          ? "bg-hoverUnderlineColor text-white"
                          : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
                      }`}
                      onClick={() => handleAnswer(sectionIndex, questionIndex, "No")}
                    >
                      No
                    </button>
                  </div>

                  {answers[`${sectionIndex}-${questionIndex}`] === "No" && (
                    <p className="text-hoverUnderlineColor text-sm mt-3">⚠️ This may affect your eligibility for treatment.</p>
                  )}

                  <p className="text-gray-500 text-xs mt-2">
                    Answer: {answers[`${sectionIndex}-${questionIndex}`] || "Not answered yet"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Complete Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <CompleteBtn
            hrefLink="/treatments"
            className="py-4 px-8 bg-hoverUnderlineColor text-white text-lg font-medium rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Consult;
