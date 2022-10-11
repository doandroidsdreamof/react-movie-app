import React from "react";

const ExploreLayout = (props) => {
  return (
    <section className="flex  h-screen justify-around  overflow  bg-bg-color">
      <div className="flex flex-1 flex-row justify-between overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">{props.nav}</div>
        <div className=" w-full  order-2 flex flex-col   ">
          <h1 className="bg-gradient-to-r mx-auto mt-3 from-star via-purple-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">Explore Movies</h1>
          <div className=" pt-12  gap-4   w-full justify-items-center  lg:justify-center items-start flex flex-col lg:flex-row ">
            {props.searchBar}</div>
          <div className=" lg:h-1/2 h-1/4   px-7 md:px-0 mt-5 w-full md:w-fit   lg:ml-auto lg:-translate-x-4  mx-auto ">
       <div className="flex flex-col gap-y-5 md:flex-row  md:gap-x-3 md:justify-center ">
       {props.sortInput}
        {props.filterInput}
       </div>
   </div>
   <div className={`card-place mt-4  h-full full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-evenly gap-2  lg:gap-x-6 lg:gap-y-10 lg:px-20    px-6 md:px-10 `}>
          {props.movies}

  
    </div>
        </div>

          
      </div>

    </section>
  );
};

export default ExploreLayout;


