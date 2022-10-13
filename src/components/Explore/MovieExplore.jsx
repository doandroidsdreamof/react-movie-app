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

<>
<div className="relative my-5  bg-white  dark:bg-[#18191c] shadow-xl hover:shadow duration-200 rounded-xl group">
  <div className="relative w-full rounded-xl">
  <Link  to={`/movie/${ explore.id}`} ><LazyLoadImage afterLoad={() => {setLoaded(true)}} effect="blur" className="object-cover h-60 hover:opacity-95 rounded-md transform  " src={`https://image.tmdb.org/t/p/w342/${ explore?.poster_path}`} alt={ explore?.title} /></Link>


    <div className="absolute top-3 left-4 flex items-center space-x-2 cursor-pointer">
 
    </div>
  </div>
  <div className="absolute bottom-0 left-0 right-0 rounded-b-xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 group-hover:py-6 duration-300">
    <h5 className="text-primary font-medium text-sm">
      Segoe cute
    </h5>
    <small className="text-xs font-light text-primary">
      Do you want to participate?
    </small>
  </div>
</div>
</>


  );
};

export default MovieExplore;



