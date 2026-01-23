import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../../assets/port.png'

const Navbar = () => {

  const navItems = ["Home", "Projects", "Services", "Contact"]; 
  // You can change these names based on your section IDs.

  return (
    <header className="sticky top-0 z-50 bg-violet-200/50 backdrop-blur-sm"
    style={{
        backdropFilter: "blur(10px)", // glassy effect
        WebkitBackdropFilter: "blur(10px)", // Safari support
      }}>
      <nav className="mx-auto px-2 py-3 flex items-center justify-between max-w-6xl">
        
        {/* Left */}
        <div className="flex items-center gap-4 bg-transparent bg-violet-50">
          <div className=""><Link to="/"><img src={Logo} alt="" className="bg-transparent h-[50px] md:h-[80px]" /></Link></div>

         
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
           {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-black md:text-[20px]">
            
            {/* <NavLink className=" hover:underline" to="/">Home</NavLink> */}
            <NavLink className=" hover:underline" to="projects">Projects</NavLink>
            <NavLink className=" hover:underline" to="services">Services</NavLink>
            <NavLink className=" hover:underline" to="/">Contact</NavLink>
          </div>
          <button className="md:px-12 md:py-6 px-5 py-2 rounded-lg bg-gradient-to-r from-[#1c2026] to-[#1b2853] text-white shadow-md text-sm md:text-[20px]">
  <NavLink className=" hover:underline" to="/">Get in Touch</NavLink>
</button>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;
