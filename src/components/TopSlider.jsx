import React from "react";
import Star from "./Rates/Star.jsx";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Keyboard, Autoplay, Lazy, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "swiper/css/effect-creative";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/lazy";

const TopSlider = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((get) => setData(get.results.slice(0, 3)))
      .catch((err) => {
        console.log(err);
      });
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
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        //autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay, Keyboard, EffectCreative, Lazy]}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        className="mySwiper mt-11 left-0 ml-auto h-fit w-full md:!w-onehundred !rounded-lg "
      >
        {data.map((items, id) => (
          <SwiperSlide key={id} className="shadow-lg w-full cursor-pointer h-80 lg:h-[420px] ">
            <Link key={id.length} to={`movie/${items.id}`}>
              <Star rating={items.vote_average} />
              <div className="bg-gradient-to-br from-black  w-full h-onehundred  absolute transition-all duration-500 ease-in-out hover:opacity-75"> </div>
              <div className="absolute flex flex-col w-[450px]  ">
                <p className="text-4xl lg:text-5xl  p-5  text-head   font-roboto font-bold">{items.original_title ? items.original_title : items.name} </p>
                <p className="text-2xl  p-5  text-white lg:mt-32 mt-14  font-roboto font-bold">Overview</p>
                <p className="overview text-sm  ml-5   line-clamp-3  text-gray-300   font-roboto font-medium">{items.overview}</p>
              </div>

              <LazyLoadImage
                afterLoad={() => {
                  setLoaded(true);
                }}
                data-hash={id}
                className=" object-cover object-center min-h-onehundred   "
                src={`https://image.tmdb.org/t/p/original/${items?.backdrop_path}`}
                alt={items.name}
              />
              <div className={!loaded ? "swiper-lazy-preloader" : ""}></div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopSlider;
