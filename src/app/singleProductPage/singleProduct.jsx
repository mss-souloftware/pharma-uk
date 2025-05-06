"use client";
import React, { useEffect, useState, useContext } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CartContext } from "../cart/feature/contextProvider";
import Image from "next/image";
import axios from "axios";
import SingleProductDetail from "./singleProductDetail";
import PharmaRegulation from "../about/PharmaRegulation";
import HowDoesItWorks from "@/component/content/HowDoesItWorks";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import api from "../../config/axios";
import Link from "next/link";

const SingleProduct = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const response = await api.get(`products/${id}`);
        console.log("Fetched Products:", response.data.data);
        setProduct(response.data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: "Add", product: { ...product, quantity } });
    }
    router.push("/cart");
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-4 mt-20 px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Product Image Skeleton */}
          <div className="flex justify-center">
            <Skeleton width={300} height={400} className="rounded-lg" />
          </div>

          {/* Product Details Skeleton */}
          <div className="space-y-5 text-center md:text-left">
            <Skeleton width="60%" height={40} />
            <div className="flex justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} width={29} height={29} />
              ))}
            </div>
            <Skeleton width="80%" height={80} />

            {/* Price Checker Skeleton */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full">
              <Skeleton width="40%" height={30} />
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <Skeleton width={50} height={30} />
                <Skeleton width={100} height={40} />
              </div>
              <Skeleton width="30%" height={30} />
              <Skeleton width="100%" height={40} />
            </div>
          </div>
        </div>

        {/* Product Detail Section Skeleton */}
        <div className="bg-white p-6 rounded-2xl sm:shadow-xl">
          <Skeleton width="100%" height={300} />
        </div>

        {/* Additional Sections Skeleton */}
        <Skeleton width="100%" height={150} />
        <Skeleton width="100%" height={150} />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 mt-20 px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        <div className="relative w-full h-full">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>


        <div className="space-y-5 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-10">
            {product.name}
          </h1>
          <div className="flex justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <Image key={i} src="/rankStarIcon.png" height={29} width={29} alt="starIcon" />
            ))}
          </div>
          <p className="mt-4 text-gray-600 text-sm md:text-ba se leading-7">
            {product.description}
          </p>


          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="font-bold mb-4">Price Checker</h2>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <span className="text-gray-600">Quantity</span>
              <div className="flex items-center gap-2 border p-2 rounded-md">
                <button
                  className="px-3 py-1 bg-hoverUnderlineColor text-white rounded"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  className="px-3 py-1 bg-hoverUnderlineColor text-white rounded"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-2xl text-hoverUnderlineColor font-semibold mb-4">
              £{(product.price * quantity).toFixed(2)}
            </div>
            {product.directCheckout ? (
              <Link href={`/consultation/?id=${id}`} className="w-full md:w-auto px-6 py-2 bg-hoverUnderlineColor text-white rounded-md transition-all hover:bg-hoverUnderlineColor focus:ring-4 focus:ring-hoverUnderlineColor"> Get Started Now</Link>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto px-6 py-2 bg-hoverUnderlineColor text-white rounded-md transition-all hover:bg-hoverUnderlineColor focus:ring-4 focus:ring-hoverUnderlineColor"
              > Add to Cart </button>
            )}
          </div>
        </div>  
      </div>

      {/* Product Detail Section */}
      <div className="bg-white p-6 rounded-2xl sm:shadow-xl">
        <SingleProductDetail product={product} />



      </div>

      {/* Additional Sections */}
      <PharmaRegulation />
      <HowDoesItWorks />
    </div>
  );
};

export default SingleProduct;
