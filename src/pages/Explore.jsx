import React, { useEffect, useState } from 'react'
import SideNav from '../components/Navbar/SideNav.jsx'
import ExploreLayout from '../components/Layouts/ExploreLayout.jsx'
import GenresExplore from '../components/Explore/GenresExplore.jsx'
import SortInput from '../components/Explore/SortInput.jsx'
import MovieExplore from '../components/Explore/MovieExplore.jsx'

function Explore({load}) {
    const [searchLogic, setSearchLogic] = useState(false)
useEffect(() =>{
  setSearchLogic(true)


},[load])
 

    return (

      
      <ExploreLayout
                logic={searchLogic}
                sideNav={<SideNav />}
                movies={<MovieExplore  expolorePage={searchLogic} />}
            />

  
    )
}

export default Explore

// setPage(page < 1000 ? page + 1 : page)

