import React from "react";

import data from "../../Data.js";
import Aside from "../components/aside-bar/Aside.jsx";
import Row from "../components/home/Row.jsx";
import TopSlider from "../components/home/TopSlider";
import PageLayout from "../components/layouts/PageLayout.jsx";
import RowLayout from "../components/layouts/RowLayout.jsx";
import SideNav from "../components/navbar/SideNav.jsx";


function Home() {
  return (
    <PageLayout
    sideNav={<SideNav />}
      aside={<Aside  HomePage="HomePage" trendData={data.requestDayTrending} />}
      slider={<TopSlider sliderId="0" endpoint={data.requestWeekTrending} />}
      row={
        <RowLayout>
          <Row rowID="1" title="Popular" endpoint={data.requestUpcoming} />
          <Row rowID="2" title="Trending" endpoint={data.requestTrending} />
          <Row rowID="3" title="Top Rated" endpoint={data.requestTopRated} />
          <Row rowID="4" title="Up Comming" endpoint={data.requestPopular} />
        </RowLayout>
      }
      homePage="homePage"
    />
  );
}

export default Home;
