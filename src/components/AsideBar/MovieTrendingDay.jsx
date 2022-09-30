import React from "react";
import { useEffect, useState } from "react";
import DailyTrendBar from "../Rates/DailyTrendBar.jsx";

const MovieTrendingDay = ({ trendData }) => {
  const addElipsisTitle = trendData.title.length > 15 ? trendData.title.substring(0, 15) + "..." : trendData.title;

  return (
    <div className="  mx-auto h-fit flex flex-row dark:bg-gray-800 dark:text-gray-100  w-full  duration-200 ease-in-out cursor-pointer hover:scale-105  ">
      <div className="relative h-fit w-full rounded-md  cursor-pointer flex items-end text-left dark:bg-gray-500">
        <img className=" w-full p-5 h-44  brightness-75 ease-in-out duration-200 hover:brightness-100 hover:scale-105 object-cover bg-gradient-to-b    dark:via-transparent dark:from-gray-900 dark:to-gray-900" src={`https://image.tmdb.org/t/p/w500/${trendData.poster_path}`} alt={trendData.title} />
      </div>
      <div className="flex-1   w-full  ">
        <p className="font-roboto text-gray-50 font-base font-medium">{addElipsisTitle}</p>
        <p className="font-roboto font-xs font-white">{trendData.release_date}</p>
        <DailyTrendBar  dailyTrends={trendData.vote_average}/>

      </div>
    </div>
  );
};
export default MovieTrendingDay;
