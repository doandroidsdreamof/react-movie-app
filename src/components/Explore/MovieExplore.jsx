import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const MovieExplore = ({ explore,expolorePage }) => {
  const [loaded,setLoaded]= useState(false)


  useEffect(() =>{

  },[])

  console.log(explore)
  const addElipsisTitle = explore?.title.length > 20 ? explore?.title.substring(0, 100) + "..." : explore?.title;

 
  return (


<div className="relative  justify-center  h-fit flex w-full scale-75 md:scale-90 bg-card-second shadow-xl hover:shadow duration-200 rounded-xl group transition  md:hover:scale-95 ease-in ">
{!loaded ? <Box   sx={{position: 'absolute', display: 'flex', zIndex:50, top:'50%' }}>
      <CircularProgress />
    </Box> : <></>}
    
  <div className="relative rounded-xl bg-card-second w-full h-96">
  <Link  to={`/movie/${ explore.id}`} ><LazyLoadImage afterLoad={() => {setLoaded(true)}} effect="blur" className="object-cover h-96 w-screen hover:opacity-95 rounded-md transform  " src={`https://image.tmdb.org/t/p/w342/${ explore?.poster_path}`} alt={ explore?.title} /></Link>
  <div className="absolute  bottom-0 left-0 right-0 rounded-b-md bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 group-hover:py-6 duration-300">
    <h5 className="text-primary font-medium text-sm">
      {explore.title}
    </h5>
  </div>

  </div>

</div>



  );
};

export default MovieExplore;



