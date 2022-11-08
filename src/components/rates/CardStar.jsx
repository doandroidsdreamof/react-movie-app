import React from "react";
import { AiFillStar } from "react-icons/ai";



const CardStar = ({rating,explorePage}) => {
  const starColor = "hsl(226, 100%, 66%)";
  return (
    <>
      <div className={explorePage ? " rounded-lg  h-6 p-3 top-5 right-2 absolute z-50 bg-star felex justify-center " :" rounded-lg  h-6 p-3 bottom-5 right-2 absolute z-50 bg-star felex justify-center "}>
        <div className=" h-full flex flex-row text-center items-center">
            <span className="font-roboto text-white font-medium text-xs mr-1">{rating.toFixed(1)}</span>
            <AiFillStar color={"#fff"} className=" relative inline-block " size={12} />
       
        </div>
      </div>
    </>
  );
};

export default CardStar;
