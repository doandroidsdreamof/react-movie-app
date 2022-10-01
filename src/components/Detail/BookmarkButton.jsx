import React from "react";
import { BsBookmarkHeart,BsBookmarkHeartFill } from "react-icons/bs";
import {useState} from 'react'

const BookmarkButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>

      <button onClick={() => { setIsActive(!isActive)}} className="flex items-center p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-black hover:text-white border-2 border-star focus:outline-none">
           {isActive ? <BsBookmarkHeart size={20} onClick={() => { setIsActive(!isActive)}} />  : <BsBookmarkHeartFill size={20} onClick={() => { setIsActive(!isActive)}} />   }
      </button>
    </>
  );
};

export default BookmarkButton;
