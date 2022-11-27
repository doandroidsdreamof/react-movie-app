import React, { useState, useEffect } from 'react'
import { doc, updateDoc, setDoc, getDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { db, auth } from '../../firebase'
import { Link } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import Bookmarks from '../bookmarks/Bookmarks'
import data from '../../../Data'
import CardAnimation from '../explore/CardAnimation'

const BookmarkLayout = (props) => {
  const [bookmarks, setBookMarks] = useState([])
  const [datas, setDatas] = useState([])
  const [logic, setLogic] = useState(false)
  const [update, setUpdate] = useState(false)
  const user = useAuth()

  useEffect(() => {
    getData()
    fetchDetails()
  }, [logic, bookmarks])

  async function getData() {
    const docRef = doc(db, 'users-data', user.currentUser?.uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      let bookMarks = docSnap.data().bookmarks
      setBookMarks(bookMarks)
      setLogic(true)
    } else {
      setBookMarks([])
      setLogic(false)
    }
  }

  async function fetchDetails() {
    let parse = []
    if (logic === true) {
      for (let i = 0; i < bookmarks.length; i++) {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${bookmarks[i]}?${data.requestSearchByID}`
        )
        const get = await response.json()
        parse.push(get)
      }
      setUpdate(true)
      setDatas(parse)
    }
  }

  return (
    <section className="flex flex-col h-screen  overflow bg-lm-bg dark:bg-bg-color ">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className="Side-nav  flex  order-1">{props.sideNav}</div>
        <div className=" invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">
          <div className={`w-onehundred mr-auto text-center left-0 relative px-3 md:px-8 h-full `}>
            <h1 className="text-4xl mb-9 sm:text-4xl mt-12  md:text-6xl bg-clip-text font-extrabold text-transparent  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
              Bookmarks
            </h1>
            <div
              className={`     overflow-hidden gap-y-10  order-3 h-full   w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4     lg:px-32 gap-5   px-7 md:px-10 `}
            >
            {datas.map((value, index) => {
                return <CardAnimation cards={<Bookmarks data={value} key={index} />} />
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookmarkLayout
