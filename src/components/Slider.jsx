import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import data from "../utils/Data";
import Move from "./Movie.jsx";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView="auto"
      slidesPerGroupAuto
      spaceBetween={30}
      className="md:!w-[calc(100vw_-_260px_-_310px_-_2px_-_4vw_-_10px)] !w-[calc(100vw-8vw-2px)] !py-2"
    >
      <SwiperSlide>
        <Movie />
      </SwiperSlide>


  
    </Swiper>
  );
};

export default Slider;
