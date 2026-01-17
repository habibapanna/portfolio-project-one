import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { LuArrowDownUp } from "react-icons/lu";

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
    <div className="bg-violet-100" style={{
    backgroundImage:
      "url('https://framerusercontent.com/images/dDB4JCGfoX5DJBUD3qohcdOK9U.png')",
       backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  }}>

    <section id="home" className="bg-violet-10 pt-16 sm:pt-20">
  <div className="mx-auto px-4 sm:px-6 text-center">

    {/* HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="
        font-serif text-[#0f1724]
        flex flex-col items-center
        gap-4 sm:gap-2
      "
    >
      {/* LINE 1 */}
      <Fade direction="down">
        <div
          className="
            flex flex-col sm:flex-row
            items-center
            gap-3
          "
        >
          <img
            className="
              h-14 w-14
              sm:h-16 sm:w-16
              md:h-20 md:w-20
              rounded-xl
              object-cover object-top
            "
            src="https://i.postimg.cc/VsM4VNZp/Gemini-Generated-Image-r04xalr04xalr04x.png"
            alt="Sanwar Hossen Limon"
          />

          <span
            className="
              text-2xl
              sm:text-3xl
              md:text-7xl
              bg-gradient-to-b from-[#334155] to-[#1e293b]
              text-transparent bg-clip-text
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              leading-tight
            "
          >
            I'm Sanwar Hossen Limon
          </span>
        </div>
      </Fade>

      {/* LINE 2 */}
      <Fade>
        <div
          className="
            flex flex-col sm:flex-row
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              text-lg
              sm:text-xl
              md:text-4xl
              leading-[1.35]
              bg-gradient-to-b from-[#334155] to-[#1e293b]
              text-transparent bg-clip-text
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              text-center
            "
          >
            Designing Experiences. Developing Growth.
          </span>

          <div className="flex gap-2">
            <img
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 rounded-xl object-cover"
              src="https://framerusercontent.com/images/F8rOBHbbIkzGRluKefWlxCX9WI.png?scale-down-to=512"
              alt=""
            />
            <img
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 rounded-xl object-cover"
              src="https://framerusercontent.com/images/XJP6N21SKyA8OD0sTiV9H2m0.jpg?scale-down-to=1024"
              alt=""
            />
          </div>
        </div>
      </Fade>
    </motion.h1>

    {/* PARAGRAPH */}
    <Fade>
      <p
        className="
          mt-6
          text-gray-800
          text-sm sm:text-[20px]
          max-w-xl
          mx-auto
          leading-relaxed
        "
      >
        Your AI Powered Digital Growth Specialist helping startups and businesses
        worldwide build high-performing websites, intuitive user experiences,
        and scalable digital strategies.
      </p>
    </Fade>

    {/* BUTTON */}
    <div className="mt-10 sm:mt-14 flex  gap-5 justify-center">
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
                className="rounded-xl overflow-hidden shadow-sm min-w-[350px] mx-4 pt-5 pb-16 px-5 bg-violet-100 border border-gray-300 cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-[200px] md:h-[400px] object-cover rounded-xl border-b border-gray-500 shadow-lg shadow-gray-500"
                />
              </article>
            ))}
          </Marquee>

        </div>
      </section>

    </div>
  );
};

export default Hero;
