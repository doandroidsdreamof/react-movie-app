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

const CommentsLayout = () => {
  const { id } = useParams()
  const [userComments, setUserComments] = useState([])
  const [render,setRender] = useState(false)


  useEffect(() => {
    getData()
  }, [render])

  async function getData() {
    const q = query(collection(db, id))
    const datas = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      datas.push(doc.data())
    })
    //* sort by created time //
    datas.sort((a, b) => b.createdAt - a.createdAt)
    setUserComments([...datas])
  }


  function handleRender(){
    setRender(!render)
  }


  return (
    <div className=" px-6 w-ninty mx-auto  md:px-12 flex flex-col justify-center">
      <CommentForm renderForm={(e) => handleRender()} />
      {userComments.length > 0
        ? userComments &&
          userComments.map((items, id) => (
            <>
              <Comment key={id} items={items} />
            </>
          ))
        : null}
    </div>
  )
}

export default CommentsLayout
