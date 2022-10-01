import React from "react";
import { FaShareAlt } from "react-icons/fa";
import {useState} from 'react'

const ShareButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button className="flex items-center p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-black hover:text-white border-2 border-star focus:outline-none active:bg-">
        <FaShareAlt size={20} />
      </button>

    </>
  );
};

export default ShareButton;
