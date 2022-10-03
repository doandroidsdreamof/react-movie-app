import React from "react";
import { BsPlay, BsPauseFill } from "react-icons/bs";
import { useState } from "react";
const PlayVideoButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button className="btn  align-middle right-4 rounded-full z-50 justify-center md:bottom-8 bottom-14 absolute   bg-star-second px-2 md:px-12">
        <BsPlay
          className="text-white"
          size={30}
        />
      </button>
    </>
  );
};

export default PlayVideoButton;
/*
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="btn btn-active bg-star px-12"
      >
        {isActive ? (
          <BsPlay
            className="text-white"
            size={30}
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
        ) : (
          <BsPauseFill
            className="text-white"
            size={30}
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
        )}
      </button>
      */
