import React from "react";
import DarkMode from "./DarkMode.jsx";
import Hamburger from "./Hamburger.jsx";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogin } from "react-icons/hi";
import { useState, useEffect } from "react";

const SideNav = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {}, [menu]);

  const handleClick = (e) => {
    e.stopPropagation();
    const hideAll = document.querySelectorAll(".all-hide");
    setMenu(!menu);
    if (menu === false) {
      for (let x in hideAll) {
        hideAll[x].style.display = "none";
      }
    }
    if (menu === true) {
      for (let x in hideAll) {
        hideAll[x].style.display = "block";
      }
    }
  };

  return (
    <div className={menu ? " bg-bg-color z-50 border-r relative font-roboto left-0 border-gray-600  min-h-screen w-14 pt-4  " : " bg-bg-color z-50 border-r relative font-roboto left-0 sm:w-60 min-h-screen  w-14 pt-4 "}>
      <div className="text-center  text-white p-6"></div>
      <ul className="mt-11 flex  gap-y-4 flex-col ">
        <li className=" hover:bg-gray-800 cursor-pointer sm:justify-start px-4  h-12  flex items-center justify-center active text-center ">
          <label className=" swap swap-rotate">
            <input onClick={(e) => handleClick(e)} type="checkbox" />
            <svg className="swap-off fill-current   " xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg className="swap-on fill-current  -translate-x-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
            <span className="all-hide ml-10 mt-1  pr-11 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Close Menu</span>
          </label>
        </li>
        <li className="hover:bg-gray-800 cursor-pointer  sm:justify-start px-4 h-12 flex items-center justify-center ">
          <AiFillHome size={30} />
          <span className="all-hide ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Home</span>
        </li>
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex  items-center justify-center">
          <MdOutlineExplore size={30} />
          <span className="all-hide ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Explore</span>
        </li>
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
          <FiSearch size={30} />
          <span className="all-hide ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Search</span>
        </li>
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
          <BsBookmarkStarFill size={30} />
          <span className="all-hide ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Bookmarked</span>
        </li>
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
          <CgProfile size={30} />
          <span className="all-hide ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Profile</span>
        </li>
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
          <HiOutlineLogin size={30} />
          <span className="all-hide ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Login</span>
        </li>
        <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4  h-12  flex items-center justify-center">
          <DarkMode />
          <span className="all-hide ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Dark Mode</span>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;
