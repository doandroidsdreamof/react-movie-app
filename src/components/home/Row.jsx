import React, { useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardStar from '../rates/CardStar.jsx'

import Movie from './Movie.jsx'

import 'swiper/css'
import 'swiper/css/navigation'

function Row({ endpoint, title }) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((get) => setMovies(get.results))
      .catch((err) => {
        console.error(err)
      })
  }, [endpoint])

  return (
    <>
      <h2 className="text-4xl text-star font-bold dark:text-white ml-1 mb-2  mt-12 font-roboto">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerGroup={2}
        scrollbar={{ draggable: true }}
        slidesPerView="auto"
        spaceBetween={10}
        className=" "
      >
        {movies.map((items, id) => (
          <SwiperSlide
            key={id}
            className="w-[180px]  h-[270px] transition duration-200 hover:scale-105 ease-in bg-blend-darken hover:bg-transparent rounded-md    cursor-pointer "
          >
            <Movie data={items} />
            <CardStar rating={items.vote_average} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Row
