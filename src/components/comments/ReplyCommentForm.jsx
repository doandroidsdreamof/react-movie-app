import React, { useContext, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase'

function ReplyCommentForm(prop) {
  console.log("🚀 ~ file: ReplyCommentForm.jsx:11 ~ ReplyCommentForm ~ prop", prop)
  const [comments, setComments] = useState('')
  const { id } = useParams()
  const user = useContext(AuthContext)
  const auth = getAuth()

  async function setReplyComments(e) {
    e.preventDefault()
    if (commentsData.length > 0) {
      try {
        //* update database //
        const docRef = await addDoc(
          collection(db, id, open.ID, 'sub-comments'),
          {
            userName: auth?.currentUser?.displayName,
            createdAt: Timestamp.fromDate(new Date()),
            date: new Date().toDateString(),
            userID: user?.uid,
            text: comments,
            postID: uuidv4(),
            nested: true,
            photoURL: auth?.currentUser?.photoURL,
            email: user?.currentUser.email,
            parentPostID: open?.ID

          }
        );
        setTimeout(() => {
          dispatch(commentObserver())
        }, 100)
        setCommentsData('')
        //* after submit close form //
        open.open()

      }
      catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <form className={prop.replyToggle ? "p-3 mb-6 -translate-x-4 md:translate-x-0  ml-auto w-eighty  md:w-ninty text-base  rounded-lg  " : "hidden"}>
      <div className="py-2 px-3 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          disabled={user?.currentUser === null ? true : false}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          id="comment"
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
          placeholder="Write a comment..."
          required
        />
      </div>
      <button
        disabled={user?.currentUser === null ? true : false}
        onClick={(e) => setReplyComments(e)}
        type="submit"
        className="inline-flex items-center bg-star py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
      >
        Post Reply
      </button>
      <button
        onClick={(e) => prop.cancelComment()}
        className="inline-flex items-center bg-star ml-3 py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
      >
        Close
      </button>
    </form>
  )
}

export default ReplyCommentForm
