import React from 'react';
import Card from './components/Card.jsx';
import SideNav from './components/SideNav.jsx';
import Layout from './components/Layout.jsx';

 function App() {
  return (
    <>

      <div className=' min-h-screen relative  bg-bg-color flex justify-between'>
      <SideNav />

      <Layout />

      </div>
      </>
  )    
}


export default App