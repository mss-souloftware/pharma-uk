"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "../../config/axios";
// import CustomeBtn from "./customeBtn";

const ProductHeader = () => {
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        if (!slug) return;

        const res = await api.get("/products/categories");
        const categories = res.data.data || [];

        const matchedCategory = categories.find(
          (cat) => cat.name.toLowerCase().replace(/\s+/g, "-") === slug
        );

        if (matchedCategory) {
          setCategoryData(matchedCategory);
          // console.log("CategoryData:", matchedCategory)
        } else {
          console.warn("No category found for slug:", slug);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [slug]);

  if (isError) {
    return (
      <div className="text-center text-red-700">
        Failed to load content. Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto w-full h-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[300px] lg:h-[350px]">
          {isLoading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg"></div>
          ) : categoryData?.name ? (
            <Image
              src="/ProductImage/ErectileDysfunction/ErectileDysfunction.jpg"
              alt={categoryData.name}
              layout="fill"
              className="rounded-lg shadow-xl object-cover"
              unoptimized
            />
          ) : null}
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-start items-start space-y-4">
          {isLoading ? (
            <div className="w-full space-y-4">
              <div className="w-3/4 h-8 bg-gray-200 animate-pulse mb-4 rounded"></div>
              <div className="w-5/6 h-6 bg-gray-200 animate-pulse mb-2 rounded"></div>
              <div className="w-1/2 h-10 bg-gray-200 animate-pulse mb-6 rounded"></div>
              <div className="w-full h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-11/12 h-6 bg-gray-200 animate-pulse mt-2 rounded"></div>
            </div>
          ) : categoryData ? (
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-hoverUnderlineColor">
                {categoryData.name}
              </h4>
              <p className="text-sm text-gray-700">{categoryData.subTitle}</p>
              <p className="text-sm font-normal max-w-full text-gray-600 mt-4">
                {categoryData.shortDescription}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
