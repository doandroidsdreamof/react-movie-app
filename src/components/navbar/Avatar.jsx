import React, { useRef, useState, useEffect, useContext } from 'react'
import AvatarDefault from '../../assets/image/avatar-default-2.jpg'
import { AuthProvider, useAuth, AuthContext } from '../../context/AuthContext'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


const Avatar = () => {
  const user = useContext(AuthContext)
  const [url, setUrl] = useState(null)
  const auth = getAuth()


  useEffect(() => {
    // if user already have an avatar download it //
    if (user?.currentUser?.photoURL !== null) {
      setUrl(user?.currentUser?.photoURL)
    }
  }, [])



  return (
    <div className="avatar">
      <div className="w-8 h-8 border-2 border-gray-300 rounded-full">
        <img src={user?.currentUser?.photoURL === null || user?.currentUser?.photoURL === undefined ? AvatarDefault: user?.currentUser?.photoURL} />
      </div>
    </div>
  )
}

export default Avatar
