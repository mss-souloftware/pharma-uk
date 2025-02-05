"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const CategoryProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/Content.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setCategories(data.categories);
        setSelectedCategory(data.categories[0]);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const renderSubcategorySkeleton = (count) =>
    Array(count)
      .fill()
      .map((_, index) => (
        <div key={index} className="bg-transparent rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-95">
          <div className="w-full">
            <Skeleton height={200} />
          </div>
          <div className="p-4">
            <Skeleton width="60%" height={20} />
            <Skeleton width="80%" height={15} className="mt-2" />
            <Skeleton width="100%" height={30} className="mt-4" />
          </div>
        </div>
      ));

  const renderSubcategories = () =>
    selectedCategory?.subcategories.map((subcategory, index) => (
      <div key={index} className="bg-transparent rounded-xl shadow-gray-300 p-2 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-95">
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
          <h5 className="text-lg md:text-xl font-semibold text-gray-800">{subcategory.name}</h5>
          <p className="text-xs md:text-base text-gray-800 mt-2">
            {subcategory.description ? (subcategory.description.length > 60 ? `${subcategory.description.substring(0, 70)}...` : subcategory.description) : "No description available."}
          </p>
          <Link href={subcategory.link}>
            <button className="w-full py-2 mt-4 bg-hoverUnderlineColor text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">Get Consultation</button>
          </Link>
        </div>
      </div>
    ));

  return (
    <div className="container mx-auto my-8 px-4">
      <CategoryList categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} isLoading={isLoading} />

      {selectedCategory && (
        <div className="mt-8">
          <h3 className="text-xl lg:text-4xl md:text-3xl sm:text-2xl font-normal text-center mb-8 text-hoverUnderlineColor">
            Subcategories Under <span className="text-hoverUnderlineColor">{selectedCategory.name}</span>
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {isLoading ? renderSubcategorySkeleton(5) : renderSubcategories()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
