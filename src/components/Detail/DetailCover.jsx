import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from 'react'
import BookmarkButton from './BookmarkButton.jsx'
import PlayVideoButton from './PlayVideoButton.jsx'
import ShareButton from './ShareButton.jsx'
import DailyTrendBar from '../Rates/DailyTrendBar.jsx'
import { Lazy } from 'swiper'
import { Swiper } from 'swiper/react'
import GenresDetail from '../Detail/GenresDetail.jsx'
import ReactPlayer from 'react-player/lazy'
import data from '../../../Data'
import { useParams } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import fallBack from '../../assets/image/fallback-image.png'
import SpinLoader from '../SpinLoader.jsx'
import 'swiper/css'
import 'swiper/css/lazy'

const DetailCover = ({ passDetail }) => {
    const [loaded, setLoaded] = useState(false)
    const [genre, setGenre] = useState(passDetail)
    const [open, setOpen] = useState(false)
    const [disable, setDisable] = useState(false)
    const [url, setUrl] = useState([])
    let { id } = useParams()
    const urlBase = `https://api.themoviedb.org/3/movie/${id}`

    useEffect(() => {
        fetch(urlBase + data.requestVideo)
            .then((res) => res.json())
            .then((get) => setUrl(get.results[0]))
            .catch((err) => {
                console.error(err)
            })
    }, [id])

    function handleClick() {
        if( key !== ''){
            setOpen(!open)
        }else{
           return
        }

     
    
    }
    function Constructor(url) {
        if (typeof url == 'undefined') {
            this.url = 'undefined'
            return
        } else {
            this.url = url
        }
    }
    const key = typeof url !== 'undefined' ? new Constructor(url.key)  : '' 

    

    return (
        <>
            <Swiper className="mySwiper z-50  " modules={[Lazy]}>
                <div className="swiper-slide  h-fit w-full z-50">
                    <Tooltip title="Menu" placement="right">
                        <PlayVideoButton disabledButton={key}  handleClick={handleClick} />
                    </Tooltip>
                    <div className="bg-gradient-to-tl flex flex-col from-black w-onehundred   h-96    absolute    rounded-br-xl rounded-bl-xl  ">
                        <div
                            className={
                                open
                                    ? 'flex flex-row  justify-end gap-3 p-4 z-0'
                                    : 'flex flex-row  justify-end gap-3 p-4 z-50'
                            }
                        >
                            <BookmarkButton />
                            <ShareButton />
                        </div>
                        <div
                            className={
                                open
                                    ? 'flex-col z-0    h-full flex '
                                    : 'flex-col z-10   h-full flex '
                            }
                        >
                            <DailyTrendBar scale={'scale'} dailyTrends={passDetail.vote_average} />
                            <h3 className="text-gray-50 order-2 relative bottom-3 ml-8 mt-auto -translate-y-8 text-2xl md:text-4xl z-50 font-roboto font-medium">
                                {passDetail.title}
                            </h3>
                            <div className="flex flex-row order-3 ml-8 mr-auto transition  flex-wrap gap-2 max-w-eighty z-50 h-fit">
                                <GenresDetail key={genre.length} genresList={genre} />
                            </div>
                            <div
                                className={
                                    open
                                        ? 'hidden'
                                        : ' h-28 w-full bottom-0  z-50 bg-white-600 absolute rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-br-xl rounded-bl-xl border-gray-100'
                                }
                            ></div>
                        </div>
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
                        effect="opacity"
                        afterLoad={() => {
                            setLoaded(true)
                        }}
                        className="object-cover -z-50  rounded-br-xl rounded-bl-xl   h-96 w-screen "
                        src={`https://image.tmdb.org/t/p/original/${passDetail.backdrop_path ? passDetail.backdrop_path : passDetail.poster_path || fallBack}`}
                        alt={passDetail.title}
                    />
                    <ReactPlayer
                        className="react-player "
                        height="100%"
                        width="100%"
                        url={!open ? '  ' : `https://www.youtube.com/watch?v=${key.url}}`}
                    /> 
               
                </div>
            </Swiper>
        </>
    )
}

export default DetailCover
