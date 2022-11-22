import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { AiFillHome } from 'react-icons/ai'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { HiOutlineLogin } from 'react-icons/hi'
import { MdOutlineExplore } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import Tooltip from '@mui/material/Tooltip'

import ErrorModal from '../common/ErrorModal.jsx'
import LoginErrorModal from '../common/LoginErrorModal.jsx'
import AvatarPicture from '../profile/AvatarPicture.jsx'
import ProfileSettings from '../profile/ProfileSettings.jsx'
import SignOutModal from '../common/SignOutModal.jsx'

import DarkMode from './DarkMode.jsx'

import AlertDialog from '../profile/AlertDialog.jsx'
import signOutUser from '../../utils/signOut.js'

function SideNav() {
  const [error, setError] = useState(false)
  const [dropdown, setDropDown] = useState(false)
  const [login, setLogin] = useState(false)
  const [out, setOut] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const auth = getAuth()

  useEffect(() => {
    setError(false)
    setLogin(false)
  }, [error, login])

  const handleProfile = (e) => {
    if (auth.currentUser === null) {
      setError(true)
    } else {
      setDropDown(!dropdown)
      setAnchorEl(e.currentTarget)
    }
  }
  const handleBookmark = (e) => {
    if (auth.currentUser === null) {
      setError(true)
    } else {
      navigate('/bookmark')
    }
  }
  const handleLogin = (e) => {
    if (auth.currentUser !== null) {
      setLogin(true)
    } else {
      navigate('/login')
    }
  }

  const handleLogout = () => {
    signOutUser()
    navigate('/')
    setOut(true)
  }

  return (
    <div
      className={
        ' bg-nav z-50 border-r border-r-gray-600 relative font-roboto left-0   min-h-screen w-14 pt-4  '
      }
    >
      <AlertDialog open={open} openMenu={(e) => setOpen(true)} closeMenu={(e) => setOpen(false)} />
      <SignOutModal out={out} />
      <ErrorModal error={error} />
      <LoginErrorModal login={login} />
      <div className="text-center  text-white p-6" />
      <ul className="mt-11 flex  gap-y-4 flex-col ">
        <Link to="/">
          <Tooltip title="Home" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center ">
              <AiFillHome color="white" size={30} />
            </li>
          </Tooltip>
        </Link>
        <Link to="/explore">
          <Tooltip title="Explore" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex  items-center justify-center">
              <MdOutlineExplore color="white" size={30} />
            </li>
          </Tooltip>
        </Link>
        <button onClick={(e) => handleBookmark(e)}>
          <Tooltip title="Bookmark" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center">
              <BsBookmarkStarFill color="white" size={30} />
            </li>
          </Tooltip>
        </button>
        <button className="profile-icon" onClick={(e) => handleProfile(e)}>
          <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center">
            <CgProfile color="white" size={30} />
            <ProfileSettings
              openDel={(e) => setOpen(true)}
              anchorEl={anchorEl}
              clickHandler={dropdown}
              handleLogout={handleLogout}
            />
          </li>
        </button>
        <button onClick={(e) => handleLogin(e)}>
          <Tooltip title="Login" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center">
              <HiOutlineLogin color="white" size={30} />
            </li>
          </Tooltip>
        </button>
        <Tooltip title="Dark mode" placement="right">
          <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4  h-12  flex items-center justify-center">
            <DarkMode />
          </li>
        </Tooltip>
        <li className="md:justify-start px-4 h-12 flex  items-center justify-center">
          <AvatarPicture />
        </li>
      </ul>
    </div>
  )
}
export default SideNav
