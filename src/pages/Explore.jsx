import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import PageLayout from '../components/Layouts/PageLayout.jsx'
import SideNav from '../components/Navbar/SideNav.jsx'
import Aside from '../components/AsideBar/Aside.jsx'
import ExploreLayout from '../components/Layouts/ExploreLayout.jsx'
import FilterInput from '../components/Explore/FilterInput.jsx'
import SortInput from '../components/Explore/SortInput.jsx'
import data from '../../Data'
import MovieExplore from '../components/Explore/MovieExplore.jsx'

function Explore() {
    const [searchLogic, setSearchLogic] = useState(false)
useEffect(() =>{
  setSearchLogic(true)


},[])
 

    return (
        <div className='h-full bg-bg-color'>
            <ExploreLayout
                logic={searchLogic}
                nav={<SideNav />}
                filterInput={<FilterInput />}
                sortInput={<SortInput />}
                movies={<MovieExplore  expolorePage={searchLogic} />}
            />
        </div>
    )
}

export default Explore

// setPage(page < 1000 ? page + 1 : page)

