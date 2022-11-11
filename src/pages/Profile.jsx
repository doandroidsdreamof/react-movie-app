import React, { useRef } from 'react'

import SideNav from '../components/navbar/SideNav.jsx'
import Avatar from '../components/profile/Avatar.jsx'
import UploadButton from '../components/profile/UploadButton.jsx'
import LogOutButton from '../components/profile/LogOutButton.jsx'
import UserTitle from '../components/profile/UserTitle.jsx'
import DeleteAccountButton from '../components/profile/DeleteAccountButton'
import DeleteAccountModal from '../components/profile/DeleteAccountModal.jsx'

function Profile() {
  const deleteModal = useRef(null)

  const deleteHandler = () => {
    deleteModal.current.style.display = 'block'
  }

  return (
    <section className="flex flex-col h-screen  overflow  bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">
          <SideNav />
        </div>
        <div className="detail-second-section gap-y-6  invisible-overflow flex flex-col ml-3 md:ml-0  flex-1    order-2   overflow-y-auto">
          <UserTitle />
          <DeleteAccountModal modalRef={deleteModal} />
          <div className="ml-6 flex-wrap space-y-4 flex flex-row justify-center items-center gap-x-6">
            <Avatar />
            <UploadButton />
          </div>
          <div className=" flex  pr-3 flex-row justify-end relative mt-auto bottom-3  gap-x-12 ">
            <LogOutButton />
            <DeleteAccountButton clickHandler={deleteHandler} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
