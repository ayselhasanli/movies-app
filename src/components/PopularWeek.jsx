import { useRef } from "react";
import MovieCard from "../ui/MovieCard.jsx"

import mov1 from "../assets/images/adv-1.png"
import mov2 from "../assets/images/com-3.png";
import mov3 from "../assets/images/dr-2.png";
import mov4 from "../assets/images/adv-4.png";

const movies = [
  {
    id: 1,
    rank: 1,
    title: "The Last Of Us",
    genre: ["Horror", "Thriller"],
    rating: 4.3,
    type: "Movie",
    age: "PG-13",
    image: mov1,
  },
  {
    id: 2,
    rank: 2,
    title: "Sri Asih",
    genre: ["Superhero", "Action"],
    rating: 4.9,
    type: "Movie",
    age: "PG-13",
    image: mov2,
  },
  {
    id: 3,
    rank: 3,
    title: "The Flash",
    genre: ["Comedy", "Action"],
    rating: 3.7,
    type: "Movie",
    age: "PG-13",
    image: mov3,
  },
  {
    id: 4,
    rank: 4,
    title: "Oppenheimer",
    genre: ["Drama", "History"],
    rating: 4.4,
    type: "Movie",
    age: "PG-13",
    image: mov4,
  },
  {
    id: 5,
    rank: 5,
    title: "Inception",
    genre: ["Sci-Fi", "Thriller"],
    rating: 4.8,
    type: "Movie",
    age: "PG-13",
    image: mov1,
  },
  {
    id: 6,
    rank: 6,
    title: "Birdbox",
    genre: ["Sci-Fi", "Thriller"],
    rating: 4.8,
    type: "Movie",
    age: "PG-13",
    image: mov2,
  },
];


const PopularWeek = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0f0f0f] py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl md:text-2xl font-bold">
            Popular of the week
          </h2>
          <button
            onClick={() => scroll(1)}
            className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-red-500 transition-colors"
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
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularWeek;
