import React from 'react';
import { BiSolidRightArrowAlt } from 'react-icons/bi';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { GiStairs } from 'react-icons/gi';
import { RiArrowRightUpFill } from 'react-icons/ri';
import { Fade } from "react-awesome-reveal";

const Process = () => {
    
const steps = [
{ title: "Let's Get In Touch", desc: 'Start by reaching out through our contact page. Fill out the form or book a call to discuss your project', num: '01', steps: 'step1' },

{ title: "Grab Your Designs", desc: 'Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals', num: '02', steps: 'step2' },

{ title: "Kickstart Development", desc: 'I expertly transform your designs into a powerful, scalable solution, fully ready to launch', num: '03', steps: 'step3' },

{ title: "And Hand Over", desc: 'Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support', num: '04', steps: 'step4' },
];

    return (
        <div>
           <Fade>
             <section id="process" className="py-16 bg-violet-100 text-center">
                  <div className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm">
                            {/* small white square with icon */}
                            <span className="w-8 h-8 flex items-center justify-center rounded-md ">
                              <GiStairs className="text-[#1f2d5c] text-lg" />
                            </span>
                            {/* text */}
                            <span className="text-[#0f1724]">
                              Process
                            </span>
                          </div>
<div className="max-w-5xl mx-auto px-6">
<h3 className="text-3xl md:text-5xl font-semibold text-center my-5">From Vision to Execution</h3>
<p>A refined design process that ensures consistency, creativity for every project</p>
<div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
{steps.map((s) => (
<div key={s.title} className="bg-blue-50 p-6 rounded-2xl shadow">
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
</div>
))}
</div>
{/* BUTTONS */}
        <div className="text-center mt-14 flex justify-center gap-6">
          {/* Dark Button */}
          <button className="px-8 py-3 rounded-lg bg-[#1f2d5c] text-white font-medium shadow-md hover:-translate-y-1 hover:shadow-lg
         transition flex items-center justify-center text-sm">
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
           </Fade>
        </div>
    );
};

export default Process;