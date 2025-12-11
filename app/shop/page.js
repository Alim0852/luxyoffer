import Link from "next/link";

export default function ShopIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-10">
      <h1 className="text-2xl font-semibold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link href="/shop/all-products" className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
          <p className="text-lg font-medium">All Products</p>
          <p className="text-sm text-gray-600">Browse all items with filters.</p>
        </Link>
      </div>
    </div>
  );
}
