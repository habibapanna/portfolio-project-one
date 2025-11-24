import React from 'react';
import { BiSolidRightArrowAlt } from 'react-icons/bi';
import { GiStairs } from 'react-icons/gi';
import { RiArrowRightUpFill } from 'react-icons/ri';
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      title: "Let's Get In Touch",
      desc: 'Start by reaching out through our contact page. Fill out the form or book a call to discuss your project',
      num: '01',
      steps: 'step1',
    },
    {
      title: "Grab Your Designs",
      desc: 'Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals',
      num: '02',
      steps: 'step2',
    },
    {
      title: "Kickstart Development",
      desc: 'I expertly transform your designs into a powerful, scalable solution, fully ready to launch',
      num: '03',
      steps: 'step3',
    },
    {
      title: "And Hand Over",
      desc: 'Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support',
      num: '04',
      steps: 'step4',
    },
  ];

  return (
    <section id="process" className="py-16 bg-violet-100 text-center">
      
      {/* TOP BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm"
      >
        <span className="w-8 h-8 flex items-center justify-center rounded-md">
          <GiStairs className="text-[#1f2d5c] text-lg" />
        </span>
        <span className="text-[#0f1724] ml-2">Process</span>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* HEADING */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-semibold text-center my-5"
        >
          From Vision to Execution
        </motion.h3>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="text-gray-700"
        >
          A refined design process that ensures consistency & creativity for every project
        </motion.p>

        {/* STEPS GRID */}
        <motion.div
          className="mt-8 grid md:grid-cols-2 gap-6 text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.25 }, // one-by-one animation
            },
          }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-blue-50 p-6 rounded-2xl shadow"
            >
              <div className="rounded-full w-10 h-10 flex items-center justify-center shadow-xl shadow-gray-400 bg-gray-800">
                <span className="text-white text-lg font-semibold">{s.num}</span>
              </div>

              <div className="font-semibold text-2xl my-5">{s.title}</div>

              <div className="mt-2 text-gray-500">{s.desc}</div>

              <div className="border-t-2 border-dashed border-gray-300 my-5"></div>

              <div className="flex justify-end">
                <div className="bg-violet-200 rounded-full px-4 py-1 text-sm font-medium text-gray-500">
                  {s.steps}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          className="text-center mt-14 flex justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-br from-[#1f2740] to-[#152032] flex items-center justify-center text-sm text-white"
          >
            <RiArrowRightUpFill className='mr-2 text-xl' />
            Contact Me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 rounded-lg font-medium shadow-lg bg-gradient-to-br from-[#f9fcff] to-[#e0e7ef] text-[#1c2026] flex items-center justify-center text-sm"
          >
            <BiSolidRightArrowAlt className='mr-2 text-xl' />
            See Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
