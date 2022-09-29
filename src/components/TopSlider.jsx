import React from "react";
import Star from "./Star.jsx";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

const TopSlider = ({ endpoint }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((get) => setData(get.results.slice(4, 8).reverse()))
      .catch(err => {console.log(err)})
  }, []);



  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-bullet-inactive-color": "gray",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-width": "8px;",
          "--swiper-pagination-bullet-height": "8px;",
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        keyboard={true}
        //autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        scrollbar={{ draggable: true }}
        className="mySwiper mt-11 left-0 ml-auto h-fit w-full md:!w-eighty !rounded-lg "
      >
        {data.map((items, id) => (
          <SwiperSlide key={items.length} className=" w-full cursor-pointer h-96 lg:h-[420px] ">
            <Star  rating={items.vote_average} />
            <div className="bg-gradient-to-br from-black  w-full h-onehundred  absolute transition-all duration-500 ease-in-out hover:opacity-75"> </div>
             <div className="absolute flex flex-col w-[450px]  ">
             <p key={id} className="text-5xl  p-5  text-head   font-roboto font-bold">{items.original_title ? items.original_title : items.name} </p>
             <p  className="text-2xl  p-5  text-white mt-32  font-roboto font-bold">Overview</p>
             <p key={id} className="overview text-sm  ml-5   line-clamp-3  text-gray-300   font-roboto font-medium">{items.overview}</p>
             </div>
            <img data-hash={id} className="object-cover object-center  w-full h-onehundred " src={`https://image.tmdb.org/t/p/w1280/${items?.backdrop_path}`} alt={items.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopSlider;
