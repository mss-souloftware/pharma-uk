"use client"
import HowDoesItWorks from "../HowDoesItWorks";
import QualifiedTeams from "../QualifiedTeams";
import CategoryProduct from "./CategoryProduct";
import ProductHeading from "./ProductHeading";

const Content = () => {
  return (
    <div className="container mx-auto h-auto mt-20 border-2 border-solid border-transparent pl-[1.7rem] pr-[1.7rem]">
      <ProductHeading />
      <CategoryProduct />
      
      {/* Full-width background for HowDoesItWorks */}
      <div className="mt-28 w-full bg-[#FFF5F5]">
        <HowDoesItWorks />
      </div>
      <QualifiedTeams />
    </div>
  );
};

export default Content;
