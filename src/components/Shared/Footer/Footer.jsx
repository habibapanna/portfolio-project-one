import { BiSolidRightArrowAlt } from "react-icons/bi";
import { PiHandshakeLight } from "react-icons/pi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-violet-100 px-4 sm:px-6 lg:px-10">
      <section className="bg-violet-100 py-20 md:py-32 px-4 text-center font-inter rounded-[50px] md:rounded-[100px] max-w-6xl mx-auto">

        {/* Floating animated icon */}
        <motion.div
          className="rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-xl shadow-gray-400 bg-gray-800 mx-auto mb-6 sm:mb-8"
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

       {/* button */}
            <div className="mt-14 flex justify-center gap-6">
   
     {/* Dark Button */}
    {/* <Fade direction="up">
      <button
       className="px-4 py-2
         md:px-6 md:py-3 rounded-lg text-sm
         bg-gradient-to-br from-[#1f2740] to-[#152032]
         text-white shadow-md flex items-center justify-center 
       "
     >
       <RiArrowRightUpFill className="mr-2 text-xl" />
       Get in Touch
     </button>
    </Fade> */}
   
     {/* Light Button */}
    <Fade direction="up"> <button
       className="
        px-4 py-2
         md:px-6 md:py-3 rounded-lg font-medium shadow-lg bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef] text-[#1c2026] flex items-center justify-center text-sm
       "
     >
       <BiSolidRightArrowAlt className="mr-2 text-xl" />
      <Link to="projects"> See Projects</Link>
     </button>
   </Fade>
   </div>
      </section>
    </div>
  );
};

export default Footer;
