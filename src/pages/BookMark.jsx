import React from 'react'

import ProfileAndBookmarkLayout from "../components/Layouts/ProfileAndBookmarkLayout.jsx";
import SideNav from "../components/Navbar/SideNav.jsx";

 function BookMark() {
  return (
    <ProfileAndBookmarkLayout
        sideNav={<SideNav />}

    />
  )
}


export default BookMark;