import React, { useRef } from "react";
import {
  FaPalette,
  FaLaptopCode,
  FaBriefcase,
  FaShoppingCart,
  FaBuilding,
  FaCar,
  FaBroom,
  FaPlane,
  FaHeartbeat,
  FaGraduationCap,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const industries = [
  { title: "UI/UX", icon: MdDesignServices, desc: "Human-centered interface and experience design." },
  { title: "Branding", icon: FaPalette, desc: "Identity systems that build trust and recognition." },
  { title: "Web Design", icon: FaLaptopCode, desc: "Modern, responsive, conversion-focused websites." },
  { title: "Business", icon: FaBriefcase, desc: "Digital tools that support growth and strategy." },
  { title: "E-commerce", icon: FaShoppingCart, desc: "High-performance shopping experiences." },
  { title: "Real Estate", icon: FaBuilding, desc: "Property platforms with clarity and scale." },
  { title: "Car", icon: FaCar, desc: "Automotive platforms and digital services." },
  { title: "Cleaning", icon: FaBroom, desc: "Service-based booking and management tools." },
  { title: "Travel", icon: FaPlane, desc: "Booking, discovery, and travel experiences." },
  { title: "Healthcare", icon: FaHeartbeat, desc: "Patient-friendly and compliant solutions." },
  { title: "Education", icon: FaGraduationCap, desc: "Learning platforms built for engagement." },
];

const Industries = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-violet-200 py-20  text-white">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#0f1724]">Industries</h2>
          <p className="text-gray-800 max-w-xl mt-3 lg:text-[20px]">
            We work across high-impact industries, combining deep domain
            knowledge with cutting-edge design and AI.
          </p>
        </div>

        {/* ARROWS */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-[#0f1724] hover:bg-zinc-700 flex items-center justify-center"
          >
            <IoArrowBack />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white text-[#0f1724] flex items-center justify-center"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {industries.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="min-w-[280px] bg-violet-50
                         rounded-2xl p-6 "
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mb-5">
                <Icon className="text-xl text-[#0f1724]" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[#0f1724]">{item.title}</h3>

              <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Industries;
