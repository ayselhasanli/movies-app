import { useRef } from "react";
import { brands } from "../lib/brands";

const Brands = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 160, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0f0f0f] py-12 ">
      <div className="flex items-center gap-3 container">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto flex-1"
          style={{ scrollbarWidth: "none" }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="shrink-0 w-36 h-16 flex items-center justify-center cursor-pointer px-4"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-8 w-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="shrink-0 w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-red-500 transition-colors"
        >
          <svg
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Brands;
