import React from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { LuArrowDownUp, LuTvMinimal } from "react-icons/lu";
import {
  PiFigmaLogoDuotone,
  PiFramerLogo,
  PiPaintBrushFill,
} from "react-icons/pi";
import { RiArrowRightUpFill, RiBox2Fill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { SiAdobe, SiFacebook, SiFigma, SiGoogle, SiGoogleads, SiGoogleanalytics, SiGrafana, SiMailchimp, SiZapier } from "react-icons/si";
import { 
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
} from "react-icons/si";
import { TbDashboard } from "react-icons/tb";
import { FaChartLine, FaRobot, FaSearch, FaUsers } from "react-icons/fa";
import { AiOutlineFileText, AiOutlineProject } from "react-icons/ai";
import { MdCampaign, MdDashboard, MdOutlinePeople, MdSettings } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { DiGoogleAnalytics } from "react-icons/di";
import Industries from "../Components/Industries";
import Processes from "../Components/Processes";



  const techIcons = [
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
   TbDashboard,
];

// Digital Marketing
const marketingIcons = [
  SiGoogleads,
  SiFacebook,
  SiGoogleanalytics,
  SiMailchimp,
  SiZapier,
  DiGoogleAnalytics,
];

// Business & Growth Strategy
const businessIcons = [
  FaChartLine,
  FaUsers,
  TbDashboard,
  GrOptimize,
  GiNotebook,
];

// UI/UX Design (Tools)
const uiuxIcons = [
  SiFigma,
  SiAdobe,
  PiFramerLogo,
  PiPaintBrushFill,
];

// SEO / AEO / Search Optimization
const seoIcons = [
  SiGoogle,
  SiGoogleanalytics,
  DiGoogleAnalytics,
  FaSearch,
  GrOptimize,
  FaRobot,
];



const Services = () => {
    return (
        <div className='py-16 sm:py-20  bg-violet-200'>
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

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold text-[#0f1724] my-5">
              Crafting Digital Excellence
            </h2>

            <p className="text-gray-800 max-w-3xl mx-auto text-sm sm:text-base md:text-[20px]">
              Building smooth and engaging digital interactions that elevate
              user satisfaction
            </p>
          </div>
        </Fade>

        {/* CONTENT GRID */}
        <Fade
        >
          <div className="mt-16 grid grid-cols-1 gap-6 px-12">
{/* card 1 */}
<div className="bg-blue-50 p-6 md:p-10 rounded-3xl shadow">

  <div className="flex flex-col lg:flex-row items-center gap-8 relative">

    {/* LEFT — TEXT */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1724] mb-4">
        Website Development
      </h2>

      <p className="text-gray-800 mb-6 lg:text-[18px]">
        High-performance websites designed and built for clarity, speed, and scalability — combining modern design, clean development, and AI-enhanced testing and performance optimization.
      </p>

      <div className="flex flex-wrap gap-[16px]">
        {[
          "HTML","CSS","JavaScript","React","Next.js","PHP","Laravel",
          "WordPress","Shopify","Wix","Webflow","GoHighLevel"
        ].map((tech, i) => (
          <span
            key={i}
            className="px-6 py-4 rounded-[20px] lg:text-[18px]
                       border border-gray-300
                       bg-white/60 backdrop-blur
                       text-gray-800 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
        {/* RIGHT — LOGOS */}
    <div className="absolute w-[300px] bottom-0 -right-0 lg:left- lg:right-0 lg:top-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center
                       bg-white shadow-3xl"
          >
            <Icon className="text-gray-800 text-3xl" />
          </div>
        ))}
      </div>
    </div>

    <div className="lg:w-1/2">
      <img
        src="https://i.postimg.cc/GtMXxvXk/programming-background-collage-(1).jpg"
        alt=""
        className="rounded-2xl shadow-xl lg:h-[400px] object-cover w-full"
      />
    </div>



  </div>

</div>

{/* card 2 */}
<div className="bg-blue-50 p-6 md:p-10 rounded-3xl shadow">

  <div className="flex flex-col lg:flex-row items-center gap-8 relative">

    {/* LEFT — TEXT */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1724] mb-4">
        Digital Marketing
      </h2>

      <p className="text-gray-800 mb-6 lg:text-[18px]">
        Performance-driven digital marketing strategies supported by AI-assisted targeting, content optimization, and analytics — always guided by clear goals and human-led strategy.
      </p>

      <div className="flex flex-wrap gap-[16px]">
        {[
          "Google Ads","Meta Ads","Analytics","Email Platforms","Automation Tools","AI Marketing Tools",
        ].map((tech, i) => (
          <span
            key={i}
            className="px-6 py-4 rounded-[20px] lg:text-[18px]
                       border border-gray-300
                       bg-white/60 backdrop-blur
                       text-gray-800 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
        {/* RIGHT — LOGOS */}
    <div className="absolute w-[300px] bottom-0 -right-0 lg:left- lg:right-0 lg:top-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {marketingIcons.map((Icon, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center
                       bg-white shadow-3xl"
          >
            <Icon className="text-gray-800 text-3xl" />
          </div>
        ))}
      </div>
    </div>

    <div className="lg:w-1/2">
      <img
        src="https://i.postimg.cc/Fz3F1Jc5/corporate-management-strategy-solution-branding-concept.jpg"
        alt=""
        className="rounded-2xl shadow-xl lg:h-[400px] object-cover w-full"
      />
    </div>



  </div>

</div>

{/* card 3 */}
<div className="bg-blue-50 p-6 md:p-10 rounded-3xl shadow">

  <div className="flex flex-col lg:flex-row items-center gap-8 relative">

    {/* LEFT — TEXT */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1724] mb-4">
        Business & Growth Strategy
      </h2>

      <p className="text-gray-800 mb-6 lg:text-[18px]">
       Strategic planning focused on sustainable growth — supported by market insights, data analysis, and AI-enhanced forecasting to improve decision-making and scalability.
      </p>

      <div className="flex flex-wrap gap-[16px]">
        {[
          "Google Ads","Meta Ads","Analytics","Email Platforms ","Automation Tools","AI Marketing Tools",
        ].map((tech, i) => (
          <span
            key={i}
            className="px-6 py-4 rounded-[20px] lg:text-[18px]
                       border border-gray-300
                       bg-white/60 backdrop-blur
                       text-gray-800 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
        {/* RIGHT — LOGOS */}
    <div className="absolute w-[300px] bottom-0 -right-0 lg:left- lg:right-0 lg:top-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {businessIcons.map((Icon, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center
                       bg-white shadow-3xl"
          >
            <Icon className="text-gray-800 text-3xl" />
          </div>
        ))}
      </div>
    </div>

    <div className="lg:w-1/2">
      <img
        src="https://i.postimg.cc/xCmtZ0M2/team-meeting-with-growth-chart-overlay.jpg"
        alt=""
        className="rounded-2xl shadow-xl lg:h-[400px] object-cover w-full"
      />
    </div>



  </div>

</div>

{/* card 4 */}
<div className="bg-blue-50 p-6 md:p-10 rounded-3xl shadow">

  <div className="flex flex-col lg:flex-row items-center gap-8 relative">

    {/* LEFT — TEXT */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1724] mb-4">
       SEO, AEO & Search Optimization
      </h2>

      <p className="text-gray-800 mb-6 lg:text-[18px]">
        Search optimization built for modern discovery — combining SEO best practices, answer-focused content (AEO), and contextual relevance, supported by AI-assisted research and continuous analysis.
      </p>

      <div className="flex flex-wrap gap-[16px]">
        {[
          "Search Console","Analytics","Keyword Research ","Schema","AI SEO Tools","PHP",
        ].map((tech, i) => (
          <span
            key={i}
            className="px-6 py-4 rounded-[20px] lg:text-[18px]
                       border border-gray-300
                       bg-white/60 backdrop-blur
                       text-gray-800 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
        {/* RIGHT — LOGOS */}
    <div className="absolute w-[300px] bottom-0 -right-0 lg:left- lg:right-0 lg:top-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {seoIcons.map((Icon, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center
                       bg-white shadow-3xl"
          >
            <Icon className="text-gray-800 text-3xl" />
          </div>
        ))}
      </div>
    </div>

    <div className="lg:w-1/2">
      <img
        src="https://i.postimg.cc/WbCFKSfk/homepage-concept-with-search-bar.jpg"
        alt=""
        className="rounded-2xl shadow-xl lg:h-[400px] object-cover w-full"
      />
    </div>



  </div>

</div>

{/* card 5 */}
<div className="bg-blue-50 p-6 md:p-10 rounded-3xl shadow">

  <div className="flex flex-col lg:flex-row items-center gap-8 relative">

    {/* LEFT — TEXT */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1724] mb-4">
        UI/UX Design
      </h2>

      <p className="text-gray-800 mb-6 lg:text-[18px]">
       User-centered interfaces crafted through research, testing, and experience — with AI assisting usability analysis, pattern recognition, and faster iteration while preserving design quality.
      </p>

      <div className="flex flex-wrap gap-[16px]">
        {[
          "Figma","Adobe XD","Framer",
        ].map((tech, i) => (
          <span
            key={i}
            className="px-6 py-4 rounded-[20px] lg:text-[18px]
                       border border-gray-300
                       bg-white/60 backdrop-blur
                       text-gray-800 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
        {/* RIGHT — LOGOS */}
    <div className="absolute w-[300px] bottom-0 -right-0 lg:left- lg:right-0 lg:top-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {uiuxIcons.map((Icon, index) => (
          <div
            key={index}
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center
                       bg-white shadow-3xl"
          >
            <Icon className="text-gray-800 text-3xl" />
          </div>
        ))}
      </div>
    </div>

    <div className="lg:w-1/2">
      <img
        src="https://i.postimg.cc/Vsrd3JJK/ytktykk7.jpg"
        alt=""
        className="rounded-2xl shadow-xl lg:h-[400px] object-cover w-full"
      />
    </div>



  </div>

</div>
          </div>
        </Fade>
        <Industries></Industries>
        <Processes></Processes>
        </div>
    );
};

export default Services;