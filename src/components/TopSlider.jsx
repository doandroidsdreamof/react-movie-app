import React from 'react'
import Star from './Star.jsx';
import { useEffect, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard,Scrollbar,A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";



 const TopSlider = ({endpoint}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(endpoint)
        .then((res) => res.json())
        .then((get) => setData(get.results.slice(4,8).reverse()));
    }, [endpoint]);
    console.log(data)

  return (
    <>
      <Swiper
       style={{
        "--swiper-pagination-bullet-inactive-color": "white",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-width": "8px;",
        "--swiper-pagination-bullet-height": "8px;"
      }}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        slidesPerView={1}
        keyboard={true}
        modules={[Navigation, Pagination]}
        scrollbar={{ draggable: true }}
        className="mySwiper mt-11 left-0 ml-auto h-fit w-full md:!w-eighty !rounded-lg"
      >
         {data.map((items, id) => (
          <SwiperSlide key={items.length} className=" w-full cursor-pointer  h-96 " >
             <Star />
            <img data-hash={id} className='object-cover  w-full h-onehundred ' src={`https://image.tmdb.org/t/p/w1280/${items?.backdrop_path}`} alt={items.name} />
          </SwiperSlide>
          
        ))}
      </Swiper>

    </>
  )
}


export default TopSlider;