import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOutUser } from '../../utils/signOut'

const LogOutButton = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    signOutUser()
    navigate('/')
  }

  return (
    <>
      <button onClick={handleClick} className="btn btn-primary font-roboto">
        Logout
      </button>
    </>
  )
}

export default LogOutButton
