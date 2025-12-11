"use client";

import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Section({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between"
      >
        <span className="font-semibold">{title}</span>
        <ChevronUpDownIcon className="h-5 w-5" />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

export default function FiltersSidebar() {
  return (
    <aside className="w-full md:w-64">
      <p className="text-sm text-gray-500 mb-4">Shop &gt; All Products</p>
      <Section title="Product Categories">
        {[
          "Men",
          "Women",
          "Kids",
          "Bags",
          "Belts",
          "Wallets",
          "Watches",
          "Accessories",
          "Winter Wear",
        ].map((label, i) => (
          <label key={i} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-400" defaultChecked={label === "Men"} />
              {label}
            </span>
            <span className="text-gray-400">+</span>
          </label>
        ))}
      </Section>

      <Section title="Filter by Price">
        <p className="text-sm">Price: $0 - $2000</p>
        <div className="mt-2">
          <input type="range" min="0" max="2000" defaultValue="1500" className="w-full accent-black" />
        </div>
      </Section>

      <Section title="Filter by Color">
        {[
          { name: "Red", color: "#EF4444", count: 10 },
          { name: "Blue", color: "#6366F1", count: 14 },
          { name: "Orange", color: "#FB923C", count: 8 },
          { name: "Black", color: "#111827", count: 9 },
          { name: "Green", color: "#22C55E", count: 4 },
          { name: "Yellow", color: "#F59E0B", count: 2 },
        ].map((c) => (
          <div key={c.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <span className="inline-block h-4 w-4 rounded" style={{ backgroundColor: c.color }}></span>
              {c.name}
            </div>
            <span className="text-gray-400">({c.count})</span>
          </div>
        ))}
      </Section>

      <Section title="Filter by Size">
        {[
          { name: "S", count: 6 },
          { name: "M", count: 20 },
          { name: "L", count: 7, checked: true },
          { name: "XL", count: 16 },
          { name: "XXL", count: 10 },
          { name: "XXXL", count: 2 },
        ].map((s) => (
          <label key={s.name} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-3">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-400" defaultChecked={s.checked} />
              {s.name}
            </span>
            <span className="text-gray-400">({s.count})</span>
          </label>
        ))}
      </Section>
    </aside>
  );
}
