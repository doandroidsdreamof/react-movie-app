import React from "react";
import { BsPlay, BsPauseFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

import { useState } from "react";


const PlayVideoButton = (props) => {
  const [isActive, setIsActive] = useState(true);

  function openVideo(){
    props.handleClick()
    setIsActive(!isActive);

  }

  return (
    <>
       <button
        className="btn border-none  align-middle right-4 rounded-full z-50 justify-center md:bottom-8 bottom-14 absolute  px-2  bg-star-second"
      >
        {isActive ? (
          <BsPlay
            className="text-white"
            size={30}
            onClick={openVideo}     
          
          />
        ) : (
          <CgClose
            className="text-white"
            size={30}
            onClick={openVideo}
          />
        )}
      </button>
    </>
  );
};

export default PlayVideoButton;


/*









           <button className="btn border-none  align-middle right-4 rounded-full z-50 justify-center md:bottom-8 bottom-14 absolute  px-2  bg-star-second  ">
        <BsPlay
          className="text-white"
          size={30}
         onClick={openVideo}
        />
      </button>

      */