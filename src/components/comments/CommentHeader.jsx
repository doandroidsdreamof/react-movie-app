import React, { useContext, useEffect } from 'react'

import AvatarDefault from '../../assets/image/avatar-default-2.jpg'
import { AuthContext } from '../../context/AuthContext'

function CommentHeader({ date, userName, avatarURL }) {
  const user = useContext(AuthContext)

useEffect(() =>{

},[avatarURL])
  return (
    <div className="flex items-center">
      <p className="inline-flex items-center mr-3 text-xs text-gray-900 ">
        <img
          className="mr-2 w-6 h-6 rounded-full"
          src={
            avatarURL !== null ? avatarURL : AvatarDefault
          }
          alt={userName}
        />
        {userName}
      </p>
      <p className="text-sm text-gray-600 ">
        <time className="text-xs"  dateTime={date} title={date}>
          {date}
        </time>
      </p>
    </div>
  )
}

export default CommentHeader
