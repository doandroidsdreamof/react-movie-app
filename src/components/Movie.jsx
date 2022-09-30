import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "./Star.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Movie = ({ data }) => {
  return (
    <div className=" ">
      <LazyLoadImage effect="opacity" className="object-cover hover:opacity-95 rounded-md transform " src={`https://image.tmdb.org/t/p/w342/${data?.poster_path}`} alt={data?.title} />
      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"></p>
    </div>
  );
};
export default Movie;
