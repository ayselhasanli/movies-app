import React from "react";
import heroImg from "../assets/images/hero.png";
import arrow from "../assets/icons/right-arrow.svg"

const Hero = () => {
  return (
    <section class="relative min-h-screen flex flex-col items-center justify-end pb-16">
      <img src={heroImg} class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      <div class="relative z-10 items-center text-center">
        <h1 class="text-[58px] font-bold text-white">
          The Best Streaming Experience
        </h1>
        <p class="text-gray-300 mt-3 max-w-5xl m-auto text-[18px]">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <button class="mt-12 flex gap-1 mx-auto bg-red-600 cursor-pointer text-white px-6 py-4 rounded-lg">
          <img src={arrow} alt="" /> <span>Start Watching Now</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
