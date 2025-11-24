import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="py-24 bg-violet-100 overflow-hidden"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 grid xl:grid-cols-3 gap-10"
        >

          {/* LEFT CARD */}
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-tr from-blue-100 via-blue-50 to-blue-100 p-3 rounded-xl shadow-xl shadow-gray-400 border border-gray-300"
          >
            <motion.img
              variants={fadeUp}
              src="https://i.postimg.cc/VsM4VNZp/Gemini-Generated-Image-r04xalr04xalr04x.png"
              alt="Profile"
              className="rounded-xl w-full h-[400px] object-cover"
            />

            {/* CLEAN RIPPLE STATUS */}
            <motion.div variants={fadeUp} className="flex justify-center mt-4 text-sm">
              <div className="flex items-center gap-2">

                <div className="relative w-5 h-5 flex items-center justify-center">

                  {/* Soft Ripple Waves */}
                  {[0, 0.6, 1.2].map((delay, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-5 h-5 bg-green-400 rounded-full opacity-40 blur-[2px]"
                      initial={{ scale: 0.3, opacity: 0.8 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                  {/* Center Dot */}
                  <span className="w-2 h-2 bg-green-500 rounded-full z-10"></span>
                </div>

                <p className="text-gray-600">available for work</p>
              </div>
            </motion.div>

            {/* NAME */}
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold mt-4 text-center">
              Sanwar Limon
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-600 mt-1 text-center">
              UI/UX Interaction Designer Based in Berlin.
            </motion.p>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={fadeUp}
              className="flex gap-5 mt-6 justify-center"
            >
              {[<FaXTwitter />, <FaInstagram />, <CiFacebook />].map((icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-violet-200 rounded-full flex items-center justify-center text-xl text-slate-700"
                >
                  {icon}
                </motion.button>
              ))}
            </motion.div>

            {/* CONTACT BUTTON */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.00 }}
              transition={{ duration: 0.3 }}
              className="mt-8 w-full flex items-center justify-center py-3 bg-gradient-to-br 
              from-[#1f2740] to-[#152032] text-white rounded-lg shadow-lg"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div variants={fadeUp} className="xl:col-span-2">

            {/* DESCRIPTION */}
            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed max-w-3xl">
             I'm Sanwar Hosen Limon, a passionate Web Designer & Developer based in the dynamic city of Berlin, Germany. I blend creative design with precise technical execution to deliver outstanding digital experiences.
            </motion.p>

            <motion.div variants={fadeUp} className="border-t-2 border-dashed border-gray-300 my-10"></motion.div>

            {/* TAGS */}
            <motion.div variants={stagger} className="flex flex-wrap gap-3 mt-6">
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
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className="px-4 py-2 bg-gray-100 border rounded-lg text-sm"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="border-t-2 border-dashed border-gray-300 my-10"></motion.div>

            {/* EXPERIENCE LIST */}
            <motion.div variants={stagger} className="space-y-4">
              {[
                { role: "Product Designer", company: "Nexus Creative", year: "2023" },
                { role: "Freelance", company: "BrightLeaf Co", year: "2021" },
                { role: "Graphic Designer", company: "SummitWorks", year: "2024" },
                { role: "UX/UI Designer", company: "UrbanFlow Lab", year: "2022" },
              ].map((item, i) => (
                <motion.div
  key={i}
  variants={fadeUp}
  className="grid grid-cols-3 bg-gray-100 p-5 rounded-xl items-center"
>
  <span className="">{item.role}</span>
  <span className="text-gray-700 text-center">{item.company}</span>
  <span className="text-gray-600 text-right">{item.year}</span>
</motion.div>

              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
