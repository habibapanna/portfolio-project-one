import { Fade } from "react-awesome-reveal";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div>
           
             <section id="about" className="py-24 bg-violet-100" 
        >
  <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-3 gap-10 bg-violet-100"
  >

    {/* LEFT CARD */}
    <div className="bg-gradient-to-tr from-blue-100 via-blue-50 to-blue-100 p-3 rounded-xl shadow-xl shadow-gray-400 border border-gray-300">
      <img
        src="https://framerusercontent.com/images/bnJJiW5Vfixlrz7M2pzoeyHBU.png?width=2048&height=2048"
        alt="Profile"
        className="rounded-xl w-full object-cover"
      />

      {/* STATUS */}
       <div className="flex items-center gap-2 mt-4 text-sm text-center mx-auto justify-center">
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Ripples */}
        {[0, 0.5, 1].map((delay, i) => (
          <motion.span
            key={i}
            className="absolute w-4 h-4 bg-green-500 rounded-full"
            initial={{ scale: 0.5, opacity: 0.6 }}
            animate={{ scale: [0.2, 2], opacity: [0.6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Center Dot */}
        <span className="w-2 h-2 bg-green-500 rounded-full z-10"></span>
      </div>

      <p className="text-gray-600 text-center items-center">available for work</p>
    </div>

      {/* NAME */}
      <h2 className="text-3xl font-semibold mt-4 text-center">Sanwar Limon</h2>
      <p className="text-gray-600 mt-1 leading-relaxed text-center">
        UI/UX Interaction Designer Based in Berlin.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex gap-5 mt-6 text-center justify-center">
        {[<FaXTwitter />, <FaInstagram />, <CiFacebook />].map((icon, i) => (
          <button
            key={i}
            className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center text-xl text-slate-700"
          >
            {icon}
          </button>
        ))}
      </div>

      {/* CONTACT BUTTON */}
      <button className="mt-8 w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-br from-[#1f2740] to-[#152032] text-white rounded-lg shadow-lg">
        <span className="text-lg"></span>
        Contact Me
      </button>
    </div>

    {/* RIGHT SECTION */}
    <div className="xl:col-span-2">

      {/* DESCRIPTION */}
      <p className="text-gray-700 leading-relaxed max-w-3xl">
        I'm Sophie Carter, a passionate Web Designer & Developer based in the
        dynamic city of Berlin, Germany. I blend creative design with precise
        technical execution to deliver outstanding digital experiences.
      </p>
      <div className="border-t-2 border-dashed border-gray-300 my-10"></div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-3 mt-6">
        {[
          "Product Design",
          "UX Design",
          "UI Design",
          "Framer",
          "Interaction Design",
          "Branding",
          "Webflow",
          "UX Research",
          "No-Code",
        ].map((t, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-100 border rounded-lg text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="border-t-2 border-dashed border-gray-300 my-10"></div>

      {/* EXPERIENCE LIST */}
      <div className="space-y-4">
        {[
          { role: "Product Designer", company: "Nexus Creative", year: "2023" },
          { role: "Freelance", company: "BrightLeaf Co", year: "2021" },
          { role: "Graphic Designer", company: "SummitWorks", year: "2024" },
          { role: "UX/UI Designer", company: "UrbanFlow Lab", year: "2022" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-gray-100 p-5 rounded-xl"
          >
            <span>{item.role}</span>
            <span className="text-gray-700">{item.company}</span>
            <span className="text-gray-600">{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
            

        </div>
    );
};

export default About;