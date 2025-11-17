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
          <div className="text-xl font-semibold"><Link to="/">Sanwar Limon</Link></div>

         
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
          <button className="px-3 py-1 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-md text-sm">
            Get in Touch
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
