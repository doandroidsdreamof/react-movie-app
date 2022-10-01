import React from "react";
import { BsPlay,BsPauseFill } from "react-icons/bs";
import { useState } from "react";
const PlayVideoButton = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
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
    </>
  );
};

export default PlayVideoButton;
