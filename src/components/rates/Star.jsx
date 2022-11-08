import React from "react";
import { AiFillStar } from "react-icons/ai";

const Star = ({rating}) => {
  const starColor = "hsl(226, 100%, 66%)";
  return (
    <>
      <div className="toast toast-end rounded-sm  h-6 flex justify-center top-5 absolute z-50">
        <div className="alert alert-info h-full flex flex-row text-center items-center">
          <div>
            <span className="font-roboto text-white font-medium ">{rating.toFixed(1)}</span>
            <AiFillStar color={"#fff"} className="  relative inline-block " size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Star;
