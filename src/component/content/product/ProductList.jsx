"use client";
import HowDoesItWorks from "../HowDoesItWorks";
import "./ProductList.css";
import HowDoesItWorksMobile from "../../HowDoesItWorksMobile";
import QualifiedTeams from "../QualifiedTeams";
import ProductHeading from "./productHeading";
import CategoryProduct from "@/component/content/product/CategoryProduct";

const Content = () => {
  return (
    <div className="container mx-auto h-auto mt-20 border-2 border-solid border-transparent pl-[1.7rem] pr-[1.7rem]">
      <ProductHeading />
      <CategoryProduct />
      <div className="block sm:hidden">
        <HowDoesItWorksMobile />
      </div>
      <div className="mt-28 hidden sm:block">
        <HowDoesItWorks />
      </div>
      <QualifiedTeams />
    </div>
  );
};

export default Content;
