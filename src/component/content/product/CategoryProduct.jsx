"use client";
import React, { useState, useEffect, useCallback } from "react";
import CategoryList from "./CategoryList";
import SubcategoryList from "./SubcategoryList";

const CategoryProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/Content.json", { cache: "no-cache" });
      const data = await response.json();
      if (data.categories?.length) {
        setCategories(data.categories);
        setSelectedCategory(data.categories[0]); // Pre-select first category
      }
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="container mx-auto my-8 px-4">
      <CategoryList categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} isLoading={isLoading} />
      {selectedCategory && (
        <div className="mt-6">
          <h3 className="text-lg lg:text-3xl text-center mb-6">
            Subcategories Under <span className="text-hoverUnderlineColor">{selectedCategory.name}</span>
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 shadow-sm rounded-lg lg:grid-cols-3 xl:grid-cols-4">
            <SubcategoryList selectedCategory={selectedCategory} isLoading={isLoading} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
