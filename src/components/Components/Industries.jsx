import React, { useState } from "react";
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

const CARD_WIDTH = 280 + 24; // card width + gap
const VISIBLE_CARDS = 4;

const Industries = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = industries.length - VISIBLE_CARDS;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="bg-violet-200 py-20">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0f1724]">
            Industries
          </h2>
          <p className="text-gray-800 max-w-xl mt-3 text-lg">
            We work across high-impact industries, combining deep domain
            knowledge with cutting-edge design and AI.
          </p>
        </div>

        {/* ARROWS */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 rounded-full bg-[#0f1724] text-white disabled:opacity-40 flex items-center justify-center"
          >
            <IoArrowBack />
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="w-10 h-10 rounded-full bg-white text-[#0f1724] disabled:opacity-40 flex items-center justify-center"
          >
            <IoArrowForward />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * CARD_WIDTH}px)`,
          }}
        >
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="min-w-[280px] bg-violet-50 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mb-5">
                  <Icon className="text-xl text-[#0f1724]" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-[#0f1724]">
                  {item.title}
                </h3>

                <p className="text-gray-800 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
