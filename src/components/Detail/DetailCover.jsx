import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import BookmarkButton from './BookmarkButton.jsx';
import PlayVideoButton from './PlayVideoButton.jsx';
import ShareButton from './ShareButton.jsx';

import "swiper/css/lazy";
import "react-lazy-load-image-component/src/effects/opacity.css";

 const DetailCover = ({passDetail}) => {
  const [loaded,setLoaded]= useState(false)
  console.log(passDetail)
  return (
    <> 
        <div className="w-full  h-fifty ">
        <div className="bg-gradient-to-br from-black  w-full h-96   absolute transition-all duration-500 rounded-br-xl rounded-bl-xl ease-in-out hover:opacity-75"> </div>
        <LazyLoadImage effect="opacity" afterLoad={() => {setLoaded(true)}} className='object-cover rounded-br-xl rounded-bl-xl  h-96 w-screen ' src={`https://image.tmdb.org/t/p/original/${passDetail?.backdrop_path}`} alt={passDetail.title} />
        <div className={!loaded ? "swiper-lazy-preloader  " : ""}></div>
        <ShareButton />
        <BookmarkButton />
        <PlayVideoButton />
        </div>

    
    </>



  )
}


export default DetailCover;