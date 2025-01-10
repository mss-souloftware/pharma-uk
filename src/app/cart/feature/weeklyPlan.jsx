import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const WeeklyPlan = ({ weekPlan }) => {
  const [selectedWeek, setSelectedWeek] = useState(null); // Track selected week
  const [showContactButton, setShowContactButton] = useState(false); // State to control visibility of the button
  const weeklyPlanRef = useRef(null); // Ref for the WeeklyPlan component
  const contactButtonRef = useRef(null); // Ref for the Contact button

  // Handle click outside of the WeeklyPlan component
  const handleClickOutside = (event) => {
    if (
      weeklyPlanRef.current &&
      !weeklyPlanRef.current.contains(event.target)
    ) {
      setSelectedWeek(null);
      setShowContactButton(false); // Hide the Contact button when clicking outside
    }
  };

  useEffect(() => {
    // Set up event listener for clicks outside the component
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle click on a weekly plan to show the contact button
  const handlePlanClick = (plan) => {
    setSelectedWeek(plan);
    setShowContactButton(true); // Show the contact button when a week is selected
  };

  return (
    <div ref={weeklyPlanRef}>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
        24-Week Treatment Plan
      </h3>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {weekPlan.map((treatment, index) => (
          <button
            key={index}
            onClick={() => handlePlanClick(treatment)}
            className={`px-4 py-2 text-white rounded-lg ${
              selectedWeek?.week === treatment.week
                ? "bg-hoverUnderlineColor"
                : "bg-gray-400"
            }`}
          >
            {treatment.name}
          </button>
        ))}
      </div>

      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Week</th>
            <th className="border border-gray-300 px-4 py-2">Capsules</th>
          </tr>
        </thead>
        <tbody>
          {weekPlan.map((plan, index) => (
            <tr
              key={index}
              onClick={() => handlePlanClick(plan)} // Show contact button on click
              className={`cursor-pointer ${
                selectedWeek?.week === plan.week
                  ? "bg-hoverUnderlineColor text-white"
                  : ""
              }`}
            >
              <td className="border border-gray-300 px-4 py-2">{plan.week} Week</td>
              <td className="border border-gray-300 px-4 py-2">{plan.capsules} Capsules</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Contact Information Button with Transition Effect */}
      <div
        className={`justify-center flex my-7 transition-all duration-500  ${
          showContactButton ? "opacity-100 " : "opacity-0 "
        }`}
      >
        <Link href="/cartAddress">
        <button
          ref={contactButtonRef}
          className="flex items-center justify-center px-4 py-2 sm:px-4 sm:py-3 lg:px-8 lg:py-2 mt-2 w-[30vw] sm:w-1/5 md:w-[15rem] lg:w-[15rem] sm:h-[6vh] h-[4vh] lg:h-[4vh] xl:h-[5vh] text-xs sm:text-sm lg:text-base text-white font-semibold rounded-lg shadow-lg bg-hoverUnderlineColor hover:bg-[#96192e] transition-transform duration-300 ease-in-out sm:leading-[1rem]"
          >
          Contact Information
        </button>
          </Link>
      </div>
    </div>
  );
};

export default WeeklyPlan;
