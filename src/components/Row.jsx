import React from "react";
import Movie from "./Movie.jsx";
import CardStar from "./CardStar.jsx";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

const Row = ({ endpoint, title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((get) => setMovies(get.results));
  }, [endpoint]);

  return (
    <>
      <h2 className="text-2xl text-white ml-1 mb-2  mt-12 font-roboto">{title}</h2>
      <Swiper modules={[Navigation]} navigation slidesPerGroup={2} scrollbar={{ draggable: true }} slidesPerView="auto" spaceBetween={10} className="  ">
        {movies.map((items, id) => (
          <SwiperSlide key={id} className="w-[180px]   h-[270px] p-1  transition duration-200 hover:scale-105 ease-in bg-blend-darken hover:bg-transparent rounded-md    cursor-pointer brightness-75 hover:brightness-100">
            <Movie data={items} />
            <CardStar rating={items.vote_average} />

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Row;
