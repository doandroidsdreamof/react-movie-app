import React from "react";

const ExploreLayout = (props) => {
  return (
    <section className="flex   h-screen justify-around  overflow  bg-bg-color">
      <div className="flex flex-1 flex-row justify-between overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">{props.nav}</div>
        <div className=" w-full  order-2 flex flex-col   ">
          <h1 className="bg-gradient-to-r mx-auto mt-3 from-star via-purple-400 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">Explore Movies</h1>
          <div className=" pt-12  gap-4   w-full justify-items-center  lg:justify-center items-start flex flex-col lg:flex-row ">
            {props.searchBar}</div>
          <div className=" lg:h-full h-1/2  px-7 md:px-0 mt-5 w-full md:w-fit  lg:mx-0 lg:ml-auto lg:-translate-x-4  mx-auto ">
       <div className="flex flex-col gap-y-5 md:flex-row lg:flex-col md:gap-x-3 md:justify-center ">
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

/*
<section class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span class="sm:block"> Increase Conversion. </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>









*/
