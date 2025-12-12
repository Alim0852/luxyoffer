"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import CheckoutStepper from "@/components/cart/CheckoutStepper";
import OrderSummary from "@/components/cart/OrderSummary";

const initialCartSummary = {
  subtotal: 200,
  discountCode: "FLAT50",
  deliveryCharge: 5,
};

export default function PaymentMethodPage() {
  const router = useRouter();
  const [method, setMethod] = useState("card");
  const [card, setCard] = useState({ number: "", name: "", expiry: "", cvv: "" });
  const [appliedDiscount, setAppliedDiscount] = useState(50);

  const subtotal = initialCartSummary.subtotal;
  const deliveryCharge = initialCartSummary.deliveryCharge;
  const total = useMemo(() => Math.max(0, subtotal - appliedDiscount) + deliveryCharge, [subtotal, appliedDiscount, deliveryCharge]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-semibold mb-8">Payment Method</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CheckoutStepper currentStep={2} />
          <h2 className="text-xl font-semibold mb-6">Select a payment method</h2>

          <div className="space-y-8">
            {/* Card */}
            <div>
              <label className="flex items-center gap-3 text-lg font-bold cursor-pointer mb-6">
                <input
                  type="radio"
                  name="payment"
                  className="w-5 h-5 accent-black"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                />
                Debit/Credit Card
              </label>

              {method === "card" && (
                <div className="space-y-5 ">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">Card Number</label>
                    <input value={card.number} onChange={e => setCard({ ...card, number: e.target.value })} placeholder="3897 22XX 1900 3890" className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">Card Name</label>
                    <input value={card.name} onChange={e => setCard({ ...card, name: e.target.value })} placeholder="Robert Fox" className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5">Expiry Date</label>
                      <input value={card.expiry} onChange={e => setCard({ ...card, expiry: e.target.value })} placeholder="09/26" className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5">CVV</label>
                      <input value={card.cvv} onChange={e => setCard({ ...card, cvv: e.target.value })} placeholder="..." className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
                    </div>
                  </div>
                  <button className="h-12 px-8 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition-colors">Add Card</button>
                </div>
              )}
            </div>

            <div className="border-t border-gray-100" />

            {/* Google Pay */}
            <label className="flex items-center gap-3 text-lg font-bold cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5 accent-black" checked={method === "gpay"} onChange={() => setMethod("gpay")} />
              Google Pay
            </label>

            <div className="border-t border-gray-100" />

            {/* Paypal */}
            <label className="flex items-center gap-3 text-lg font-bold cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5 accent-black" checked={method === "paypal"} onChange={() => setMethod("paypal")} />
              Paypal
            </label>

            <div className="border-t border-gray-100" />

            {/* COD */}
            <label className="flex items-center gap-3 text-lg font-bold cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5 accent-black" checked={method === "cod"} onChange={() => setMethod("cod")} />
              Cash on Delivery
            </label>

            <div className="pt-4">
              <button
                onClick={() => router.push('/checkout/review')}
                className="h-12 px-10 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition-colors"
              >
                Continue
              </button>
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
            onAction={() => router.push('/checkout/review')}
          />
        </div>
      </div>
    </div>
  );
}
