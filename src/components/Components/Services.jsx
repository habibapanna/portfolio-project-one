import React from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { LuTvMinimal } from "react-icons/lu";
import {
  PiFigmaLogoDuotone,
  PiFramerLogo,
  PiPaintBrushFill,
} from "react-icons/pi";
import { RiArrowRightUpFill, RiBox2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section id="services" className="py-20 bg-violet-200 rounded-[100px] mt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center">
         <div className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm">
            {/* small white square with icon */}
            <span className="w-8 h-8 flex items-center justify-center rounded-md ">
              <RiBox2Fill className="text-[#1f2d5c] text-lg" />
            </span>
            {/* text */}
            <span className="text-[#0f1724]">
              Services
            </span>
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-[#1a1a1a] my-5">
            Crafting Digital Excellence
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto">
            Building smooth and engaging digital interactions that elevate user satisfaction
          </p>
        </div>

        {/* GRID START */}
        <div className="mt-12 grid grid-cols-1 gap-6">

          {/* TOP ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Wide Left Card */}
            <div className="col-span-2 flex gap-5 bg-blue-50 p-5 rounded-2xl shadow">
              <img
                src="https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?width=1200&height=904"
                alt=""
                className="w-full h-60 object-cover rounded-xl shadow-lg shadow-gray-400"
              />

              <div className="flex flex-col justify-center gap-2">
                <div className="rounded-full w-14 h-14 flex items-center justify-center shadow-xl shadow-gray-400 bg-white">
  <PiFigmaLogoDuotone className="text-4xl text-gray-700" />
</div>


                <h3 className="text-2xl font-semibold text-gray-900 my-5">
                  UX & UI
                </h3>

                <p className="text-gray-800 font-semibold">
                  Crafting seamless, user-friendly interfaces that enhance engagement and usability.
                </p>
              </div>
            </div>

            {/* Right Small Card */}
            <div className="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
             <div className="rounded-full w-14 h-14 flex items-center justify-center shadow-xl shadow-gray-400 bg-gray-800">
  <PiFramerLogo className="text-4xl text-white" />
</div>


              <h3 className="text-2xl font-semibold text-gray-900 my-5">
                Framer Development
              </h3>

              <p className="text-gray-800 font-semibold">
                Building high-performance, interactive websites using Framer’s design + dev tools.
              </p>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Bottom Left Small Card */}
            <div className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-blue-50">
              <div className="rounded-full w-14 h-14 flex items-center justify-center shadow-xl shadow-gray-400 bg-gray-800">
  <LuTvMinimal className="text-4xl text-white" />
</div>


              <h3 className="text-2xl font-semibold text-gray-900 my-5">
                Interactive Web Experiences
              </h3>

              <p className="text-gray-800 font-semibold">
                Interactive websites with advanced design and development tools for smooth user experiences.
              </p>
            </div>

            {/* Wide Right Card */}
            <div className="col-span-2 flex gap-5 bg-blue-50 p-5 rounded-2xl shadow">
              <img
                src="https://framerusercontent.com/images/8P0e6AzdnfLABVNNwGpdPbhIu5Q.png?width=1200"
                alt=""
                className="w-full h-60 object-cover rounded-xl shadow-lg shadow-gray-400"
              />

              <div className="flex flex-col justify-center gap-2">
               <div className="rounded-full w-14 h-14 flex items-center justify-center shadow-xl shadow-gray-400 bg-white">
  <PiPaintBrushFill className="text-4xl text-gray-700" />
</div>


                <h3 className="text-2xl font-semibold text-gray-900 my-5">
                  Design & Creativity
                </h3>

                <p className="text-gray-800 font-semibold">
                  Creating visually compelling designs that resonate with your audience and brand.
                </p>
              </div>
            </div>
          </div>
        </div>

       {/* BUTTONS */}
               <div className="text-center mt-14 flex justify-center gap-6">
                 {/* Dark Button */}
                 <button className="px-8 py-3 rounded-lg bg-[#1f2d5c] text-white font-medium shadow-md flex items-center justify-center text-sm">
                   <RiArrowRightUpFill className='mr-2 text-xl' />
                   Contact Me
                 </button>
       
                 {/* White Button */}
                 <button className="px-6 py-3 rounded-lg font-medium shadow-lg bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef] text-[#1c2026] flex items-center justify-center text-sm">
                   <BiSolidRightArrowAlt className='mr-2 text-xl' />
                   See Projects
                 </button>
               </div>
      </div>
    </motion.section>
  );
};

export default Services;
