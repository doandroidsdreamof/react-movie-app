import React from 'react'

import BookmarkLayout from "../components/layouts/BookmarkLayout.jsx";
import SideNav from "../components/navbar/SideNav.jsx";

 function BookMark() {
  return (
    <BookmarkLayout
        sideNav={<SideNav />}

    />
  )
}


export default BookMark;