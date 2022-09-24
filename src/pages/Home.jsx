import React from "react";
import SideNav from "../components/SideNav.jsx";
import Row from "../components/Row.jsx";
import Slider from "../components/Slider.jsx";
import data from "../utils/Data";

const Home = () => {
  return (

<main className="flex flex-col h-screen    bg-bg-color">
  <div className="flex flex-1 overflow-x-hidden overflow-y-auto">
    <div className="flex md:w-52  ">
    <SideNav />
    </div>
    <div className="flex flex-1 flex-col  overflow-y-auto">
      <div className="flex flex-1   overflow-x-hidden paragraph px-4">
      <div className=" min-w-fit ">
        <Row rowID="1" title="Up Comming" endpoint={data.requestUpcoming} />
        <Row rowID="2" title="Popular" endpoint={data.requestPopular} />
        <Row rowID="3" title="Trending" endpoint={data.requestTrending} />
        <Row rowID="4" title="Top Rated" endpoint={data.requestTopRated} />
      </div>
      </div>
    </div>
  </div>

</main>


  
  );
};

export default Home;
