import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navItems = ["Home", "Projects", "Services", "Contact"]; 
  // You can change these names based on your section IDs.

  return (
    <header className="sticky top-0 z-50 bg-violet-200/50 backdrop-blur-sm"
    style={{
        backdropFilter: "blur(10px)", // glassy effect
        WebkitBackdropFilter: "blur(10px)", // Safari support
      }}>
      <nav className="mx-auto px-6 py-3 flex items-center justify-between max-w-6xl">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold italic"><Link to="/">Sanwar Limon</Link></div>

         
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
           {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-black md:text-[20px]">
            {/* {navItems.map((n) => (
              <a 
                key={n} 
                href={`#${n.toLowerCase()}`} 
                className="hover:text-gray-900"
              >
                {n}
              </a>
            ))} */}
            <NavLink className=" hover:underline" to="/">Home</NavLink>
            <NavLink className=" hover:underline" to="projects">Projects</NavLink>
            <NavLink className=" hover:underline" to="services">Services</NavLink>
          </div>
          {/* <button className="px-6 py-3 rounded-lg bg-[#1f2d5c] text-white shadow-md">
            Get in Touch
          </button> */}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
