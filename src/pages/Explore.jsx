import React, { useEffect, useState } from 'react'
import SideNav from '../components/Navbar/SideNav.jsx'
import ExploreLayout from '../components/Layouts/ExploreLayout.jsx'


function Explore({load}) {
    const [searchLogic, setSearchLogic] = useState(false)
useEffect(() =>{
  setSearchLogic(true)


},[load])
 

    return (

      
      <ExploreLayout
               expolorePage={searchLogic}
                logic={searchLogic}
                sideNav={<SideNav />}
          
            />

  
    )
}

export default Explore


