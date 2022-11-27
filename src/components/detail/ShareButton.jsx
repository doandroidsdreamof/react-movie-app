import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import ShareModal from "./ShareModal";

const ShareButton = () => {
  const [isActive, setIsActive] = useState(false);



  return (
    <>

<ShareModal close={(e) => setIsActive(false)} open={isActive} />
      <button
        onClick={() => {
          setIsActive(true);
        }}
        className="btn btn-circle btn-outline border-2 p-2 scale-110  hover:bg-star ease-in duration-150 "
      >
        <FaShareAlt className="text-white" size={20} />
      </button>
    </>
  );
};

export default ShareButton;
