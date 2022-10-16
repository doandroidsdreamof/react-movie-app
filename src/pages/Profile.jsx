import React from 'react'
import SideNav from '../components/Navbar/SideNav.jsx'
import ProfileAndBookmarkLayout from '../components/Layouts/ProfileAndBookmarkLayout.jsx'

const Profile = () => {
  return <ProfileAndBookmarkLayout sideNav={<SideNav />} />
}

export default Profile
