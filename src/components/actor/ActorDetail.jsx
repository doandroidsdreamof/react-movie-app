import React from 'react';
//* Third-party *//
import ReactReadMoreReadLess from 'react-read-more-read-less';

//* Local imports *//
import fallBackImage from '../../assets/image/fallback-image.png';
import ActorBirthDetail from './ActorBirthDetail.jsx';

function ActorDetail({ actorDetail }) {
  const imagePath = `https://image.tmdb.org/t/p/w500/${actorDetail.profile_path}`;

  return (
    <>
      <img
        className=" mx-auto md:mx-0  md:mt-0 rounded-md lg:h-full max-h-96 md:max-h-full w-full object-cover p-4 md:p-0 md:object-contain md:w-auto "
        src={actorDetail.profile_path ? imagePath : fallBackImage}
        alt={actorDetail.name}
      />

      <div className="flex   flex-col  gap-y-4 overflow-auto   p-0 md:pt-0 md:p-5 w-full ">
        <h1 className="text-2xl text-gray-900 dark:text-gray-100 font-roboto font-medium  text-left uppercase px-3 md:px-0">
          {actorDetail.name ? actorDetail.name : ''}
        </h1>
        <p className="text-gray-700 dark:text-gray-400font-roboto text-xl mb-1 t text-left px-3 md:px-0">
          Biography
        </p>
        <p className="text-gray-600  dark:text-gray-400 font-roboto text-xs md:text-sm leading-4 md:leading-1 lg:max-w-onehundred max-w-none lg:pr-4 md:pr-0  text-justify  px-3 md:px-0">
          <ReactReadMoreReadLess
            charLimit={950}
            readMoreText="Read more ▼"
            readLessText="Read less ▲"
            readMoreStyle={{
              color: 'hsl(226, 100%, 66%)',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: "'Roboto', sans-serif",
            }}
            readLessStyle={{
              color: 'hsl(226, 100%, 66%)',
              cursor: 'pointer',
              fontSize: '12px',
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            {actorDetail.biography ? actorDetail.biography : ''}
          </ReactReadMoreReadLess>
        </p>
        {actorDetail.birthday && actorDetail.place_of_birth ? (
          <ActorBirthDetail
            birthday={actorDetail.birthday}
            placeOfBirth={actorDetail.place_of_birth}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default ActorDetail;
