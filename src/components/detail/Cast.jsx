import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../../../Data';
import { useState, useEffect } from 'react';
import fallBack from '../../assets/image/fallback-image.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MOVIE_DB } from '../../constants/endpoints';

const Cast = () => {
  let { id } = useParams();
  console.log('🚀 ~ Cast ~ id:', id);
  const [casts, setCasts] = useState([]);

  const BASE_URL = `${MOVIE_DB.MOVIE}${id}/`;
  const IMAGE_PATH = MOVIE_DB.IMAGE_PATH;

  useEffect(() => {
    fetch(BASE_URL + data.requestCast)
      .then((res) => res.json())
      .then((get) => setCasts(get.cast))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <>
      {casts?.map((actor, i) => (
        <Link
          to={`/actor/${actor.id}`}
          className="flex items-center relative bg-gray-100 dark:bg-card-second p-3 w-full  rounded-lg overflow-hidden shadow  cursor-pointer duration-200 ease-in hover:animate-pulse"
        >
          <LazyLoadImage
            key={i}
            className="lg:w-16 lg:h-16  md:w-12 md:h-12  w-8 h-8  rounded-full object-cover bg-gray-100 text-[10px] text-center flex justify-center"
            src={actor.profile_path ? `${IMAGE_PATH}${actor?.profile_path}` : fallBack}
            alt={actor?.original_name}
          />
          <div className="ml-3">
            <p className="font-medium text-gray-800 dark:text-gray-100">{actor?.original_name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400   line-clamp-1">
              Character name{' '}
              {actor?.character.length > 20
                ? actor?.character.substring(0, 20) + '...'
                : actor?.character}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cast;
