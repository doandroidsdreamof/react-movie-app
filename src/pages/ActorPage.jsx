import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import data from '../../Data';
import ActorDetail from '../components/actor/ActorDetail.jsx';
import ActorMovies from '../components/actor/ActorMovies.jsx';
import ActorLayout from '../components/layouts/ActorLayout.jsx';
import SideNav from '../components/navbar/SideNav.jsx';
import { MOVIE_DB } from '../constants/endpoints';

function ActorPage() {
  const { person_id } = useParams();
  const [actor, setActor] = useState([]);
  //* Fetch data based on slug id //
  const urlBase = `${MOVIE_DB.PERSON}${person_id}?`;

  useEffect(() => {
    fetch(urlBase + data.requestPeople)
      .then((res) => res.json())
      .then((get) => setActor(get))
      .catch((err) => {
        console.error(err);
      });
  }, [person_id]);

  return (
    <ActorLayout
      sideNav={<SideNav />}
      actorDetail={<ActorDetail actorDetail={actor} />}
      actorMovies={<ActorMovies />}
    />
  );
}

export default ActorPage;
