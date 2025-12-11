"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CheckoutStepper from "@/components/cart/CheckoutStepper";
import OrderSummary from "@/components/cart/OrderSummary";
import OrderConfirmationModal from "@/components/cart/OrderConfirmationModal";

const items = [
  { id: 1, name: "Girls Pink Moana Printed Dress", price: 80, size: "S", image: "/images/product-1.png" },
  { id: 2, name: "Women Textured Handheld Bag", price: 80, size: "Regular", image: "/images/product-2.png" },
  { id: 3, name: "Tailored Cotton Casual Shirt", price: 40, size: "M", image: "/images/product-3.png" },
];

const initialCartSummary = { subtotal: 200, discountCode: "FLAT50", deliveryCharge: 5 };

export default function ReviewOrderPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const subtotal = initialCartSummary.subtotal;
  const deliveryCharge = initialCartSummary.deliveryCharge;
  const appliedDiscount = 50;
  const total = Math.max(0, subtotal - appliedDiscount) + deliveryCharge;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-semibold mb-8">Review Your Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CheckoutStepper currentStep={3} />
          <h2 className="text-xl font-semibold mb-4">Estimated delivery: <span className="font-bold">22 Feb 2022</span></h2>

          <div className="space-y-6">
            {items.map(it => (
              <div key={it.id} className="flex items-center gap-6">
                <div className="w-24 h-24 relative shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={it.image}
                    alt={it.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg">{it.name}</p>
                  <p className="text-gray-500 mt-1">Size: <span className="text-gray-900">{it.size}</span></p>
                  <p className="font-bold text-gray-900 mt-2">${it.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 my-8" />

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-gray-900 text-lg">Robert Fox</p>
                  <p className="text-gray-600 mt-1">4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                <Link href="/checkout/shipping-address">
                  <button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  </button>
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-100" />

            <div>
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900 text-lg">Debit Card (.... .... .... ..89)</p>
                <Link href="/checkout/payment-method">
                  <button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-4">
          <OrderSummary
            subtotal={subtotal}
            deliveryCharge={deliveryCharge}
            total={total}
            actionLabel="Place Order"
            onAction={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
