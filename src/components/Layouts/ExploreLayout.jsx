import React from "react";

const ExploreLayout = (props) => {
  return (
    <div className="flex flex-col h-screen  bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden ">
        <div className="Side-nav  flex  order-1">{props.nav}</div>
        <div className="detail-second-section  flex  flex-1 flex-col  order-2   overflow-y-auto">
        <div className=" w-full  order-2 flex flex-col   h-full ">
          <h1 className="bg-gradient-to-r mx-auto mt-3 from-star via-purple-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">Explore Movies</h1>
          <div className=" pt-12  gap-4  justify-center  z-0 w-full   ">
            {props.searchBar}</div>
          <div className=" lg:h-1/2 h-1/4   px-7 md:px-0 mt-5 w-full md:w-fit  justify-center  lg:ml-auto lg:-translate-x-4  mx-auto  ">
            <div className="flex flex-col gap-y-5 md:flex-row justify-center md:gap-x-3 md:justify-center ">
              {props.sortInput}
              {props.filterInput}
            </div>
            <div className={`card-place justify-center mt-12  h-full w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2  lg:gap-x-6 lg:gap-y-10 lg:px-20    px-6 md:px-10 `}>
            {props.movies}</div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLayout;


