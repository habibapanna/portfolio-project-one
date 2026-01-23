import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-violet-100 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={stagger}
        className="
          max-w-7xl mx-auto px-4 sm:px-6 
          grid grid-cols-1 xl:grid-cols-3 
          gap-10
        "
      >
        {/* LEFT CARD */}
        <motion.div
          variants={fadeUp}
          className="
            bg-gradient-to-tr from-blue-100 via-blue-50 to-blue-100 
            p-4 rounded-xl shadow-xl shadow-gray-400 border border-gray-300
          "
        >
          <motion.img
            variants={fadeUp}
            src="https://i.postimg.cc/VsM4VNZp/Gemini-Generated-Image-r04xalr04xalr04x.png"
            alt="Profile"
            className="
              rounded-xl 
              w-full 
              h-[350px] md:h-[450px] 
              object-cover
            "
          />

          {/* STATUS */}
          <motion.div variants={fadeUp} className="flex justify-center mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="relative w-5 h-5 flex items-center justify-center">
                {[0, 0.6, 1.2].map((delay, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-5 h-5 bg-green-400 rounded-full opacity-40 blur-[2px]"
                    initial={{ scale: 0.3, opacity: 0.8 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 2.2, repeat: Infinity, delay, ease: "easeOut" }}
                  />
                ))}

                <span className="w-2 h-2 bg-green-500 rounded-full z-10"></span>
              </div>

              <p className="text-gray-800 text-sm md:text-[18px]">available for work</p>
            </div>
          </motion.div>

          {/* NAME */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-[40px] font-semibold mt-4 text-[#0f1724] text-center"
          >
            Sanwar H. Limon
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-800 mt-[20px] text-center text-sm md:text-[20px]">
           AI Powered Digital Growth Specialist
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div variants={fadeUp} className="flex gap-5 mt-6 justify-center">
            {[<FaXTwitter />, <FaInstagram />, <CiFacebook />].map((icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="
                  w-10 h-10 md:w-12 md:h-12 
                  bg-violet-200 rounded-full flex items-center justify-center 
                  text-lg md:text-xl text-slate-700
                "
              >
                {icon}
              </motion.button>
            ))}
          </motion.div>

          {/* CONTACT BUTTON */}
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="
              mt-8 w-full flex items-center justify-center py-3 
              bg-gradient-to-r from-[#1c2026] to-[#1b2853] 
              text-white rounded-lg shadow-lg text-sm md:text-[20px] font-semibold 
            "
          >
             Let's Talk
          </motion.button>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div variants={fadeUp} className="xl:col-span-2 space-y-8">

          {/* DESCRIPTION */}
          <motion.p
  variants={fadeUp}
  className="
    text-gray-800 leading-tight 
    text-sm sm:text-base md:text-[18px] 
    max-w-3xl md:mt-12
  "
>
  <p className="mb-5">
    I’m Sanwar Hossen Limon, a digital growth specialist working across design,
    development, and strategy to help businesses build digital systems that perform.
  </p>

  <p className="mb-5">
    My work is driven by human insight and experience, enhanced by AI-powered tools
    that improve research depth, speed, and decision-making. I don’t rely on AI to
    replace creativity or strategy — I use it to remove inefficiencies, validate
    ideas, and scale what works.
  </p>

  <p>
    By combining user-centered design, clean development, and data-informed
    optimization, I deliver digital solutions that are reliable, adaptable, and
    built for long-term growth.
  </p>
</motion.p>


          <motion.div variants={fadeUp} className="border-t-2 border-dashed border-gray-300"></motion.div>

          {/* TAGS */}
          <motion.div variants={stagger} className="flex flex-wrap gap-4">
  {[
    "Product Design",
    "UX Research",
    "No-Code",
    "Usability Testing",
    "Prototyping",
    "Responsive Design",
    "Performance Optimization",
    "Growth Marketing",
    "Performance Marketing",
    "Content Strategy",
    "Conversion Optimization",
    "Campaign Analytics",
    "Funnel Optimization",
    "AI Automation",
    "AI Workflows",
    "AI Agents",
    "Audience Targeting",
    "Growth Strategy",
    "Business Planning",
    "Market Research",
    "Data Analysis",
  ].map((t, i) => (
    <motion.span
      key={i}
      variants={fadeUp}
      className="
        px-4 py-2 bg-gray-50 border rounded-lg
        text-xs sm:text-sm md:text-[16px] md:px- md:py-3 text-gray-800
      "
    >
      {t}
    </motion.span>
  ))}
</motion.div>


          {/* <motion.div variants={fadeUp} className="border-t-2 border-dashed border-gray-300"></motion.div> */}

          {/* EXPERIENCE LIST */}
          {/* <motion.div variants={stagger} className="space-y-4">
            {[
              { role: "Product Designer", company: "Nexus Creative", year: "2023" },
              { role: "Freelance", company: "BrightLeaf Co", year: "2021" },
              { role: "Graphic Designer", company: "SummitWorks", year: "2024" },
              { role: "UX/UI Designer", company: "UrbanFlow Lab", year: "2022" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="
                  grid grid-cols-3 
                  bg-gray-100 p-4 md:p-5 
                  rounded-xl items-center
                  text-xs sm:text-sm md:text-base
                "
              >
                <span>{item.role}</span>
                <span className="text-gray-700 text-center">{item.company}</span>
                <span className="text-gray-600 text-right">{item.year}</span>
              </motion.div>
            ))}
          </motion.div> */}

        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
