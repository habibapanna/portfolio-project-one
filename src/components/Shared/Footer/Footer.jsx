import { BiSolidRightArrowAlt } from "react-icons/bi";
import { PiHandshakeDuotone, PiHandshakeLight,  } from "react-icons/pi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div>
<section className="bg-violet-100 py-32 px-5 text-center font-inter">
      <motion.div
      className="rounded-full w-20 h-20 flex items-center justify-center shadow-xl shadow-gray-400 bg-gray-800 mx-auto mb-5"
      animate={{ y: [0, 15, 0] }} // move down 10px and back
      transition={{
        duration: 3,      // 3 seconds per cycle
        repeat: Infinity,  // loop forever
        ease: "easeInOut"  // smooth ease
      }}
    >
      <PiHandshakeLight className="text-6xl text-white" />
    </motion.div>

      <h1 className="text-3xl md:text-6xl text-[#1b1e24] leading-[1.4] md:leading-[1.3]">
  Tell Me About Your Next <br /> Creative Project
</h1>

      <p className="text-lg max-w-xl mx-auto mt-6 mb-10 text-gray-800 leading-relaxed">
        Let's create captivating digital experiences that engage audiences and
        drive meaningful brand interactions across diverse platforms
      </p>

    {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mt-14 flex justify-center gap-6"
        >
          <button className="px-8 py-3 rounded-lg bg-gradient-to-br from-[#1f2740] to-[#152032] shadow-md flex items-center justify-center text-sm text-white">
            <RiArrowRightUpFill className="mr-2 text-xl" />
            Contact Me
          </button>

          <button className="px-6 py-3 rounded-lg font-medium shadow-lg bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef] text-[#1c2026] flex items-center justify-center text-sm">
            <BiSolidRightArrowAlt className="mr-2 text-xl" />
            See Projects
          </button>
        </motion.div>
    </section>
        </div>
    );
};

export default Footer;