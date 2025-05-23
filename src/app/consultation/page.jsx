"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CompleteBtn from "./completeBtn";
import StepNavigation from "../stepsNavigation/page";
import api from "../../config/axios";

const Consult = () => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({});
  const [errors, setErrors] = useState({});
  const [productId, setProductId] = useState(null); // <-- here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = new URLSearchParams(window.location.search).get("id");
        if (!id) {
          throw new Error("Missing product ID");
        }
        setProductId(id);

        const res = await api.get(`/products/${id}`);
        const result = res.data; // Axios already gives you parsed data

        const questions = result.data?.consultationQuestions;
        if (result.status?.success && Array.isArray(questions)) {
          setFaqData(questions);
        } else {
          throw new Error(result.message || "Failed to load consultation data");
        }
      } catch (err) {
        setError(err.message || "Error loading consultation");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);




  const handleAnswer = (questionId, selectedAnswer, correctAnswer, message) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedAnswer,
    }));

    if (selectedAnswer !== correctAnswer) {
      setErrors((prev) => ({ ...prev, [questionId]: message }));
    } else {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[questionId];
        return updated;
      });
    }
  };

  const renderQuestion = (questionObj, prefix = "") => {
    const questionId = prefix + questionObj.questionText;
    const selectedAnswer = answers[questionId];

    return (
      <div
        key={questionId}
        className="my-3 bg-white shadow border p-5 rounded-lg"
      >
        <h4 className="text-lg font-medium">{questionObj.questionText}</h4>

        <div className="mt-3 flex flex-wrap gap-4">
          {questionObj.answers.map((opt, idx) => (
            <button
              key={idx}
              onClick={() =>
                handleAnswer(
                  questionId,
                  opt.text,
                  opt.isCorrect ? opt.text : null,
                  opt.message
                )
              }
              className={`px-6 py-2 rounded-lg font-medium ${selectedAnswer === opt.text
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              {opt.text}
            </button>
          ))}
        </div>

        {errors[questionId] && (
          <p className="text-red-600 text-sm mt-2">⚠️ {errors[questionId]}</p>
        )}

        {selectedAnswer &&
          questionObj.answers
            .find((a) => a.text === selectedAnswer)
            ?.followUpQuestions?.map((nestedQ, i) =>
              renderQuestion(nestedQ, `${questionId}-followup-${i}-`)
            )}
      </div>
    );
  };


  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;

  if (error)
    return (
      <div className="text-center text-red-500 font-semibold">
        Error: {error}
      </div>
    );

  return (
    <section className="container mx-auto w-full py-12 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="mb-10">
        <StepNavigation />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Medical Assessment
        </h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Complete this consultation to help us provide you with the most
          suitable treatment.
        </p>

        {faqData.map((q) => renderQuestion(q))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <CompleteBtn
            hrefLink={`/treatments/?id=${productId}`}
            className="py-4 px-8 bg-[#1AB8A3] text-white text-lg font-medium rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Consult;
