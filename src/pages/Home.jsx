import React from "react";
import SideNav from "../components/SideNav.jsx";
import Aside from "../components/Aside.jsx";
import Row from "../components/Row.jsx";
import TopSlider from "../components/TopSlider.jsx";
import RowLayout from "../components/RowLayout.jsx";
import data from "../utils/Data";

const Home = () => {
  return (
    <main className="flex flex-col h-screen  overflow   bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden  overflow-y-auto">
        <div className="flex">
          <SideNav />
        </div>
        <div className="flex flex-1 flex-col    overflow-y-auto">
          <div className="flex flex-1   md:flex-row-reverse  w-full justify-between  paragraph">
            <div className=" w-60 hidden lg:flex min-h-screen relative ">
              <Aside />
            </div>

            <div className="lg:w-eighty w-onehundred mr-auto left-0 relative px-10  ">
              <div>
                <TopSlider sliderId="0" endpoint={data.requestWeekTrending} />
              </div>
              <RowLayout>
                <Row rowID="1" title="Popular" endpoint={data.requestUpcoming} />
                <Row rowID="2" title="Trending" endpoint={data.requestTrending} />
                <Row rowID="3" title="Top Rated" endpoint={data.requestTopRated} />
                <Row rowID="4" title="Up Comming" endpoint={data.requestPopular} />
              </RowLayout>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
