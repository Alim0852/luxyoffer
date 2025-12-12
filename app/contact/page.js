"use client";
import React from "react";
import { CreditCard, RefreshCcw, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="relative bg-black text-white overflow-hidden">
                {/* Decorative Circle Accent */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-tr-full opacity-10 transform translate-y-1/2 -translate-x-1/2 sm:w-96 sm:h-96"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-40 lg:flex lg:items-center lg:justify-between relative z-10">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Get in touch
                        </h1>
                        <p className="text-gray-300 text-lg max-w-lg mb-8">
                            Got a question about an order? Need help with a return?
                            Our support team is here to help you with everything you need.
                        </p>
                    </div>

                    {/* Hero Image Placeholder - Using a subtle gradient/pattern or public image */}
                    <div className="lg:w-5/12 hidden lg:block relative h-80 rounded-2xl overflow-hidden bg-zinc-900">
                        {/* Using a product image as a placeholder for "Support Team" or "Brand Vibe" */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                            <span className="text-xl font-medium">Support Team Image</span>
                        </div>
                        <Image src="/support-team.png" fill className="object-cover" />
                    </div>
                </div>
            </div>

            {/* Floating Cards Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Existing Customers (Orders) */}
                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-start h-full">
                        <div className="bg-green-50 p-3 rounded-lg text-green-600 mb-6">
                            <CreditCard size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Existing Order
                        </h3>
                        <p className="text-gray-500 mb-6 flex-grow">
                            Already made a purchase? Track your order status or report an issue with your delivery.
                        </p>
                        <Link href="/" className="text-black font-semibold flex items-center hover:gap-2 transition-all">
                            Track Order <ArrowRight size={18} className="ml-1" />
                        </Link>
                    </div>

                    {/* Card 2: Returns */}
                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-start h-full">
                        <div className="bg-blue-50 p-3 rounded-lg text-blue-600 mb-6">
                            <RefreshCcw size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Returns & Exchanges
                        </h3>
                        <p className="text-gray-500 mb-6 flex-grow">
                            Need to return something? View our return policy or start a return request here.
                        </p>
                        <Link href="/" className="text-black font-semibold flex items-center hover:gap-2 transition-all">
                            Start Return <ArrowRight size={18} className="ml-1" />
                        </Link>
                    </div>

                    {/* Card 3: General Inquiries */}
                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-start h-full">
                        <div className="bg-purple-50 p-3 rounded-lg text-purple-600 mb-6">
                            <MessageCircle size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            General Inquiries
                        </h3>
                        <p className="text-gray-500 mb-6 flex-grow">
                            Have a question about a product or partnership? Send us a message and we'll reply shortly.
                        </p>
                        <Link href="/" className="text-black font-semibold flex items-center hover:gap-2 transition-all">
                            Contact Form <ArrowRight size={18} className="ml-1" />
                        </Link>
                    </div>

                </div>
            </div>

            {/* Additional Chat Indicator (Bottom Right) - Mimicking the chat icon in the screenshot */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
                    <MessageCircle size={28} />
                </button>
            </div>
        </div>
    );
}
