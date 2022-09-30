import React from "react";
import SearchBar from "./SearchBar.jsx";
import MovieTrendingDay from "./MovieTrendingDay.jsx";
import { useEffect, useState } from "react";

const Aside = ({ trendData }) => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    fetch(trendData)
      .then((res) => res.json())
      .then((get) => setTrend(get.results.slice(0,6)))
      .catch((err) => {
        console.log(err);
      });
  }, [trendData]);

  return (
    <div className={"  bg-bg-color relative  min-h-screen hidden   font-roboto right-0 border-gray-800   lg:block w-[250px] pt-4 "}>
      <div className=" flex flex-col w-onehundred  h-full">
        <div className=" text-white mt-6 flex relative justify-center w-onehundred self-center">
          <SearchBar />
        </div>
        <div className="    w-[280px] relative h-full grid grid-cols-2  py-10 mt-9 gap-y-11 ">
          {trend.map((trends, id) => (
            <MovieTrendingDay key={id} trendData={trends} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Aside;
