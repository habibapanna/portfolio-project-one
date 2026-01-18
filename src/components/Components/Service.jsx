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


const Services = () => {
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
                    <PiPaintBrushFill className="text-4xl text-gray-700" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1724] my-3 sm:my-5">
                    Web Design & Development
                  </h3>

                  <p className="text-gray-800 text-sm sm:text-base">
                    High-performance websites designed and built for clarity, speed, and scalability — combining modern design, clean development, and AI-enhanced testing and performance optimization.
                  </p>
                </div>
              </div>
             {/* Right Small Card */}

<div className="p-5 rounded-2xl shadow hover:shadow-lg transition bg-blue-50">
  <div className="flex flex-wrap items-center gap-3 mt-2 justify-center">
    {techIcons.map((Icon, index) => (
      <div
        key={index}
        className="rounded-full w-14 h-14 flex items-center justify-center
                   shadow-xl shadow-gray-400 bg-[#9888C6]"
      >
        <Icon className="text-2xl text-white" />
      </div>
    ))}
  </div>

</div>

            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* Bottom Small Card */}
<div className="bg-blue-50 p-5 rounded-2xl shadow hover:shadow-lg transition">
  {/* TOOL ICONS */}
  <div className="flex flex-wrap items-center gap-3 mt-2 justify-center">

    {/* Google Ads */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiGoogleads className="text-white text-2xl" />
    </div>

    {/* Meta Ads (Facebook) */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiFacebook className="text-white text-2xl" />
    </div>

    {/* Analytics */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiGoogleanalytics className="text-white text-2xl " />
    </div>

    {/* Email Platforms */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiMailchimp className="text-white text-2xl" />
    </div>

    {/* Automation Tools */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiZapier className="text-white text-2xl" />
    </div>

    {/* AI Marketing Tools */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <FaRobot className="text-white text-2xl" />
    </div>

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
                    <MdCampaign className="text-4xl text-gray-700" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1724] my-3 sm:my-5">
                    Digital Marketing
                  </h3>

                  <p className="text-gray-800 text-sm sm:text-base">
                    Performance-driven digital marketing strategies supported by AI-assisted targeting, content optimization, and analytics — always guided by clear goals and human-led strategy.
                  </p>
                </div>
              </div>

            </div>
 
 {/* 2nd TOP ROW */}
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
                    <GrOptimize className="text-4xl text-gray-700" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1724] my-3 sm:my-5">
                   SEO, AEO & Search Optimization
                  </h3>

                  <p className="text-gray-800 text-sm sm:text-base">
                      Search optimization built for modern discovery — combining SEO best practices, answer-focused content (AEO), and contextual relevance, supported by AI-assisted research and continuous analysis.

                  </p>
                </div>
              </div>

{/* Right Small Card */}
<div className="bg-blue-50 p-5 rounded-2xl shadow hover:shadow-lg transition">
  {/* TOOL ICONS */}
  <div className="flex flex-wrap items-center gap-3 mt-2 justify-center">

    {/* Google Search Console */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiGoogle className="text-white text-2xl " />
    </div>

    {/* Google Analytics */}
    <div className="w-14 h-14  rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiGoogleanalytics className="text-white text-2xl " />
    </div>

    {/* Technical Audits */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <MdSettings className="text-white text-2xl " />
    </div>

    {/* Keyword Research */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <FaSearch className="text-white text-2xl " />
    </div>

    {/* Schema */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <AiOutlineFileText className="text-white text-2xl " />
    </div>

    {/* AI SEO Tools */}
    <div className="w-14 h-14  rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <FaRobot className="text-white text-2xl " />
    </div>

  </div>
</div>


            </div>

{/* 2nd bottom row */}

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Bottom Small Card */}

<div className="bg-blue-50 p-5 rounded-2xl shadow hover:shadow-lg transition">
  {/* TOOL ICONS */}
  <div className="flex items-center gap-3 mt-2">

    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiFigma className="text-white text-2xl " />
    </div>

    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <SiAdobe className="text-white text-2xl" />
    </div>

    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <PiFramerLogo className="text-white text-2xl md:text-3xl" />
    </div>

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
                    <PiFigmaLogoDuotone className="text-4xl text-gray-700" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1724] my-3 sm:my-5">
                    UI/UX Design
                  </h3>

                  <p className="text-gray-800 text-sm sm:text-base">
                     User-centered interfaces crafted through research, testing, and experience — with AI assisting usability analysis, pattern recognition, and faster iteration while preserving design quality.
                  </p>
                </div>
              </div>

            </div>

 {/* 3rd TOP ROW */}
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
                    <GrOptimize className="text-4xl text-gray-700" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1724] my-3 sm:my-5">
                   Business & Growth Strategy
                  </h3>

                  <p className="text-gray-800 text-sm sm:text-base">
                     Strategic planning focused on sustainable growth — supported by market insights, data analysis, and AI-enhanced forecasting to improve decision-making and scalability.

                  </p>
                </div>
              </div>

{/* Right Small Card */}
<div className="bg-blue-50 p-5 rounded-2xl shadow hover:shadow-lg transition">
  {/* TOOL ICONS */}
  <div className="flex flex-wrap items-center gap-3 mt-2 justify-center">

    {/* Market Research */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <FaChartLine className="text-white text-2xl " />
    </div>

    {/* Analytics */}
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <DiGoogleAnalytics className="text-white text-2xl md:text-3xl" />
    </div>

    {/* CRM */}
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <FaUsers className="text-white text-2xl md:text-3xl" />
    </div>

    {/* Dashboards */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <MdDashboard className="text-white text-2xl " />
    </div>

    {/* Planning Frameworks */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <GiNotebook className="text-white text-2xl md:text-3xl" />
    </div>

    {/* AI Strategy Tools */}
    <div className="w-14 h-14 rounded-full bg-[#9888C6] flex items-center justify-center shadow-md">
      <FaRobot className="text-white text-2xl" />
    </div>

  </div>
</div>



            </div>

          </div>
        </Fade>

 {/* BUTTON */}
    <div className="mt-10 sm:mt-14 flex gap-5 justify-center">
      <Fade direction="up">
        <Link
          to="projects"
          className="
            inline-flex items-center gap-2
            px-5 py-2
            md:px-12 md:py-6
            rounded-lg
            font-medium
            shadow-lg
            bg-[#1c2026]
            text-white
            text-sm md:text-[20px]
          "
        >
          <RiArrowRightUpFill className="mr-2 text-xl md:text-2xl" />
          Let's Work together
        </Link>
      </Fade>
      <Fade direction="up">
        <Link
          to="projects"
          className="
            inline-flex items-center gap-2
            px-5 py-2
            md:px-12 md:py-6
            rounded-lg
            font-medium
            shadow-lg
            bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef]
            text-[#1c2026]
            text-sm md:text-[20px]
          "
        >
          <LuArrowDownUp className="text-xl md:text-2xl" />
          See Services
        </Link>
      </Fade>
    </div>
      </div>
    </section>
  );
};

export default Services;
