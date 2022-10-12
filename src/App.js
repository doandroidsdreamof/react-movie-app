import React from 'react';
import Home from './pages/Home.jsx'
import DetailPage from './pages/DetailPage.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormLayout from './components/Layouts/FormLayout.jsx'
import BookMark from './pages/BookMark.jsx'
import Error from './pages/Error.jsx'
import Explore from './pages/Explore.jsx'
import {useEffect,useState} from 'react'


function App() {
  const [load, setLoad] = useState(false)
useEffect(() =>{
  setLoad(true)
},[])


  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='movie/:id' element={<DetailPage />} />
        <Route path='/login' element={
          <FormLayout>
            <SignIn />
          </FormLayout>
        } />
        <Route path='/signup' element={
          <FormLayout>
            <SignUp />
          </FormLayout>
        } />
        <Route path='/profile' element={<Profile />} />
        <Route load={load} path='/explore' element={<Explore />} />
        <Route path='/bookmark' element={<BookMark />} />
        <Route path='*' element={<Error />}/>
      </Routes>



    </>
  )
}


export default App
