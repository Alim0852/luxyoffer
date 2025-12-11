"use client";

import FiltersSidebar from "@/components/products/FiltersSidebar";
import Products from "@/components/products/Products";
import Features from "@/components/global/Features";
import { EllipsisHorizontalIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export default function ProductListingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 mt-10">
        <FiltersSidebar />

        <div>
          {/* Top controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <Squares2X2Icon className="h-5 w-5" />
              <EllipsisHorizontalIcon className="h-5 w-5" />
              <span>Showing 1–8 of 8 results</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>Sort by latest</span>
              <select className="border border-gray-300 rounded-md px-2 py-1">
                <option>Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product grid: show all products in 3 columns per row */}
          <Products max="8" cols="3" />
        </div>
      </div>
      <Features />
    </div>
  );
}
