import React from "react";
import { AiFillStar } from "react-icons/ai";

const CoverStar = ({coverRating}) => {
  const starColor = "hsl(226, 100%, 66%)";
  const rating = coverRating !== '' ? (Math.round(coverRating * 100) / 100).toFixed(1) : '';
  return (
    <>
      <div className="toast toast-end rounded-sm  h-6 flex justify-center w-12   relative  z-50">
        <div className="alert alert-info h-full flex flex-row text-center items-center">
          <div>
            <span className="font-roboto text-white font-medium ">{ rating}</span>
            <AiFillStar color={"#fff"} className="  relative inline-block " size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverStar;
