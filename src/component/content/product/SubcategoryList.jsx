import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const SubcategoryList = ({ selectedCategory, isLoading }) => {
  if (isLoading) {
    return [...Array(5)].map((_, index) => (
      <div key={index} className="bg-transparent rounded-xl shadow-lg p-4">
        <Skeleton height={200} />
        <Skeleton width="60%" height={20} className="mt-4" />
        <Skeleton width="80%" height={15} className="mt-2" />
      </div>
    ));
  }

  return selectedCategory?.subcategories?.map((subcategory, index) => (
    <div key={index} className="bg-transparent rounded-xl shadow-lg p-2 hover:scale-95 transition duration-300">
      <div
        style={{
          backgroundImage: `url(${subcategory.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
        className="w-full rounded-xl"
      />
      <div className="p-4">
        <h5 className="text-base font-semibold">{subcategory.name}</h5>
        <p className="text-sm mt-2">{subcategory.description?.slice(0, 70) || "No description available."}</p>
        <Link href={subcategory.link}>
          <button className="w-full py-2 mt-4 bg-hoverUnderlineColor text-white rounded-lg shadow-lg hover:scale-105 transition duration-300">
            Get Consultation
          </button>
        </Link>
      </div>
    </div>
  ));
};

export default React.memo(SubcategoryList);
