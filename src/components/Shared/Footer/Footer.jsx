import { BiSolidRightArrowAlt } from "react-icons/bi";
import { PiHandshakeLight } from "react-icons/pi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { LuArrowDownUp } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-violet-100 px-4 sm:px-6 lg:px-10">
      <section className="bg-violet-100 py-20 md:py-32 px-4 text-center font-inter rounded-[50px] md:rounded-[100px] max-w-6xl mx-auto">

        {/* Floating animated icon */}
        <motion.div
          className="rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl shadow-gray-400 bg-[#0f1724] mx-auto mb-6 sm:mb-8"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PiHandshakeLight className="text-4xl sm:text-6xl text-white" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold text-[#1b1e24] leading-[1.4] md:leading-[1.2]">
         Let’s Build Something That Actually Performs
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-4 md:mt-6 mb-8 md:mb-12 text-gray-800 leading-relaxed">
         Whether you’re launching something new or scaling what you already have, I help turn ideas into high-performance digital solutions — designed with intention and built to grow.
        </p>

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
          <LuArrowDownUp className="text-xl md:text-2xl" />
          Let"s Talk
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
          See Projects
        </Link>
      </Fade>
    </div>
      </section>
    </div>
  );
};

export default Footer;
