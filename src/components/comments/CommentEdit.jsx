import React, { useContext, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { collection, doc, setDoc, Timestamp, query, where, getDocs } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase'
import CommentForm from '../comments/CommentForm'
import Comment from '../comments/Comment'
import ReplyComment from '../comments/ReplyComment'

const CommentEdit = ({ userID }) => {
  const [toggle, setToggle] = useState(false)
  const user = useContext(AuthContext)
  const auth = getAuth()

  return (
    <>
      <button
        onClick={(e) => setToggle(!toggle)}
        id="dropdownComment1Button"
        className={
          userID === auth?.currentUser?.uid
            ? ' inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 '
            : 'hidden'
        }
        type="button"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
        <span className="sr-only">Comment settings</span>
      </button>
      <div
        id="dropdownComment1"
        className={
          toggle
            ? 'absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow '
            : 'hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow '
        }
      >
        <ul
          className="py-1 text-sm text-gray-700 "
          aria-labelledby="dropdownMenuIconHorizontalButton"
        >
          <li>
            <span
              onClick={(e) => setToggle(false)}
              className="block cursor-pointer py-2 px-4 hover:bg-gray-100 "
            >
              Close
            </span>
          </li>
          <li>
            <span className="block cursor-pointer py-2 px-4 hover:bg-gray-100 ">Edit</span>
          </li>
          <li>
            <span className="block cursor-pointer py-2 px-4 hover:bg-gray-100 ">Remove</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CommentEdit
