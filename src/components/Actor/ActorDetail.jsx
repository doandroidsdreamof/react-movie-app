import React, { useEffect, useState } from 'react'
import fallBackImage from '../../assets/image/fallback-image.png'
import { useParams } from "react-router-dom";

 const ActorDetail = ({actorDetail}) => {



    const imagePath = "https://image.tmdb.org/t/p/w500/" + actorDetail.profile_path;

console.log(actorDetail)

  return (


    <div className=' flex md:flex-row flex-col h-fifty  '>
        <img className='object-cover rounded-md scale-75 md:scale-100' src={imagePath ? imagePath : fallBackImage } alt={actorDetail.name} />
    <div className="flex  flex-1 flex-col  gap-y-1 overflow md:overflow-hidden p-0 md:pt-0 md:p-5">
        <h1 className='text-2xl text-gray-100 font-roboto font-medium text-center md:text-left '>{actorDetail.name ? actorDetail.name : ''}</h1>
        <p className="text-gray-300 font-roboto text-xl mb-1 text-center md:text-left">Biography</p>
        <p className="text-gray-400 font-roboto text-xs md:text-sm leading-4 md:leading-relax max-w-5xl text-justify md:text-left px-3 md:px-0">{actorDetail.biography ? actorDetail.biography : ''}</p>

    </div>


    </div>
  )
}


export default ActorDetail