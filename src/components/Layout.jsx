import React from "react";
import Card from './Card.jsx';
import Search from './Search.jsx';
import SideNav from './SideNav.jsx';
import Carousel from './Carousel.jsx';
import ArtBoard from './ArtBoard.jsx';


const Layout = () => {
  return (
    <>
    <div className=" h-screen bg-bg-color w-screen flex">
      <SideNav />
      <ArtBoard />
  

  </div>
  </>
  );
};

export default Layout;
