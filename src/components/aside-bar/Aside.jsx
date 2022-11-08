import React from "react";
import SearchBar from "./SearchBar.jsx";
import MovieTrendingDaily from "./MovieTrendingDaily.jsx";
import SimilarMovies from "./SimilarMovies.jsx";

import { useEffect, useState } from "react";

const Aside = ({ trendData,DetailPage,HomePage }) => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    fetch(trendData)
      .then((res) => res.json())
      .then((get) => setTrend(get.results.slice(0, 3)))
      .catch((err) => {
        console.error(err);
      });
  }, [trendData]);



  return (
    <div className={"  bg-nav relative  min-h-screen hidden font-roboto right-0 border-gray-800   lg:block w-[350px]  "}>
      <div className=" flex flex-col w-onehundred  h-full gap-y-3">
        <div className=" text-white mt-6 flex relative justify-center w-onehundred self-center">
          <SearchBar />
        </div>
        <div className="w-[280px] relative ">
          <h3 className="font-roboto text-head text-center font-medium text-xl mt-2 ml-3 mb-5">{HomePage ? 'Daily Trending Movies' : 'Similar Movies'}</h3>
          {trend.map((trends, id) => (
            <>
              <MovieTrendingDaily key={id} trendData={trends} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Aside;

/*

npm install


npm run dev


npm run build


*/
