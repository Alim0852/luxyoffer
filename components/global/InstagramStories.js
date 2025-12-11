import Image from "next/image";

export default function InstagramStories() {
  const stories = [
    { src: "/images/product1.png", alt: "Story 1" },
    { src: "/images/product2.png", alt: "Story 2" },
    { src: "/images/product3.png", alt: "Story 3" },
    { src: "/images/product4.png", alt: "Story 4" },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-center text-3xl font-medium">Our Instagram Stories</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stories.map((item, idx) => (
          <div
            key={idx}
            className="group rounded-xl overflow-hidden bg-gray-50 border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative w-full aspect-square">
              <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="rounded-lg bg-white/90 backdrop-blur px-4 py-2 text-sm font-medium shadow-md">
                    View Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
