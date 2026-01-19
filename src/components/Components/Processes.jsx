import React from "react";
import {
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import { HiOutlineCode } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";

const steps = [
  {
    title: "Let’s Connect",
    desc: "Start by reaching out through the contact form or booking a call. I’ll discuss your goals, challenges, and expectations to ensure we’re aligned from day one.",
    icon: HiOutlineLightBulb,
  },
  {
    title: "Design with Purpose",
    desc: "Share your vision, and I’ll craft intuitive, user-focused designs that balance creativity, usability, and performance — refined with insights and smart tools for efficiency.",
    icon: HiOutlinePencilAlt,
  },
  {
    title: "Build & Launch",
    desc: "Your designs are transformed into a fast, scalable, and reliable digital solution. Development is clean, optimized, and fully prepared for real-world use.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Deliver & Support",
    desc: "Receive a polished, thoroughly tested product tailored to your needs — with ongoing support and optimization to help you grow confidently.",
    icon:  HiOutlineCode,
  },
];

const Processes = () => {
  return (
    <section className="py-20 md:py-28 bg-violet-200">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
         <span className="text-sm md:text-base font-medium text-gray-800 tracking-wide">
              ✦ Process
            </span>

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-10 mb-32">
          <div>
           
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#0f1724] leading-tight">
              From Vision to Execution
            </h2>
          </div>

          <p className="text-gray-800 md:text-[20px] max-w-xl lg:ml-auto">
           A refined design process that ensures consistency & creativity for every project.
          </p>
        </div>

        {/* PROCESS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className={`
                  relative bg-blue-50 border border-gray-200
                  rounded-xl p-8 min-h-[260px]
                  ${index % 2 !== 0 ? "lg:mt-20" : ""}
                `}
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9888C6] mb-6">
                  <Icon className="text-white text-2xl" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#0f1724] mb-3">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Processes;
