"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";

// Minimal mock cart; replace with real state/store when available
const initialCart = [
  {
    id: "dress-1",
    title: "Girls Pink Moana Printed Dress",
    size: "S",
    price: 80,
    qty: 1,
    image: "/images/product-1.png",
  },
  {
    id: "bag-1",
    title: "Women Textured Handheld Bag",
    size: "Regular",
    price: 80,
    qty: 1,
    image: "/images/product-2.png",
  },
  {
    id: "shirt-1",
    title: "Tailored Cotton Casual Shirt",
    size: "M",
    price: 40,
    qty: 1,
    image: "/images/product-3.png",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [code, setCode] = useState("FLAT50");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const deliveryCharge = 5;

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const total = useMemo(
    () => Math.max(0, subtotal - appliedDiscount) + deliveryCharge,
    [subtotal, appliedDiscount]
  );

  const applyCode = () => {
    if (code.trim().toUpperCase() === "FLAT50") {
      setAppliedDiscount(50);
    } else {
      setAppliedDiscount(0);
    }
  };

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it
      )
    );
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-5">Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12">
        {/* Left: Products list */}
        <div className="lg:col-span-8 shadow-lg p-4 sm:p-6">
          <div className="hidden sm:grid grid-cols-12 pb-6 text-sm font-medium text-gray-500 border-b border-gray-100">
            <div className="col-span-6">Products</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          <div className="divide-y divide-gray-100">
            {cart.map((item) => (
              <div key={item.id} className="py-6 sm:py-8">
                {/* Mobile stacked layout */}
                <div className="flex sm:hidden gap-4">
                  <div className="w-16 h-16 shrink-0 relative bg-gray-50 rounded-lg overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-contain" sizes="64px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold text-base leading-tight mb-1 line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">Size: <span className="text-gray-900">{item.size}</span></p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-semibold">${item.price.toFixed(2)}</span>
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-9">
                        <button className="w-9 h-full grid place-items-center text-gray-700 hover:bg-gray-50" onClick={() => changeQty(item.id, -1)} aria-label="Decrease quantity">–</button>
                        <div className="w-9 h-full grid place-items-center text-gray-900 font-medium">{item.qty}</div>
                        <button className="w-9 h-full grid place-items-center text-gray-700 hover:bg-gray-50" onClick={() => changeQty(item.id, 1)} aria-label="Increase quantity">+</button>
                      </div>
                    </div>
                    <div className="mt-2 text-right text-gray-900 font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                  </div>
                </div>

                {/* Desktop grid layout */}
                <div className="hidden sm:grid grid-cols-12 items-center">
                  <div className="col-span-6 flex items-center gap-6">
                    <div className="w-20 h-20 shrink-0 relative bg-gray-50 rounded-lg overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-contain" sizes="80px" />
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-lg leading-tight mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500">Size: <span className="text-gray-900">{item.size}</span></p>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-gray-900 font-semibold">${item.price.toFixed(2)}</div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-10">
                      <button className="w-10 h-full grid place-items-center text-gray-700 hover:bg-gray-50" onClick={() => changeQty(item.id, -1)} aria-label="Decrease quantity">–</button>
                      <div className="w-10 h-full grid place-items-center text-gray-900 font-medium">{item.qty}</div>
                      <button className="w-10 h-full grid place-items-center text-gray-700 hover:bg-gray-50" onClick={() => changeQty(item.id, 1)} aria-label="Increase quantity">+</button>
                    </div>
                  </div>
                  <div className="col-span-2 text-right text-gray-900 font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-4 shadow-lg p-4 sm:p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-900 font-bold">Subtotal</span>
              <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-2 block">Enter Discount Code</label>
              <div className="flex items-stretch h-12">
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="flex-1 px-4 border border-r-0 border-gray-300 rounded-l-lg text-gray-900 placeholder-gray-400 outline-none focus:border-black transition-colors"
                />
                <button
                  onClick={applyCode}
                  className="px-8 rounded-r-lg bg-black text-white font-medium hover:bg-gray-900 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-900">Delivery Charge</span>
              <span className="font-medium text-gray-900">${deliveryCharge.toFixed(2)}</span>
            </div>

            {appliedDiscount > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Discount</span>
                <span className="font-medium text-green-600">- ${appliedDiscount.toFixed(2)}</span>
              </div>
            )}

            <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
              <span className="text-gray-900 font-bold">Grand Total</span>
              <span className="text-gray-900 font-bold">${total.toFixed(2)}</span>
            </div>

            <Link href="/checkout/shipping-address" className="block">
              <button className="w-full h-14 rounded-xl bg-black text-white font-medium hover:bg-gray-900 transition-colors mt-4">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
