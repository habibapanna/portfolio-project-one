import React from 'react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { RiBox2Fill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';

const Pricing = () => {
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
    <button className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition">
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
</section>
        </div>
    );
};

export default Pricing;