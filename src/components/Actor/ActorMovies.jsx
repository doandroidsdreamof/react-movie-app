import React, { useEffect, useState } from 'react'
import data from '../../../Data'
import { useParams, Link } from 'react-router-dom'
import fallBackImage from '../../assets/image/fallback-image.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ActorMovies = () => {
    let { person_id } = useParams()
    let urlBase = `https://api.themoviedb.org/3/person/${person_id}/movie_credits?`

    const [actorMovies, setActorMovies] = useState([])

    useEffect(() => {
        fetch(urlBase + data.requestActorMovies)
            .then((res) => res.json())
            .then((get) => setActorMovies(get.cast))
            .catch((err) => {
                console.error(err)
            })
    }, [person_id])


    return (
        <>
            {actorMovies.map((items, i) => (
                <Link className=' w-fit ' to={`/movie/${items?.id}`}>
                    <div key={i} className=" w-64   bg-card-second h-60 rounded-md duration-200 ease-in hover:animate-pulse">
                        <LazyLoadImage
                            className=" aspect-video  rounded-sm  rounded-t-md h-fit w-full object-cover  cursor-pointer"
                            src={
                                items.backdrop_path
                                    ? `https://image.tmdb.org/t/p/w500/${items.backdrop_path}`
                                    : fallBackImage
                            }
                            alt={items.original_title}
                        />
                        <div className="card-body">
                            <span className=" font-roboto text-sm ">
                                {items.title
                                    ? items.title.length > 20
                                        ? items.title.substring(0, 20) + '...'
                                        : items.title
                                    : ''}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default ActorMovies
