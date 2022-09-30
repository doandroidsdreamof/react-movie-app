import React from 'react'
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";

 const Profile = () => {
  return (
    <section className="flex flex-col h-screen  overflow  bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className="flex  order-1">
          <SideNav />
        </div>
     <div className=" w-72 order-3 hidden lg:flex border-l border-l-gray-600">
          <Aside   />
        </div>
        <div className="invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">
    
        </div>
      </div>
    </section>
  )
}

export default Profile;