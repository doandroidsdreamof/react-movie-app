import React from 'react'
import ProfileAndBookmarkLayout from "../components/Layouts/ProfileAndBookmarkLayout.jsx";
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";

 const BookMark = () => {
  return (
    <ProfileAndBookmarkLayout
      sideNav={<SideNav />}

    />
  )
}


export default BookMark;