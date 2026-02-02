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
  { title: "Blog & Editorial", icon: MdDesignServices, desc: "Content-focused platforms designed for readability, structure, and discoverability — optimized for publishing, SEO, and long-form engagement.." },
  { title: "Community & Nonprofit", icon: FaPalette, desc: "Purpose-driven digital experiences that support engagement, transparency, and impact — built to communicate mission and drive action." },
  { title: "Documentation", icon: FaLaptopCode, desc: "Clear, structured documentation systems designed for usability, navigation, and long-term maintenance across technical and non-technical audiences.." },
  { title: "Education", icon: FaBriefcase, desc: "Designing intuitive education platforms that prioritize clarity, accessibility, and engagement across web, mobile, and learning systems." },
  { title: "Environment", icon: FaShoppingCart, desc: "Digital solutions that communicate sustainability initiatives, data, and impact clearly — supporting awareness, action, and transparency." },
  { title: "Food & Drink", icon: FaBuilding, desc: "Brand-forward digital experiences for food and beverage businesses — focused on storytelling, conversion, and customer engagement." },
  { title: "Government", icon: FaCar, desc: "Accessible, compliant, and user-focused digital platforms designed to improve clarity, trust, and public service delivery." },
  { title: "Home Services", icon: FaBroom, desc: "Conversion-focused digital platforms designed to generate leads, simplify bookings, and support local service growth." },
  { title: "HR & Hiring", icon: FaPlane, desc: "Recruitment and HR platforms focused on usability, clarity, and efficiency — improving candidate experience and internal workflows." },
  { title: "Medical & Wellness", icon: FaHeartbeat, desc: "Healthcare-focused digital experiences built for clarity, trust, and accessibility — supporting patients, providers, and compliance needs." },
  { title: "Personal", icon: FaGraduationCap, desc: "Clean, expressive digital spaces for individuals — from personal brands to creators and professionals." },
  { title: "Portfolio & Agency", icon: FaGraduationCap, desc: "High-performance portfolio and agency websites designed to showcase work, credibility, and conversion-focused storytelling." },
  { title: "Professional Services", icon: FaGraduationCap, desc: "Digital platforms for consultants, firms, and service providers — focused on clarity, authority, and lead generation." },
  { title: "Real Estate", icon: FaGraduationCap, desc: "Property-focused digital experiences designed for discovery, listings, and lead conversion across devices." },
  { title: "Retail & E-Commerce", icon: FaGraduationCap, desc: "Scalable, conversion-optimized commerce experiences designed to support browsing, purchasing, and long-term growth." },
  { title: "Technology", icon: FaGraduationCap, desc: "Digital products and platforms built for speed, scalability, and usability — supporting SaaS, platforms, and technical services." },
  { title: "Transportation", icon: FaGraduationCap, desc: "User-focused digital solutions designed to support logistics, mobility, and service efficiency through clear interfaces." },
  { title: "Travel", icon: FaGraduationCap, desc: "Experience-driven digital platforms designed to inspire discovery, simplify planning, and support seamless journeys." },
];

const CARD_WIDTH = 280 + 24; // card width + gap
const VISIBLE_CARDS = 4;

const Industries = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = industries.length - VISIBLE_CARDS;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="bg-violet-100 py-28 rounded-[100px] mt-20 md:pb-48">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-16 px-[16px] 2xl:px-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0f1724]">
           Architecture & Design
          </h2>
          <p className="text-gray-800 max-w-xl mt-3 text-lg">
            Designing visually driven digital experiences that showcase concepts, portfolios, and spatial storytelling with clarity and precision.
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
                className="min-w-[280px]
    bg-white/90
    rounded-2xl
    p-[16px]
    flex
    flex-col"
              >
                {/* TOP (icon + title) */}
<div>
  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mb-4">
    <Icon className="text-xl text-[#0f1724]" />
  </div>

  <h3 className="text-xl font-semibold mb-3 text-[#0f1724]">
    {item.title}
  </h3>
</div>

{/* DESCRIPTION */}
<p className="text-gray-800 text-sm lg:text-base leading-relaxed mt-auto">
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
