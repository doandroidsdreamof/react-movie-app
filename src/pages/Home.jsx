import React from "react";
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";
import Row from "../components/Row.jsx";
import TopSlider from "../components/TopSlider.jsx";
import RowLayout from "../components/Layouts/RowLayout.jsx";
import data from "../../Data.js";

const Home = () => {
  return (
    <main className="flex flex-col h-screen  overflow  bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className="flex  order-1">
          <SideNav />
        </div>
 {/*order-3 */}       <div className=" w-72 order-3 hidden lg:flex border-l border-l-gray-600">
          <Aside trendData={data.requestDayTrending}  />
        </div>
        <div className="invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">
          <div className="lg:w-eigh w-onehundred mr-auto  left-0 relative px-0 md:px-10  ">
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
    </main>
  );
};

export default Home;
