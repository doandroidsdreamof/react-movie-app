import React from 'react';
import Home from './pages/Home.jsx'
import DetailPage from './pages/DetailPage.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import Aside from './components/AsideBar/Aside.jsx'
import MovieTrendingDay from './components/AsideBar/MovieTrendingDay.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormLayout from './components/Layouts/FormLayout.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<DetailPage />} />
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
      </Routes>



    </>
  )
}


export default App
