import React from "react";
import SideNav from "../components/Navbar/SideNav.jsx";
import Aside from "../components/AsideBar/Aside.jsx";
import { useParams } from 'react-router-dom';
import {useState,useEffect } from 'react'
import data from '../../Data'

const DetailPage = () => {
  let { id } = useParams();
  const [details,setDetails] = useState([])
  console.log("detail page =>", id)
  const getById = `https://api.themoviedb.org/3/movie/${id}?`+data.requestSearchByID;
  useEffect(() =>{
    fetch(getById)
    .then((res) => res.json())
    .then((get) => setDetails(get))
    .catch(err => {console.log(err)})



  },[])


console.log("detay=>",details)

  return (
    <section className="flex flex-col h-screen   overflow  bg-bg-color">
      <div className="flex flex-1 overflow-x-hidden   overflow-y-auto ">
        <div className="flex  order-1">
          <SideNav />
        </div>
         <div className=" w-72 order-3 hidden lg:flex border-l border-l-gray-600">
        <Aside  />
        </div>
        <div className="invisible-overflow flex  flex-1 flex-col  order-2   overflow-y-auto">

        </div>
      </div>
    </section>
  );
};

export default DetailPage;
