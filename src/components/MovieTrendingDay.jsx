import React from "react";
import { useEffect, useState } from "react";
import CardStar from "./CardStar.jsx";

const MovieTrendingDay = ({ trendData }) => {
  console.log("trends =>", trendData);

  return (
    <div className="  mx-auto dark:bg-gray-800 dark:text-gray-100 px-2 w-full mt-5 ">

      <div className="bg-gradient-to-br from-black relative cursor-pointer flex items-end w-full text-left h-20 dark:bg-gray-500">
        <img className=" w-80 brightness-50 object-cover bg-gradient-to-b rounded-sm  h-36 dark:via-transparent dark:from-gray-900 dark:to-gray-900" src={`https://image.tmdb.org/t/p/w780/${trendData.poster_path}`} alt={trendData.title} />
      </div>
    </div>
  );
};
export default MovieTrendingDay;
