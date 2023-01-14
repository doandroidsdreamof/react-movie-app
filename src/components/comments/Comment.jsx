import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../../firebase'
import { useParams } from 'react-router-dom'

import CommentEdit from './CommentEdit'
import CommentHeader from './CommentHeader'
import CommentReplyButton from './CommentReplyButton'
import CommentText from './CommentText'
import ReplyComment from './ReplyComment'
import ReplyCommentForm from './ReplyCommentForm'

function Comment({ items }) {
  const [reply, setReply] = useState([])
  const [replyToggle, setReplyToggle] = useState(false)
  const { id } = useParams()



  useEffect(() => {
    getReply()
  }, [replyToggle])

  async function getReply() {
    try {
      const subColRef = collection(db, id, items.postID, 'sub-comments')
      const querySnapshot = await getDocs(subColRef)
      const getData = []
      querySnapshot.forEach((doc) => {
        getData.push(doc.data())
      })

      getData.sort((a, b) => b.createdAt - a.createdAt)
      setReply([...getData])
    } catch (err) {
      console.error(err)
    }
  }
  function handleReplyToggle() {
    setReplyToggle(!replyToggle)
  }


  return (
    <>
      <article
        className={
          !replyToggle
            ? 'p-3 mb-6 -translate-x-4 md:translate-x-0  ml-auto w-eighty  md:w-ninty text-base bg-white rounded-lg '
            : 'hidden'
        }
      >
        <div className="flex justify-between items-center mb-2">
          <CommentHeader
            date={items?.date}
            userName={items?.userName}
            avatarURL={items?.photoURL}
          />
          <CommentEdit userID={items?.userID} />
        </div>
        <CommentText commentValue={items?.text} />
        <CommentReplyButton nested={false} replyToggle={(e) => handleReplyToggle()} />
      </article>
      <ReplyCommentForm
        parentID={items?.postID}
        cancelComment={(e) => setReplyToggle(false)}
        replyToggle={replyToggle}
      />
      {reply.map((data, index) => (
        <ReplyComment userID={items?.userID} replyComments={data} key={data.postID} />
      ))}
    </>
  )
}

export default Comment
