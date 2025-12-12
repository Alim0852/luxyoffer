"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import CheckoutStepper from "@/components/cart/CheckoutStepper";
import OrderSummary from "@/components/cart/OrderSummary";

const mockAddresses = [
  {
    id: "addr-1",
    name: "Robert Fox",
    address: "4517 Washington Ave, Manchester, Kentucky 39495",
    phone: "704-555-0127",
    isDefault: true,
  },
  {
    id: "addr-2",
    name: "John Willions",
    address: "3891 Ranchview Dr, Richardson, California 62639",
    phone: "704-555-0127",
    isDefault: false,
  },
];

const initialCartSummary = {
  subtotal: 200,
  discountCode: "FLAT50",
  deliveryCharge: 5,
};

export default function ShippingAddressPage() {
  const router = useRouter();
  const [addresses, setAddresses] = useState(mockAddresses);
  const [selectedId, setSelectedId] = useState(addresses.find(a => a.isDefault)?.id || addresses[0]?.id);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    flat: "",
    area: "",
    city: "",
    pin: "",
    state: "",
    default: true,
  });

  const [appliedDiscount, setAppliedDiscount] = useState(50);

  const subtotal = initialCartSummary.subtotal;
  const deliveryCharge = initialCartSummary.deliveryCharge;
  const total = useMemo(() => Math.max(0, subtotal - appliedDiscount) + deliveryCharge, [subtotal, appliedDiscount, deliveryCharge]);

  const addAddress = (e) => {
    e.preventDefault();
    const id = `addr-${Date.now()}`;
    const newAddr = {
      id,
      name: form.name || "New User",
      address: `${form.flat}, ${form.area}, ${form.city}, ${form.state} ${form.pin}`,
      phone: form.mobile,
      isDefault: form.default,
    };

    setAddresses(prev => {
      let next = [...prev];
      if (newAddr.isDefault) {
        next = next.map(a => ({ ...a, isDefault: false }));
      }
      next.push(newAddr);
      return next;
    });
    setSelectedId(id);
    setForm({ name: "", mobile: "", flat: "", area: "", city: "", pin: "", state: "", default: true });
  };

  const removeAddress = (id) => {
    setAddresses(prev => prev.filter(a => a.id !== id));
    if (selectedId === id) {
      const first = addresses.find(a => a.id !== id)?.id;
      setSelectedId(first || "");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-semibold mb-8">Shipping Address</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Addresses */}
        <div className="lg:col-span-8">
          <CheckoutStepper currentStep={1} />
          <h2 className="text-xl font-semibold mb-4">Select a delivery address</h2>
          <p className="text-sm text-gray-600 mb-6">Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address.</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {addresses.map((a) => (
              <div key={a.id} className={`relative shadow-sm rounded-xl p-5 transition-colors ${selectedId === a.id ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="absolute top-5 right-5">
                  <input
                    aria-label="Select address"
                    type="radio"
                    name="selectedAddress"
                    checked={selectedId === a.id}
                    onChange={() => setSelectedId(a.id)}
                    className="w-5 h-5 accent-black"
                  />
                </div>
                <div className="pr-8">
                  <p className="text-gray-900 font-bold text-lg">{a.name}</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{a.address}</p>
                </div>

                <div className="flex items-center justify-center gap-10 mt-6">
                  <button className="px-8 h-9 border rounded-md text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    Edit
                  </button>
                  <button onClick={() => removeAddress(a.id)} className="px-6 h-9 border rounded-md text-sm font-medium text-red-500 hover:bg-red-50 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                    Delete
                  </button>
                </div>

                {selectedId === a.id && (
                  <button
                    onClick={() => router.push('/checkout/payment-method')}
                    className="mt-5 w-full h-11 rounded-md bg-black text-white font-medium hover:bg-gray-900 transition-colors"
                  >
                    Deliver Here
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add new address */}
          <h3 className="text-xl font-semibold  mt-10 mb-6">Add a new address</h3>

          <form onSubmit={addAddress} className="space-y-5 shadow-sm rounded-xl p-6 bg-white">
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Name</label>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter Name" className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Mobile Number</label>
              <input value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} placeholder="Enter Mobile Number" className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Flat, House no., Building, Company, Apartment</label>
              <input value={form.flat} onChange={e => setForm({ ...form, flat: e.target.value })} className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Area, Colony, Street, Sector, Village</label>
              <input value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1.5">City</label>
              <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="w-full h-12 px-4 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-black">
                <option value="">Select City</option>
                <option>Manchester</option>
                <option>Richardson</option>
                <option>San Jose</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Pin Code</label>
                <input value={form.pin} onChange={e => setForm({ ...form, pin: e.target.value })} placeholder="Enter Pin Code" className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">State</label>
                <select value={form.state} onChange={e => setForm({ ...form, state: e.target.value })} className="w-full h-12 px-4 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-black">
                  <option value="">Select State</option>
                  <option>Kentucky</option>
                  <option>California</option>
                  <option>Texas</option>
                </select>
              </div>
            </div>

            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={form.default}
                onChange={e => setForm({ ...form, default: e.target.checked })}
                className="w-5 h-5 accent-black rounded"
              />
              <span className="text-gray-700">Use as my default address</span>
            </label>

            <button type="submit" className="h-12 px-8 rounded-lg bg-black text-white font-medium hover:bg-gray-900 transition-colors">Add New Address</button>
          </form>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-4">
          <OrderSummary
            subtotal={subtotal}
            deliveryCharge={deliveryCharge}
            total={total}
            actionLabel="Continue to Payment"
            onAction={() => router.push('/checkout/payment-method')}
          />
        </div>
      </div>
    </div>
  );
}
