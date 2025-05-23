"use client";
import { usePathname } from "next/navigation";

const StepNavigation = () => {
  const pathname = usePathname();

  const steps = [
    { name: "Consulting", path: "/consultation", id: "consult" },
    { name: "Treatment", path: "/treatments", id: "treatment" },
    { name: "Add to Cart", path: "/cart", id: "cart" },
    { name: "Payment", path: "/paymentForm", id: "payment" },
  ];

  return (
    <div className="flex justify-center space-x-6 py-6">
      {steps.map((step) => (
        <div key={step.id} className="flex items-center space-x-2">
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
              pathname === step.path ? "bg-[#1AB8A3] border-hoverUnderlineColor" : "bg-gray-300 border-gray-400"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              pathname === step.path ? "" : "text-gray-600"
            }`}
          >
            {step.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;
