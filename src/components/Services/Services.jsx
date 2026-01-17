import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { RiBox2Fill } from 'react-icons/ri';

const Services = () => {
    return (
        <div className='mx-auto bg-violet-200 py-16 sm:py-20 '>
                   {/* TITLE */}
                   <Fade
                     triggerOnce={false}
                     duration={1500}
                     cascade
                     damping={0.2}
                     fraction={0.15}
                   >
                     <div className="text-center">
                       <div className="mx-auto inline-flex items-center rounded-full px-4 py-2 bg-[#eef6f9] border border-gray-300 shadow-sm">
                         <span className="w-8 h-8 flex items-center justify-center rounded-md">
                           <RiBox2Fill className="text-[#1f2d5c] text-lg" />
                         </span>
           
                         <span className="text-[#0f1724] font-medium">Services</span>
                       </div>
           
                       <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-semibold text-[#0f1724] my-5">
                         Crafting Digital Excellence
                       </h2>
           
                       <p className="text-gray-800 max-w-3xl mx-auto text-sm sm:text-base md:text-[20px]">
                         Building smooth and engaging digital interactions that elevate
                         user satisfaction
                       </p>
                     </div>
                   </Fade>
                   <div>
                    
                   </div>
        </div>
    );
};

export default Services;