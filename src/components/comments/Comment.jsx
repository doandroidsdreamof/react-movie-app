import React, { useContext, useState,useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { collection, doc, setDoc, Timestamp,getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase'

import CommentText from './CommentText'
import CommentEdit from './CommentEdit'
import CommentHeader from './CommentHeader'
import CommentReplyButton from './CommentReplyButton'
import ReplyComment from './ReplyComment'
import ReplyCommentForm from './ReplyCommentForm'

const Comment = ({items}) => {
  const [reply, setReply] = useState([])
  const [replyToggle, setReplyToggle] = useState(false)

  async function getReply() {
    try {
      const subColRef = collection(db, 'comments', items.postID, 'sub-comments');
      const querySnapshot = await getDocs(subColRef)
      const getData = []
      querySnapshot.forEach((doc) => {
        getData.push(doc.data())

      })

      getData.sort(function (a, b) { return b.createdAt - a.createdAt })
      setReply([...getData])

    }
    catch (err) {
      console.error(err)
    }
  }
  function handleReplyToggle(){
    setReplyToggle(!replyToggle)
  }




  return (
    <>
      <article className={!replyToggle ? "p-3 mb-6 -translate-x-4 md:translate-x-0  ml-auto w-eighty  md:w-ninty text-base bg-white rounded-lg " : "hidden"}>
        <div className="flex justify-between items-center mb-2">
          <CommentHeader date={items?.date} userName={items?.userName} avatarURL={items?.photoURL} />
          <CommentEdit userID={items?.userID} />
        </div>
        <CommentText commentValue={items?.text} />
        <CommentReplyButton replyToggle={(e) => handleReplyToggle()} />
      </article>
      <ReplyCommentForm cancelComment={(e) => setReplyToggle(false)} replyToggle={replyToggle} />
      <ReplyComment userID={items?.userID} />
    </>
  )
}

export default Comment
