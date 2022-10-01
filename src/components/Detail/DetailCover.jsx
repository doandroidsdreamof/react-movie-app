import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import BookmarkButton from './BookmarkButton.jsx';
import PlayVideoButton from './PlayVideoButton.jsx';
import ShareButton from './ShareButton.jsx';
import CoverStar from '../Rates/CoverStar.jsx';

import "swiper/css/lazy";
import "react-lazy-load-image-component/src/effects/opacity.css";

 const DetailCover = ({passDetail}) => {
  const [loaded,setLoaded]= useState(false)
 // console.log("DETAIL COVER =>",passDetail)
  // <div className={!loaded ? "swiper-lazy-preloader  " : ""}></div>
  return (
    <>    
        <div className="  h-fit w-full ">
        <CoverStar key={passDetail} coverRating={passDetail.vote_average} />

        <div className="bg-gradient-to-br from-black w-onehundred   h-96 z-0   absolute    rounded-br-xl rounded-bl-xl  ">
        <h3 className="text-gray-50  relative inline-block left-2 top-72 translate-x-5 text-4xl z-50 font-roboto font-medium">{passDetail.title}</h3>

           </div>
        <LazyLoadImage effect="opacity" afterLoad={() => {setLoaded(true)}} className='object-cover -z-50   rounded-br-xl rounded-bl-xl   h-96 w-screen ' src={`https://image.tmdb.org/t/p/original/${passDetail?.backdrop_path}`} alt={passDetail.title} />

        </div>
        <div className=''>
        <ShareButton />
        <BookmarkButton />
        <PlayVideoButton />
        </div>
    
    </>



  )
}


export default DetailCover;