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
import ReplyComment from './ReplyComment'

const Comment = ({items}) => {


  return (
    <>
      <article className="p-3 mb-6 -translate-x-4 md:translate-x-0  ml-auto w-eighty  md:w-ninty text-base bg-white rounded-lg ">
        <div className="flex justify-between items-center mb-2">
          <CommentHeader date={items?.date} userName={items?.userName} photoURL={items?.photoURL} />
          <CommentEdit userID={items?.userID} />
        </div>
        <CommentText commentValue={items?.text} />
        <CommentReplyButton />
      </article>
      <ReplyComment />
    </>
  )
}

export default Comment
