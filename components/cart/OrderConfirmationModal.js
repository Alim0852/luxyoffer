import React from "react";
import Link from "next/link";

export default function OrderConfirmationModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your order is confirmed</h2>
                <p className="text-gray-500 mb-8">
                    Thanks for shopping! your order hasn't shipped yet, but we will send you and email when it done.
                </p>

                <div className="space-y-3">
                    <button onClick={onClose} className="w-full h-12 bg-gray-900 text-white rounded-lg font-medium">
                        View Order
                    </button>
                    <Link href="/" className="block">
                        <button className="w-full h-12 border border-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-50">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
