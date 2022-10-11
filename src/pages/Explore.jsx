import React from 'react'
import PageLayout from "../components/Layouts/PageLayout.jsx";
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";
import ExploreLayout from "../components/Layouts/ExploreLayout.jsx";
import SearchBar from "../components/AsideBar/SearchBar.jsx";
import {useEffect,useState} from 'react'
import FilterInput from '../components/Explore/FilterInput.jsx'
import SortInput from '../components/Explore/SortInput.jsx'
import InfiniteScroll from 'react-infinite-scroll-component';
import data from '../../Data'
import Movie from '../components/Movie.jsx'


 const Explore = () => {
 const [searchLogic,setSearchLogic] = useState(false)
 const [initialMovies,setInitialMovies] = useState([])

useEffect(() =>{
setSearchLogic(!searchLogic)
fetch(data.requestTopRated)
.then((res) => res.json())
.then((get) => setInitialMovies(get.results))
.catch(err => {console.error(err)})

},[])


console.log('here', initialMovies)

  return (
    <>
  <ExploreLayout 
   nav={<SideNav />}
   searchBar={<SearchBar explorePage={searchLogic} />}
   filterInput={<FilterInput />}
   sortInput={<SortInput />}
   movies={initialMovies.map((el, id) => (
    <Movie explore={el} />
          ))}

  
  />
















  </>
  )
}

export default Explore

/*
<InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={this.refresh}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
>
  {items}
</InfiniteScroll>

*/