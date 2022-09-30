import React from "react";
import { useEffect, useState } from "react";
import CardStar from "./CardStar.jsx";
import Data from "../utils/Data.js";

const MovieTrendingDay = ({ trendData }) => {
  console.log("trends =>", trendData);

  return (
    <div className="  mx-auto dark:bg-gray-800 dark:text-gray-100 px-2 w-full mt-5 ">
      <p className="absolute text-xs z-50 line-clamp-1  text-white  right-0 font-semibold tracking-wider uppercase  font-robot dark:text-gray-100 ">{trendData.title}</p>
      <span className="absolute  z-50 leading-none uppercase text-xs font-roboto ml-auto">{trendData.release_date}</span>

      <div className="bg-gradient-to-br from-black relative cursor-pointer flex items-end w-full text-left h-20 dark:bg-gray-500">
        <img className=" w-80 brightness-50 object-cover bg-gradient-to-b rounded-sm  h-36 dark:via-transparent dark:from-gray-900 dark:to-gray-900" src={`https://image.tmdb.org/t/p/w780/${trendData.poster_path}`} alt={trendData.title} />
      </div>
    </div>
  );
};
export default MovieTrendingDay;
