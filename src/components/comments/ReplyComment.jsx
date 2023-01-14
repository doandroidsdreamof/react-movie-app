import React, { useContext, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase'

import CommentText from './CommentText'
import CommentEdit from './CommentEdit'
import CommentHeader from './CommentHeader'
import CommentReplyButton from './CommentReplyButton'

const ReplyComment = ({ userID, replyComments }) => {
  const user = useContext(AuthContext)
  const auth = getAuth()

  return (
    <article className="p-3 mb-2 -translate-x-4 md:translate-x-0  ml-auto w-seventy  md:w-eighty text-base bg-white rounded-lg ">
      <div className="flex justify-between items-center mb-2">
        <CommentHeader
          date={replyComments?.date}
          userName={replyComments?.userName}
          avatarURL={replyComments?.photoURL}
        />
        <CommentEdit userID={replyComments?.userID} />
      </div>
      <CommentText commentValue={replyComments?.text} />
    </article>
  )
}

export default ReplyComment
