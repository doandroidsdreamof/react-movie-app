import React from "react";
import SideNav from "../components/SideNav.jsx";
import Row from "../components/Row.jsx";
import RowLayout from "../components/RowLayout.jsx";
import data from "../utils/Data";

const Home = () => {
  return (

<main className="flex flex-col h-screen  overflow   bg-bg-color">
  <div className="flex flex-1 overflow-x-hidden  overflow-y-auto">
    <div className="flex   ">
    <SideNav />
    </div>
    <div className="flex flex-1 flex-col  overflow-y-auto">
      <div className="flex flex-1   overflow-x-hidden paragraph">
      <div className=" w-onehundred left-0 relative">
      <RowLayout>
        <Row rowID="1" title="Up Comming" endpoint={data.requestUpcoming} />
        <Row rowID="2" title="Popular" endpoint={data.requestPopular} />
        <Row rowID="3" title="Trending" endpoint={data.requestTrending} />
        <Row rowID="4" title="Top Rated" endpoint={data.requestTopRated} />
        </RowLayout>
      </div>
      </div>
    </div>
  </div>

</main>


  
  );
};

export default Home;
