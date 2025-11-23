import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Shared/Footer/Footer';
import { AnimatePresence, motion } from "framer-motion";
import FloatingNav from '../FloatingNav/FloatingNav';


const Main = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen mx-auto flex flex-col">
      <Navbar></Navbar>
     <motion.div
  key={location.pathname}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -30 }}
  transition={{ duration: 3.0, ease: "easeInOut" }}
>
  <div className="flex-grow">
    <Outlet />
  </div>
</motion.div>

      <Footer></Footer>
      <FloatingNav />
    </div>
  );
};

export default Main;