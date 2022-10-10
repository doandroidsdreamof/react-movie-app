import React from "react";
import { BsBookmarkHeart,BsBookmarkHeartFill } from "react-icons/bs";
import {useState} from 'react'

const BookmarkButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>


<button onClick={() => { setIsActive(!isActive)}} className="btn btn-circle scale-110 btn-outline border-2 p-2 hover:bg-star ease-in duration-150 z-50">
{isActive ? <BsBookmarkHeart className="text-white" size={20} onClick={() => { setIsActive(!isActive)}} />  : <BsBookmarkHeartFill className="text-blue-500 " size={20} onClick={() => { setIsActive(!isActive)}} />   }

</button>
    </>
  );
};

export default BookmarkButton;
