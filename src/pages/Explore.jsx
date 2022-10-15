import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import PageLayout from '../components/Layouts/PageLayout.jsx'
import SideNav from '../components/Navbar/SideNav.jsx'
import Aside from '../components/AsideBar/Aside.jsx'
import ExploreLayout from '../components/Layouts/ExploreLayout.jsx'
import GenresExplore from '../components/Explore/GenresExplore.jsx'
import SortInput from '../components/Explore/SortInput.jsx'
import data from '../../Data'
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
                filterInput={<GenresExplore />}
                sortInput={<SortInput />}
                movies={<MovieExplore  expolorePage={searchLogic} />}
            />

  
    )
}

export default Explore

// setPage(page < 1000 ? page + 1 : page)

