"use client";
import { useEffect, useState } from "react";
import Recomended from "./recomended";

const Page = () => {
  const [mensMedicineDataFirst, setMensMedicineDataFirst] = useState([]);
  const [selectedTreatmentFirst, setSelectedTreatmentFirst] = useState(null);
  const [mensMedicineDataSecond, setMensMedicineDataSecond] = useState([]);
  const [selectedTreatmentSecond, setSelectedTreatmentSecond] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/treatments.json");
        const data = await response.json();
        setMensMedicineDataFirst(data.Finasteride || []);
        setSelectedTreatmentFirst(data?.Finasteride[0] || null);
        setMensMedicineDataSecond(data?.Regaine_Foam_for_Men)
        setSelectedTreatmentSecond(data?.Regaine_Foam_for_Men[0]);
      } catch (error) {
        console.log("Some error occurred in fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Filter the selected treatment based on the user's button click
  const handleFilter = (filterTreatment) => {
    setSelectedTreatmentFirst(filterTreatment);
  };

  return (
    <>
      <div className="container mx-auto  ">
        {/* Render the selected treatment */}
        {selectedTreatmentFirst && (
          <Recomended
          headingName={selectedTreatmentFirst.heading}
            title={selectedTreatmentFirst.name}
            description={selectedTreatmentFirst.description}
            image={selectedTreatmentFirst.image}
            weekPlan={selectedTreatmentFirst.weekPlan}
            medicineData={mensMedicineDataFirst}
            onBuy={(treatment, week) => {
              console.log("Buy Now clicked for:", treatment, week);
            }}
            onFilter={handleFilter}
          />
        )}
      </div>
      <div className="container mx-auto ">
        {/* Render the selected treatment */}
        {selectedTreatmentSecond && (
          <Recomended
            title={selectedTreatmentSecond.name}
            description={selectedTreatmentSecond.description}
            image={selectedTreatmentSecond.image}
            weekPlan={selectedTreatmentSecond.weekPlan}
            medicineData={mensMedicineDataSecond}
            onBuy={(treatment, week) => {
              console.log("Buy Now clicked for:", treatment, week);
            }}
            onFilter={handleFilter}
          />
        )}
      </div>
    </>
  );
};

export default Page;
