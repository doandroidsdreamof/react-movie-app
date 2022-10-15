import React from "react";


const ActorLayout = (props) => {
  return (
    <section className="flex flex-col h-screen  overflow  bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className=" flex  order-1">{props.sideNav}</div>
        <div className="  flex   flex-col   order-2 justify-between  overflow-y-auto p-0 md:p-5">
          {props.actorDetail}
          <div className=" h-thirth"></div>


        </div>
      </div>
    </section>
  );
};

export default ActorLayout;
