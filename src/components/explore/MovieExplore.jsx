import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

import fallBack from '../../assets/image/fallback-image.png'
import Star from '../rates/CardStar.jsx'

import CardAnimation from './CardAnimation.jsx'
import SkeletonLoader from './SkeletonLoader.jsx'

import 'react-lazy-load-image-component/src/effects/blur.css'

function MovieExplore({ explore }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {}, [explore])

  const addElipsisTitle =
    explore?.title.length > 22 ? `${explore?.title.substring(0, 22)}...` : explore?.title

  return (
    <CardAnimation
      cards={
        <div className="relative cursor-pointer   justify-center    max-h-80 w-full  bg-card-second shadow-xl rounded-xl group  ">
          <div className={loaded ? '' : 'hidden'}>
            <Star explorePage="explorePage" rating={explore?.vote_average} />
          </div>
          <div className="relative rounded-xl bg-card-second w-full h-full">
            <div className={loaded ? 'hidden' : ''}>
              <SkeletonLoader />
            </div>
            <Link to={`/movie/${explore.id}`}>
              <LazyLoadImage
                afterLoad={() => {
                  setLoaded(true)
                }}
                effect="blur"
                className="object-cover h-80   w-screen  hover:opacity-95 rounded-md   "
                src={
                  explore.poster_path
                    ? `https://image.tmdb.org/t/p/w342/${explore.poster_path}`
                    : fallBack
                }
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
        </div>
      }
    />
  )
}

export default MovieExplore
