import React from 'react'
import Star from './rates/Star.jsx'
import { useEffect, useState } from 'react'
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import fallBack from '../assets/image/fallback-image.png'
import SpinLoader from './SpinLoader.jsx'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const TopSlider = ({ endpoint }) => {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        fetch(endpoint)
            .then((res) => res.json())
            .then((get) => setData(get.results.slice(0, 3)))
            .catch((err) => {
                console.error(err)
            })
    }, [])
    return (
        <>
            <Swiper
                style={{
                    '--swiper-pagination-bullet-inactive-color': 'gray',
                    '--swiper-pagination-bullet-inactive-opacity': '1',
                    '--swiper-pagination-bullet-size': '8px',
                    '--swiper-pagination-bullet-width': '8px;',
                    '--swiper-pagination-bullet-height': '8px;',
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                keyboard={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                scrollbar={{ draggable: true }}
                grabCursor={true}
                className="mySwiper mt-11 left-0 ml-auto h-fit w-full md:!w-onehundred !rounded-lg "
            >
                {data.map((items, id) => (
                    <SwiperSlide
                        key={id}
                        className="shadow-lg w-full cursor-pointer h-80 lg:h-[420px] "
                    >
                        <Link key={id.length} to={`movie/${items.id}`}>
                            <Star key={id.length} rating={items?.vote_average} />
                            <div className="bg-gradient-to-tr from-black flex flex-col  w-full h-onehundred  absolute transition-all duration-500 ease-in-out hover:opacity-75">
                                {' '}
                            </div>
                            <div className="absolute w-[450px]  ">
                                <p className="text-4xl lg:text-5xl  p-5  text-head   font-roboto font-bold">
                                    {items.original_title ? items.original_title : items.name}{' '}
                                </p>
                                <p className="text-2xl  p-5  text-gray-100 lg:mt-40 mt-20 translate-y-2  font-roboto font-bold">
                                    Overview
                                </p>
                                <p className="overview text-sm  ml-5   line-clamp-3  text-gray-400   font-roboto font-medium">
                                    {items.overview}
                                </p>
                            </div>
                            <div
                                className={
                                    loaded ? 'hidden ' : '  absolute m-auto  justify-center items-center flex z-50 w-full h-full'
                                }
                            >
                                <SpinLoader />
                            </div>
                            <LazyLoadImage
                                afterLoad={() => {
                                    setLoaded(true)
                                }}
                                data-hash={id}
                                className=" object-cover object-center min-h-onehundred"
                                src={`https://image.tmdb.org/t/p/original/${
                                    items.backdrop_path ? items.backdrop_path : fallBack
                                }`}
                                alt={items?.name}
                            />

                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default TopSlider
