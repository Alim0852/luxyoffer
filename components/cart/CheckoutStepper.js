import React from "react";
import { Home, CreditCard, FileText } from "lucide-react";

export default function CheckoutStepper({ currentStep }) {
    const steps = [
        { id: 1, label: "Address", icon: Home },
        { id: 2, label: "Payment Method", icon: CreditCard },
        { id: 3, label: "Review", icon: FileText },
    ];

    return (
        <div className="relative mb-12">
            {/* Dashed Line (Background) */}
            <div className="absolute left-0 right-0 top-6 -translate-y-1/2 border-t-2 border-dashed border-gray-200 -z-10" />

            {/* Dashed Line (Progress) */}
            <div
                className="absolute left-0 top-6 -translate-y-1/2 border-t-2 border-dashed border-black -z-10 transition-all duration-300"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />

            <div className="flex justify-between items-start">
                {steps.map((step) => {
                    const isActive = currentStep >= step.id;
                    const isCurrent = currentStep === step.id;
                    const Icon = step.icon;

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-2 bg-white px-2">
                            <div
                                className={`w-12 h-12 rounded-xl grid place-items-center transition-colors ${isCurrent
                                        ? "bg-black text-white"
                                        : isActive
                                            ? "bg-black text-white"
                                            : "bg-gray-100 text-gray-400"
                                    }`}
                            >
                                <Icon size={20} />
                            </div>
                            <span className={`text-sm font-medium ${isCurrent ? "text-gray-900" : "text-gray-500"}`}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
