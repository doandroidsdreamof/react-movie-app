import React from "react";

const ExploreLayout = (props) => {
  return (
    <section className="flex  h-screen justify-around  overflow  bg-bg-color">
      <div className="flex flex-1 flex-row justify-between overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">{props.nav}</div>
        <div className=" w-full flex order-2  ">
          <div className=" pt-5 gap-4  w-full h-fit justify-center items-center flex flex-col lg:flex-row ">
          {props.searchBar}
          <div className="flex flex-col gap-y-5">
          {props.sortInput}
          {props.filterInput}
          </div>
          </div>
    
    



        </div>
      </div>
    </section>
  );
};

export default ExploreLayout;
