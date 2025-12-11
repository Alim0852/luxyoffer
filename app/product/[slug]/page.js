"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Star } from "lucide-react";
import { useState } from "react";
import Products from "@/components/products/Products";
import Link from "next/link";
import PRODUCT_DETAILS from "@/utils/productDetails";
import ProductTabs from "@/components/product/Tabs";
import Features from "@/components/global/Features";

export default function ProductPage() {
  const { slug } = useParams();
  const product = PRODUCT_DETAILS.find((p) => p.slug === slug);
  if (!product) return notFound();

  const images = Array.isArray(product.images) && product.images.length > 0
    ? product.images
    : [product.image, product.image, product.image, product.image];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [qty, setQty] = useState(1);
  // tabs moved to separate component
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [wishlisted, setWishlisted] = useState(false);

  const inc = () => setQty((q) => Math.min(q + 1, 99));
  const dec = () => setQty((q) => Math.max(q - 1, 1));

  return (
    <div className="mx-auto max-w-7xl px-4 mt-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        <Link href="/">Home</Link> &nbsp;&gt;&nbsp; <Link href="/shop">Shop</Link> &nbsp;&gt;&nbsp; <span className="text-gray-700">{product.title}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="relative rounded-xl bg-gray-100 p-6">
            <button aria-label="Open image lightbox" onClick={() => setLightboxOpen(true)} className="w-full h-[420px] flex items-center justify-center">
              <Image src={activeImage} alt={product.title} width={1000} height={1000} className="max-h-[360px] w-auto object-contain" />
            </button>
          </div>
          {/* Thumbnails */}
          <div className=" mt-4 grid grid-cols-5 gap-4 ml-20 ">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); setActiveImage(img); }}
                className={`rounded-lg bg-gray-100 p-3 border ${activeImage === img ? "border-black" : "border-transparent"}`}
              >
                <div className="w-full h-20 flex items-center justify-center">
                  <Image src={img} alt={`${product.title} ${i}`} width={200} height={200} className="max-h-16 w-auto object-contain" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-start gap-3">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            {product.stock && (
              <span className="ml-auto text-xs rounded bg-green-100 text-green-600 px-2 py-1">In Stock</span>
            )}
          </div>

          <p className="text-sm text-gray-600 mt-1">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
            ))}
            <span className="text-sm text-gray-600">5.0 ({product.reviews} Reviews)</span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            {product.salePrice ? (
              <>
                <span className="text-xl font-semibold">${product.salePrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-xl font-semibold">${product.price.toFixed(2)}</span>
            )}
          </div>

          {/* Color */}
          <div className="mt-6">
            <p className="font-medium mb-2">Color</p>
            <div className="flex items-center gap-3">
              {product.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(c)}
                  className={`h-7 w-7 rounded-md border transition-colors ${selectedColor === c ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-4">
            <p className="font-medium mb-2">Size</p>
            <div className="flex items-center gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-2 rounded-md border text-sm transition-colors ${selectedSize === s ? "border-black bg-black text-white" : "border-gray-300 bg-white text-black"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button onClick={dec} className="px-2 py-3">−</button>
              <span className="px-6 py-3">{qty}</span>
              <button onClick={inc} className="px-2 py-3">+</button>
            </div>
            <button className="flex-1 bg-[#0f0f12] text-white px-6 py-3 rounded-xl">Add to Cart</button>
            <button
              aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              onClick={() => setWishlisted((v) => !v)}
              className={`rounded-xl border px-4 py-3 ${wishlisted ? "border-black" : "border-gray-300"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={wishlisted ? "#0f0f12" : "none"}
                stroke={wishlisted ? "#0f0f12" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* Tabs moved out of side column; shown above related */}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center py-10" onClick={() => setLightboxOpen(false)}>
          <div className="relative w-full max-w-[960px] mx-auto px-2" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close" onClick={() => setLightboxOpen(false)} className="absolute -top-12 right-2 text-white bg-white/20 hover:bg-white/30 rounded px-3 py-1">Close</button>
            {/* Prev Arrow */}
            <button
              aria-label="Previous image"
              onClick={() => { const ni = (activeIndex - 1 + images.length) % images.length; setActiveIndex(ni); setActiveImage(images[ni]); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            {/* Next Arrow */}
            <button
              aria-label="Next image"
              onClick={() => { const ni = (activeIndex + 1) % images.length; setActiveIndex(ni); setActiveImage(images[ni]); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div className="bg-white rounded-xl p-4 flex items-center justify-center shadow-lg overflow-hidden">
              <Image src={activeImage} alt={`${product.title} zoom`} width={1600} height={1600} className="max-h-[72vh] w-auto object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* Tabs (above Related Products) */}
      <ProductTabs product={product} />

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-medium mb-6">Related Products</h2>
        <Products max="4" cols="4" />
      </div>
    </div>
  );
}