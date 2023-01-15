import React, { useEffect, useState } from 'react';

//* Local imports //
import MovieTrendingDaily from './MovieTrendingDaily.jsx';
import SearchBar from './SearchBar.jsx';

function Aside({ trendData, DetailPage, HomePage }) {
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
    <aside>
      <div
        className=" bg-nav relative  min-h-screen hidden font-roboto right-0 border-gray-800   lg:block w-[350px]  "
      >
        <div className=" flex flex-col w-onehundred  h-full gap-y-6">
          <div className=" text-white mt-8 flex relative justify-center w-onehundred self-center">
            <SearchBar />
          </div>
          <div className="w-[280px] relative  ">
            <h3 className="font-roboto text-head text-center font-medium text-xl mt-2 ml-3 mb-5">
              {HomePage ? 'Daily Trending Movies' : 'Similar Movies'}
            </h3>
            {trend.map((trends, id) => (
              <MovieTrendingDaily key={id} trendData={trends} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
export default Aside;
