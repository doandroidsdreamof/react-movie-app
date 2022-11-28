import React from 'react'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, updateDoc, setDoc, getDoc,  arrayUnion, arrayRemove } from 'firebase/firestore'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { db, auth } from '../../firebase'

const BookmarkButton = () => {
  const [isActive, setIsActive] = useState(false)
  const { id } = useParams()
  const user = useAuth()

  useEffect(() => {
setIsActive(false)
getData()
  }, [id])

  async function getData() {
    const docRef = doc(db, 'users-data', user.currentUser?.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      let bookMarks = docSnap.data().bookmarks;
      let search = bookMarks.filter((current,i) => current === id ? setIsActive(true) : setIsActive(false))
    } else {
      setIsActive(false)
    }
  }

  const updateBookmarks = async () => {
    const ref = doc(db, 'users-data', user.currentUser?.uid)
    if (isActive !== true) {
      await updateDoc(ref, {
        firstName: user.currentUser?.displayName,
        lastName: '',
        bookmarks: arrayUnion(id),
        comments: [],
      })
    } else {
      await updateDoc(ref, {
        firstName: user.currentUser?.displayName,
        lastName: '',
        bookmarks: arrayRemove(id),
        comments: [],
      })
    }
  }
  return (
    <>
      <button
        disabled={user.currentUser == null}
        onClick={() => {
          setIsActive(!isActive)
          updateBookmarks()
        }}
        className={
          isActive
            ? 'btn btn-circle scale-110 btn-outline border-2 p-2 hover:bg-star ease-in duration-150 z-50 bg-star'
            : ' btn btn-circle scale-110 btn-outline border-2 p-2 hover:bg-star ease-in duration-150 z-50'
        }
      >
        {isActive ? (
          <BsBookmarkHeart
            className="text-white"
            size={20}
            onClick={() => {
              setIsActive(!isActive)
            }}
          />
        ) : (
          <BsBookmarkHeartFill
            className="text-white "
            size={20}
            onClick={() => {
              setIsActive(!isActive)
            }}
          />
        )}
      </button>
    </>
  )
}

export default BookmarkButton
