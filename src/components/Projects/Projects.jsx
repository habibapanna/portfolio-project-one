import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

import Project1 from "../../assets/pr1.jpeg";
import Project2 from "../../assets/pr2.jpg";
import Project3 from "../../assets/pr3.jpg";
import Project4 from "../../assets/pr4.jpg";
import Project5 from "../../assets/pr5.jpg";
import Project6 from "../../assets/pr6.jpg";
import Project7 from "../../assets/pr7.jpg";
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

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="min-h-screen bg-violet-100 px-[16px] 2xl:px-12 py-20">
      
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer rounded-xl overflow-hidden border border-gray-300 bg-violet-100"
          >
            <img
              src={project.image}
              className="w-full object-cover"
            />

            <div className="flex justify-between items-center px-4 py-4">
              <h3 className="font-medium text-slate-700">
                {project.category}
              </h3>
              <FiArrowUpRight className="text-gray-500 text-lg" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* POPUP CAROUSEL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden"
            >
              {/* CLOSE */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 z-10 text-gray-700"
              >
                <FiX size={22} />
              </button>

              {/* ARROWS */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full"
              >
                <FiChevronLeft size={30} />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full"
              >
                <FiChevronRight size={30} />
              </button>

              {/* CARD (FULL CLICKABLE) */}
              <a
                href={projects[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={projects[activeIndex].image}
                  className="w-full md:h-[500px] object-cover"
                />

                <div className="flex justify-between items-center px-6 py-5">
                  <h3 className="text-lg font-medium text-slate-800">
                    {projects[activeIndex].category}
                  </h3>
                  <FiArrowUpRight className="text-gray-800 text-xl" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
