import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Hero = () => {
  // ✅ Your images (corrected array)
  const projectImages = [
    { img: "https://framerusercontent.com/images/qaXP9CBTkpCNVvyTQ6Uxc8kN5ts.png" },
    { img: "https://framerusercontent.com/images/jQO0HIIQMx84s1lMLD7tOLhn9pc.png" },
    { img: "https://framerusercontent.com/images/jQO0HIIQMx84s1lMLD7tOLhn9pc.png?scale-down-to=2048" },
    { img: "https://framerusercontent.com/images/luuFCS3wrDtTqDV4Kd1Adkkk.jpg" },
    { img: "https://framerusercontent.com/images/tWaZY7WBmJ3rT5y8Tc6cmJefJk.jpeg" },
    { img: "https://framerusercontent.com/images/tWaZY7WBmJ3rT5y8Tc6cmJefJk.jpeg?scale-down-to=512" },
  ];

  return (
    <motion.div className="bg-violet-100" style={{
    backgroundImage:
      "url('https://framerusercontent.com/images/dDB4JCGfoX5DJBUD3qohcdOK9U.png')",
       backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  }}>
      <section id="home" className="bg-violet-10 pt-20"
       >
        <div className="mx-auto px-6 text-center">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif leading-tight text-slate-900 flex flex-col items-center gap-2"
          >
            {/* LINE 1 */}
            <div className="flex items-center gap-3">
              <img
                className="h-20 w-20 rounded-xl object-cover"
                src="https://i.postimg.cc/VsM4VNZp/Gemini-Generated-Image-r04xalr04xalr04x.png"
              />
              <span className="text-3xl md:text-8xl">I'm Limon</span>
            </div>

            {/* LINE 2 */}
            <div className="flex items-center gap-3">
              <span className="text-3xl md:text-8xl">Remote Designer</span>

              <img
                className="h-20 w-20 rounded-xl object-cover"
                src="https://framerusercontent.com/images/F8rOBHbbIkzGRluKefWlxCX9WI.png?scale-down-to=512"
              />
              <img
                className="h-20 w-20 rounded-xl object-cover"
                src="https://framerusercontent.com/images/XJP6N21SKyA8OD0sTiV9H2m0.jpg?scale-down-to=1024"
              />
            </div>
          </motion.h1>

          {/* PARAGRAPH */}
          <p className="mt-6 text-black max-w-xl mx-auto">
I specialize in creating thoughtful and impactful products, collaborating with startups and leading brands
          </p>

         {/* BUTTONS */}
                 <div className="text-center mt-14 flex justify-center gap-6">
                   {/* Dark Button */}
                   <button className="px-8 py-3 rounded-lg bg-[#1f2d5c] text-white font-medium shadow-md flex items-center justify-center text-sm">
                     <RiArrowRightUpFill className='mr-2 text-xl' />
                     Contact Me
                   </button>
         
                   {/* White Button */}
                   <button className="px-6 py-3 rounded-lg font-medium shadow-lg bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef] text-[#1c2026] flex items-center justify-center text-sm">
                     <BiSolidRightArrowAlt className='mr-2 text-xl' />
                     See Projects
                   </button>
                 </div>
        </div>
      </section>

      {/* PROJECTS MARQUEE */}
      <section id="projects" className="bg-violet-10 py-12 overflow-hidden">
        <div className="mx-auto px-6">

          <Marquee
            speed={30}         // smooth & slow
            gradient={false}   // no fade edges
            pauseOnHover={true}
          >
            {projectImages.map((p, i) => (
              <article
                key={i}
                className="rounded-xl overflow-hidden shadow-sm min-w-[350px] mx-4 pt-3 pb-10 px-3 bg-violet-100 border border-gray-300 cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-64 object-cover rounded-xl border-b border-gray-500 shadow-lg shadow-gray-500"
                />
              </article>
            ))}
          </Marquee>

        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
