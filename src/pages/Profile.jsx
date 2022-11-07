import React from 'react'
import SideNav from '../components/Navbar/SideNav.jsx'
import UploadButton from '../components/Profile/UploadButton.jsx'
import Avatar from '../components/Profile/Avatar.jsx'

const Profile = () => {
  return (
    <section className="flex flex-col h-screen  overflow  bg-bg-color">
    <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
      <div className="Side-nav  flex  order-1"><SideNav /></div>
      <div className="detail-second-section invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">
      <h1 className='text-2xl font-robot text-gray-100'>Account settings</h1>
        <div className={`w-onehundred mt-20 gap-x-5 items-center justify-center mr-auto flex flex-row  left-0 relative px-3 md:px-8 `} >
       <UploadButton />
       <Avatar />
       
        </div>
      </div>
    </div>
  </section>
  )





}

export default Profile
