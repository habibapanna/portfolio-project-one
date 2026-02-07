import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { LuArrowDownUp } from "react-icons/lu";
import Project1 from '../../assets/pr1.jpeg';
import Project2 from '../../assets/pr2.jpg';
import Project3 from '../../assets/pr3.jpg';
import Project4 from '../../assets/pr4.jpg';
import Project5 from '../../assets/pr5.jpg';
import Project6 from '../../assets/pr6.jpg';
import Project7 from '../../assets/pr7.jpg';
import Project8 from '../../assets/pr8.jpg';
import Project9 from '../../assets/pr9.jpg';
import Project10 from '../../assets/pr10.jpg';
import Project11 from '../../assets/pr11.jpg';
import Project12 from '../../assets/pr12.jpg';
import Project13 from '../../assets/pr13.jpg';
import Project14 from '../../assets/pr14.jpg';
import Project15 from '../../assets/pr15.jpg';
import Project16 from '../../assets/pr16.jpg';
import Project17 from '../../assets/pr17.jpg';
import Project18 from '../../assets/pr18.jpg';
import Project19 from '../../assets/pr19.jpg';
import Project20 from '../../assets/pr20.jpg';
import Project21 from '../../assets/pr21.jpg';
import Project22 from '../../assets/pr22.jpg';
import Project23 from '../../assets/pr23.jpg';
import Project24 from '../../assets/pr24.jpg';
import Project25 from '../../assets/pr25.jpg';

const Hero = () => {
  // ✅ Your images (corrected array)
const projects = [
  { category: "E-Commerce", 
    image: Project1, 
    link: "https://sunrayn-fragrance-project.vercel.app/" },
  { category: "E-Commerce", 
    image: Project2, 
    link: "https://aromafragrance.us/" },
  { category: "Portfolio", 
    image: Project3, 
    link: "https://imaginedreamworld.com/" },
  { category: "Media production", 
    image: Project4, 
    link: "https://hamramediaproduction.us/" },
  { category: "Fitness", 
    image: Project5, 
    link: "https://govandentalcare.co.uk/" },
  { category: "Business", 
    image: Project6, 
    link: "https://divitiaetraders.com/" },
  { category: "Fitness", 
    image: Project7, 
    link: "https://www.somabreath.com/" },
  { category: "Business", 
    image: Project8, 
    link: "https://aspireworksholdings.com/" },
  { category: "Consulting", 
    image: Project9, 
    link: "https://biztechconsult.com/" },
  { category: "Marketing", 
    image: Project10, 
    link: "https://greyalpha.agency/" },
  { category: "Blog", 
    image: Project11, 
    link: "https://labarbeapapa.net/" },
  { category: "Digital agency", 
    image: Project12, 
    link: "https://svdigital.ae/" },
  { category: "E-commerce", 
    image: Project13, 
    link: "https://www.twinbridgelighting.com/" },
  { category: "Consulting", 
    image: Project14, 
    link: "https://clarityinformationservices.nl/" },
  { category: "Driving site", 
    image: Project15, 
    link: "https://confidentdriving.uk/" },
  { category: "Portfolio", 
    image: Project16, 
    link: "https://easylovefencing.com/" },
  { category: "E-commerce", 
    image: Project17, 
    link: "https://ecommystery.com/" },
  { category: "Fitness", 
    image: Project18, 
    link: "https://fit4blast.com//" },
  { category: "Islamic", 
    image: Project19, 
    link: "https://globalummahretreats.com/" },
  { category: "Information portal", 
    image: Project20, 
    link: "https://kidskulturspass.de/" },
  { category: "Fitness", 
    image: Project21, 
    link: "https://reliableseniorstaffing.com/" },
  { category: "Portfolio", 
    image: Project22, 
    link: "https://www.richardleegarcia.com/" },
  { category: "Blog", 
    image: Project23, 
    link: "https://simplejoys.info/" },
  { category: "Educational", 
    image: Project24, 
    link: "https://www.springcollege.org.uk/" },
  { category: "Interior services", 
    image: Project25, 
    link: "https://tulohomedesign.com/" },
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
    md:text-5xl
    leading-[1.3]
    pb-1
    bg-gradient-to-b from-[#334155] to-[#1e293b]
    text-transparent bg-clip-text
    drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]
    text-center
  "
>
  Designing Experiences. Developing Growth.
</span>


          <div className="flex gap-2 pb-1">
            <img
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-[60px] md:w-[60px] rounded-xl object-cover"
              src="https://framerusercontent.com/images/F8rOBHbbIkzGRluKefWlxCX9WI.png?scale-down-to=512"
              alt=""
            />
            <img
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-[60px] md:w-[60px] rounded-xl object-cover"
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
            md:px-8 md:py-4
            rounded-lg
            font-medium
            shadow-lg
            bg-gradient-to-r from-[#1c2026] to-[#1b2853]
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
            md:px-8 md:py-4
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
  speed={30}
  gradient={false}
  pauseOnHover={true}
>
  {projects.map((p, i) => (
    <a
      key={i}
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article
        className="
          rounded-xl
          overflow-hidden
          shadow-sm
          min-w-[350px]
          mx-4
          pt-5
          pb-6
          px-5
          bg-violet-100
          border
          border-gray-300
          cursor-pointer
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        {/* IMAGE */}
        <img
          src={p.image}
          alt={p.category}
          className="
            w-full
            h-[200px]
            md:h-[400px]
            object-cover
            rounded-xl
          "
        />

        {/* CATEGORY + ARROW */}
        <div className="flex justify-between items-center px-2 pt-4">
          <p className="text-[18px] font-medium text-slate-700">
            {p.category}
          </p>

          <RiArrowRightUpFill className="text-[22px] text-slate-600" />
        </div>
      </article>
    </a>
  ))}
</Marquee>


        </div>
      </section>

    </div>
  );
};

export default Hero;
