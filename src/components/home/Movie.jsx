import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

import fallBack from '../../assets/image/fallback-image.png'
import SpinLoader from '../common/SpinLoader.jsx'

import 'react-lazy-load-image-component/src/effects/opacity.css'

function Movie({ data }) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {}, [])

    return (
      <div className="flex justify-center   h-full " >
        <div
                className={
                    loaded
                        ? 'hidden '
                        : ' absolute m-auto  flex justify-center z-50 self-center w-full '
                }
            >
          <SpinLoader />
        </div>
        <Link to={`/movie/${data?.id}`}>
          <LazyLoadImage
                    afterLoad={() => {
                        setLoaded(true)
                    }}
                    effect="opacity"
                    className="object-fill hover:opacity-95 rounded-md   "
                    src={`https://image.tmdb.org/t/p/w342/${
                        data.poster_path ? data.poster_path : fallBack
                    }`}
                    alt={data?.title}
                />
        </Link>
      </div>
    )
}
export default Movie
