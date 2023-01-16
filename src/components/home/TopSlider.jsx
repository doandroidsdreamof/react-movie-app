import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import fallBack from '../../assets/image/fallback-image.png'
import SpinLoader from '../common/SpinLoader'
import Star from '../common/Star'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function TopSlider({ endpoint }) {
  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((get) => setData(get.results.slice(0, 7)))
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <Swiper
      style={{
        '--swiper-pagination-bullet-inactive-color': 'gray',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '8px',
        '--swiper-pagination-bullet-width': '8px;',
        '--swiper-pagination-bullet-height': '8px;',
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      keyboard
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay, Keyboard]}
      scrollbar={{ draggable: true }}
      grabCursor
      className="mySwiper mt-11 left-0 ml-auto h-fit w-full md:!w-onehundred !rounded-lg "
    >
      {data.map((items, id) => (
        <SwiperSlide key={id} className="shadow-lg w-full cursor-pointer h-80 lg:h-[450px] ">
          <Link key={id.length} to={`movie/${items.id}`}>
              <Star key={id.length} rating={items?.vote_average} />
            <div className="bg-gradient-to-tr from-black flex flex-col  w-full h-onehundred  absolute transition-all duration-500 ease-in-out hover:opacity-75" />
            <div className="absolute w-[450px]  ">
              <p className="text-4xl lg:text-4xl  p-5 mr-auto flex flex-wrap   text-head   font-roboto font-bold">
                {items.original_title ? items.original_title : items.name}{' '}
              </p>
              <p className="text-2xl  p-5  text-gray-100 lg:mt-40 mt-12  translate-y-2  font-roboto font-bold">
                Overview
              </p>
              <p className="overview text-sm  ml-5   line-clamp-3  text-gray-400   font-roboto font-medium">
                {items.overview}
              </p>
            </div>
            <div
              className={
                loaded
                  ? 'hidden '
                  : '  absolute m-auto  justify-center items-center flex z-50 w-full h-full'
              }
            >
              <SpinLoader />
            </div>
            <LazyLoadImage
              afterLoad={() => {
                setLoaded(true)
              }}
              data-hash={id}
              className=" object-cover object-center w-full min-h-onehundred"
              src={`https://image.tmdb.org/t/p/original/${
                items.backdrop_path ? items.backdrop_path : fallBack
              }`}
              alt={items?.name}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TopSlider
