/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PageLayout from '../components/Layouts/PageLayout.jsx'
import SideNav from '../components/Navbar/SideNav.jsx'
import Aside from '../components/AsideBar/Aside.jsx'
import ExploreLayout from '../components/Layouts/ExploreLayout.jsx'
import SearchBar from '../components/AsideBar/SearchBar.jsx'
import FilterInput from '../components/Explore/FilterInput.jsx'
import SortInput from '../components/Explore/SortInput.jsx'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../../Data'
import MovieExplore from '../components/Explore/MovieExplore.jsx'

const Explore = () => {
  const [searchLogic, setSearchLogic] = useState(false)
  const [initialMovies, setInitialMovies] = useState([])
  const [page, setPage] = useState(1)

  window.onLoad = () => {
    setPage(1)
  }

  useEffect(() => {
    fetch(data.requestExploreInitial + `${page}`)
      .then((res) => res.json())
      .then((get) => setInitialMovies([...initialMovies, ...get.results]))
      .catch((err) => {
        console.error(err)
      })
  }, [page])
  function infiniteIncrease() {
    setPage(page < 1000 ? page + 1 : page)
  }

  return <div className='border'>eddddddddd</div>
}

export default Explore

/*


setPage(page < 1000 ? page + 1 : page)
  <ExploreLayout
   page={page}
   nav={<SideNav />}
   searchBar={<SearchBar explorePage={!searchLogic} />}
   filterInput={<FilterInput />}
   sortInput={<SortInput />}
   movies={
  initialMovies.map((el, id) => (
        <MovieExplore key={id} explore={el}
         expolorePage={searchLogic}
        />
              ))}
  />


*/
