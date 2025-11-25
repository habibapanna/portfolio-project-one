import React from "react";
import { motion } from "framer-motion";
import {
  PiNotePencil,
  PiSlideshow,
  PiVideo
} from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { LuArrowRightLeft } from "react-icons/lu";
import { FiZap } from "react-icons/fi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const marqueeItems = [
  { text: "Video & Motion Graphics", icon: <PiVideo /> },
  { text: "Slide Decks", icon: <PiSlideshow /> },
  { text: "SEO", icon: <IoSearchOutline /> },
  { text: "Landing Pages", icon: <MdOutlineSpaceDashboard /> },
  { text: "Framer Migration", icon: <LuArrowRightLeft /> },
  { text: "Copywriting", icon: <PiNotePencil /> },
  { text: "Cost Effective", icon: <CiDollar /> },
  { text: "Optimization", icon: <FiZap /> },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-16 md:py-20 bg-violet-200 rounded-[100px] mt-10"
    >
      <div className="text-center">
        {/* Badge */}
        <div className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm text-sm md:text-base">
          <span className="w-7 h-7 flex items-center justify-center rounded-md">
            <FaArrowRightArrowLeft className="text-[#1f2d5c] text-lg" />
          </span>
          <span className="text-[#0f1724] ml-2">Comparison</span>
        </div>

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-5">
          Precision vs Basic
        </h3>

        {/* Sub text */}
        <p className="mt-3 text-gray-800 px-4 max-w-xl mx-auto text-sm md:text-base">
          Precision-driven design and animations, surpassing static and unengaging layouts.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ME CARD */}
        <div className="p-5 md:p-6 rounded-2xl border shadow-sm bg-blue-50 text-left">
          <div className="text-xl sm:text-3xl md:text-4xl text-center font-semibold">
            Me
          </div>

          <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            {[
              "Custom, high-performance websites",
              "Pixel-perfect UI/UX design",
              "Built with Framer & Figma expertise",
              "Seamless animations & interactions",
              "Scalable & future-proof solutions",
              "Optimized for speed & conversions",
              "Advanced SEO tactics for enhanced visibility",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <TiTick className="text-gray-500 text-lg" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button className="w-full px-4 py-3 rounded-lg text-white bg-gradient-to-br from-[#1f2740] to-[#152032] text-sm md:text-base">
              Contact Me
            </button>
          </div>
        </div>

        {/* OTHERS CARD */}
        <div className="p-5 md:p-6 rounded-2xl border-2 shadow-sm bg-blue-50 text-left">
          <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-center">
            Others
          </div>

          <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            {[
              "Generic templates",
              "Basic design skills",
              "Limited customization",
              "Slow performance",
              "Lacks scalability",
              "Static & unengaging layouts",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <TiTick className="text-gray-500 text-lg" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-6 max-w-5xl mx-auto mt-12 px-4">
        {/* Fade edges */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-violet-200 to-transparent z-20" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-violet-200 to-transparent z-20" />

        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35,
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <motion.div
              key={idx}
              className="px-4 py-2 sm:px-5 sm:py-2 border border-gray-300 bg-blue-50 shadow rounded-full flex items-center gap-2 sm:gap-3 text-gray-800"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1.5 }}
            >
              <span className="text-base sm:text-lg">{item.icon}</span>
              <span className="font-medium whitespace-nowrap text-sm sm:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
