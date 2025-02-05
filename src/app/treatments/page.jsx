"use client"; // Ensure this is at the top of the file for client-side rendering
import { useEffect, useState } from "react";
import Recomended from "./recomended";
import WeeklyPlan from "../cart/feature/weeklyPlan";

const Treatment = () => {
  const [mensMedicineDataFirst, setMensMedicineDataFirst] = useState([]);
  const [selectedTreatmentFirst, setSelectedTreatmentFirst] = useState(null);
  const [mensMedicineDataSecond, setMensMedicineDataSecond] = useState([]);
  const [selectedTreatmentSecond, setSelectedTreatmentSecond] = useState(null);

  const [weekPlan, setWeekPlan] = useState([]);  // State for weekly plan
  const [cart, setCart] = useState([]);  // Local cart state to simulate adding items to cart

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/treatments.json");
        const data = await response.json();
        setMensMedicineDataFirst(data.Finasteride || []);
        setSelectedTreatmentFirst(data?.Finasteride[0] || null);
        setMensMedicineDataSecond(data?.Regaine_Foam_for_Men || []);
        setSelectedTreatmentSecond(data?.Regaine_Foam_for_Men[0] || null);
        setWeekPlan(data?.weekPlan || []);  // Set the week plan data
      } catch (error) {
        console.log("Some error occurred in fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Handle filter based on the user's button click and ID
  const handleFilter = (filterTreatment, isFirst) => {
    if (isFirst) {
      setSelectedTreatmentFirst(filterTreatment);
    } else {
      setSelectedTreatmentSecond(filterTreatment);
    }
  };

  // Handle Add to Cart
  const handleAddToCart = (product, weekPlan) => {
    // Add weeklyPlan to the product before adding to cart
    const productWithWeeklyPlan = { ...product, weeklyPlan };

    setCart((prevCart) => [...prevCart, productWithWeeklyPlan]); // Add product with weekly plan to the cart
  };

  return (
    <>
      <div className="container mx-auto">
        {/* Render the selected treatment for the first medicine */}
        {selectedTreatmentFirst && (
          <Recomended
            headingName={selectedTreatmentFirst.heading}
            title={selectedTreatmentFirst.name}
            description={selectedTreatmentFirst.description}
            image={selectedTreatmentFirst.image}
            medicineData={mensMedicineDataFirst}
            onBuy={handleAddToCart} // Handle add to cart
            onFilter={(filterTreatment) => handleFilter(filterTreatment, true)}
            weekPlan={selectedTreatmentFirst.weekPlan} // Pass the weekly plan to Recomended
          />
        )}
      </div>

      <div className="container mx-auto">
        {/* Render the selected treatment for the second medicine */}
        {selectedTreatmentSecond && (
          <Recomended
            title={selectedTreatmentSecond.name}
            description={selectedTreatmentSecond.description}
            image={selectedTreatmentSecond.image}
            medicineData={mensMedicineDataSecond}
            onBuy={handleAddToCart} // Handle add to cart
            onFilter={(filterTreatment) => handleFilter(filterTreatment, false)}
            weekPlan={selectedTreatmentSecond.weekPlan} // Pass the weekly plan to Recomended
          />
        )}
      </div>

      {/* Render weekly plan only if items are in the cart */}
      {cart.length > 0 && (
        <div className="container mx-auto mt-10">
          <WeeklyPlan weekPlan={weekPlan} />
        </div>
      )}
    </>
  );
};

export default Treatment;
