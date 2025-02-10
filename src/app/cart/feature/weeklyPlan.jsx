import React, { useState, useEffect, useRef } from "react";

const WeeklyPlan = ({ weekPlan = [], selectedWeek, onPlanClick }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const weeklyPlanRef = useRef(null);

  // Handle click outside of the WeeklyPlan component
  const handleClickOutside = (event) => {
    if (weeklyPlanRef.current && !weeklyPlanRef.current.contains(event.target)) {
      setSelectedOption(""); // Reset selection if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedPlan = weekPlan.find((plan) => plan.week?.toString() === selectedValue);

    if (selectedPlan) {
      setSelectedOption(selectedValue);
      if (onPlanClick) {
        onPlanClick(selectedPlan);
      }
    }
  };

  const handlePlanClick = (plan) => {
    if (plan.week) {
      setSelectedOption(plan.week.toString());
      if (onPlanClick) {
        onPlanClick(plan);
      }
    }
  };

  return weekPlan.length > 0 ? (
    <div ref={weeklyPlanRef} className="max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Select Weekly Plan
      </h3>

      {/* Dropdown Selection */}
      <label className="block text-gray-700 font-medium mb-2">
        Choose a week:
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="block w-full mt-2 p-2 border rounded"
        >
          <option value="">Select Weekly Plan</option>
          {weekPlan.map((plan, index) => (
            <option key={index} value={plan.week ?? `week-${index}`}>
              {plan.week ? `${plan.week} Week` : `Week ${index + 1}`} - 
              {plan.packets ?? plan.capsules} {plan.packets ? "Packets" : "Capsules"}
            </option>
          ))}
        </select>
      </label>
    </div>
  ) : null;
};

export default WeeklyPlan;
