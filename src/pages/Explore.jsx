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
import MovieExplore from '../components/Explore/MovieExplore.jsx'


 const Explore = () => {
 const [searchLogic,setSearchLogic] = useState(false)
 const [initialMovies,setInitialMovies] = useState([])
 const [page, setPage] = useState(1);


useEffect(() =>{

fetch(data.requestExploreInitial + `&page=${page}`)
.then((res) => res.json())
.then((get) => setInitialMovies([...initialMovies,...get.results]))
.catch(err => {console.error(err)})

},[page])

const infiniteIncrease = () =>{
   setPage(page < 1000 ? page + 1 : page)

}

console.log('here', initialMovies)

  return (
    <section className=''>

<InfiniteScroll
          dataLength={page}
          next={infiniteIncrease}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
  <ExploreLayout 
   nav={<SideNav />}
   searchBar={<SearchBar explorePage={!searchLogic} />}
   filterInput={<FilterInput />}
   sortInput={<SortInput />}
   movies={initialMovies.map((el, id) => (
    <MovieExplore key={id} explore={el}
    expolorePage={searchLogic}
    
    
    />
          ))
        
        
        }

  
  />
        </InfiniteScroll>





  </section>
  )
}

export default Explore

/*
setPage(page < 1000 ? page + 1 : page)
*/