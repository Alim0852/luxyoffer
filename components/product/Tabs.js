"use client";

import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("desc");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const colorNameMap = {
    "#ef4444": "Red",
    "#6366f1": "Blue",
    "#f59e0b": "Orange",
    "#111827": "Black",
    "#22c55e": "Green",
    "#a3e635": "Yellow",
  };
  const colorNames = Array.isArray(product?.colors)
    ? product.colors.map((c) => colorNameMap[c] || c)
    : [];
  const sizeList = Array.isArray(product?.sizes) ? product.sizes : [];

  return (
    <div className="mt-12">
      <div className="flex items-center gap-6">
        <button onClick={() => setActiveTab("desc")} className={`py-3 ${activeTab === "desc" ? "border-b-2 border-black" : "text-gray-600"}`}>Descriptions</button>
        <button onClick={() => setActiveTab("info")} className={`py-3 ${activeTab === "info" ? "border-b-2 border-black" : "text-gray-600"}`}>Additional Information</button>
        <button onClick={() => setActiveTab("reviews")} className={`py-3 ${activeTab === "reviews" ? "border-b-2 border-black" : "text-gray-600"}`}>Reviews</button>
      </div>
      <div className="mt-6 text-sm text-gray-700">
        {activeTab === "desc" && (
          <div className="space-y-4">
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
            <p>
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        )}
        {activeTab === "info" && (
          <div className=" ">
            <div className="py-4 flex items-start gap-10">
              <p className="font-medium min-w-[90px]">Color</p>
              <p className="text-gray-700">{colorNames.join(", ")}</p>
            </div>
            <div className="py-4 flex items-start gap-10">
              <p className="font-medium min-w-[90px]">Size</p>
              <p className="text-gray-700">{sizeList.join(", ")}</p>
            </div>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="space-y-8">
            {/* Customer Reviews List */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Customer Reviews</h3>
              {[
                { name: "Mark Williams", rating: 5, title: "Excellent Product, I love it", date: "June 05, 2023" },
                { name: "Alexa Johnson", rating: 4, title: "My daughter is very happy", date: "June 05, 2023" },
              ].map((rev, idx) => (
                <div key={idx} className="pb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-medium">{rev.name}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < rev.rating ? "#FBBF24" : "none"} stroke={i < rev.rating ? "#FBBF24" : "#D1D5DB"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 10 23 10 17 14 19 22 12 18 5 22 7 14 1 10 9 10 12 2"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 font-medium">{rev.title} <span role="img" aria-label="heart">😍</span></p>
                  <p className="mt-2 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                  <p className="mt-2 text-xs text-gray-500">Review by Kate | Posted on {rev.date}</p>
                </div>
              ))}
            </div>

            {/* Add your Review */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Add your Review</h3>
              <div>
                <p className="text-sm mb-2">Your Rating</p>
                <div className="flex items-center gap-1 flex-nowrap whitespace-nowrap">
                  {[...Array(15)].map((_, i) => {
                    const index = i + 1;
                    const filled = rating >= index; // fill only on click
                    const fill = filled ? "#FBBF24" : "none";
                    const stroke = filled ? "#FBBF24" : "#9CA3AF"; // default gray outline
                    return (
                      <span key={index} className="inline-flex items-center">
                        <button
                          type="button"
                          aria-label={`Rate ${index}/10`}
                          aria-pressed={filled}
                          onClick={() => setRating(index)}
                          className="p-0.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill={fill}
                            stroke={stroke}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="12 2 15 10 23 10 17 14 19 22 12 18 5 22 7 14 1 10 9 10 12 2"/>
                          </svg>
                        </button>
                        {(index === 1 || index === 3 || index === 6 || index === 10) && (
                          <span className="h-4  bg-gray-300 mx-2" />
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Enter Your Name" className="w-full rounded-md border border-gray-300 px-3 py-3" />
                <input type="email" placeholder="Enter Your Email" className="w-full rounded-md border border-gray-300 px-3 py-3" />
              </div>
              <textarea placeholder="Enter Your Review" className="w-full rounded-md border border-gray-300 px-3 py-3 h-28" />
              <button className="bg-black text-white px-6 py-3 rounded-md">Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
