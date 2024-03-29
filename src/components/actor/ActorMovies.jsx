import React, { useEffect, useState } from 'react';
//* Third-party *//
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useParams } from 'react-router-dom';

//* Local imports *//
import data from '../../../Data';
import fallBackImage from '../../assets/image/fallback-image.png';

function ActorMovies() {
  const { person_id } = useParams();
  const urlBase = `https://api.themoviedb.org/3/person/${person_id}/movie_credits?`;

  const [actorMovies, setActorMovies] = useState([]);

  useEffect(() => {
    fetch(urlBase + data.requestActorMovies)
      .then((res) => res.json())
      .then((get) => setActorMovies(get.cast))
      .catch((err) => {
        console.error(err);
      });
  }, [person_id]);

  return (
    <>
      {actorMovies.map((items, i) => (
        <Link className=" w-fit " to={`/movie/${items?.id}`}>
          <div
            key={i}
            className=" w-64 bg-gray-100 dark:bg-card-color border dark:border-none shadow-md  dak:bg-card-second h-60 rounded-md duration-200 ease-in hover:animate-pulse"
          >
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
                {/* trim text if it is too long */}
                {items.title
                  ? items.title.length > 20
                    ? `${items.title.substring(0, 20)}...`
                    : items.title
                  : ''}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ActorMovies;
