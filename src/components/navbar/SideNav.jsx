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

import DarkMode from './DarkMode.jsx'
import Hamburger from './Hamburger'

function SideNav() {
  const [menu, setMenu] = useState(true)
  const [toggle, setToggle] = useState(false)
  const [error, setError] = useState(false)
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  const auth = getAuth()

  useEffect(() => {
    setError(false)
    setLogin(false)
  }, [menu, error, login])

  const handleClick = (e) => {
    const hideAll = document.querySelectorAll('.all-hide')
    setToggle(!toggle)
    setMenu(!menu)
    for (const x in hideAll) {
      if (menu === false) {
        hideAll[x].style.display = 'none'
      }
      if (menu === true) {
        hideAll[x].style.display = 'block'
      }
    }
  }

  const handleProfile = (e) => {
    if (auth.currentUser === null) {
      setError(true)
    } else {
      navigate('/profile')
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

  return (
    <div
      className={
        menu
          ? ' bg-nav z-50 border-r border-r-gray-600 relative font-roboto left-0   min-h-screen w-14 pt-4  '
          : ' bg-bg-color z-50  relative border-r border-r-gray-600 font-roboto left-0 md:w-[210px] min-h-screen  w-14 pt-4 '
      }
    >
      <ErrorModal error={error} />
      <LoginErrorModal login={login} />
      <div className="text-center  text-white p-6" />
      <ul className="mt-11 flex  gap-y-4 flex-col ">
        <Tooltip title="Menu" placement="right">
          <li
            onClick={(e) => handleClick(e)}
            className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 hidden md:flex items-center justify-center translate-y-2"
          >
            <Hamburger menuToggle={toggle} />
            <span className="all-hide ml-3 hidden md:hidden  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Close Menu
            </span>
          </li>
        </Tooltip>
        <Link to="/">
          <Tooltip title="Home" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center ">
              <AiFillHome color="white" size={30} />
              <span className="all-hide ml-3 hidden md:hidden  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Home
              </span>
            </li>
          </Tooltip>
        </Link>
        <Link to="/explore">
          <Tooltip title="Explore" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex  items-center justify-center">
              <MdOutlineExplore color="white" size={30} />
              <span className="all-hide ml-3 hidden md:hidden  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Explore
              </span>
            </li>
          </Tooltip>
        </Link>
        <button onClick={(e) => handleBookmark(e)}>
          <Tooltip title="Bookmark" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center">
              <BsBookmarkStarFill color="white" size={30} />
              <span className="all-hide ml-3 hidden md:hidden text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Bookmark
              </span>
            </li>
          </Tooltip>
        </button>
        <button onClick={(e) => handleProfile(e)}>
          <Tooltip title="Profile" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center">
              <CgProfile color="white" size={30} />
              <span className="all-hide ml-3 hidden md:hidden  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Profile
              </span>
            </li>
          </Tooltip>
        </button>
        <button onClick={(e) => handleLogin(e)}>
          <Tooltip title="Login" placement="right">
            <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4 h-12 flex items-center justify-center">
              <HiOutlineLogin color="white" size={30} />
              <span className="all-hide ml-3 hidden md:hidden  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
                Login
              </span>
            </li>
          </Tooltip>
        </button>
        <Tooltip title="Dark mode" placement="right">
          <li className="active:bg-star hover:bg-gray-800 cursor-pointer md:justify-start px-4  h-12  flex items-center justify-center">
            <DarkMode />
            <span className="all-hide ml-2 mt-1 hidden md:hidden translate-x-1  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
              Dark Mode
            </span>
          </li>
        </Tooltip>
        <li className="md:justify-start px-4 h-12 flex  items-center justify-center">
          <AvatarPicture />
          <span className="all-hide ml-3 hidden md:hidden  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">
            Avatar
          </span>
        </li>
      </ul>
    </div>
  )
}
export default SideNav
