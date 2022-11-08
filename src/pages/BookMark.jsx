import React from 'react'

import ProfileAndBookmarkLayout from "../components/layouts/ProfileAndBookmarkLayout.jsx";
import SideNav from "../components/navbar/SideNav.jsx";

 function BookMark() {
  return (
    <ProfileAndBookmarkLayout
        sideNav={<SideNav />}

    />
  )
}


export default BookMark;