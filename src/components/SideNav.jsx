import React from "react";
import { MdOutlineExplore } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogin } from "react-icons/hi";

const SideNav = () => {
  return (
      <div className="bg-bg-color z-50 border-r relative  left-0 border-gray-600 sm:w-60 min-h-screen w-14 pt-4 transition-all">
        <div className="text-center  text-white p-6"></div>
        <ul className="mt-11 flex  gap-y-4 flex-col">
          <li className="hover:bg-gray-800 cursor-pointer  sm:justify-start px-4 h-12 flex items-center justify-center active">
            <AiFillHome size={30} />
            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Home
            </span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <MdOutlineExplore size={30} />
            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Explore
            </span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <FiSearch size={30} />
            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Search
            </span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <BsBookmarkStarFill size={30} />
            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Bookmarked
            </span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <CgProfile size={30} />
            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Profile
            </span>
          </li>
          <li className="hover:bg-gray-800 cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center">
            <HiOutlineLogin size={30} />
            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Login
            </span>
          </li>
        </ul>
      </div>
  );
};
export default SideNav;
