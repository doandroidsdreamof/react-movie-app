import React from "react";
import { useEffect, useState } from "react";
import DailyTrendBar from "../Rates/DailyTrendBar.jsx";
import { Link,useNavigate  } from "react-router-dom";
import fallBack from '../../assets/image/fallback-image.png'

const MovieTrendingDaily = ({ trendData }) => {


  const addElipsisTitle = trendData.title.length > 15 ? trendData.title.substring(0, 15) + "..." : trendData.title;

  return (
    <Link  to={`/movie/${trendData?.id}`} >
      <div className="  mx-auto h-fit flex flex-row w-full  brightness-75 hover:brightness-100  duration-200 ease-in-out cursor-pointer  transition-all">
        <div className="relative h-fit w-full  pl-3 flex items-end text-left">
          <img className=" w-eighty h-36  rounded-sm  object-cover object-center" src={trendData.poster_path ? `https://image.tmdb.org/t/p/w500/${trendData.poster_path || trendData.backdrop_path}` : fallBack} alt={trendData.title} />
        </div>
        <div className="flex-1   w-1/2  flex flex-col  ">
          <p className="font-roboto text-gray-50 text-base font-medium m-auto">{addElipsisTitle}</p>
          <p className="font-roboto text-sm font-white m-auto">{trendData.release_date}</p>
          <DailyTrendBar dailyTrends={trendData.vote_average} />
        </div>
      </div>
    </Link>
  );
};
export default MovieTrendingDaily;
