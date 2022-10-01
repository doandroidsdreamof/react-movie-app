import React from "react";
import { useEffect, useState } from "react";
import DailyTrendBar from "../Rates/DailyTrendBar.jsx";

const MovieTrendingDay = ({ trendData }) => {
  const addElipsisTitle = trendData.title.length > 15 ? trendData.title.substring(0, 15) + "..." : trendData.title;

  return (
    <div className="  mx-auto h-fit flex flex-row w-full  brightness-75 hover:brightness-100  duration-200 ease-in-out cursor-pointer  transition-all  ">
      <div className="relative h-fit w-full  pl-4 flex items-end text-left">
        <img className=" w-full h-36  rounded-sm  object-cover object-center" src={`https://image.tmdb.org/t/p/w500/${trendData.poster_path}`} alt={trendData.title} />
      </div>
      <div className="flex-1   w-1/2  flex flex-col   ">
        <p className="font-roboto text-gray-50 text-base font-medium m-auto">{addElipsisTitle}</p>
        <p className="font-roboto text-sm font-white m-auto">{trendData.release_date}</p>
        <DailyTrendBar  dailyTrends={trendData.vote_average}/>

      </div>
    </div>
  );
};
export default MovieTrendingDay;