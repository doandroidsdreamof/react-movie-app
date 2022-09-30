import React from "react";
import SearchBar from "./SearchBar.jsx";
import MovieTrendingDay from "./MovieTrendingDay.jsx";
import { useEffect, useState } from "react";

const Aside = ({ trendData }) => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    fetch(trendData)
      .then((res) => res.json())
      .then((get) => setTrend(get.results.slice(0,3)))
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
        <div className="    w-[280px] relative  ">
        <h3 className="font-roboto text-head font-bold text-xl mt-2 ml-4 mb-2">Top Three</h3>
          {trend.map((trends, id) => (
            <>
            <MovieTrendingDay key={id} trendData={trends} />

            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Aside;
