import React, { useState, useRef, useEffect } from 'react';
import { BsQuestionCircle, BsQuestionCircleFill } from 'react-icons/bs';
import { GiStairs } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowRightUpFill } from 'react-icons/ri';
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  // --- 5 FAQs (replace text with the exact ones from your screenshot if needed) ---
const faqs = [
  {
    q: "What services do you offer?",
    a: "I help in UI/UX design, web design & development, SEO (including AEO and modern search optimization), AI automations and AI agents, digital marketing, and business growth strategy. Each service is tailored to your specific goals.",
  },
  {
    q: "How do you use AI in your work?",
    a: "AI is used as a support tool to improve research, speed up analysis, enhance accuracy, and scale results. All strategy, creativity, and decision-making remain human-led.",
  },
  {
    q: "Do you work with startups or established businesses?",
    a: "Both. I work with startups building from the ground up and established businesses looking to optimize, scale, or modernize their digital presence.",
  },
  {
    q: "What tools and technologies do you use?",
    a: "Depending on the project, I work with tools like Figma, Framer, Webflow, modern web frameworks, analytics platforms, and AI-assisted research and optimization tools.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary based on scope and complexity. Smaller projects can take a few weeks, while larger, more strategic builds may take longer. Clear timelines are shared before starting.",
  },
  {
    q: "Do you provide ongoing support after delivery?",
    a: "Yes. I offer post-launch support, optimization, and guidance to ensure your product continues to perform and grow effectively.",
  },
  {
    q: "How do we get started?",
    a: "Simply click the button LET’S TALK. We’ll discuss your project, goals, and next steps.",
  },
];


  // --- accordion state: which index is open (0 = first open by default) ---
  const [openIndex, setOpenIndex] = useState(0);

  // we keep refs to measure scrollHeight for smooth max-height transitions
  const contentRefs = useRef([]);

  // ensure refs array length matches faqs length
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs.length]);

  const toggleIndex = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <div>
    
          <section id="faq" className="py-16 text-center bg-violet-200 rounded-[100px]">
       <Fade>
         <div className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm">
          <span className="w-8 h-8 flex items-center justify-center rounded-md ">
            <BsQuestionCircleFill className="text-[#1f2d5c] text-lg" />
          </span>
          <span className="text-[#0f1724] ml-2">FAQS</span>
        </div>
       </Fade>

        <div className="max-w-6xl mx-auto px-6">
          <h4 className="text-2xl md:text-5xl font-semibold text-center my-5">Frequently Asked Questions</h4>
          <p className="mb-10">Find quick answers to the most common questions about the services offered</p>

          <div className="">

          {/* LEFT CARD — moves to bottom on mobile */}
          {/* <div className="order-2 lg:order-1 bg-blue-50 rounded-2xl shadow p-8 md:p-10 flex flex-col text-center">
            <div className="rounded-xl w-12 h-12 flex items-center justify-center shadow-xl shadow-gray-400 bg-white mx-auto">
              <BsQuestionCircle className="text-2xl text-gray-700" />
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mt-5 mb-3">
              Get In Touch Now!
            </h3>
            <p className="text-gray-800 mt-2 text-sm md:text-base">
              Still have questions? Feel free to get in touch with us today!
            </p>

            <button className="mt-6 px-5 py-3 bg-gradient-to-br from-[#1f2740] to-[#152032] text-white rounded-lg shadow flex items-center justify-center">
              <RiArrowRightUpFill className="mr-2 text-xl" />
              Ask A Question
            </button>
          </div> */}

          {/* RIGHT — FAQ accordion */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-4">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={f.q}
                  className="bg-blue-50 rounded-xl shadow border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleIndex(i)}
                    className="w-full px-5 py-3 flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-800 text-sm md:text-base text-left">
                      {f.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600"
                    >
                      <IoIosArrowDown />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden px-5"
                      >
                        <motion.div
                          initial={{ y: -5 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="py-3 text-gray-700 text-left text-sm md:text-base"
                        >
                          {f.a}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
