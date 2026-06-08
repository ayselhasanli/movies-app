import React from 'react'

const CategoryCard = ({ name, images }) => {
  return (
    <div className="shrink-0 w-52 bg-[#1a1a1a] border border-gray-700 rounded-xl overflow-hidden cursor-pointer hover:border-gray-500 transition-colors">
      <div className="grid grid-cols-2 gap-1 p-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={name}
            className="rounded-lg h-20 w-full object-cover"
          />
        ))}
      </div>
      <div className="flex items-center justify-between px-3 pb-3 pt-1">
        <span className="text-white font-semibold text-sm">{name}</span>
        <div className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center">
          <svg
            width="12"
            height="12"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </div>
      </div>
    </div>
  );
};


export default CategoryCard
