import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Shared/Footer/Footer';
import { AnimatePresence, motion } from "framer-motion";


const Main = () => {
    const location = useLocation();
    return (
        <div  className="min-h-screen mx-auto flex flex-col">
            <Navbar></Navbar>
           <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-grow">
            <Outlet></Outlet>
            </div>
      </motion.div>
    </AnimatePresence>
            <Footer></Footer>
        </div>
    );
};

export default Main;