import React from "react";

const ExploreLayout = (props) => {
  return (
    <section className="flex  h-screen justify-around  overflow  bg-bg-color">
      <div className="flex flex-1 flex-row justify-between overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">{props.nav}</div>
        <div className=" w-full flex order-2 ">
          <div className=" border w-full h-32 justify-center flex ">
          {props.searchBar}
          {props.sortInput}
          {props.filterInput}
          </div>
    



        </div>
      </div>
    </section>
  );
};

export default ExploreLayout;
