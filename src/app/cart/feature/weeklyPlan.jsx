import React, { useState, useEffect, useRef } from "react";

const WeeklyPlan = ({ weekPlan = [], selectedWeek, onPlanClick }) => {
  const [showContactButton, setShowContactButton] = useState(false);
  const weeklyPlanRef = useRef(null);

  // Handle click outside of the WeeklyPlan component
  const handleClickOutside = (event) => {
    if (weeklyPlanRef.current && !weeklyPlanRef.current.contains(event.target)) {
      setShowContactButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle click on a weekly plan
  const handlePlanClick = (plan) => {
    if (onPlanClick && typeof onPlanClick === "function") {
      onPlanClick(plan);
      setShowContactButton(true);
    } else {
      console.error("onPlanClick is not a function");
    }
  };

  return (
    <div ref={weeklyPlanRef}>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
        24-Week Treatment Plan
      </h3>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {weekPlan.length > 0 ? (
          weekPlan.map((treatment, index) => (
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
          ))
        ) : (
          <p>No Weekly Plan Available</p>
        )}
      </div>

      {weekPlan.length > 0 && (
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Week</th>
              <th className="border border-gray-300 px-4 py-2">
                {weekPlan.some((plan) => "packets" in plan) ? "Packets" : "Capsules"}
              </th>
            </tr>
          </thead>
          <tbody>
            {weekPlan.map((plan, index) => (
              <tr
                key={index}
                onClick={() => handlePlanClick(plan)}
                className={`cursor-pointer ${
                  selectedWeek?.week === plan.week
                    ? "bg-hoverUnderlineColor text-white"
                    : ""
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {plan.week ? `${plan.week} Week` : ""}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {plan.capsules ?? plan.packets}{" "}
                  {plan.packets ? "Packets" : "Capsules"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WeeklyPlan;
