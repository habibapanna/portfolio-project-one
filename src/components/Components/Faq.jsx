import React, { useState, useRef, useEffect } from 'react';
import { BsQuestionCircle, BsQuestionCircleFill } from 'react-icons/bs';
import { GiStairs } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowRightUpFill } from 'react-icons/ri';
import { Fade } from "react-awesome-reveal";

const Faq = () => {
  // --- 5 FAQs (replace text with the exact ones from your screenshot if needed) ---
  const faqs = [
    { q: 'What services do you provide?', a: 'I provide UI/UX design, product design, prototypes and front-end implementations using React and Tailwind.' },
    { q: 'How can I hire you?', a: 'Use the contact form or email to discuss scope, timeline and budget.' },
    { q: 'How long does a typical project take?', a: 'Project duration depends on scope — small tasks can be 1–2 weeks, full product designs 4+ weeks.' },
    { q: 'What is your pricing model?', a: 'I offer fixed-price proposals for well-defined scopes and hourly for open-ended work.' },
    { q: 'Do you offer revisions and support?', a: 'Yes — every project includes a revision period and a short handover/support window after delivery.' },
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
          <h4 className="text-2xl md:text-5xl font-semibold text-center my-5">Questions? Answers!</h4>
          <p className="mb-10">Find quick answers to the most common questions about the services offered</p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 ">
            {/* left card */}
            <div className="bg-blue-50 rounded-2xl shadow p-10 flex flex-col justify-center text-center">
              <div className="rounded-xl w-12 h-12 flex items-center justify-center shadow-xl shadow-gray-400 bg-white mx-auto">
                <BsQuestionCircle className="text-2xl text-gray-700" />
              </div>

              <h3 className="text-3xl font-semibold mt-5 mb-3">Get In Touch Now!</h3>
              <p className="text-gray-800 mt-2">
                Still have questions? Feel free to get in touch with us today!
              </p>

              <button className="mt-6 px-5 py-3 bg-gradient-to-br from-[#1f2740] to-[#152032] text-white rounded-lg shadow flex items-center justify-center">
                <RiArrowRightUpFill className="mr-2 text-xl" />
                Ask A Question
              </button>
            </div>

            {/* ---------- UPDATED ACCORDION (drop-in) ---------- */}
            <div className="mt-6 md:mt-0 space-y-4 text-left col-span-2">
              {faqs.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={f.q}
                    className="bg-blue-50 rounded-xl shadow border border-gray-200 overflow-hidden"
                  >
                    {/* Question button */}
                    <button
                      onClick={() => toggleIndex(i)}
                      aria-expanded={isOpen}
                      className="w-full px-5 py-3 flex items-center justify-between gap-4 text-left"
                    >
                      <span className="font-medium text-gray-800">{f.q}</span>

                      {/* right-side arrow */}
                      <span
                        className={`transform transition-transform duration-300 text-gray-600 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                        aria-hidden="true"
                      >
                       <IoIosArrowDown />
                      </span>
                    </button>

                    {/* Answer content with smooth height transition */}
                    <div
                      ref={(el) => (contentRefs.current[i] = el)}
                      style={{
                        maxHeight: isOpen && contentRefs.current[i] ? `${contentRefs.current[i].scrollHeight}px` : '0px',
                        transition: 'max-height 350ms ease',
                      }}
                      className="px-5 overflow-hidden"
                    >
                      <div className="py-3 text-gray-700">
                        {f.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* ---------- end accordion ---------- */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
