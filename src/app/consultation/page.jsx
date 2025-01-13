"use client";
import React, { useEffect, useState } from "react";
import CompleteBtn from "./completeBtn";

const Page = () => {
  const [faqData, setFaqData] = useState([]);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState({}); // To store Yes/No answers

  // Fetch FAQ data from JSON file
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
        } else {
          throw new Error(
            "Consultation data is not an array or is missing the 'consultation' key"
          );
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFaqData();
  }, []);

  // Handle Yes/No button click
  const handleAnswer = (sectionIndex, questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`${sectionIndex}-${questionIndex}`]: answer,
    }));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 container mx-auto w-full">
      <div className="py-8 max-w-screen-xl sm:py-16 lg:px-7">
        <h2 className="mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight font-extrabold text-black dark:text-white text-center sm:text-left">
          Medical Assessment for{" "}
          <span className="text-hoverUnderlineColor">Condoms</span>
        </h2>
        <h4 className="text-lg mb-10 font-normal text-gray-600 ">
          To help us supply you with the most suitable treatment, please
          complete this online consultation.
        </h4>

        {/* Iterate over sections */}
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16 grid ">
            <h3 className="text-2xl font-bold text-hoverUnderlineColor dark:text-white mb-6 justify-center flex sm:block sm:px-4 lg:px-0">
              {section.section}
            </h3>

            {/* Grid for questions and answers */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 pt-4 text-center sm:text-left border-t border-gray-200 dark:border-gray-700 w-full xl:w-[125%] ">
              {section.questions.map((question, questionIndex) => (
                <div
                  key={questionIndex}
                  className="flex flex-col items-center sm:items-start mb-8 w-full"
                >
                  <h4 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white sm:px-4 xl:pr-10 lg:px-0 px-4 ">
                    <span className="text-gray-700">{question.question}</span>
                  </h4>

                  {/* Yes/No Buttons */}
                  <div className="flex space-x-4 justify-center sm:justify-start sm:px-4 lg:px-0">
                    <button
                      className={`py-2 px-4 rounded-lg border border-hoverUnderlineColor transition-all duration-300 ${
                        answers[`${sectionIndex}-${questionIndex}`] === "Yes"
                          ? "bg-hoverUnderlineColor text-white"
                          : "bg-gray-50 text-gray-400"
                      }`}
                      onClick={() =>
                        handleAnswer(sectionIndex, questionIndex, "Yes")
                      }
                    >
                      Yes
                    </button>
                    <button
                      className={`py-2 px-4 rounded-lg border border-hoverUnderlineColor transition-all duration-300  ${
                        answers[`${sectionIndex}-${questionIndex}`] === "No"
                          ? "bg-hoverUnderlineColor text-white"
                          : "bg-gray-50 text-gray-400"
                      }`}
                      onClick={() =>
                        handleAnswer(sectionIndex, questionIndex, "No")
                      }
                    >
                      No
                    </button>
                  </div>

                  {/* Show warning message if the answer is "No" for this specific question */}
                  {answers[`${sectionIndex}-${questionIndex}`] === "No" && (
                    <p className="text-red-500 text-center mt-4">
                      Warning: You have selected &ldquo;No&rdquo; for this question.
                    </p>
                  )}

                  <p className="text-gray-500 dark:text-gray-400 mt-2 sm:px-4 lg:px-0">
                    Answer:{" "}
                    {answers[`${sectionIndex}-${questionIndex}`] ||
                      "Not answered yet"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <CompleteBtn
          hrefLink="/treatments"
          className="flex items-center justify-center px-4 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-2 mt-2 w-full sm:w-1/5 lg:w-48 sm:h-[4vh] h-[4vh] lg:h-[5vh] text-xs sm:text-sm lg:text-base text-white font-semibold rounded-lg shadow-lg bg-hoverUnderlineColor hover:-translate-y-1 hover:scale-110 hover:bg-[#96192e] transition-transform duration-300 ease-in-out"
        />
      </div>
    </section>
  );
};

export default Page;
