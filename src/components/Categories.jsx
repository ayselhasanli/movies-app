import { useRef } from "react";
import {categories} from "../lib/categories";
import CategoryCard from "../ui/CategoryCard";

const Categories = () => {
  const scrollRef = useRef(null);
  return (
    <section className="bg-[#0f0f0f] py-12 ">
      <div className="container">
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
      </div>
    </section>
  );
};

export default Categories;
