// cartUtils.ts (create this helper file or add it in Cart component)
export const submitOrder = async (orderData) => {
  try {
    const response = await fetch("http://localhost:1545/api/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit order");
    }

    return await response.json();
  } catch (error) {
    console.error("Order submission error:", error);
    throw error;
  }
};
