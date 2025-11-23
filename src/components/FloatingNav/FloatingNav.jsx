import React from "react";

const FloatingNav = () => {
  return (
    <div
      className="
      fixed bottom-6 left-1/2 -translate-x-1/2 
      z-40 
      bg-[#1f2738]/90 
      backdrop-blur-xl 
      shadow-xl 
      rounded-full 
      px-8 py-3 
      flex items-center gap-8 
      text-white
    "
    >
      <a href="#home" className="hover:opacity-70">Home</a>
      <a href="#projects" className="hover:opacity-70">Projects</a>
      <a href="#services" className="hover:opacity-70">Services</a>
      <div className="bg-gray-600 text-white px-4 py-1 rounded-full shadow">
        Get Template
      </div>
    </div>
  );
};

export default FloatingNav;
