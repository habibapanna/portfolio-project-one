import React from "react";
import { motion } from "framer-motion";
import {
  SiFigma,
  SiAdobexd,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiShopify,
  SiWix,
  SiWebflow,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSemrush,
  SiGoogleads,
  SiMeta,
  SiMailchimp,
  SiHubspot,
  SiZapier,
  SiN8N,
  SiMake,
} from "react-icons/si";
import { FaChartLine, FaCheck, FaSearch } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";


import { FaPlug, FaCode } from "react-icons/fa";
import { TbWebhook } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";

const marqueeItems = [
  // Design & No-Code
  { text: "Figma", icon: <SiFigma /> },
  { text: "Adobe XD", icon: <SiAdobexd /> },
  { text: "Framer", icon: <SiFramer /> },

  // Frontend
  { text: "HTML", icon: <SiHtml5 /> },
  { text: "CSS", icon: <SiCss3 /> },
  { text: "JavaScript", icon: <SiJavascript /> },
  { text: "React", icon: <SiReact /> },
  { text: "Next.js", icon: <SiNextdotjs /> },

  // Backend & CMS
  { text: "PHP", icon: <SiPhp /> },
  { text: "Laravel", icon: <SiLaravel /> },
  { text: "WordPress", icon: <SiWordpress /> },

  // Builders & Platforms
  { text: "Shopify", icon: <SiShopify /> },
  { text: "Wix", icon: <SiWix /> },
  { text: "Webflow", icon: <SiWebflow /> },
  { text: "GoHighLevel", icon: <FaCode /> },

  // Automation
  { text: "n8n", icon: <SiN8N /> },
  { text: "Zapier", icon: <SiZapier /> },
  { text: "Make (Integromat)", icon: <SiMake /> },
  { text: "Webhooks", icon: <TbWebhook /> },
  { text: "API Integrations", icon: <FaPlug /> },

  // Analytics & SEO
  { text: "Google Analytics", icon: <SiGoogleanalytics /> },
  { text: "Google Search Console", icon: <SiGooglesearchconsole /> },
  { text: "Ahrefs", icon: <FaChartLine /> },
  { text: "SEMrush", icon: <SiSemrush /> },
 { text: "Screaming Frog", icon: <TbSeo /> },
  { text: "Schema Markup", icon: <FaCode /> },

  // Marketing
  { text: "Google Ads", icon: <SiGoogleads /> },
  { text: "Meta Ads", icon: <SiMeta /> },
  { text: "Mailchimp", icon: <SiMailchimp /> },
  { text: "ActiveCampaign", icon: <FaCode /> },
  { text: "HubSpot", icon: <SiHubspot /> },
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
          <span className="text-[#0f1724] ml-2">Why Work With Me</span>
        </div>

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-5 text-[#0f1724]">
          Precision vs Basic
        </h3>

        {/* Sub text */}
        <p className="mt-3 text-gray-800 px-4 max-w-4xl mx-auto text-sm md:text-[20px]">
         Precision-driven digital solutions built to perform, scale, and convert — not just look good.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ME CARD */}
        <div className="p-5 md:p-6 rounded-2xl border shadow-sm bg-blue-50 text-left">
          <div className="text-xl sm:text-3xl md:text-4xl text-center font-semibold text-[#0f1724]">
            Me
          </div>

          <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

          <ul className="space-y-3 text-gray-800 text-sm md:text-base font-semibold">
            {[
              "Custom, high-performance websites tailored to your goals",
              "Pixel-perfect UI/UX design grounded in real user behavior",
              "Built with Framer & Figma expertise",
              "Seamless animations & interactions",
              "Scalable & future-ready digital systems",
              "Optimized for speed & conversions",
              "Advanced SEO, AEO & search optimization for modern discovery",
              "Human-led strategy, enhanced with AI for speed and accuracy",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheck className="text-green-500 text-lg md:text-xl" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* OTHERS CARD */}
<div className="p-5 md:p-6 rounded-2xl border-2 shadow-sm bg-blue-50 text-left">
  <div className="text-xl sm:text-3xl md:text-4xl font-semibold text-center text-[#0f1724]">
    Others
  </div>

  <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

  <ul className="space-y-3 text-gray-800 text-sm md:text-base font-semibold">
    {[
      "Generic templates with limited flexibility",
      "Basic design execution without strategy",
      "Minimal customization and weak performance",
      "Slow, bloated, or unoptimized builds",
      "Static layouts with no interaction depth",
      "Little focus on scalability or long-term growth",
    ].map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <RiCloseLargeFill className="text-red-500 text-lg md:text-xl mt-[2px]" />
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
      <div className="text-center">
<p className="mt-5 text-gray-800 text-[25px] md:text-[50px] font-semibold italic"
   style={{ fontFamily: "'Dancing Script', cursive" }}>
  → Built to grow, not just launch
</p>
</div>
    </section>
  );
};

export default Pricing;
