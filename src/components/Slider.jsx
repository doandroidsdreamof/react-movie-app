import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import data from "../utils/Data";
import Move from "./Movie.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = ({child}) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView="auto"
        slidesPerGroupAuto
        spaceBetween={30}
        className=" w-[100vw] "
      >
        <SwiperSlide key={child.length} className="w-[180px]  h-[270px]">
          {child}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
