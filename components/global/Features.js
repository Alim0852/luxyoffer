import React from "react";
import { Box, CircleDollarSign, Headphones, CreditCard } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Free Shipping",
      desc: "Free shipping for order above $150",
      icon: Box,
    },
    {
      title: "Money Guarantee",
      desc: "Within 30 days for an exchange",
      icon: CircleDollarSign,
    },
    {
      title: "Online Support",
      desc: "24 hours a day, 7 days a week",
      icon: Headphones,
    },
    {
      title: "Flexible Payment",
      desc: "Pay with multiple credit cards",
      icon: CreditCard,
    },
  ];

  return (
    <section className="py-4 sm:py-6">
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-gray-900 bg-gray-50 p-2.5 sm:p-3 rounded-lg">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
