import React from "react";
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";
import Row from "../components/Row.jsx";
import PageLayout from "../components/Layouts/PageLayout.jsx";
import TopSlider from "../components/TopSlider.jsx";
import RowLayout from "../components/Layouts/RowLayout.jsx";
import data from "../../Data.js";

const Home = () => {
  return (
    <PageLayout
    sideNav={<SideNav />}
      aside={<Aside  HomePage={"HomePage"} trendData={data.requestDayTrending} />}
      slider={<TopSlider sliderId="0" endpoint={data.requestWeekTrending} />}
      row={
        <RowLayout>
          <Row rowID="1" title="Popular" endpoint={data.requestUpcoming} />
          <Row rowID="2" title="Trending" endpoint={data.requestTrending} />
          <Row rowID="3" title="Top Rated" endpoint={data.requestTopRated} />
          <Row rowID="4" title="Up Comming" endpoint={data.requestPopular} />
        </RowLayout>
      }
      homePage={'homePage'}
    />
  );
};

export default Home;
