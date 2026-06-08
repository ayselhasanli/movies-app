import { useRef } from "react";
import {categories} from "../lib/categories";
import CategoryCard from "../ui/CategoryCard";

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0f0f0f] py-12 px-10">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold">
            Explore our wide variety of categories
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>

        <div className="flex items-center gap-2 mt-1 shrink-0 ml-8">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-red-500 transition-colors cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <div className="flex gap-1 items-center">
            <span className="w-6 h-1 bg-red-500 rounded-full"></span>
            <span className="w-4 h-1 bg-gray-600 rounded-full"></span>
            <span className="w-4 h-1 bg-gray-600 rounded-full"></span>
            <span className="w-4 h-1 bg-gray-600 rounded-full"></span>
          </div>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-red-500 transition-colors cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((cat) => (
          <CategoryCard key={cat.name} name={cat.name} images={cat.images} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
