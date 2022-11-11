import React, { useContext } from 'react'
import { AuthContext, useAuth } from '../../context/AuthContext'
import Avatar from './AvatarPicture'

const UserTitle = () => {
  const userName = useAuth()

  return (
      <h1 className="bg-gradient-to-r mx-auto mt-3  from-star via-purple-400 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl ">
        HELLO WELCOME TO MAGIC LANTERN {userName?.currentUser?.displayName}
      </h1>

  )
}

export default UserTitle
