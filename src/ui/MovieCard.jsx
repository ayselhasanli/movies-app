const MovieCard = ({ movie }) => {
  return (
    <div className="shrink-0 flex items-center gap-3 cursor-pointer group">
      <span className="text-white font-bold text-4xl md:text-5xl w-8 text-center opacity-90">
        {movie.rank}
      </span>

      <div className="w-36 md:w-44 bg-[#1a1a1a] border border-gray-700 rounded-xl overflow-hidden group-hover:border-gray-500 transition-colors">
        <div className="relative">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-24 md:h-28 object-cover"
          />
          <span className="absolute top-2 right-2 text-[10px] text-white bg-black/60 border border-gray-500 px-1.5 py-0.5 rounded">
            {movie.age}
          </span>
        </div>

        <div className="p-2.5">
          <h3 className="text-white font-semibold text-sm truncate">
            {movie.title}
          </h3>

          <div className="flex items-center gap-1 mt-1">
            <span className="w-2 h-2 rounded-sm bg-red-600 shrink-0"></span>
            <span className="text-gray-400 text-[11px] truncate">
              {movie.genre.join(" • ")}
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-1.5">
            <svg width="12" height="12" fill="#FBBF24" viewBox="0 0 24 24">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            <span className="text-gray-300 text-[11px]">{movie.rating}</span>
            <span className="text-gray-600 text-[11px]">|</span>
            <span className="text-gray-400 text-[11px]">{movie.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard
