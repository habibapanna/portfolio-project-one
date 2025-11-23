import React from "react";

const FloatingNav = () => {
  return (
    <div
      className="
     fixed bottom-6 left-1/2 -translate-x-1/2 
    z-40 
    bg-gray-800/80             
    backdrop-blur-2xl        
    border border-white/20    
    rounded-full 
    px-8 py-2 
    flex items-center gap-8 
    text-gray-300 shadow-xl shadow-gray-400
    "
    >
      <a href="#home" className="hover:opacity-70">Home</a>
      <a href="#projects" className="hover:opacity-70">Projects</a>
      <a href="#services" className="hover:opacity-70">Services</a>
      <div className="bg-gray-500 text-white px-4 py-1 rounded-full shadow">
        Get Template
      </div>
    </div>
  );
};

export default FloatingNav;
