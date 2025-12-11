import React, { useState } from "react";

export default function OrderSummary({
    subtotal,
    deliveryCharge,
    discount = 0,
    total,
    onApplyCode,
    onAction,
    actionLabel,
}) {
    const [code, setCode] = useState("FLAT50");

    return (
        <div className="space-y-5 p-6 border rounded-xl shadow-sm bg-white">
            <div className="flex items-center justify-between">
                <span className="text-gray-900 font-semibold">Subtotal</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            <div className="border-t" />

            <div>
                <label className="block text-sm text-gray-600 mb-2">Enter Discount Code</label>
                <div className="flex items-center overflow-hidden rounded-md border">
                    <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter Discount Code"
                        className="flex-1 h-12 px-4 outline-none border-0 rounded-none text-gray-900"
                    />
                    <button
                        onClick={() => onApplyCode && onApplyCode(code)}
                        className="h-12 px-6 bg-black text-white font-medium"
                    >
                        Apply
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span className="text-gray-700">Delivery Charge</span>
                <span className="font-medium text-gray-900">${deliveryCharge.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between">
                <span className="text-gray-900 font-semibold">Grand Total</span>
                <span className="text-gray-900 font-semibold">${total.toFixed(2)}</span>
            </div>

            <button
                onClick={onAction}
                className="w-full h-12 rounded-md bg-black text-white font-medium mt-4"
            >
                {actionLabel}
            </button>
        </div>
    );
}
