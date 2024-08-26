import React from "react";
import PlanCard from "./PlanCard";

const BillingPage = () => {
  const plans = [
    {
      title: "Starter",
      description: "For new users who want to explore AI content generation.",
      price: "$0",
      features: [
        "10,000 credits",
        "Access to basic AI models",
        "Community support",
        "Basic analytics",
      ],
      buttonText: "Get Started",
      href: "/dashboard",
    },
    {
      title: "Mejo-Baba",
      description: "For users with higher content generation needs.",
      price: "$8",
      features: [
        "50,000 credits/monthly",
        "Access to advanced AI models",
        "Priority support",
        "Detailed analytics",
      ],
      buttonText: "Upgrade to Mejo-Baba",
      href: "/dashboard/billing/working",
    },
    {
      title: "Boro-Baba",
      description: "For power users with unlimited content generation needs.",
      price: "$15",
      features: [
        "Unlimited credits/monthly",
        "Access to all AI models",
        "Dedicated support",
        "Comprehensive analytics",
      ],
      buttonText: "Upgrade to Boro-Baba",
      href: "/dashboard/billing/working",
    },
  ];

  return (
    <div className="sm:flex sm:flex-col sm:align-center p-10">
      <div className="sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default BillingPage;
