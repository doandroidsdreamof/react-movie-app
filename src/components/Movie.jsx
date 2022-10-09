import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "swiper/css/lazy";

const Movie = ({ data }) => {

  const [loaded,setLoaded]= useState(false)
 
  return (
    <div className=" ">
      <Link  to={`movie/${data?.id}`} ><LazyLoadImage afterLoad={() => {setLoaded(true)}} effect="opacity" className="object-cover hover:opacity-95 rounded-md transform  " src={`https://image.tmdb.org/t/p/w342/${data?.poster_path}`} alt={data?.title} /></Link>
      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"></p>
      <div className={!loaded ? "swiper-lazy-preloader " : ""}></div>
    </div>
  );
};
export default Movie;
