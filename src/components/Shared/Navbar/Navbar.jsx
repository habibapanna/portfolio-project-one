import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navItems = ["Home", "Projects", "Services", "Contact"]; 
  // You can change these names based on your section IDs.

  return (
    <header className="sticky top-0 z-50 bg-violet-200/50 backdrop-blur-sm">
      <nav className="mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold font-serif"><Link to="/">Sanwar Limon</Link></div>

         
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
           {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm text-black">
            {/* {navItems.map((n) => (
              <a 
                key={n} 
                href={`#${n.toLowerCase()}`} 
                className="hover:text-gray-900"
              >
                {n}
              </a>
            ))} */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="projects">Projects</NavLink>
          </div>
          <button className="px-6 py-2 rounded-lg bg-[#1f2d5c] text-white font-medium shadow-md">
            Get in Touch
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
