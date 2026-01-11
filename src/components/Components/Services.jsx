import React from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { LuTvMinimal } from "react-icons/lu";
import {
  PiFigmaLogoDuotone,
  PiFramerLogo,
  PiPaintBrushFill,
} from "react-icons/pi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaWordpress,
} from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";
import { RiArrowRightUpFill, RiBox2Fill } from "react-icons/ri";
import { SiFigma, SiAdobexd } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-violet-200 rounded-[100px] mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* TITLE */}
        <Fade
          triggerOnce={false}
          duration={1500}
          cascade
          damping={0.2}
          fraction={0.15}
        >
          <div className="text-center">
            <div className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm">
              <span className="w-8 h-8 flex items-center justify-center rounded-md">
                <RiBox2Fill className="text-[#1f2d5c] text-lg" />
              </span>

              <span className="text-[#0f1724] font-medium">Services</span>
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1a1a1a] my-5">
              Crafting Digital Excellence
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
              Building smooth and engaging digital interactions that elevate
              user satisfaction
            </p>
          </div>
        </Fade>

        {/* CONTENT GRID */}
        <Fade
          triggerOnce={false}
          duration={1900}
          cascade
          damping={0.15}
          fraction={0.15}
        >
          <div className="mt-12 grid grid-cols-1 gap-6">

            {/* TOP ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Wide Left Card */}
              <div className="col-span-1 md:col-span-2 flex flex-col lg:flex-row gap-5 bg-blue-50 p-5 rounded-2xl shadow">
                <img
                  src="https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?width=1200&height=904"
                  alt=""
                  className="w-full lg:w-1/2 h-52 sm:h-60 md:h-64 lg:h-auto object-cover rounded-xl shadow-lg shadow-gray-400"
                />

                <div className="flex flex-col justify-center gap-2">
                  <div className="rounded-full w-14 h-14 flex items-center justify-center shadow-xl shadow-gray-400 bg-white">
                    <PiFigmaLogoDuotone className="text-4xl text-gray-700" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 my-3 sm:my-5">
                    UI/UX Design
                  </h3>

                  <p className="text-gray-800 font-semibold text-sm sm:text-base">
                     User-centered interfaces crafted through research, testing, and experience — with AI assisting usability analysis, pattern recognition, and faster iteration while preserving design quality.
                  </p>
                </div>
              </div>

              {/* Right Small Card */}
<div className="bg-blue-50 p-5 rounded-2xl shadow hover:shadow-lg transition">
  <div className="grid grid-cols-3 gap-5 place-items-center">

    {[
      SiFigma,
      SiAdobexd,
      PiFramerLogo,
    ].map((Icon, idx) => (
      <div
        key={idx}
        className="rounded-full w-16 h-16 flex items-center justify-center
                   shadow-xl shadow-gray-400 bg-gray-800
                   hover:scale-115 transition-transform duration-300"
      >
        <Icon className="text-4xl text-white" />
      </div>
    ))}

  </div>
</div>


            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Bottom Small Card */}
<div className="p-5 rounded-2xl shadow hover:shadow-lg transition bg-blue-50">
  <div className="grid grid-cols-3 gap-5 place-items-center">

    {[
      FaHtml5,
      FaCss3Alt,
      FaJs,
      FaReact,
      SiNextdotjs,
      FaPhp,
      FaLaravel,
      FaWordpress,
    ].map((Icon, idx) => (
      <div
        key={idx}
        className="rounded-full w-16 h-16 flex items-center justify-center
                   shadow-xl shadow-gray-400 bg-gray-800
                   hover:scale-115 transition-transform duration-300"
      >
        <Icon className="text-4xl text-white" />
      </div>
    ))}

  </div>
</div>



              {/* Wide Right Card */}
              <div className="col-span-1 md:col-span-2 flex flex-col lg:flex-row gap-5 bg-blue-50 p-5 rounded-2xl shadow">
                <img
                  src="https://framerusercontent.com/images/8P0e6AzdnfLABVNNwGpdPbhIu5Q.png?width=1200"
                  alt=""
                  className="w-full lg:w-1/2 h-52 sm:h-60 md:h-64 lg:h-auto object-cover rounded-xl shadow-lg shadow-gray-400"
                />

                <div className="flex flex-col justify-center gap-2">
                  <div className="rounded-full w-14 h-14 flex items-center justify-center shadow-xl shadow-gray-400 bg-white">
                    <PiPaintBrushFill className="text-4xl text-gray-700" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 my-3 sm:my-5">
                    Web Design & Development
                  </h3>

                  <p className="text-gray-800 font-semibold text-sm sm:text-base">
                    High-performance websites designed and built for clarity, speed, and scalability — combining modern design, clean development, and AI-enhanced testing and performance optimization.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Fade>

{/* button */}
         <div className="mt-14 flex justify-center gap-6">

  {/* Dark Button */}
 <Fade direction="up">
   <button
    className="px-4 py-2
      md:px-6 md:py-3 rounded-lg text-sm
      bg-gradient-to-br from-[#1f2740] to-[#152032]
      text-white shadow-md flex items-center justify-center 
    "
  >
    <RiArrowRightUpFill className="mr-2 text-xl" />
    Get in Touch
  </button>
 </Fade>

  {/* Light Button */}
 <Fade direction="up"> <button
    className="
     px-4 py-2
      md:px-6 md:py-3 rounded-lg font-medium shadow-lg bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef] text-[#1c2026] flex items-center justify-center text-sm
    "
  >
    <BiSolidRightArrowAlt className="mr-2 text-xl" />
   <Link to="projects"> See Projects</Link>
  </button>
</Fade>
</div>
      </div>
    </section>
  );
};

export default Services;
