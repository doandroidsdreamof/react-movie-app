import React from 'react'
import PageLayout from "../components/Layouts/PageLayout.jsx";
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";
import ExploreLayout from "../components/Layouts/ExploreLayout.jsx";
import SearchBar from "../components/AsideBar/SearchBar.jsx";
import {useEffect,useState} from 'react'
import FilterInput from '../components/Explore/FilterInput.jsx'
import SortInput from '../components/Explore/SortInput.jsx'




 const Explore = () => {
 const [searchLogic,setSearchLogic] = useState(false)
useEffect(() =>{
  setSearchLogic(!searchLogic)


},[])


  return (
  <ExploreLayout 
   nav={<SideNav />}
   searchBar={<SearchBar explorePage={searchLogic} />}
   filterInput={<FilterInput />}
   sortInput={<SortInput />}

  
  />
  )
}

export default Explore