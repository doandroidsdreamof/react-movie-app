import React, { useEffect, useState, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import FormLayout from './components/layouts/FormLayout.jsx'
import ActorPage from './pages/ActorPage.jsx'
import BookMark from './pages/BookMark.jsx'
import DetailPage from './pages/DetailPage.jsx'
import Error from './pages/Error.jsx'
import Explore from './pages/Explore.jsx'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import { AuthProvider, useAuth } from './context/AuthContext'
import ProtectedRoute from './components/routes/ProtectedRoute'
import { collection, getDocs, setDoc, doc, getDoc,updateDoc } from 'firebase/firestore'
import { db, auth } from './firebase'
import { getAdditionalUserInfo} from "firebase/auth"


function App() {
  const [load, setLoad] = useState(false)
  const user = useAuth()
  console.log("🚀 ~ file: App.js ~ line 21 ~ App ~ user", user)

  useEffect(() => {
    setLoad(true)
  }, [])




  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="movie/:id" element={<DetailPage />} />
      <Route
        path="/login"
        element={
          <FormLayout>
            <SignIn />
          </FormLayout>
        }
      />
      <Route
        path="/register"
        element={
          <FormLayout>
            <SignUp />
          </FormLayout>
        }
      />
      <Route load={load} path="/explore" element={<Explore />} />
      <Route
        path="/bookmark"
        element={
          <ProtectedRoute>
            <BookMark />
          </ProtectedRoute>
        }
      />
      <Route path="actor/:person_id" element={<ActorPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
