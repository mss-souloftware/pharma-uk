"use client";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import WeeklyPlan from "./feature/weeklyPlan";

const CartProduct = ({ product, onIncrease, onDecrease, onRemove }) => {

  const [selectedSize, setSelectedSize] = useState(
    product.packet ? "" : undefined
  );
  const [selectedPlan, setSelectedPlan] = useState(
    product.isMedicine ? "" : undefined
  );

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const totalPrice = product.price * product.quantity;
  const totalProductPrice = totalPrice + (product.deliveryCharge || 15.0);
  const validImageUrl = product.imageUrl?.trim()
    ? product.imageUrl
    : "/fallback-image.jpg";

  return (
    <tr className="border border-gray-300">
      <td className="p-4">
        <Image
          src={validImageUrl}
          alt="Product Image"
          width={80}
          height={80}
          className="object-cover rounded-lg"
        />
      </td>
      <td className="p-4 font-semibold text-gray-800">{product.title}</td>
      <td className="p-4">
      <label>
      <select>
        <option value="packet">Packets 2</option>
        <option value="packet">Packets 4</option>
        <option value="packet">Packets 6</option>
      </select>
    </label>
  {product.packet ? (
    // If packets exist, show packet size dropdown
    <label>
      <select>
        <option value="packet">Packets 2</option>
        <option value="packet">Packets 4</option>
        <option value="packet">Packets 6</option>
      </select>
    </label>
  ) : product.weeklyPlan ? (
    // If weeklyPlan exists, show as a select dropdown
    <label>
      <select onChange={(e) => handlePlanClick(e.target.value)}>
        <option value="">Select Weekly Plan</option>
        {product.weeklyPlan.map((plan, index) => (
          <option key={index} value={plan.week}>
            {plan.week} Week - {plan.packets ?? plan.capsules} {plan.packets ? "Packets" : "Capsules"}
          </option>
        ))}
      </select>
    </label>
  ) : null}
</td>


      <td className="p-4 text-center">
        <div className="flex justify-center items-center gap-2">
          <button
            className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-hoverUnderlineColor hover:text-white"
            onClick={onDecrease}
            disabled={product.quantity <= 1}
          >
            -
          </button>
          <span className="text-gray-700 font-semibold">
            {product.quantity}
          </span>
          <button
            className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-hoverUnderlineColor hover:text-white"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
      </td>
      <td className="p-4 text-center font-semibold">
        ${totalProductPrice.toFixed(2)}
      </td>
      <td className="p-4 text-center">
        <button className="text-red-600 hover:underline" onClick={onRemove}>
          ✖
        </button>
      </td>
    </tr>
  );
};

export default CartProduct;
