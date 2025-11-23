import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { RiBox2Fill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { Fade } from "react-awesome-reveal";
import { PiNotePencil, PiSlideshow, PiVideo } from 'react-icons/pi';
import { IoSearchOutline } from 'react-icons/io5';
import { CiDollar } from 'react-icons/ci';
import { LuArrowRightLeft } from 'react-icons/lu';
import { FiZap } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';


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

const totalWidth = marqueeItems.length * 220; 

    return (
        <div>
          
              <section id="pricing" className=" text-center py-20 bg-violet-200 rounded-[100px] mt-10">
                <div className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm">
            {/* small white square with icon */}
            <span className="w-8 h-8 flex items-center justify-center rounded-md ">
              <FaArrowRightArrowLeft className="text-[#1f2d5c] text-lg" />
            </span>
            {/* text */}
            <span className="text-[#0f1724]">
              Comparison
            </span>
          </div>
<div className="max-w-3xl mx-auto px-6 text-center ">
<h3 className="text-3xl md:text-5xl font-semibold  mt-5 my-5">Precision vs Basic</h3>
<p className="text-gray-800">Precision-driven design and animations, surpassing static and unengaging layouts.</p>


<div className="mt-8 grid md:grid-cols-2 gap-6">

{/* ME CARD */}
<div className="p-6 rounded-2xl border shadow-sm text-left bg-blue-50">
  <div className="text-2xl md:text-4xl text-center font-semibold">Me</div>

  {/* dashed divider */}
  <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

  {/* Points */}
  <ul className="space-y-3 text-gray-700 text-sm">
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
        <span><TiTick  className="text-gray-500 text-lg" /></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>

  {/* Contact Button */}
  <div className="mt-6">
    <button className="w-full px-4 py-3 rounded-lg text-white bg-gradient-to-br from-[#1f2740] to-[#152032]">
      Contact Me
    </button>
  </div>
</div>

{/* OTHERS CARD */}
<div className="p-6 rounded-2xl border-2 shadow-sm text-left bg-blue-50">
  <div className="text-2xl md:text-4xl font-semibold text-center">Others</div>

  {/* dashed divider */}
  <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

  <ul className="space-y-3 text-gray-700 text-sm">
    {[
      "Generic templates",
      "Basic design skills",
      "Limited customization",
      "Slow performance",
      "Lacks scalability",
      "Static & unengaging layouts",
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <span><TiTick  className="text-gray-500 text-lg" /></span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

</div>

</div>
{/* 🔥 Marquee Section */}
 <div className="relative overflow-hidden py-6 max-w-5xl mx-auto mt-10">
      {/* Edge fade effect */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-violet-200/100 to-white/0 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-violet-200/100 to-white/0 z-20 pointer-events-none" />

      <motion.div
        className="flex gap-6"
        animate={{ x: ["-50%", "0%"] }} // left to right, adjust negative to match content width
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 40, // slower movement
        }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <motion.div
            key={idx}
            className="px-5 py-2 rounded-full border border-gray-300 bg-blue-50 shadow text-gray-800 flex items-center gap-2"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 2 }}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium whitespace-nowrap">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>

</section>

            
        </div>
    );
};

export default Pricing;