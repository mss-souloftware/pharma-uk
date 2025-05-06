"use client";
import { useEffect, useState } from "react";
import Recomended from "./recomended";
import WeeklyPlan from "../cart/feature/weeklyPlan";
import StepNavigation from "../stepsNavigation/page";
import api from "../../config/axios"; // Assuming you have an Axios instance set up

const Treatment = () => {
  const [productData, setProductData] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const id = new URLSearchParams(window.location.search).get("id");
        if (!id) throw new Error("Missing product ID");

        const res = await api.get(`/products/${id}`);
        const result = res.data.data;
        console.log("Product response: ", result)
        // Extract relevant product data from API response
        setProductData(result);
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError(err.message || "Failed to load product data");
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading treatment...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <StepNavigation />

        {productData && (
          <>
            <Recomended
              title={productData.name}
              description={productData.description}
              image={productData.thumbnail}
              medicineData={[productData]} // Passing the single product as data
              onBuy={handleAddToCart}
              weekPlan={productData.weekPlan || []}
            />
          </>
        )}
      </div>

      {cart.length > 0 && (
        <div className="container mx-auto mt-10">
          <WeeklyPlan weekPlan={productData?.weekPlan || []} />
        </div>
      )}
    </>
  );
};

export default Treatment;
