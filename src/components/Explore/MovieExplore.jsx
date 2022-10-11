import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";




const MovieExplore = ({ explore,expolorePage }) => {
  const [loaded,setLoaded]= useState(false)

  useEffect(() =>{
    setLoaded(false)
  },[])
 
 
  return (
    <div className=" ">
      <Link  to={`/movie/${ explore.id}`} ><LazyLoadImage afterLoad={() => {setLoaded(true)}} effect="blur" className="object-cover hover:opacity-95 rounded-md transform  " src={`https://image.tmdb.org/t/p/w342/${ explore?.poster_path}`} alt={ explore?.title} /></Link>

      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"></p>


    </div>
  );
};

export default MovieExplore;