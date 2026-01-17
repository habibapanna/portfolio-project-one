import React from "react";
import { Link } from "react-router-dom";

const FloatingNav = () => {
  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        z-40
        bg-gray-800/80
        backdrop-blur-2xl
        border border-white/20
        rounded-full
        px-4 md:px-10 py-2 md:py-3 text-sm md:text-lg
        flex justify-center items-center gap-3 md:gap-8
        text-gray-300 shadow-xl shadow-gray-400
        max-w-[95%] md:max-w-none
      "
    >
      <Link
        to="/"
        className=" text-white text-sm md:text-[20px]"
      >
        Home
      </Link>

      <Link
        to="projects"
        className="px-4 py-1 md:py-2 md:px-5 rounded-full bg-gray-500 text-white text-sm md:text-[20px] shadow hover:bg-gray-200 hover:text-gray-800 transition"
      >
        Projects
      </Link>

      <Link
        to="services"
        className=" text-white text-sm md:text-[20px]"
      >
        Services
      </Link>
    </div>
  );
};

export default FloatingNav;
