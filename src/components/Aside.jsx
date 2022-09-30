import React from "react";
import SearchBar from "./SearchBar.jsx";
import MovieTrendingDay from "./MovieTrendingDay.jsx";

const Aside = () => {
  return (
    <div className={"  bg-bg-color relative  min-h-screen hidden  font-roboto right-0 border-gray-800   lg:block w-[250px] pt-4 "}>
      <div className=" flex flex-col w-onehundred  h-full">
        <div className=" text-white mt-6 ">
          <SearchBar />
        </div>
        <div className="w-onehundred justify-end just flex  relative h-full ">
          <MovieTrendingDay />
        </div>
      </div>
    </div>
  );
};
export default Aside;
