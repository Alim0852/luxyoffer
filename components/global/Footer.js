import { PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f10] text-white mt-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          {/* Brand + Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-extrabold">LuxyOffer</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-300">
                <PhoneIcon className="h-5 w-5" />
                <span>(704) 555-0127</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <EnvelopeIcon className="h-5 w-5" />
                <span>krist@example.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPinIcon className="h-5 w-5" />
                <span>3891 Ranchview Dr. Richardson, California 62639</span>
              </li>
            </ul>

            
          </div>

          {/* Information */}
          <div>
            <h6 className="text-sm font-semibold mb-4">Information</h6>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>My Account</li>
              <li>Login</li>
              <li>My Cart</li>
              <li>My Wishlist</li>
              <li>Checkout</li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h6 className="text-sm font-semibold mb-4">Service</h6>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h6 className="text-sm font-semibold mb-4">Subscribe</h6>
            <p className="text-sm text-gray-300 mb-4">Enter your email below to be the first to know about new collections and product launches.</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-gray-500 rounded-l-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
              />
              <button className="border border-gray-500 border-l-0 rounded-r-md px-3 py-2">
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-5 flex items-center justify-between text-sm">
            <div className="flex gap-3 ">
              {['VISA','AMEX','G PAY','PAYPAL'].map((p, i) => (
                <span key={i} className="rounded-md bg-white text-black text-[11px] font-semibold px-2 py-1">{p}</span>
              ))}
            </div>
          <p className="text-gray-400">©2023 Krist All Rights are reserved</p>
          <div className="flex items-center gap-4">
            <Facebook className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
