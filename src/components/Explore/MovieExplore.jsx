import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css'
import SkeletonLoader from './SkeletonLoader.jsx'
import fallBack from '../../assets/image/fallback-image.png'
import Star from '../Rates/CardStar.jsx'
import CardAnimation from './CardAnimation.jsx'

const MovieExplore = ({ explore }) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {}, [explore])


   
    const addElipsisTitle =
        explore?.title.length > 22 ? explore?.title.substring(0, 22) + '...' : explore?.title

    return (
      <CardAnimation cards={    <div className="relative cursor-pointer   justify-center  h-fit flex w-full scale-90  bg-card-second shadow-xl rounded-xl group  ">
      <div className={loaded  ? "" : "hidden"}>
          <Star explorePage={'explorePage'} rating={explore?.vote_average} />
      </div>
      <div className="relative rounded-xl bg-card-second w-full h-96">
          <div className={loaded  ? 'hidden' : ''}>
              <SkeletonLoader  />
          </div>
          <Link to={`/movie/${explore.id}`}>
              <LazyLoadImage
                  afterLoad={() => {
                      setLoaded(true)
                  }}
                  effect="blur"
                  className="object-center h-96  w-screen hover:opacity-95 rounded-md   "
                  src={`https://image.tmdb.org/t/p/w342/${
                      explore.poster_path ? explore.poster_path : fallBack
                  }`}
                  alt={explore?.title}
              />
          </Link>

          <div
              className={
                  loaded 
                      ? 'absolute  bottom-0 left-0 right-0 rounded-b-md bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 group-hover:py-6 duration-300'
                      : 'hidden '
              }
          >
              <h5 className="text-primary font-medium text-md font-roboto  line-clamp-1">
                  {addElipsisTitle}
              </h5>
          </div>
      </div>
  </div>} />
    
    )
}

export default MovieExplore
