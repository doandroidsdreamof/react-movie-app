import React from 'react';

const ActorLayout = (props) => {
  return (
    <section className="flex flex-row   overflow bg-lm-bg dark:bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className=" flex  order-1 ">{props.sideNav}</div>
        <div className=" flex flex-col gap-y-9 md:gap-y-0 md:h-screen h-fit    order-2  justify-evenly   overflow-y-auto p-0 md:p-5  ">
          <div className="flex md:flex-row  flex-col overflow-hidden basis-9/12">
            {props.actorDetail}
          </div>
          <div className='hidden md:block'>
            <h2 className="block text-2xl text-black dark:text-gray-300 translate-y-2 font-roboto font-base px-3 md:px-0  md:overflow-y-auto  ">
              Known For
            </h2>
          </div>
          <div className="relative hidden w-full md:grid grid-flow-col gap-3 overflow-x-auto h-fit mt-5 px-3 md:px-0  ">
            {props.actorMovies}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActorLayout;
