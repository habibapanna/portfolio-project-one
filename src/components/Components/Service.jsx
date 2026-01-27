import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import {
  PiFigmaLogoDuotone,
  PiFramerLogo,
  PiPaintBrushFill,
} from "react-icons/pi";
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
  SiGoogle,
  SiGoogleads,
  SiGoogleanalytics,
  SiMailchimp,
  SiZapier,
  SiAdobe,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGooglegemini,
  SiN8N,
  SiMake,
} from "react-icons/si";
import { FaCogs, FaChartLine, FaRobot, FaSearch, FaUsers } from "react-icons/fa";
import { MdCampaign, MdSettings, MdDashboard, MdOutlineAutoAwesome, MdOutlineBrandingWatermark } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { TbDashboard } from "react-icons/tb";
import { RiBox2Fill, RiArrowRightUpFill } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { AiOutlineFileText } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiFacebook } from "react-icons/si";

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

const marketingIcons = [
  SiGoogleads,
  SiFacebook,
  SiGoogleanalytics,
  SiMailchimp,
  SiZapier,
  FaRobot,
];

const seoIcons = [
  SiGoogle,
  SiGoogleanalytics,
  MdSettings,
  FaSearch,
  AiOutlineFileText,
  FaRobot,
];

const designIcons = [SiFigma, SiAdobe, PiFramerLogo];

const strategyIcons = [
  FaChartLine,
  DiGoogleAnalytics,
  FaUsers,
  MdDashboard,
  GiNotebook,
  FaRobot,
];
const brandingIcons = [
  SiAdobeillustrator, 
  SiAdobephotoshop, 
  SiFigma, 
  SiCanva 
];
const aiIcons = [
   SiMake,
  SiZapier,
  SiN8N,
  SiGooglegemini
];

const serviceCards = [
   {
    title: "Business & Growth Strategy",
    description:
      "Strategic planning focused on sustainable growth — supported by market insights, data analysis, and AI-enhanced forecasting to improve decision-making and scalability.",
    icon: GrOptimize,
    img: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?width=1200&height=904",
    smallIcons: strategyIcons,
  },
   {
    title: "Branding",
    description:
      "Strategic brand identity design that creates clarity, consistency, and recognition — helping businesses communicate their values and stand out across digital touchpoints.",
    icon: MdOutlineBrandingWatermark,
    img: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?width=1200&height=904",
    smallIcons: brandingIcons,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered interfaces crafted through research, testing, and experience — with AI assisting usability analysis, pattern recognition, and faster iteration while preserving design quality.",
    icon: PiFigmaLogoDuotone,
    img: "https://framerusercontent.com/images/8P0e6AzdnfLABVNNwGpdPbhIu5Q.png?width=1200",
    smallIcons: designIcons,
    reverse: true,
  },
  {
    title: "Web Design & Development",
    description:
      "High-performance websites designed and built for clarity, speed, and scalability — combining modern design, clean development, and AI-enhanced testing and performance optimization.",
    icon: PiPaintBrushFill,
    img: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?width=1200&height=904",
    smallIcons: techIcons,
  },
  {
    title: "SEO, AEO & GEO Search Optimization",
    description:
      "Search optimization built for modern discovery — combining SEO best practices, answer-focused content (AEO), and contextual relevance, supported by AI-assisted research and continuous analysis.",
    icon: FaCogs,
    img: "https://framerusercontent.com/images/SG0ZbESc0TAkt6qXYHYpwhuuuME.png?width=1200&height=904",
    smallIcons: seoIcons,
  },
   {
    title: "Digital Marketing",
    description:
      "Performance-driven digital marketing strategies supported by AI-assisted targeting, content optimization, and analytics — always guided by clear goals and human-led strategy.",
    icon: MdCampaign,
    img: "https://framerusercontent.com/images/8P0e6AzdnfLABVNNwGpdPbhIu5Q.png?width=1200",
    smallIcons: marketingIcons,
    reverse: true, // makes small card appear on left
  },
  {
    title: "AI Automation and AI Agent",
    description:
      "Smart automation solutions that streamline workflows, reduce manual effort, and improve efficiency — using AI as a support tool to make systems faster, more reliable, and scalable.",
    icon: MdOutlineAutoAwesome,
    img: "https://framerusercontent.com/images/8P0e6AzdnfLABVNNwGpdPbhIu5Q.png?width=1200",
    smallIcons: aiIcons,
    reverse: true,
  },

];

const Service = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-violet-200 rounded-[100px] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* TITLE */}
        <Fade triggerOnce={false} duration={1500} cascade damping={0.2} fraction={0.15}>
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
              Building smooth and engaging digital interactions that elevate user satisfaction
            </p>
          </div>
        </Fade>

{/* // Inside Service component CONTENT GRID */}
<Fade>
  <div className="mt-12 grid grid-cols-1 gap-6">
   {serviceCards.map((card, index) => {
  const isEvenRow = index % 2 === 1; // 2nd, 4th, 6th...

  return (
    <div
      key={index}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
    >
      {/* SMALL CARD */}
      <div
        className={`lg:col-span-1 flex ${
          isEvenRow ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <SmallCard icons={card.smallIcons} />
      </div>

      {/* WIDE CARD */}
      <div
        className={`lg:col-span-2 ${
          isEvenRow ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <WideCard card={card} />
      </div>
    </div>
  );
})}

  </div>
</Fade>

        {/* BUTTON */}
        <div className="mt-10 sm:mt-14 flex gap-5 justify-center">
          <Fade direction="up">
            <Link
              to="projects"
              className="inline-flex items-center gap-2 px-5 py-2 md:px-8 md:py-4 rounded-lg font-medium shadow-lg bg-gradient-to-r from-[#1c2026] to-[#1b2853] text-white text-sm md:text-[20px]"
            >
              <RiArrowRightUpFill className="mr-2 text-lg md:text-2xl" />
              Let's Work together
            </Link>
          </Fade>
          <Fade direction="up">
            <Link
              to="projects"
              className="inline-flex items-center gap-2 px-5 py-2 md:px-8 md:py-4 rounded-lg font-medium shadow-lg bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef] text-[#1c2026] text-sm md:text-[20px]"
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

// Reusable Wide Card Component
const WideCard = ({ card }) => (
  <div className="col-span-1 md:col-span-2 flex flex-col lg:flex-row gap-5 bg-blue-50 p-5 rounded-2xl shadow">
    <img
      src={card.img}
      alt=""
      className="w-full lg:w-1/2 h-52 sm:h-60 md:h-64 lg:h-auto object-cover rounded-xl shadow-lg shadow-gray-400"
    />
    <div className="flex flex-col justify-center gap-2">
      <div className="rounded-full w-14 h-14 flex items-center justify-center shadow-xl shadow-gray-400 bg-white">
        <card.icon className="text-4xl text-gray-700" />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-[#0f1724] my-3 sm:my-5">{card.title}</h3>
      <p className="text-gray-800 text-sm sm:text-base">{card.description}</p>
    </div>
  </div>
);

// Reusable Small Card Component
const SmallCard = ({ icons }) => (
  <div className="p-5 rounded-2xl transition bg-blue-50 flex flex-col items-center justify-center gap-3 w-full shadow-xl shadow-gray-400">
    <div className="flex flex-wrap items-center justify-center gap-3 w-full">
      {icons.map((Icon, idx) => (
        <div
          key={idx}
          className="rounded-full w-14 h-14 flex items-center justify-center bg-[#9888C6] shadow-xl shadow-gray-400"
        >
          <Icon className="text-2xl text-white" />
        </div>
      ))}
    </div>
  </div>
);


export default Service;
