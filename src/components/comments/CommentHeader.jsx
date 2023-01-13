import React, { useRef, useState, useEffect, useContext } from 'react'
import AvatarDefault from '../../assets/image/avatar-default-2.jpg'
import { AuthProvider, useAuth, AuthContext } from '../../context/AuthContext'

const CommentHeader = ({ date, userName, avatarURL }) => {
  const user = useContext(AuthContext)

  return (
    <div className="flex items-center">
      <p className="inline-flex items-center mr-3 text-xs text-gray-900 ">
        <img
          className="mr-2 w-6 h-6 rounded-full"
          src={
            avatarURL ? avatarURL : AvatarDefault
          }
          alt={userName}
        />
        {userName}
      </p>
      <p className="text-sm text-gray-600 ">
        <time className="text-xs" pubdate datetime="2022-02-08" title="February 8th, 2022">
         {date}
        </time>
      </p>
    </div>
  )
}

export default CommentHeader
