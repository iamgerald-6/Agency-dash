// import React, { useState } from 'react';
// import ProfileOne from '../assets/profile1.png'
// import { FiBell, FiSearch } from 'react-icons/fi';
import { ResponsiveSidebar } from "./ResponsiveSidebar.jsx";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { ToggleButton } from "./ToggleButton.jsx";
// import {  } from 'react-router'

const Navbar = () => {
  // const [isOpen,setIsOpen] =useState(false)
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openSidebar = () => {
    setOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeSidebar = () => {
    setOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const unListen = () => {
      // Reset styles when navigating to another page
      document.body.classList.remove("overflow-hidden");
    };

    return () => {
      unListen(); // Cleanup the listener when the component unmounts
    };
  }, [navigate]);

  return (
    <>
      <div className=" h-[1vh] w-[100%] bg-gradient-to-r  from-purp-100 via-purp-200 to-purp-300"></div>

      <header className="flex flex-col w-[100%]   opacity-95 sticky top-0 z-30  bg-[rgb(255,253,253)]">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
          className="z-30   items-center flex  lg:px-10 px-3  h-[9vh]  justify-between w-[100%] "
        >
          <div className="flex">
            <motion.div
              className="mt-1.5 lg:hidden block"
              animate={open ? "open" : "closed"}
            >
              <ToggleButton setOpen={open ? closeSidebar : openSidebar} />
            </motion.div>

            <Link
              to="/"
              className="sm:text-2xl text-xl sm:ms-0 ms-1 font-family leading-8 text-dark-100"
            >
              DezignSntr
            </Link>
          </div>

          <ul className="flex xl:gap-12 lg:gap-7 md:gap-6 items-center ms-12">
            <li>
              <Link
                to="/"
                className="text-base font-sfMedium hoverNav2 lg:block hidden "
              >
                Purchase
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className=" font-sfMedium hoverNav2 lg:block hidden"
              >
                My List
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className=" font-sfMedium hoverNav2 lg:block hidden"
              >
                History
              </Link>
            </li>
            <li>
              <Link
                to="/chats"
                className="font-sfMedium hoverNav2 lg:block hidden"
              >
                Chats
              </Link>
            </li>
          </ul>

          <div className="flex items-center ps-7">
            <ul className="me-3">
              <li className=" font-sfMedium cursor-pointer hoverNav2 mt-0.5 lg:block hidden border-r px-6 border-dark-100">
                <Link to="/wallet">Pricing</Link>
                <ul className="z-20 hidden">
                  <li className="z-50">free</li>
                  <li className="z-50">Standard</li>
                  <li className="z-50">Gold</li>
                </ul>
              </li>
            </ul>
            <div className=" bg-dark-100 rounded-[57px] md:px-4 px-2 mt-0.5 py-1">
              <Link className=" text-light-200 font-sfMedium  hoverNav lg:block hidden">
                {" "}
                Login
              </Link>

              <Link className=" text-light-200  font-sfMedium lg:hidden block hoverNav ">
                <button className="text-xs">Signup</button>
              </Link>
            </div>
          </div>
        </motion.nav>
      </header>
      {open ? (
        <motion.div className="w-full h-full bg-[rgba(0,0,0,0.4)] fixed z-30 ">
          <ResponsiveSidebar />
        </motion.div>
      ) : null}
    </>
  );
};

export default Navbar;

//   const [fixed, setFixed] = useState(false)
//   const ScrollNav = ()=>{
//     if (window.scrollY >= 66){
//       setFixed(true);
//     } else {setFixed(false)
//   }
// }
//  window.addEventListener("scroll", ScrollNav)

// const []
