import React from 'react'
import AvatarDefault from '../../assets/image/avatar-default-2.jpg'

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="w-8 h-8 border-2 border-gray-300 rounded-full">
        <img src={AvatarDefault} />
      </div>
    </div>
  )
}

export default Avatar
