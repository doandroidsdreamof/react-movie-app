import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Movie = ({ data }) => {
  return (

    <div  className=" bg-blend-darken hover:bg-transparent rounded-md   bg-black w-[180px]  h-[270px]  ease-in duration-200 cursor-pointer" >
      <img 
        className="object-cover hover:opacity-95 rounded-md transform transition  opacity-80 duration-200 hover:scale-105 ease-in"
        src={`https://image.tmdb.org/t/p/w342/${data?.poster_path}`}
        alt={data?.title}
      />
      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
        {/*data?.title*/}
      </p>
    </div>
  );
};
export default Movie;
